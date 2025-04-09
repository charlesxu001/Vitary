<template>
  <div class="min-h-screen pb-20 bg-white">
    <!-- 顶部导航 -->
    <nav class="fixed top-0 w-full bg-white z-50 px-4 py-3 border-b border-gray-100">
      <h1 class="text-2xl font-semibold">Today</h1>
    </nav>

    <!-- 主要内容区域 -->
    <main class="pt-16 pb-20 px-4">
      <!-- Meal Plan Section -->
      <section class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold">Meal Plan</h2>
          <button class="text-primary text-sm">查看全部</button>
        </div>
        
        <!-- 周历显示 -->
        <div class="flex justify-between mb-6 overflow-x-auto">
          <div v-for="day in weekDays" :key="day.date" 
               :class="['flex flex-col items-center p-2 min-w-[60px] cursor-pointer', 
                        selectedDate === day.date ? 'text-primary' : 'text-gray-600']"
               @click="handleDateSelect(day.date)">
            <span class="text-sm">{{ day.name }}</span>
            <span class="text-lg font-semibold mt-1">{{ day.date }}</span>
            <div v-if="selectedDate === day.date" class="w-2 h-2 bg-primary rounded-full mt-1"></div>
          </div>
        </div>

        <!-- 膳食时间轴 -->
        <div class="space-y-6">
          <div v-for="meal in meals" :key="meal.time" class="relative">
            <div class="flex items-center mb-4">
              <div class="w-2 h-2 bg-primary rounded-full"></div>
              <div class="ml-4">
                <span class="text-sm text-gray-600">{{ meal.time }}</span>
                <h3 class="font-medium">{{ meal.title }}</h3>
              </div>
            </div>
            
            <!-- 膳食卡片 -->
            <div class="ml-6 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div v-if="meal.food" class="flex items-center p-4">
                <img :src="meal.food.image" :alt="meal.food.name" 
                     class="w-20 h-20 rounded-lg object-cover">
                <div class="ml-4">
                  <h4 class="font-medium">{{ meal.food.name }}</h4>
                  <p class="text-sm text-gray-600 mt-1">{{ meal.food.calories }}</p>
                  <div class="flex items-center mt-2">
                    <span v-for="tag in meal.food.tags" :key="tag"
                          class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full mr-2">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
              <div v-else class="p-4">
                <button class="w-full flex items-center justify-center text-primary"
                        @click="openModal(meal.time)">
                  <i class="ri-add-line mr-2"></i>
                  <span>添加食物</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- 底部导航 -->
    <tab-bar />

    <!-- 添加 Modal 组件到这里 -->
    <food-modal
      :show="showModal"
      :meal-time="currentMealTime"
      @close="closeModal"
      @confirm="handleAddFood"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TabBar from '../components/TabBar.vue'
import FoodModal from '../components/common/FoodModal.vue'

const selectedDate = ref('14')
const showModal = ref(false)
const currentMealTime = ref('')

const weekDays = ref([
  { name: '周一', date: '12', isToday: false },
  { name: '周二', date: '13', isToday: false },
  { name: '周三', date: '14', isToday: true },
  { name: '周四', date: '15', isToday: false },
  { name: '周五', date: '16', isToday: false },
  { name: '周六', date: '17', isToday: false },
  { name: '周日', date: '18', isToday: false },
])

