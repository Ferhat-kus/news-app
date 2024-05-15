<template>
  <div class="">
    <!-- Img -->
    <div v-show="newsImgShow">
      <img
        class="w-full max-h-[445px]"
        :class="newsImgClass"
        :src="newsImg"
        alt=""
      />
    </div>
    <div v-show="contentClass">
      <div class="w-full flex items-center justify-between">
        <span class="w-1/2 pl-5 uppercase whitespace-nowrap text-xs">number of the day</span>
        <span class="bg-white w-4/12 h-[1px]"></span>
      </div>
    </div>
    <!-- Title -->
    <div :class="contentClass">
      <div class="py-2">
        <p class="text-xs text-slate-400 capitalize">{{ newsType }}</p>
        <h1
        :class="contentClass ? 'text-3xl font-normal' : ''"
         class="text-2xl whitespace-nowrap font-semibold capitalize">
          {{ title }}
        </h1>
      </div>
    </div>

    <!-- Description -->
    <div :class="contentClass">
      <div>
        <p class="text-sm">
          {{ description }}
          <span v-show="ago ? true : false" class="text-slate-500"
            >- {{ ago }} ago</span
          >
        </p>
      </div>
    </div>
    <!-- Creator -->
    <div v-show="creatorShow" class="flex items-center py-5">
      <div class="pr-4">
        <img class="w-14 h-14 rounded-full" :src="creatorImg" alt="" />
      </div>
      <div class="flex flex-col">
        <span class="font-semibold">{{ creatorName }}</span>
        <span class="text-xs text-slate-400">{{ creatorNickname }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  newsImg: {
    type: String,
    default: "https://picsum.photos/200",
  },
  newsImgShow: {
    type: Boolean,
    default: true,
  },
  newsImgClass: {
    type: String,
    default: "w-full max-h-96",
  },
  contentClass: {
    type: String,
    default: "w-full",
  },
  newsType: {
    type: String,
    default: "News Type",
  },
  title: {
    type: String,
    default: "Title",
  },
  description: {
    type: String,
    default: "Description",
  },
  ago: {
    type: String,
    default: "",
  },
  creatorImg: {
    type: String,
    default: "https://picsum.photos/200",
  },
  creatorName: {
    type: String,
    default: "Name",
  },
  creatorNickname: {
    type: String,
    default: "Nickname",
  },
  creatorShow: {
    type: Boolean,
    default: true,
  },
});
</script>
