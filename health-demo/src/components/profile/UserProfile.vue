<template>
  <div class="px-5 pt-6 pb-4 flex items-center">
    <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-xl">
      {{ avatar }}
    </div>
    <div class="ml-3">
      <h1 class="text-xl font-medium">{{ username }}</h1>
      <div class="flex items-center">
        <span class="font-['Pacifico'] text-base">logo</span>
        <span v-if="isPremium" class="ml-2 px-2 py-0.5 text-xs bg-secondary text-gray-700 rounded-full">
          PREMIUM
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  avatar: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  isPremium: {
    type: Boolean,
    default: false
  }
})
</script>