// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/index.css'
import '../src/assets/nby.css'
import '../src/assets/style.css'
import '../src/assets/wapIndex.css'
import '../src/assets/icon/iconfont.css'
import '../src/assets/cate.css'
import '../src/assets/newindex.css'
import '../src/assets/panelZ.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import SIdentify from './components/Vcode/Vcode.vue'
Vue.use(SIdentify)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
