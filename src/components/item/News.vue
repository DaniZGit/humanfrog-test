<template>
  <div class="flex flex-col border-b border-[#D8D7D3]">
    <RouterLink
      :to="news.url"
      class="underline underline-offset-4 decoration-dotted mb-1"
      :class="{
        'link-footer !text-xl font-georgia': type == 'regular',
        'link-title !text-3xl lg:!text-5xl': type == 'bold',
      }"
    >
      {{ news.title }}
    </RouterLink>
    <span class="text-accent-placeholder text-sm uppercase">
      {{ news.datePublished }}
    </span>
  </div>
</template>

<script setup lang="ts">
  const { news, type = "regular" } = defineProps<{
    news: any;
    type?: "regular" | "bold";
  }>();
</script>

<style scoped></style>
