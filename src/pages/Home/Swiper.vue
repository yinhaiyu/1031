<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
        <div class="swiper-img-item">
           <img class="swpier-img" src="http://img1.qunarzz.com/piao/fusion/1609/f3/52a119dbed871902.jpg_640x200_b4573df8.jpg" />
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="swiper-img-item">
            <img class="swpier-img" src="http://img1.qunarzz.com/piao/fusion/1711/b3/66f7230d9ad6e002.jpg_640x200_077e61ee.jpg" />
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="swiper-img-item">
            <img class="swpier-img" src="http://img1.qunarzz.com/piao/fusion/1711/c5/2b4166f592b33202.jpg_640x200_27b41388.jpg" />
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="swiper-img-item">
           <img class="swpier-img" src="http://img1.qunarzz.com/piao/fusion/1609/15/630b82d932a3c402.jpg_640x200_862e836b.jpg" />
        </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  import {swiper,swiperSlide} from "vue-awesome-swiper"
  // swiper options example:
  export default {
    name: 'carrousel',
    data() {
      return {
        notNextTick: true,
        swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          autoplay: 3000,
          direction: 'horizontal',
          autoHeight: true,
          pagination: '.swiper-pagination',
          observeParents: true
        }
      }
    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>
<style scoped>
  .swiper-img-item{
      width:100%;
      height:0;
      padding-bottom:31.25%;
  }
  .swpier-img{
    width:100%
  }
</style>