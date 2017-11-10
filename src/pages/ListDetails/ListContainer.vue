<template>
	<div>
		<div class="mp-ticket-group mp-border-bottom">
			<h3 class="mp-ticket-type mp-border-bottom"><em class="mp-ticketype-ticket"></em>故宫当日门票</h3>
			<div class="mp-ticket-type-info mp-border-bottom">
				<p class="mp-ticket-type-name mp-ellipsis2">【当日票】故宫成人票
					<span class="mp-ticket-type-subname">凭身份证入园</span>
				</p>
				<div class="mp-ticket-type-price mp-price">
					<p>￥<span class="mp-price-num">40</span><em class="mp-qi">起</em><em class="mp-shang-copy iconfont icon-shang-copy"></em></p>
				</div>
			</div>
			<div class="mp-ticket-type-info mp-border-bottom">
				<p class="mp-ticket-type-name mp-ellipsis2">【当日票】故宫成人票
					<span class="mp-ticket-type-subname">凭身份证入园</span>
				</p>
				<div class="mp-ticket-type-price mp-price">
					<p>￥<span class="mp-price-num">20</span><em class="mp-qi">起</em><em class="mp-shang-copy iconfont icon-shang-copy"></em></p>
				</div>
			</div>
			<div class="mp-more-refresh mp-border-top">
				<p>查看剩余产品<em class="mp-iconfont iconfont icon-shang-copy"></em></p>
			</div>
		</div>
	</div>
</template>

<script>
    
</script>


<style scoped>
	.mp-ticketype-ticket{
		display: inline-block;
		position: absolute;
		width: .36rem;
		height: .36rem;
		top: .26rem;
		left: .2rem;
		margin-right: .1rem;
		background:url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat;
		background-size:20px;
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
	.mp-ticket-type-info {
		position: relative;
		z-index: 2;
		margin-bottom: -.02rem;
		padding: .24rem .2rem;
		background: #fff;
	}
	.mp-ticket-type-name {
		margin-right: 1.8rem;
		color: #333;
		font-size: .3rem;
		line-height: .48rem;
	}
	.mp-ellipsis2 {
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.mp-ticket-type-subname {
		font-size: .24rem;
		color: #888;
		line-height: .32rem;
		margin: .1rem 0 .14rem .1rem;
		margin-right: 1.84rem;
	}
	.mp-ticket-type-price {
		right: .46rem;
		margin-top: -.28rem;
		color: #ff9800;
		font-size: .24rem;
	}
	.mp-ticket-type-extend {
		right: .2rem;
		margin-top: -.22rem;
		color: #bbb;
		font-size: .24rem;
	}
	.mp-ticket-numword{
		display: inline-block;
		color: #9e9e9e;
		font-size: .24rem;
	}
	.mp-ticket-type-price, .mp-ticket-type-extend {
		overflow: hidden;
		position: absolute;
		top: 50%;
		height: .4rem;
		line-height: .4rem;
	}
	.mp-more-refresh {
		position: relative;
		margin-top: -.02rem;
		height: .8rem;
		background: #fff;
		color: #616161;
		line-height: .8rem;
		text-align: center;
		z-index: 2;
	}
	.mp-shang-copy{
		color:#ccc;
		font-size: 0.2rem;
    	margin-left: 0.06rem;
	}
	.mp-qi{
		color:#ccc;
	}
	.mp-price-num{
		font-size:0.3rem;
	}
</style>