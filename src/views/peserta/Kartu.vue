<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="row justify-content-center">
			  <div class="col-md-4">
				  <div class="card" style="border: 1.9px solid #2517a3">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <router-link :to="{ name: 'peserta.data' }" class="btn btn-light btn-sm mr-1">Kembali</router-link>
                <button class="btn float-right btn-primary btn-sm mx-1" @click="print"><i class="flaticon2-print"></i> Cetak Kartu Peserta</button>
              </div>
              <br>
			  <div>
				<div>
					<b-form-group
                              label="Grup"
                              label-cols-sm="6"
                              label-cols-md="4"
                              label-cols-lg="3"
                              label-align-sm="right"
                              label-size="sm"
                              label-for="groupSelect"
                            >
                              <v-select label="name" :reduce="group => group.id" :options="groups" v-model="groupId"></v-select>
                            </b-form-group>
							<b-form-group
                              label="Jurusan"
                              label-cols-sm="6"
                              label-cols-md="4"
                              label-cols-lg="3"
                              label-align-sm="right"
                              label-size="sm"
                              label-for="jurusanSelect"
                            >
                              <v-select label="nama" :reduce="jurusan => jurusan.id" :options="all_jurusan" v-model="jurusanId"></v-select>
                            </b-form-group>
				</div>
			  </div>
              <input type="text" v-model="event" class="form-control">
						</div>
						<div class="card-footer">
							<div class="row justify-content-center">
								<div class="col-md-6" v-if="pesertas.data">
									<b-pagination
										class="mr-auto"
										size="sm"
										v-model="page"
										:total-rows="pesertas.total"
										:per-page="pesertas.per_page"
										aria-controls="pesertas"
										v-if="pesertas.data && pesertas.data.length > 0"
										></b-pagination>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
      <div class="table-responsive-md">
      	<div class="paper" id="printKartu">
      		<div class="page">
      			<div class="row" v-for="(pesertas,index) in data_peserta" style="page-break-inside: avoid !important;"
            :key="index"
            >
      				<div class="col-md-6" 
              v-for="peserta in pesertas"
              :key="peserta.id"
              >
      					<table class="table table-borderless table-sm" style="border: 1px solid #000">
                  <tr>
                    <td colspan="3" style="border-bottom:1px solid #666; padding: 0;">
                      <table width="100%" class="kartu">
                      <tr>
                        <td style="width: 30px"><img v-if="typeof sekolah.value != 'undefined'" 
                        :src="sekolah.value.logo != '' ? sekolah.value.logo : '/admin-system/img/logo.jpg'" style="max-height: 46px" height="40"></td>
                        <td align="center" style="font-weight:bold; padding: 4px;">
                          <span class="upper">KARTU LOGIN PESERTA</span><br> 
                          <span class="upper">{{ event }}</span>
                        </td>
                        <td style="width: 30px">&nbsp;</td>
                      </tr>
                      </table>
                    </td>
                  </tr>
                  <tr><td>No ujian</td><td width="5px">:</td><td style="font-size:12px;font-weight:bold;" v-text="peserta.no_ujian"></td></tr>
                  <tr><td>Sesi</td><td>:</td><td v-text="peserta.sesi"></td></tr>
                  <tr><td width="125">Nama Peserta</td><td width="1">:</td><td v-text="peserta.nama_peserta"></td></tr>
                  <tr><td>Password</td><td>:</td><td style="font-size:12px;font-weight:bold;" v-text="peserta.password"></td></tr>
      					</table>
      				</div>
      			</div>
		      </div>
      	</div>
      </div>
      <div class="row justify-content-center">
				<div class="col-md-4">
					<div class="card" style="border: 1.9px solid #2517a3">
						<div class="card-body">
							<div class="d-flex justify-content-between">
								<router-link :to="{ name: 'peserta.data' }" class="btn btn-light btn-sm mr-1">Kembali</router-link>
								<button class="btn float-right btn-primary btn-sm mx-1" @click="print"><i class="flaticon2-print"></i> Cetak Kartu Peserta</button>
							</div>
						</div>
						<div class="card-footer">
							<div class="row justify-content-center">
								<div class="col-md-6" v-if="pesertas.data">
									<b-pagination
										class="mr-auto"
										size="sm"
										v-model="page"
										:total-rows="pesertas.total"
										:per-page="pesertas.per_page"
										aria-controls="pesertas"
										v-if="pesertas.data && pesertas.data.length > 0"
										></b-pagination>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>     
  </div>
</template>
<script>
	import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'
	import vSelect from 'vue-select'
	import 'vue-select/dist/vue-select.css'
	import _ from 'lodash'
	export default {
	name: 'KartuPeserat',
	components: {vSelect},
	created() {
		this.changeData()
		this.getAllGroup()
		this.allJurusan()
	},
	data() {
		return {
			event: 'UJIAN SEKOLAH 2020',
			data_peserta: [],
			groupId: "",
			jurusanId: ""
		}
	},
	computed: {
		...mapState('setting',{
	    sekolah: state => state.set_sekolah
	  }),
		...mapGetters(['isLoading']),
		...mapState('peserta', {
			pesertas: state => state.pesertas
		}),
		...mapState('sekolah', {
			sekolahs: state => state.sekolah
		}),
		...mapState('grup', ['groups']),
		...mapState('jurusan', ['all_jurusan']),
		page: {
			get() {
				return this.$store.state.peserta.page
			},
			set(val) {
				this.$store.commit('peserta/SET_PAGE', val)
			}
		}
	},
	methods: {
		...mapActions('peserta', ['getPesertas','removePeserta']),
		...mapActions('sekolah', ['getAllSekolah', ]),
		...mapActions('grup', ['getAllGroup']),
		...mapActions('jurusan', ['allJurusan']),
		changeData() {
			this.$store.commit('LOADING_PAGE', true)

			if (this.groupId == null) {
				this.groupId = ""
			}
			if (this.jurusanId == null) {
				this.jurusanId = "s"
			}

			this.getPesertas({
				jurusanId: this.jurusanId, groupId: this.groupId
			})
			.then((res) => {
				this.$store.commit('LOADING_PAGE', false)
				this.data_peserta = this.chunk(this.pesertas.data, 2)
			})
			.catch((e) => {
				this.$store.commit('LOADING_PAGE', false)
			})
		},
    print() {
      this.$htmlToPaper('printKartu');
		},
		chunk(arr, size) {
		 	return Array.from({ length: Math.ceil(arr.length / size) }, 
		 		(v, i) => {
		    	return arr.slice(i * size, i * size + size)
		 		}
		  );
		}
	},
	watch: {
		page() {
			this.changeData()
		},
		jurusanId: _.debounce(function (value) {
            this.changeData()
        }, 500),
        groupId: _.debounce(function (value) {
            this.changeData()
        }, 500),
	}
}
</script>
<style>
	@media print {
	    footer {page-break-after: always; }
		@page {
		  size: A4;
		  margin-bottom:60px;
		  margin-top:40px;
		  margin-left: 40px;
		  margin-right: 40px;	  
		}
	}
	.page {
	  position: relative;
	  width: 21cm;
	  min-height: 29cm;
	  page-break-after: always;
	  margin: 0 auto;
	  background: #FFF;
	  padding: 0.5cm;
	  border: 1px solid #2517a3;
	  -webkit-box-sizing: initial;
	  -moz-box-sizing: initial;
	  box-sizing: initial;
	  page-break-after: always
	}
</style>