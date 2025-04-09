<template>
  <div class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 px-2 py-2 flex justify-around">
    <div v-for="(item, index) in tabs" :key="index" 
         class="flex flex-col items-center cursor-pointer"
         @click="handleTabClick(item.route)">
      <div class="w-6 h-6 flex items-center justify-center">
        <i :class="[item.icon, route.path === item.route ? 'text-primary' : 'text-gray-500']"></i>
      </div>
      <span :class="['text-xs mt-1', route.path === item.route ? 'text-primary' : 'text-gray-500']">
        {{ item.label }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const tabs = [
  { label: 'Home', icon: 'ri-home-5-line', route: '/' },
  { label: 'Today', icon: 'ri-calendar-check-line', route: '/today' },
  { label: 'Stats', icon: 'ri-book-open-line', route: '/stats' },
  { label: 'Health', icon: 'ri-heart-pulse-line', route: '/health' },
  { label: 'Profile', icon: 'ri-user-line', route: '/profile' }
]

const handleTabClick = (path) => {
  router.push(path)
}
</script>