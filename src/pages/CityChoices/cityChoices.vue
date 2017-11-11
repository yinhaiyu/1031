<template>
	<div>
		<cityChoices-header />
		<cityChoices-container />
	</div>
</template>

<script>
	import header from './components/Header'
	import container from './components/Container'
	import {mapState,mapActions} from "vuex"
	export default {
		components:{
		  	"cityChoices-header":header,
		  	"cityChoices-container":container,
		},
		computed:mapState({
		    hotCityList:(state) => (
		      state.cityChoices.hotCityList
		    )
		}), 
		mounted(){
		  	!this.hotCityList.length && this.getCityChoicesData()
		},
		methods:mapActions({
		    getCityChoicesData:(dispatch) => {
		        dispatch("getData")
		    }
		})
	}
</script>

<style scoped>

</style>


