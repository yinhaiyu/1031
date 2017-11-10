<template>
	<div>
        <list-listheader />
		<list-list />
	</div>
</template>

<script>
    import listheader from './ListHeader.vue'
    import list from './List.vue'
    export default {
        components:{
            "list-listheader":listheader,
            "list-list":list
        }
    }
</script>


<style scoped>

</style>