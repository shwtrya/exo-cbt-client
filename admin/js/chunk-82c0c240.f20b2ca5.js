(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-82c0c240"],{"7b16":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:{name:"guru.add"}}},[t._v("Tambah user")])],1),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"d-md-block col-sm-7"},[a("router-link",{staticClass:"btn float-right btn-success btn-sm",attrs:{to:{name:"guru.upload"}}},[a("i",{staticClass:"flaticon-upload-1"}),t._v(" Import user ")])],1)]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5"},[a("b-form-group",{attrs:{label:"Filter","label-cols-sm":"3","label-align-sm":"right","label-size":"sm","label-for":"filterInput"}},[a("b-input-group",{attrs:{size:"sm"}},[a("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:"Cari user"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!t.search},on:{click:function(e){t.search=""}}},[t._v("Clear")])],1)],1)],1),a("b-form-group",{attrs:{label:"Per page","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm","label-for":"perPageSelect"}},[a("b-form-select",{attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1)]),"undefined"!=typeof t.users.data?a("div",{staticClass:"table-responsive-md"},[a("b-table",{ref:"selectableTable",attrs:{id:"table-transition-example","tbody-transition-props":t.transProps,striped:"",hover:"",bordered:"",small:"","show-empty":"",fields:t.fields,items:t.users.data,selectable:"","selected-variant":"danger"},on:{"row-selected":t.onRowSelected},scopedSlots:t._u([{key:"cell(actions)",fn:function(e){return[a("router-link",{staticClass:"btn btn-warning btn-sm mr-1",attrs:{to:{name:"guru.edit",params:{id:e.item.id}}}},[a("i",{staticClass:"flaticon-edit"}),t._v(" Edit ")]),a("b-button",{attrs:{variant:"danger",size:"sm",disabled:t.isLoading},on:{click:function(a){return t.deleteUser(e.item.id)}}},[a("i",{staticClass:"flaticon2-trash"}),t._v(" Hapus ")])]}}],null,!1,1909264568)}),a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[a("b-button",{attrs:{variant:"outline-dark",size:"sm"},on:{click:t.selectAllRows}},[a("i",{staticClass:"flaticon-list-3"}),t._v(" Select all ")]),a("b-button",{attrs:{variant:"outline-dark",size:"sm"},on:{click:t.clearSelected}},[a("i",{staticClass:"flaticon2-reload"}),t._v(" Clear selected ")]),a("b-button",{attrs:{variant:"outline-danger",size:"sm"},on:{click:t.bulkRemove}},[a("i",{staticClass:"flaticon2-trash"}),t._v(" Bulk remove ")])],1),a("p",[a("i",{staticClass:"fa fa-bars"}),t._v(" "+t._s(t.users.data.length)+" user dari "+t._s(t.users.total)+" total data user")])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"float-right"},[a("b-pagination",{attrs:{size:"sm","total-rows":t.users.total,"per-page":t.users.per_page,disabled:t.isLoading},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])])],1):[a("div",{staticClass:"text-center my-2"},[t._v(" Loading... ")])]],2),a("div",{staticClass:"card-footer"})])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-5"},[a("h4",{staticClass:"card-title mb-0",attrs:{id:"traffic"}},[t._v("Manage User")]),a("div",{staticClass:"small text-muted"},[t._v("Buat edit dan hapus user")])])}],i=(a("d81d"),a("ac1f"),a("841c"),a("96cf"),a("1da1")),l=a("5530"),n=a("2f62"),c=a("cecb"),o=(a("2ef0"),{name:"DataGuru",data:function(){return{transProps:{name:"flip-list"},fields:[{key:"id",label:"ID",sortable:!0},{key:"name",label:"Nama",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"actions",label:"Aksi"}],perPage:20,pageOptions:[20,50,100],search:"",selected:[]}},computed:Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(n["c"])(["isLoading"])),Object(n["e"])("user",{users:function(t){return t.users_data}})),{},{page:{get:function(){return this.$store.state.user.page},set:function(t){this.$store.commit("user/SET_PAGE",t)}}}),methods:Object(l["a"])(Object(l["a"])({},Object(n["b"])("user",["getUsers","removeUser","removeUserMultiple"])),{},{onRowSelected:function(t){this.selected=t},selectAllRows:function(){this.$refs.selectableTable.selectAllRows()},clearSelected:function(){this.$refs.selectableTable.clearSelected()},bulkRemove:function(){var t=this;""!=this.selected&&this.$swal({title:"Informasi",text:"User yang dipilih akan dihapus berserta data yang terkait",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#c7c7c7",confirmButtonText:"Iya, Lanjutkan!"}).then((function(e){if(e.value){var a=t.selected.map((function(t){return t.id}));t.removeUserMultiple({user_id:a}).then((function(){t.getUsers({search:t.search,perPage:t.perPage}),t.$bvToast.toast("Data user berhasil dihapus.",Object(c["b"])())})).catch((function(e){t.$bvToast.toast(e.message,Object(c["a"])())}))}}))},deleteUser:function(t){var e=this;this.$swal({title:"Informasi",text:"User yang dipilih akan dihapus berserta data yang terkait",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#c7c7c7",confirmButtonText:"Iya, Lanjutkan!"}).then((function(a){a.value&&e.removeUser(t).then((function(){e.getUsers({search:e.search,perPage:e.perPage}),e.$bvToast.toast("Data user berhasil dihapus.",Object(c["b"])())})).catch((function(t){e.$bvToast.toast(t.message,Object(c["a"])())}))}))}}),created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getUsers({perPage:t.perPage});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),t.$bvToast.toast(e.t0.message,Object(c["a"])());case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}),u=o,d=a("2877"),b=Object(d["a"])(u,s,r,!1,null,null,null);e["default"]=b.exports},d81d:function(t,e,a){"use strict";var s=a("23e7"),r=a("b727").map,i=a("1dde"),l=a("ae40"),n=i("map"),c=l("map");s({target:"Array",proto:!0,forced:!n||!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-82c0c240.f20b2ca5.js.map