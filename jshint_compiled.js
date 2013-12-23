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
var G__8405 = (i__8375 + 1);
i__8375 = G__8405;
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
})()], null)], null));var seq__8377_8406 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8378_8407 = null;var count__8379_8408 = 0;var i__8380_8409 = 0;while(true){
if((i__8380_8409 < count__8379_8408))
{var vec__8381_8410 = cljs.core._nth.call(null,chunk__8378_8407,i__8380_8409);var ev__8279__auto___8411 = cljs.core.nth.call(null,vec__8381_8410,0,null);var func__8280__auto___8412 = cljs.core.nth.call(null,vec__8381_8410,1,null);lt.util.dom.on.call(null,e__8278__auto__,ev__8279__auto___8411,func__8280__auto___8412);
{
var G__8413 = seq__8377_8406;
var G__8414 = chunk__8378_8407;
var G__8415 = count__8379_8408;
var G__8416 = (i__8380_8409 + 1);
seq__8377_8406 = G__8413;
chunk__8378_8407 = G__8414;
count__8379_8408 = G__8415;
i__8380_8409 = G__8416;
continue;
}
} else
{var temp__4092__auto___8417 = cljs.core.seq.call(null,seq__8377_8406);if(temp__4092__auto___8417)
{var seq__8377_8418__$1 = temp__4092__auto___8417;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8377_8418__$1))
{var c__7667__auto___8419 = cljs.core.chunk_first.call(null,seq__8377_8418__$1);{
var G__8420 = cljs.core.chunk_rest.call(null,seq__8377_8418__$1);
var G__8421 = c__7667__auto___8419;
var G__8422 = cljs.core.count.call(null,c__7667__auto___8419);
var G__8423 = 0;
seq__8377_8406 = G__8420;
chunk__8378_8407 = G__8421;
count__8379_8408 = G__8422;
i__8380_8409 = G__8423;
continue;
}
} else
{var vec__8382_8424 = cljs.core.first.call(null,seq__8377_8418__$1);var ev__8279__auto___8425 = cljs.core.nth.call(null,vec__8382_8424,0,null);var func__8280__auto___8426 = cljs.core.nth.call(null,vec__8382_8424,1,null);lt.util.dom.on.call(null,e__8278__auto__,ev__8279__auto___8425,func__8280__auto___8426);
{
var G__8427 = cljs.core.next.call(null,seq__8377_8418__$1);
var G__8428 = null;
var G__8429 = 0;
var G__8430 = 0;
seq__8377_8406 = G__8427;
chunk__8378_8407 = G__8428;
count__8379_8408 = G__8429;
i__8380_8409 = G__8430;
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

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","inline-hints","lt.plugins.jshint/inline-hints",2902595887),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hinted","hinted",4091697368),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,hints){return lt.objs.editor.operation.call(null,lt.objs.editor.__GT_cm_ed.call(null,this$),(function (){var prev = lt.objs.editor.__GT_cm_ed.call(null,this$).getScrollInfo();var seq__8383_8431 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"jshint","jshint",4158001858).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__8384_8432 = null;var count__8385_8433 = 0;var i__8386_8434 = 0;while(true){
if((i__8386_8434 < count__8385_8433))
{var hint_8435 = cljs.core._nth.call(null,chunk__8384_8432,i__8386_8434);lt.objs.editor.remove_line_widget.call(null,this$,hint_8435);
{
var G__8436 = seq__8383_8431;
var G__8437 = chunk__8384_8432;
var G__8438 = count__8385_8433;
var G__8439 = (i__8386_8434 + 1);
seq__8383_8431 = G__8436;
chunk__8384_8432 = G__8437;
count__8385_8433 = G__8438;
i__8386_8434 = G__8439;
continue;
}
} else
{var temp__4092__auto___8440 = cljs.core.seq.call(null,seq__8383_8431);if(temp__4092__auto___8440)
{var seq__8383_8441__$1 = temp__4092__auto___8440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8383_8441__$1))
{var c__7667__auto___8442 = cljs.core.chunk_first.call(null,seq__8383_8441__$1);{
var G__8443 = cljs.core.chunk_rest.call(null,seq__8383_8441__$1);
var G__8444 = c__7667__auto___8442;
var G__8445 = cljs.core.count.call(null,c__7667__auto___8442);
var G__8446 = 0;
seq__8383_8431 = G__8443;
chunk__8384_8432 = G__8444;
count__8385_8433 = G__8445;
i__8386_8434 = G__8446;
continue;
}
} else
{var hint_8447 = cljs.core.first.call(null,seq__8383_8441__$1);lt.objs.editor.remove_line_widget.call(null,this$,hint_8447);
{
var G__8448 = cljs.core.next.call(null,seq__8383_8441__$1);
var G__8449 = null;
var G__8450 = 0;
var G__8451 = 0;
seq__8383_8431 = G__8448;
chunk__8384_8432 = G__8449;
count__8385_8433 = G__8450;
i__8386_8434 = G__8451;
continue;
}
}
} else
{}
}
break;
}
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jshint","jshint",4158001858),cljs.core.doall.call(null,(function (){var iter__7636__auto__ = (function iter__8387(s__8388){return (new cljs.core.LazySeq(null,(function (){var s__8388__$1 = s__8388;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8388__$1);if(temp__4092__auto__)
{var s__8388__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8388__$2))
{var c__7634__auto__ = cljs.core.chunk_first.call(null,s__8388__$2);var size__7635__auto__ = cljs.core.count.call(null,c__7634__auto__);var b__8390 = cljs.core.chunk_buffer.call(null,size__7635__auto__);if((function (){var i__8389 = 0;while(true){
if((i__8389 < size__7635__auto__))
{var vec__8393 = cljs.core._nth.call(null,c__7634__auto__,i__8389);var line = cljs.core.nth.call(null,vec__8393,0,null);var es = cljs.core.nth.call(null,vec__8393,1,null);cljs.core.chunk_append.call(null,b__8390,lt.objs.editor.line_widget.call(null,this$,(line - 1),lt.plugins.jshint.mark.call(null,es,lt.plugins.jshint.__GT_spacing.call(null,lt.objs.editor.line.call(null,this$,(line - 1))))));
{
var G__8452 = (i__8389 + 1);
i__8389 = G__8452;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8390),iter__8387.call(null,cljs.core.chunk_rest.call(null,s__8388__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8390),null);
}
} else
{var vec__8394 = cljs.core.first.call(null,s__8388__$2);var line = cljs.core.nth.call(null,vec__8394,0,null);var es = cljs.core.nth.call(null,vec__8394,1,null);return cljs.core.cons.call(null,lt.objs.editor.line_widget.call(null,this$,(line - 1),lt.plugins.jshint.mark.call(null,es,lt.plugins.jshint.__GT_spacing.call(null,lt.objs.editor.line.call(null,this$,(line - 1))))),iter__8387.call(null,cljs.core.rest.call(null,s__8388__$2)));
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
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","on-change","lt.plugins.jshint/on-change",3141528053),new cljs.core.Keyword(null,"debounce","debounce",1556599227),750,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run JSHint on change",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",3947235106),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.plugins.jshint.errors.call(null,this$,lt.objs.editor.__GT_val.call(null,this$),new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","on-save","lt.plugins.jshint/on-save",1975791674),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save","save",1017427183),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run JSHint on save",new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.plugins.jshint.errors.call(null,this$,lt.objs.editor.__GT_val.call(null,this$),new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Set JSHint options",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"options",new cljs.core.Keyword(null,"example","example",3985900764),"{:maxparams 2}",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"clj","clj",1014002835)], null)], null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,opts){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920),opts], null));
}));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"jshint.run","jshint.run",2779549279),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run jshint on current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (this$){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.jshint.errors.call(null,ed,lt.objs.editor.__GT_val.call(null,ed),new cljs.core.Keyword("lt.plugins.jshint","jshint-options","lt.plugins.jshint/jshint-options",3341172920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
} else
{return null;
}
})], null));


//# sourceMappingURL=