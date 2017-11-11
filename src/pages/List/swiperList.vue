<template>
	<div>			
		<div class="mp-tagfilter-list" id="mp-nav">
			<div id="wrapper">
				<div id="scroller">	

					<div class="mp-tagfilter-item" v-for="item in navList" key="item.id">
						{{item.title}}
					</div>
					
				</div>
			</div>
			<span class="mpg-iconfont" v-on:click="reverseMessage">
				<em class="iconfont icon-shang-copy"></em>
			</span>	
						
		</div>
					
		<div class="navbox" id="mp-nav2" v-show="flag">
			<span class="mpg-iconfont" v-on:click="reverseMessage">
				<em class="iconfont icon-fa-angle-up"></em>
			</span>
			<h3 class="mp-tagfilter-title">
				游玩景点
				<span class="mp-tagfilter-subtitle">（可多选）</span>
				
			</h3>
			<div class="mp-tagfilter-list2">
					
							<div class="mp-tagfilter-item" v-for="item in navList" key="item.id">
								{{item.title}}
							</div>						
					
			</div>
		</div>
		
		
		
		<div class="mp-list">
			<div class="mp-list-item" v-for="item in swiperList" key="item.id" v-if="item.id <= 10">
				<router-link class="mp-list-item" :to="{path:'/detail',query: {name: item.id}}">
				<div class="mp-list-imgcon image-ready">
					<img class="mp-list-productimg" :src="item.imgUrl" alt=""/>
				</div>
				<div class="mp-list-productinfo mpg-flexbox-item mpf-border-bottom">
					<h2 class="mp-list-productname mpg-ellipsis2" style="color: #212121;">
						{{item.title}}
					</h2>
					<div class="mp-list-taglist">
						<span class="mp-list-tagitemlight mpf-border-right">北京出发</span>
						<span class="mp-list-tagitem mpf-border-right">无自费</span>
						<span class="mp-list-tagitem mpf-border-right">无购物</span>
					</div>
					<div class="mp-list-priceinfo">
						<span class="mp-list-qunarprice">
							&yen;
							<em>{{item.price}}</em>
						</span>
						<span class="mp-list-priceflag">起</span>
					</div>
					<div class="mp-list-moreinfo">
						<span class="mp-list-text mpf-border-left">
							已售892
						</span>
					</div>
				</div>
				</router-link>
			</div>
		</div>
		<div class="mp-moreinfo">
			<div class="mp-pagination">
				<div class="mp-pagination-left">
					上一页
				</div>
				<span class="mp-page-num">1/3</span>
				<div class="mp-pagination-right">
					下一页
				</div>
			</div>
			<div class="mp-page-text">
				去哪儿门票
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';	
	export default {
		mounted() {
			
			var myScroll = new IScroll('#wrapper', { eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false });
			
			this.swiperListDate();		
			
		},
		data() {
			return {
				swiperList: [],
				navList: [],
				flag: false
			}
		},
		
		methods: {
			swiperListDate() {
				axios.get('../../static/swiperList.json?city=北京')
				.then(this.handleGetDateSucc.bind(this))
				.catch(this.handleGetDateError.bind(this))
			},
			handleGetDateSucc(response) {
				const res = response.data;
				const data = res.data;
				this.swiperList = data.swiperList;
				this.navList = data.navList;
			},
			handleGetDateError(err) {
				console.log('err');
			},
			reverseMessage: function () {
		    	
		    	if(this.flag){
		    		this.flag = false
		    	}else{
		    		this.flag = true
		    	} 
		  }
		}
	}
</script>

