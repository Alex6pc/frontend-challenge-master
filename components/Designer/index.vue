<script setup lang="ts">
import { useDesignerStore } from "~/stores/designer";
import type { Color, Motive } from "~/types";

const designerStore = useDesignerStore();

async function loadDesignerData() {
  if (designerStore.isDataLoaded) {
    return;
  }

  try {
    const [dataColors, dataMotives] = await Promise.all([
      $fetch<Color[]>("/api/colors"),
      $fetch<Motive[]>("/api/motives"),
    ]);

    // Replace API fetch with static images
    // const dataMotives: Motive[] = [
    //   {
    //     name: "Moon & Tree",
    //     img: "/images/image1.jpg",
    //     price: 15.99
    //   },
    //   {
    //     name: "Mountain Sunset",
    //     img: "/images/image2.jpg",
    //     price: 18.50
    //   },
    //   {
    //     name: "Autumn Road",
    //     img: "/images/image3.jpg",
    //     price: 22.00
    //   },
    //   {
    //     name: "Northern Lights",
    //     img: "/images/image4.jpg",
    //     price: 25.99
    //   }
    // ];

    designerStore.colors = dataColors;
    designerStore.motives = dataMotives;
    designerStore.isDataLoaded = true;

    // Initialize defaults only if not already set
    if (!designerStore.selectedColor && dataColors.length > 0) {
      console.log("initializeDefaults");
      designerStore.initializeDefaults();
    }
  } catch (error) {
    console.error("Error fetching designer data:", error);
  }
}

onBeforeMount(async () => {
  await loadDesignerData();
});
</script>

<template>
  {{ designerStore.isDataLoaded }}
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="col-span-1">
      <!-- left column color picker-->
      <DesignerColorPicker :colors="designerStore.colors" />
    </div>
    <div class="col-span-1">
      <!-- main column t-shirt design-->
      <DesignerTShirt />
    </div>
    <div class="col-span-1">
      <!-- right column  motives -->
      <DesignerMotivePicker :motives="designerStore.motives" />
    </div>
  </div>
</template>
