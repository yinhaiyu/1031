<template>
	<div class="salesActivity">
		<ul class="home-list-con">
			<li class="home-list-con-item location" >
				<span class="home-list-con-location iconfont icon-map"></span>定位失败
			</li>
			<li class="home-list-con-item">
				<a class="home-list-con-activity-link"><span class="home-list-con-activity iconfont icon-logistic"></span>5折泡温泉</a>
			</li>
		</ul>
		<ul class="home-activity-con">
			<li class="home-activity-con-item fir">
				<a></a>
			</li>
			<li class="home-activity-con-item sec">
				<a></a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.salesActivity{
		background: #f5f5f5;
	}
	.home-list-con{
	    display: -webkit-box;
		width:100%;
		background: #fff;
	}
	.home-list-con::before,.home-activity-con::before{
		content:"";
		position:absolute;
		left: 0;
	    width: 100%;
	    height: 1px;
		border-top: 1px solid #e0e0e0;
	}
	
	.home-list-con-item{
		height:0.98rem;
		line-height:0.98rem;
		width:50%;
		text-align: center;
		font-size: .28rem;
		color: #212121;
		position: relative;
		
	}
	.home-list-con-activity-link{
		color: #212121;
	}
	.home-list-con  .location::before,.home-activity-con .fir::before{
		content:"";
		position:absolute;
		right: 0;
		height:100%;
		width: 1px;
		border-right: 1px solid #e0e0e0;
	}
	.home-activity-con{
		position: relative;
		display: -webkit-box;
		width: 100%;
	    margin-top: .2rem;
	   	background: #fff;
	}
	.home-activity-con::after{
		content:"";
		position: absolute;
		left: 0;
	    width: 100%;
	    height: 1px;
	    bottom: 0;		
		border-bottom: 1px solid #e0e0e0
	}
	.home-activity-con-item{
		width:50%;
		height: 1.4rem;
	    line-height: 1.4rem;
	    color: #212121;
	    font-size: .28rem;
	    
	}
	.home-activity-con .fir{
		position: relative;
		background: url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png) center center no-repeat;
	    background-size: auto 100%;
	}
	.home-activity-con .sec{
		background: url(http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png) center center no-repeat;
	    background-size: auto 100%;
	}
	.home-list-con-location,.home-list-con-activity{
		margin-right: .05rem;
	    color: #616161;
	    font-size: .32rem
	}
</style>
