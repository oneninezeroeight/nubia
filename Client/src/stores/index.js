import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    code: '123',
    title: '登录/注册',
    galleryStatus: {
      imgUrl: '',
      isShow: false
    }
  },
  getters: {},
  actions: {
    setCode(context, data) {
      context.commit('setCode', data)
    },
    // setCuteId(context, data) {
    //   context.commit('setCuteId', data)
    // }
  },
  mutations: {
    setCode(state, data) {
      state.code = data
    },
    // setCuteId(state, data) {
    //   state.ceteid = data
    // }
  }
})
