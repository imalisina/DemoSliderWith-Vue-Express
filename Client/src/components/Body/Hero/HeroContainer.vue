<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="modules"
  >
    <swiper-slide v-for="heroItem in heroData" :key="heroItem.id">
      <HeroSingle :singleData="heroItem" />
    </swiper-slide>
  </swiper>
</template>
<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from "swiper";

import axios from 'axios';

import HeroSingle from "./HeroSingle.vue";

export default {
  components: {
    HeroSingle
  },
  data(){
    return {
      heroData: [],
    }
  },
  mounted(){
    axios.get('http://localhost:8000/api/games/heroes').then((res) => {
      this.$data.heroData = res.data;
    })
  },
  components: {
    Swiper,
    SwiperSlide,
    HeroSingle
},
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>
