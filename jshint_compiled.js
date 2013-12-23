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

lt.plugins.jshint.errors = lt.objs.thread.thread_STAR_.call(null,(function tfun8362(){var orig__8351__auto__ = argsArray(arguments);var msg__8352__auto__ = orig__8351__auto__.shift();var args__8353__auto__ = orig__8351__auto__.map(cljs.reader.read_string);var raise = ((function (orig__8351__auto__,msg__8352__auto__,args__8353__auto__){
return (function (obj__8354__auto__,k__8355__auto__,v__8356__auto__){return _send(obj__8354__auto__,k__8355__auto__,cljs.core.pr_str.call(null,v__8356__auto__),"clj");
});})(orig__8351__auto__,msg__8352__auto__,args__8353__auto__))
;args__8353__auto__.unshift(msg__8352__auto__.obj);
return (function (obj_id,code,opts){var jshint = require([cljs.core.str(ltpath),cljs.core.str("/plugins/jshint/node_modules/jshint")].join('')).JSHINT;jshint.call(null,code,(cljs.core.truth_(opts)?cljs.core.clj__GT_js.call(null,opts):null));
return raise.call(null,obj_id,new cljs.core.Keyword(null,"hinted","hinted",4091697368),cljs.core.js__GT_clj.call(null,jshint.errors,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
}).apply(null,args__8353__auto__);
}));

lt.plugins.jshint.mark = (function mark(errors,spacing){var e__8278__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hintwrapper","div.hintwrapper",570322369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.spacer","span.spacer",4763675330),spacing], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"jshinterrors"], null),(function (){var iter__7636__auto__ = (function iter__8373(s__8374){return (new cljs.core.LazySeq(null,(function (){var s__8374__$1 = s__8374;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8374__$1);if(temp__4092__auto__)
{var s__8374__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8374__$2))
{var c__7634__auto__ = cljs.core.chunk_first.call(null,s__8374__$2);var size__7635__auto__ = cljs.core.count.call(null,c__7634__auto__);var b__8376 = cljs.core.chunk_buffer.call(null,size__7635__auto__);if((function (){var i__8375 = 0;while(true){
if((i__8375 < size__7635__auto__))
{var e = cljs.core._nth.call(null,c__7634__auto__,i__8375);cljs.core.chunk_append.call(null,b__8376,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"raw","raw",1014016922).cljs$core$IFn$_invoke$arity$1(e))], null));
{
var G__8417 = (i__8375 + 1);
i__8375 = G__8417;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8376),iter__8373.call(null,cljs.core.chunk_rest.call(null,s__8374__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8376),null);
}
} else
{var e = cljs.core.first.call(null,s__8374__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"raw","raw",1014016922).cljs$core$IFn$_invoke$arity$1(e))], null),iter__8373.call(null,cljs.core.rest.call(null,s__8374__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7636__auto__.call(null,errors);
})()], null)], null));var seq__8377_8418 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8378_8419 = null;var count__8379_8420 = 0;var i__8380_8421 = 0;while(true){
if((i__8380_8421 < count__8379_8420))
{var vec__8381_8422 = cljs.core._nth.call(null,chunk__8378_8419,i__8380_8421);var ev__8279__auto___8423 = cljs.core.nth.call(null,vec__8381_8422,0,null);var func__8280__auto___8424 = cljs.core.nth.call(null,vec__8381_8422,1,null);lt.util.dom.on.call(null,e__8278__auto__,ev__8279__auto___8423,func__8280__auto___8424);
{
var G__8425 = seq__8377_8418;
var G__8426 = chunk__8378_8419;
var G__8427 = count__8379_8420;
var G__8428 = (i__8380_8421 + 1);
seq__8377_8418 = G__8425;
chunk__8378_8419 = G__8426;
count__8379_8420 = G__8427;
i__8380_8421 = G__8428;
continue;
}
} else
{var temp__4092__auto___8429 = cljs.core.seq.call(null,seq__8377_8418);if(temp__4092__auto___8429)
{var seq__8377_8430__$1 = temp__4092__auto___8429;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8377_8430__$1))
{var c__7667__auto___8431 = cljs.core.chunk_first.call(null,seq__8377_8430__$1);{
var G__8432 = cljs.core.chunk_rest.call(null,seq__8377_8430__$1);
var G__8433 = c__7667__auto___8431;
var G__8434 = cljs.core.count.call(null,c__7667__auto___8431);
var G__8435 = 0;
seq__8377_8418 = G__8432;
chunk__8378_8419 = G__8433;
count__8379_8420 = G__8434;
i__8380_8421 = G__8435;
continue;
}
} else
{var vec__8382_8436 = cljs.core.first.call(null,seq__8377_8430__$1);var ev__8279__auto___8437 = cljs.core.nth.call(null,vec__8382_8436,0,null);var func__8280__auto___8438 = cljs.core.nth.call(null,vec__8382_8436,1,null);lt.util.dom.on.call(null,e__8278__auto__,ev__8279__auto___8437,func__8280__auto___8438);
{
var G__8439 = cljs.core.next.call(null,seq__8377_8430__$1);
var G__8440 = null;
var G__8441 = 0;
var G__8442 = 0;
seq__8377_8418 = G__8439;
chunk__8378_8419 = G__8440;
count__8379_8420 = G__8441;
i__8380_8421 = G__8442;
continue;
}
}
} else
{}
}
break;
}
return e__8278__auto__;
});

