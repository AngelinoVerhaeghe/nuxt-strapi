<script setup lang="ts">
import type { Pop } from "~/types/pop";

const props = defineProps<{
  pop: Pop;
}>();

const config = useRuntimeConfig();
const imageUrl = `${config.public.strapiUrl}`;

const currentSlide = ref(0);
const totalSlides = computed(() => props.pop.images.length);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
};

const previousSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + totalSlides.value) % totalSlides.value;
};
</script>

<template>
  <div class="space-y-4 rounded-2xl bg-white p-8 shadow-sm">
    <h2 class="font-amaranth text-xl lg:text-2xl">{{ pop.name }}</h2>
    <p class="font-semibold">
      Category:
      <span class="rounded-full bg-bronze-50 px-3 py-1 text-white">{{
        pop.category.name
      }}</span>
    </p>
    <div class="relative overflow-hidden">
      <div
        @click="previousSlide"
        class="absolute left-5 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        style="width: 100%"
      >
        <figure
          v-for="image in pop.images"
          :key="image.id"
          class="flex w-full flex-shrink-0 items-center justify-center"
        >
          <NuxtImg
            :src="imageUrl + image.formats.small.url"
            :alt="image.alternativeText"
            class="object-fit"
            :height="image.formats.small.height / 2"
            :width="image.formats.small.width / 2"
          />
        </figure>
      </div>
      <div
        @click="nextSlide"
        class="absolute right-5 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
    <NuxtLink :to="`/pops/${pop.slug}`">
      <button
        class="w-full cursor-pointer rounded-2xl bg-bronze-50 px-4 py-3 text-white shadow-md transition-all duration-200 ease-in-out hover:bg-bronze-100"
      >
        More info
      </button>
    </NuxtLink>
  </div>
</template>
