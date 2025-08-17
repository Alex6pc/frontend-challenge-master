<script setup lang="ts">
import { useDesignerStore } from "~/stores/designer";
import type { NavItem } from "~/types";

defineProps<{
  navItems: NavItem[];
}>();

const route = useRoute();
const designerStore = useDesignerStore();
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
        <p class="text-sm text-white">{{ route.path }}</p>

        <!-- Desktop Navigation -->
        <nav class="lg:flex space-x-8">
          <div class="flex items-center" v-if="route.path === '/'">
            <p class="text-sm text-white">
              Total Price: {{ designerStore.totalPrice.toFixed(2) }} €
            </p>
          </div>
          <template v-for="item in navItems" :key="item.name">
            <UiButton
              v-if="route.path === item.path && item.onClick"
              variant="primary"
              size="md"
              :icon="item.icon"
              :label="item.name"
              @click="item.onClick"
            >
              <Faicon :icon="item.icon" class="mr-2" />
              {{ item.name }}
            </UiButton>
          </template>
        </nav>
      </div>
    </div>
  </header>
</template>
