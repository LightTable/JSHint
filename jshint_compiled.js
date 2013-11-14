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

lt.plugins.jshint.errors = lt.objs.thread.thread_STAR_.call(null,(function tfun7428(){var orig__7212__auto__ = argsArray(arguments);var msg__7213__auto__ = orig__7212__auto__.shift();var args__7214__auto__ = orig__7212__auto__.map(cljs.reader.read_string);var raise = ((function (orig__7212__auto__,msg__7213__auto__,args__7214__auto__){
return (function (obj__7215__auto__,k__7216__auto__,v__7217__auto__){return _send(obj__7215__auto__,k__7216__auto__,cljs.core.pr_str.call(null,v__7217__auto__),"clj");
});})(orig__7212__auto__,msg__7213__auto__,args__7214__auto__))
;args__7214__auto__.unshift(msg__7213__auto__.obj);
return (function (obj_id,jshint_path,code,opts,globals){var jshint = require(jshint_path).JSHINT;jshint.call(null,code,(cljs.core.truth_(opts)?cljs.core.clj__GT_js.call(null,opts):null),(cljs.core.truth_(globals)?cljs.core.clj__GT_js.call(null,cljs.core.zipmap.call(null,globals,cljs.core.repeat.call(null,true))):null));
return raise.call(null,obj_id,new cljs.core.Keyword(null,"hinted","hinted",4091697368),cljs.core.js__GT_clj.call(null,jshint.errors,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
}).apply(null,args__7214__auto__);
}));

lt.plugins.jshint.mark = (function mark(errors,spacing){var e__7139__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hintwrapper","div.hintwrapper",570322369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.spacer","span.spacer",4763675330),spacing], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"jshinterrors"], null),(function (){var iter__6497__auto__ = (function iter__7439(s__7440){return (new cljs.core.LazySeq(null,(function (){var s__7440__$1 = s__7440;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7440__$1);if(temp__4092__auto__)
{var s__7440__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7440__$2))
{var c__6495__auto__ = cljs.core.chunk_first.call(null,s__7440__$2);var size__6496__auto__ = cljs.core.count.call(null,c__6495__auto__);var b__7442 = cljs.core.chunk_buffer.call(null,size__6496__auto__);if((function (){var i__7441 = 0;while(true){
if((i__7441 < size__6496__auto__))
{var e = cljs.core._nth.call(null,c__6495__auto__,i__7441);cljs.core.chunk_append.call(null,b__7442,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"raw","raw",1014016922).cljs$core$IFn$_invoke$arity$1(e))], null));
{
var G__7461 = (i__7441 + 1);
i__7441 = G__7461;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7442),iter__7439.call(null,cljs.core.chunk_rest.call(null,s__7440__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7442),null);
}
} else
{var e = cljs.core.first.call(null,s__7440__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"raw","raw",1014016922).cljs$core$IFn$_invoke$arity$1(e))], null),iter__7439.call(null,cljs.core.rest.call(null,s__7440__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__6497__auto__.call(null,errors);
})()], null)], null));var seq__7443_7462 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7444_7463 = null;var count__7445_7464 = 0;var i__7446_7465 = 0;while(true){
if((i__7446_7465 < count__7445_7464))
{var vec__7447_7466 = cljs.core._nth.call(null,chunk__7444_7463,i__7446_7465);var ev__7140__auto___7467 = cljs.core.nth.call(null,vec__7447_7466,0,null);var func__7141__auto___7468 = cljs.core.nth.call(null,vec__7447_7466,1,null);lt.util.dom.on.call(null,e__7139__auto__,ev__7140__auto___7467,func__7141__auto___7468);
{
var G__7469 = seq__7443_7462;
var G__7470 = chunk__7444_7463;
var G__7471 = count__7445_7464;
var G__7472 = (i__7446_7465 + 1);
seq__7443_7462 = G__7469;
chunk__7444_7463 = G__7470;
count__7445_7464 = G__7471;
i__7446_7465 = G__7472;
continue;
}
} else
{var temp__4092__auto___7473 = cljs.core.seq.call(null,seq__7443_7462);if(temp__4092__auto___7473)
{var seq__7443_7474__$1 = temp__4092__auto___7473;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7443_7474__$1))
{var c__6528__auto___7475 = cljs.core.chunk_first.call(null,seq__7443_7474__$1);{
var G__7476 = cljs.core.chunk_rest.call(null,seq__7443_7474__$1);
var G__7477 = c__6528__auto___7475;
var G__7478 = cljs.core.count.call(null,c__6528__auto___7475);
var G__7479 = 0;
seq__7443_7462 = G__7476;
chunk__7444_7463 = G__7477;
count__7445_7464 = G__7478;
i__7446_7465 = G__7479;
continue;
}
} else
{var vec__7448_7480 = cljs.core.first.call(null,seq__7443_7474__$1);var ev__7140__auto___7481 = cljs.core.nth.call(null,vec__7448_7480,0,null);var func__7141__auto___7482 = cljs.core.nth.call(null,vec__7448_7480,1,null);lt.util.dom.on.call(null,e__7139__auto__,ev__7140__auto___7481,func__7141__auto___7482);
{
var G__7483 = cljs.core.next.call(null,seq__7443_7474__$1);
var G__7484 = null;
var G__7485 = 0;
var G__7486 = 0;
seq__7443_7462 = G__7483;
chunk__7444_7463 = G__7484;
count__7445_7464 = G__7485;
i__7446_7465 = G__7486;
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

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","inline-hints","lt.plugins.jshint/inline-hints",2902595887),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hinted","hinted",4091697368),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,hints){return lt.objs.editor.operation.call(null,lt.objs.editor.__GT_cm_ed.call(null,this$),(function (){var prev = lt.objs.editor.__GT_cm_ed.call(null,this$).getScrollInfo();var seq__7449_7487 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"jshint","jshint",4158001858).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__7450_7488 = null;var count__7451_7489 = 0;var i__7452_7490 = 0;while(true){
if((i__7452_7490 < count__7451_7489))
{var hint_7491 = cljs.core._nth.call(null,chunk__7450_7488,i__7452_7490);lt.objs.editor.remove_line_widget.call(null,this$,hint_7491);
{
var G__7492 = seq__7449_7487;
var G__7493 = chunk__7450_7488;
var G__7494 = count__7451_7489;
var G__7495 = (i__7452_7490 + 1);
seq__7449_7487 = G__7492;
chunk__7450_7488 = G__7493;
count__7451_7489 = G__7494;
i__7452_7490 = G__7495;
continue;
}
} else
{var temp__4092__auto___7496 = cljs.core.seq.call(null,seq__7449_7487);if(temp__4092__auto___7496)
{var seq__7449_7497__$1 = temp__4092__auto___7496;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7449_7497__$1))
{var c__6528__auto___7498 = cljs.core.chunk_first.call(null,seq__7449_7497__$1);{
var G__7499 = cljs.core.chunk_rest.call(null,seq__7449_7497__$1);
var G__7500 = c__6528__auto___7498;
var G__7501 = cljs.core.count.call(null,c__6528__auto___7498);
var G__7502 = 0;
seq__7449_7487 = G__7499;
chunk__7450_7488 = G__7500;
count__7451_7489 = G__7501;
i__7452_7490 = G__7502;
continue;
}
} else
{var hint_7503 = cljs.core.first.call(null,seq__7449_7497__$1);lt.objs.editor.remove_line_widget.call(null,this$,hint_7503);
{
var G__7504 = cljs.core.next.call(null,seq__7449_7497__$1);
var G__7505 = null;
var G__7506 = 0;
var G__7507 = 0;
seq__7449_7487 = G__7504;
chunk__7450_7488 = G__7505;
count__7451_7489 = G__7506;
i__7452_7490 = G__7507;
continue;
}
}
} else
{}
}
break;
}
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jshint","jshint",4158001858),cljs.core.doall.call(null,(function (){var iter__6497__auto__ = (function iter__7453(s__7454){return (new cljs.core.LazySeq(null,(function (){var s__7454__$1 = s__7454;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7454__$1);if(temp__4092__auto__)
{var s__7454__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7454__$2))
{var c__6495__auto__ = cljs.core.chunk_first.call(null,s__7454__$2);var size__6496__auto__ = cljs.core.count.call(null,c__6495__auto__);var b__7456 = cljs.core.chunk_buffer.call(null,size__6496__auto__);if((function (){var i__7455 = 0;while(true){
if((i__7455 < size__6496__auto__))
{var vec__7459 = cljs.core._nth.call(null,c__6495__auto__,i__7455);var line = cljs.core.nth.call(null,vec__7459,0,null);var es = cljs.core.nth.call(null,vec__7459,1,null);cljs.core.chunk_append.call(null,b__7456,lt.objs.editor.line_widget.call(null,this$,(line - 1),lt.plugins.jshint.mark.call(null,es,lt.plugins.jshint.__GT_spacing.call(null,lt.objs.editor.line.call(null,this$,(line - 1))))));
{
var G__7508 = (i__7455 + 1);
i__7455 = G__7508;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7456),iter__7453.call(null,cljs.core.chunk_rest.call(null,s__7454__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7456),null);
}
} else
{var vec__7460 = cljs.core.first.call(null,s__7454__$2);var line = cljs.core.nth.call(null,vec__7460,0,null);var es = cljs.core.nth.call(null,vec__7460,1,null);return cljs.core.cons.call(null,lt.objs.editor.line_widget.call(null,this$,(line - 1),lt.plugins.jshint.mark.call(null,es,lt.plugins.jshint.__GT_spacing.call(null,lt.objs.editor.line.call(null,this$,(line - 1))))),iter__7453.call(null,cljs.core.rest.call(null,s__7454__$2)));
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

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","on-change","lt.plugins.jshint/on-change",3141528053),new cljs.core.Keyword(null,"debounce","debounce",1556599227),750,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run JSHint on change",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",3947235106),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.plugins.jshint.errors.call(null,this$,lt.plugins.jshint.jshint_path,lt.objs.editor.__GT_val.call(null,this$),new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword("lt.plugins.jshint","jshint-globals","lt.plugins.jshint/jshint-globals",4640319298).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","on-save","lt.plugins.jshint/on-save",1975791674),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save","save",1017427183),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run JSHint on save",new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.plugins.jshint.errors.call(null,this$,lt.plugins.jshint.jshint_path,lt.objs.editor.__GT_val.call(null,this$),new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword("lt.plugins.jshint","jshint-globals","lt.plugins.jshint/jshint-globals",4640319298).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Set JSHint options",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"options",new cljs.core.Keyword(null,"example","example",3985900764),"{:maxparams 2}",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"clj","clj",1014002835)], null)], null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,opts){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920),opts], null));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","jshint-globals","lt.plugins.jshint/jshint-globals",4640319298),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Set JSHint global variables defined elsewhere",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"globals",new cljs.core.Keyword(null,"example","example",3985900764),"#{:jQuery :Backbone}",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"clj","clj",1014002835)], null)], null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,globals){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.jshint","jshint-globals","lt.plugins.jshint/jshint-globals",4640319298),globals], null));
}));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"jshint.run","jshint.run",2779549279),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run jshint on current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (this$){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.jshint.errors.call(null,ed,lt.plugins.jshint.jshint_path,lt.objs.editor.__GT_val.call(null,ed),new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),new cljs.core.Keyword("lt.plugins.jshint","jshint-globals","lt.plugins.jshint/jshint-globals",4640319298).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
} else
{return null;
}
})], null));

}

//# sourceMappingURL=