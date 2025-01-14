import $axios from '@/services/api.js'
import axios from 'axios'

const state = () => ({
    set_sekolah: {},
    set_airlock: {},
    set_ujian: {},
    set_token: {},
    set_public: {},
    set_header_kop: {},
    set_ua_whitelist: {},
    app_version: process.env.VUE_APP_VERSION,
    auth: {}
})

const mutations = {
    ASSIGN_SETTING_SEKOLAH(state, payload) {
        state.set_sekolah = payload
    },
    ASSIGN_SETTING_AIRLOCK(state, payload) {
        state.set_airlock = {
            name: 'airlock',
            value: {
                isactive: payload.value.isactive,
                client_id: payload.value.client_id,
                client_secret: payload.value.client_secret,
                server_url: payload.value.server_url,
                token_url: payload.value.token_url,
                user_url: payload.value.user_url,
                consumer_url: payload.value.consumer_url
            },
            type: 'auth'
        }
    },
    ASSIGN_SETTING_UJIAN(state, payload) {
        state.set_ujian = {
            name: 'ujian',
            value: {
                autoblock: payload.value.autoblock,
                reset: payload.value.reset,
                text_welcome: payload.value.text_welcome,
                text_finish: payload.value.text_finish,
                only_fullscreen: payload.value.only_fullscreen
            },
            type: 'general'
        }
    },
    ASSIGN_SETTING_PUBLIC(state, payload) {
        state.set_public = {
            logo: payload.logo,
            sekolah_name: payload.sekolah_name
        }
    },
    ASSIGN_SETTING_TOKEN(state, payload) {
        state.set_token = {
            name: 'token',
            value: payload.value,
            type: 'general'
        }
    },
    ASSIGN_SETTING_UA_WHITELIST(state, payload) {
        state.set_ua_whitelist = {
            name: 'user-agent-whitelist',
            value: payload.value,
            type: 'general'
        }
    },
    ASSIGN_SETTING_HEADER_KOP(state, payload) {
        state.set_header_kop = {
            name: 'header_kop',
            value: payload.value,
            type: 'general'
        }
    },
    SET_ALLOWED_AUTH(state, payload) {
        state.auth = payload
    }
}

