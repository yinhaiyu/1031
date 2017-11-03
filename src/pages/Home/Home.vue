<template>
	<div>
		<index-header />
<<<<<<< HEAD
		<index-swiper />
		<index-classifySwiper />
=======
		<index-hotList />
>>>>>>> f63f97244dba9b79c15972d723ecad82cb43b5b4
	</div>
</template>

<script>
<<<<<<< HEAD
import header from "./Header.vue";
import swiper from "./Swiper.vue";
import classifySwiper from "./ClassifySwiper.vue";
export default {
  components:{
  	"index-header":header,
  	"index-swiper":swiper,
  	"index-classifySwiper":classifySwiper
=======
import header from "./header.vue";
import hotList from "./hotList.vue";
export default {
  components:{
  	"index-header":header,
  	"index-hotList":hotList
>>>>>>> f63f97244dba9b79c15972d723ecad82cb43b5b4
  }
}
</script>


<style scoped>

</style>
