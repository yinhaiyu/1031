<template>
	<div>
		<index-header />
		<index-swiper :swiperInfo = "swiperInfo"/>
		<index-classify-swiper />
		<index-sales-activity />
		<index-hotList />	
		<index-gotoList />

	</div>
</template>

<script>

import header from './components/Header'
import swiper from './components/Swiper'
import classifySwiper from './components/ClassifySwiper'
import salesActivity from './components/salesActivity'
import hotList from './components/hotList'
import gotoList from './components/gotoList'
import axios from 'axios'
import {H_Get_DATA} from "./types.js"
import {mapState,mapActions} from "vuex"
export default {
  components:{
  	"index-header":header,
  	"index-swiper":swiper,
  	"index-classify-swiper":classifySwiper,
  	"index-sales-activity":salesActivity,
  	"index-hotList":hotList,
	  "index-gotoList":gotoList,
  },
  computed:mapState({
      swiperInfo:(state) => (
        state.home.swiperInfo
      )
  }),  
  mounted(){
  	!this.swiperInfo.length && this.getHomeData()
    this.getCityMessage()
  },
  methods:mapActions({
    getHomeData:(dispatch) => {
        dispatch(H_Get_DATA)
    },
    getCityMessage(){
      this.$store.commit("cityItem",this.$route.query.city)
    }
  })
}
</script>

<style scoped>

</style>
