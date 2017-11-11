import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import List from '@/pages/List/List'
import B from '@/pages/ListDetails/B'
import cityChoices from '@/pages/cityChoices/cityChoices'
import Payment from '@/pages/Payment/Payment'
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
      path: '/list',
      name: 'List',
      component: List,
      children:[{
      	path:"a",
      	component:B
      },
      ]
    },
    {
      path: '/cityChoices',
      name: 'cityChoices',
      component: cityChoices
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Payment',
      name: 'Payment',
      component: Payment
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
