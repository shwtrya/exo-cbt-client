<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-header">
                    <div class="d-flex justify-content-between">
					    <router-link :to="{ name: 'peserta.add' }" class="btn btn-primary btn-sm mr-1">Tambah peserta</router-link>
                        <button class="btn-sm btn btn-white" title="Informasi" @click="featureInfo('page_peserta_tabel')"><i class="flaticon-info"></i></button>
                    </div>
				</div>
				<div class="card-body">
					<div class="row">
                        <div class="col-sm-5">
                            <h4 id="traffic" class="card-title mb-0">Manage Peserta</h4>
                            <div class="small text-muted">Manage data peserta</div>
                        </div>
                        <div class="d-md-block col-sm-7">
                            <router-link :to="{ name: 'peserta.kartu', params: { 'id': sekolah } }" class="btn float-right btn-primary btn-sm mx-1">
                                <i class="flaticon2-print"></i>
                                Cetak kartu peserta
                            </router-link>
                            <router-link :to="{ name: 'peserta.upload' }" class="btn float-right btn-success btn-sm">
                            	<i class="flaticon-upload-1"></i>
                            	Import peserta
                            </router-link>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                    	<div class="col-md-5">
                    		<b-form-group
                              label="Filter"
                              label-cols-sm="3"
                              label-align-sm="right"
                              label-size="sm"
                              label-for="filterInput"
                            >
                              <b-input-group size="sm">
                                <b-form-input
                                  v-model="search"
                                  type="search"
                                  id="filterInput"
                                  placeholder="Cari peserta"
                                ></b-form-input>
                                <b-input-group-append>
                                  <b-button :disabled="!search" @click="search = ''">Clear</b-button>
                                </b-input-group-append>
                              </b-input-group>
                            </b-form-group>
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
                    		<b-form-group
                              label="Per page"
                              label-cols-sm="6"
                              label-cols-md="4"
                              label-cols-lg="3"
                              label-align-sm="right"
                              label-size="sm"
                              label-for="perPageSelect"
                            >
                              <b-form-select
                                v-model="perPage"
                                id="perPageSelect"
                                size="sm"
                                :options="pageOptions"
                              ></b-form-select>
                            </b-form-group>
                    	</div>
                    </div>
					<div class="table-responsive-md" v-if="typeof pesertas.data != 'undefined'">
						<b-table 
						striped hover bordered small show-empty 
						:fields="fields" 
						:items="pesertas.data"
                        selectable
                        @row-selected="onRowSelected"
                        ref="selectableTable"
                        selected-variant="danger"
						>
							<template v-slot:cell(show_details)="row">
                            	<b-button size="sm" @click="row.toggleDetails" :variant="row.detailsShowing ? 'danger' : 'info'"><i :class="row.detailsShowing ? 'flaticon-circle' : 'flaticon2-add'" /></b-button>
                            </template>
                            <template v-slot:row-details="row">
                                <b-card>
                                	<div class="table-responsive-md">
                                	<table class="table table-striped">
                                		<tr>
                                			<td width="150px">Password</td>
                                			<td>{{ row.item.password }}</td>
                                		</tr>
                                		<tr>
                                			<td>Agama</td>
                                			<td>{{ row.item.agama }}</td>
                                		</tr>
                                		<tr>
                                			<td>Jurusan</td>
                                			<td>{{ row.item.jurusan }}</td>
                                		</tr>
                                        <tr>
                                            <td>Sesi default</td>
                                            <td>{{ row.item.sesi }}</td>
                                        </tr>
                                        <tr v-if="row.item.status != 1">
                                            <td>Block reason</td>
                                            <td>{{ row.item.block_reason }}</td>
                                        </tr>
                                        <tr>
                                            <td>Anti Block</td>
                                            <td>{{ row.item.antiblock? 'Yes' : 'No' }}</td>
                                        </tr>
                                	</table>
                                	</div>
                                </b-card>
                            </template>
                            <template v-slot:cell(status)="row">
                                <b-badge :variant="row.item.status == 1 ? 'success' : 'warning'">{{ row.item.status == 1 ? 'Aktif' : 'Tidak aktif' }}</b-badge>
							</template>
							<template v-slot:cell(actions)="row">
                                <b-button variant="warning" class="mr-1" size="sm" :to="{ name: 'peserta.edit', params: { id: row.item.id } }">
                                	<i class="flaticon-edit"></i> Edit
                                </b-button>
								<b-button variant="danger" size="sm" @click="deletePeserta(row.item.id)" :disabled="isLoading">
									<i class="flaticon2-trash"></i> Hapus
								</b-button>
							</template>
						</b-table>
						<div class="row mt-2">
                            <div class="col-md-6">
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <b-button variant="outline-dark" size="sm" @click="selectAllRows">
                                        <i class="flaticon-list-3"></i> Select all
                                    </b-button>
                                    <b-button variant="outline-dark" size="sm" @click="clearSelected">
                                        <i class="flaticon2-reload"></i> Clear selected
                                    </b-button>
                                    <b-button variant="outline-danger" size="sm" @click="bulkRemove">
                                        <i class="flaticon2-trash"></i> Bulk remove
                                    </b-button>
                                    <b-button variant="outline-danger" size="sm" @click="regeneratePassword">
                                        <i class="flaticon2-reload"></i> Regenerate password
                                    </b-button>
                                </div>
                                <p><i class="fa fa-bars"></i> <b>{{ pesertas.data.length }}</b> peserta dari <b>{{ pesertas.total }}</b> total data peserta</p>
                            </div>
                            <div class="col-md-6">
                                <div class="float-right">
                                    <b-pagination
                                        size="sm"
                                        v-model="page"
                                        :total-rows="pesertas.total"
                                        :per-page="pesertas.per_page"
                                        :disabled="isLoading"
                                        ></b-pagination>
                                </div>
                            </div>
                        </div>
					</div>
					<template v-else>
                        <div class="text-center my-2">
                            Loading...
                        </div>
                    </template>
				</div>
				<div class="card-footer">
					
				</div>
			</div>
		</div>
        <b-modal id="modal-feature-info" size="lg">
		    <template v-slot:modal-header="{ close }">
		      <h5>Informasi Fitur</h5>
		    </template>
            <template v-if="_is_feature_info">
			<div v-html="feature_info.content"></div></template>
          
            <template v-slot:modal-footer="{ cancel }">
		      <b-button size="sm" variant="secondary" @click="cancel()" :disabled="isLoading">
		        Cancel
		      </b-button>
		    </template>
		</b-modal>
	</div>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import { successToas, errorToas} from '@/entities/notif'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import _ from 'lodash'
