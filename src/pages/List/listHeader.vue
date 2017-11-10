<template>
	<div>
		<div class="mp-header">
			<router-link to="/">
				<span class="mp-header-left iconfont icon-back"></span>	
			</router-link>
			<h1 class="mp-header-title">
				<input data-search="keyword" type="text" name="keyword" id="search-input-bind" autocomplete="off" placeholder="输入城市或景点" class="mp-search-input">
				<a data-search="delete" class="mp-search-delete" id="search-form-delete" v-on:click="handleClickClear"></a>
				<input type="hidden" name="from" value="ts_search">
			</h1>
			<span class="mp-header-right">
				<a data-search="submit" class="mp-search-submit" rel="nofollow" id="search-form-submit">搜索</a>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			
		},
		methods: {
			handleClickClear: function() {
				document.getElementById("search-input-bind").value = "";
			}
		}
	}
</script>

<style>
	.mp-header {
	    position: relative;
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    text-align: center;
	    color: #fff;
	}
	.mp-header-left {
	    display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;
	}
	.mp-iconfont {
	    font-family: 'mpiconfont';
	    speak: none;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    line-height: 1;
	    -webkit-font-smoothing: antialiased;
	}
	.mp-header-title {
	    box-sizing: border-box;
	    -webkit-box-flex: 1;
	    position: relative;
	    height: .6rem;
	    margin: .14rem 0;
	    background: #fff;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
	.mp-search-input {
	    position: relative;
	    display: block;
	    width: 100%;
	    height: .4rem;
	    line-height: .4rem;
	    padding: .1rem 0;
	    border: 0;
	    font-family: "Microsoft Yahei",Arial;
	    font-size: .28rem;
	    border-radius: .06rem;
	}
	.mp-search-delete {
	    position: absolute;
	    top: .04rem;
	    right: 0;
	    width: .58rem;
	    height: .58rem;
	    background: url(http://simg1.qunarzz.com/piao/images/touch/v2/sprites.png) -.48rem .1rem no-repeat;
	    background-size: 3rem 3rem;
	}
	.mp-header-right {
	    display: inline-block;
	    height: .88rem;
	    line-height: .88rem;
	    padding: 0 .1rem;
	}
	.mp-search-submit {
	    display: inline-block;
	    width: .74rem;
	    margin-right: .04rem;
	    color: #fff;
	    font-size: .28rem;
	}
</style>