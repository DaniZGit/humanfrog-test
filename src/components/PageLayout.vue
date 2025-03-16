<template>
  <div class="max-w-screen-lg mx-auto overflow-hidden relative font-verb">
    <Header :title="headerTitle"></Header>
    <div class="md:grid grid-cols-12">
      <div
        class="hidden md:flex flex-col md:col-span-4 lg:col-span-3 px-8 ml-14 relative"
      >
        <SideLink to="/novice"> Novice </SideLink>
        <SideLink to="/events"> prihajajoči dogodki </SideLink>
        <SideLink to="/old-events"> pretekli dogodki </SideLink>
        <hr
          class="border-none w-[2px] h-[500px] bg-accent-hover absolute right-0 -top-[170px]"
        />
      </div>
      <div class="md:col-span-8 lg:col-span-9">
        <div class="md:max-w-screen-sm ml-auto">
          <slot />
        </div>
      </div>
    </div>
    <Footer class="mt-16"></Footer>
  </div>
</template>

<script setup lang="ts">
  import Footer from "./Footer.vue";
  import Header from "./Header.vue";
  import SideLink from "./item/SideLink.vue";

  const { headerTitle } = defineProps<{
    headerTitle?: string;
  }>();
</script>

<style scoped></style>
