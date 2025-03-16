<template>
  <div class="flex flex-col pb-0">
    <div
      class="flex items-center justify-between lg:justify-normal gap-[2.2rem] pt-5 px-5 pb-[2.4rem] lg:py-8"
    >
      <RouterLink to="/">
        <img
          src="@/assets/images/logo.png"
          class="h-auto grow object-contain"
        />
      </RouterLink>

      <div class="hidden lg:flex">
        <div class="w-10 border-r border-primary"></div>

        <div v-show="!expandSearch" class="flex flex-col gap-3 mb-8 pl-3">
          <DrawerLink to="/novice" @click="onMenuClick"> Znanje </DrawerLink>
          <DrawerLink to="/" @click="onMenuClick"> Aktualno </DrawerLink>
          <DrawerLink to="/novice/detalj-2" @click="onMenuClick">
            O kcdm
          </DrawerLink>
        </div>
      </div>

      <div class="hidden lg:flex items-center gap-4 ml-auto">
        <button class="ml-auto">
          <IconSearchGreen></IconSearchGreen>
        </button>
        <div class="border-r border-[#D8D7D3] pr-4">
          <button
            v-show="!expandSearch"
            class="w-full text-primary hover:text-accent-hover text-sm uppercase border-2 border-primary hover:border-accent-hover border-dotted py-2 px-4"
          >
            Platforma dna
          </button>
        </div>
        <button
          class="uppercase text-primary hover:text-accent-hover transition-colors text-base"
        >
          eng
        </button>
      </div>

      <button
        class="shrink-0 border-l py-2 pl-[0.8rem] lg:hidden"
        @click="onMenuClick"
      >
        <IconMenu></IconMenu>
      </button>
    </div>
    <div v-if="route.name == 'novice'" class="md:hidden px-5">
      <RouterLink
        to="/"
        class="inline-flex items-center gap-3 text-primary border-t border-primary pt-[0.625rem] pb-8 group"
      >
        <IconReturnArrow
          class="group-hover:-translate-x-2 transition-transform"
        ></IconReturnArrow>
        <span class="link-title underline decoration-dotted">Aktualno</span>
      </RouterLink>
    </div>
    <div class="pl-[0.625rem] pt-8 lg:hidden">
      <Navigation></Navigation>
    </div>
    <div class="h-[200px] bg-primary pl-5 md:grid grid-cols-12">
      <div class="hidden md:inline-block md:col-span-4 lg:col-span-3">
        <RouterLink
          v-if="route.name == 'novice' || route.name == 'detalj-novice'"
          to="/"
          class="inline-flex items-center gap-2 text-white border-t border-primary pt-[30px] pb-8 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="group-hover:-translate-x-2 transition-transform"
          >
            <path
              fill="currentColor"
              d="M10.05 16.94v-4h8.92l.03-2.01h-8.95V6.94l-5 5Z"
            />
          </svg>
          <span class="link-title !text-white underline decoration-dotted"
            >Aktualno</span
          >
        </RouterLink>
      </div>
      <div class="md:col-span-8 lg:col-span-9">
        <div class="md:max-w-screen-sm md:ml-auto md:px-2">
          <RouterLink
            v-if="route.name == 'detalj-novice'"
            to="/novice"
            class="h-[70px] md:h-auto md:pt-[30px] inline-flex items-center gap-3 text-white group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="group-hover:-translate-x-2 transition-transform"
            >
              <path
                fill="currentColor"
                d="M10.05 16.94v-4h8.92l.03-2.01h-8.95V6.94l-5 5Z"
              />
            </svg>
            <span
              class="text-sm font-ultra-bold uppercase underline decoration-dotted"
            >
              Novice
            </span>
          </RouterLink>
          <h1
            v-if="title"
            class="text-5.5xl text-white font-ultra-bold capitalize"
          >
            {{ title }}
          </h1>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div
      class="absolute top-0 left-0 right-0 bottom-0 flex bg-primary transition-transform z-50"
      :class="{
        'translate-x-full': !expandDrawer,
        'translate-x-0': expandDrawer,
      }"
    >
      <div class="w-10 border-r border-white"></div>
      <div class="grow flex flex-col pt-8 pl-3 pr-10">
        <button class="text-white text-3xl" @click="onMenuClick">
          <IconClose></IconClose>
        </button>
        <div v-show="!expandSearch" class="flex flex-col gap-3 mt-[3.75rem]">
          <DrawerLink to="/" @click="onMenuClick"> Vstopna stran </DrawerLink>
          <DrawerLink to="/novice" @click="onMenuClick"> Znanje </DrawerLink>
          <DrawerLink to="/novice/detalj-1" @click="onMenuClick">
            Aktualno
          </DrawerLink>
          <DrawerLink to="/novice/detalj-2" @click="onMenuClick">
            O kcdm
          </DrawerLink>
        </div>
        <button
          v-show="!expandSearch"
          class="w-full text-white hover:text-accent-hover text-sm uppercase border-2 border-white border-dotted hover:border-accent-hover transition-colors py-3 px-7 mt-9"
          @click="onMenuClick"
        >
          Platforma dna
        </button>
        <div
          v-show="!expandSearch"
          class="flex items-center gap-4 border-t border-accent-hover pt-5 mt-7"
        >
          <button class="uppercase text-white text-base" @click="onMenuClick">
            sl
          </button>
          <button class="uppercase text-black text-base" @click="onMenuClick">
            en
          </button>
          <button class="ml-auto" @click="expandSearch = !expandSearch">
            <IconSearch></IconSearch>
          </button>
        </div>
        <div v-show="expandSearch" class="relative mt-[3.75rem]">
          <input
            type="search"
            name=""
            id=""
            placeholder="Iskanje"
            class="outline-none w-full text-white placeholder-secondary bg-accent-hover py-2 px-3"
          />
          <button
            class="absolute right-0 top-0 bottom-0 flex items-center pr-3"
            @click="expandSearch = !expandSearch"
          >
            <IconSearch></IconSearch>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import IconMenu from "./icons/IconMenu.vue";
  import Navigation from "./Navigation.vue";
  import { useRoute } from "vue-router";
  import IconReturnArrow from "./icons/IconReturnArrow.vue";
  import IconClose from "./icons/IconClose.vue";
  import IconSearch from "./icons/IconSearch.vue";
  import DrawerLink from "./item/DrawerLink.vue";
  import IconSearchGreen from "./icons/IconSearchGreen.vue";

  const route = useRoute();
  const { title } = defineProps<{
    title?: string;
  }>();

  const expandDrawer = ref(false);
  const expandSearch = ref(false);

  const onMenuClick = () => {
    expandDrawer.value = !expandDrawer.value;
    expandSearch.value = false;

    // disable scroll on body
    document.body.style.overflow = expandDrawer.value ? "hidden" : "visible";
  };
</script>

<style scoped></style>
