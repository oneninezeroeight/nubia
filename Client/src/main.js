// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/index.css'
import '../src/assets/nby.css';
<<<<<<< HEAD

=======
import '../src/assets/style.css'
import '../src/assets/wapIndex.css'
import '../src/assets/icon/iconfont.css'
>>>>>>> 11b79ad5b14d0e92f1eeec52595087cea76083ee
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
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
