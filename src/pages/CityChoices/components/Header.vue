<template>
	<div class="cityChoices-header">
		<a class="cityChoices-header-left iconfont icon-back"></a>
		<h1 class="cityChoices-header-title">城市选择</h1>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.cityChoices-header{
		positon:relative;
		height: .88rem;
   		line-height: .88rem;
   		background: #00bcd4
	}
	.cityChoices-header-left{
		position:absolute;
		left: 0;
	    top: 0;
	    width: .8rem;
	    height: .88rem;
	    line-height: .88rem;
	    position: absolute;
	    font-size: .36rem;
	    color: #fff;
	    text-align: center
	}
	.cityChoices-header-title{
		overflow: hidden;
	    margin: 0 1rem;
	    line-height: .88rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: .32rem;
	    text-align: center;
	    color: #fff;
	}
</style>