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

lt.plugins.jshint.errors = lt.objs.thread.thread_STAR_.call(null,(function tfun5882(){var orig__5699__auto__ = argsArray(arguments);var msg__5700__auto__ = orig__5699__auto__.shift();var args__5701__auto__ = orig__5699__auto__.map(cljs.reader.read_string);var raise = ((function (orig__5699__auto__,msg__5700__auto__,args__5701__auto__){
return (function (obj__5702__auto__,k__5703__auto__,v__5704__auto__){return _send(obj__5702__auto__,k__5703__auto__,cljs.core.pr_str.call(null,v__5704__auto__),"clj");
});})(orig__5699__auto__,msg__5700__auto__,args__5701__auto__))
;args__5701__auto__.unshift(msg__5700__auto__.obj);
return (function (obj_id,code,opts){var jshint = require([cljs.core.str(ltpath),cljs.core.str("/core/node_modules/jshint")].join('')).JSHINT;jshint.call(null,code,(cljs.core.truth_(opts)?cljs.core.clj__GT_js.call(null,opts):null));
return raise.call(null,obj_id,new cljs.core.Keyword(null,"hinted","hinted",4091697368),cljs.core.js__GT_clj.call(null,jshint.errors,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
}).apply(null,args__5701__auto__);
}));

lt.plugins.jshint.mark = (function mark(errors,spacing){var e__5626__auto__ = crate.core.html.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.hintwrapper","div.hintwrapper",570322369),cljs.core.with_meta(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span.spacer","span.spacer",4763675330),spacing], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),17,new cljs.core.Keyword(null,"end-column","end-column",3799845882),25], true)),cljs.core.with_meta(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.with_meta(cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"jshinterrors"], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),18,new cljs.core.Keyword(null,"end-column","end-column",3799845882),31], true)),(function (){var iter__5192__auto__ = (function iter__5893(s__5894){return (new cljs.core.LazySeq(null,(function (){var s__5894__$1 = s__5894;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5894__$1);if(temp__4092__auto__)
{var s__5894__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5894__$2))
{var c__5190__auto__ = cljs.core.chunk_first.call(null,s__5894__$2);var size__5191__auto__ = cljs.core.count.call(null,c__5190__auto__);var b__5896 = cljs.core.chunk_buffer.call(null,size__5191__auto__);if((function (){var i__5895 = 0;while(true){
if((i__5895 < size__5191__auto__))
{var e = cljs.core._nth.call(null,c__5190__auto__,i__5895);cljs.core.chunk_append.call(null,b__5896,cljs.core.with_meta(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"reason","reason",4373906870).call(null,e,new cljs.core.Keyword(null,"raw","raw",1014016922).call(null,e))], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),20,new cljs.core.Keyword(null,"end-column","end-column",3799845882),32], true)));
{
var G__5915 = (i__5895 + 1);
i__5895 = G__5915;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5896),iter__5893.call(null,cljs.core.chunk_rest.call(null,s__5894__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5896),null);
}
} else
{var e = cljs.core.first.call(null,s__5894__$2);return cljs.core.cons.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"reason","reason",4373906870).call(null,e,new cljs.core.Keyword(null,"raw","raw",1014016922).call(null,e))], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),20,new cljs.core.Keyword(null,"end-column","end-column",3799845882),32], true)),iter__5893.call(null,cljs.core.rest.call(null,s__5894__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5192__auto__.call(null,errors);
})()], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),20,new cljs.core.Keyword(null,"end-column","end-column",3799845882),34], true))], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),20,new cljs.core.Keyword(null,"end-column","end-column",3799845882),35], true)));var seq__5897_5916 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__5898_5917 = null;var count__5899_5918 = 0;var i__5900_5919 = 0;while(true){
if((i__5900_5919 < count__5899_5918))
{var vec__5901_5920 = cljs.core._nth.call(null,chunk__5898_5917,i__5900_5919);var ev__5627__auto___5921 = cljs.core.nth.call(null,vec__5901_5920,0,null);var func__5628__auto___5922 = cljs.core.nth.call(null,vec__5901_5920,1,null);lt.util.dom.on.call(null,e__5626__auto__,ev__5627__auto___5921,func__5628__auto___5922);
{
var G__5923 = seq__5897_5916;
var G__5924 = chunk__5898_5917;
var G__5925 = count__5899_5918;
var G__5926 = (i__5900_5919 + 1);
seq__5897_5916 = G__5923;
chunk__5898_5917 = G__5924;
count__5899_5918 = G__5925;
i__5900_5919 = G__5926;
continue;
}
} else
{var temp__4092__auto___5927 = cljs.core.seq.call(null,seq__5897_5916);if(temp__4092__auto___5927)
{var seq__5897_5928__$1 = temp__4092__auto___5927;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5897_5928__$1))
{var c__5223__auto___5929 = cljs.core.chunk_first.call(null,seq__5897_5928__$1);{
var G__5930 = cljs.core.chunk_rest.call(null,seq__5897_5928__$1);
var G__5931 = c__5223__auto___5929;
var G__5932 = cljs.core.count.call(null,c__5223__auto___5929);
var G__5933 = 0;
seq__5897_5916 = G__5930;
chunk__5898_5917 = G__5931;
count__5899_5918 = G__5932;
i__5900_5919 = G__5933;
continue;
}
} else
{var vec__5902_5934 = cljs.core.first.call(null,seq__5897_5928__$1);var ev__5627__auto___5935 = cljs.core.nth.call(null,vec__5902_5934,0,null);var func__5628__auto___5936 = cljs.core.nth.call(null,vec__5902_5934,1,null);lt.util.dom.on.call(null,e__5626__auto__,ev__5627__auto___5935,func__5628__auto___5936);
{
var G__5937 = cljs.core.next.call(null,seq__5897_5928__$1);
var G__5938 = null;
var G__5939 = 0;
var G__5940 = 0;
seq__5897_5916 = G__5937;
chunk__5898_5917 = G__5938;
count__5899_5918 = G__5939;
i__5900_5919 = G__5940;
continue;
}
}
} else
{}
}
break;
}
return e__5626__auto__;
});

