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
  },
});
</script>

<template>
  <!-- <div class="parent h-96">
    <div class="div1"></div>
    <div class="div2"></div>
    <div class="div3"></div>
    <div class="div4"></div>
    <div class="div5"></div>
    <div class="div6"></div>
  </div> -->

  <div class="grid grid-cols-5 grid-rows-3 gap-5">
    <template :key="i" v-for="(item, i) in news">
      <Card
        class="card"
        type
        v-bind="item"
        :contentClass="i === 4 ? 'px-5' : ''"
        :newsImgClass="i === 3 ? 'h-[100px]' : ''"
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
  background-image: url("https://picsum.photos/200");
  background-repeat: no-repeat;
  background-size: cover;
  animation: rotate 5s infinite alternate linear;
}
.parent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 20px;
}

.div1 {
  background-color: red;
  grid-area: 1 / 1 / 3 / 2;
}
.div2 {
  background-color: red;
  grid-area: 3 / 1 / 4 / 2;
}
.div3 {
  background-color: red;
  grid-area: 1 / 5 / 2 / 6;
}
.div4 {
  background-color: red;
  grid-area: 2 / 5 / 3 / 6;
}
.div5 {
  background-color: red;
  grid-area: 3 / 5 / 4 / 6;
}
.div6 {
  background-color: red;
  grid-area: 1 / 2 / 4 / 5;
}
</style>
