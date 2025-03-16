<template>
  <BlockLayout class="mx-4">
    <h4 class="text-sm text-accent-hover font-ultra-bold uppercase my-4">
      Foto in video galerija
    </h4>
    <div>
      <swiper
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }"
        :spaceBetween="10"
        :navigation="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="[FreeMode, Navigation, Thumbs]"
        class="mySwiper2 aspect-square"
        @slide-change="onMainSlideChange"
      >
        <swiper-slide
          v-for="image in [
            'https://s3-alpha-sig.figma.com/img/c4b5/c52f/94a2a52b0bf63e262637118cfd3fb3f5?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dm1L8alIimGzPzb1Vbf9TtxZhRxFASK5TD2b1Ycna-dX-X8kk1HKk-uQmJZV7XtVFa8j09StNmBCMMdtcDg5rmsFt788~0rwyZXg1g6LkF25qgiMcmFIqYhZbd3QI0N0seirYkSwnGVugSaGxl9es5odIZV9zl6XncSXyxze1QS7IglmKAN3V23aWl65u6YdHs-eFVvvMD2lqBM7Vf-GHrQH9vBeJFukX-xK6VvYcxfIBDOmPrzqS1yl9YR4w8HSydMlNogJioubBrXfivqGdYlCog2JG1qp4hF89aMYc-tshhRJTWTwgJnF2vTB6jGSVkenCH8looww8vjmieNVIg__',
            'https://s3-alpha-sig.figma.com/img/ff20/602d/690fe970536a083137647f31de6f9621?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FZSRxGUSV6WmWTqCK24MO8brNELKdE~r7i507BkSvodMomzR9Hs9Hc4hx8EaW6CKbrocL6ZR~sUAcuZM0u7-mhVcYg7CPMc99tkRwjjD~kRQahHPhZwnnTw8OypCCPABKE2PlMfVaDkylfVuLdJU1cfKCxrF4Fygm2EQKPjvf2eZsgpICP2IaY9LxW~7zGWs2fEQJ-fygJf-dYSj4jGQLggzzfaUWu6EKeSaWq79VNs~EDeIfM2zCBBJ3JMnJDULoIELPq2Hlbccqy2WlWfTp7c7DpvTHTahO6ueh6ryXUd~jXcZYQb5q6psLr9F86c8vmoDUfkX7XAlLUL6Higa1w__',
            'https://s3-alpha-sig.figma.com/img/c4b5/c52f/94a2a52b0bf63e262637118cfd3fb3f5?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dm1L8alIimGzPzb1Vbf9TtxZhRxFASK5TD2b1Ycna-dX-X8kk1HKk-uQmJZV7XtVFa8j09StNmBCMMdtcDg5rmsFt788~0rwyZXg1g6LkF25qgiMcmFIqYhZbd3QI0N0seirYkSwnGVugSaGxl9es5odIZV9zl6XncSXyxze1QS7IglmKAN3V23aWl65u6YdHs-eFVvvMD2lqBM7Vf-GHrQH9vBeJFukX-xK6VvYcxfIBDOmPrzqS1yl9YR4w8HSydMlNogJioubBrXfivqGdYlCog2JG1qp4hF89aMYc-tshhRJTWTwgJnF2vTB6jGSVkenCH8looww8vjmieNVIg__',
          ]"
          class="bg-accent-placeholder !flex items-center"
        >
          <img :src="image" class="w-full h-auto aspect-video object-cover" />
        </swiper-slide>
      </swiper>
      <swiper
        @swiper="setThumbsSwiper"
        :spaceBetween="10"
        slides-per-view="auto"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="[FreeMode, Navigation, Thumbs]"
        class="mySwiper !-mr-4 !pr-4"
      >
        <swiper-slide
          v-for="(image, index) in [
            'https://s3-alpha-sig.figma.com/img/c4b5/c52f/94a2a52b0bf63e262637118cfd3fb3f5?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dm1L8alIimGzPzb1Vbf9TtxZhRxFASK5TD2b1Ycna-dX-X8kk1HKk-uQmJZV7XtVFa8j09StNmBCMMdtcDg5rmsFt788~0rwyZXg1g6LkF25qgiMcmFIqYhZbd3QI0N0seirYkSwnGVugSaGxl9es5odIZV9zl6XncSXyxze1QS7IglmKAN3V23aWl65u6YdHs-eFVvvMD2lqBM7Vf-GHrQH9vBeJFukX-xK6VvYcxfIBDOmPrzqS1yl9YR4w8HSydMlNogJioubBrXfivqGdYlCog2JG1qp4hF89aMYc-tshhRJTWTwgJnF2vTB6jGSVkenCH8looww8vjmieNVIg__',
            'https://s3-alpha-sig.figma.com/img/ff20/602d/690fe970536a083137647f31de6f9621?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FZSRxGUSV6WmWTqCK24MO8brNELKdE~r7i507BkSvodMomzR9Hs9Hc4hx8EaW6CKbrocL6ZR~sUAcuZM0u7-mhVcYg7CPMc99tkRwjjD~kRQahHPhZwnnTw8OypCCPABKE2PlMfVaDkylfVuLdJU1cfKCxrF4Fygm2EQKPjvf2eZsgpICP2IaY9LxW~7zGWs2fEQJ-fygJf-dYSj4jGQLggzzfaUWu6EKeSaWq79VNs~EDeIfM2zCBBJ3JMnJDULoIELPq2Hlbccqy2WlWfTp7c7DpvTHTahO6ueh6ryXUd~jXcZYQb5q6psLr9F86c8vmoDUfkX7XAlLUL6Higa1w__',
            'https://s3-alpha-sig.figma.com/img/c4b5/c52f/94a2a52b0bf63e262637118cfd3fb3f5?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dm1L8alIimGzPzb1Vbf9TtxZhRxFASK5TD2b1Ycna-dX-X8kk1HKk-uQmJZV7XtVFa8j09StNmBCMMdtcDg5rmsFt788~0rwyZXg1g6LkF25qgiMcmFIqYhZbd3QI0N0seirYkSwnGVugSaGxl9es5odIZV9zl6XncSXyxze1QS7IglmKAN3V23aWl65u6YdHs-eFVvvMD2lqBM7Vf-GHrQH9vBeJFukX-xK6VvYcxfIBDOmPrzqS1yl9YR4w8HSydMlNogJioubBrXfivqGdYlCog2JG1qp4hF89aMYc-tshhRJTWTwgJnF2vTB6jGSVkenCH8looww8vjmieNVIg__',
          ]"
          class="!w-2/5 bg-accent-placeholde transition-colors border-6 border-[#F2F1EE] mt-3 group/slide"
          :class="{
            ' !border-primary active': activeIndex == index,
          }"
        >
          <img :src="image" class="w-full h-auto aspect-square object-cover" />
          <span
            class="hidden group-[.active]/slide:inline absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 aspect-square bg-primary mx-auto rotate-45 -z-10"
          ></span>
        </swiper-slide>
      </swiper>
    </div>
    <div class="rte">
      <slot />
    </div>
  </BlockLayout>
</template>

<script setup lang="ts">
  import "swiper/css";

  import { Swiper, SwiperSlide } from "swiper/vue";
  import BlockLayout from "../BlockLayout.vue";
  import { FreeMode, Navigation, Thumbs } from "swiper/modules";
  import { ref } from "vue";

  const thumbsSwiper = ref(null);

  const setThumbsSwiper = (swiper: any) => {
    thumbsSwiper.value = swiper;
  };

  const activeIndex = ref(0);
  const onMainSlideChange = (e: any) => {
    activeIndex.value = e.activeIndex;
  };
</script>

<style scoped></style>
