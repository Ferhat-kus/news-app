<template>
  <navbar />
  <contentHeader title="latest news" />
  <router-view></router-view>
</template>
<script setup>
import navbar from "./partitions/navbar.vue";
import contentHeader from "./components/contentHeader/contentHeader.vue";
import { useDark, useToggle } from "@vueuse/core";
import { onMounted } from "vue";

const isDark = useDark();
onMounted(() => {
  useToggle(isDark);
});
</script>
