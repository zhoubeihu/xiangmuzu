import Vue from 'vue'
import Router from 'vue-router'
import Carshop from '../page/carshop'
import Hequlife from '../page/hequlife'
import Index from '../page/index'
import List from '../page/list'
import Mine from '../page/mine'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/carshop',
      name: 'Crashop',
      component: Carshop
    },
    {
      path: '/hequlife',
      name: 'Hequlife',
      component: Hequlife
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
 
    {
      path: '/*',
      redirect: "/index"
    },



  ]
})
