<template>
  <div class="menu-item-wrapper">
    <div 
      class="menu-item px-5 py-3.5 flex items-center justify-between cursor-pointer hover:bg-gray-50 active:bg-gray-100"
      @click="$emit('click')"
    >
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
  }
})

defineEmits(['click'])
</script>

<style scoped>
.menu-item {
  transition: all 0.2s ease;
}

.divider {
  height: 1px;
  background-color: #f0f0f0;
}

@media (hover: hover) {
  .menu-item:hover {
    background-color: #f5f5f5;
  }
}

@media (max-width: 640px) {
  .menu-item {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
}
</style>