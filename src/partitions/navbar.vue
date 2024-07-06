<script setup>
import { ref, onMounted } from "vue";
import axiosInstance from "../plugins/axiosInstance";
import { useDark, useToggle } from "@vueuse/core";

const nav = [{ name: "Home" }, { name: "Lates News" }, { name: "Reviews" }];
const activeLanguage = ref("en");
const language = ref(false);
const searchStatus = ref(false);
const languages = ref([]);
const isDark = useDark();

onMounted(() => {
  select();
});

async function search() {
  searchStatus.value = !searchStatus.value;
}
async function select() {
  const response = await axiosInstance.get("/languages");
  languages.value = response.data;
}
async function selectDropdown() {
  language.value = !language.value;
}

const toggleDark = () => useToggle(!isDark);
</script>
<template>
  <div class="flex pt-4">
    <div class="w-4/5 flex items-center">
      <div class="flex items-center justify-between whitespace-nowrap w-2/5">
        <span>
          <i
            class="cursor-pointer hover:text-red-200 text-titleAndArticles bx bx-menu-alt-left text-2xl pr-5"
          ></i>
        </span>
        <ul class="flex w-10/12 justify-evenly items-center">
          <li
            v-for="(item, index) in nav"
            class="hover:text-red-200 text-titleAndArticles cursor-pointer font-semibold text-xs"
            :key="index"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- Search -->
      <div
        @click="search"
        :class="searchStatus ? 'w-3/5' : 'w-auto'"
        class="border border-titleAndArticles rounded-full flex items-center justify-between px-2"
      >
        <span
          :class="searchStatus ? 'w-full' : 'w-auto'"
          class="flex items-center justify-center"
        >
          <input
            type="text"
            placeholder="Search"
            :maxlength="90"
            class="bg-transparent text-titleAndArticles placeholder:text-[#A0A7B2] w-full rounded-md outline-none text-xs font-semibold"
          />
        </span>
        <span class="flex items-center justify-center px-2">
          <i
            class="cursor-pointer text-titleAndArticles bx bx-search text-xl"
          ></i>
        </span>
      </div>
    </div>
    <!--  -->
    <div class="w-1/5 text-right flex items-center justify-end">
      <!-- Contact Us -->
      <span class="px-6">
        <span
          class="hover:text-red-200 text-titleAndArticles font-semibold text-xs cursor-pointer"
          >Contact Us</span
        >
      </span>
      <!-- Toggle -->
      <label class="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          v-model="isDark"
          @change="toggleDark"
          checked
          class="sr-only peer"
        />
        <div
          class="relative w-8 h-4 bg-gradientVia peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[16px] rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-black"
        ></div>
      </label>
      <!-- language -->
      <div>
        <span
          @click="selectDropdown"
          class="px-6 hover:text-red-200 text-titleAndArticles font-semibold text-xs uppercase cursor-pointer underline"
          >{{ activeLanguage }}</span
        >
        <div
          class="bg-gradientVia text-titleAndArticles uppercase absolute w-11 p-2 text-xs font-semibold flex flex-col items-start justify-evenly rounded-lg"
          v-show="language"
        >
          <span v-for="(item, i) in languages" :key="i">
            <span
              class="cursor-pointer hover:text-gray-300 underline"
              @click="(activeLanguage = item.language), (language = false)"
            >
              {{ item.language }}</span
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
