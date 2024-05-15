<script setup>
import { ref, onUnmounted, defineProps } from "vue";

const props = defineProps({
  adsData: {
    type: Array,
    required: true,
  },
});

const currentSliderIndex = ref(0);
let intervalId;

const startSlider = () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    currentSliderIndex.value =
      (currentSliderIndex.value + 1) % props.adsData.length;
  }, 1000);
};

startSlider();

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
<template>
  <div>
    <div
      class="slider mb-5 bg-slate-300 w-full h-20 flex items-center justify-center relative"
    >
      <div class="relative w-full flex items-center justify-center h-full">
        <template v-for="(item, index) in adsData" :key="index">
          <div v-if="index === currentSliderIndex" class="flex flex-col z-10 items-center justify-center">
            <h1 class="font-semibold text-white uppercase">{{ item.title }}</h1>
            <p class="text-xs font-semibold text-white underline">{{ item.detail }}</p>
          </div>
          <transition name="fade">
            <img
              :src="item.src"
              :alt="item.alt"
              class="absolute z-0 inset-0 w-full h-full object-cover"
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
