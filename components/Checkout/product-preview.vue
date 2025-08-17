<script setup lang="ts">
import { useDesignerStore } from "~/stores/designer";

const designerStore = useDesignerStore();
</script>

<template>
  <div class="col-span-1">
    <DesignerTShirt />

    <!-- Product Details -->
    <div class="mt-4 p-4 bg-gray-50 rounded-lg">
      <p class="text-sm text-gray-600 mb-2">
        <strong>Motiv:</strong>
        {{
          (designerStore.selectedMotive?.name?.charAt(0).toUpperCase() || "") +
          (designerStore.selectedMotive?.name?.slice(1) || "")
        }}
      </p>
      <p class="text-sm text-gray-600">
        <strong>Shirt:</strong>
        {{
          (designerStore.selectedColor?.name?.charAt(0).toUpperCase() || "") +
          (designerStore.selectedColor?.name?.slice(1) || "")
        }}
      </p>
    </div>
  </div>
</template>
