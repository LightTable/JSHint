goog.provide('lt.plugins.jshint');
goog.require('cljs.core');
goog.require('lt.objs.thread');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.thread');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');

lt.plugins.jshint.errors = lt.objs.thread.thread_STAR_.call(null,(function tfun5799(){var orig__5697__auto__ = argsArray(arguments);var msg__5698__auto__ = orig__5697__auto__.shift();var args__5699__auto__ = orig__5697__auto__.map(cljs.reader.read_string);var raise = ((function (orig__5697__auto__,msg__5698__auto__,args__5699__auto__){
return (function (obj__5700__auto__,k__5701__auto__,v__5702__auto__){return _send(obj__5700__auto__,k__5701__auto__,cljs.core.pr_str.call(null,v__5702__auto__),"clj");
});})(orig__5697__auto__,msg__5698__auto__,args__5699__auto__))
;args__5699__auto__.unshift(msg__5698__auto__.obj);
return (function (obj_id,code,opts){var jshint = require([cljs.core.str(ltpath),cljs.core.str("/plugins/jshint/node_modules/jshint")].join('')).JSHINT;jshint.call(null,code,(cljs.core.truth_(opts)?cljs.core.clj__GT_js.call(null,opts):null));
return raise.call(null,obj_id,new cljs.core.Keyword(null,"hinted","hinted",4091697368),cljs.core.js__GT_clj.call(null,jshint.errors,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
}).apply(null,args__5699__auto__);
}));

lt.plugins.jshint.mark = (function mark(errors,spacing){var e__5624__auto__ = crate.core.html.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.hintwrapper","div.hintwrapper",570322369),cljs.core.with_meta(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span.spacer","span.spacer",4763675330),spacing], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),17,new cljs.core.Keyword(null,"end-column","end-column",3799845882),25], true)),cljs.core.with_meta(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.with_meta(cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"jshinterrors"], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),18,new cljs.core.Keyword(null,"end-column","end-column",3799845882),31], true)),(function (){var iter__5190__auto__ = (function iter__5810(s__5811){return (new cljs.core.LazySeq(null,(function (){var s__5811__$1 = s__5811;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5811__$1);if(temp__4092__auto__)
{var s__5811__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5811__$2))
{var c__5188__auto__ = cljs.core.chunk_first.call(null,s__5811__$2);var size__5189__auto__ = cljs.core.count.call(null,c__5188__auto__);var b__5813 = cljs.core.chunk_buffer.call(null,size__5189__auto__);if((function (){var i__5812 = 0;while(true){
if((i__5812 < size__5189__auto__))
{var e = cljs.core._nth.call(null,c__5188__auto__,i__5812);cljs.core.chunk_append.call(null,b__5813,cljs.core.with_meta(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"reason","reason",4373906870).call(null,e,new cljs.core.Keyword(null,"raw","raw",1014016922).call(null,e))], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),20,new cljs.core.Keyword(null,"end-column","end-column",3799845882),32], true)));
{
var G__5832 = (i__5812 + 1);
i__5812 = G__5832;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5813),iter__5810.call(null,cljs.core.chunk_rest.call(null,s__5811__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5813),null);
}
} else
{var e = cljs.core.first.call(null,s__5811__$2);return cljs.core.cons.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"reason","reason",4373906870).call(null,e,new cljs.core.Keyword(null,"raw","raw",1014016922).call(null,e))], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),20,new cljs.core.Keyword(null,"end-column","end-column",3799845882),32], true)),iter__5810.call(null,cljs.core.rest.call(null,s__5811__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5190__auto__.call(null,errors);
})()], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),20,new cljs.core.Keyword(null,"end-column","end-column",3799845882),34], true))], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),20,new cljs.core.Keyword(null,"end-column","end-column",3799845882),35], true)));var seq__5814_5833 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__5815_5834 = null;var count__5816_5835 = 0;var i__5817_5836 = 0;while(true){
if((i__5817_5836 < count__5816_5835))
{var vec__5818_5837 = cljs.core._nth.call(null,chunk__5815_5834,i__5817_5836);var ev__5625__auto___5838 = cljs.core.nth.call(null,vec__5818_5837,0,null);var func__5626__auto___5839 = cljs.core.nth.call(null,vec__5818_5837,1,null);lt.util.dom.on.call(null,e__5624__auto__,ev__5625__auto___5838,func__5626__auto___5839);
{
var G__5840 = seq__5814_5833;
var G__5841 = chunk__5815_5834;
var G__5842 = count__5816_5835;
var G__5843 = (i__5817_5836 + 1);
seq__5814_5833 = G__5840;
chunk__5815_5834 = G__5841;
count__5816_5835 = G__5842;
i__5817_5836 = G__5843;
continue;
}
} else
{var temp__4092__auto___5844 = cljs.core.seq.call(null,seq__5814_5833);if(temp__4092__auto___5844)
{var seq__5814_5845__$1 = temp__4092__auto___5844;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5814_5845__$1))
{var c__5221__auto___5846 = cljs.core.chunk_first.call(null,seq__5814_5845__$1);{
var G__5847 = cljs.core.chunk_rest.call(null,seq__5814_5845__$1);
var G__5848 = c__5221__auto___5846;
var G__5849 = cljs.core.count.call(null,c__5221__auto___5846);
var G__5850 = 0;
seq__5814_5833 = G__5847;
chunk__5815_5834 = G__5848;
count__5816_5835 = G__5849;
i__5817_5836 = G__5850;
continue;
}
} else
{var vec__5819_5851 = cljs.core.first.call(null,seq__5814_5845__$1);var ev__5625__auto___5852 = cljs.core.nth.call(null,vec__5819_5851,0,null);var func__5626__auto___5853 = cljs.core.nth.call(null,vec__5819_5851,1,null);lt.util.dom.on.call(null,e__5624__auto__,ev__5625__auto___5852,func__5626__auto___5853);
{
var G__5854 = cljs.core.next.call(null,seq__5814_5845__$1);
var G__5855 = null;
var G__5856 = 0;
var G__5857 = 0;
seq__5814_5833 = G__5854;
chunk__5815_5834 = G__5855;
count__5816_5835 = G__5856;
i__5817_5836 = G__5857;
continue;
}
}
} else
{}
}
break;
}
return e__5624__auto__;
});

