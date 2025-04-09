<template>
  <div class="rounded-lg overflow-hidden shadow-sm border border-gray-100">
    <div class="relative h-48 bg-blue-50 overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover object-top">
      <div v-if="showPremium" class="absolute top-3 right-3 bg-secondary px-2 py-1 rounded-full flex items-center">
        <i class="ri-vip-crown-fill text-gray-700 mr-1"></i>
        <span class="text-xs font-medium text-gray-700">PREMIUM</span>
      </div>
    </div>
    <div class="p-4">
      <h3 class="font-semibold text-lg">{{ title }}</h3>
      <p class="text-gray-600 text-sm mt-1">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  showPremium: {
    type: Boolean,
    default: false
  }
})
</script>