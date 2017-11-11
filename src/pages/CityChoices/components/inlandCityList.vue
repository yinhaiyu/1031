<template>
	<div class="">
		<div class="city-lists" >
			<h2 class="city-list-title">热门城市</h2>
			<ul class="city-hot-list">
				<li class="city-hot-list-item" v-for="item in hotCityList" :key=item.id>
					<router-link  :to="{ name: 'Home', query: { city: item.city}}" class="city-hot-list-item-link">{{item.city}}</router-link>
				</li>
			</ul>
			<h2 class="city-list-title">字母排序</h2>
			<ul class="city-character-list" @click="handleClick($event)">
				<li class="city-character-list-item" v-for="item in ChinaCharacterList" :key=item.id>
					<a class="city-character-list-item-link">{{item.letter}}</a>
				</li>
			</ul>			
			<div  v-for="(item,index) in ChinaCharacterCityList" :key=item.id>
				<a></a>
				<h2 class="city-list-title ChinaCharacter-title">{{item.letter}}</h2>
				<ul class="city-list">
						<li class="city-list-item"  v-for="item in ChinaCharacterCityList[index].cityList" :key=item.id>
							<router-link  :to="{ name: 'Home', query: { city: item.city}}" class="city-list-item-link">{{item.city}}</router-link>
						</li>
					
				</ul>
			</div>	
		</div>
	</div>
</template>

<script>
	import {mapState} from "vuex"
	export default {

		computed:mapState({
			hotCityList:(state) => (
				state.cityChoices.hotCityList
				),
			ChinaCharacterList:(state) => (
				state.cityChoices.ChinaCharacterList
				),
			ChinaCharacterCityList:(state) => (
				state.cityChoices.ChinaCharacterCityList
				)
		}),
		updated(){
			this.Titles=document.getElementsByClassName("ChinaCharacter-title")
			this.Characters=document.getElementsByClassName("city-character-list-item")	
		},
		methods:{
			handleClick: function(e) {
				for(var i=0;i<this.Titles.length;i++){
					if(e.target.innerText == this.Characters[i].innerText){
						document.documentElement.scrollTop=this.Titles[i].offsetTop
					}
					
				}

			}
		}


	}
</script>

<style scoped>
	.city-list-title{
		font-size: .24rem;
   		margin: .24rem .3rem
	}
	.city-hot-list{
		position:relative;
		background-color: #fff;
		overflow: hidden;
	}
	.city-hot-list::before{
		position: absolute;
		content: '';
		width: 33.33%;
   		left: 33.33%;    
	    height: 100%;
	    border-left: .02rem solid #ddd;
	    border-right: .02rem solid #ddd
	}
	.city-hot-list-item{
		width: 33.33%;
		float:left;
		height: .9rem;
	    line-height: .9rem;
	    font-size: .28rem;
	    text-align: center;
	    border-bottom: .02rem solid #ddd;
	    margin-bottom: -1px;
	}
	.city-hot-list-item-link{
		color: #212121;
	    display: block;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    font-size: .28rem
	}
	.city-character-list{
		position: relative;
	    overflow: hidden;
	    z-index: 0;
	    background-color: #fff;
	    padding: .3rem 0
	}
	.city-character-list-item{
		float: left;
		width: 16.66%;
	    height: .9rem;
	    line-height: .9rem;
	    font-size: .28rem;
	    text-align: center;    
	}
	.city-character-list-item-link{
		color: #212121
	}
	.city-list{
		position: relative;
	    overflow: hidden;
	    z-index: 0;
	    background-color: #fff;
	}
	.city-list-item{
		width: 25%;
	    height: .9rem;
	    line-height: .9rem;
	    font-size: .28rem;
	    text-align: center;
	    border-bottom: .02rem solid #ddd;
	    margin-bottom: -1px;
	    float: left;
	    position: relative;
	    z-index: 10;
	    color: #212121;
	}
	.city-list-item-link{
		color: #212121;
	    display: block;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    font-size: .28rem
	}
	.city-list:before {
	    content: '';
	    position: absolute;
	    width: 25%;
	    left: 25%;
	    height: 100%;
	    border-left: .02rem solid #ddd;
	    border-right: .02rem solid #ddd;
    }
    .city-list:after {
	    content: '';
	    position: absolute;
	    width: 10%;
	    left: 75%;
	    height: 100%;
	    border-left: .02rem solid #ddd;
	    border-right: 0;
    }
</style>