<template>
  <PageLayout header-title="Novice">
    <div class="flex flex-col px-5">
      <News
        v-for="(news, i) in latestNews"
        :news="news"
        type="bold"
        class="py-5"
        :class="{ 'border-none': i == latestNews.length - 1 }"
      ></News>
      <hr class="border-[#D8D7D3] mb-5" />
      <Pagination></Pagination>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
  import News from "@/components/item/News.vue";
  import PageLayout from "@/components/PageLayout.vue";
  import Pagination from "@/components/Pagination.vue";
  import { latestNews } from "@/data/news";
</script>

<style scoped></style>
