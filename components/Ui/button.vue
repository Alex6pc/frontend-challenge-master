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
    onClick?: () => void;
    to?: string;
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
    to: "",
  }
);
</script>

<template>
  <!-- If 'to' prop exists, render as NuxtLink, otherwise as button -->
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-flex items-center justify-center gap-2 text-white px-4 py-2 rounded-md"
    :class="[
      `bg-${variant}`,
      size,
      disabled && 'opacity-50 cursor-not-allowed',
      loading && 'opacity-50 cursor-not-allowed',
    ]"
    v-tippy="tippy"
  >
    <Faicon :icon="icon" :style="{ color: iconColor }" />
    {{ label }}
  </NuxtLink>

  <button
    v-else
    class="flex items-center justify-center gap-2 text-white px-4 py-2 rounded-md"
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
    <Faicon :icon="icon" :style="{ color: iconColor }" />
    {{ label }}
  </button>
</template>
