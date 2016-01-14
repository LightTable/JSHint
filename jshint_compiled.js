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
lt.plugins.jshint.jshint_path = lt.objs.plugins.local_module.call(null,"jshint","jshint");
lt.plugins.jshint.errors = lt.objs.thread.thread_STAR_.call(null,(function tfun6490(){var orig__6348__auto__ = argsArray(arguments);var msg__6349__auto__ = orig__6348__auto__.shift();var args__6350__auto__ = orig__6348__auto__.map(cljs.reader.read_string);var raise = ((function (orig__6348__auto__,msg__6349__auto__,args__6350__auto__){
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
}),hints)], null)], null)], null));var seq__6497_6538 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),((function (e__6275__auto__){
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
], null)));var chunk__6498_6539 = null;var count__6499_6540 = 0;var i__6500_6541 = 0;while(true){
if((i__6500_6541 < count__6499_6540))
{var vec__6501_6542 = cljs.core._nth.call(null,chunk__6498_6539,i__6500_6541);var ev__6276__auto___6543 = cljs.core.nth.call(null,vec__6501_6542,0,null);var func__6277__auto___6544 = cljs.core.nth.call(null,vec__6501_6542,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6543,func__6277__auto___6544);
{
var G__6545 = seq__6497_6538;
var G__6546 = chunk__6498_6539;
var G__6547 = count__6499_6540;
var G__6548 = (i__6500_6541 + 1);
seq__6497_6538 = G__6545;
chunk__6498_6539 = G__6546;
count__6499_6540 = G__6547;
i__6500_6541 = G__6548;
continue;
}
} else
{var temp__4092__auto___6549 = cljs.core.seq.call(null,seq__6497_6538);if(temp__4092__auto___6549)
{var seq__6497_6550__$1 = temp__4092__auto___6549;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6497_6550__$1))
{var c__5632__auto___6551 = cljs.core.chunk_first.call(null,seq__6497_6550__$1);{
var G__6552 = cljs.core.chunk_rest.call(null,seq__6497_6550__$1);
var G__6553 = c__5632__auto___6551;
var G__6554 = cljs.core.count.call(null,c__5632__auto___6551);
var G__6555 = 0;
seq__6497_6538 = G__6552;
chunk__6498_6539 = G__6553;
count__6499_6540 = G__6554;
i__6500_6541 = G__6555;
continue;
}
} else
{var vec__6502_6556 = cljs.core.first.call(null,seq__6497_6550__$1);var ev__6276__auto___6557 = cljs.core.nth.call(null,vec__6502_6556,0,null);var func__6277__auto___6558 = cljs.core.nth.call(null,vec__6502_6556,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6557,func__6277__auto___6558);
{
var G__6559 = cljs.core.next.call(null,seq__6497_6550__$1);
var G__6560 = null;
var G__6561 = 0;
var G__6562 = 0;
seq__6497_6538 = G__6559;
chunk__6498_6539 = G__6560;
count__6499_6540 = G__6561;
i__6500_6541 = G__6562;
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
lt.plugins.jshint.mark = (function mark(errors,spacing){var e__6275__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hintwrapper","div.hintwrapper",570322369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.spacer","span.spacer",4763675330),spacing], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"jshinterrors"], null),(function (){var iter__5601__auto__ = (function iter__6513(s__6514){return (new cljs.core.LazySeq(null,(function (){var s__6514__$1 = s__6514;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6514__$1);if(temp__4092__auto__)
{var s__6514__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6514__$2))
{var c__5599__auto__ = cljs.core.chunk_first.call(null,s__6514__$2);var size__5600__auto__ = cljs.core.count.call(null,c__5599__auto__);var b__6516 = cljs.core.chunk_buffer.call(null,size__5600__auto__);if((function (){var i__6515 = 0;while(true){
if((i__6515 < size__5600__auto__))
{var e = cljs.core._nth.call(null,c__5599__auto__,i__6515);cljs.core.chunk_append.call(null,b__6516,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"raw","raw",1014016922).cljs$core$IFn$_invoke$arity$1(e))], null));
{
var G__6563 = (i__6515 + 1);
i__6515 = G__6563;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6516),iter__6513.call(null,cljs.core.chunk_rest.call(null,s__6514__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6516),null);
}
} else
{var e = cljs.core.first.call(null,s__6514__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"raw","raw",1014016922).cljs$core$IFn$_invoke$arity$1(e))], null),iter__6513.call(null,cljs.core.rest.call(null,s__6514__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5601__auto__.call(null,errors);
})()], null)], null));var seq__6517_6564 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__6518_6565 = null;var count__6519_6566 = 0;var i__6520_6567 = 0;while(true){
if((i__6520_6567 < count__6519_6566))
{var vec__6521_6568 = cljs.core._nth.call(null,chunk__6518_6565,i__6520_6567);var ev__6276__auto___6569 = cljs.core.nth.call(null,vec__6521_6568,0,null);var func__6277__auto___6570 = cljs.core.nth.call(null,vec__6521_6568,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6569,func__6277__auto___6570);
{
var G__6571 = seq__6517_6564;
var G__6572 = chunk__6518_6565;
var G__6573 = count__6519_6566;
var G__6574 = (i__6520_6567 + 1);
seq__6517_6564 = G__6571;
chunk__6518_6565 = G__6572;
count__6519_6566 = G__6573;
i__6520_6567 = G__6574;
continue;
}
} else
{var temp__4092__auto___6575 = cljs.core.seq.call(null,seq__6517_6564);if(temp__4092__auto___6575)
{var seq__6517_6576__$1 = temp__4092__auto___6575;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6517_6576__$1))
{var c__5632__auto___6577 = cljs.core.chunk_first.call(null,seq__6517_6576__$1);{
var G__6578 = cljs.core.chunk_rest.call(null,seq__6517_6576__$1);
var G__6579 = c__5632__auto___6577;
var G__6580 = cljs.core.count.call(null,c__5632__auto___6577);
var G__6581 = 0;
seq__6517_6564 = G__6578;
chunk__6518_6565 = G__6579;
count__6519_6566 = G__6580;
i__6520_6567 = G__6581;
continue;
}
} else
{var vec__6522_6582 = cljs.core.first.call(null,seq__6517_6576__$1);var ev__6276__auto___6583 = cljs.core.nth.call(null,vec__6522_6582,0,null);var func__6277__auto___6584 = cljs.core.nth.call(null,vec__6522_6582,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6583,func__6277__auto___6584);
{
var G__6585 = cljs.core.next.call(null,seq__6517_6576__$1);
var G__6586 = null;
var G__6587 = 0;
var G__6588 = 0;
seq__6517_6564 = G__6585;
chunk__6518_6565 = G__6586;
count__6519_6566 = G__6587;
i__6520_6567 = G__6588;
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
return (function (p__6524){var vec__6525 = p__6524;var line = cljs.core.nth.call(null,vec__6525,0,null);var hs = cljs.core.nth.call(null,vec__6525,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(line - 1),new cljs.core.Keyword(null,"mark","mark",1017248319),lt.plugins.jshint.gutter_marker.call(null,cljs.core.map.call(null,((function (vec__6525,line,hs,hints_by_line){
return (function (p1__6523_SHARP_){return new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$1(p1__6523_SHARP_);
});})(vec__6525,line,hs,hints_by_line))
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jshint","inline-hints","lt.plugins.jshint/inline-hints",2902595887),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hinted","hinted",4091697368),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,hints){return lt.objs.editor.operation.call(null,lt.objs.editor.__GT_cm_ed.call(null,this$),(function (){var prev = lt.objs.editor.__GT_cm_ed.call(null,this$).getScrollInfo();var seq__6526_6589 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"jshint","jshint",4158001858).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__6527_6590 = null;var count__6528_6591 = 0;var i__6529_6592 = 0;while(true){
if((i__6529_6592 < count__6528_6591))
{var hint_6593 = cljs.core._nth.call(null,chunk__6527_6590,i__6529_6592);lt.objs.editor.remove_line_widget.call(null,this$,hint_6593);
{
var G__6594 = seq__6526_6589;
var G__6595 = chunk__6527_6590;
var G__6596 = count__6528_6591;
var G__6597 = (i__6529_6592 + 1);
seq__6526_6589 = G__6594;
chunk__6527_6590 = G__6595;
count__6528_6591 = G__6596;
i__6529_6592 = G__6597;
continue;
}
} else
{var temp__4092__auto___6598 = cljs.core.seq.call(null,seq__6526_6589);if(temp__4092__auto___6598)
{var seq__6526_6599__$1 = temp__4092__auto___6598;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6526_6599__$1))
{var c__5632__auto___6600 = cljs.core.chunk_first.call(null,seq__6526_6599__$1);{
var G__6601 = cljs.core.chunk_rest.call(null,seq__6526_6599__$1);
var G__6602 = c__5632__auto___6600;
var G__6603 = cljs.core.count.call(null,c__5632__auto___6600);
var G__6604 = 0;
seq__6526_6589 = G__6601;
chunk__6527_6590 = G__6602;
count__6528_6591 = G__6603;
i__6529_6592 = G__6604;
continue;
}
} else
{var hint_6605 = cljs.core.first.call(null,seq__6526_6599__$1);lt.objs.editor.remove_line_widget.call(null,this$,hint_6605);
{
var G__6606 = cljs.core.next.call(null,seq__6526_6599__$1);
var G__6607 = null;
var G__6608 = 0;
var G__6609 = 0;
seq__6526_6589 = G__6606;
chunk__6527_6590 = G__6607;
count__6528_6591 = G__6608;
i__6529_6592 = G__6609;
continue;
}
}
} else
{}
}
break;
}
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jshint","jshint",4158001858),cljs.core.doall.call(null,(function (){var iter__5601__auto__ = ((function (prev){
return (function iter__6530(s__6531){return (new cljs.core.LazySeq(null,((function (prev){
return (function (){var s__6531__$1 = s__6531;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6531__$1);if(temp__4092__auto__)
{var s__6531__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6531__$2))
{var c__5599__auto__ = cljs.core.chunk_first.call(null,s__6531__$2);var size__5600__auto__ = cljs.core.count.call(null,c__5599__auto__);var b__6533 = cljs.core.chunk_buffer.call(null,size__5600__auto__);if((function (){var i__6532 = 0;while(true){
if((i__6532 < size__5600__auto__))
{var vec__6536 = cljs.core._nth.call(null,c__5599__auto__,i__6532);var line = cljs.core.nth.call(null,vec__6536,0,null);var es = cljs.core.nth.call(null,vec__6536,1,null);cljs.core.chunk_append.call(null,b__6533,lt.objs.editor.line_widget.call(null,this$,(line - 1),lt.plugins.jshint.mark.call(null,es,lt.plugins.jshint.__GT_spacing.call(null,lt.objs.editor.line.call(null,this$,(line - 1))))));
{
var G__6610 = (i__6532 + 1);
i__6532 = G__6610;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6533),iter__6530.call(null,cljs.core.chunk_rest.call(null,s__6531__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6533),null);
}
} else
{var vec__6537 = cljs.core.first.call(null,s__6531__$2);var line = cljs.core.nth.call(null,vec__6537,0,null);var es = cljs.core.nth.call(null,vec__6537,1,null);return cljs.core.cons.call(null,lt.objs.editor.line_widget.call(null,this$,(line - 1),lt.plugins.jshint.mark.call(null,es,lt.plugins.jshint.__GT_spacing.call(null,lt.objs.editor.line.call(null,this$,(line - 1))))),iter__6530.call(null,cljs.core.rest.call(null,s__6531__$2)));
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