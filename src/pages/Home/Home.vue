<template>
	<div>
		<index-header />
		<index-hotList />
	</div>
</template>

<script>
import header from "./header.vue";
import hotList from "./hotList.vue";
export default {
  components:{
  	"index-header":header,
  	"index-hotList":hotList
  }
}
</script>


<style scoped>

</style>
