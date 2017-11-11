<template>
	<div class="touristNumbers">
    	<div class="touristNumbers-group">
    		<div class="touristNumbers-row">
    			<label class="touristNumbers-row-field">游客1</label>
    			<div class="touristNumbers-row-value mpw-row-error">
    				<label class="touristNumbers-textinput-note"></label>
    				<input  class="touristNumbers-textinput" type="text"  placeholder="游客姓名" name="name" >
    			</div>
    			<span class="iconfont icon-shouye touristNumbers-border-left"></span>
    		</div>
    		<div class="touristNumbers-row">
    			<label class="touristNumbers-row-field" >手机号</label>
    			<div class="touristNumbers-row-value touristNumbers-country-code  mpw-row-error">
    				<div  class="touristNumbers-phone">
    					<span class="touristNumbers-field-menu pMobileCountryCodeLabel" >+86</span>
    					<input type="hidden" value="86">
    				</div>
    				<label class="touristNumbers-textinput-note"></label>
    				<input  class="touristNumbers-textinput" type="text" placeholder="请填写手机号" name="mobile">
    				<div class="touristNumbers-phone-cancel">x</div>
    			</div>
    		</div>
    		<div class="touristNumbers-row" >
    			<label class="touristNumbers-row-field">
    				<span class="touristNumbers-field-menu idcode">身份证</span>
    			</label>
    			<div class="touristNumbers-row-value mpw-row-error">
    				<label class="touristNumbers-textinput-note"></label>
    				<input value="" class="touristNumbers-textinput" type="text" placeholder="请填写正确的身份证号码" name="idNo">
    				<input type="hidden" name="idType" value="0">
    			</div>
    		</div>
    	</div>
    	<div class="touristNumbers-group" v-for="item in getTourists">
    		<div class="touristNumbers-row">
    			<label class="touristNumbers-row-field">游客{{item}}</label>
    			<div class="touristNumbers-row-value mpw-row-error">
    				<label class="touristNumbers-textinput-note"></label>
    				<input  class="touristNumbers-textinput" type="text"  placeholder="游客姓名" name="name" >
    			</div>
    			<span class="iconfont icon-shouye touristNumbers-border-left"></span>
    		</div>
    		<div class="touristNumbers-row" >
    			<label class="touristNumbers-row-field">
    				<span class="touristNumbers-field-menu idcode">身份证</span>
    			</label>
    			<div class="touristNumbers-row-value mpw-row-error">
    				<label class="touristNumbers-textinput-note"></label>
    				<input value="" class="touristNumbers-textinput" type="text" placeholder="请填写正确的身份证号码" name="idNo">
    				<input type="hidden" name="idType" value="0">
    			</div>
    		</div>
    	</div>
    </div>
</template>

<script>
	import {mapState,mapGetters} from "vuex"
	export default{
	  	computed:mapGetters({
			totalPrice:"totalPrice",
			getTourists:"getTourists"
		})
	  	
	}
</script>

<style scoped>
	.touristNumbers-group{
		margin-bottom:0.2rem
	}
	.touristNumbers-row{
		position: relative;
	    padding: .24rem;
	    background: #fff;
	}
	.touristNumbers-row::after{
		content: "";
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: .02rem;
	    background: #e0e0e0
	}
	.touristNumbers-row-field{
		float: left;
	    width: 1.6rem;
	    color: #616161;
	    font-size: .3rem;
	    line-height: .5rem;
	}
	.touristNumbers-row-value{
		position: relative;
		margin-left: 1.7rem;
    	line-height: .5rem;
	}
	.touristNumbers-country-code{
		position: relative;
		margin-left: 2.6rem;
		margin-right: 1.2rem;
    	line-height: .5rem;
	}
	.touristNumbers-textinput-note{

	}
	.touristNumbers-textinput{
		padding: .06rem 0;
	    border: 0;
	    font: normal .32rem/.38rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
	}
	.touristNumbers-border-left{
		position: absolute;
	    top: .26rem;
	    right: .2rem;
	    width: .4rem;
	    height: .5rem;
	    display: inline-block;
	    color: #1ba9ba;
	    font-size: .32rem;
	    line-height: .5rem;
	    text-align: center
	}
	.touristNumbers-field-menu{
		position: absolute;
		border: .02rem solid #ccc;
	    color: #888;
	    font-size: .28rem;
	    line-height: .5rem;
	    text-indent: .1rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.touristNumbers-field-menu{
		position: absolute;		
	    min-width: .4rem;
	    max-width: 1rem;
	    margin-right: .1rem;
	    padding: 0 .24rem 0 .06rem;
	    text-align: right;
	    text-indent: 0;
	    border: .02rem solid #ccc;
	    color: #888;
	    font-size: .28rem;
	    line-height: .5rem;
	}
	.pMobileCountryCodeLabel{
		right: 100%;
	}
	.touristNumbers-phone-cancel{
		position: absolute;
	    right: -.4rem;
	    top: .06rem;
	    width: .4rem;
	    height: .4rem;
	    line-height: .36rem;
	    border-radius: .2rem;
	    background: #ccc;
	    text-align: center;
	    font-size: .3rem;
	    color: #fff
	}

</style>
