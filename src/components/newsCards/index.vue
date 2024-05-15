  <script setup>
  import Card from "./components/card.vue";
  defineProps({
    news: {
      type: Array,
      required: true,
    },
    adsData: {
      type: Array,
      required: true,
    }
  });
  function cardData(i) {
    return i === 4 ? adsData : news[i];
  }
  </script>

<template>
  <div class="grid grid-cols-5 grid-rows-3 gap-5">
    <template :key="i" v-for="(item, i) in news">
      <Card
        class="card"
        v-bind="item"
        :contentClass="i === 4 ? 'px-5' : ''"
        :newsImgClass="i === 3 ? 'max-h-[150px]' : ''"
      />
    </template>
  </div>
</template>

<style scoped>
.card:nth-child(1) {
  @apply col-start-1 col-end-2 row-start-1 row-end-3 border-b-2 border-[#D0D0D0];
}
.card:nth-child(2) {
  @apply col-start-1 col-end-2 row-start-3 row-end-4;
}
.card:nth-child(3) {
  @apply col-start-2 col-end-5 row-start-1 row-end-4;
}
.card:nth-child(4) {
  @apply col-start-5 col-end-6 row-start-2 row-end-4 border-t-2 pt-5 border-[#D0D0D0];
}
.card:nth-child(5) {
  @apply col-start-5 col-end-6 row-start-1 row-end-2 text-white flex flex-col justify-evenly  bg-[#AF695C];
  background-image: url("https://picsum.photos/");
  background-repeat: no-repeat;
  background-size: cover;
  animation: rotate 5s infinite alternate linear;
}
</style>
