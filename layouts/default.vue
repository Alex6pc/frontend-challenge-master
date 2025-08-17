<script setup lang="ts">
// Mobile menu state
const isMobileMenuOpen = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Navigation items
const navItems = [{ name: "T-Shirt Designer", path: "/", icon: "home" }];
</script>

<template>
  <div class="min-h-screen bg-white">
    <DesktopMenu :navItems="navItems" />

    <!-- Mobile menu overlay -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-gray-800 bg-opacity-75 z-20 lg:hidden"
      @click="toggleMobileMenu"
    ></div>

    <MobileMenu
      :isMobileMenuOpen="isMobileMenuOpen"
      :navItems="navItems"
      :toggleMobileMenu="toggleMobileMenu"
    />
    <!-- Main content -->
    <main class="container px-4 py-6 mx-auto lg:px-8">
      <slot />
    </main>
  </div>
</template>
