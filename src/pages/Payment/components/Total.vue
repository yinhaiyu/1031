<template>
	<div>
		<div class="total-control-outer  clearfix">
	        <div class="total-booking-intro" @click="handleChangeView">
	            <em class="total-booking-light">产品价格</em>
				<strong class="total-price mp-booking-light">¥
					<em class="total-price-num">{{totalPrice}}</em>     
	            </strong>
	            <span class="total-booking-marketing mpg-price" style="display: none;"></span>
	            <span class=""></span>
	        </div>
	        <a  class="total-booking-btn">提交订单</a>
	        <div class="total-booking-detail-outer" v-show=flag>
	            <div class="total-booking-detail">
	                <div class="total-info-main">
	                    <h2 class="total-info-title">[北京出发]天安门＋故宫【赠送珍宝馆】＋八达岭长城＋鸟巢·水立方一日游</h2>
	                    <div class="total-info-price">
	                        <span class="total-booking-price">¥
	                        	<em class="total-booking-price-num">208</em>
	                        </span>X
	                        <span class="t-number">{{number}}</span>
	                    </div>
	                </div>
	                <input type="hidden" name="opType" value="saveOrder">
	                <input type="hidden" value="416">
				</div>
	        </div>
	        
	    </div>
	    <div class="Payment-mask" v-show=flag></div>
    </div>
</template>

<script>
	import {mapState,mapGetters} from "vuex"
	export default{
		data(){
			return {
				flag:false
			}
		},
		computed:{
			...mapState({
		      	number:(state) => (
		        	state.payMent.number
		      	)
	  		}),
	  		...mapGetters({
				getTourists:"getTourists",
				totalPrice:"totalPrice"
			})
	  	},
		methods:{
			handleChangeView:function(){
				if(this.flag){
					this.flag=false
				}else{
					this.flag=true
				}
			}
		}
	}
</script>

<style scoped>
	.total-control-outer{
		position: fixed;
	    z-index: 100;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 1rem;
	    background: #fff;
	    border-top: .02rem solid  #c9cccd; 
	}
	.total-booking-intro{
		position: relative;
	    float: left;
	    font-size: .24rem;
	    line-height: 1rem;
	    text-indent: .2rem;
	    width: 50%;
	}
	.total-booking-btn{
		float: right;
		width: 50%;
	    border: 0 none;
	    background: #ff9800;
	    color: #fff;
	    font: normal .36rem/1rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
	    text-align: center;
	}
	.total-booking-light{
		color: #ff8300;
	}
	.total-price{
		color: #ff8300;
	}
	.total-price-num{
		font-size: .48rem;
	}
	.total-booking-detail-outer{
		position: absolute;
	    right: 0;
	    bottom: 1rem;
	    left: 0;
	    width: 100%;
	    background: #fff;
	}
	.total-booking-detail{
		padding: .15rem .2rem;
	}
	.total-info-title{
		color: #212121;
	    font-size: .32rem;
	    line-height: .44rem;
	    margin-bottom: .04rem;
	}
	.total-info-price{
		height: .44rem;
	    line-height: .44rem;
	    color: #9e9e9e;
	    font-size: .24rem;
	}
		.Payment-mask{
		position: fixed;
		top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;	    
	    z-index: 91;
	    background: rgba(0,0,0,.5);
	}
</style>
