<template>
	<div>
		<div class="mp-main" id="mp-main">
			<div class="mp-imgavatar">
				<img class="mp-imgavatar-img" :src='Detail[id-1].img' alt=""/>
				<div class="mp-imgavatar-mask"></div>
				<div class="mp-imgavatar-infocon">
					<span class="mp-imgavatar-left">出发地:北京</span>
					<span class="mp-imgavatar-right">北京旭冉之旅</span>
				</div>
			</div>
			<div class="mp-header-back">
				<router-link to="/swiperList">
					<span class="mp-headerback-icon iconfont icon-back"></span>
				</router-link>
			</div>			
		
		<div class="mp-prdcard-con">
			<h3 class="mp-prdcard-name">
				{{Detail[id-1].title}}
			</h3>
			<div class="mp-prdcard-pricecon">
				<em class="mp-prdcard-priceicon">&yen;</em>
				<span class="mp-prdcard-pricetext">{{Detail[id-1].price}}</span>
				<span class="mp-prdcard-gray">起</span>
				<span class="mp-bookingahead-text">可订11月10日</span>
				<span class="mp-prdcard-supplier">已售:878</span>
			</div>
			<div class="mp-prdcard-tagcon">
				<div class="mp-prdcard-tag-item">
					<span class="mp-prdcard-tag-icon iconfont icon-right-1"></span>
					<span class="mp-prdcard-tag-desc">条件退</span>
				</div>
				<div class="mp-prdcard-tag-item">
					<span class="mp-prdcard-tag-icon iconfont icon-right-1"></span>
					<span class="mp-prdcard-tag-desc">铁定成团</span>
				</div>
				<div class="mp-prdcard-tag-item">
					<span class="mp-prdcard-tag-icon iconfont icon-right-1"></span>
					<span class="mp-prdcard-tag-desc">无自费</span>
				</div>
				<div class="mp-prdcard-tag-item">
					<span class="mp-prdcard-tag-icon iconfont icon-right-1"></span>
					<span class="mp-prdcard-tag-desc">无购物</span>
				</div>
			</div>
		</div>
		<div class="mp-commentsinfo-con">
			<span class="mp-commentswell-score">4.9</span>
			<span class="mp-commentswell-text">分</span>
			<span class="mp-comments-tagscore">非常满意</span>
			<span class="mp-comments-totalnum">
				用户评论(282)&nbsp;&nbsp;>
			</span>
		</div>
		<div class="mp-comments-item">
			<div class="mp-content-level">
				<span class="mpf-starlevel">
					<strong class="mpf-starlevel-gain">
						<span class="mpf-starlevel-total">
							<em class="iconfont icon-star"></em>
							<em class="iconfont icon-star"></em>
							<em class="iconfont icon-star"></em>
							<em class="iconfont icon-star"></em>
							<em class="iconfont icon-star"></em>
						</span>
					</strong>
					
				</span>
				<span class="mp-comments-date">b*5  2017-11-06</span>
			</div>
			<p class="mp-wellcomments-text mp-ellipsis2">
				兵阿哥的导游服务超级棒，贴心，诙谐幽默，知识渊博，出口成章，引经据典，留下了美好的回忆
			</p>
		</div>
		<div class="mp-prddetail-group mp-tab-group">
			<div class="mp-tab mpg-flexbox mp-border-bottom">
				<div class="mp-tab-item mpg-flexbox-item mp-tab-active">
					行程介绍
				</div>
				<div class="mp-tab-item mpg-flexbox-item">
					费用说明
				</div>
				<div class="mp-tab-item mpg-flexbox-item">
					使用说明
				</div>
			</div>
		</div>
		
		</div>
	</div>
</template>

<script>
import axios from 'axios';
	export default {
		data() {
			return {
				Detail: [],
				id: ""
			}
		},
		mounted() {
			this.handleGetData()
			
			this.id = this.$route.query.name
		},
		methods: {
			handleGetData() {
				axios.get('../../static/swiperList.json?city=北京')
				.then(this.handleGetDateSucc.bind(this))
				.catch(this.handleGetDateError.bind(this))
			},
			handleGetDateSucc(response) {
				const res = response.data;
				const data = res.data;
				this.Detail = data.swiperList;
			},
			handleGetDateError(err) {
				console.log('err');
			}
		}
	}
</script>

