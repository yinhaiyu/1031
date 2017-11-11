import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
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
      path: '/cityChoices',
      name: 'cityChoices',
      component: cityChoices
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
