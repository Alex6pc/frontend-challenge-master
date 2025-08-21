<script setup lang="ts"></script>

<template>
  <div class="flex items-center justify-center min-h-[60vh]">
    <div class="flex flex-col items-center justify-center text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">This is a Demo Page</h1>
      <UiButton
        @click="$router.back()"
        variant="primary"
        size="lg"
        icon="arrow-left"
        label="Back"
      />
    </div>
  </div>
</template>
