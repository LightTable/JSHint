if(!lt.util.load.provided_QMARK_('lt.plugins.jshint')) {
goog.provide('lt.plugins.jshint');
goog.require('cljs.core');
goog.require('lt.objs.thread');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.thread');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');

lt.plugins.jshint.jshint_path = lt.objs.files.join.call(null,lt.objs.plugins._STAR_plugin_dir_STAR_,"node_modules/jshint");

lt.plugins.jshint.errors = lt.objs.thread.thread_STAR_.call(null,(function tfun7223(){var orig__7212__auto__ = argsArray(arguments);var msg__7213__auto__ = orig__7212__auto__.shift();var args__7214__auto__ = orig__7212__auto__.map(cljs.reader.read_string);var raise = ((function (orig__7212__auto__,msg__7213__auto__,args__7214__auto__){
return (function (obj__7215__auto__,k__7216__auto__,v__7217__auto__){return _send(obj__7215__auto__,k__7216__auto__,cljs.core.pr_str.call(null,v__7217__auto__),"clj");
});})(orig__7212__auto__,msg__7213__auto__,args__7214__auto__))
;args__7214__auto__.unshift(msg__7213__auto__.obj);
return (function (obj_id,jshint_path,code,opts){var jshint = require(jshint_path).JSHINT;jshint.call(null,code,(cljs.core.truth_(opts)?cljs.core.clj__GT_js.call(null,opts):null));
return raise.call(null,obj_id,new cljs.core.Keyword(null,"hinted","hinted",4091697368),cljs.core.js__GT_clj.call(null,jshint.errors,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
}).apply(null,args__7214__auto__);
}));

lt.plugins.jshint.mark = (function mark(errors,spacing){var e__7139__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hintwrapper","div.hintwrapper",570322369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.spacer","span.spacer",4763675330),spacing], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"jshinterrors"], null),(function (){var iter__6497__auto__ = (function iter__7234(s__7235){return (new cljs.core.LazySeq(null,(function (){var s__7235__$1 = s__7235;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7235__$1);if(temp__4092__auto__)
{var s__7235__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7235__$2))
{var c__6495__auto__ = cljs.core.chunk_first.call(null,s__7235__$2);var size__6496__auto__ = cljs.core.count.call(null,c__6495__auto__);var b__7237 = cljs.core.chunk_buffer.call(null,size__6496__auto__);if((function (){var i__7236 = 0;while(true){
if((i__7236 < size__6496__auto__))
{var e = cljs.core._nth.call(null,c__6495__auto__,i__7236);cljs.core.chunk_append.call(null,b__7237,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"raw","raw",1014016922).cljs$core$IFn$_invoke$arity$1(e))], null));
{
var G__7266 = (i__7236 + 1);
i__7236 = G__7266;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7237),iter__7234.call(null,cljs.core.chunk_rest.call(null,s__7235__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7237),null);
}
} else
{var e = cljs.core.first.call(null,s__7235__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"raw","raw",1014016922).cljs$core$IFn$_invoke$arity$1(e))], null),iter__7234.call(null,cljs.core.rest.call(null,s__7235__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__6497__auto__.call(null,errors);
})()], null)], null));var seq__7238_7267 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7239_7268 = null;var count__7240_7269 = 0;var i__7241_7270 = 0;while(true){
if((i__7241_7270 < count__7240_7269))
{var vec__7242_7271 = cljs.core._nth.call(null,chunk__7239_7268,i__7241_7270);var ev__7140__auto___7272 = cljs.core.nth.call(null,vec__7242_7271,0,null);var func__7141__auto___7273 = cljs.core.nth.call(null,vec__7242_7271,1,null);lt.util.dom.on.call(null,e__7139__auto__,ev__7140__auto___7272,func__7141__auto___7273);
{
var G__7274 = seq__7238_7267;
var G__7275 = chunk__7239_7268;
var G__7276 = count__7240_7269;
var G__7277 = (i__7241_7270 + 1);
seq__7238_7267 = G__7274;
chunk__7239_7268 = G__7275;
count__7240_7269 = G__7276;
i__7241_7270 = G__7277;
continue;
}
} else
{var temp__4092__auto___7278 = cljs.core.seq.call(null,seq__7238_7267);if(temp__4092__auto___7278)
{var seq__7238_7279__$1 = temp__4092__auto___7278;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7238_7279__$1))
{var c__6528__auto___7280 = cljs.core.chunk_first.call(null,seq__7238_7279__$1);{
var G__7281 = cljs.core.chunk_rest.call(null,seq__7238_7279__$1);
var G__7282 = c__6528__auto___7280;
var G__7283 = cljs.core.count.call(null,c__6528__auto___7280);
var G__7284 = 0;
seq__7238_7267 = G__7281;
chunk__7239_7268 = G__7282;
count__7240_7269 = G__7283;
i__7241_7270 = G__7284;
continue;
}
} else
{var vec__7243_7285 = cljs.core.first.call(null,seq__7238_7279__$1);var ev__7140__auto___7286 = cljs.core.nth.call(null,vec__7243_7285,0,null);var func__7141__auto___7287 = cljs.core.nth.call(null,vec__7243_7285,1,null);lt.util.dom.on.call(null,e__7139__auto__,ev__7140__auto___7286,func__7141__auto___7287);
{
var G__7288 = cljs.core.next.call(null,seq__7238_7279__$1);
var G__7289 = null;
var G__7290 = 0;
var G__7291 = 0;
seq__7238_7267 = G__7288;
chunk__7239_7268 = G__7289;
count__7240_7269 = G__7290;
i__7241_7270 = G__7291;
continue;
}
}
} else
{}
}
break;
}
return e__7139__auto__;
});

