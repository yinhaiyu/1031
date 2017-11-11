<template>
	<div>
		<div class="mp-promote">
			<h3 class="mp-ticket-type mp-border-bottom">去哪儿推荐</h3>
			<div class="mp-ticket-item mp-flexbox mp-border-top">
				<div class="mp-ticket-main mp-flexbox-layout">
					<div>
						<div class="mp-ticket-supplier">
							<span class="mp-ticket-qunar"></span>去哪儿直销
						</div>
					<h6 class="mp-ticket-title mp-ellipsis2">【上午场】故宫成人票凭身份证入园</h6>
					<ul class="mp-ticket-light"></ul>
					<ul class="mp-ticket-light">
						<span class="mp-ticket-desctag">
							<span class="mpg-iconfont mp-ticket-tagicon"></span>可订明日
						</span>
						<span class="mp-ticket-desctag">
							<span class="mpg-iconfont mp-ticket-tagicon"></span>条件退
						</span>
					</ul>
					<div class="mp-ticket-detail">
							</div>
						</div>
					</div>
				<div class="mp-ticket-side mp-flexbox-layout mp-border-left">
					<a href="" title="故宫门票">
						<strong class="mp-ticket-sale mp-price">¥
							<em class="mp-price-num">40</em>
						</strong>
						<em class="mp-ticket-btn mp-promote-ablebtn">预订</em>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    
</script>


<style scoped>
.mp-promote .mp-ticket-type {
    background-repeat: no-repeat;
    background-size: .5rem .5rem;
    background-position: .2rem center;
    text-indent: .7rem;
}
.mp-ticket-type {
    overflow: hidden;
    position: relative;
    z-index: 4;
    margin-bottom: -.02rem;
    padding: 0 .2rem;
    height: .88rem;
    background: #fff;
    color: #333;
    font-size: .32rem;
    line-height: .88rem;
    text-indent: .4rem;
}
.mp-promote .mp-ticket-item {
    padding: .2rem .2rem .24rem .2rem;
}
.mp-ticket-sale .mp-price-num {
    margin-left: .04rem;
    font-size: .32rem;
    line-height: .3rem;
}
.mp-ticket-item {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: .25rem;
}
.mp-flexbox {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
}
.mp-ticket-main {
    -webkit-box-flex: 2.92;
    -moz-box-flex: 2.92;
    box-flex: 2.92;
    -webkit-flex: 2.92;
    -moz-flex: 2.92;
    -ms-flex: 2.92;
    flex: 2.92;
}
.mp-flexbox-layout {
    width: .02rem;
}
.mp-flexbox-item, .mp-flexbox-layout {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.mp-promote .mp-ticket-onedayitem, .mp-promote .mp-ticket-supplier {
    display: none;
}
.mp-ticket-supplier {
    font-size: .32rem;
}
.mp-ticket-supplier, .mp-ticket-title, .mp-ticket-onedaytitle {
    padding: .08rem 0;
    color: #333;
    font-size: .28rem;
    line-height: .36rem;
}
.mp-promote .mp-ticket-title, .mp-promote .mp-ticket-onedaytitle {
    margin-right: .1rem;
    line-height: .52rem;
    padding: 0;
    font-size: .3rem;
}
.mp-ticket-supplier, .mp-ticket-title, .mp-ticket-onedaytitle {
    padding: .08rem 0;
    color: #333;
    font-size: .28rem;
    line-height: .36rem;
}
.mp-ellipsis2 {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.mp-promote .mp-ticket-light {
    padding: .04rem 0 .08rem 0;
}
.mp-ticket-light {
    overflow: hidden;
}
.mp-ticket-desctag:not(:last-child) {
    margin-right: .24rem;
}
.mp-ticket-desctag {
    display: inline-block;
    color: #616161;
    font-size: .24rem;
    line-height: .32rem;
    white-space: nowrap;
}
.mp-ticket-detail {
    line-height: .36rem;
    font-size: .24rem;
    color: #999;
}
.mp-flexbox-layout {
    width: .02rem;
}
a {
    color: #00afc7;
    text-decoration: none;
}
.mp-ticket-sale, .mp-ticket-provide {
    color: #ff9800;
}
.mp-ticket-sale {
    height: .32rem;
}
.mp-promote .mp-promote-ablebtn {
    background: #ff9800;
}
.mp-ticket-sale, .mp-ticket-cost, .mp-ticket-btn, .mp-ticket-provide {
    display: block;
    overflow: hidden;
    height: .28rem;
    font-size: .24rem;
    line-height: .28rem;
    text-align: center;
}
.mp-ticket-main {
    -webkit-box-flex: 2.92;
    -moz-box-flex: 2.92;
    box-flex: 2.92;
    -webkit-flex: 2.92;
    -moz-flex: 2.92;
    -ms-flex: 2.92;
    flex: 2.92;
}
.mp-ticket-btn {
    height: .6rem;
    background: #ff9800;
    color: #fff;
    font-size: .28rem;
    line-height: .6rem;
    -webkit-border-radius: .06rem;
    -moz-border-radius: .06rem;
    border-radius: .06rem;
}
</style>