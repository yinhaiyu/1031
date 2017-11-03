<template>
	<div>
		<index-header />
		<index-swiper />
		<index-classifySwiper />
		<index-hotList />	
		<index-gotoList />

	</div>
</template>

<script>

import header from "./Header.vue";
import swiper from "./Swiper.vue";
import classifySwiper from "./ClassifySwiper.vue";
import hotList from "./hotList.vue";
import gotoList from "./gotoList.vue";
export default {
  components:{
  	"index-header":header,
  	"index-swiper":swiper,
  	"index-classifySwiper":classifySwiper,
  	"index-hotList":hotList,
	"index-gotoList":gotoList,

  }
}
</script>

<style scoped>

</style>
