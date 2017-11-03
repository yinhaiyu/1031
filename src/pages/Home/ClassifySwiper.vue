<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
        <div class="classitySwiper-item">
          	<div class="classitySwiper-category-item" v-for="item in items" v-if="item.id <= 8">
          		<a href="" title="全部">
          			<div class="classitySwiper-category-img-container">
          				<img :src="item.img" alt="全部" >
          			</div>
          			<div class="classitySwiper-category-keywords">{{item.keyword}}</div>
          		</a>
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
</template>

<script>
  import {swiper,swiperSlide} from "vue-awesome-swiper"

  export default {
    name: 'carrousel',
    data() {
      return {
        notNextTick: true,
        swiperOption: {
          autoplay: 3000,
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
			img:"http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
			keyword:"景点门票"
		},{
			id:3,
			img:"http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
			keyword:"一日游"
		},{
			id:4,
			img:"http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
			keyword:"厦门观音山"
		},{
			id:5,
			img:"http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
			keyword:"全部"
		},{
			id:6,
			img:"http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
			keyword:"景点门票"
		},{
			id:7,
			img:"http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
			keyword:"一日游"
		},{
			id:8,
			img:"http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
			keyword:"厦门观音山"
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
    background: #f0f5f8;
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