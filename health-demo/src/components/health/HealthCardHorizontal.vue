<template>
  <div class="w-64 rounded-lg overflow-hidden shadow-sm border border-gray-100">
    <div class="h-40 bg-green-50 flex items-center justify-center">
      <img :src="image" :alt="title" class="w-full h-full object-cover">
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
  image: String
})
</script>