lt.plugins.jshint.__GT_spacing = (function __GT_spacing(text){if(cljs.core.truth_(text))
{return cljs.core.first.call(null,cljs.core.re_seq.call(null,/^\s+/,text));
} else
{return null;
}
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","inline-hints","lt.plugins.jshint/inline-hints",2902595887),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hinted","hinted",4091697368),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,hints){return lt.objs.editor.operation.call(null,lt.objs.editor.__GT_cm_ed.call(null,this$),(function (){var prev = lt.objs.editor.__GT_cm_ed.call(null,this$).getScrollInfo();var seq__7244_7292 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"jshint","jshint",4158001858).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__7245_7293 = null;var count__7246_7294 = 0;var i__7247_7295 = 0;while(true){
if((i__7247_7295 < count__7246_7294))
{var hint_7296 = cljs.core._nth.call(null,chunk__7245_7293,i__7247_7295);lt.objs.editor.remove_line_widget.call(null,this$,hint_7296);
{
var G__7297 = seq__7244_7292;
var G__7298 = chunk__7245_7293;
var G__7299 = count__7246_7294;
var G__7300 = (i__7247_7295 + 1);
seq__7244_7292 = G__7297;
chunk__7245_7293 = G__7298;
count__7246_7294 = G__7299;
i__7247_7295 = G__7300;
continue;
}
} else
{var temp__4092__auto___7301 = cljs.core.seq.call(null,seq__7244_7292);if(temp__4092__auto___7301)
{var seq__7244_7302__$1 = temp__4092__auto___7301;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7244_7302__$1))
{var c__6528__auto___7303 = cljs.core.chunk_first.call(null,seq__7244_7302__$1);{
var G__7304 = cljs.core.chunk_rest.call(null,seq__7244_7302__$1);
var G__7305 = c__6528__auto___7303;
var G__7306 = cljs.core.count.call(null,c__6528__auto___7303);
var G__7307 = 0;
seq__7244_7292 = G__7304;
chunk__7245_7293 = G__7305;
count__7246_7294 = G__7306;
i__7247_7295 = G__7307;
continue;
}
} else
{var hint_7308 = cljs.core.first.call(null,seq__7244_7302__$1);lt.objs.editor.remove_line_widget.call(null,this$,hint_7308);
{
var G__7309 = cljs.core.next.call(null,seq__7244_7302__$1);
var G__7310 = null;
var G__7311 = 0;
var G__7312 = 0;
seq__7244_7292 = G__7309;
chunk__7245_7293 = G__7310;
count__7246_7294 = G__7311;
i__7247_7295 = G__7312;
continue;
}
}
} else
{}
}
break;
}
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jshint","jshint",4158001858),cljs.core.doall.call(null,(function (){var iter__6497__auto__ = (function iter__7248(s__7249){return (new cljs.core.LazySeq(null,(function (){var s__7249__$1 = s__7249;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7249__$1);if(temp__4092__auto__)
{var s__7249__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7249__$2))
{var c__6495__auto__ = cljs.core.chunk_first.call(null,s__7249__$2);var size__6496__auto__ = cljs.core.count.call(null,c__6495__auto__);var b__7251 = cljs.core.chunk_buffer.call(null,size__6496__auto__);if((function (){var i__7250 = 0;while(true){
if((i__7250 < size__6496__auto__))
{var vec__7254 = cljs.core._nth.call(null,c__6495__auto__,i__7250);var line = cljs.core.nth.call(null,vec__7254,0,null);var es = cljs.core.nth.call(null,vec__7254,1,null);cljs.core.chunk_append.call(null,b__7251,lt.objs.editor.line_widget.call(null,this$,(line - 1),lt.plugins.jshint.mark.call(null,es,lt.plugins.jshint.__GT_spacing.call(null,lt.objs.editor.line.call(null,this$,(line - 1))))));
{
var G__7313 = (i__7250 + 1);
i__7250 = G__7313;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7251),iter__7248.call(null,cljs.core.chunk_rest.call(null,s__7249__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7251),null);
}
} else
{var vec__7255 = cljs.core.first.call(null,s__7249__$2);var line = cljs.core.nth.call(null,vec__7255,0,null);var es = cljs.core.nth.call(null,vec__7255,1,null);return cljs.core.cons.call(null,lt.objs.editor.line_widget.call(null,this$,(line - 1),lt.plugins.jshint.mark.call(null,es,lt.plugins.jshint.__GT_spacing.call(null,lt.objs.editor.line.call(null,this$,(line - 1))))),iter__7248.call(null,cljs.core.rest.call(null,s__7249__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__6497__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"line","line",1017226086),cljs.core.filter.call(null,cljs.core.identity,hints)));
})())], null));
return lt.objs.editor.__GT_cm_ed.call(null,this$).scrollTo(prev.left,prev.top);
}));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","on-change","lt.plugins.jshint/on-change",3141528053),new cljs.core.Keyword(null,"debounce","debounce",1556599227),750,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run JSHint on change",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",3947235106),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.plugins.jshint.errors.call(null,this$,lt.plugins.jshint.jshint_path,lt.objs.editor.__GT_val.call(null,this$),new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","on-save","lt.plugins.jshint/on-save",1975791674),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save","save",1017427183),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run JSHint on save",new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.plugins.jshint.errors.call(null,this$,lt.plugins.jshint.jshint_path,lt.objs.editor.__GT_val.call(null,this$),new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Set JSHint options",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"options",new cljs.core.Keyword(null,"example","example",3985900764),"{:maxparams 2}",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"clj","clj",1014002835)], null)], null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,opts){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920),opts], null));
}));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"jshint.run","jshint.run",2779549279),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run jshint on current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (this$){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.jshint.errors.call(null,ed,lt.plugins.jshint.jshint_path,lt.objs.editor.__GT_val.call(null,ed),new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
} else
{return null;
}
})], null));

}

//# sourceMappingURL=