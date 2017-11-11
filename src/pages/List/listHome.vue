<template>
	<div>
		<List-Header />
		<List-list />
	</div>
</template>

<script>
	import ListHeader from './listHeader'
	import list from './swiperList'
	export default {
		components:{
			"List-Header": ListHeader,
		  	"List-list":list
		 }
	}
</script>

<style>
</style>