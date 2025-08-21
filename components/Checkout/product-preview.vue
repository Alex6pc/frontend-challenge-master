<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDesignerStore } from "~/stores/designer";

// take store variables
const { selectedMotive, selectedColor } = storeToRefs(useDesignerStore());
</script>

<template>
  <div class="col-span-1">
    <DesignerTShirt />

    <!-- Product Details -->
    <div class="mt-4 p-4 bg-gray-50 rounded-lg">
      <p class="text-sm text-gray-600 mb-2">
        <strong>Motiv:</strong>
        {{
          (selectedMotive?.name?.charAt(0).toUpperCase() || "") +
          (selectedMotive?.name?.slice(1) || "")
        }}
      </p>
      <p class="text-sm text-gray-600">
        <strong>Shirt:</strong>
        {{
          (selectedColor?.name?.charAt(0).toUpperCase() || "") +
          (selectedColor?.name?.slice(1) || "")
        }}
      </p>
    </div>
  </div>
</template>
