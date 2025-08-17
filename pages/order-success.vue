<script setup lang="ts">
import { useNavigation } from "~/composables/useNavigation";

const { designAnotherProduct } = useNavigation();
</script>

<template>
  <div class="flex items-center justify-center min-h-[60vh]">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Thank you for your order!
      </h1>
      <UiButton
        @click="designAnotherProduct()"
        variant="primary"
        size="lg"
        icon="home"
        label="Back"
      />
    </div>
  </div>
</template>
