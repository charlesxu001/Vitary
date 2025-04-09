<template>
  <div>
    <div v-if="section" class="px-5 pt-6 pb-2">
      <h2 class="text-base font-medium text-gray-500">{{ section }}</h2>
    </div>
    <div class="menu-item px-5 py-3.5 flex items-center justify-between cursor-pointer">
      <div class="flex items-center">
        <div class="w-6 h-6 flex items-center justify-center">
          <i :class="[icon, 'text-gray-700']"></i>
        </div>
        <span class="ml-4">{{ label }}</span>
      </div>
      <div class="flex items-center">
        <i v-if="premium" class="ri-vip-crown-fill text-secondary mr-1"></i>
        <i class="ri-arrow-right-s-line text-gray-400"></i>
      </div>
    </div>
    <div class="divider mx-5"></div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  premium: {
    type: Boolean,
    default: false
  },
  section: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.menu-item {
  transition: background-color 0.2s;
}
.menu-item:active {
  background-color: #f5f5f5;
}
.divider {
  height: 1px;
  background-color: #f0f0f0;
}
</style>