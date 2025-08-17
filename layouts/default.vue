<script setup lang="ts">
// Mobile menu state
const isMobileMenuOpen = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const { goBack, goToCheckout, goToDesign } = useNavigation();

// Navigation items
const navItems = [
  { name: "Checkout", path: "/", icon: "cart-shopping", onClick: goToCheckout },
  { name: "Back", path: "/about", icon: "arrow-left", onClick: goBack },
  { name: "Back", path: "/checkout", icon: "arrow-left", onClick: goToDesign },
];
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col">
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

    <!-- Main content - grows to fill space -->
    <main class="container px-4 py-6 mx-auto lg:px-8 flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <DesktopFooterMenu />
  </div>
</template>
