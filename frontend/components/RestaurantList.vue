<script setup lang="ts">
import type { Restaurant } from "~/types/restaurant";
import type { Category } from "~/types/category";

useHead({
  title: "Restaurants | Lists",
  meta: [
    {
      name: "description",
      content: "List of pops",
    },
  ],
});

const { find } = useStrapi();

const { data: apiRestaurants } = await find<Restaurant>("restaurants", {
  populate: ["categories"],
});

const restaurants = ref(apiRestaurants);

const restaurantsWithCategories = computed(() =>
  restaurants.value.map((restaurant) => ({
    ...restaurant,
    categories: restaurant.attributes.categories.data.map(
      (category: Category) => ({
        id: category.id,
        name: category.attributes.name,
      }),
    ),
  })),
);
</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="restaurant in restaurantsWithCategories"
      :key="restaurant.id"
      class="bg-white p-4 shadow-md"
    >
      <h2 class="text-2xl">{{ restaurant.attributes.name }}</h2>
      <div
        v-for="description in restaurant.attributes.description"
        :key="description.type"
        class="mt-4"
      >
        <p>{{ description.children[0].text }}</p>
      </div>
      <ul class="mt-4">
        <li v-for="category in restaurant.categories" :key="category.id">
          {{ category.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
