<script setup lang="ts">
// Main checkout component that orchestrates all checkout sections
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
    <!-- Left Column - Product Preview -->
    <CheckoutProductPreview />

    <!-- Middle Column - Order Data -->
    <CheckoutOrderData />

    <!-- Right Column - Personal Data -->
    <CheckoutPersonalData />
  </div>
</template>
