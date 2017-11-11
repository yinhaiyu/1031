<template>
	<div>
        <detail-detailsheader />
        <detail-headfigure />
        <detail-baseinfo />        
        <detail-comments />
        <detail-listcontainer />
        <detail-qunarfooter />      
	</div>
</template>

<script>    
    import detailsheader from './DetailsHeader'
    import headfigure  from './HeadFigure'
    import baseinfo  from './BaseInfo' 
    import comments from './Comments'
    import listcontainer from './ListContainer'                
    import qunarfooter from './QunarFooter'
     import axios from 'axios'
    export default {
        components:{
            "detail-detailsheader" : detailsheader,
            "detail-headfigure" : headfigure,
            "detail-baseinfo" : baseinfo,
            "detail-comments" : comments,
            "detail-listcontainer" : listcontainer,
            "detail-qunarfooter" : qunarfooter
        }
    }
</script>


<style scoped>

</style>