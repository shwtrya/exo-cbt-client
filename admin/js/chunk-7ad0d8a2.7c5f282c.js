(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ad0d8a2"],{"3bed":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:{name:"matpel.add"}}},[t._v("Tambah matpel")])],1),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"d-md-block col-sm-7"},[e("router-link",{staticClass:"btn float-right btn-success btn-sm",attrs:{to:{name:"matpel.upload"}}},[e("i",{staticClass:"flaticon-upload-1"}),t._v(" Import matpel ")])],1)]),e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5"},[e("b-form-group",{attrs:{label:"Filter","label-cols-sm":"3","label-align-sm":"right","label-size":"sm","label-for":"filterInput"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:"Cari dengan nama matpel"},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}}),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.search},on:{click:function(a){t.search=""}}},[t._v("Clear")])],1)],1)],1),e("b-form-group",{attrs:{label:"Per page","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm","label-for":"perPageSelect"}},[e("b-form-select",{attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(a){t.perPage=a},expression:"perPage"}})],1)],1)]),t.matpels&&"undefined"!=typeof t.matpels.data?e("div",{staticClass:"table-responsive-md"},[e("b-table",{ref:"selectableTable",attrs:{id:"table-transition-example","primary-key":"kode_mapel","tbody-transition-props":t.transProps,striped:"",hover:"",bordered:"",small:"","show-empty":"",fields:t.fields,items:t.matpels.data,selectable:"","selected-variant":"danger"},on:{"row-selected":t.onRowSelected},scopedSlots:t._u([{key:"cell(show_details)",fn:function(t){return[e("b-button",{attrs:{size:"sm",variant:t.detailsShowing?"danger":"info"},on:{click:t.toggleDetails}},[e("i",{class:t.detailsShowing?"flaticon-circle":"flaticon2-add"})])]}},{key:"row-details",fn:function(a){return[e("b-card",[e("div",{staticClass:"table-responsive-md"},[e("table",{staticClass:"table table-bordered"},[e("tr",[e("td",{attrs:{width:"230"}},[t._v("Type")]),e("td",[e("b-badge",{directives:[{name:"show",rawName:"v-show",value:0==a.item.jurusans&&0==a.item.agama,expression:"row.item.jurusans == 0 && row.item.agama == 0"}],staticClass:"mr-1",attrs:{variant:"success"}},[t._v("umum")]),e("b-badge",{directives:[{name:"show",rawName:"v-show",value:0!=a.item.jurusans,expression:"row.item.jurusans != 0"}],staticClass:"mr-1",attrs:{variant:"success"}},[t._v("khusus")]),e("b-badge",{directives:[{name:"show",rawName:"v-show",value:0!=a.item.agama,expression:"row.item.agama != 0"}],staticClass:"mr-1",attrs:{variant:"success"}},[t._v("agama")]),t._l(a.item.jurusans,(function(s,i){return 0!=a.item.jurusans?e("b-badge",{key:i,staticClass:"mr-1",attrs:{variant:"info"},domProps:{textContent:t._s(s.nama)}}):t._e()}))],2)]),e("tr",[e("td",[t._v("Tim pengoreksi")]),e("td",t._l(a.item.correctors_name,(function(s,i){return 0!=a.item.correctors_name?e("b-badge",{key:i,staticClass:"mr-1",attrs:{variant:"success"},domProps:{textContent:t._s(s.name)}}):t._e()})),1)])])])])]}},{key:"cell(nama)",fn:function(a){return[t._v(" "+t._s(a.item.nama)+" ")]}},{key:"cell(actions)",fn:function(a){return[e("router-link",{staticClass:"btn btn-warning btn-sm mr-1",attrs:{to:{name:"matpel.edit",params:{id:a.item.id}}}},[e("i",{staticClass:"flaticon-edit"}),t._v(" Edit ")]),e("button",{staticClass:"btn btn-danger btn-sm",attrs:{disabled:t.isLoading},on:{click:function(e){return t.deleteMatpel(a.item.id)}}},[e("i",{staticClass:"flaticon2-trash"}),t._v(" Hapus ")])]}}],null,!1,3150856930)}),e("div",{staticClass:"row mt-2"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[e("b-button",{attrs:{variant:"outline-dark",size:"sm"},on:{click:t.selectAllRows}},[e("i",{staticClass:"flaticon-list-3"}),t._v(" Select all ")]),e("b-button",{attrs:{variant:"outline-dark",size:"sm"},on:{click:t.clearSelected}},[e("i",{staticClass:"flaticon2-reload"}),t._v(" Clear selected ")]),e("b-button",{attrs:{variant:"outline-danger",size:"sm"},on:{click:t.bulkRemove}},[e("i",{staticClass:"flaticon2-trash"}),t._v(" Bulk remove ")])],1),e("p",[e("i",{staticClass:"fa fa-bars"}),t._v(" "),e("b",[t._v(t._s(t.matpels.data.length))]),t._v(" matpel dari "),e("b",[t._v(t._s(t.matpels.total))]),t._v(" total data matpel")])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"float-right"},[e("b-pagination",{attrs:{size:"sm","total-rows":t.matpels.total,"per-page":t.matpels.per_page,disabled:t.isLoading},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}})],1)])])],1):[e("div",{staticClass:"text-center my-2"},[t._v(" Loading... ")])]],2),t._m(1)])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-sm-5"},[e("h4",{staticClass:"card-title mb-0",attrs:{id:"traffic"}},[t._v("Manage Matpel")]),e("div",{staticClass:"small text-muted"},[t._v("Buat edit dan hapus matpel")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-footer"},[e("strong",[t._v("Sematic kode matpel : ")]),t._v(" "),e("u",[t._v("kode-nomor-kategori")]),t._v(" "),e("strong",[t._v("Contoh :")]),t._v(" BC-012-U (U: Umum, A: Agama, K: khusus) ")])}],l=(e("d81d"),e("ac1f"),e("841c"),e("5530")),r=e("2f62"),n=e("cecb"),o=e("2ef0"),c=e.n(o),d={name:"DataMatpel",created:function(){this.getMatpels({perPage:this.perPage})},data:function(){return{transProps:{name:"flip-list"},fields:[{key:"show_details",label:"Detail"},{key:"kode_mapel",label:"Kode matpel",sortable:!0},{key:"nama",label:"Nama mata pelajaran",sortable:!0},{key:"actions",label:"Aksi"}],perPage:20,pageOptions:[20,50,100],search:"",data:{nama:"",kode_mapel:""},isBusy:!0,selected:[]}},computed:Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(r["c"])(["isLoading"])),Object(r["e"])(["errors"])),Object(r["e"])("matpel",{matpels:function(t){return t.matpels},from:function(t){return t.from}})),{},{page:{get:function(){return this.$store.state.matpel.page},set:function(t){this.$store.commit("matpel/SET_PAGE",t)}}}),methods:Object(l["a"])(Object(l["a"])({},Object(r["b"])("matpel",["getMatpels","removeMatpel","removeMatpelMultiple"])),{},{onRowSelected:function(t){this.selected=t},selectAllRows:function(){this.$refs.selectableTable.selectAllRows()},clearSelected:function(){this.$refs.selectableTable.clearSelected()},bulkRemove:function(){var t=this;""!=this.selected&&this.$swal({title:"Informasi",text:"Matpel yang dipilih akan dihapus beserta data yang terkait",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#c7c7c7",confirmButtonText:"Iya, Lanjutkan!"}).then((function(a){if(a.value){var e=t.selected.map((function(t){return t.id}));t.removeMatpelMultiple({matpel_id:e}).then((function(){t.getMatpels({search:t.search,perPage:t.perPage}),t.$bvToast.toast("Data matpel berhasil dihapus.",Object(n["b"])())})).catch((function(a){t.$bvToast.toast(a.message,Object(n["a"])())}))}}))},deleteMatpel:function(t){var a=this;this.$swal({title:"Informasi",text:"Matpel yang dipilih akan dihapus beserta data yang terkait",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#c7c7c7",confirmButtonText:"Iya, Lanjutkan!"}).then((function(e){e.value&&a.removeMatpel(t).then((function(){a.getMatpels({search:a.search,perPage:a.perPage}),a.$bvToast.toast("Data matpel berhasil dihapus.",Object(n["b"])())})).catch((function(t){a.$bvToast.toast(t.message,Object(n["a"])())}))}))}}),watch:{page:function(){this.getMatpels({search:this.search,perPage:this.perPage})},search:c.a.debounce((function(t){this.getMatpels({search:this.search,perPage:this.perPage})}),500),perPage:function(){this.getMatpels({search:this.search,perPage:this.perPage})}}},m=d,p=e("2877"),u=Object(p["a"])(m,s,i,!1,null,null,null);a["default"]=u.exports},d81d:function(t,a,e){"use strict";var s=e("23e7"),i=e("b727").map,l=e("1dde"),r=e("ae40"),n=l("map"),o=r("map");s({target:"Array",proto:!0,forced:!n||!o},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-7ad0d8a2.7c5f282c.js.map