<template>
	<div>
		<index-header />
		<index-swiper />
		<index-classifySwiper />
		<index-hotList />
	</div>
</template>

<script>
import header from "./Header.vue";
import swiper from "./Swiper.vue";
import classifySwiper from "./ClassifySwiper.vue";
import hotList from "./hotList.vue";
export default {
  components:{
  	"index-header":header,
  	"index-swiper":swiper,
  	"index-classifySwiper":classifySwiper,
  	"index-hotList":hotList
  }
}
</script>


<style scoped>

</style>
