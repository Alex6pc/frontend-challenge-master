<script setup lang="ts">
import { useNavigation } from "~/composables/useNavigation";

const { goBack } = useNavigation();
</script>

<template>
  <div class="flex items-center justify-center min-h-[60vh]">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">This is a Demo Page</h1>
      <UiButton
        @click="goBack()"
        variant="primary"
        size="lg"
        icon="home"
        label="Back"
      />
    </div>
  </div>
</template>
