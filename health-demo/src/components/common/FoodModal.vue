<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black bg-opacity-50" @click="$emit('close')"></div>
    <div class="relative bg-white rounded-lg w-[90%] max-w-md">
      <!-- 添加处理状态遮罩 -->
      <div v-if="processingStatus.show" 
           class="absolute inset-0 bg-white bg-opacity-90 z-10 flex flex-col items-center justify-center">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
        <p class="mt-4 text-gray-600">{{ processingStatus.message }}</p>
      </div>

      <!-- 其他内容保持不变 -->
      <div class="p-4 border-b">
        <h3 class="text-lg font-semibold">添加食物</h3>
      </div>
      
      <div class="p-4">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">食物名称</label>
          <input v-model="form.name" type="text" 
                 class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        </div>
        
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">卡路里</label>
          <input v-model="form.calories" type="text" 
                 class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">标签</label>
          <input v-model="form.tags" type="text" placeholder="用逗号分隔多个标签"
                 class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">图片</label>
          <div class="flex items-center space-x-4">
            <button @click="handleCamera" class="flex items-center px-4 py-2 border rounded-lg">
              <i class="ri-camera-line mr-2"></i>
              拍照
            </button>
            <button @click="handleUpload" class="flex items-center px-4 py-2 border rounded-lg">
              <i class="ri-upload-line mr-2"></i>
              上传
            </button>
          </div>
          <input ref="fileInput" type="file" accept="image/*" class="hidden" @change="handleFileChange">
          <div v-if="form.image" class="mt-4">
            <img :src="form.image" class="w-32 h-32 object-cover rounded-lg">
          </div>
        </div>
      </div>

      <div class="p-4 border-t flex justify-end space-x-4">
        <button @click="$emit('close')" 
                class="px-4 py-2 text-gray-600 hover:text-gray-800">
          取消
        </button>
        <button @click="handleConfirm" 
                class="px-4 py-2 bg-primary text-white rounded-lg">
          确认
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  show: Boolean,
  mealTime: String
})

const emit = defineEmits(['close', 'confirm'])

const fileInput = ref(null)
const form = reactive({
  name: '',
  calories: '',
  tags: '',
  image: ''
})

const handleCamera = () => {
  fileInput.value.click()
}

const handleUpload = () => {
  fileInput.value.click()
}

const isAnalyzing = ref(false)

// 模拟食物识别数据
const mockFoodAnalysis = {
  '早餐类': [
    { name: '全麦面包', calories: '180', tags: ['全谷物', '高纤维'] },
    { name: '牛油果吐司', calories: '220', tags: ['健康脂肪', '高营养'] },
    { name: '燕麦粥', calories: '150', tags: ['低脂', '高纤维'] }
  ],
  '午餐类': [
    { name: '鸡胸肉沙拉', calories: '320', tags: ['高蛋白', '低脂'] },
    { name: '三文鱼便当', calories: '450', tags: ['omega-3', '优质蛋白'] },
    { name: '藜麦碗', calories: '380', tags: ['全谷物', '营养均衡'] }
  ],
  '零食类': [
    { name: '水果沙拉', calories: '120', tags: ['维生素', '低热量'] },
    { name: '坚果混合', calories: '180', tags: ['健康脂肪', '高蛋白'] }
  ]
}

// 处理状态对象
const processingStatus = reactive({
  show: false,
  message: ''
})

const handleFileChange = async (event) => {
  const file = event.target.files[0]
  if (file) {
    try {
      // 开始上传
      processingStatus.show = true
      processingStatus.message = '正在上传图片...'
      
      // 模拟上传过程（2秒）
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // 读取文件
      const imageUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = (e) => resolve(e.target.result)
        reader.onerror = reject
        reader.readAsDataURL(file)
      })
      
      // 开始分析
      processingStatus.message = '正在分析食物图片...'
      
      // 模拟分析过程（4-6秒随机）
      await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 4000))
      
      // 随机选择食物数据
      const categories = Object.keys(mockFoodAnalysis)
      const randomCategory = categories[Math.floor(Math.random() * categories.length)]
      const foods = mockFoodAnalysis[randomCategory]
      const randomFood = foods[Math.floor(Math.random() * foods.length)]
      
      // 填充分析结果
      form.image = imageUrl
      form.name = randomFood.name
      form.calories = randomFood.calories
      form.tags = randomFood.tags.join(',')
      
      // 完成处理
      processingStatus.show = false
      processingStatus.message = ''
      
    } catch (error) {
      processingStatus.message = '处理失败，请重试'
      setTimeout(() => {
        processingStatus.show = false
        processingStatus.message = ''
      }, 2000)
    }
  }
}

const handleConfirm = () => {
  emit('confirm', {
    name: form.name,
    calories: `${form.calories} 卡路里`,
    image: form.image,
    tags: form.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
  })
  resetForm()
}

const resetForm = () => {
  form.name = ''
  form.calories = ''
  form.tags = ''
  form.image = ''
}
</script>