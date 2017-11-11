<template>
	<div class="purQuantityBox">
		<div class="purQuantity"> 
			                   
            <label class="purQuantity-row-field">购买数量</label>
            <span class="purQuantity-limit-note">
              	<span></span>      
            </span>
            <span class="purQuantity-stock-note"></span>
            <div class="purQuantity-row-value clearfix">
                <div class="purQuantity-input-number">
                	<span class="purQuantity-input-number-minus" @click="handleClickMinus">
                		<span class="purQuantity-input-number-horizontal"></span>
                	</span>
                	<input  type="text" :value=number class="purQuantity-input-number-input">
                	<span class="purQuantity-input-number-plus" @click="handleClickPlus">
                		<span class="purQuantity-input-number-horizontal plus">
                			<span class="purQuantity-input-number-vertical"></span>
                		</span>
                	</span>
                </div>
                <input type="number" class="mpw-input-number-input" name="adultCount" value="1" id="number" style="display: none;">        
            </div>
        </div>
	</div>
</template>

<script>
	import {mapState} from "vuex"
	export default{
		computed:mapState({
	      	number:(state) => (
	        	state.payMent.number
	      	)
	  	}),
		methods:{
			handleClickMinus:function(){
				this.$store.commit("minusNumber")
			},
			handleClickPlus:function(){
				this.$store.commit("plusNumber")
			}
		}
	}
</script>

<style scoped>
	.purQuantityBox{
		position: relative;
		margin: .2rem 0;
	}
	.purQuantity{
		overflow: hidden;
    	min-height: .5rem;
    	padding: .3rem .2rem .3rem .2rem;
    	background: #fff
	}
	.purQuantity-row-field{
		position: relative;
   		top: .12rem;
   		float: left;
	    width: 1.6rem;
	    color: #616161;
	    font-size: .3rem;
	    line-height: .5rem
	}
	.purQuantity-row-value{
		position: relative;
		margin-left: 1.7rem;
    	line-height: .5rem
	}
	.purQuantity-input-number{
		float:right;
		display: inline-block;
	    position: relative;
	    border: .02rem solid #c7ced4;
	}
	.purQuantity-input-number-minus{
		float: left;
		position: relative;
	    display: inline-block;
	    width: .56rem;
	    height: .56rem;
	    margin: .02rem;
	    border-right:0px;
	    background: #f0f0f0
	}
	.purQuantity-input-number-horizontal{
		position: absolute;
		top: .26rem;
	    left: .12rem;
	    width: .3rem;
	    height: .06rem;
	    background-color: #cad1d7;

	}
	.purQuantity-input-number-input{
		float:left;
		width: .6rem;
	    height: .6rem;
	    padding: 0 .06rem;
	    border: 0 none;
	    font: normal .28rem/.6rem arial;
	    text-align: center;
	    vertical-align: top;
	}
	.purQuantity-input-number-plus{
		float:left;	
		position: relative;
	    display: inline-block;
	    width: .56rem;
	    height: .56rem;
	    margin: .02rem;
	    background-color: #00afc7;
    	border-left:0px;
	}
	.plus{
		background-color: #fff
	}
	.purQuantity-input-number-vertical{
		position: absolute;
		top: -.1rem;
	    left: .12rem;
	    width: .06rem;
	    height: .28rem;
    	background-color: #fff
	}
</style>