lt.plugins.jshint.__GT_spacing = (function __GT_spacing(text){if(cljs.core.truth_(text))
{return cljs.core.first.call(null,cljs.core.re_seq.call(null,/^\s+/,text));
} else
{return null;
}
});

lt.plugins.jshint.__BEH__inline_hints = (function __BEH__inline_hints(this$,hints){return lt.objs.editor.operation.call(null,lt.objs.editor.__GT_cm_ed.call(null,this$),(function (){var prev = lt.objs.editor.__GT_cm_ed.call(null,this$).getScrollInfo();var seq__8395_8443 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"jshint","jshint",4158001858).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__8396_8444 = null;var count__8397_8445 = 0;var i__8398_8446 = 0;while(true){
if((i__8398_8446 < count__8397_8445))
{var hint_8447 = cljs.core._nth.call(null,chunk__8396_8444,i__8398_8446);lt.objs.editor.remove_line_widget.call(null,this$,hint_8447);
{
var G__8448 = seq__8395_8443;
var G__8449 = chunk__8396_8444;
var G__8450 = count__8397_8445;
var G__8451 = (i__8398_8446 + 1);
seq__8395_8443 = G__8448;
chunk__8396_8444 = G__8449;
count__8397_8445 = G__8450;
i__8398_8446 = G__8451;
continue;
}
} else
{var temp__4092__auto___8452 = cljs.core.seq.call(null,seq__8395_8443);if(temp__4092__auto___8452)
{var seq__8395_8453__$1 = temp__4092__auto___8452;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8395_8453__$1))
{var c__7667__auto___8454 = cljs.core.chunk_first.call(null,seq__8395_8453__$1);{
var G__8455 = cljs.core.chunk_rest.call(null,seq__8395_8453__$1);
var G__8456 = c__7667__auto___8454;
var G__8457 = cljs.core.count.call(null,c__7667__auto___8454);
var G__8458 = 0;
seq__8395_8443 = G__8455;
chunk__8396_8444 = G__8456;
count__8397_8445 = G__8457;
i__8398_8446 = G__8458;
continue;
}
} else
{var hint_8459 = cljs.core.first.call(null,seq__8395_8453__$1);lt.objs.editor.remove_line_widget.call(null,this$,hint_8459);
{
var G__8460 = cljs.core.next.call(null,seq__8395_8453__$1);
var G__8461 = null;
var G__8462 = 0;
var G__8463 = 0;
seq__8395_8443 = G__8460;
chunk__8396_8444 = G__8461;
count__8397_8445 = G__8462;
i__8398_8446 = G__8463;
continue;
}
}
} else
{}
}
break;
}
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jshint","jshint",4158001858),cljs.core.doall.call(null,(function (){var iter__7636__auto__ = (function iter__8399(s__8400){return (new cljs.core.LazySeq(null,(function (){var s__8400__$1 = s__8400;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8400__$1);if(temp__4092__auto__)
{var s__8400__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8400__$2))
{var c__7634__auto__ = cljs.core.chunk_first.call(null,s__8400__$2);var size__7635__auto__ = cljs.core.count.call(null,c__7634__auto__);var b__8402 = cljs.core.chunk_buffer.call(null,size__7635__auto__);if((function (){var i__8401 = 0;while(true){
if((i__8401 < size__7635__auto__))
{var vec__8405 = cljs.core._nth.call(null,c__7634__auto__,i__8401);var line = cljs.core.nth.call(null,vec__8405,0,null);var es = cljs.core.nth.call(null,vec__8405,1,null);cljs.core.chunk_append.call(null,b__8402,lt.objs.editor.line_widget.call(null,this$,(line - 1),lt.plugins.jshint.mark.call(null,es,lt.plugins.jshint.__GT_spacing.call(null,lt.objs.editor.line.call(null,this$,(line - 1))))));
{
var G__8464 = (i__8401 + 1);
i__8401 = G__8464;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8402),iter__8399.call(null,cljs.core.chunk_rest.call(null,s__8400__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8402),null);
}
} else
{var vec__8406 = cljs.core.first.call(null,s__8400__$2);var line = cljs.core.nth.call(null,vec__8406,0,null);var es = cljs.core.nth.call(null,vec__8406,1,null);return cljs.core.cons.call(null,lt.objs.editor.line_widget.call(null,this$,(line - 1),lt.plugins.jshint.mark.call(null,es,lt.plugins.jshint.__GT_spacing.call(null,lt.objs.editor.line.call(null,this$,(line - 1))))),iter__8399.call(null,cljs.core.rest.call(null,s__8400__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7636__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"line","line",1017226086),cljs.core.filter.call(null,cljs.core.identity,hints)));
})())], null));
return lt.objs.editor.__GT_cm_ed.call(null,this$).scrollTo(prev.left,prev.top);
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","inline-hints","lt.plugins.jshint/inline-hints",2902595887),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.jshint.__BEH__inline_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hinted","hinted",4091697368),null], null), null));

