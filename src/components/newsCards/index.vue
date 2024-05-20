<script setup>
import Card from "./components/card.vue";
defineProps({
  news: {
    type: Array,
    required: true,
  },
  adsData: {
    type: Array,
  },
});
</script>

<template>
  <div class="grid grid-cols-5 grid-rows-3 gap-5">
    <template v-for="(item, i) in news" :key="i">
      <Card
        class="card"
        v-bind="item"
        :contentClass="i === 3 ? 'px-5' : ''"
        :newsImgClass="i === 4 ? 'h-[100px]' : ''"
        :panorama="i === 5 ? true : false"
      />
    </template>
  </div>
</template>

<style scoped>
.card:nth-child(1) {
  @apply col-span-1 row-span-2 border-b-2 border-[#D0D0D0];
}
.card:nth-child(2) {
  @apply col-span-1 row-span-1 row-start-3;
}
.card:nth-child(3) {
  @apply col-span-3 row-span-3 col-start-2;
}
.card:nth-child(4) {
  @apply col-span-1 row-span-1 row-start-1 col-start-5 text-white flex flex-col justify-center bg-[#AF695C];
}
.card:nth-child(5) {
  @apply col-span-1 row-span-1 row-start-2 col-start-5 border-t-2 pt-5 border-[#D0D0D0];
}
.card:nth-child(6) {
  @apply col-span-1 bg-cover bg-no-repeat row-span-1 row-start-3 col-start-5 p-5 text-white flex flex-col items-start justify-center;
}
</style>
