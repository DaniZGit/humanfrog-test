<template>
  <BlockLayout>
    <h4 class="text-sm text-accent-hover font-ultra-bold uppercase my-4">
      To je naslov videa
    </h4>
    <div>
      <iframe
        class="w-full h-auto aspect-video"
        width="340"
        height="200"
        src="https://www.youtube.com/embed/N06-0GhPmT8?si=wlG6t8zYBwCI0ZmE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div class="rte">
      <slot />
    </div>
  </BlockLayout>
</template>

<script setup lang="ts">
  import BlockLayout from "../BlockLayout.vue";
</script>

<style scoped></style>
