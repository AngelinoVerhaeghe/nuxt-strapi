<script setup lang="ts">
import TheNavigation from "~/components/TheNavigation.vue";
</script>

<template>
    <div class="bg-black">
        <div class="container mx-auto px-4">
            <main>
                <TheNavigation/>
                <NuxtPage/>
            </main>
        </div>
    </div>
</template>
