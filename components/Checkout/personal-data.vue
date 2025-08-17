<script setup lang="ts">
import { ref } from "vue";
import { useNavigation } from "~/composables/useNavigation";
import type { PersonalData } from "~/types";

const { goToOrderSuccess } = useNavigation();

const personalData = ref<PersonalData>({
  name: "",
  address: "",
});

const errors = ref<{ name?: string[]; address?: string[] }>({});
const isSubmitting = ref(false);

const submitOrder = async () => {
  isSubmitting.value = true;
  errors.value = {};

  try {
    const response = await $fetch<{
      success: boolean;
    }>("/api/order", {
      method: "POST",
      body: {
        name: personalData.value.name,
        address: personalData.value.address,
      },
    });

    if (response.success) {
      goToOrderSuccess();
    }
  } catch (error: any) {
    console.error("Order submission failed:", error);

    if (error.data) {
      errors.value = error.data.errors;
    } else {
      errors.value = {
        name: ["An unexpected error occurred. Please try again."],
      };
    }
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="col-span-1">
    <div class="bg-white p-6 rounded-lg border border-gray-200">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Personal Data</h2>

      <form @submit.prevent="submitOrder" class="space-y-4">
        <!-- Name Field -->
        <div>
          <label
            for="name"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            v-model="personalData.name"
            type="text"
            placeholder="Enter your Name"
            :class="[
              'w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent',
              errors.name
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-primary',
            ]"
            required
          />

          <div v-if="errors.name" class="mt-1">
            <p
              v-for="error in errors.name"
              :key="error"
              class="text-sm text-red-600"
            >
              {{ error }}
            </p>
          </div>
        </div>

        <!-- Address Field -->
        <div>
          <label
            for="address"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Address
          </label>
          <input
            id="address"
            v-model="personalData.address"
            type="text"
            placeholder="Enter your Address"
            :class="[
              'w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent',
              errors.address
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-primary',
            ]"
            required
          />

          <div v-if="errors.address" class="mt-1">
            <p
              v-for="error in errors.address"
              :key="error"
              class="text-sm text-red-600"
            >
              {{ error }}
            </p>
          </div>
        </div>

        <!-- Buy Button -->
        <div class="pt-4">
          <UiButton
            variant="primary"
            size="lg"
            icon="cart-shopping"
            :label="isSubmitting ? 'Processing...' : 'Buy'"
            :disabled="isSubmitting"
            @click="submitOrder"
          />
        </div>
      </form>
    </div>
  </div>
</template>