// 模拟不同日期的膳食数据
const mealsData = {
  '12': [
    {
      time: '8:00',
      title: '早餐',
      food: {
        name: '燕麦粥配蓝莓',
        calories: '280 卡路里',
        image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['高纤维', '抗氧化']
      }
    },
    {
      time: '12:00',
      title: '午餐',
      food: {
        name: '藜麦鸡肉沙拉',
        calories: '420 卡路里',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['高蛋白', '全谷物']
      }
    },
    {
      time: '15:00',
      title: '下午茶',
      food: null
    },
    {
      time: '18:00',
      title: '晚餐',
      food: {
        name: '烤虾配藜麦',
        calories: '350 卡路里',
        image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['高蛋白', '低脂']
      }
    }
  ],
  '13': [
    {
      time: '8:00',
      title: '早餐',
      food: {
        name: '希腊酸奶配坚果',
        calories: '310 卡路里',
        image: 'https://images.unsplash.com/photo-1542691457-cbe4df041eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['高蛋白', '健康脂肪']
      }
    },
    {
      time: '12:00',
      title: '午餐',
      food: null
    },
    {
      time: '15:00',
      title: '下午茶',
      food: {
        name: '水果沙拉',
        calories: '150 卡路里',
        image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['维生素', '低热量']
      }
    },
    {
      time: '18:00',
      title: '晚餐',
      food: {
        name: '意大利烤鸡',
        calories: '400 卡路里',
        image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['高蛋白', '地中海风味']
      }
    }
  ],
  '14': [
    {
      time: '8:00',
      title: '早餐',
      food: {
        name: '全麦吐司配牛油果',
        calories: '320 卡路里',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['高蛋白', '健康脂肪']
      }
    },
    {
      time: '12:00',
      title: '午餐',
      food: {
        name: '鸡胸肉沙拉',
        calories: '450 卡路里',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['高蛋白', '低碳水']
      }
    },
    {
      time: '15:00',
      title: '下午茶',
      food: null
    },
    {
      time: '18:00',
      title: '晚餐',
      food: {
        name: '三文鱼配西兰花',
        calories: '380 卡路里',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['富含omega-3', '低卡路里']
      }
    }
  ],
  '15': [
    {
      time: '8:00',
      title: '早餐',
      food: {
        name: '蛋白质奶昔',
        calories: '290 卡路里',
        image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['高蛋白', '低糖']
      }
    },
    {
      time: '12:00',
      title: '午餐',
      food: {
        name: '墨西哥鸡肉卷',
        calories: '480 卡路里',
        image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['高蛋白', '全谷物']
      }
    },
    {
      time: '15:00',
      title: '下午茶',
      food: {
        name: '杏仁果',
        calories: '160 卡路里',
        image: 'https://images.unsplash.com/photo-1536591375667-f344781c3df7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['健康脂肪', '维生素E']
      }
    },
    {
      time: '18:00',
      title: '晚餐',
      food: null
    }
  ],
  '16': [
    {
      time: '8:00',
      title: '早餐',
      food: {
        name: '水果麦片',
        calories: '340 卡路里',
        image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['高纤维', '维生素']
      }
    },
    {
      time: '12:00',
      title: '午餐',
      food: {
        name: '日式便当',
        calories: '460 卡路里',
        image: 'https://images.unsplash.com/photo-1569058242567-93de969c6fa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['均衡营养', '低脂']
      }
    },
    {
      time: '15:00',
      title: '下午茶',
      food: null
    },
    {
      time: '18:00',
      title: '晚餐',
      food: {
        name: '意大利面配虾仁',
        calories: '420 卡路里',
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['高蛋白', '地中海风味']
      }
    }
  ],
  '17': [
    {
      time: '8:00',
      title: '早餐',
      food: null
    },
    {
      time: '12:00',
      title: '午餐',
      food: {
        name: '牛油果三明治',
        calories: '380 卡路里',
        image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['健康脂肪', '全谷物']
      }
    },
    {
      time: '15:00',
      title: '下午茶',
      food: {
        name: '蓝莓松饼',
        calories: '220 卡路里',
        image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['低糖', '抗氧化']
      }
    },
    {
      time: '18:00',
      title: '晚餐',
      food: {
        name: '烤鸡配蔬菜',
        calories: '410 卡路里',
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['高蛋白', '低脂']
      }
    }
  ],
  '18': [
    {
      time: '8:00',
      title: '早餐',
      food: {
        name: '蔬菜蛋卷',
        calories: '300 卡路里',
        image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['高蛋白', '低碳水']
      }
    },
    {
      time: '12:00',
      title: '午餐',
      food: {
        name: '藜麦鱼肉碗',
        calories: '440 卡路里',
        image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['omega-3', '全谷物']
      }
    },
    {
      time: '15:00',
      title: '下午茶',
      food: null
    },
    {
      time: '18:00',
      title: '晚餐',
      food: {
        name: '素食沙拉',
        calories: '320 卡路里',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['低卡路里', '高纤维']
      }
    }
  ]
}

// 根据选择的日期显示对应的膳食数据
const meals = computed(() => {
  return mealsData[selectedDate.value] || mealsData['14']
})

const handleDateSelect = (date) => {
  selectedDate.value = date
}

const openModal = (time) => {
  currentMealTime.value = time
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  currentMealTime.value = ''
}

const handleAddFood = (foodData) => {
  const currentDate = selectedDate.value
  const mealIndex = mealsData[currentDate].findIndex(meal => meal.time === currentMealTime.value)
  
  if (mealIndex !== -1) {
    mealsData[currentDate][mealIndex].food = foodData
  }
  
  closeModal()
}
</script>

<style scoped>
.meal-timeline::before {
  content: '';
  position: absolute;
  left: 4px;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: #e5e7eb;
}
</style>