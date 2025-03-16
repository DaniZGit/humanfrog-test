<template>
  <div class="flex flex-col border-b border-[#D8D7D3]">
    <span class="text-accent-hover text-sm font-ultra-bold uppercase">
      {{ event.location }}
    </span>
    <span class="text-accent-placeholder text-sm">
      {{ event.datePublished }}
    </span>
    <RouterLink
      :to="event.url"
      class="link-footer !text-xl underline underline-offset-4 decoration-dotted font-georgia"
    >
      {{ event.title }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
  const { event } = defineProps<{
    event: any;
  }>();
</script>

<style scoped></style>
