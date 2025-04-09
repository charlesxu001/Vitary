<template>
  <div class="max-w-md mx-auto min-h-screen pb-20 bg-white">
    <!-- 用户信息部分 -->
    <user-profile 
      avatar="C"
      username="Clo"
      :isPremium="true"
    />

    <!-- 菜单列表部分 -->
    <div class="mt-2">
      <menu-section title="Features">
        <menu-item icon="ri-message-2-line" label="Messages" />
        <menu-item icon="ri-line-chart-line" label="Stress graph" />
        <menu-item icon="ri-fire-line" label="logo Move" :premium="true" />
        <menu-item icon="ri-boxing-line" label="Muscle Defense™" :premium="true" />
        <menu-item icon="ri-fire-line" label="Exercise plan" :premium="true" />
        <menu-item icon="ri-bookmark-line" label="Saved lessons" />
        <menu-item icon="ri-history-line" label="History" />
        <menu-item icon="ri-target-line" label="My Commitments" />
        <menu-item icon="ri-settings-3-line" label="Settings" />
      </menu-section>

      <menu-section title="& more">
        <menu-item icon="ri-gift-line" label="Refer a friend!" />
        <menu-item icon="ri-question-line" label="Help" />
      </menu-section>
    </div>
    
    <tab-bar />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TabBar from '../components/TabBar.vue'
import UserProfile from '../components/profile/UserProfile.vue'
import MenuItem from '../components/profile/MenuItem.vue'
import MenuSection from '../components/profile/MenuSection.vue'
</script>