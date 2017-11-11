<template>
	<div class="payment-header">
        <a  class="payment-header-left iconfont icon-back"></a>
        <h1 class="payment-header-title">订单填写</h1>             
        <a  class="payment-header-right">登录</a>
                
    </div>
</template>

<script>
	
</script>

<style scoped>
	.payment-header{
		position:relative;
		height: .88rem;
   		background: #00bcd4
	}
	.payment-header-left{
		position: absolute;
		left: 0;
		top: 0;
		width: .8rem;
	    height: .88rem;
	    line-height: .88rem;
	    font-size: .36rem;
	    color: #fff;
	    text-align: center;  
	}
	.payment-header-title{
		overflow: hidden;
	    margin: 0 1rem;
	    line-height: .88rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: .32rem;
	    text-align: center;
	    color: #fff;
	}
	.payment-header-right{
		position: absolute;
	    top: 0;
	    right: 0;
	    width: 1rem;
	    height: .88rem;
	    line-height: .88rem;
	    text-align: center;
	    font-size: .28rem;
	    color: #fff;    
	}
</style>
