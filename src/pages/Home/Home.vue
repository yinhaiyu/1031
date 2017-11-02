<template>
	<div>
		<index-header />
		<index-swiper />
	</div>
</template>

<script>
import header from "./Header.vue";
import swiper from "./Swiper.vue";
export default {
  components:{
  	"index-header":header,
	"index-swiper":swiper
  }
}
</script>


<style scoped>

</style>
