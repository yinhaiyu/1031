<template>
	<div class="container">
		<div class="cityChoices-tab">
			<ul class="cityChoices-tab-list" @click="handleChangeClick($event)">
				<li class="active cityChoices-tab-item">国内</li>
				<li class="cityChoices-tab-item">国际</li>
			</ul>
		</div>
		<div v-if="flag">
			<city-choices-inland-city-list />
		</div>
		<div v-else>
			<international-city-choices-inland-city-list />
		</div>
	</div>
</template>

<script>
	import inlandCityList from "./inlandCityList"
	import internationalCityList from "./internationalCityList"
	export default {
		data:function(){
			return {
				flag:true
			}
		},
		components:{
		  	"city-choices-inland-city-list":inlandCityList,
		  	"international-city-choices-inland-city-list":internationalCityList
		},
		mounted(){
			this.TabItems=document.getElementsByClassName("cityChoices-tab-item")
		},
		methods:{
			handleChangeClick: function(e) {
				for(var i=0;i<this.TabItems.length;i++){
						this.TabItems[i].className="cityChoices-tab-item"
				}
				if(e.target.innerText=="国内"){
					this.flag=true
					e.target.className="active cityChoices-tab-item"
				}else if(e.target.innerText=="国际"){
					this.flag=false
					e.target.className="active cityChoices-tab-item"
				}
			}
		}
	}
</script>

<style scoped>
	.container{
		background:rgb(245, 245, 245)
	}
	.cityChoices-tab{
		height: .4rem;
	    line-height: .4rem;
	    background-color: #00bcd4;
	    padding: .2rem 1rem;
	    padding-top:0;
	    color: #fff;
	}
	.cityChoices-tab-list{
		border: 1px solid #fff;
    	border-radius: .03rem;
    	overflow: hidden
	}
	.cityChoices-tab-item{
		width: 50%;
	    float: left;
	    text-align: center;
	    background-color: #00bcd4;
	    font-size: .28rem;
	    color: #fff;
	}
	.cityChoices-tab-list .active{	
	    background-color: #fff;
	    color: #00bcd4;
	}
</style>