<template>
  <div class="fixed bottom-24 right-4 z-[9999]">
    <!-- 聊天按钮 -->
    <button @click="toggleChat" 
          class="fixed bottom-24 right-4 z-[9999] w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
    <i class="ri-message-3-line text-2xl text-white"></i>
  </button>

    <!-- 聊天对话框 -->
    <div v-if="isOpen" 
         class="fixed bottom-24 right-4 z-[9999] w-[90vw] max-w-md bg-white rounded-2xl shadow-xl"
         :class="isMinimized ? 'h-16' : 'h-[75vh]'">  <!-- 增加高度到 85vh -->
      <!-- 对话框头部 -->
      <div class="flex items-center justify-between p-4 border-b">
        <div class="flex items-center">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <i class="ri-robot-line text-xl text-primary"></i>
          </div>
          <div class="ml-3">
            <h3 class="font-medium">AI Coach</h3>
            <p class="text-xs text-gray-500">在线</p>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <button @click="toggleMinimize" class="p-2 hover:bg-gray-100 rounded-full">
            <i :class="isMinimized ? 'ri-fullscreen-line' : 'ri-subtract-line'" class="text-gray-500"></i>
          </button>
          <button @click="toggleChat" class="p-2 hover:bg-gray-100 rounded-full">
            <i class="ri-close-line text-gray-500"></i>
          </button>
        </div>
      </div>

      <!-- 对话内容区域 -->
      <div v-show="!isMinimized" class="h-[calc(100%-9rem)] overflow-y-auto p-4">  <!-- 调整内容区域高度 -->
        <div class="space-y-4">
          <div v-for="(message, index) in messages" :key="index"
               :class="['flex', message.isAI ? 'justify-start' : 'justify-end']">
            <div :class="['max-w-[80%] rounded-2xl p-3', 
                         message.isAI ? 'bg-gray-100' : 'bg-primary text-white']">
              {{ message.content }}
            </div>
          </div>
        </div>
      </div>

      <!-- 输入框 -->
      <div v-show="!isMinimized" class="absolute bottom-0 left-0 right-0 p-4 border-t bg-white rounded-b-2xl">
        <div class="flex items-center">
          <input v-model="newMessage" 
                 @keyup.enter="sendMessage"
                 type="text" 
                 placeholder="输入消息..." 
                 class="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary">
          <button @click="sendMessage" 
                  class="ml-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <i class="ri-send-plane-fill text-white"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const isMinimized = ref(false)
const newMessage = ref('')
const messages = ref([
  {
    isAI: true,
    content: '你好！我是你的AI健康教练。我可以帮你制定饮食计划、解答营养问题，以及提供健康建议。有什么我可以帮你的吗？'
  }
])

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (!isOpen.value) {
    isMinimized.value = false
  }
}

const toggleMinimize = () => {
  isMinimized.value = !isMinimized.value
}

const sendMessage = () => {
  if (!newMessage.value.trim()) return
  
  // 添加用户消息
  messages.value.push({
    isAI: false,
    content: newMessage.value
  })
  
  // 模拟AI回复
  setTimeout(() => {
    messages.value.push({
      isAI: true,
      content: '好的，我明白了。让我来帮你分析一下这个问题...'
    })
  }, 1000)
  
  newMessage.value = ''
}
</script>