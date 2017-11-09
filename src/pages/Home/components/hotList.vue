<template>
	<div>
		<h2 class="hot-h2">热门推荐</h2>
		<div id="hotList">
			<div class="hot-box" v-for="todo in todos" key="todo.id">
				<div class="hot-img">
					<img :src='todo.img' />
				</div>
				<div class="hot-conent">
					<p class="hot-name">{{todo.p1}}</p>
					<p class="hot-desc">{{todo.p2}}</p>
					<p class="hot-price">￥<span class="hot-price-span">{{todo.p3}}</span><span class="hot-price-text">起</span></p>
				</div>
			</div>
			<div class="hot-load">查看所有产品</div>
		</div>
		
		
	</div>
</template>

<script>
	export default {
	    data() {
	      return {       
	        todos:[{
				id:1,
				img:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
				p1:"故宫",
				p2:"东方宫殿建筑代表，世界宫殿建筑典范",
				p3:"40"
			},
	        {
				id:2,
				img:"http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_140x140_97813766.jpg",
				p1:"八达岭长城",
				p2:"不到长城非好汉",
				p3:"25"
			},
	        {
				id:3,
				img:"http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_140x140_e20be8e0.jpg",
				p1:"颐和园",
				p2:"保存完整的一座皇家行宫御苑",
				p3:"1"
			},
	        {
				id:4,
				img:"http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_140x140_b05eb1df.jpg",
				p1:"北京欢乐谷",
				p2:"七大主题园区带你畅享北京欢乐谷",
				p3:"11"
			},
	        {
				id:5,
				img:"http://img1.qunarzz.com/sight/p0/1708/2b/2b6378fd3b2e1d86a3.img.jpg_140x140_eae81520.jpg",
				p1:"慕田峪长城",
				p2:"秀美长城，关键是人少",
				p3:"19.1"
			}]
	      }
	    }
	  }
</script>

<style>
	.hot-h2{
		line-height: .8rem;
		padding-left: .26rem;
		background: #f5f5f5;
	}
	.hot-box{
	    height: 1.4rem;
	    padding: .24rem;
		
		border-bottom: 1px solid #ddd;
	}
	.hot-img{
		width: 1.4rem;
		height: 1.4rem;
		float: left;
		margin-right: .24rem;
	}
	.hot-img img{
		width: 100%;
		height: 100%;
	}
	.hot-name{
		overflow: hidden;
	    margin-top: .04rem;
	    margin-bottom: .1rem;
	    color: #212121;
	    font-size: .3rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.hot-desc{
		overflow: hidden;
	    margin-bottom: .1rem;
	    height: .4rem;
	    line-height: .4rem;
	    color: #9e9e9e;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.hot-price{
		overflow: hidden;
	    margin-bottom: .1rem;
	    height: .4rem;
	    line-height: .4rem;
	    color: #ff8300;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.hot-price-span{
		font-size: .36rem;
		padding: .04rem;
    	color: #ff8300;
	}
	.hot-price-text{
		color: #9e9e9e;
	}
	.hot-load{
		line-height: .88rem;
		color: #00afc7;
    	text-align: center;
	}
</style>