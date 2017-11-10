import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import List from '@/pages/List/List'
import A from '@/pages/List/A'
import listHome from '@/pages/List/listHome'
import detail from '@/pages/List/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/listHome',
      name: 'listHome',
      component: listHome,
      
    },
    {
	  	path:"/detail",
	  	name: 'detail',
	  	component: detail
    }
  ]
})
