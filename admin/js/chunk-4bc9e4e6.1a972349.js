(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bc9e4e6"],{"64a9":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("router-link",{staticClass:"btn btn-light btn-sm",attrs:{to:{name:"banksoal.soal",params:{banksoal_id:t.$route.params.banksoal_id}}}},[t._v("Kembali")])],1),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-body"},[t.showEditor?a("ckeditor",{attrs:{config:t.editorConfig,type:"inline"},model:{value:t.question,callback:function(i){t.question=i},expression:"question"}}):t._e()],1)]),2==t.tipe_soal?a("div",{staticClass:"card"},[t._m(1),a("div",{staticClass:"card-body"},[t.showEditor?a("ckeditor",{attrs:{config:t.editorConfig,type:"inline"},model:{value:t.rujukan,callback:function(i){t.rujukan=i},expression:"rujukan"}}):t._e()],1)]):t._e(),2!=t.tipe_soal?a("div",{staticClass:"card"},[t._m(2),a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive-md"},[a("table",{staticClass:"table table-borderless"},t._l(t.pilihan,(function(i,e){return a("tr",[a("td",{attrs:{width:"10px"}},[a("b-form-radio",{attrs:{name:"correct",size:"lg",value:e},model:{value:t.correct,callback:function(i){t.correct=i},expression:"correct"}},[a("span",{staticClass:"text-uppercase"},[t._v(t._s(t._f("charIndex")(e)))])])],1),a("td",[t.showEditor?a("ckeditor",{attrs:{config:t.editorConfig,type:"inline"},model:{value:t.pilihan[e],callback:function(i){t.$set(t.pilihan,e,i)},expression:"pilihan[index]"}}):t._e()],1)])})),0)])])]):t._e()]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card"},[t._m(3),a("div",{staticClass:"card-body"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Tipe soal")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.tipe_soal,expression:"tipe_soal"}],staticClass:"form-control",on:{change:function(i){var a=Array.prototype.filter.call(i.target.options,(function(t){return t.selected})).map((function(t){var i="_value"in t?t._value:t.value;return i}));t.tipe_soal=i.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"1"}},[t._v("Pilihan ganda")]),a("option",{attrs:{value:"2"}},[t._v("Essai")]),a("option",{attrs:{value:"3"}},[t._v("Listening")])])]),""==t.direction&&3==t.tipe_soal?a("div",{staticClass:"form-group"},[a("label",[t._v("File direction")]),a("div",{staticClass:"input-group"},[a("div",{staticClass:"custom-file"},[a("input",{staticClass:"custom-file-input",attrs:{type:"file"},on:{change:t.handleFileUploadDirection}}),a("label",{staticClass:"custom-file-label"},[t._v(t._s(t.labelDirection?t.labelDirection:"Pilih File..."))])]),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.submitFileDirection}},[t._v("Upload")])])])]):t._e(),""!=t.direction?a("div",{staticClass:"form-group"},[a("label",[t._v("File direction")]),a("div",{staticClass:"input-group"},[a("audio-player",{attrs:{file:"/storage/audio/"+t.direction}}),a("b-button",{staticClass:"btn-icon",attrs:{size:"sm",variant:"danger"},on:{click:t.removeDirection}},[a("i",{staticClass:"flaticon-circle"})])],1)]):t._e(),""==t.audio?a("div",{staticClass:"form-group"},[a("label",[t._v("File audio")]),a("div",{staticClass:"input-group"},[a("div",{staticClass:"custom-file"},[a("input",{staticClass:"custom-file-input",attrs:{type:"file"},on:{change:t.handleFileUpload}}),a("label",{staticClass:"custom-file-label"},[t._v(t._s(t.labelAudio?t.labelAudio:"Pilih File..."))])]),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.submitFile}},[t._v("Upload")])])])]):t._e(),""!=t.audio?a("div",{staticClass:"form-group"},[a("label",[t._v("File audio")]),a("div",{staticClass:"input-group"},[a("audio-player",{attrs:{file:"/storage/audio/"+t.audio}}),a("b-button",{staticClass:"btn-icon",attrs:{size:"sm",variant:"danger"},on:{click:t.removeAudio}},[a("i",{staticClass:"flaticon-circle"})])],1)]):t._e()])])])])]),a("div",{staticClass:"card-footer"},[a("b-button",{attrs:{variant:"primary",size:"sm",disabled:t.isLoading},on:{click:function(i){return i.preventDefault(),t.postSoalBanksoal(i)}}},[a("b-spinner",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],attrs:{small:"",type:"grow"}}),t._v(" Simpan ")],1)],1)])])])},s=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"card-header bg-light"},[a("b",[t._v("Pertanyaan")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"card-header bg-light"},[a("b",[t._v("Jawaban rujukan")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"card-header bg-light"},[a("b",[t._v("Pilihan")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"card-header bg-light"},[a("b",[t._v("Setting soal")])])}],o=(a("4160"),a("b0c0"),a("159b"),a("5530")),n=a("ade3"),l=a("4360"),r=a("cecb"),c=a("2f62"),d=a("7901"),u={created:function(){this.getBanksoalById(this.$route.params.banksoal_id),this.getDataSoal()},components:{AudioPlayer:d["a"]},data:function(){var t;return t={showEditor:!1,correct:"",question:"",rujukan:"",pilihan:[],jmlh_pilihan:"",jmlh_pilihan_listening:"",gambar_pilih:"",command:"",direktory:"",tipe_soal:1,data_soal:"",audio:"",fileAudio:"",labelAudio:"",fileDirection:""},Object(n["a"])(t,"labelAudio",""),Object(n["a"])(t,"labelDirection",""),Object(n["a"])(t,"direction",""),Object(n["a"])(t,"label",""),Object(n["a"])(t,"image",""),Object(n["a"])(t,"editorConfig",{extraPlugins:"sourcedialog",allowedContent:!0,filebrowserUploadUrl:"/api/v1/file/upload?",fileTools_requestHeaders:{Accept:"application/json",Authorization:"Bearer "+l["a"].state.token}}),t},filters:{charIndex:function(t){return String.fromCharCode(97+t)}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["c"])(["isLoading","baseURL"])),Object(c["e"])(["errors"])),Object(c["e"])("banksoal",{banksoal:function(t){return t.banksoal}})),Object(c["e"])("filemedia",{contentDirectory:function(t){return t.contentFilemedia},directories:function(t){return t.directories.data}})),{},{page:{get:function(){return this.$store.state.filemedia.page},set:function(t){this.$store.commit("filemedia/SET_PAGE",t)}}}),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["b"])("filemedia",["getContentFilemedia","getDirectories","uploadFileAudio","addFilemedia"])),Object(c["b"])("soal",["editSoalBanksoal"])),Object(c["b"])("banksoal",["updateSoalBanksoal","getBanksoalById"])),Object(c["d"])(["CLEAR_ERRORS","SET_LOADING"])),{},{getDataSoal:function(){var t=this;this.editSoalBanksoal(this.$route.params.soal_id).then((function(i){t.question=i.data.pertanyaan,t.rujukan=i.data.rujukan,t.tipe_soal=i.data.tipe_soal,t.data_soal=i.data.jawabans,t.audio=null!=i.data.audio?i.data.audio:"",t.direction=null!=i.data.direction?i.data.direction:""}))},postSoalBanksoal:function(){var t=this;if(null!=this.correct){this.SET_LOADING(!0);var i=[];this.pilihan.forEach((function(t){i.push(t)})),this.updateSoalBanksoal({id:this.$route.params.soal_id,data:{pertanyaan:this.question,banksoal_id:this.$route.params.banksoal_id,pilihan:i,correct:this.correct,tipe_soal:this.tipe_soal,soal_id:this.$route.params.soal_id,audio:this.audio,rujukan:this.rujukan,direction:this.direction}}).then((function(i){t.$bvToast.toast("Soal berhasil disimpan.",Object(r["b"])()),t.SET_LOADING(!1),t.$router.push({name:"banksoal.soal",params:{banksoal_id:t.$route.params.banksoal_id}})})).catch((function(i){t.$bvToast.toast(i.message,Object(r["a"])())}))}else this.$swal({title:"Kunci jawaban kosong",text:"Pilih jawaban yang benar",type:"warning"})},onFileChange:function(t){this.label=t.target.files[0].name,this.image=t.target.files[0]},uploadFile:function(){var t=this,i=new FormData;i.append("directory_id",this.banksoal.directory_id),i.append("image",this.image),this.addFilemedia(i).then((function(){t.getContentFilemedia(t.banksoal.directory_id),t.$bvToast.toast("File berhasil disimpan.",Object(r["b"])())})).catch((function(i){t.$bvToast.toast(i.message,Object(r["a"])())}))},clearForm:function(){this.question.setContent(""),this.rujukan.setContent(""),this.correct="",this.pilihan.forEach((function(t,i){this.pilihan[i]=""}))},initEditor:function(){var t=this;this.pilihan=[],this.data_soal.forEach((function(i,a){var e=i.text_jawaban;"1"==i.correct&&(t.correct=a),t.pilihan.push(e)}))},showImagePrompt:function(t){this.$bvModal.show("modal-scoped"),this.command=t},onSelectImage:function(t){},pilihGambar:function(t){var i=this.contentDirectory.data[t];this.gambar_pilih=this.baseURL+"/storage/"+i.dirname+"/"+i.filename},masukGambar:function(){var t=this.command,i=this.gambar_pilih;t({src:i})},getContentFile:function(){""!=this.direktory&&this.getContentFilemedia(this.direktory)},handleFileUpload:function(t){this.labelAudio=t.target.files[0].name,this.fileAudio=t.target.files[0]},handleFileUploadDirection:function(t){this.labelDirection=t.target.files[0].name,this.fileDirection=t.target.files[0]},submitFile:function(){var t=this,i=new FormData;i.append("file",this.fileAudio),this.uploadFileAudio(i).then((function(i){t.audio=i.data,t.fileAudio="",t.labelAudio=""}))},submitFileDirection:function(){var t=this,i=new FormData;i.append("file",this.fileDirection),this.uploadFileAudio(i).then((function(i){t.direction=i.data,t.fileDirection="",t.labelDirection=""}))},removeAudio:function(){this.audio=""},removeDirection:function(){this.direction=""}}),watch:{banksoal:function(t){this.jmlh_pilihan=t.jumlah_pilihan,this.jmlh_pilihan_listening=t.jumlah_pilihan_listening,this.getContentFilemedia(t.directory_id),this.showEditor=!0},data_soal:function(){this.initEditor()},direktory:function(t){""!=t&&(this.getContentFilemedia(t),this.getContentFilemedia(t.directory_id),this.editorConfig.filebrowserUploadUrl=this.baseURL+"/api/v1/file/upload?directory_id="+this.banksoal.directory_id,this.showEditor=!0)},page:function(){this.getContentFilemedia(this.banksoal.directory_id)},tipe_soal:function(){this.initEditor()}}},h=u,p=(a("ac32"),a("2877")),f=Object(p["a"])(h,e,s,!1,null,null,null);i["default"]=f.exports},7901:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"player-wrapper",attrs:{id:"audio"}},[a("div",{staticClass:"player"},[a("div",{staticClass:"player-controls"},[a("div",[a("a",{attrs:{title:"Stop",href:"#"},on:{click:function(i){return i.preventDefault(),t.stop(i)}}},[a("svg",{attrs:{width:"18px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("path",{attrs:{fill:"currentColor",d:"M16,4.995v9.808C16,15.464,15.464,16,14.804,16H4.997C4.446,16,4,15.554,4,15.003V5.196C4,4.536,4.536,4,5.196,4h9.808C15.554,4,16,4.446,16,4.995z"}})])])]),a("div",[a("a",{attrs:{title:"Play/Pause",href:"#"},on:{click:function(i){i.preventDefault(),t.playing=!t.playing}}},[a("svg",{attrs:{width:"18px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[t.playing?a("path",{attrs:{fill:"currentColor",d:"M15,3h-2c-0.553,0-1,0.048-1,0.6v12.8c0,0.552,0.447,0.6,1,0.6h2c0.553,0,1-0.048,1-0.6V3.6C16,3.048,15.553,3,15,3z M7,3H5C4.447,3,4,3.048,4,3.6v12.8C4,16.952,4.447,17,5,17h2c0.553,0,1-0.048,1-0.6V3.6C8,3.048,7.553,3,7,3z"}}):a("path",{attrs:{fill:"currentColor",d:"M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"}})])])]),a("div",[a("div",{staticClass:"player-progress",attrs:{title:"Time played : Total time"}},[a("div",{staticClass:"player-seeker",style:{width:this.percentComplete+"%"}})]),a("div",{staticClass:"player-time"},[a("div",{staticClass:"player-time-current"},[t._v(t._s(t._f("convertTimeHHMMSS")(this.currentSeconds)))]),a("div",{staticClass:"player-time-total"},[t._v(t._s(t._f("convertTimeHHMMSS")(this.durationSeconds)))])])])]),a("audio",{ref:"audiofile",staticStyle:{display:"none"},attrs:{loop:t.innerLoop,src:t.file,preload:"auto"}})])])},s=[],o=(a("c975"),{props:{file:{type:String,default:null},autoPlay:{type:Boolean,default:!1},loop:{type:Boolean,default:!1}},data:function(){return{audio:void 0,currentSeconds:0,durationSeconds:0,innerLoop:!1,loaded:!1,playing:!1,previousVolume:35,showVolume:!1,volume:100}},computed:{percentComplete:function(){return parseInt(this.currentSeconds/this.durationSeconds*100)},muted:function(){return this.volume/100===0}},filters:{convertTimeHHMMSS:function(t){var i=new Date(1e3*t).toISOString().substr(11,8);return 0===i.indexOf("00:")?i.substr(3):i}},watch:{playing:function(t){if(t)return this.audio.play();this.audio.pause()},volume:function(t){this.showVolume=!1,this.audio.volume=this.volume/100}},methods:{download:function(){this.stop(),window.open(this.file,"download")},load:function(){if(this.audio.readyState>=2)return this.loaded=!0,this.durationSeconds=parseInt(this.audio.duration),this.playing=this.autoPlay;throw new Error("Failed to load sound file.")},mute:function(){if(this.muted)return this.volume=this.previousVolume;this.previousVolume=this.volume,this.volume=0},seek:function(t){if(this.playing&&"SPAN"!==t.target.tagName){var i=t.target.getBoundingClientRect(),a=(t.clientX-i.left)/i.width;this.audio.currentTime=parseInt(this.audio.duration*a)}},stop:function(){this.playing=!1,this.audio.currentTime=0},update:function(t){this.currentSeconds=parseInt(this.audio.currentTime)}},created:function(){this.innerLoop=this.loop},mounted:function(){var t=this;this.audio=this.$el.querySelectorAll("audio")[0],this.audio.addEventListener("timeupdate",this.update),this.audio.addEventListener("loadeddata",this.load),this.audio.addEventListener("pause",(function(){t.playing=!1})),this.audio.addEventListener("play",(function(){t.playing=!0}))}}),n=o,l=(a("8186"),a("2877")),r=Object(l["a"])(n,e,s,!1,null,null,null);i["a"]=r.exports},8186:function(t,i,a){"use strict";var e=a("94f8"),s=a.n(e);s.a},"94f8":function(t,i,a){},ac32:function(t,i,a){"use strict";var e=a("eec7"),s=a.n(e);s.a},c975:function(t,i,a){"use strict";var e=a("23e7"),s=a("4d64").indexOf,o=a("a640"),n=a("ae40"),l=[].indexOf,r=!!l&&1/[1].indexOf(1,-0)<0,c=o("indexOf"),d=n("indexOf",{ACCESSORS:!0,1:0});e({target:"Array",proto:!0,forced:r||!c||!d},{indexOf:function(t){return r?l.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},eec7:function(t,i,a){}}]);
//# sourceMappingURL=chunk-4bc9e4e6.1a972349.js.map