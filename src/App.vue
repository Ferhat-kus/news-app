<template>
  <navbar />
  <contentHeader  title="latest news" />
  <router-view></router-view>
</template>
<script setup>
import navbar from "./partitions/navbar.vue";
import contentHeader from './components/contentHeader/contentHeader.vue';
</script>
