<template>
	<div>
		<div class="mp-main" id="mp-main">
			<div class="mp-imgavatar">
				<img class="mp-imgavatar-img" :src='url' alt=""/>
				<div class="mp-imgavatar-mask"></div>
				<div class="mp-imgavatar-infocon">
					<span class="mp-imgavatar-left">出发地:北京</span>
					<span class="mp-imgavatar-right">北京旭冉之旅</span>
				</div>
				<div class="mp-header-back">
					<router-link to="/listHome">
						<span class="mp-headerback-icon iconfont icon-back"></span>
					</router-link>
				</div>
			</div>
						
		
		<div class="mp-prdcard-con">
			<h3 class="mp-prdcard-name">
				{{title}}
			</h3>
			<div class="mp-prdcard-pricecon">
				<em class="mp-prdcard-priceicon">&yen;</em>
				<span class="mp-prdcard-pricetext">{{price}}</span>
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

		<div class="mp-prddetail-group">
			<div class="mp-card-group">
				<div class="mp-routesum-outter">
					<div class="mp-routesum-inner">
						<div class="mp-routesum-item">
							<div class="mp-routesum-title">
								<span class="mp-oneday-iconfont mp-routesum-icon">
									<em class="iconfont icon-gongjiaoche"></em>
								</span>
								<span>交通</span>
							</div>
							<div class="mp-routesum-content">交通往返</div>
						</div>
						<div class="mp-routesum-item">
							<div class="mp-routesum-title">
								<span class="mp-oneday-iconfont mp-routesum-icon">
									<em class="iconfont icon-daocha"></em>
								</span>
								<span>用餐</span>
							</div>
							<div class="mp-routesum-content">包含餐具</div>
						</div>
					</div>
				</div>
			</div>

			<div class="mp-summary-head">
				<h3 class="mp-summary-title">行程亮点</h3>
			</div>

			<div class="mp-card-content">
				<p class="mp-card-desc">					
					★登八达岭长城，逛故宫，一天饱览两大“双遗”景点<br>
					★品尝京城老字号庆丰包子；，坐拥北京绚烂的穹顶<br>
					★专业导游陪同讲解，无任何强制购物和隐性消费
				</p>
			</div>

			<h3 class="mp-route-headtext">行程安排</h3>

		</div>

		<div class="mp-fixbooking-con mpg-flexbox">
			<div class="mp-fixbooking-qchat mp-border-topleft">
				<div class="mpg-iconfont mp-qchat-icon">
					<em class="iconfont icon-zixun"></em>
				</div>
				<div class="mp-qchat-text">咨询</div>
			</div>
			<router-link class="mp-fixbooking-btn mpg-flexbox-item" to="/">
				<div class="mp-fixbooking-btn mpg-flexbox-item">
					<span>
						立即预定
					</span>
				</div>
			</router-link>
		</div>

	</div>
</template>

<script>
import axios from 'axios';
	export default {
		data() {
			return {
				Detail: [],
				id: "",
				url: "",
				title: "",
				price: ""
			}
		},
		mounted() {
			this.handleGetData()
			this.id = parseInt(this.$route.query.name)-1
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
				this.url = this.Detail[this.id].img;
				this.title = this.Detail[this.id].title;
				this.price = this.Detail[this.id].price;
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
	    padding: .2rem;
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
	.mp-prddetail-group {
		margin-top: .2rem;
		padding: .01rem;
		background-color: #fff;
	}
	.mp-card-group {
		margin-top: .2rem;
		background-color: #fff;
		padding: 0 .2rem;
	}
	.mp-routesum-outter {
		padding: .24rem;
	}
	.mp-routesum-inner {
		background-color: #f5f5f5;
		border-radius: .1rem;
		padding: .2rem;
	}
	.mp-routesum-item:nth-child(1) {		
		overflow: hidden;
		margin-bottom: .2rem;
	}
	.mp-routesum-title {		
		position: absolute;
		width: 1.2rem;
		color: #212121;
	}
	.mp-routesum-icon {
		color: #919191;
		margin-right: .1rem;
	}
	.mp-routesum-content {
		padding-left: 1.2rem;
		line-height: .36rem;
		color: #616161;
	}
	.mp-summary-head {
		margin-top: .1rem;
	}
	.mp-summary-title {
		color: #616161;
		font-size: .4rem;
		padding-left: .2rem;
	}
	.mp-card-content {
		padding: .24rem .3rem;
		border-bottom: 1px dashed #dadada;
	}
	.mp-card-desc {
		color: #616161;
		font-size: .28rem;
		line-height: .44rem;
		max-height: 1.32rem;
		overflow: hidden;
	}
	.mp-route-headtext {
		color: #616161;
		font-size: .4rem;
		margin: .3rem 0 0 .2rem;
	}
	.mp-fixbooking-con {
		position: fixed;
		z-index: 82;
		bottom: 0;
		left: 0;
		width: 100%;
		height: .98rem;
		line-height: .98rem;
	}
	.mp-fixbooking-qchat {
		float: left;
		padding: .16rem 0 .06rem;
		width: 1.02rem;
		background: #fff;
		color: #616161;
		text-align: center;
	}
	.mp-qchat-icon {
		position: relative;
		background: #FFFFFF;
		top: -.02rem;
		height: .4rem;
		font-size: .4rem;
		line-height: .4rem;
	}
	.mp-qchat-text {
		height: .28rem;
		font-size: .2rem;
		line-height: .28rem;
	}
	.mp-fixbooking-btn {
		overflow: hidden;
		height: .98rem;
		width: 100%;
		background: #ff9800;
		color: #fff;
		font-size: .4rem;
		text-align: center;
	}



</style>