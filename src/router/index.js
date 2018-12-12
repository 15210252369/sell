import Vue from 'vue'
import Router from 'vue-router'
import msite from 'pages/msite/msite'
import order from 'pages/order/order'
import search from 'pages/search/search'
import profile from 'pages/profile/profile'
import login from 'pages/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/msite',
      component:msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:"/login",
      component:login,
    }
  ]
})
