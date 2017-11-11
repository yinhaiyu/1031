import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import List from '@/pages/List/List'
import A from '@/pages/List/A'
import cityChoices from '@/pages/cityChoices/cityChoices'
import Payment from '@/pages/Payment/Payment'
import Search from '@/pages/Search/Search'

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
    }
  ]
})
