<script setup>
import { ref, defineProps, onMounted, onUnmounted } from "vue";
import axiosInstance from "../../../plugins/axiosInstance";

const props = defineProps({
  panorama: {
    type: Boolean,
    default: false,
  },
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
  type: {
    type: Boolean,
    default: false,
  },
});

const adsData = ref([]);
const currentSliderIndex = ref(0);
let intervalId;

async function getAds() {
  try {
    const response = await axiosInstance.get("/ads");
    adsData.value = response.data;
    startSlider();
  } catch (error) {
    console.log(error);
  }
}

const startSlider = () => {
  clearInterval(intervalId);
  if (adsData.value.length > 0) {
    intervalId = setInterval(() => {
      currentSliderIndex.value =
        (currentSliderIndex.value + 1) % adsData.value.length;
    }, 1000);
  }
};

onMounted(() => {
  if (props.panorama) {
    getAds();
  }
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div
    v-if="type"
    :style="
      panorama && adsData.length
        ? { backgroundImage: `url(${adsData[currentSliderIndex].src})` }
        : {}
    "
  >
    <div>
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
          <span class="w-9/12 pl-5 uppercase whitespace-nowrap text-xs">
            today's advertisement
          </span>
          <span class="bg-white w-3/12 h-[1px]"></span>
        </div>
      </div>
      <!-- Title -->
      <div :class="contentClass">
        <div class="py-2">
          <span
            :class="panorama ? 'bg-black py-1 px-2' : ''"
            class="text-xs text-newsTypeText capitalize"
            >{{ newsType }}</span
          >
          <h1
            :class="[
              panorama ? 'bg-black text-white px-2' : '',
              contentClass
                ? 'text-3xl font-normal text-white'
                : panorama
                ? 'text-white'
                : 'text-titleAndArticles',
            ]"
            class="text-2xl whitespace-nowrap font-semibold capitalize"
          >
            {{ title }}
          </h1>
        </div>
      </div>
      <!-- Description -->
      <div :class="contentClass">
        <div>
          <p
            class="text-sm"
            :class="[
              contentClass
                ? 'text-white'
                : panorama
                ? 'text-white'
                : 'text-titleAndArticles',
              panorama ? 'bg-black text-white  px-2' : '',
            ]"
          >
            {{ description }}
            <span v-show="ago" class="text-newsTypeText">- {{ ago }} ago</span>
          </p>
        </div>
      </div>
      <!-- Creator -->
      <div v-show="creatorShow" class="flex items-center py-5">
        <div class="pr-4">
          <img class="w-14 h-14 rounded-full" :src="creatorImg" alt="" />
        </div>
        <div class="flex flex-col">
          <span class="font-semibold text-titleAndArticles">{{
            creatorName
          }}</span>
          <span class="text-xs text-newsTypeText">{{ creatorNickname }}</span>
        </div>
      </div>
    </div>
  </div>
  <swiper v-else>
    <swiper-slide>
      <div>
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
            <span class="w-9/12 pl-5 uppercase whitespace-nowrap text-xs">
              today's advertisement
            </span>
            <span class="bg-white w-3/12 h-[1px]"></span>
          </div>
        </div>
        <!-- Title -->
        <div :class="contentClass">
          <div class="py-2">
            <span
              :class="panorama ? 'bg-black py-1 px-2' : ''"
              class="text-xs text-newsTypeText capitalize"
              >{{ newsType }}</span
            >
            <h1
              :class="[
                panorama ? 'bg-black text-white px-2' : '',
                contentClass
                  ? 'text-3xl font-normal text-white'
                  : panorama
                  ? 'text-white'
                  : 'text-titleAndArticles',
              ]"
              class="text-2xl whitespace-nowrap font-semibold capitalize"
            >
              {{ title }}
            </h1>
          </div>
        </div>
        <!-- Description -->
        <div :class="contentClass">
          <div>
            <p
              class="text-sm"
              :class="[
                contentClass
                  ? 'text-white'
                  : panorama
                  ? 'text-white'
                  : 'text-titleAndArticles',
                panorama ? 'bg-black text-white  px-2' : '',
              ]"
            >
              {{ description }}
              <span v-show="ago" class="text-newsTypeText"
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
            <span class="font-semibold text-titleAndArticles">{{
              creatorName
            }}</span>
            <span class="text-xs text-newsTypeText">{{ creatorNickname }}</span>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