lt.plugins.jshint.__GT_spacing = (function __GT_spacing(text){if(cljs.core.truth_(text))
{return cljs.core.first.call(null,cljs.core.re_seq.call(null,/^\s+/,text));
} else
{return null;
}
});

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("cljs.user","inline-hints","cljs.user/inline-hints",718710334),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.with_meta(cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"hinted","hinted",4091697368),null], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),28,new cljs.core.Keyword(null,"end-column","end-column",3799845882),38], true)),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,hints){return lt.objs.editor.operation.call(null,lt.objs.editor.__GT_cm_ed.call(null,this$),(function (){var prev = lt.objs.editor.__GT_cm_ed.call(null,this$).getScrollInfo();var seq__5903_5941 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"jshint","jshint",4158001858).call(null,cljs.core.deref.call(null,this$)));var chunk__5904_5942 = null;var count__5905_5943 = 0;var i__5906_5944 = 0;while(true){
if((i__5906_5944 < count__5905_5943))
{var hint_5945 = cljs.core._nth.call(null,chunk__5904_5942,i__5906_5944);lt.objs.editor.remove_line_widget.call(null,this$,hint_5945);
{
var G__5946 = seq__5903_5941;
var G__5947 = chunk__5904_5942;
var G__5948 = count__5905_5943;
var G__5949 = (i__5906_5944 + 1);
seq__5903_5941 = G__5946;
chunk__5904_5942 = G__5947;
count__5905_5943 = G__5948;
i__5906_5944 = G__5949;
continue;
}
} else
{var temp__4092__auto___5950 = cljs.core.seq.call(null,seq__5903_5941);if(temp__4092__auto___5950)
{var seq__5903_5951__$1 = temp__4092__auto___5950;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5903_5951__$1))
{var c__5223__auto___5952 = cljs.core.chunk_first.call(null,seq__5903_5951__$1);{
var G__5953 = cljs.core.chunk_rest.call(null,seq__5903_5951__$1);
var G__5954 = c__5223__auto___5952;
var G__5955 = cljs.core.count.call(null,c__5223__auto___5952);
var G__5956 = 0;
seq__5903_5941 = G__5953;
chunk__5904_5942 = G__5954;
count__5905_5943 = G__5955;
i__5906_5944 = G__5956;
continue;
}
} else
{var hint_5957 = cljs.core.first.call(null,seq__5903_5951__$1);lt.objs.editor.remove_line_widget.call(null,this$,hint_5957);
{
var G__5958 = cljs.core.next.call(null,seq__5903_5951__$1);
var G__5959 = null;
var G__5960 = 0;
var G__5961 = 0;
seq__5903_5941 = G__5958;
chunk__5904_5942 = G__5959;
count__5905_5943 = G__5960;
i__5906_5944 = G__5961;
continue;
}
}
} else
{}
}
break;
}
lt.object.merge_BANG_.call(null,this$,cljs.core.with_meta(cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"jshint","jshint",4158001858),cljs.core.doall.call(null,(function (){var iter__5192__auto__ = (function iter__5907(s__5908){return (new cljs.core.LazySeq(null,(function (){var s__5908__$1 = s__5908;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5908__$1);if(temp__4092__auto__)
{var s__5908__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5908__$2))
{var c__5190__auto__ = cljs.core.chunk_first.call(null,s__5908__$2);var size__5191__auto__ = cljs.core.count.call(null,c__5190__auto__);var b__5910 = cljs.core.chunk_buffer.call(null,size__5191__auto__);if((function (){var i__5909 = 0;while(true){
if((i__5909 < size__5191__auto__))
{var vec__5913 = cljs.core._nth.call(null,c__5190__auto__,i__5909);var line = cljs.core.nth.call(null,vec__5913,0,null);var es = cljs.core.nth.call(null,vec__5913,1,null);cljs.core.chunk_append.call(null,b__5910,lt.objs.editor.line_widget.call(null,this$,(line - 1),lt.plugins.jshint.mark.call(null,es,lt.plugins.jshint.__GT_spacing.call(null,lt.objs.editor.line.call(null,this$,(line - 1))))));
{
var G__5962 = (i__5909 + 1);
i__5909 = G__5962;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5910),iter__5907.call(null,cljs.core.chunk_rest.call(null,s__5908__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5910),null);
}
} else
{var vec__5914 = cljs.core.first.call(null,s__5908__$2);var line = cljs.core.nth.call(null,vec__5914,0,null);var es = cljs.core.nth.call(null,vec__5914,1,null);return cljs.core.cons.call(null,lt.objs.editor.line_widget.call(null,this$,(line - 1),lt.plugins.jshint.mark.call(null,es,lt.plugins.jshint.__GT_spacing.call(null,lt.objs.editor.line.call(null,this$,(line - 1))))),iter__5907.call(null,cljs.core.rest.call(null,s__5908__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5192__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"line","line",1017226086),cljs.core.filter.call(null,cljs.core.identity,hints)));
})())], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),36,new cljs.core.Keyword(null,"end-column","end-column",3799845882),181], true)));
return lt.objs.editor.__GT_cm_ed.call(null,this$).scrollTo(prev.left,prev.top);
}));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("cljs.user","on-change","cljs.user/on-change",1485966216),new cljs.core.Keyword(null,"debounce","debounce",1556599227),750,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run JSHint on change",new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.with_meta(cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"change","change",3947235106),null], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),44,new cljs.core.Keyword(null,"end-column","end-column",3799845882),38], true)),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.plugins.jshint.errors.call(null,this$,lt.objs.editor.__GT_val.call(null,this$),new cljs.core.Keyword("cljs.user","jshint-options","cljs.user/jshint-options",4113218501).call(null,cljs.core.deref.call(null,this$)));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("cljs.user","on-save","cljs.user/on-save",2182499403),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.with_meta(cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"save","save",1017427183),null], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),49,new cljs.core.Keyword(null,"end-column","end-column",3799845882),36], true)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run JSHint on save",new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.plugins.jshint.errors.call(null,this$,lt.objs.editor.__GT_val.call(null,this$),new cljs.core.Keyword("cljs.user","jshint-options","cljs.user/jshint-options",4113218501).call(null,cljs.core.deref.call(null,this$)));
}));

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("cljs.user","jshint-options","cljs.user/jshint-options",4113218501),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.with_meta(cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),56,new cljs.core.Keyword(null,"end-column","end-column",3799845882),46], true)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Set JSHint options",new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.with_meta(cljs.core.PersistentVector.fromArray([cljs.core.with_meta(cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"label","label",1116631654),"options",new cljs.core.Keyword(null,"example","example",3985900764),"{:maxparams 2}",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"clj","clj",1014002835)], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),61,new cljs.core.Keyword(null,"end-column","end-column",3799845882),39], true))], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),61,new cljs.core.Keyword(null,"end-column","end-column",3799845882),40], true)),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,opts){return lt.object.merge_BANG_.call(null,this$,cljs.core.with_meta(cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("cljs.user","jshint-options","cljs.user/jshint-options",4113218501),opts], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),63,new cljs.core.Keyword(null,"end-column","end-column",3799845882),73], true)));
}));

lt.objs.command.command.call(null,cljs.core.with_meta(cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"jshint.run","jshint.run",2779549279),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSHint: Run jshint on current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (this$){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.jshint.errors.call(null,ed,lt.objs.editor.__GT_val.call(null,ed),new cljs.core.Keyword("cljs.user","jshint-options","cljs.user/jshint-options",4113218501).call(null,cljs.core.deref.call(null,ed)));
} else
{return null;
}
})], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"end-line","end-line",2693041432),69,new cljs.core.Keyword(null,"end-column","end-column",3799845882),79], true)));


//# sourceMappingURL=