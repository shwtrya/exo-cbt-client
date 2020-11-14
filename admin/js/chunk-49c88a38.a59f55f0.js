(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49c88a38"],{"2cfc":function(t,i,e){"use strict";var a=e("9743"),s=e.n(a);s.a},7901:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"player-wrapper",attrs:{id:"audio"}},[e("div",{staticClass:"player"},[e("div",{staticClass:"player-controls"},[e("div",[e("a",{attrs:{title:"Stop",href:"#"},on:{click:function(i){return i.preventDefault(),t.stop(i)}}},[e("svg",{attrs:{width:"18px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{fill:"currentColor",d:"M16,4.995v9.808C16,15.464,15.464,16,14.804,16H4.997C4.446,16,4,15.554,4,15.003V5.196C4,4.536,4.536,4,5.196,4h9.808C15.554,4,16,4.446,16,4.995z"}})])])]),e("div",[e("a",{attrs:{title:"Play/Pause",href:"#"},on:{click:function(i){i.preventDefault(),t.playing=!t.playing}}},[e("svg",{attrs:{width:"18px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[t.playing?e("path",{attrs:{fill:"currentColor",d:"M15,3h-2c-0.553,0-1,0.048-1,0.6v12.8c0,0.552,0.447,0.6,1,0.6h2c0.553,0,1-0.048,1-0.6V3.6C16,3.048,15.553,3,15,3z M7,3H5C4.447,3,4,3.048,4,3.6v12.8C4,16.952,4.447,17,5,17h2c0.553,0,1-0.048,1-0.6V3.6C8,3.048,7.553,3,7,3z"}}):e("path",{attrs:{fill:"currentColor",d:"M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"}})])])]),e("div",[e("div",{staticClass:"player-progress",attrs:{title:"Time played : Total time"}},[e("div",{staticClass:"player-seeker",style:{width:this.percentComplete+"%"}})]),e("div",{staticClass:"player-time"},[e("div",{staticClass:"player-time-current"},[t._v(t._s(t._f("convertTimeHHMMSS")(this.currentSeconds)))]),e("div",{staticClass:"player-time-total"},[t._v(t._s(t._f("convertTimeHHMMSS")(this.durationSeconds)))])])])]),e("audio",{ref:"audiofile",staticStyle:{display:"none"},attrs:{loop:t.innerLoop,src:t.file,preload:"auto"}})])])},s=[],n=(e("c975"),{props:{file:{type:String,default:null},autoPlay:{type:Boolean,default:!1},loop:{type:Boolean,default:!1}},data:function(){return{audio:void 0,currentSeconds:0,durationSeconds:0,innerLoop:!1,loaded:!1,playing:!1,previousVolume:35,showVolume:!1,volume:100}},computed:{percentComplete:function(){return parseInt(this.currentSeconds/this.durationSeconds*100)},muted:function(){return this.volume/100===0}},filters:{convertTimeHHMMSS:function(t){var i=new Date(1e3*t).toISOString().substr(11,8);return 0===i.indexOf("00:")?i.substr(3):i}},watch:{playing:function(t){if(t)return this.audio.play();this.audio.pause()},volume:function(t){this.showVolume=!1,this.audio.volume=this.volume/100}},methods:{download:function(){this.stop(),window.open(this.file,"download")},load:function(){if(this.audio.readyState>=2)return this.loaded=!0,this.durationSeconds=parseInt(this.audio.duration),this.playing=this.autoPlay;throw new Error("Failed to load sound file.")},mute:function(){if(this.muted)return this.volume=this.previousVolume;this.previousVolume=this.volume,this.volume=0},seek:function(t){if(this.playing&&"SPAN"!==t.target.tagName){var i=t.target.getBoundingClientRect(),e=(t.clientX-i.left)/i.width;this.audio.currentTime=parseInt(this.audio.duration*e)}},stop:function(){this.playing=!1,this.audio.currentTime=0},update:function(t){this.currentSeconds=parseInt(this.audio.currentTime)}},created:function(){this.innerLoop=this.loop},mounted:function(){var t=this;this.audio=this.$el.querySelectorAll("audio")[0],this.audio.addEventListener("timeupdate",this.update),this.audio.addEventListener("loadeddata",this.load),this.audio.addEventListener("pause",(function(){t.playing=!1})),this.audio.addEventListener("play",(function(){t.playing=!0}))}}),o=n,r=(e("8186"),e("2877")),l=Object(r["a"])(o,a,s,!1,null,null,null);i["a"]=l.exports},8186:function(t,i,e){"use strict";var a=e("94f8"),s=e.n(a);s.a},"94f8":function(t,i,e){},9743:function(t,i,e){},c75c:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("router-link",{staticClass:"btn btn-light btn-sm",attrs:{to:{name:"banksoal.soal",params:{banksoal_id:t.$route.params.banksoal_id}}}},[t._v("Kembali")])],1),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card"},[t._m(0),e("div",{staticClass:"card-body"},[t.showEditor?e("ckeditor",{attrs:{config:t.editorConfig,type:"inline"},model:{value:t.question,callback:function(i){t.question=i},expression:"question"}}):t._e()],1)]),2==t.tipe_soal?e("div",{staticClass:"card"},[t._m(1),e("div",{staticClass:"card-body"},[t.showEditor?e("ckeditor",{attrs:{config:t.editorConfig,type:"inline"},model:{value:t.rujukan,callback:function(i){t.rujukan=i},expression:"rujukan"}}):t._e()],1)]):t._e(),2!=t.tipe_soal?e("div",{staticClass:"card"},[t._m(2),e("div",{staticClass:"card-body"},[e("div",{staticClass:"table-responsive-md"},[e("table",{staticClass:"table table-borderless"},t._l(t.pilihan,(function(i,a){return e("tr",[e("td",{attrs:{width:"10px"}},[e("b-form-radio",{attrs:{name:"correct",size:"lg",value:a},model:{value:t.correct,callback:function(i){t.correct=i},expression:"correct"}},[e("span",{staticClass:"text-uppercase"},[t._v(t._s(t._f("charIndex")(a)))])])],1),e("td",[t.showEditor?e("ckeditor",{attrs:{config:t.editorConfig,type:"inline"},model:{value:t.pilihan[a],callback:function(i){t.$set(t.pilihan,a,i)},expression:"pilihan[index]"}}):t._e()],1)])})),0)])])]):t._e()]),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"card"},[t._m(3),e("div",{staticClass:"card-body"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Tipe soal")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.tipe_soal,expression:"tipe_soal"}],staticClass:"form-control",on:{change:function(i){var e=Array.prototype.filter.call(i.target.options,(function(t){return t.selected})).map((function(t){var i="_value"in t?t._value:t.value;return i}));t.tipe_soal=i.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"1"}},[t._v("Pilihan ganda")]),e("option",{attrs:{value:"2"}},[t._v("Essai")]),e("option",{attrs:{value:"3"}},[t._v("Listening")])])]),""==t.direction&&3==t.tipe_soal?e("div",{staticClass:"form-group"},[e("label",[t._v("File direction")]),e("div",{staticClass:"input-group"},[e("div",{staticClass:"custom-file"},[e("input",{staticClass:"custom-file-input",attrs:{type:"file"},on:{change:t.handleFileUploadDirection}}),e("label",{staticClass:"custom-file-label"},[t._v(t._s(t.labelDirection?t.labelDirection:"Pilih File..."))])]),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.submitFileDirection}},[t._v("Upload")])])])]):t._e(),""==t.audio?e("div",{staticClass:"form-group"},[e("label",[t._v("File audio")]),e("div",{staticClass:"input-group"},[e("div",{staticClass:"custom-file"},[e("input",{staticClass:"custom-file-input",attrs:{type:"file"},on:{change:t.handleFileUpload}}),e("label",{staticClass:"custom-file-label"},[t._v(t._s(t.labelAudio?t.labelAudio:"Pilih File..."))])]),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.submitFile}},[t._v("Upload")])])])]):t._e(),""!=t.direction?e("div",{staticClass:"form-group"},[e("label",[t._v("File direction")]),e("div",{staticClass:"input-group"},[e("audio-player",{attrs:{file:t.baseURL+"/storage/audio/"+t.direction}}),e("b-button",{staticClass:"btn-icon",attrs:{size:"sm",variant:"danger"},on:{click:t.removeDirection}},[e("i",{staticClass:"flaticon-circle"})])],1)]):t._e(),""!=t.audio?e("div",{staticClass:"form-group"},[e("label",[t._v("File audio")]),e("div",{staticClass:"input-group"},[e("audio-player",{attrs:{file:t.baseURL+"/storage/audio/"+t.audio}}),e("b-button",{staticClass:"btn-icon",attrs:{size:"sm",variant:"danger"},on:{click:t.removeAudio}},[e("i",{staticClass:"flaticon-circle"})])],1)]):t._e()])])])])]),e("div",{staticClass:"card-footer"},[e("b-button",{attrs:{variant:"primary",size:"sm",disabled:t.isLoading},on:{click:function(i){return i.preventDefault(),t.postSoalBanksoal(i)}}},[e("b-spinner",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],attrs:{small:"",type:"grow"}}),t._v(" Simpan ")],1)],1)])])])},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"card-header bg-light"},[e("b",[t._v("Pertanyaan")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"card-header bg-light"},[e("b",[t._v("Jawaban rujukan")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"card-header bg-light"},[e("b",[t._v("Pilihan")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"card-header bg-light"},[e("b",[t._v("Setting soal")])])}],n=(e("4160"),e("b0c0"),e("159b"),e("96cf"),e("1da1")),o=e("5530"),r=e("4360"),l=e("cecb"),c=e("2f62"),d=e("7901"),u={created:function(){this.getBanksoalById(this.$route.params.banksoal_id)},components:{AudioPlayer:d["a"]},data:function(){return{showEditor:!1,correct:"",question:"",rujukan:"",pilihan:[],jmlh_pilihan:"",jmlh_pilihan_listening:"",gambar_pilih:"",command:"",direktory:"",tipe_soal:1,audio:"",direction:"",fileAudio:"",fileDirection:"",labelAudio:"",labelDirection:"",label:"",image:"",editorConfig:{extraPlugins:"sourcedialog",allowedContent:!0,filebrowserUploadUrl:Object({NODE_ENV:"production",VUE_APP_ENV:"deplopment",VUE_APP_VERSION:"2.0.0",BASE_URL:"/"}).VUE_APP_API_SERVER+"/api/v1/file/upload?",fileTools_requestHeaders:{Accept:"application/json",Authorization:"Bearer "+r["a"].state.token}}}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["c"])(["isLoading","baseURL"])),Object(c["e"])(["errors"])),Object(c["e"])("banksoal",{banksoal:function(t){return t.banksoal}})),Object(c["e"])("filemedia",{contentDirectory:function(t){return t.contentFilemedia},directories:function(t){return t.directories.data}})),{},{page:{get:function(){return this.$store.state.filemedia.page},set:function(t){this.$store.commit("filemedia/SET_PAGE",t)}}}),filters:{charIndex:function(t){return String.fromCharCode(97+t)}},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["b"])("filemedia",["getContentFilemedia","getDirectories","uploadFileAudio","getDirectory","addFilemedia"])),Object(c["b"])("banksoal",["addSoalBanksoal","getBanksoalById"])),Object(c["d"])(["CLEAR_ERRORS","SET_LOADING"])),{},{upload:function(t){var i=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("image",t),a.append("directory_id",i.banksoal.directory_id),e.next=5,$axios.post("directory/filemedia",a);case 5:return s=e.sent,e.abrupt("return",i.baseURL+"/storage/"+s.data.data.dirname+"/"+s.data.data.filename);case 7:case"end":return e.stop()}}),e)})))()},postSoalBanksoal:function(){var t=this;if(""!==this.correct||1!=this.tipe_soal){this.SET_LOADING(!0);var i=[];this.pilihan.forEach((function(t){i.push(t)})),this.addSoalBanksoal({pertanyaan:this.question,rujukan:this.rujukan,banksoal_id:this.$route.params.banksoal_id,pilihan:i,correct:this.correct,tipe_soal:this.tipe_soal,audio:this.audio,direction:this.direction}).then((function(i){t.$bvToast.toast("Soal berhasil disimpan.",Object(l["b"])()),t.clearForm()})).catch((function(i){t.$bvToast.toast(i.message,Object(l["a"])())}))}else this.$swal({title:"Kunci jawaban kosong",text:"Pilih jawaban yang benar",icon:"error"})},onFileChange:function(t){this.label=t.target.files[0].name,this.image=t.target.files[0]},uploadFile:function(){var t=this,i=new FormData;i.append("directory_id",this.banksoal.directory_id),i.append("image",this.image),this.addFilemedia(i).then((function(i){t.getContentFilemedia(t.banksoal.directory_id),t.$bvToast.toast("Filemedia berhasil ditambahkan.",Object(l["b"])())})).catch((function(i){t.$bvToast.toast("Terjadi kesalahan saat upload file",Object(l["a"])())}))},clearForm:function(){var t=this;this.question="",this.rujukan="",this.correct="",this.pilihan.forEach((function(i,e){t.pilihan[e]=""})),this.audio="",this.labelAudio="",this.fileAudio="",this.direction="",this.labelDirection="",this.fileAudio=""},initEditor:function(){var t;this.pilihan=[];var i=0;for(1==this.tipe_soal?i=this.jmlh_pilihan:3==this.tipe_soal&&(i=this.jmlh_pilihan_listening),t=0;t<i;t++){var e="";this.pilihan.push(e)}},showImagePrompt:function(t){this.$bvModal.show("modal-scoped"),this.command=t},onSelectImage:function(t){},pilihGambar:function(t){var i=this.contentDirectory.data[t];this.gambar_pilih=this.baseURL+"/storage/"+i.dirname+"/"+i.filename},masukGambar:function(){var t=this.command,i=this.gambar_pilih;t({src:i})},getContentFile:function(){""!=this.direktory&&this.getContentFilemedia(this.direktory)},handleFileUpload:function(t){this.labelAudio=t.target.files[0].name,this.fileAudio=t.target.files[0]},handleFileUploadDirection:function(t){this.labelDirection=t.target.files[0].name,this.fileDirection=t.target.files[0]},submitFile:function(){var t=this,i=new FormData;i.append("file",this.fileAudio),this.uploadFileAudio(i).then((function(i){t.audio=i.data,t.fileAudio="",t.labelAudio=""}))},submitFileDirection:function(){var t=this,i=new FormData;i.append("file",this.fileDirection),this.uploadFileAudio(i).then((function(i){t.direction=i.data,t.fileDirection="",t.labelDirection=""}))},removeAudio:function(){this.audio=""},removeDirection:function(){this.direction=""}}),watch:{banksoal:function(t){this.jmlh_pilihan=t.jumlah_pilihan,this.jmlh_pilihan_listening=t.jumlah_pilihan_listening,this.initEditor(),this.getContentFilemedia(t.directory_id),this.editorConfig.filebrowserUploadUrl=this.baseURL+"/api/v1/file/upload?directory_id="+this.banksoal.directory_id,this.showEditor=!0},direktory:function(t){""!=t&&this.getContentFilemedia(t)},page:function(){this.getContentFilemedia(this.banksoal.directory_id)},tipe_soal:function(){this.initEditor()}}},h=u,p=(e("2cfc"),e("2877")),f=Object(p["a"])(h,a,s,!1,null,null,null);i["default"]=f.exports},c975:function(t,i,e){"use strict";var a=e("23e7"),s=e("4d64").indexOf,n=e("a640"),o=e("ae40"),r=[].indexOf,l=!!r&&1/[1].indexOf(1,-0)<0,c=n("indexOf"),d=o("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:l||!c||!d},{indexOf:function(t){return l?r.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-49c88a38.a59f55f0.js.map