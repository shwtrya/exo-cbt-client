<template>
  <div class="container-fluid bg-white" style="height: 100vh">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="container bg-white">
        <div class="py-5 px-4">
          <div class="row">
            <div class="col-md-12 col-lg-4 mx-auto bg-white h-100">
              <div class="row h-100 justify-content-center align-items-center">
                <div>
                  <div class="d-flex align-items-center">
                    <div style="background-color: #fff" class="py-2 px-2 rounded mr-3 align-self-start border">
                      <img :src="set_public.logo ? set_public.logo : '/admin-system/img/logo.png'" style="max-height: 46px"/>
                    </div>
                    <div >
                      <h4>{{ set_public.sekolah_name ? set_public.sekolah_name : 'Extraordinary-CBT Login' }}</h4>
                      <p class="text-muted">Selamat datang di aplikasi pengelola ujian. Masukkan email dan password</p>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="alert alert-danger" v-if="errors.invalid">{{ errors.invalid }}</div>
                    <form @submit.prevent="postLogin">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="flaticon-email"></i>
                        </span>
                      </div>
                      <input class="form-control" :class="{ 'is-invalid' : errors.email }" type="email" placeholder="Email" v-model="data.email" required>
                      <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                    </div>
                    <div class="input-group mb-1">
                      <div class="input-group-prepend ">
                        <span class="input-group-text ">
                          <i class="flaticon-lock"></i>
                        </span>
                      </div>
                      <input class="form-control" :class="{ 'is-invalid' : errors.password }" :type="passwordType" placeholder="Password" v-model="data.password" required>
                      <div class="invalid-feedback" v-if="errors.password">{{ errors.password[0] }} </div>
                    </div>
                    <div class="input-group mb-4">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="showPassword" v-model="showPassword">
                        <label class="form-check-label" for="showPassword">Show password</label>
                      </div>
                    </div>
                    <b-button :variant="isLoading ? 'secondary' : 'dark'" class="mr-1" block :disabled="isLoading" type="submit">
                      {{ isLoading ? 'Processing...' : 'Login' }}
                    </b-button>
                    <a :href="'/api/v1/login/sso'" class="btn btn-outline-dark" v-if="airlock">
                      Dinasti Sign On
                    </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed-bottom text-center text-muted bg-light">&copy; 2019 - {{ year }} <a>Extraordinary-CBT {{ app_version }}</a></div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex'
import { successToas, errorToas} from '@/entities/notif'
import { BAlert, BToast } from 'bootstrap-vue'
export default {
  components: {
    BAlert,BToast
  },
  data() {
    return {
      data: {
        email: '',
        password: ''
      },
      showPassword: false,
      passwordType: 'password',
      year: '',
      airlock: false,
    }
  },
  async created() {
    if (this.isAuth) {
      this.$router.push({ name: 'home' })
    }
    try {
      await this.getSetAuth()
    } catch (error) {
      this.$bvToast.toast(error.message, errorToas())
    }
  },
  computed: {
    ...mapGetters(['isAuth','isLoading']),
    ...mapState('setting', {
      auth: state => state.auth,
      set_public: state => state.set_public,
        app_version: state => state.app_version
    }),
    ...mapState(['errors'])
  },
  methods: {
    ...mapActions('auth', ['submit']),
    ...mapActions('user',['getUserLogin']),
    ...mapActions('setting', ['getSetAuth','getSettingSekolah', 'getSettingPublic']),
    async postLogin() {
      try {
        let provider = await this.submit(this.data)
        if (this.isAuth) {
          this.$router.push({ name: 'home' })
        }
      } catch (error) {
        this.$bvToast.toast(error.message, errorToas())
      }
    }
  },
  destroyed() {
    this.getUserLogin()
    this.getSettingSekolah()
  },
  created() {
    let d = new Date()
    this.year = d.getFullYear()
    this.getSettingPublic()
  },
  watch: {
    auth() {
      let name = this.auth.map(item => item.name);
      if(name.includes('airlock')) {
        this.airlock = true
      }
    },
    showPassword(val) {
      if(val) {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
    }
  }
}
</script>
