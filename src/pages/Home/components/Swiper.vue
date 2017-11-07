<template>
  <div class="home-swiper">
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" >
      <!-- slides -->
      <swiper-slide v-for="item in swiperInfo" :key="item.id">
          <router-link :to="item.link">
            <div class="swiper-img-item">
               <img class="swpier-img" :src="item.img" />
            </div>
          </router-link>
      </swiper-slide>   
      <!-- Optional controls -->
      <div class="home-swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import {swiper,swiperSlide} from "vue-awesome-swiper"
  export default {
    props:['swiperInfo'],
    data() {
      return {
        notNextTick: true,
        swiperOption: {
          autoplay: 3000,
          direction: 'horizontal',
          autoHeight: true,
          pagination: ".home-swiper-pagination",
          bulletClass: "home-bullet",
          bulletActiveClass: "home-bullet-active",
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
  .home-swiper{
    position:relative;
    width:100%;
    height:0;
    padding-bottom:31.25%;
  }
  .swiper-img-item{
      width:100%;
      height:0;
      padding-bottom:31.25%;
  }
  .swpier-img{
    width:100%
  }
</style>

<style>
  .home-swiper-pagination{
      position: absolute;
      bottom: 6px;
      padding: 0 6px;
      width: 100%;
      text-align: center;
      z-index:2
  }
  .home-bullet{
      display: inline-block;
      margin: 0 4px;
      width: 6px;
      height: 6px;
      border-radius: 3px;
      background:rgba(255,255,255,.5);
  
  }
  .home-bullet-active{
    background:rgba(255,255,255,1);

  }
</style>