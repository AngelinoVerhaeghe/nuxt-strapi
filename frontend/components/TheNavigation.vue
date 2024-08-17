<script setup lang="ts">
const isMobileMenuOpen = ref(false);

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <header>
    <nav class="py-6 lg:py-10">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <div class="flex items-center font-amaranth text-4xl">
            Funko <span class="text-bronze-50">King</span>
          </div>
        </NuxtLink>

        <div @click="toggleMenu" class="lg:hidden">
          <i class="fa-solid fa-bars cursor-pointer text-3xl"></i>
        </div>

        <ul
          class="hidden items-center justify-center lg:flex lg:space-x-16 lg:font-semibold"
        >
          <li
            class="uppercase transition-all duration-200 hover:text-bronze-50"
          >
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li
            class="uppercase transition-all duration-200 hover:text-bronze-50"
          >
            <NuxtLink to="/pops">Pops!</NuxtLink>
          </li>
          <li
            class="uppercase transition-all duration-200 hover:text-bronze-50"
          >
            <NuxtLink to="/pops">featured</NuxtLink>
          </li>
          <li class="flex justify-center space-x-6">
            <NuxtLink to="https://www.facebook.com" target="_blank">
              <i
                class="fa-brands fa-square-facebook text-2xl transition-all duration-200 hover:text-bronze-50"
              ></i>
            </NuxtLink>
            <NuxtLink to="https://www.twitter.com" target="_blank">
              <i
                class="fa-brands fa-x-twitter text-2xl transition-all duration-200 hover:text-bronze-50"
              ></i>
            </NuxtLink>
            <NuxtLink to="https://www.instagram.com" target="_blank">
              <i
                class="fa-brands fa-instagram text-2xl transition-all duration-200 hover:text-bronze-50"
              ></i>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <!-- Menu Overlay -->
  <div
    v-if="isMobileMenuOpen"
    class="fixed inset-0 z-50 flex h-full flex-col bg-bronze-50"
  >
    <nav class="flex h-full flex-col px-4 py-6 text-white">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <div class="flex items-center font-amaranth text-4xl">
            Funko <span class="text-bronze-500">King</span>
          </div>
        </NuxtLink>
        <i
          @click="toggleMenu"
          class="fa-solid fa-times cursor-pointer text-3xl"
        ></i>
      </div>
      <ul
        class="flex flex-grow flex-col items-center justify-center space-y-4 font-semibold"
      >
        <li class="uppercase transition-all duration-200 hover:text-bronze-50">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="uppercase transition-all duration-200 hover:text-bronze-50">
          <NuxtLink to="/pops">Pops!</NuxtLink>
        </li>
        <li class="uppercase transition-all duration-200 hover:text-bronze-50">
          <NuxtLink to="/pops">Featured</NuxtLink>
        </li>
        <li class="flex justify-center space-x-4 pt-8">
          <NuxtLink to="https://www.facebook.com" target="_blank">
            <i
              class="fa-brands fa-square-facebook text-2xl transition-all duration-200 hover:text-bronze-50"
            ></i>
          </NuxtLink>
          <NuxtLink to="https://www.twitter.com" target="_blank">
            <i
              class="fa-brands fa-x-twitter text-2xl transition-all duration-200 hover:text-bronze-50"
            ></i>
          </NuxtLink>
          <NuxtLink to="https://www.instagram.com" target="_blank">
            <i
              class="fa-brands fa-instagram text-2xl transition-all duration-200 hover:text-bronze-50"
            ></i>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
