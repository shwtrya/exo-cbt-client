(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17789bbd"],{"15f6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("b-button",{attrs:{to:{name:"system.setting"},size:"sm",variant:"light"}},[t._v(" Kembali ")])],1),"undefined"!=typeof t.ujian.value?a("div",{staticClass:"card-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("b-form-checkbox",{attrs:{switch:"",value:!0},model:{value:t.ujian.value.reset,callback:function(e){t.$set(t.ujian.value,"reset",e)},expression:"ujian.value.reset"}},[t._v(" Aktifkan reset login peserta ")]),a("div",{staticClass:"form-group mt-4"},[a("label",[t._v("Text Welcome / Peraturan Ujian")]),a("ckeditor",{attrs:{type:"inline"},model:{value:t.ujian.value.text_welcome,callback:function(e){t.$set(t.ujian.value,"text_welcome",e)},expression:"ujian.value.text_welcome"}})],1),a("div",{staticClass:"form-group mt-4"},[a("label",[t._v("Text Finish Ujian")]),a("ckeditor",{attrs:{type:"inline"},model:{value:t.ujian.value.text_finish,callback:function(e){t.$set(t.ujian.value,"text_finish",e)},expression:"ujian.value.text_finish"}})],1),a("div",{staticClass:"form-group"},[a("b-button",{attrs:{variant:"primary",type:"submit",disabled:t.isLoading}},[t._v(" "+t._s(t.isLoading?"Processing...":"Save configuration")+" ")])],1)],1)]):t._e()])])])},i=[],s=(a("96cf"),a("1da1")),r=a("5530"),c=a("2f62"),u=a("cecb"),o={name:"SettingUjian",data:function(){return{}},computed:Object(r["a"])(Object(r["a"])({},Object(c["c"])(["isLoading"])),Object(c["e"])("setting",{ujian:function(t){return t.set_ujian}})),methods:Object(r["a"])(Object(r["a"])({},Object(c["b"])("setting",["getSettingUjian","setSettingUjian"])),{},{submit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.setSettingUjian();case 3:t.getSettingUjian(),t.$bvToast.toast("Setting berhasil disimpan",Object(u["b"])()),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$bvToast.toast(e.t0.message,Object(u["a"])());case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}),created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getSettingUjian();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),t.$bvToast.toast(e.t0.message,Object(u["a"])());case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},l=o,v=(a("5639"),a("2877")),b=Object(v["a"])(l,n,i,!1,null,null,null);e["default"]=b.exports},"44d3":function(t,e,a){},5639:function(t,e,a){"use strict";var n=a("44d3"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-17789bbd.f013b6ba.js.map