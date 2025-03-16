<template>
  <div class="flex items-center gap-10">
    <button @click="onPrevPage">
      <IconReturnArrow></IconReturnArrow>
    </button>
    <div class="flex items-center gap-9 uppercase">
      <span
        v-for="i in 4"
        class="text-xl text-primary"
        :class="{ 'text-secondary': i == currentPage }"
        >{{ i }}</span
      >
    </div>
    <button @click="onNextPage">
      <IconArrowRight></IconArrowRight>
    </button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import IconArrowRight from "./icons/IconArrowRight.vue";
  import IconReturnArrow from "./icons/IconReturnArrow.vue";

  const currentPage = ref(1);
  const onPrevPage = () => {
    currentPage.value = currentPage.value <= 1 ? 1 : currentPage.value - 1;
  };

  const onNextPage = () => {
    currentPage.value = currentPage.value >= 4 ? 4 : currentPage.value + 1;
  };
</script>

<style scoped></style>
