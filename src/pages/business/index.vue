

<template>
  <div class="flex flex-col items-center">
    <div class="slider bg-slate-500 w-full h-16 flex items-center justify-center relative">
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

<style>
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
