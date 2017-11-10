import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import List from '@/pages/List/List'
import ListHeader from '@/pages/List/ListHeader'
import DetailsHeader from '@/pages/ListDetails/DetailsHeader'
import HeadFigure from '@/pages/ListDetails/HeadFigure'
import BaseInfo from '@/pages/ListDetails/BaseInfo'
import Comments from '@/pages/ListDetails/Comments'
import ListContainer from '@/pages/ListDetails/ListContainer'
import QunarFooter from '@/pages/ListDetails/QunarFooter'

import A from '@/pages/List/A'
import B from '@/pages/ListDetails/B'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
     {
      path: '/',
      name: 'A',
      component: A,
      children:[{
      	path:"a",
      	component:A
      }]    
    },{
      path: '/',
      name: 'B',
      component: B,
      children:[{
      	path:"b",
      	component:B
      }] 
    }
  ]
})
