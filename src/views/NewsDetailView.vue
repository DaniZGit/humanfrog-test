<template>
  <PageLayout>
    <!-- for some reason the background color doesnt go over header's green background -->
    <!-- sticky fixes that  -->
    <div class="-mt-[130px] sticky">
      <div class="px-4">
        <div class="w-full bg-white p-6">
          <h2 class="link-title !text-3xl lg:!text-5xl/9 !text-accent-hover">
            {{ trendingNews.title }}
          </h2>
        </div>

        <div class="">
          <img :src="trendingNews.image" class="w-full aspect-video mb-6" />
        </div>

        <span class="text-accent-placeholder text-sm uppercase md:pl-20">
          {{ trendingNews.datePublished }}
        </span>
        <hr class="border-t border-primary w-2/5 mt-5 md:ml-20" />
      </div>

      <div class="divide-y divide-primary md:pl-20">
        <ContentBlock>
          <h3>
            Kompetenčni center za design management svojim članom ponuja nabor
            pristopov, orodij in znanj -, ki podjetju omogoča, da design
          </h3>
          <p>
            Celostno razumevanje in učinkovito upravljanje področij designa:
            <a href="www.google.com" class="link-regular"
              >link design raziskav</a
            >, storitvenega oblikovanja, trajnostnega oblikovanja, načrtovanja
            uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk
            znamke z uporabniki.
          </p>
          <h1>
            To je mednaslov 1 lorem ipsum dolor sit amet consiliqur malanga
          </h1>
          <p>
            Celostno razumevanje in učinkovito upravljanje področij designa:
            design raziskav, storitvenega oblikovanja, trajnostnega oblikovanja,
            načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in
            stičnih točk znamke z uporabniki, design razmišljanja in design
            vodenja podjetju omogoča vrsto prednosti pred konkurenti.
          </p>
          <ul>
            <li>design raziskav,</li>
            <li>storitvenega oblikovanja,</li>
            <li>trajnostnega oblikovanja,</li>
            <li>načrtovanja uporabniških izkušenj</li>
            <li>
              upravljanja uporabniških poti in stičnih točk znamke z uporabniki
            </li>
            <li>
              design razmišljanja in design vodenja podjetju omogoča vrsto
              prednosti pred konkurenti.
            </li>
          </ul>
          <h2>
            To je mednaslov 2 lorem ipsum dolor sit amet consiliqur malanga
          </h2>
          <p>
            Celostno razumevanje in učinkovito upravljanje področij designa:
            design raziskav, storitvenega oblikovanja, trajnostnega oblikovanja,
            načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in
            stičnih točk znamke z uporabniki, design razmišljanja.
          </p>
        </ContentBlock>
        <VideoBlock>
          <h1>
            To je mednaslov 1 lorem ipsum dolor sit amet consiliqur malanga
          </h1>
          <p>
            Celostno razumevanje in učinkovito upravljanje področij designa:
            design raziskav, storitvenega oblikovanja, trajnostnega oblikovanja,
            načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in
            stičnih točk znamke z uporabniki, design razmišljanja in design
            vodenja podjetju omogoča vrsto prednosti pred konkurenti.
          </p>
          <ul>
            <li>design raziskav,</li>
            <li>storitvenega oblikovanja,</li>
            <li>trajnostnega oblikovanja,</li>
            <li>načrtovanja uporabniških izkušenj</li>
            <li>
              upravljanja uporabniških poti in stičnih točk znamke z uporabniki
            </li>
            <li>
              design razmišljanja in design vodenja podjetju omogoča vrsto
              prednosti pred konkurenti.
            </li>
          </ul>
          <img
            src="https://s3-alpha-sig.figma.com/img/c4b5/c52f/94a2a52b0bf63e262637118cfd3fb3f5?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dm1L8alIimGzPzb1Vbf9TtxZhRxFASK5TD2b1Ycna-dX-X8kk1HKk-uQmJZV7XtVFa8j09StNmBCMMdtcDg5rmsFt788~0rwyZXg1g6LkF25qgiMcmFIqYhZbd3QI0N0seirYkSwnGVugSaGxl9es5odIZV9zl6XncSXyxze1QS7IglmKAN3V23aWl65u6YdHs-eFVvvMD2lqBM7Vf-GHrQH9vBeJFukX-xK6VvYcxfIBDOmPrzqS1yl9YR4w8HSydMlNogJioubBrXfivqGdYlCog2JG1qp4hF89aMYc-tshhRJTWTwgJnF2vTB6jGSVkenCH8looww8vjmieNVIg__"
          />
          <p class="note">
            Lorem ipsum dolor sit amet consectetur. Morbi consequat ut
            sollicitudin lorem. Platea auctor sit. Lorem ipsum dolor sit amet
            consectetur. Morbi consequat ut sollicitudin lorem. Platea auctor
            sit.
          </p>
        </VideoBlock>
        <ContentBlock>
          <h1>
            To je mednaslov 1 lorem ipsum dolor sit amet consiliqur malanga
          </h1>
          <p>
            Celostno razumevanje in učinkovito upravljanje področij designa:
            design raziskav, storitvenega oblikovanja, trajnostnega oblikovanja,
            načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in
            stičnih točk znamke z uporabniki, design razmišljanja in design
            vodenja podjetju omogoča vrsto prednosti pred konkurenti.
          </p>
          <blockquote>
            This is the Highlight. Lorem ipsum gulih dolor sit amet consectetur.
            Lorem ipsum dolor sit amet consectetur.
          </blockquote>
          <h2>
            To je mednaslov 2 lorem ipsum dolor sit amet consiliqur malanga
          </h2>
          <p>
            Celostno razumevanje in učinkovito upravljanje področij designa:
            design raziskav, storitvenega oblikovanja, trajnostnega oblikovanja,
            načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in
            stičnih točk znamke z uporabniki, design razmišljanja.
          </p>
          <blockquote class="">
            <div class="flex gap-5 mb-3">
              <div class="flex gap-1">
                <IconQuoteUp class="!h-14 !w-8"></IconQuoteUp>
                <IconQuoteUp class="!h-14 !w-8"></IconQuoteUp>
              </div>
              <div class="flex gap-1">
                <IconQuoteDown class="!h-14 !w-8"></IconQuoteDown>
                <IconQuoteDown class="!h-14 !w-8"></IconQuoteDown>
              </div>
            </div>
            <div>
              This is the quote. Lorem ipsum gulih dolor sit amet consectetur.
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <div class="flex items-center gap-3 mt-5">
              <hr class="w-1/5 border-t border-[#D8D7D3]" />
              <span class="text-lg/5 text-secondary">Janice, California</span>
            </div>
          </blockquote>
          <p>
            Celostno razumevanje in učinkovito upravljanje področij designa:
            design raziskav, storitvenega oblikovanja, trajnostnega oblikovanja,
            načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in
            stičnih točk znamke z uporabniki, design razmišljanja.
          </p>
        </ContentBlock>
        <MultimediaBlock>
          <p>
            Celostno razumevanje in učinkovito upravljanje področij designa:
            design raziskav, storitvenega oblikovanja, trajnostnega oblikovanja,
            načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in
            stičnih točk znamke z uporabniki, design razmišljanja.
          </p>
        </MultimediaBlock>
      </div>
    </div>
    <div class="bg-[#D8D7D3] text-white p-5 mt-12 pb-16 md:hidden">
      <div class="flex flex-col gap-6 bg-accent-warning px-6 py-8 -mt-12">
        <IconBook class="w-2/3"></IconBook>
        <div>
          <RouterLink
            to="#"
            class="text-sm font-ultra-bold uppercase underline underline-offset-2 decoration-dotted"
          >
            Knjiga: Z designom do uspešne organizacije
          </RouterLink>
          <p class="text-xl/7 mt-1 font-georgia">
            Članek je objavljen tudi v knjigi Z designom do uspešne
            organizacije. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet.
          </p>
        </div>
        <RouterLink
          to="#"
          class="flex items-center gap-1.5 text-sm uppercase underline underline-offset-2 decoration-dotted group"
        >
          Spoznaj knjigo
          <span class="group-hover:translate-x-2 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z"
              />
            </svg>
          </span>
        </RouterLink>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
  import ContentBlock from "@/components/blocks/ContentBlock.vue";
  import HighlightBlock from "@/components/blocks/HighlightBlock.vue";
  import MultimediaBlock from "@/components/blocks/MultimediaBlock.vue";
  import VideoBlock from "@/components/blocks/VideoBlock.vue";
  import IconArrowRight from "@/components/icons/IconArrowRight.vue";
  import IconBook from "@/components/icons/IconBook.vue";
  import IconQuoteDown from "@/components/icons/IconQuoteDown.vue";
  import IconQuoteUp from "@/components/icons/IconQuoteUp.vue";
  import PageLayout from "@/components/PageLayout.vue";
  import { trendingNews } from "@/data/news";
</script>

<style scoped></style>
