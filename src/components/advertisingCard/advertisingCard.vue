<script setup>
import { ref, onUnmounted } from "vue";

const images = [
  {
    src: "https://petapixel.com/assets/uploads/2022/12/what-is-unsplash-800x420.jpg",
    alt: "Image 1",
  },
  {
    src: "https://petapixel.com/assets/uploads/2022/12/image13-1-800x536.jpg",
    alt: "Image 2",
  },
  {
    src: "https://petapixel.com/assets/uploads/2022/12/image11-1-800x534.jpg",
    alt: "Image 3",
  },
];

const currentSliderIndex = ref(0);
let intervalId;

// const isTimerPaused = ref(false);

const startSlider = () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    currentSliderIndex.value = (currentSliderIndex.value + 1) % images.length;
  }, 500);
};

// const nextSlide = () => {
//   currentSliderIndex.value = (currentSliderIndex.value + 1) % images.length;
//   if (!isTimerPaused.value) startSlider();
// };

// const prevSlide = () => {
//   currentSliderIndex.value =
//     (currentSliderIndex.value - 1 + images.length) % images.length;
//   if (!isTimerPaused.value) startSlider();
// };

// const playSlider = () => {
//   isTimerPaused.value = false;
//   startSlider();
// };

// const stopSlider = () => {
//   clearInterval(intervalId);
//   isTimerPaused.value = true;
// };

startSlider();

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div>
    <div
      class="slider my-2 bg-slate-500 w-full h-20 flex items-center justify-center relative"
    >
      <div class="relative w-full h-full">
        <template v-for="(image, index) in images" :key="index">
          <transition name="fade">
            <img
              :src="image.src"
              :alt="image.alt"
              class="absolute inset-0 w-full h-full object-cover"
              v-if="index === currentSliderIndex"
            />
          </transition>
        </template>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(0);
}
</style>
