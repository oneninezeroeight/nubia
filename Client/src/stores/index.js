import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    author: 'chao',
    code: '123',
    galleryStatus: {
      imgUrl: '',
      isShow: false
    }
  },
  getters: {},
  actions: {
    setCode(context, data) {
      context.commit('setCode', data)
    }
  },
  mutations: {
    setCode(state, data) {
      state.code = data
    }
  }
})
