<script setup lang="ts">
// import HelloWorld from '~/components/HelloWorld.vue'

// definePageMeta({
//   name: 'index',
//   layout: 'default',
// });

</script>

<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">T-Shirt Designer</h1>
    <p class="text-lg text-gray-600 mb-8">Create your custom t-shirt design</p>

    <!-- Placeholder for the designer content -->
    <div class="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
      <div class="text-center text-gray-500">
        <svg class="w-24 h-24 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clip-rule="evenodd" />
        </svg>
        <p class="text-lg font-medium">Designer Coming Soon</p>
        <p class="text-sm">The t-shirt designer interface will be implemented here</p>
      </div>
      <HelloWorld />
    </div>
  </div>
</template>
