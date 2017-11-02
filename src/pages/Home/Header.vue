<template>
	<header class="home-header">
		<a class="home-header-left iconfont icon-back " href="#"></a>
		<div class="home-header-title">
			<a title="北京" class="title-link">
				<i class="search-pic iconfont icon-search"></i>
				<span class="search-msg">输入城市/景点/游玩主题</span>
			</a>
		</div>
		<div class="home-header-right">
			<a  title="城市选择" class="area-link">
				<span class="city-now">北京
					<i class="downarrow"></i>
				</span>
			</a>
		</div>
	</header>
</template>

<script>
export default {
  
}
</script>


<style scoped>
	.home-header{
		height: .88rem;
	    background: #00bcd4;
	    display:flex;
	}
	.home-header-left{
		display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;
	}
	.home-header-title{
	    height: .6rem;
	    margin: .14rem 0;
	    position: relative;
	    background: #fff;
	    line-height: .6rem;
	    border-radius: .06rem;
	    flex:1
	}
	.home-header-right{
		height: 100%;
	}
	.title-link{
		display: block;
    	height: 100%;
    	color: #e4e7ea
	}
	.search-pic{
		position: absolute;
	    left: .2rem;
	}
	.search-msg{
		display: inline-block;
	    overflow: hidden;
	    position: absolute;
	    left: .3rem;
	    top: 0;
	    width: 3.6rem;
	    white-space: nowrap;
	    text-overflow: ellipsi;
	    text-align: center;
	}
	.area-link{
	    display: inline-block;
	    line-height: .88rem;
	    margin-right: .04rem;
	    color: #fff;
	    
	}
	.city-now{
		position:relative;
		padding: 0 .22rem;
		width:.6rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.downarrow{
		position:absolute;
   		margin-left: .04rem;
   		width: 0;
	    height: 0;
	    border-left: 0.12rem solid transparent;
	    border-right: 0.12rem solid transparent;
	    border-top: 0.12rem solid #fff;
	    left:0.7rem;
	    top:0.1rem;

	}
	

</style>
