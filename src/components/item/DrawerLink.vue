<template>
  <RouterLink
    :to="to"
    class="text-sm text-white lg:text-primary hover:text-accent-hover font-ultra-bold uppercase relative flex items-center transition-all"
    active-class="!text-accent-hover after:absolute after:-left-4 after:w-2 after:h-2 after:bg-primary lg:after:bg-[#F2F1EE] after:border-r after:border-t after:border-white lg:after:border-accent-hover after:rotate-45"
  >
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
  const { to } = defineProps<{
    to: string;
  }>();
</script>

<style scoped></style>
