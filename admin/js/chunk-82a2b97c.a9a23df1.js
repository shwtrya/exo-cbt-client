(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-82a2b97c"],{d81d:function(t,e,a){"use strict";var s=a("23e7"),i=a("b727").map,l=a("1dde"),r=a("ae40"),n=l("map"),c=r("map");s({target:"Array",proto:!0,forced:!n||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e5ca:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("router-link",{staticClass:"btn btn-primary btn-sm mr-1",attrs:{to:{name:"peserta.add"}}},[t._v("Tambah peserta")])],1),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"d-md-block col-sm-7"},[a("router-link",{staticClass:"btn float-right btn-primary btn-sm mx-1",attrs:{to:{name:"peserta.kartu",params:{id:t.sekolah}}}},[a("i",{staticClass:"flaticon2-print"}),t._v(" Cetak kartu peserta ")]),a("router-link",{staticClass:"btn float-right btn-success btn-sm",attrs:{to:{name:"peserta.upload"}}},[a("i",{staticClass:"flaticon-upload-1"}),t._v(" Import peserta ")])],1)]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5"},[a("b-form-group",{attrs:{label:"Filter","label-cols-sm":"3","label-align-sm":"right","label-size":"sm","label-for":"filterInput"}},[a("b-input-group",{attrs:{size:"sm"}},[a("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:"Cari peserta"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!t.search},on:{click:function(e){t.search=""}}},[t._v("Clear")])],1)],1)],1),a("b-form-group",{attrs:{label:"Per page","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm","label-for":"perPageSelect"}},[a("b-form-select",{attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1)]),"undefined"!=typeof t.pesertas.data?a("div",{staticClass:"table-responsive-md"},[a("b-table",{ref:"selectableTable",attrs:{striped:"",hover:"",bordered:"",small:"","show-empty":"",fields:t.fields,items:t.pesertas.data,selectable:"","selected-variant":"danger"},on:{"row-selected":t.onRowSelected},scopedSlots:t._u([{key:"cell(show_details)",fn:function(t){return[a("b-button",{attrs:{size:"sm",variant:t.detailsShowing?"danger":"info"},on:{click:t.toggleDetails}},[a("i",{class:t.detailsShowing?"flaticon-circle":"flaticon2-add"})])]}},{key:"row-details",fn:function(e){return[a("b-card",[a("div",{staticClass:"table-responsive-md"},[a("table",{staticClass:"table table-striped"},[a("tr",[a("td",[t._v("Password")]),a("td",[t._v(t._s(e.item.password))])]),a("tr",[a("td",[t._v("Agama")]),a("td",[t._v(t._s(e.item.agama.nama))])]),a("tr",[a("td",[t._v("Jurusan")]),a("td",[t._v(t._s(e.item.jurusan.nama))])])])])])]}},{key:"cell(actions)",fn:function(e){return[a("b-button",{staticClass:"mr-1",attrs:{variant:"warning",size:"sm",to:{name:"peserta.edit",params:{id:e.item.id}}}},[a("i",{staticClass:"flaticon-edit"}),t._v(" Edit ")]),a("b-button",{attrs:{variant:"danger",size:"sm",disabled:t.isLoading},on:{click:function(a){return t.deletePeserta(e.item.id)}}},[a("i",{staticClass:"flaticon2-trash"}),t._v(" Hapus ")])]}}],null,!1,239695855)}),a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[a("b-button",{attrs:{variant:"outline-dark",size:"sm"},on:{click:t.selectAllRows}},[a("i",{staticClass:"flaticon-list-3"}),t._v(" Select all ")]),a("b-button",{attrs:{variant:"outline-dark",size:"sm"},on:{click:t.clearSelected}},[a("i",{staticClass:"flaticon2-reload"}),t._v(" Clear selected ")]),a("b-button",{attrs:{variant:"outline-danger",size:"sm"},on:{click:t.bulkRemove}},[a("i",{staticClass:"flaticon2-trash"}),t._v(" Bulk remove ")])],1),a("p",[a("i",{staticClass:"fa fa-bars"}),t._v(" "),a("b",[t._v(t._s(t.pesertas.data.length))]),t._v(" peserta dari "),a("b",[t._v(t._s(t.pesertas.total))]),t._v(" total data peserta")])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"float-right"},[a("b-pagination",{attrs:{size:"sm","total-rows":t.pesertas.total,"per-page":t.pesertas.per_page,disabled:t.isLoading},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])])],1):[a("div",{staticClass:"text-center my-2"},[t._v(" Loading... ")])]],2),a("div",{staticClass:"card-footer"})])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-5"},[a("h4",{staticClass:"card-title mb-0",attrs:{id:"traffic"}},[t._v("Manage Peserta")]),a("div",{staticClass:"small text-muted"},[t._v("Manage data peserta")])])}],l=(a("d81d"),a("ac1f"),a("841c"),a("5530")),r=a("2f62"),n=a("cecb"),c=a("2ef0"),o=a.n(c),d={name:"DataPeserat",created:function(){this.changeData()},data:function(){return{fields:[{key:"show_details",label:"Detail"},{key:"sesi",label:"Sesi"},{key:"no_ujian",label:"No ujian"},{key:"nama",label:"Nama peserta"},{key:"actions",label:"Aksi"}],search:"",isBusy:!0,perPage:30,pageOptions:[30,80,160],sekolah:0,selected:[]}},computed:Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(r["c"])(["isLoading"])),Object(r["e"])("peserta",{pesertas:function(t){return t.pesertas}})),{},{page:{get:function(){return this.$store.state.peserta.page},set:function(t){this.$store.commit("peserta/SET_PAGE",t)}}}),methods:Object(l["a"])(Object(l["a"])({},Object(r["b"])("peserta",["getPesertas","removePeserta","removePesertaMultiple"])),{},{onRowSelected:function(t){this.selected=t},selectAllRows:function(){this.$refs.selectableTable.selectAllRows()},clearSelected:function(){this.$refs.selectableTable.clearSelected()},changeData:function(){this.getPesertas({search:this.search,perPage:this.perPage})},bulkRemove:function(){var t=this;""!=this.selected&&this.$swal({title:"Informasi",text:"Peserta yang dipilih akan dihapus beserta dengan data yang terkait",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#c7c7c7",confirmButtonText:"Iya, Lanjutkan!"}).then((function(e){if(e.value){var a=t.selected.map((function(t){return t.id}));t.removePesertaMultiple({peserta_id:a}).then((function(e){t.getPesertas({}),t.$bvToast.toast("Data peserta berhasil dihapus.",Object(n["b"])())})).catch((function(e){t.$bvToast.toast(e.message,Object(n["a"])())}))}}))},deletePeserta:function(t){var e=this;this.$swal({title:"Informasi",text:"Peserta yang dipilih akan dihapus beserta dengan data yang terkait",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#c7c7c7",confirmButtonText:"Iya, Lanjutkan!"}).then((function(a){a.value&&e.removePeserta(t).then((function(t){e.getPesertas({}),e.$bvToast.toast("Data peserta berhasil dihapus.",Object(n["b"])())})).catch((function(t){e.$bvToast.toast(t.message,Object(n["a"])())}))}))}}),watch:{page:function(){this.changeData()},search:o.a.debounce((function(t){this.changeData()}),500),perPage:function(){this.changeData()}}},u=d,b=a("2877"),p=Object(b["a"])(u,s,i,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-82a2b97c.a9a23df1.js.map