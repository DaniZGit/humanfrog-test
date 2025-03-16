<template>
  <RouterLink :to="to" class="flex gap-3 group/active" active-class="active">
    <hr
      class="w-[6px] bg-[#f2f1ee] h-full mr-2 group-[.router-link-exact-active]/active:bg-primary"
    />
    <div
      class="link-title w-full border-b border-[#D8D7D3] py-2 group-[.router-link-exact-active]/active:text-accent-hover"
    >
      <slot />
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
  const { to } = defineProps<{
    to: string;
  }>();
</script>

<style scoped></style>
