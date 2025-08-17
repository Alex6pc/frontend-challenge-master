<script setup lang="ts">
import type { NavItem } from "~/types";

defineProps<{
  isMobileMenuOpen: boolean;
  navItems: NavItem[];
  toggleMobileMenu: () => void;
}>();
</script>
<template>
  <!-- Mobile Navigation -->
  <div v-if="isMobileMenuOpen" class="lg:hidden">
    <div
      class="px-2 pt-2 pb-3 space-y-1 border-t border-neutral-200 dark:border-neutral-700"
    >
      <NuxtLink
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="flex items-center px-3 py-2 text-sm font-medium rounded-md"
        :class="
          $route.path === item.path
            ? 'text-primary bg-primary bg-opacity-10'
            : 'text-neutral-700 dark:text-neutral-300 hover:text-primary hover:bg-neutral-100 dark:hover:bg-neutral-700'
        "
        @click="toggleMobileMenu"
      >
        <Faicon :icon="item.icon" class="mr-2" />
        {{ item.name }}
      </NuxtLink>
    </div>
  </div>
</template>
