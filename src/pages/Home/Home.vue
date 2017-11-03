<template>
	<div>
		<index-header />
		<index-gotoList />
	</div>
</template>

<script>
import header from "./header.vue";
import gotoList from "./gotoList.vue";
export default {
  components:{
  	"index-header":header,
	"index-gotoList":gotoList
  }
}
</script>


<style scoped>

</style>
