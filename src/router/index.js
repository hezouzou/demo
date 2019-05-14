import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Index from '@/components/index/index'
import Tabbar from '@/comment/tabbar/tabbar'
import Menber from '@/components/menber/menber'
import Shopcar from '@/components/shopcar/shopcar'
import Myinfo from '@/components/myinfo/myinfo'

Vue.component('Tabbar',Tabbar)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path:'/index',
      name: 'Index',
      component: Index
    },{
      path:'/menber',
      name: 'Menber',
      component: Menber
    }, {
      path: '/shopcar',
      name: 'Shopcar',
      component: Shopcar
    },{
      path: '/myinfo',
      name: 'Myinfo',
      component: Myinfo
    }
  ]
})
