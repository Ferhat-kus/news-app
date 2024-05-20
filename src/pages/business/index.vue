<template>
  <swiper class="bg-red-100">
    <swiper-slide class="bg-red-900">Slide 1</swiper-slide>
    <swiper-slide class="bg-red-900">Slide 2</swiper-slide>
    <swiper-slide class="bg-red-900">Slide 3</swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

// Handler for Swiper initialization
const onSwiper = (swiper) => {
  console.log(swiper);
};

// Handler for slide change event
const onSlideChange = () => {
  console.log("slide change");
};
</script>
