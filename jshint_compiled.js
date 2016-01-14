if(!lt.util.load.provided_QMARK_('lt.plugins.jshint')) {
goog.provide('lt.plugins.jshint');
goog.require('cljs.core');
goog.require('lt.objs.thread');
goog.require('lt.objs.plugins');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.thread');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.jshint.jshint_path = lt.objs.plugins.local_module.call(null,"JSHint","jshint");
lt.plugins.jshint.errors = lt.objs.thread.thread_STAR_.call(null,(function tfun6359(){var orig__6348__auto__ = argsArray(arguments);var msg__6349__auto__ = orig__6348__auto__.shift();var args__6350__auto__ = orig__6348__auto__.map(cljs.reader.read_string);var raise = ((function (orig__6348__auto__,msg__6349__auto__,args__6350__auto__){
return (function (obj__6351__auto__,k__6352__auto__,v__6353__auto__){return _send(obj__6351__auto__,k__6352__auto__,cljs.core.pr_str.call(null,v__6353__auto__),"clj");
});})(orig__6348__auto__,msg__6349__auto__,args__6350__auto__))
;args__6350__auto__.unshift(msg__6349__auto__.obj);
return ((function (orig__6348__auto__,msg__6349__auto__,args__6350__auto__,raise){
return (function (obj_id,jshint_path,code,opts,globals){var jshint = require(jshint_path).JSHINT;jshint.call(null,code,(cljs.core.truth_(opts)?cljs.core.clj__GT_js.call(null,opts):null),(cljs.core.truth_(globals)?cljs.core.clj__GT_js.call(null,cljs.core.zipmap.call(null,globals,cljs.core.repeat.call(null,true))):null));
return raise.call(null,obj_id,new cljs.core.Keyword(null,"hinted","hinted",4091697368),cljs.core.js__GT_clj.call(null,jshint.errors,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
});})(orig__6348__auto__,msg__6349__auto__,args__6350__auto__,raise))
.apply(null,args__6350__auto__);
}));
lt.plugins.jshint.gutter_marker = (function gutter_marker(hints){var e__6275__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jshint-gutter-marker","div.jshint-gutter-marker",1731231262),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hint-gutter-dot","div.hint-gutter-dot",4250102962)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hints.cm-variable","div.hints.cm-variable",1794568114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,(function (h){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("- "),cljs.core.str(h)].join('')], null);
}),hints)], null)], null)], null));var seq__6366_6417 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),((function (e__6275__auto__){
return (function (e){var temp__4090__auto__ = lt.util.dom.next.call(null,e.target);if(cljs.core.truth_(temp__4090__auto__))
{var target = temp__4090__auto__;return lt.util.dom.set_css.call(null,target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),new cljs.core.Keyword(null,"block","block",1107736575)], null));
} else
{return null;
}
});})(e__6275__auto__))
,new cljs.core.Keyword(null,"mouseout","mouseout",894298107),((function (e__6275__auto__){
return (function (e){var temp__4090__auto__ = lt.util.dom.next.call(null,e.target);if(cljs.core.truth_(temp__4090__auto__))
{var target = temp__4090__auto__;return lt.util.dom.set_css.call(null,target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),new cljs.core.Keyword(null,"none","none",1017291434)], null));
} else
{return null;
}
});})(e__6275__auto__))
], null)));var chunk__6367_6418 = null;var count__6368_6419 = 0;var i__6369_6420 = 0;while(true){
if((i__6369_6420 < count__6368_6419))
{var vec__6370_6421 = cljs.core._nth.call(null,chunk__6367_6418,i__6369_6420);var ev__6276__auto___6422 = cljs.core.nth.call(null,vec__6370_6421,0,null);var func__6277__auto___6423 = cljs.core.nth.call(null,vec__6370_6421,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6422,func__6277__auto___6423);
{
var G__6424 = seq__6366_6417;
var G__6425 = chunk__6367_6418;
var G__6426 = count__6368_6419;
var G__6427 = (i__6369_6420 + 1);
seq__6366_6417 = G__6424;
chunk__6367_6418 = G__6425;
count__6368_6419 = G__6426;
i__6369_6420 = G__6427;
continue;
}
} else
{var temp__4092__auto___6428 = cljs.core.seq.call(null,seq__6366_6417);if(temp__4092__auto___6428)
{var seq__6366_6429__$1 = temp__4092__auto___6428;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6366_6429__$1))
{var c__5632__auto___6430 = cljs.core.chunk_first.call(null,seq__6366_6429__$1);{
var G__6431 = cljs.core.chunk_rest.call(null,seq__6366_6429__$1);
var G__6432 = c__5632__auto___6430;
var G__6433 = cljs.core.count.call(null,c__5632__auto___6430);
var G__6434 = 0;
seq__6366_6417 = G__6431;
chunk__6367_6418 = G__6432;
count__6368_6419 = G__6433;
i__6369_6420 = G__6434;
continue;
}
} else
{var vec__6371_6435 = cljs.core.first.call(null,seq__6366_6429__$1);var ev__6276__auto___6436 = cljs.core.nth.call(null,vec__6371_6435,0,null);var func__6277__auto___6437 = cljs.core.nth.call(null,vec__6371_6435,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6436,func__6277__auto___6437);
{
var G__6438 = cljs.core.next.call(null,seq__6366_6429__$1);
var G__6439 = null;
var G__6440 = 0;
var G__6441 = 0;
seq__6366_6417 = G__6438;
chunk__6367_6418 = G__6439;
count__6368_6419 = G__6440;
i__6369_6420 = G__6441;
continue;
}
}
} else
{}
}
break;
}
return e__6275__auto__;
});
lt.plugins.jshint.mark = (function mark(errors,spacing){var e__6275__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hintwrapper","div.hintwrapper",570322369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.spacer","span.spacer",4763675330),spacing], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"jshinterrors"], null),(function (){var iter__5601__auto__ = (function iter__6382(s__6383){return (new cljs.core.LazySeq(null,(function (){var s__6383__$1 = s__6383;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6383__$1);if(temp__4092__auto__)
{var s__6383__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6383__$2))
{var c__5599__auto__ = cljs.core.chunk_first.call(null,s__6383__$2);var size__5600__auto__ = cljs.core.count.call(null,c__5599__auto__);var b__6385 = cljs.core.chunk_buffer.call(null,size__5600__auto__);if((function (){var i__6384 = 0;while(true){
if((i__6384 < size__5600__auto__))
{var e = cljs.core._nth.call(null,c__5599__auto__,i__6384);cljs.core.chunk_append.call(null,b__6385,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"raw","raw",1014016922).cljs$core$IFn$_invoke$arity$1(e))], null));
{
var G__6442 = (i__6384 + 1);
i__6384 = G__6442;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6385),iter__6382.call(null,cljs.core.chunk_rest.call(null,s__6383__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6385),null);
}
} else
{var e = cljs.core.first.call(null,s__6383__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"raw","raw",1014016922).cljs$core$IFn$_invoke$arity$1(e))], null),iter__6382.call(null,cljs.core.rest.call(null,s__6383__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5601__auto__.call(null,errors);
})()], null)], null));var seq__6386_6443 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__6387_6444 = null;var count__6388_6445 = 0;var i__6389_6446 = 0;while(true){
if((i__6389_6446 < count__6388_6445))
{var vec__6390_6447 = cljs.core._nth.call(null,chunk__6387_6444,i__6389_6446);var ev__6276__auto___6448 = cljs.core.nth.call(null,vec__6390_6447,0,null);var func__6277__auto___6449 = cljs.core.nth.call(null,vec__6390_6447,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6448,func__6277__auto___6449);
{
var G__6450 = seq__6386_6443;
var G__6451 = chunk__6387_6444;
var G__6452 = count__6388_6445;
var G__6453 = (i__6389_6446 + 1);
seq__6386_6443 = G__6450;
chunk__6387_6444 = G__6451;
count__6388_6445 = G__6452;
i__6389_6446 = G__6453;
continue;
}
} else
{var temp__4092__auto___6454 = cljs.core.seq.call(null,seq__6386_6443);if(temp__4092__auto___6454)
{var seq__6386_6455__$1 = temp__4092__auto___6454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6386_6455__$1))
{var c__5632__auto___6456 = cljs.core.chunk_first.call(null,seq__6386_6455__$1);{
var G__6457 = cljs.core.chunk_rest.call(null,seq__6386_6455__$1);
var G__6458 = c__5632__auto___6456;
var G__6459 = cljs.core.count.call(null,c__5632__auto___6456);
var G__6460 = 0;
seq__6386_6443 = G__6457;
chunk__6387_6444 = G__6458;
count__6388_6445 = G__6459;
i__6389_6446 = G__6460;
continue;
}
} else
{var vec__6391_6461 = cljs.core.first.call(null,seq__6386_6455__$1);var ev__6276__auto___6462 = cljs.core.nth.call(null,vec__6391_6461,0,null);var func__6277__auto___6463 = cljs.core.nth.call(null,vec__6391_6461,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6462,func__6277__auto___6463);
{
var G__6464 = cljs.core.next.call(null,seq__6386_6455__$1);
var G__6465 = null;
var G__6466 = 0;
var G__6467 = 0;
seq__6386_6443 = G__6464;
chunk__6387_6444 = G__6465;
count__6388_6445 = G__6466;
i__6389_6446 = G__6467;
continue;
}
}
} else
{}
}
break;
}
return e__6275__auto__;
});
lt.plugins.jshint.__GT_spacing = (function __GT_spacing(text){if(cljs.core.truth_(text))
{return cljs.core.first.call(null,cljs.core.re_seq.call(null,/^\s+/,text));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","gutter-hints","lt.plugins.jshint/gutter-hints",2720131625),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hinted","hinted",4091697368),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,hints){return lt.objs.editor.operation.call(null,lt.objs.editor.__GT_cm_ed.call(null,this$),(function (){var hints_by_line = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"line","line",1017226086),cljs.core.filter.call(null,cljs.core.identity,hints));var markers = cljs.core.map.call(null,((function (hints_by_line){
return (function (p__6393){var vec__6394 = p__6393;var line = cljs.core.nth.call(null,vec__6394,0,null);var hs = cljs.core.nth.call(null,vec__6394,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(line - 1),new cljs.core.Keyword(null,"mark","mark",1017248319),lt.plugins.jshint.gutter_marker.call(null,cljs.core.map.call(null,((function (vec__6394,line,hs,hints_by_line){
return (function (p1__6392_SHARP_){return new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$1(p1__6392_SHARP_);
});})(vec__6394,line,hs,hints_by_line))
,hs))], null);
});})(hints_by_line))
,hints_by_line);lt.objs.editor.add_gutter.call(null,this$,"jshint-gutter",8);
lt.objs.editor.__GT_cm_ed.call(null,this$).clearGutter("jshint-gutter");
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (hints_by_line,markers){
return (function (marker){return lt.objs.editor.__GT_cm_ed.call(null,this$).setGutterMarker(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(marker),"jshint-gutter",new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(marker));
});})(hints_by_line,markers))
,markers));
}));
}));
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","inline-hints","lt.plugins.jshint/inline-hints",2902595887),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hinted","hinted",4091697368),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,hints){return lt.objs.editor.operation.call(null,lt.objs.editor.__GT_cm_ed.call(null,this$),(function (){var prev = lt.objs.editor.__GT_cm_ed.call(null,this$).getScrollInfo();var seq__6395_6468 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"jshint","jshint",4158001858).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__6396_6469 = null;var count__6397_6470 = 0;var i__6398_6471 = 0;while(true){
if((i__6398_6471 < count__6397_6470))
{var hint_6472 = cljs.core._nth.call(null,chunk__6396_6469,i__6398_6471);lt.objs.editor.remove_line_widget.call(null,this$,hint_6472);
{
var G__6473 = seq__6395_6468;
var G__6474 = chunk__6396_6469;
var G__6475 = count__6397_6470;
var G__6476 = (i__6398_6471 + 1);
seq__6395_6468 = G__6473;
chunk__6396_6469 = G__6474;
count__6397_6470 = G__6475;
i__6398_6471 = G__6476;
continue;
}
} else
{var temp__4092__auto___6477 = cljs.core.seq.call(null,seq__6395_6468);if(temp__4092__auto___6477)
{var seq__6395_6478__$1 = temp__4092__auto___6477;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6395_6478__$1))
{var c__5632__auto___6479 = cljs.core.chunk_first.call(null,seq__6395_6478__$1);{
var G__6480 = cljs.core.chunk_rest.call(null,seq__6395_6478__$1);
var G__6481 = c__5632__auto___6479;
var G__6482 = cljs.core.count.call(null,c__5632__auto___6479);
var G__6483 = 0;
seq__6395_6468 = G__6480;
chunk__6396_6469 = G__6481;
count__6397_6470 = G__6482;
i__6398_6471 = G__6483;
continue;
}
} else
{var hint_6484 = cljs.core.first.call(null,seq__6395_6478__$1);lt.objs.editor.remove_line_widget.call(null,this$,hint_6484);
{
var G__6485 = cljs.core.next.call(null,seq__6395_6478__$1);
var G__6486 = null;
var G__6487 = 0;
var G__6488 = 0;
seq__6395_6468 = G__6485;
chunk__6396_6469 = G__6486;
count__6397_6470 = G__6487;
i__6398_6471 = G__6488;
continue;
}
}
} else
{}
}
break;
}
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jshint","jshint",4158001858),cljs.core.doall.call(null,(function (){var iter__5601__auto__ = ((function (prev){
return (function iter__6399(s__6400){return (new cljs.core.LazySeq(null,((function (prev){
return (function (){var s__6400__$1 = s__6400;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6400__$1);if(temp__4092__auto__)
{var s__6400__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6400__$2))
{var c__5599__auto__ = cljs.core.chunk_first.call(null,s__6400__$2);var size__5600__auto__ = cljs.core.count.call(null,c__5599__auto__);var b__6402 = cljs.core.chunk_buffer.call(null,size__5600__auto__);if((function (){var i__6401 = 0;while(true){
if((i__6401 < size__5600__auto__))
{var vec__6405 = cljs.core._nth.call(null,c__5599__auto__,i__6401);var line = cljs.core.nth.call(null,vec__6405,0,null);var es = cljs.core.nth.call(null,vec__6405,1,null);cljs.core.chunk_append.call(null,b__6402,lt.objs.editor.line_widget.call(null,this$,(line - 1),lt.plugins.jshint.mark.call(null,es,lt.plugins.jshint.__GT_spacing.call(null,lt.objs.editor.line.call(null,this$,(line - 1))))));
{
var G__6489 = (i__6401 + 1);
i__6401 = G__6489;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6402),iter__6399.call(null,cljs.core.chunk_rest.call(null,s__6400__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6402),null);
}
} else
{var vec__6406 = cljs.core.first.call(null,s__6400__$2);var line = cljs.core.nth.call(null,vec__6406,0,null);var es = cljs.core.nth.call(null,vec__6406,1,null);return cljs.core.cons.call(null,lt.objs.editor.line_widget.call(null,this$,(line - 1),lt.plugins.jshint.mark.call(null,es,lt.plugins.jshint.__GT_spacing.call(null,lt.objs.editor.line.call(null,this$,(line - 1))))),iter__6399.call(null,cljs.core.rest.call(null,s__6400__$2)));
}
} else
{return null;
}
break;
}
});})(prev))
,null,null));
});})(prev))
;return iter__5601__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"line","line",1017226086),cljs.core.filter.call(null,cljs.core.identity,hints)));
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

//# sourceMappingURL=jshint_compiled.js.map