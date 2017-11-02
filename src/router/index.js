import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import List from '@/pages/List/List'
import A from '@/pages/List/A'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
     {
      path: '/list',
      name: 'List',
      component: List,
      children:[{
      	path:"a",
      	component:A
      }
      ]
    }
  ]
})
