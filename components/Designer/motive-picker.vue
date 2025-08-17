<script setup lang="ts">
import type { Motive } from "~/types";
import { useDesignerStore } from "~/stores/designer";

const designerStore = useDesignerStore();

const selectedMotive = computed(() => designerStore.selectedMotive);

defineProps<{
  motives: Motive[];
}>();

const selectMotive = (motive: Motive) => {
  designerStore.setMotive(motive);
};
</script>

<template>
  <div class="bg-white p-6 rounded-lg border border-neutral">
    <h2 class="text-primary-dark text-xl font-bold mb-4">Choose Motive</h2>

    <!-- Motive options -->
    <div class="flex flex-wrap gap-2 justify-center">
      <button
        v-for="motive in motives"
        :key="motive.name"
        class="w-24 h-24 border-2 transition-colors rounded-md overflow-hidden"
        :class="
          selectedMotive?.name === motive.name
            ? 'border-8 border-primary'
            : 'border-neutral'
        "
        @click="selectMotive(motive)"
      >
        <img
          :src="motive.img"
          :alt="motive.name"
          loading="lazy"
          class="w-full h-full object-cover"
        />
      </button>
    </div>
  </div>
</template>
