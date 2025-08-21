<script setup lang="ts">
import { useDesignerStore } from "~/stores/designer";
</script>

<template>
  <div class="col-span-1">
    <div class="bg-white p-6 rounded-lg border border-gray-200">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Order Data</h2>

      <div class="space-y-4">
        <!-- Motive Price -->
        <div class="flex justify-between items-center">
          <span class="text-gray-700">Motiv:</span>
          <span class="font-medium">
            {{ (useDesignerStore().selectedMotive?.price || 0).toFixed(2) }}
            €
          </span>
        </div>

        <!-- Shirt Price -->
        <div class="flex justify-between items-center">
          <span class="text-gray-700">Shirt:</span>
          <span class="font-medium">
            {{ (useDesignerStore().selectedColor?.price || 0).toFixed(2) }}
            €
          </span>
        </div>

        <!-- Divider -->
        <hr class="border-gray-300" />

        <!-- Total -->
        <div class="flex justify-between items-center text-lg font-bold">
          <span class="text-gray-900">Total:</span>
          <span class="text-gray-900">
            {{ useDesignerStore().totalPrice.toFixed(2) }} €
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