<style>
	#wrapper {	
		
		height: .8rem;
		overflow: hidden;
	}
	#scroller{
		width: 4830px;
		height: .8rem;
	}
	.mp-tagfilter-list {	
		position: relative;			
	    height: .8rem;
	    max-height: 6rem;
	    background: #e5e7e8;
	}	
	
	
	.navbox{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		position: fixed;
		background: #e5e7e8;
	}
	.mp-tagfilter-title {	    
	    color: #212121;
	    font-size: .28rem;
	    line-height: .8rem;
	    text-indent: .2rem;
	}
	.mp-tagfilter-subtitle {
	    font-size: .24rem;
	}
	
	.mp-tagfilter-list2 {
		width: 100%;
		height: 7rem;
		overflow: hidden;
		overflow: auto;
	}
	
	
	

	.mp-tagfilter-list2 {
	    height: 7rem;
	    background: #e5e7e8;
	}
	
	

	
	.mp-list {
	    background: #fff;
	    overflow: hidden;
	}
	.mp-tagfilter-item {
		overflow: hidden;
	    float: left;
	    position: relative;
	    padding: .13rem;
    	background: #FFFFFF;
    	margin: .1rem;
	}
	
	.mpg-iconfont{
		display: block;
		height: .8rem;
		width: .8rem;
		color: #aab2b7;
	    font-size: .5rem;
	    line-height: .78rem;
	    text-align: center;
		position: absolute;
		right: 0;
		top: 0;
		background: #e5e7e8;
	}
	.mp-list-item {
	    position: relative;
	    display: flex;
	    width: 100%;
    }	
    .mp-list-imgcon {
	    margin: .2rem;
	    position: relative;
	    width: 1.6rem;
	    height: 1.6rem;
	}
	.mp-list-productimg {
	    width: 1.6rem;
	    height: 1.6rem;
	}
	.mp-list-productinfo {
	    padding: .2rem .2rem .2rem 0;
	    height: 1.6rem;
	    overflow: hidden;
	}
	.mp-list-productname {
	    line-height: .36rem;
	    font-size: .3rem;
	    display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
	.mp-list-taglist {
	    position: relative;
	    top: .06rem;
	    overflow: hidden;
	    max-height: .58rem;
	    margin-right: 1rem;
	    padding-top: .06rem;
	    line-height: .24rem;
	    font-size: 0;
	}
	.mp-list-tagitemlight {
	    display: inline;
	    padding: 0 .1rem;
	    font-size: .24rem;
	    color: #00bcd4;
	}
	.mp-list-tagitem {
	    display: inline;
	    padding: 0 .1rem;
	    font-size: .24rem;
	    color: #616161;
	}
	.mp-list-tagitem {
	    display: inline;
	    padding: 0 .1rem;
	    font-size: .24rem;
	    color: #616161;
	}
	.mp-list-priceinfo {
	    position: absolute;
	    right: .2rem;
	    bottom: .48rem;
	    height: .32rem;
	    line-height: .32rem;
	    color: #9e9e9e;
	    text-align: right;
	}
	.mp-list-qunarprice {
	    font-size: .22rem;
	    font-weight: bold;
	    color: #ff8300;
	}
	.mp-list-priceflag {
	    font-size: .24rem;
	    padding-left: .02rem;
	}
	.mp-list-moreinfo {
	    position: absolute;
	    bottom: .2rem;
	    width: 100%;
	    font-size: 0;
	    color: #9e9e9e;
	}
	.mp-list-text {
	    padding: 0 .1rem;
	    font-size: .22rem;
	}
	.mp-moreinfo {
	    margin: .2rem 0;
	    color: #00afc7;
	    line-height: .82rem;
	    text-align: center;
	}
	.mp-pagination {
	    height: .7rem;
	    line-height: .7rem;
	}
	.mp-pagination-left {
	    display: inline-block;
	    width: 1.4rem;
	    border: .02rem solid #00afc7;
	    background: #fff;
	    color: #00afc7;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
	.mp-pagination-right {
		display: inline-block;
	    width: 1.4rem;
	    border: .02rem solid #00afc7;
	    background: #fff;
	    color: #00afc7;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
	.mp-page-num {
	    color: #212121;
	    line-height: .6rem;
	    padding: 0 15px;
	}
	.mp-page-text {
	    padding-top: .2rem;
	    line-height: .3rem;
	    font-size: .3rem;
	}
	
</style>