lt.plugins.jshint.__BEH__on_change = (function __BEH__on_change(this$){return lt.plugins.jshint.errors.call(null,this$,lt.objs.editor.__GT_val.call(null,this$),new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","on-change","lt.plugins.jshint/on-change",3141528053),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.jshint.__BEH__on_change,new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run JSHint on change",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",3947235106),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"debounce","debounce",1556599227),750);

lt.plugins.jshint.__BEH__on_save = (function __BEH__on_save(this$){return lt.plugins.jshint.errors.call(null,this$,lt.objs.editor.__GT_val.call(null,this$),new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","on-save","lt.plugins.jshint/on-save",1975791674),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.jshint.__BEH__on_save,new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run JSHint on save",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save","save",1017427183),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));

lt.plugins.jshint.__BEH__jshint_options = (function __BEH__jshint_options(this$,opts){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920),opts], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.jshint.__BEH__jshint_options,new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Set JSHint options",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"options",new cljs.core.Keyword(null,"example","example",3985900764),"{:maxparams 2}",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"clj","clj",1014002835)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"jshint.run","jshint.run",2779549279),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run jshint on current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (this$){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.jshint.errors.call(null,ed,lt.objs.editor.__GT_val.call(null,ed),new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
} else
{return null;
}
})], null));


//# sourceMappingURL=