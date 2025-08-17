<script setup lang="ts">
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

    <!-- Content - grows to fill space -->
    <main class="container px-4 py-6 mx-auto lg:px-8 flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <DesktopFooterMenu />
  </div>
</template>
