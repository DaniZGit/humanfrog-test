<template>
  <div class="">
    <RouterLink :to="news.url">
      <img :src="news.image" class="w-full aspect-video mb-6" />
    </RouterLink>
    <div class="md:ml-20 border-b border-primary pb-9">
      <RouterLink
        :to="news.url"
        class="link-title !text-3xl/6 lg:!text-5xl/9 uppercase underline decoration-dotted"
        >{{ news.title }}</RouterLink
      >
      <p
        class="text-accent-hover text-2xl/7 lg:text-3xl/7 mb-4 mt-5 font-georgia"
      >
        {{ news.intro }}
      </p>
      <span class="text-accent-placeholder text-sm">
        {{ news.datePublished }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { trendingNews } from "@/data/news";

  const news = trendingNews;
</script>

<style scoped></style>
