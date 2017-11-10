<template>
    <div class="list-header">
        <router-link to="/">
        <a class="mp-header-left iconfont icon-back"></a>
        </router-link>
        <h1 class="mp-header-title">
            <input type="text"  id="search-input-bind"  placeholder="输入城市或景点" class="mp-search-input">
        </h1>
        <span class="mp-header-right">
            <a class="mp-search-submit" rel="nofollow" id="search-form-submit">搜索</a>
        </span>
    </div>
</template>

<script>
	export default {
		
	}
</script>

<style>
    .list-header{
        position: relative;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: box;
        width: 100%;
        height: .88rem;
        background: #00bcd4;
        text-align: center;
        color: #fff;
        z-index: 98;
    }
    .mp-header-left{
        display: inline-block;
        width: .4rem;
        line-height: .88rem;
        padding: 0 .2rem;
        color: #fff;
        font-size: .36rem;
        text-align: left;
    }
    .mp-header-title {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        box-flex: 1;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -ms-flex: 1;
        position: relative;
        height: .6rem;
        margin: .14rem 0;
        background: #fff;
        line-height: .6rem;
        border-radius: .06rem;
        padding: 0 .6rem 0 .2rem;
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