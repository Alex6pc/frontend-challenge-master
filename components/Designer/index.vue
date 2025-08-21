<script setup lang="ts">
import { useDesignerStore } from "~/stores/designer";

const designerStore = useDesignerStore();

// Initialize only once
onMounted(() => {
  if (designerStore.isDataLoaded && !designerStore.selectedColor) {
    designerStore.initializeDefaults();
  }
});

const designerData = computed(() => {
  return {
    isLoaded: designerStore.isDataLoaded,
    colors: designerStore.colors || [],
    motives: designerStore.motives || [],
  };
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="col-span-1">
      <!-- left column color picker-->
      <DesignerColorPicker :colors="designerData.colors" />
    </div>
    <div class="col-span-1">
      <!-- main column t-shirt design-->
      <DesignerTShirt />
    </div>
    <div class="col-span-1">
      <!-- right column  motives -->
      <DesignerMotivePicker :motives="designerData.motives" />
    </div>
  </div>
</template>
