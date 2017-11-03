<template>
	<div>
		<index-header />
		<index-swiper />
		<index-classifySwiper />
	</div>
</template>

<script>
import header from "./Header.vue";
import swiper from "./Swiper.vue";
import classifySwiper from "./ClassifySwiper.vue";
export default {
  components:{
  	"index-header":header,
  	"index-swiper":swiper,
  	"index-classifySwiper":classifySwiper
  }
}
</script>


<style scoped>

</style>