<style>
	.mp-main {
	    background: #f5f5f5;
	}
	.mp-imgavatar {
	    overflow: hidden;
	    position: relative;
	    height: 4rem;
	}
	.mp-imgavatar-img {
	    width: 100%;
	    min-height: 4rem;
	}
	.mp-prdcard-tagcon {
	    overflow: hidden;
	    padding-bottom: .2rem;
	    font-size: 0;
	}
	.mp-prdcard-tag-item:not(:last-child) {
	    margin-right: .2rem;
	}
	.mp-prdcard-tag-item {
	    float: left;
	    height: .34rem;
	    font-size: .24rem;
	    line-height: .34rem;
	}
	.mp-prdcard-tag-icon {
	    margin-right: .04rem;
	    color: #00afc7;
	    font-size: .28rem;
	    vertical-align: -.02rem;
	}
	.mp-prdcard-tag-desc {
	    color: #616161;
	}
	.mp-imgavatar-mask {
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    width: 100%;
	    height: .93rem;
	    color: #fff;
	    background: linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0));
	}
	.mp-imgavatar-infocon {
	    overflow: hidden;
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    width: 100%;
	    font-size: 0;
	}
	.mp-imgavatar-left {
	    margin-left: .2rem;
	    overflow: hidden;
	    display: inline-block;
	    height: .34rem;
	    margin-bottom: .22rem;
	    color: #fff;
	    font-size: .24rem;
	    line-height: .34rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.mp-imgavatar-right {
	    margin-right: .2rem;
	    float: right;
	    overflow: hidden;
	    display: inline-block;
	    height: .34rem;
	    margin-bottom: .22rem;
	    color: #fff;
	    font-size: .24rem;
	    line-height: .34rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.mp-header-back {
		position: absolute;
		display: block;
	    left: .1rem;
	    top: .1rem;
	    width: .72rem;
	    height: .72rem;
	   	background-color: #000;
	   	opacity: .5;
		border-radius: 50%;
		text-align: center;
	}
	.mp-headerback-icon {
		line-height: .72rem;
	    font-size: .5rem;
	    font-weight: 900;
	    color: #FFFFFF;	   
	}
	.mp-prdcard-con {
	    position: relative;
	    margin-top: -.1rem;
	    padding: .2rem .2rem 0 .2rem;
	    background: #fff;
	    border-radius: .1rem .1rem 0 0;
	}
	.mp-prdcard-name {
	    overflow: hidden;
	    display: -webkit-box;
	    color: #212121;
	    font-size: .36rem;
	    line-height: .44rem;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 3;
	    -webkit-box-orient: vertical;
	}
	.mp-prdcard-pricecon {
	    overflow: hidden;
	    margin: .16rem 0;
	    height: .48rem;
	    font-size: 0;
	}
	.mp-prdcard-priceicon {
	    color: #ff8300;
	    font-size: .24rem;
	}
	.mp-prdcard-pricetext {
	    color: #ff8300;
	    font-size: .48rem;
	}
	.mp-prdcard-supplier {
	    color: #9e9e9e;
	    font-size: .24rem;
	}
	.mp-bookingahead-text {
	    color: #616161;
	    font-size: .24rem;
	    margin-left: .2rem;
	}
	.mp-prdcard-supplier {
	    color: #616161;
	    float: right;
	    height: .24rem;
	    margin-top: .2rem;
	}
	.mp-commentsinfo-con {
	    position: relative;
	    margin-top: .2rem;
	    background-color: #fff;
	    height: .8rem;
	    line-height: .8rem;
	}
	.mp-commentswell-score {
	    font-size: .4rem;
	    color: #00afc7;
	    margin-left: .2rem;
	}
	.mp-commentswell-text {
	    color: #00afc7;
	}
	.mp-comments-tagscore {
	    display: inline-block;
	    margin-left: .1rem;
	    color: #616161;
	}
	.mp-comments-totalnum {
	    float: right;
	    position: relative;
	    top: .25rem;
	    display: inline-block;
	    line-height: .28rem;
	    font-size: .28rem;
	    margin-left: .16rem;
	    margin-right: .2rem;
	    color: #9e9e9e;
	}
	.mp-comments-item {
	    color: #616161;
	    padding: .2rem;
	    background: #FFFFFF;
	}
	.mpf-starlevel {
	    display: inline-block;
	    position: relative;
	    width: 1.8rem;
	    height: .28rem;
	}
	.mpf-starlevel-gain {
	    z-index: 2;
	    color: #00bcd4;
	    
	}
	.mpf-starlevel-total em{
		font-size: .1rem;
	}
	.mp-comments-date {
	    float: right;
	    margin-left: .2rem;
	    color: #616161;
	}
	.mp-wellcomments-text.mp-ellipsis2 {
	    line-height: .4rem;
	    display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
	.mp-prddetail-group {
	    margin-top: .2rem;
	    padding: .01rem;
	    background-color: #fff;
	}
	.mpg-flexbox {
	    display: flex;
	    width: 100%;
	}
	.mp-tab {
	    overflow: hidden;
	    margin-bottom: -.2rem;
	    background-color: #fff;
	}
	.mp-tab-item {
	    display: block;
	    height: .4rem;
	    padding: .2rem 0;
	    color: #616161;
	    font-size: .28rem;
	    line-height: .4rem;
	    text-align: center;
	    -webkit-box-flex: 1;
	    flex: 1;
	}
	.mp-tab-active {
	    position: relative;
	    border-bottom: .04rem solid #00afc7;
	    color: #00afc7;
	}
	

	
	
</style>