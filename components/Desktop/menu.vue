<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDesignerStore } from "~/stores/designer";
import type { NavItem } from "~/types";

defineProps<{
  navItems: NavItem[];
}>();

const route = useRoute();
const { totalPrice } = storeToRefs(useDesignerStore());

// Helper function to check if nav item should be shown on current path
const shouldShowNavItem = (item: NavItem) => {
  return item.showOnPaths?.includes(route.path) || false;
};
</script>

<template>
  <!-- Top Navigation -->
  <header
    class="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <NuxtLink
            to="/"
            class="ml-2 text-xl font-bold text-neutral-900 dark:text-white hover:text-primary"
          >
            T-Shirt Designer
          </NuxtLink>
        </div>

        <!-- Middle section - Total Price (only on home page) -->
        <div class="flex items-center" v-if="route.path === '/'">
          <p class="text-lg font-semibold text-neutral-900 dark:text-white">
            Total Price: {{ totalPrice.toFixed(2) }} €
          </p>
        </div>

        <!-- Desktop Navigation -->
        <nav class="lg:flex space-x-8">
          <template v-for="item in navItems" :key="item.name">
            <UiButton
              v-if="shouldShowNavItem(item)"
              :to="item.path"
              :label="item.name"
              :icon="item.icon"
              variant="primary"
              size="md"
            >
            </UiButton>
          </template>
        </nav>
      </div>
    </div>
  </header>
</template>
