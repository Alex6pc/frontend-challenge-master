<script setup lang="ts">
import { useDesignerStore } from "~/stores/designer";

const goBackAndReset = () => {
  // reset the  to default
  useDesignerStore().resetToDefault();
  navigateTo("/");
};
</script>

<template>
  <div class="flex items-center justify-center min-h-[60vh]">
    <div class="flex flex-col items-center justify-center text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Thank you for your order!
      </h1>
      <UiButton
        variant="primary"
        size="lg"
        icon="home"
        label="Back"
        @click="goBackAndReset()"
      />
    </div>
  </div>
</template>
