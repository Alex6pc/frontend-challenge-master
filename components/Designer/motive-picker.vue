<script setup lang="ts">
import type { Motive } from "~/types";

defineProps<{
  motives: Motive[];
}>();

const selectedMotive = ref<Motive | null>(null);

const selectMotive = (motive: Motive) => {
  selectedMotive.value = motive;
};
</script>

<template>
  <div class="bg-white p-6 rounded-lg border border-neutral">
    <h2 class="text-primary-dark text-xl font-bold mb-4">Choose Motive</h2>

    {{ motives }}

    <!-- Motive options -->
    <div class="flex flex-wrap gap-2 mb-4">
      <button
        v-for="motive in motives"
        :key="motive.name"
        class="w-24 h-24 border-2 transition-colors rounded-md overflow-hidden"
        :class="
          selectedMotive?.name === motive.name
            ? 'border-primary'
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

    <!-- Price display -->
    <p class="text-secondary font-semibold">
      Additional: ${{ selectedMotive?.price || 0 }}
      {{ selectedMotive }}
    </p>
  </div>
</template>
