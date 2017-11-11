<template>
	<div>
		<ticket-message />
		<purchase-quantity />
		<tourist-numbers />
		<total />
	</div>
</template>

<script>
	import ticketMsg from './TicketMsg'
	import purQuantity from './PurQuantity'
	import touristNumbers from './TouristNumbers'
	import total from './Total'
	import {mapState,mapActions} from "vuex"
	export default {
		components:{
		  	"ticket-message":ticketMsg,
		  	"purchase-quantity":purQuantity,
		  	"tourist-numbers":touristNumbers,
		  	"total":total
		}
	
	}
</script>

<style scoped>

</style>