const actions = {
    getConfig({ commit }) {
        return new Promise(async(resolve, reject) => {
            try {
                resolve({})
            } catch (error) {
                reject(error.response.data)
            }
        })
    },
    getSettingSekolah({ commit }) {
        commit('SET_LOADING', true, { root: true })
        return new Promise(async (resolve, reject) => {
            try {
                let network = await $axios.get('settings/sekolah')

                commit('ASSIGN_SETTING_SEKOLAH', network.data.data)
                commit('SET_LOADING', false, { root: true })
                resolve(network.data.data)
            } catch (error) {
                commit('SET_LOADING', false, { root: true })
                reject(error.response.data)
            }
        })
    },
    storeSettingSekolah({ commit }, payload) {
        commit('SET_LOADING', true, { root: true })
        return new Promise(async (resolve, reject) => {
            try {
                let network = await $axios.post('settings/sekolah', payload)

                commit('SET_LOADING', false, { root: true })
                resolve(network.data)
            } catch (error) {
                commit('SET_LOADING', false, { root: true })
                reject(error.response.data)
            }
        })
    },
    changeLogoSekolah({ commit }, payload) {
        commit('SET_LOADING', true, { root: true })
        return new Promise( async (resolve, reject) => {
            try {
                let network = await $axios.post('settings/sekolah/logo', payload)

                commit('SET_LOADING', false, { root: true })
                resolve(network.data)
            } catch (error) {
                commit('SET_LOADING', false, { root: true })
                reject(error.response.data)
            }
        })
    },
    getSettingAirlock({ commit }) {
        commit('SET_LOADING', true, { root: true })
        return new Promise(async(resolve, reject) => {
            try {
                let network = await $axios.get(`settings?setting=airlock`)

                commit('ASSIGN_SETTING_AIRLOCK', network.data.data)
                commit('SET_LOADING', false, { root: true })
                resolve(network.data)
            } catch (error) {
                commit('SET_LOADING', false, { root: true })
                reject(error.response.data)
            }
        })
    },
    setSettingAirlock({ commit, state }) {
        commit('SET_LOADING', true, { root: true })
        return new Promise(async(resolve, reject) => {
            try {
                let network = await $axios.post('settings', state.set_airlock)

                commit('SET_LOADING', false, { root: true })
                resolve(network.data)
            } catch (error) {
                commit('SET_LOADING', false, { root: true })
                reject(error.response.data)
            }
        })
    },
    getSettingUjian({ commit }) {
        commit('SET_LOADING', true, { root: true })
        return new Promise(async(resolve, reject) => {
            try {
                let network = await $axios.get(`settings?setting=ujian`)

                commit('ASSIGN_SETTING_UJIAN', network.data.data)
                commit('SET_LOADING', false, { root: true })
                resolve(network.data)
            } catch (error) {
                commit('SET_LOADING', false, { root: true })
                reject(error.response.data)
            }
        })
    },
    setSettingUjian({ commit, state }) {
        commit('SET_LOADING', true, { root: true })
        return new Promise(async(resolve, reject) => {
            try {
                let network = await $axios.post('settings', state.set_ujian)

                commit('SET_LOADING', false, { root: true })
                resolve(network.data)
            } catch (error) {
                commit('SET_LOADING', false, { root: true })
                reject(error.response.data)
            }
        })
    },
    getSettingPublic({ commit }) {
        commit('SET_LOADING', true, { root: true })
        return new Promise(async(resolve, reject) => {
            try {
                let network = await $axios.get(`settings-public-sekolah`)

                commit('ASSIGN_SETTING_PUBLIC', network.data.data)
                commit('SET_LOADING', false, { root: true })
                resolve(network.data)
            } catch (error) {
                commit('SET_LOADING', false, { root: true })
                reject(error.response.data)
            }
        })
    },
    getSettingToken({ commit }) {
        commit('SET_LOADING', true, { root: true })
        return new Promise(async(resolve, reject) => {
            try {
                let network = await $axios.get(`settings?setting=token`)

                commit('ASSIGN_SETTING_TOKEN', network.data.data)
                commit('SET_LOADING', false, { root: true })
                resolve(network.data)
            } catch (error) {
                commit('SET_LOADING', false, { root: true })
                reject(error.response.data)
            }
        })
    },
    setSettingToken({ commit, state }) {
        commit('SET_LOADING', true, { root: true })
        return new Promise(async(resolve, reject) => {
            try {
                let network = await $axios.post('settings', state.set_token)

                commit('SET_LOADING', false, { root: true })
                resolve(network.data)
            } catch (error) {
                commit('SET_LOADING', false, { root: true })
                reject(error.response.data)
            }
        })
    },
    getUAWhitelistToken({ commit }) {
        commit('SET_LOADING', true, { root: true })
        return new Promise(async(resolve, reject) => {
            try {
                let network = await $axios.get(`settings?setting=user-agent-whitelist`)

                commit('ASSIGN_SETTING_UA_WHITELIST', network.data.data)
                commit('SET_LOADING', false, { root: true })
                resolve(network.data)
            } catch (error) {
                commit('SET_LOADING', false, { root: true })
                reject(error.response.data)
            }
        })
    },
    setSettingUAWhitelist({ commit, state }) {
        commit('SET_LOADING', true, { root: true })
        return new Promise(async(resolve, reject) => {
            try {
                let network = await $axios.post('settings', state.set_ua_whitelist)

                commit('SET_LOADING', false, { root: true })
                resolve(network.data)
            } catch (error) {
                commit('SET_LOADING', false, { root: true })
                reject(error.response.data)
            }
        })
    },
    getSettingHeaderKop({ commit }) {
        commit('SET_LOADING', true, { root: true })
        return new Promise(async(resolve, reject) => {
            try {
                let network = await $axios.get(`settings?setting=header_kop`)

                commit('ASSIGN_SETTING_HEADER_KOP', network.data.data)
                commit('SET_LOADING', false, { root: true })
                resolve(network.data)
            } catch (error) {
                commit('SET_LOADING', false, { root: true })
                reject(error.response.data)
            }
        })
    },
    setSettingHeaderKop({ commit, state }) {
        commit('SET_LOADING', true, { root: true })
        return new Promise(async(resolve, reject) => {
            try {
                let network = await $axios.post('settings', state.set_header_kop)

                commit('SET_LOADING', false, { root: true })
                resolve(network.data)
            } catch (error) {
                commit('SET_LOADING', false, { root: true })
                reject(error.response.data)
            }
        })
    },
    getSetAuth({ commit }) {
        commit('SET_LOADING', true, { root: true })
        return new Promise(async(resolve, reject) => {
            try {
                let network = await $axios.get('settings/auth')

                commit('SET_ALLOWED_AUTH', network.data.data)
                commit('SET_LOADING', false, { root: true })
                resolve(network.data)
            } catch (error) {
                commit('SET_LOADING', false, { root: true })
                reject(error.response.data)
            }
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
