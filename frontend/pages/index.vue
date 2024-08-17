<script setup lang="ts">
import type { Pop } from "~/types/pop";
import PopCard from "~/components/PopCard.vue";

const { find } = useStrapi();

const { data: pops } = await find<Pop>("pops", {
  populate: ["category", "images"],
});
</script>

<template>
  <section
    class="relative space-y-4 py-6 lg:flex lg:space-y-0 lg:pl-32 lg:pt-32"
  >
    <h1 class="w-60 font-amaranth text-3xl lg:w-96 lg:text-6xl">
      Welcome to <span class="text-bronze-50">FunkoKing</span> website.
    </h1>
    <NuxtImg
      src="/pop-logo.png"
      class="absolute right-20 top-12 h-96 object-cover"
    ></NuxtImg>
  </section>

  <section class="py-10 lg:pt-40">
    <div v-if="pops">
      <h2 class="mb-10 font-amaranth text-3xl">New items</h2>
      <div
        v-for="pop in pops"
        :key="pop.id"
        class="grid grid-cols-1 gap-5 text-slate-900 lg:grid-cols-3"
      >
        <PopCard :pop="pop" />
      </div>
    </div>
    <div v-else>
      <p>No pops found.</p>
    </div>
  </section>
</template>
