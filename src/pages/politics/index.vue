<script setup>
import { ref, onMounted } from "vue";
import newsCards from "../../components/newsCardsdex.vue";
import advertisingCard from '../../components/advertisingCard/advertisingCard.vue';
import axiosInstance from "../../plugins/axiosInstance.js";
const newsData = ref([]);
onMounted(() => {
  allNews();
});
async function allNews() {
  const response = await axiosInstance.get("/politics");
  newsData.value = response.data;
}
</script>

<template>
  <div>
    <advertisingCard />
    <newsCards :news="newsData" />
  </div>
</template>
