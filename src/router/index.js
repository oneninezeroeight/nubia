import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/views/home/home.vue'
import Mine from '../components/views/mine/mine.vue'
import Shop from '../components/views/shopcar/shopcar.vue';
import Cete from '../components/views/cete/cete.vue';
import Discover from '../components/views/discover/discover.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cete',
      name: 'cete',
      component: Cete
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }

  ]
})