import jurusan from '../../store/jurusan'

export default {
	name: 'DataPeserat',
    components: {vSelect},
	created() {
		this.changeData()
        this.getAllGroup()
        this.allJurusan()
	},
	data() {
		return {
			fields: [
				{ key: 'show_details', label: 'Detail' },
				{ key: 'no_ujian', label: 'No ujian' },
				{ key: 'nama_peserta', label: 'Nama peserta' },
                { key: 'status', label: 'Status' },
				{ key: 'actions', label: 'Aksi' }
			],
			search: '',
			isBusy: true,
			perPage: 30,
            pageOptions: [30, 80, 160],
			sekolah: 0,
            jurusanId: "",
            groupId: "",
            selected: []
		}
	},
	computed: {
		...mapGetters(['isLoading']),
        ...mapState('feature',['feature_info']),
		...mapState('peserta', {
			pesertas: state => state.pesertas,
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
		},
        _is_feature_info() {
            if(typeof this.feature_info != 'undefined') {
                return true
            }
            return false
        }
	},
	methods: {
		...mapActions('peserta', ['getPesertas','removePeserta', 'removePesertaMultiple', 'regeneratePasswordPeserta']),
        ...mapActions('feature', ['getFeatureInfo']),
        ...mapActions('grup', ['getAllGroup']),
        ...mapActions('jurusan', ['allJurusan']),
        onRowSelected(items) {
            this.selected = items
        },
        selectAllRows() {
            this.$refs.selectableTable.selectAllRows()
        },
        clearSelected() {
            this.$refs.selectableTable.clearSelected()
        },
		changeData() {
            if (this.jurusanId == null) {
                this.jurusanId = ""
            }
            if (this.groupId == null) {
                this.groupId = ""
            }
			this.getPesertas({
				search: this.search, perPage: this.perPage, jurusanId: this.jurusanId, groupId: this.groupId
			})
		},
        bulkRemove() {
            if(this.selected == '') {
                return
            }
            this.$swal({
                title: 'Informasi',
                text: 'Peserta yang dipilih akan dihapus beserta dengan data yang terkait',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#c7c7c7',
                confirmButtonText: 'Iya, Lanjutkan!'
            }).then((result) => {
                if (result.value) {
                    let ids = this.selected.map(item => item.id)
                    this.removePesertaMultiple({ peserta_id: ids })
                    .then((provider) => {
                        this.getPesertas({

                        });
                        this.$bvToast.toast('Data peserta berhasil dihapus.', successToas())
                    })
                    .catch((error) => {
                        this.$bvToast.toast(error.message, errorToas())
                    })
                }
            })
        },
        regeneratePassword() {
            if(this.selected == '') {
                return
            }
            this.$swal({
                title: 'Informasi',
                text: 'Peserta yang dipilih akan dilakukan perubahan pada password secara random',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#c7c7c7',
                confirmButtonText: 'Iya, Lanjutkan!'
            }).then((result) => {
                if (result.value) {
                    let ids = this.selected.map(item => item.id)
                    this.regeneratePasswordPeserta({ peserta_id: ids })
                    .then((provider) => {
                        this.getPesertas({

                        });
                        this.$bvToast.toast('Data peserta berhasil diubah.', successToas())
                    })
                    .catch((error) => {
                        this.$bvToast.toast(error.message, errorToas())
                    })
                }
            })
        },
		deletePeserta(id) {
			this.$swal({
				title: 'Informasi',
				text: 'Peserta yang dipilih akan dihapus beserta dengan data yang terkait',
				icon: 'warning',
				showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#c7c7c7',
                confirmButtonText: 'Iya, Lanjutkan!'
            }).then((result) => {
                if (result.value) {
                    this.removePeserta(id)
                    .then((provider) => {
                        this.getPesertas({

                        });
                        this.$bvToast.toast('Data peserta berhasil dihapus.', successToas())
                    })
                    .catch((error) => {
                        this.$bvToast.toast(error.message, errorToas())
                    })
                }
            })
		},
        featureInfo(name) {
			this.getFeatureInfo(name)
			.then(() => {
				this.$bvModal.show('modal-feature-info')
			})
		}
	},
	watch: {
		page() {
			this.changeData()
		},
		search:  _.debounce(function (value) {
			this.changeData()
		}, 500),
        jurusanId: _.debounce(function (value) {
            this.changeData()
        }, 500),
        groupId: _.debounce(function (value) {
            this.changeData()
        }, 500),
		perPage() {
            this.changeData()
        }
	}
}
</script>