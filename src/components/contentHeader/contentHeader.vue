<template>
  <div class="flex flex-col py-5">
    <span class="py-5">
      <h1 class="capitalize text-titleAndArticles font-semibold text-5xl">{{ title }}</h1>
    </span>
    <div class="w-full py-7">
      <ul class="flex">
        <li
          v-for="(item, index) in router"
          :key="index"
          @click="navigate(item.path)"
          :class="
            $route.path === item.path
              ? 'border-copper text-copper hover:text-titleAndArticles hover:border-titleAndArticles'
              : 'border-titleAndArticles text-titleAndArticles hover:text-copper hover:border-copper'
          "
          class="capitalize text-sm cursor-pointer font-medium flex px-4 mx-2 border rounded-full"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = [
  { name: "Politics", path: "/" },
  { name: "Business", path: "/business" },
  { name: "Tech", path: "/tech" },
  { name: "Arts", path: "/arts" },
  { name: "Science", path: "/science" },
  { name: "Health", path: "/health" },
  { name: "Sports", path: "/sports" },
];

const { push } = useRouter();

function navigate(path) {
  push(path);
}

defineProps({
  title: String,
});
</script>
