<template>
  <div class="min-h-screen pb-20 bg-white">
    <!-- 顶部导航 -->
    <nav class="fixed top-0 w-full bg-white z-50">
      <div class="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div class="flex items-center space-x-4">
          <button v-for="tab in tabs" 
                  :key="tab.id"
                  @click="activeTab = tab.id"
                  :class="['text-lg font-medium px-2 py-1 rounded-full', 
                          activeTab === tab.id ? 'text-primary' : 'text-gray-500']">
            {{ tab.name }}
          </button>
        </div>
        <div class="flex items-center">
          <span class="font-['Pacifico'] text-base">logo</span>
          <span class="ml-2 px-2 py-0.5 text-xs bg-secondary text-gray-700 rounded-full">PREMIUM</span>
        </div>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <main class="pt-16 pb-20">
      <!-- Trends Tab -->
      <div v-if="activeTab === 'trends'" class="px-4">
        <!-- Coach Feedback -->
        <div class="bg-blue-50 rounded-xl p-4 mb-6">
          <div class="flex items-start">
            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <i class="ri-user-smile-line text-xl text-primary"></i>
            </div>
            <div class="ml-4">
              <h3 class="font-medium text-gray-900">Coach Emma</h3>
              <p class="text-gray-600 mt-1">Great job on your progress this week! You're down 1.2 lbs and completed 4 workouts. Remember, consistency is key! 💪</p>
            </div>
          </div>
        </div>

        <!-- Hydration Tip -->
        <div class="bg-green-50 rounded-xl p-4 mb-6">
          <div class="flex items-start">
            <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <i class="ri-drop-line text-xl text-green-500"></i>
            </div>
            <div class="ml-4">
              <h3 class="font-medium text-gray-900">Hydration Tip</h3>
              <p class="text-gray-600 mt-1">You're at 5 cups of water today. Try to reach 8 cups for optimal hydration and metabolism support! 💧</p>
            </div>
          </div>
        </div>

        <!-- Weight Progress -->
        <div class="mb-8">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-semibold">Weight Progress</h2>
            <div class="flex items-center text-sm text-gray-500">
              <span class="font-medium text-green-500">-2.4kg</span>
              <span class="ml-1">This Month</span>
            </div>
          </div>
          <div class="bg-white rounded-xl p-4 shadow-sm">
            <div class="h-64">
              <weight-chart />
            </div>
          </div>
        </div>

        <!-- Daily Nutrition -->
        <div class="grid grid-cols-2 gap-4 mb-8">
          <!-- 卡路里 -->
          <div class="bg-white rounded-xl p-4 shadow-sm">
            <div class="flex items-start mb-3">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <i class="ri-fire-line text-xl text-blue-500"></i>
              </div>
              <div class="ml-3">
                <h3 class="text-base font-medium">Calories</h3>
                <div class="flex items-baseline mt-1">
                  <span class="text-2xl font-semibold">1,450</span>
                  <span class="text-gray-400 ml-1">/ 1,800</span>
                </div>
              </div>
            </div>
            <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-blue-500 rounded-full" style="width: 80%"></div>
            </div>
          </div>

          <!-- 蛋白质 -->
          <div class="bg-white rounded-xl p-4 shadow-sm">
            <div class="flex items-start mb-3">
              <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <i class="ri-leaf-line text-xl text-green-500"></i>
              </div>
              <div class="ml-3">
                <h3 class="text-base font-medium">Protein</h3>
                <div class="flex items-baseline mt-1">
                  <span class="text-2xl font-semibold">65g</span>
                  <span class="text-gray-400 ml-1">/ 90g</span>
                </div>
              </div>
            </div>
            <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-green-500 rounded-full" style="width: 72%"></div>
            </div>
          </div>
        </div>

        <!-- Activity Stats -->
        <div class="grid grid-cols-3 gap-4 mb-8">
          <div class="bg-white rounded-xl p-4 shadow-sm text-center">
            <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <i class="ri-footprint-line text-purple-500"></i>
            </div>
            <div class="text-2xl font-semibold">7,842</div>
            <div class="text-sm text-gray-500">Steps</div>
          </div>

          <div class="bg-white rounded-xl p-4 shadow-sm text-center">
            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <i class="ri-time-line text-blue-500"></i>
            </div>
            <div class="text-2xl font-semibold">45</div>
            <div class="text-sm text-gray-500">Active min</div>
          </div>

          <div class="bg-white rounded-xl p-4 shadow-sm text-center">
            <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <i class="ri-drop-line text-orange-500"></i>
            </div>
            <div class="text-2xl font-semibold">5</div>
            <div class="text-sm text-gray-500">Water cups</div>
          </div>
        </div>

        <!-- Weekly Summary -->
        <div class="bg-white rounded-xl p-4 shadow-sm mb-8">
          <h2 class="text-xl font-semibold mb-4">Weekly Summary</h2>
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Average daily calories</span>
              <span class="font-semibold">1,620</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Workouts completed</span>
              <span class="font-semibold">4 / 5</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Weight change</span>
              <span class="text-green-500 font-semibold">-1.2 lbs</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Lessons completed</span>
              <span class="font-semibold">3 / 5</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Course Map Tab -->
      <div v-else class="px-4">
        <div class="relative">
          <div class="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>
          
          <div class="space-y-8">
            <!-- Course Item 1 -->
            <div class="relative flex items-center">
              <div class="absolute left-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-white"></div>
              <div class="ml-16 bg-white rounded-xl p-4 shadow-sm flex-1">
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i class="ri-plant-line text-2xl text-green-500"></i>
                  </div>
                  <div class="ml-4">
                    <h3 class="font-medium text-lg">Feel full on fewer calories</h3>
                    <div class="flex space-x-4 mt-2">
                      <i class="ri-book-line text-gray-500"></i>
                      <i class="ri-scales-line text-gray-500"></i>
                      <i class="ri-restaurant-line text-gray-500"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Course Item 2 -->
            <div class="relative flex items-center">
              <div class="absolute left-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-white"></div>
              <div class="ml-16 bg-white rounded-xl p-4 shadow-sm flex-1">
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i class="ri-flag-line text-2xl text-blue-500"></i>
                  </div>
                  <div class="ml-4">
                    <h3 class="font-medium text-lg">Success beyond the scale</h3>
                    <div class="flex space-x-4 mt-2">
                      <i class="ri-user-line text-gray-500"></i>
                      <i class="ri-pencil-line text-gray-500"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Course Item 3 -->
            <div class="relative flex items-center">
              <div class="absolute left-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-white"></div>
              <div class="ml-16 bg-white rounded-xl p-4 shadow-sm flex-1">
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <i class="ri-brain-line text-2xl text-pink-500"></i>
                  </div>
                  <div class="ml-4">
                    <h3 class="font-medium text-lg">The psychology of habits</h3>
                    <div class="flex space-x-4 mt-2">
                      <i class="ri-flash-line text-gray-500"></i>
                      <i class="ri-mental-health-line text-gray-500"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部导航 -->
    <tab-bar />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TabBar from '../components/TabBar.vue'
import WeightChart from '../components/WeightChart.vue'

const tabs = [
  { id: 'trends', name: 'Trends' },
  { id: 'course-map', name: 'Course Map' }
]

const activeTab = ref('trends')
</script>