<template>
  <div class="flex pt-4">
    <div class="w-1/2 flex items-center">
      <span>
        <i class="cursor-pointer bx bx-menu-alt-left text-2xl pr-5"></i>
      </span>
      <ul class="flex w-1/2 justify-evenly items-center">
        <li
          v-for="(item, index) in nav"
          class="hover:text-red-200 cursor-pointer font-semibold text-xs"
          :key="index"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <!--  -->
    <div class="w-1/2 text-right flex items-center justify-end">
      <span class="px-6 hover:text-red-200 font-semibold text-xs cursor-pointer">Contact Us</span>
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" checked class="sr-only peer" />
        <div
          class="relative w-8 h-4 bg-[#F8E0CD] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[16px] rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-black"
        ></div>
      </label>
    </div>
  </div>
</template>
<script setup>
const nav = [
  {
    name: "Home",
  },
  {
    name: "Lates News",
  },
  {
    name: "Reviews",
  },
];
</script>
