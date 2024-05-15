<script setup>
import { ref, onMounted } from "vue";
// COMPONENTS
import newsCards from "../../components/newsCards/index.vue";
import advertisingCard from "../../components/advertisingCard/advertisingCard.vue";
import axiosInstance from "../../plugins/axiosInstance.js";
// SCRIPT
const newsData = ref([]);
const adsData = ref([]);
onMounted(() => {
  allNews();
  ads();
});
async function allNews() {
  const response = await axiosInstance.get("/politics");
  newsData.value = response.data;
}
async function ads() {
  const response = await axiosInstance.get("/ads");
  adsData.value = response.data;
}
</script>

<template>
  <div>
    <advertisingCard :adsData="adsData" />
    <newsCards :news="newsData" />
  </div>
</template>
