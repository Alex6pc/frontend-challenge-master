<script setup lang="ts">
import { useNavigation } from "~/composables/useNavigation";

const { goToAbout } = useNavigation();
</script>

<template>
  <footer class="bg-neutral-800 dark:bg-neutral-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 text-white">
        <button @click="goToAbout" class="hover:text-secondary">
          About this project
        </button>
      </div>
    </div>
  </footer>
</template>
