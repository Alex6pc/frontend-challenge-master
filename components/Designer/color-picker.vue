<script setup lang="ts">
import type { Color } from "~/types";

const selectedColor = ref<Color | null>(null);

defineProps<{
  colors: Color[];
}>();

const selectColor = (color: Color) => {
  selectedColor.value = color;
  document.documentElement.style.setProperty("--tshirt-color", color.color);
};
</script>

<template>
  <div class="bg-white p-6 rounded-lg border border-neutral">
    {{ colors }}

    <h2 class="text-primary-dark text-xl font-bold mb-4">Choose Color</h2>

    <!-- Color options -->
    <div class="grid grid-cols-5 gap-2 mb-4">
      <button
        v-for="color in colors"
        :key="color.name"
        @click="selectColor(color)"
        class="w-12 h-12 rounded-full border-2 transition-colors"
        :class="
          selectedColor?.name === color.name
            ? 'border-primary'
            : 'border-neutral'
        "
        :style="{ backgroundColor: color.color }"
      />
    </div>

    <!-- Price display -->
    <p class="text-secondary font-semibold">
      Additional: ${{ selectedColor?.price || 0 }}
    </p>
  </div>
</template>
