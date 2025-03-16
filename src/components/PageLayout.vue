<template>
  <div class="overflow-hidden relative font-verb">
    <Header :title="headerTitle" class="max-w-screen-lg mx-auto"></Header>
    <div class="max-w-screen-lg mx-auto md:grid grid-cols-12 relative">
      <!-- Dashed background -->
      <div
        v-if="route.name == 'home'"
        class="hidden lg:inline absolute -left-[20px] -top-[210px] h-[200px] w-auto aspect-square bg-accent-hover z-50"
        style="
          background: repeating-linear-gradient(
            -45deg,
            #318565 0px,
            #318565 2px,
            transparent 1px,
            transparent 6px
          );
        "
      ></div>

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
    <Footer class="max-w-screen-lg mx-auto mt-16"></Footer>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from "vue-router";
  import Footer from "./Footer.vue";
  import Header from "./Header.vue";
  import SideLink from "./item/SideLink.vue";

  const route = useRoute();

  const { headerTitle } = defineProps<{
    headerTitle?: string;
  }>();
</script>

<style scoped></style>
