<template>
  <div class="min-h-screen pb-20 bg-white">
    <!-- 顶部导航 -->
    <nav class="fixed top-0 w-full bg-white z-50 px-4 py-3 border-b border-gray-100">
      <h1 class="text-2xl font-semibold">Home</h1>
    </nav>

    <!-- 主要内容区域 -->
    <main class="pt-16 pb-20 px-4">
      <!-- 今日进度 -->
      <section class="mb-8">
        <div class="bg-primary/10 rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-2">今日进度</h2>
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
              <i class="ri-heart-pulse-line text-xl"></i>
            </div>
            <div class="ml-4">
              <p class="text-sm text-gray-600">已完成 2/5 项任务</p>
              <div class="w-48 h-2 bg-gray-200 rounded-full mt-2">
                <div class="w-1/3 h-full bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 推荐计划 -->
      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">推荐计划</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div class="h-40 relative">
              <img src="https://public.readdy.ai/ai/img_res/7097135415f9998ad89c35d14c22e2eb.jpg" 
                   alt="Meal Plan" 
                   class="w-full h-full object-cover">
              <div class="absolute top-3 right-3 bg-secondary px-2 py-1 rounded-full">
                <span class="text-xs font-medium text-gray-700">推荐</span>
              </div>
            </div>
            <div class="p-4">
              <h3 class="font-semibold text-lg">健康饮食计划</h3>
              <p class="text-gray-600 text-sm mt-1">根据您的目标定制的营养方案</p>
              <button class="mt-4 w-full bg-primary text-white py-2 rounded-lg">
                开始计划
              </button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div class="h-40 relative">
              <img src="https://public.readdy.ai/ai/img_res/6db2a9ee5eeb3718879cb737a9af288c.jpg" 
                   alt="Exercise Plan" 
                   class="w-full h-full object-cover">
            </div>
            <div class="p-4">
              <h3 class="font-semibold text-lg">运动训练</h3>
              <p class="text-gray-600 text-sm mt-1">专业的运动指导方案</p>
              <button class="mt-4 w-full bg-primary text-white py-2 rounded-lg">
                查看详情
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 每日任务 -->
      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">每日任务</h2>
        <div class="space-y-4">
          <div v-for="(task, index) in tasks" :key="index" 
               class="bg-white rounded-lg p-4 border border-gray-100 flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <i :class="task.icon" class="text-primary"></i>
              </div>
              <div class="ml-4">
                <h3 class="font-medium">{{ task.title }}</h3>
                <p class="text-sm text-gray-600">{{ task.description }}</p>
              </div>
            </div>
            <button class="text-primary">
              <i class="ri-arrow-right-s-line text-xl"></i>
            </button>
          </div>
        </div>
      </section>
    </main>

    <!-- 将 tab-bar 和 ai-chat-dialog 放在主容器内 -->
    <tab-bar />
    <!-- 确保 AIChatDialog 组件被正确引入和使用 -->
    <AIChatDialog />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TabBar from '../components/TabBar.vue'
import AIChatDialog from '../components/AIChatDialog.vue' // 确保路径正确

const tasks = ref([
  {
    title: '记录早餐',
    description: '记录今天的早餐内容',
    icon: 'ri-restaurant-line'
  },
  {
    title: '运动计划',
    description: '完成今天的运动任务',
    icon: 'ri-run-line'
  },
  {
    title: '喝水提醒',
    description: '已完成 4/8 杯',
    icon: 'ri-cup-line'
  },
  {
    title: '冥想练习',
    description: '15分钟正念冥想',
    icon: 'ri-mental-health-line'
  }
])
</script>

<style scoped>
.task-card {
  transition: all 0.2s ease;
}

.task-card:hover {
  transform: translateX(4px);
}

@media (max-width: 640px) {
  .task-card {
    margin-bottom: 1rem;
  }
}

/* 添加相对定位以确保绝对定位的子元素能够正确定位 */
.relative {
  position: relative;
}
</style>