lt.plugins.jshint.__GT_spacing = (function __GT_spacing(text){if(cljs.core.truth_(text))
{return cljs.core.first.call(null,cljs.core.re_seq.call(null,/^\s+/,text));
} else
{return null;
}
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","inline-hints","lt.plugins.jshint/inline-hints",2902595887),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.with_meta(cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"hinted","hinted",4091697368),null], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),28,new cljs.core.Keyword(null,"end-column","end-column",3799845882),38], true)),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,hints){return lt.objs.editor.operation.call(null,lt.objs.editor.__GT_cm_ed.call(null,this$),(function (){var prev = lt.objs.editor.__GT_cm_ed.call(null,this$).getScrollInfo();var seq__5820_5858 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"jshint","jshint",4158001858).call(null,cljs.core.deref.call(null,this$)));var chunk__5821_5859 = null;var count__5822_5860 = 0;var i__5823_5861 = 0;while(true){
if((i__5823_5861 < count__5822_5860))
{var hint_5862 = cljs.core._nth.call(null,chunk__5821_5859,i__5823_5861);lt.objs.editor.remove_line_widget.call(null,this$,hint_5862);
{
var G__5863 = seq__5820_5858;
var G__5864 = chunk__5821_5859;
var G__5865 = count__5822_5860;
var G__5866 = (i__5823_5861 + 1);
seq__5820_5858 = G__5863;
chunk__5821_5859 = G__5864;
count__5822_5860 = G__5865;
i__5823_5861 = G__5866;
continue;
}
} else
{var temp__4092__auto___5867 = cljs.core.seq.call(null,seq__5820_5858);if(temp__4092__auto___5867)
{var seq__5820_5868__$1 = temp__4092__auto___5867;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5820_5868__$1))
{var c__5221__auto___5869 = cljs.core.chunk_first.call(null,seq__5820_5868__$1);{
var G__5870 = cljs.core.chunk_rest.call(null,seq__5820_5868__$1);
var G__5871 = c__5221__auto___5869;
var G__5872 = cljs.core.count.call(null,c__5221__auto___5869);
var G__5873 = 0;
seq__5820_5858 = G__5870;
chunk__5821_5859 = G__5871;
count__5822_5860 = G__5872;
i__5823_5861 = G__5873;
continue;
}
} else
{var hint_5874 = cljs.core.first.call(null,seq__5820_5868__$1);lt.objs.editor.remove_line_widget.call(null,this$,hint_5874);
{
var G__5875 = cljs.core.next.call(null,seq__5820_5868__$1);
var G__5876 = null;
var G__5877 = 0;
var G__5878 = 0;
seq__5820_5858 = G__5875;
chunk__5821_5859 = G__5876;
count__5822_5860 = G__5877;
i__5823_5861 = G__5878;
continue;
}
}
} else
{}
}
break;
}
lt.object.merge_BANG_.call(null,this$,cljs.core.with_meta(cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"jshint","jshint",4158001858),cljs.core.doall.call(null,(function (){var iter__5190__auto__ = (function iter__5824(s__5825){return (new cljs.core.LazySeq(null,(function (){var s__5825__$1 = s__5825;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5825__$1);if(temp__4092__auto__)
{var s__5825__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5825__$2))
{var c__5188__auto__ = cljs.core.chunk_first.call(null,s__5825__$2);var size__5189__auto__ = cljs.core.count.call(null,c__5188__auto__);var b__5827 = cljs.core.chunk_buffer.call(null,size__5189__auto__);if((function (){var i__5826 = 0;while(true){
if((i__5826 < size__5189__auto__))
{var vec__5830 = cljs.core._nth.call(null,c__5188__auto__,i__5826);var line = cljs.core.nth.call(null,vec__5830,0,null);var es = cljs.core.nth.call(null,vec__5830,1,null);cljs.core.chunk_append.call(null,b__5827,lt.objs.editor.line_widget.call(null,this$,(line - 1),lt.plugins.jshint.mark.call(null,es,lt.plugins.jshint.__GT_spacing.call(null,lt.objs.editor.line.call(null,this$,(line - 1))))));
{
var G__5879 = (i__5826 + 1);
i__5826 = G__5879;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5827),iter__5824.call(null,cljs.core.chunk_rest.call(null,s__5825__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5827),null);
}
} else
{var vec__5831 = cljs.core.first.call(null,s__5825__$2);var line = cljs.core.nth.call(null,vec__5831,0,null);var es = cljs.core.nth.call(null,vec__5831,1,null);return cljs.core.cons.call(null,lt.objs.editor.line_widget.call(null,this$,(line - 1),lt.plugins.jshint.mark.call(null,es,lt.plugins.jshint.__GT_spacing.call(null,lt.objs.editor.line.call(null,this$,(line - 1))))),iter__5824.call(null,cljs.core.rest.call(null,s__5825__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5190__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"line","line",1017226086),cljs.core.filter.call(null,cljs.core.identity,hints)));
})())], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),36,new cljs.core.Keyword(null,"end-column","end-column",3799845882),181], true)));
return lt.objs.editor.__GT_cm_ed.call(null,this$).scrollTo(prev.left,prev.top);
}));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","on-change","lt.plugins.jshint/on-change",3141528053),new cljs.core.Keyword(null,"debounce","debounce",1556599227),750,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run JSHint on change",new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.with_meta(cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"change","change",3947235106),null], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),44,new cljs.core.Keyword(null,"end-column","end-column",3799845882),38], true)),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.plugins.jshint.errors.call(null,this$,lt.objs.editor.__GT_val.call(null,this$),new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920).call(null,cljs.core.deref.call(null,this$)));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","on-save","lt.plugins.jshint/on-save",1975791674),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.with_meta(cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"save","save",1017427183),null], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),49,new cljs.core.Keyword(null,"end-column","end-column",3799845882),36], true)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run JSHint on save",new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.plugins.jshint.errors.call(null,this$,lt.objs.editor.__GT_val.call(null,this$),new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920).call(null,cljs.core.deref.call(null,this$)));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.with_meta(cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),56,new cljs.core.Keyword(null,"end-column","end-column",3799845882),46], true)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Set JSHint options",new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.with_meta(cljs.core.PersistentVector.fromArray([cljs.core.with_meta(cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"label","label",1116631654),"options",new cljs.core.Keyword(null,"example","example",3985900764),"{:maxparams 2}",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"clj","clj",1014002835)], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),61,new cljs.core.Keyword(null,"end-column","end-column",3799845882),39], true))], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),61,new cljs.core.Keyword(null,"end-column","end-column",3799845882),40], true)),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,opts){return lt.object.merge_BANG_.call(null,this$,cljs.core.with_meta(cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920),opts], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),63,new cljs.core.Keyword(null,"end-column","end-column",3799845882),73], true)));
}));

lt.objs.command.command.call(null,cljs.core.with_meta(cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"jshint.run","jshint.run",2779549279),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run jshint on current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (this$){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.jshint.errors.call(null,ed,lt.objs.editor.__GT_val.call(null,ed),new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920).call(null,cljs.core.deref.call(null,ed)));
} else
{return null;
}
})], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),69,new cljs.core.Keyword(null,"end-column","end-column",3799845882),79], true)));


//# sourceMappingURL=
