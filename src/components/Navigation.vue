<template>
  <nav
    class="flex flex-nowrap overflow-x-scroll scroll-smooth divide-x divide-[#D8D7D3]"
  >
    <RouterLink
      v-for="link in links"
      :to="link.url"
      class="inline-flex flex-col justify-between h-[84px] min-w-[140px] link-title"
      exact-active-class="!text-accent-hover group/nav"
    >
      <span class="px-[0.625rem]">
        {{ link.title }}
      </span>
      <span
        class="h-[6px] w-full group-[.router-link-active]/nav:bg-primary transition-colors"
      ></span>
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const links = ref([
    {
      title: "Novice",
      url: "/novice",
    },
    {
      title: "Prihajajoči dogodki",
      url: "/dogodki",
    },
    {
      title: "Pretekli dogodki",
      url: "/dogodki?sort=old",
    },
    {
      title: "Prihajajoči dogodki",
      url: "/dogodki",
    },
    {
      title: "Pretekli dogodki",
      url: "/dogodki?sort=old",
    },
  ]);
</script>

<style scoped></style>
