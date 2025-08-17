<script setup lang="ts">
import { PartOfTshirt, type Color } from "~/types";
import { useDesignerStore } from "~/stores/designer";

defineProps<{
  colors: Color[];
}>();

const designerStore = useDesignerStore();

// take selected color depending on part of tshirt and set the color
const selectedColor = computed(() =>
  designerStore.takeSelectedColor(partOfTshirt.value)
);

const partOfTshirt = computed(() => designerStore.selectedPartOfTshirt);

const setColorAndPartOfTshirt = (color: Color, partOfTshirt: PartOfTshirt) => {
  designerStore.setColorAndPartOfTshirt(color, partOfTshirt);
};
</script>

<template>
  <div class="bg-white p-6 rounded-lg border border-neutral">
    <h2 class="text-primary-dark text-xl font-bold mb-4">Choose Color</h2>
    <!-- Color options -->
    <div class="grid grid-cols-5 gap-2 mb-4">
      <button
        v-for="color in colors"
        :key="color.name"
        @click="setColorAndPartOfTshirt(color, partOfTshirt)"
        class="w-12 h-12 rounded-full border-2 transition-colors"
        :class="
          selectedColor?.color === color.color
            ? 'border-8 border-primary'
            : 'border-neutral'
        "
        :style="{ backgroundColor: color.color }"
        v-tippy="color.name.charAt(0).toUpperCase() + color.name.slice(1)"
      />
    </div>

    <!-- main color t-shirt - neck lining - wave patterns -->
    <div class="flex flex-wrap gap-2 mb-4">
      <UiButton
        :class="
          partOfTshirt === PartOfTshirt.Tshirt ? 'border-4 border-primary' : ''
        "
        tippy="Select T-Shirt color"
        icon="shirt"
        :icon-color="designerStore.selectedColorTshirt?.color"
        variant="secondary"
        size="md"
        type="button"
        @click="designerStore.selectedPartOfTshirt = PartOfTshirt.Tshirt"
      />
      <UiButton
        :class="
          partOfTshirt === PartOfTshirt.NeckLining
            ? 'border-4 border-primary'
            : ''
        "
        tippy="Select Neck Lining color"
        icon="ring"
        :icon-color="designerStore.selectedColorNeckLining?.color"
        variant="secondary"
        size="md"
        type="button"
        @click="designerStore.selectedPartOfTshirt = PartOfTshirt.NeckLining"
      />
      <UiButton
        :class="
          partOfTshirt === PartOfTshirt.WavePatterns
            ? 'border-4 border-primary'
            : ''
        "
        icon="water"
        :icon-color="designerStore.selectedColorWavePatterns?.color"
        tippy="Select Wave Patterns color"
        variant="secondary"
        size="md"
        type="button"
        @click="designerStore.selectedPartOfTshirt = PartOfTshirt.WavePatterns"
      />
    </div>

    <!-- Price display -->
    <h2 class="font-bold text-xl text-primary">
      Additional: {{ designerStore.totalPrice.toFixed(2) || 0 }} €
    </h2>
    <p class="text-sm text-neutral mt-2">
      The price is calculated based on the selected color of the main part of
      the t-shirt and the selected motive.
    </p>
  </div>
</template>
