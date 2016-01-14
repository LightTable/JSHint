(ns lt.plugins.jshint
  (:require [lt.object :as object]
            [lt.objs.plugins :as plugins]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.util.dom :as dom]
            [lt.objs.thread :as thread])
  (:require-macros [lt.macros :refer [behavior defui background]]))

(def jshint-path (plugins/local-module "JSHint" "jshint"))

(def errors (background (fn [obj-id jshint-path code opts globals]
                          (let [jshint (.-JSHINT (js/require jshint-path))]
                            (jshint code
                                    (when opts (clj->js opts))
                                    (when globals (clj->js (zipmap globals (repeat true)))))
                            (->> (js->clj (.-errors jshint) :keywordize-keys true)
                                 (raise obj-id :hinted))))))


(defui gutter-marker [hints]
  [:div.jshint-gutter-marker
   [:div.hint-gutter-dot]
   [:div.hints.cm-variable
    [:ul
     (map (fn [h]
            [:li
             (str "- " h)]) hints)]]]
  :mouseover (fn [e]
               (if-let [target (dom/next (.-target e))]
                 (dom/set-css target {:display :block})))
  :mouseout (fn [e]
               (if-let [target (dom/next (.-target e))]
                 (dom/set-css target {:display :none}))))

(defui mark [errors spacing]
  [:div.hintwrapper
   [:span.spacer spacing]
   [:ul {:class "jshinterrors"}
    (for [e errors]
      [:li (:reason e (:raw e))])]])

(defn ->spacing [text]
  (when text
    (-> (re-seq #"^\s+" text)
        (first))))

(behavior ::gutter-hints
          :triggers #{:hinted}
          :reaction (fn [this hints]
                      (editor/operation (editor/->cm-ed this)
                                        (fn []
                                          (let [hints-by-line (group-by :line (filter identity hints))
                                                markers (map (fn [[line hs]]
                                                               {:line (dec line) :mark (gutter-marker (map #(:reason %) hs))}) hints-by-line)]

                                            (editor/add-gutter this "jshint-gutter" 8)
                                            (.clearGutter (editor/->cm-ed this) "jshint-gutter")
                                            (doall (map (fn [marker]
                                                          (.setGutterMarker (editor/->cm-ed this) (:line marker) "jshint-gutter" (:mark marker))) markers)))))))

(behavior ::inline-hints
          :triggers #{:hinted}
          :reaction (fn [this hints]
                      (editor/operation (editor/->cm-ed this)
                                        (fn []
                                          (let [prev (.getScrollInfo (editor/->cm-ed this))]
                                            (doseq [hint (:jshint @this)]
                                              (editor/remove-line-widget this hint))
                                            (object/merge! this {:jshint (doall (for [[line es] (group-by :line (filter identity hints))]
                                                                                  (editor/line-widget this (dec line) (mark es (->spacing (editor/line this (dec line)))))))})
                                            ;;Ensure scroll position is the same as it was when we started
                                            (.scrollTo (editor/->cm-ed this) (.-left prev) (.-top prev)))))))

(behavior ::on-change
          :debounce 750
          :type :user
          :desc "JSHint: Run JSHint on change"
          :triggers #{:change}
          :reaction (fn [this]
                      (errors this jshint-path (editor/->val this) (::jshint-options @this) (::jshint-globals @this))))

(behavior ::on-save
          :triggers #{:save}
          :type :user
          :desc "JSHint: Run JSHint on save"
          :reaction (fn [this]
                      (errors this jshint-path (editor/->val this) (::jshint-options @this) (::jshint-globals @this))))

(behavior ::jshint-options
          :triggers #{:object.instant}
          :type :user
          :desc "JSHint: Set JSHint options"
          :params [{:label "options"
                    :example "{:maxparams 2}"
                    :type :clj}]
          :reaction (fn [this opts]
                      (object/merge! this {::jshint-options opts})))

(behavior ::jshint-globals
          :triggers #{:object.instant}
          :type :user
          :desc "JSHint: Set JSHint global variables defined elsewhere"
          :params [{:label "globals"
                    :example "#{:jQuery :Backbone}"
                    :type :clj}]
          :reaction (fn [this globals]
                      (object/merge! this {::jshint-globals globals})))


(cmd/command {:command :jshint.run
              :desc "JSHint: Run jshint on current editor"
              :exec (fn [this]
                      (when-let [ed (pool/last-active)]
                        (errors ed
                                jshint-path
                                (editor/->val ed)
                                (::jshint-options @ed)
                                (::jshint-globals @ed))))})

