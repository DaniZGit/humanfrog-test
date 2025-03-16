<template>
  <PageLayout>
    <div class="flex flex-col gap-3 px-5">
      <HomepageNews class="-mt-[170px]"></HomepageNews>
      <div class="flex flex-col md:grid grid-cols-2 gap-3 md:gap-9 md:pl-20">
        <div>
          <h4
            class="text-accent-placeholder text-sm font-ultra-bold uppercase mb-[1.125rem]"
          >
            Aktualno
          </h4>
          <div>
            <News
              v-for="(news, i) in latestNews"
              :news="news"
              class="py-2"
              :class="{ 'border-t': i == 0 }"
            ></News>
            <div class="py-2">
              <RouterLink
                to="/novice"
                class="flex items-center text-sm uppercase link-footer underline underline-offset-2 decoration-dotted group"
              >
                <span>Več novic</span>
                <IconArrowRight
                  class="group-hover:translate-x-2 transition-transform"
                ></IconArrowRight>
              </RouterLink>
            </div>
          </div>
        </div>

        <hr class="md:hidden border-t border-primary mt-7" />

        <div>
          <h4
            class="text-accent-placeholder text-sm font-ultra-bold uppercase mb-[1.125rem]"
          >
            Napovedujemo
          </h4>
          <div>
            <Event
              v-for="(event, i) in upcomingEvents"
              :event="event"
              class="py-2"
              :class="{ 'border-t': i == 0 }"
            ></Event>
            <div class="py-2">
              <RouterLink
                to="#"
                class="inline-flex items-center text-sm uppercase link-footer underline underline-offset-2 decoration-dotted group"
              >
                <span>Več dogodkov</span>
                <IconArrowRight
                  class="group-hover:translate-x-2 transition-transform"
                ></IconArrowRight>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
  import IconArrowRight from "@/components/icons/IconArrowRight.vue";
  import Event from "@/components/item/Event.vue";
  import HomepageNews from "@/components/item/HomepageNews.vue";
  import News from "@/components/item/News.vue";
  import PageLayout from "@/components/PageLayout.vue";
  import { upcomingEvents } from "@/data/events";
  import { latestNews } from "@/data/news";
</script>

<style scoped></style>
