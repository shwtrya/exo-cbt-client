<template>
    <header class="c-header c-header-light c-header-fixed c-header-with-subheader">
        <button class="c-header-toggler c-class-toggler d-lg-none mr-auto" type="button" data-target="#sidebar" data-class="c-sidebar-show">
            <span class="c-header-toggler-icon"></span>
        </button>
        <button class="c-header-toggler c-class-toggler ml-3 d-md-down-none" type="button" data-target="#sidebar" data-class="c-sidebar-lg-show" responsive="true">
            <span class="c-header-toggler-icon"></span>
        </button>
        <ul class="c-header-nav d-md-down-none">
            <li class="c-header-nav-item px-3"><a class="c-header-nav-link">Aplikasi pengelola ujian berbasis komputer</a></li>
        </ul>
        <ul class="c-header-nav ml-auto mr-4">
            <li class="c-header-nav-item dropdown">
                <a class="c-header-nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <div class="c-avatar"><img class="c-avatar-img" :src="'/admin-system/img/user.png'" alt="user@email.com"></div>
                </a>
                <div class="dropdown-menu dropdown-menu-right pt-0">
                    <div class="dropdown-header bg-light py-2"><strong>{{ authenticated.name }}</strong></div>
                    <a class="dropdown-item d-flex" href="#" v-b-modal.modal-profile >
                        <i class="flaticon-lock mr-1"></i> &nbsp; Ubah password
                    </a>
                    <a class="dropdown-item d-flex" href="#" @click.prevent="logout">
                        <i class="flaticon-logout mr-1"></i> &nbsp; Logout
                    </a>
                </div>
            </li>
        </ul>
        <div class="c-subheader px-3">
            <breadcrumb></breadcrumb>
        </div>
        <b-modal id="modal-profile" centered no-close-on-backdrop title="Ubah password">
            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control" placeholder="Password" name="">
            </div>
            <div class="form-group">
                <label>Re-password</label>
                <input type="password" v-model="password2" class="form-control" placeholder="Re password" name="">
                <small class="text-danger" v-show="error">Password tidak sesuai</small>
            </div>
            <template v-slot:modal-footer="{ ok, cancel}">
              <b-button size="sm" variant="secondary" @click="cancel()">
                Batal
              </b-button>
              <b-button size="sm" variant="primary" :disabled="error" @click="changePass">
                Ubah password
              </b-button>
            </template>
        </b-modal>
    </header>
</template>
<script>
import Breadcrumb from './Breadcrumb.vue'
import { mapState, mapActions } from 'vuex'
import { successToas, errorToas} from '@/entities/notif'
export default {
    data() {
        return {
            password: '',
            password2: '',
            score: 0,
            error: false,
            channel_1: '',
            enable_socket: process.env.VUE_APP_ENABLE_SOCKET
        }
    },
    computed: {
        ...mapState('user', ['authenticated']),
        ...mapState('channel',['socket','socket_2'])
    },
    components: {
      'breadcrumb' : Breadcrumb,
    },
    methods: {
        ...mapActions('auth', ['loggedOut']),
        ...mapActions('user', ['changeUserPassword']),
        ...mapActions('channel', ['getUserOnChannel', 'setUserToChannel']),
        async logout() {
            try {
              await this.loggedOut()
              localStorage.removeItem('token-6zJLlDMQXs')
              this.$store.state.token = localStorage.getItem('token-6zJLlDMQXs')
              this.$router.push('/login')
            } catch (error) {
              localStorage.removeItem('token-6zJLlDMQXs')
              this.$store.state.token = localStorage.getItem('token-6zJLlDMQXs')
              this.$router.push('/login')
            }
        },
        showScore (score) {
            this.score = score
        },
        async changePass() {
            if(this.error) {
                this.$swal({
                    title: 'Perhatikan password 2',
                    text: "Pastikan password sama",
                    icon: 'error',
                })
                return
            }
            try {
                await this.changeUserPassword({ password: this.password })
                this.$bvToast.toast('Password berhasil diubah', successToas())
                this.$bvModal.hide('modal-profile')
                this.password = ''
                this.password2 = ''
            } catch (error) {
                this.$bvToast.toast(error.message, errorToas())
            }
        },
        connectSocket(){
          if ( this.enable_socket === "oke") {
            this.socket.open();
            this.socket_2.open();
            this.socket.emit('getin', {
              user: this.authenticated,
              channel: this.channel_1
            });
            this.socket_2.emit('getin_student', {
              user: this.authenticated,
              channel: this.channel_2
            });
          }
        }
    },
    created(){
        this.channel_1 = 'teacher_connect_chanel'
        this.channel_2 = 'student_connect_channel'
    },
    watch:{
        password2(val) {
            if(this.password != val) {
                this.error = true
            } else {
                this.error = false
            }
        },
        authenticated(val) {
            if(!this.socket.connected) {
                this.connectSocket()
            }
        }
    },
    mounted(){
        if(typeof this.authenticated.email != 'undefined') {
            this.connectSocket()
        }
    },
    destroyed() {
      if (this.enable_socket === "oke") {
        this.socket.emit('exit', { channel: this.channel_1 })
        this.socket.close()
        this.socket_2.close()
      }
    },

}
</script>
