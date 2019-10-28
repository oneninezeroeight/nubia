<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
       <img src="../../../public/image/157208419144.jpg" /> 
    </swiper-slide>
    <swiper-slide>
       <img src="../../../public/image/156811135038.jpg" /> 
    </swiper-slide>
    <swiper-slide>
       <img src="../../../public/image/157020326452.jpg" alt /> 
    </swiper-slide>
    <swiper-slide>  
        <img src="../../../public/image/156747885341.jpg" alt />
    </swiper-slide>
    <swiper-slide>  
        <img src="../../../public/image/156678122682.jpg" alt />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>




<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination1",
        centeredSlides: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动播放
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          stopOnLastSlide:true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        //循环
        loop: true
      }
    };
  },
  computed: {

  },
  mounted() {
  
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
.swiper-wrapper img{
    width: 375px;
}
</style>