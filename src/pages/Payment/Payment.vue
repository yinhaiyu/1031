<template>
	<div class="body">
		<pay-ment-header />
		<pay-ment-container />		
	</div>
</template>

<script>
	import header from './components/Header'
	import container from './components/Container'
	import {mapState,mapActions} from "vuex"
	export default {
		components:{
		  	"pay-ment-header":header,
		  	"pay-ment-container":container,
		}
	
	}
</script>

<style scoped>
	.body{
		background:#e0e0e0;
		width: 100%;
   		min-height: 100%;
	}

</style>

