<template>
  <div class="border-t-8 border-[#D8D7D3] mx-5 pb-[4.375rem]">
    <div class="divide-y divide-[#D8D7D3] md:grid md:grid-cols-12">
      <div
        class="flex flex-col gap-3 py-4 grow md:col-span-8 md:col-end-13 md:order-2"
      >
        <h6 class="text-sm font-ultra-bold text-secondary uppercase">
          NAROČITE SE NA NAŠE E-NOVICE
        </h6>
        <div class="relative">
          <input
            type="email"
            placeholder="Vnesite svoj e-naslov"
            class="w-full outline-none text-secondary placeholder:text-accent-placeholder hover:outline-1 outline-0 outline-primary transition-all p-4"
          />
          <button
            class="absolute right-0 top-0 bottom-0 flex items-center pr-3 group"
          >
            <IconArrowRight
              class="group-hover:translate-x-1 transition-transform"
            ></IconArrowRight>
          </button>
        </div>
        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            id="email"
            class="appearance-none bg-white border border-[#D8D7D3] h-5 w-5 checked:bg-primary"
          />
          <label for="email" class="text-accent-placeholder"
            >Strinjam se s pogoji uporabe</label
          >
        </div>
      </div>

      <div class="flex flex-col gap-3 py-4 md:col-span-4 md:col-start-1">
        <h6 class="text-sm font-ultra-bold text-secondary uppercase">
          Spremljajte nas
        </h6>
        <div class="flex gap-3">
          <FooterSocial> f </FooterSocial>
          <FooterSocial> in </FooterSocial>
          <FooterSocial> v </FooterSocial>
        </div>
      </div>
    </div>

    <div
      class="md:grid md:grid-cols-12 md:gap-16 md:border-t-8 md:border-[#D8D7D3]"
    >
      <div
        class="flex flex-col gap-3 py-4 border-t-8 border-[#D8D7D3] md:border-none md:col-span-4"
      >
        <div>
          <h6 class="text-primary text-sm font-ultra-bold">Arhiske vsebine</h6>
          <p class="text-accent-placeholder">
            Lorem ipsum dolor sit amet consectetur. Tempus blandit enim eget
            nunc enim. Tincidunt feugiat id eleifend eget. Fames condimentum
            scelerisque sollicitudin feugiat tellus lorem tristique iaculis.
            Mauris feugiat placerat.
          </p>
        </div>
      </div>

      <div class="border-t-8 border-[#D8D7D3] md:col-span-8 md:border-none">
        <div class="inline-flex items-center py-4 gap-5">
          <img
            src="@/assets/images/gov-logo.png"
            class="h-8 md:h-12 w-auto opacity-50 object-contain"
          />
          <span class="w-1 self-stretch bg-[#D8D7D3]"></span>
          <img
            src="@/assets/images/sps-logo.png"
            class="h-12 md:h-20 w-full opacity-50 object-contain text-left"
          />
        </div>
      </div>
    </div>

    <div>
      <hr class="border-y border-[#D8D7D3]" />

      <div class="flex flex-col md:flex-row gap-5 md:gap-0 py-4">
        <span class="text-accent-placeholder text-sm">
          &copy; Kompetenčni center za Design Management
          <span class="hidden md:inline px-1 text-accent-placeholder">·</span>
        </span>
        <RouterLink to="#" class="link-footer"
          >Pogoji uporabe
          <span class="hidden md:inline px-1 text-accent-placeholder">·</span>
        </RouterLink>
        <RouterLink to="#" class="link-footer"
          >Politika zasebnosti
          <span class="hidden md:inline px-1 text-accent-placeholder"
            >·</span
          ></RouterLink
        >
        <RouterLink to="#" class="link-footer">
          <p>Oblikovanje in razvoj spletnih strani:</p>
          <div class="flex items-center gap-2">
            Humanfrog
            <IconHumanfrog></IconHumanfrog>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import FooterSocial from "./FooterSocial.vue";
  import IconArrowRight from "./icons/IconArrowRight.vue";
  import IconFacebook from "./icons/IconFacebook.vue";
  import IconHumanfrog from "./icons/IconHumanfrog.vue";
  import IconLinkedin from "./icons/IconLinkedin.vue";
  import IconViemo from "./icons/IconViemo.vue";
</script>

<style scoped></style>
