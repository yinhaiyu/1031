<template>
	<div>
	<div class="classitySwiper-continer">
	    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
	    <!-- slides -->
	      	<swiper-slide>
	       		<div class="classitySwiper-item">
	          		<div class="classitySwiper-category-item" v-for="item in items" v-if="item.id <= 8">
	          			<router-link to="/swiperList">
	          			<a href="" title="全部">
	          				<div class="classitySwiper-category-img-container">
	          					<img :src="item.img" alt="全部" >
	          				</div>
	          				<div class="classitySwiper-category-keywords">{{item.keyword}}</div>
	          			</a>
	          			</router-link>
	          		</div>
	        	</div>
	    	</swiper-slide>
		    <swiper-slide>
		        <div class="classitySwiper-item">
		            <div class="classitySwiper-category-item" v-for="item in items" v-if="item.id > 8">
		          		<a href="" title="全部">
		          			<div class="classitySwiper-category-img-container">
		          				<img :src="item.img" alt="全部" >
		          			</div>
		          			<div class="classitySwiper-category-keywords">{{item.keyword}}</div>
		          		</a>
		          	</div>
		        </div>
		    </swiper-slide>
	    <!-- Optional controls -->
	    	<div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
  	</div>
  	</div>
</template>

<script>
  import {swiper,swiperSlide} from "vue-awesome-swiper"

  export default {
    name: 'carrousel',
    data() {
      return {
        notNextTick: true,
        swiperOption: {
          direction: 'horizontal',
          autoHeight: true,
          pagination: '.swiper-pagination',
          observeParents: true
        },
        items:[{
			id:1,
			img:"http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
			keyword:"全部"
		},{
			id:2,
			img:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
			keyword:"景点门票"
		},{
			id:3,
			img:"http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
			keyword:"一日游"
		},{
			id:4,
			img:"http://img1.qunarzz.com/piao/fusion/1611/1c/a8a8d9023a814c02.png",
			keyword:"名胜古迹"
		},{
			id:5,
			img:"https://img1.qunarzz.com/piao/fusion/1611/d1/1e49d9e4d7fca102.png",
			keyword:"厦门观音山"
		},{
			id:6,
			img:"http://img1.qunarzz.com/piao/fusion/1611/12/a16a3980aec17602.png",
			keyword:"展馆"
		},{
			id:7,
			img:"http://img1.qunarzz.com/piao/fusion/1611/cd/07f33cc087f18d02.png",
			keyword:"自然风光"
		},{
			id:8,
			img:"http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
			keyword:"泡温泉"
		},{
			id:9,
			img:"http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
			keyword:"景点门票"
		},{
			id:10,
			img:"http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
			keyword:"一日游"
		},{
			id:11,
			img:"http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
			keyword:"厦门观音山"
		}]
      }
    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>
<style scoped>
.classitySwiper-continer{
	padding-top:0.1rem
}
 .classitySwiper-item{
 	width:100%;
 	height:3.7rem
 }
 .classitySwiper-category-item{
 	float: left;
    width: 25%;
    height: 1.3rem;
    padding-top: .3rem;
    text-align: center;
 }
 .classitySwiper-category-img-container{
 	display: inline-block;

    border-radius: 20px;
    width: .66rem;
    height: .66re
 }
 .classitySwiper-category-img-container	img{
 	width: .66rem;
    height: .66rem
 }
 .classitySwiper-category-keywords{
 	margin-top: .2rem;
    color: #000;
    font-size: .28rem
 }
</style>