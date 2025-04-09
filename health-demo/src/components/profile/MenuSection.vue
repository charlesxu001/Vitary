<template>
  <div class="menu-section">
    <div v-if="title" class="px-5 pt-6 pb-2">
      <h2 class="text-base font-medium text-gray-500">{{ title }}</h2>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>