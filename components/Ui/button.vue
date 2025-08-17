<script setup lang="ts">
withDefaults(
  defineProps<{
    variant: "primary" | "secondary" | "tertiary";
    icon: string;
    tippy?: string;
    iconColor?: string;
    label?: string;
    size: "sm" | "md" | "lg";
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
  }>(),
  {
    icon: "",
    tippy: "",
    iconColor: "white",
    label: "",
    variant: "primary",
    size: "md",
    type: "button",
    onClick: () => {},
    disabled: false,
    loading: false,
  }
);
</script>
<template>
  <div class="flex items-center justify-center">
    <button
      class="` text-white px-4 py-2 rounded-md`"
      :class="[
        `bg-${variant}`,
        size,
        disabled && 'opacity-50 cursor-not-allowed',
        loading && 'opacity-50 cursor-not-allowed',
      ]"
      v-tippy="tippy"
      :disabled="disabled"
      :loading="loading"
      @click="onClick"
    >
      <Faicon :icon="icon" class="mr-2" :style="{ color: iconColor }" />
      {{ label }}
    </button>
  </div>
</template>
