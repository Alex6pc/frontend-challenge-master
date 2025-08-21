<script setup lang="ts">
import type { NavItem } from "~/types";

const navItems: NavItem[] = [
  {
    name: "Checkout",
    path: "/checkout",
    icon: "cart-shopping",
    showOnPaths: ["/"], // Show checkout button when on homepage
  },
  {
    name: "Back to Design",
    path: "/",
    icon: "arrow-left",
    showOnPaths: ["/checkout", "/about"], // Show back button when on checkout or about
  },
];
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col">
    <!-- Header-->
    <DesktopMenu :navItems="navItems" />

    <!-- Content - grows to fill space -->
    <main class="container px-4 py-6 mx-auto lg:px-8 flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <DesktopFooterMenu />
  </div>
</template>
