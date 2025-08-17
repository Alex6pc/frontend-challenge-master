<script setup lang="ts">
import { useDesignerStore } from "~/stores/designer";
import type { Color, Motive } from "~/types";

const designerStore = useDesignerStore();

const colors = ref<Color[]>([]);
const motives = ref<Motive[]>([]);

onBeforeMount(async () => {
  try {
    const dataColors = await $fetch<Color[]>("/api/colors");
    const dataMotives = await $fetch<Motive[]>("/api/motives");

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

    colors.value = dataColors;
    motives.value = dataMotives;

    designerStore.initializeDefaults(colors.value, motives.value);

    console.log("onMounted dataMotives", motives.value);
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
});
</script>

<template>
  <!-- grid layout 3 columns responsive -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="col-span-1">
      <!-- left column color picker-->
      <DesignerColorPicker :colors="colors" />
    </div>
    <div class="col-span-1">
      <!-- main column t-shirt design-->
      <DesignerTShirt />
    </div>
    <div class="col-span-1">
      <!-- right column  motives -->
      <DesignerMotivePicker :motives="motives" />
    </div>
  </div>
</template>
