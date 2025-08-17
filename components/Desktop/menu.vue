<script setup lang="ts">
import type { NavItem } from "~/types";

const { navItems } = defineProps<{
  navItems: NavItem[];
}>();

// Access route in composition API (auto-imported in Nuxt)
const route = useRoute();
</script>
<template>
  <!-- Top Navigation -->
  <header
    class="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo and Brand -->
        <div class="flex items-center">
          <span class="ml-2 text-xl font-bold text-neutral-900 dark:text-white"
            >T-Shirt Designer</span
          >
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex space-x-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            class="flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
            :class="
              route.path === item.path
                ? 'text-primary bg-secondary bg-opacity-10'
                : 'text-neutral-700 dark:text-neutral-300 hover:text-primary hover:bg-neutral-100 dark:hover:bg-neutral-700'
            "
          >
            <Faicon :icon="item.icon" class="mr-2" />
            {{ item.name }}
          </NuxtLink>
        </nav>

        <!-- User menu -->
        <div class="flex items-center space-x-4"></div>
      </div>
    </div>
  </header>
</template>
