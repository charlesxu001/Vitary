<template>
  <div class="min-h-screen pb-20 bg-white">
    <!-- Eat Healthier Section -->
    <section class="mb-10 px-4">
      <h2 class="text-3xl font-semibold mb-2">Eat healthier</h2>
      <p class="text-gray-600 mb-6">Make healthy choices now, and in the future</p>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <health-card
          title="Weekly Meal Plan"
          description="Personalized plans based on your goals"
          image="https://images.unsplash.com/photo-1547592180-85f173990554"
          class="col-span-2 sm:col-span-1"
        />
        <health-card
          title="Recipes"
          description="Over 3,000 healthy meals"
          image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
        />
        <health-card
          title="Premium meal plans"
          description="Easy, smart ways to eat"
          image="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd"
        />
      </div>
    </section>

    <!-- Move Your Body Section -->
    <section class="mb-10 px-4">
      <h2 class="text-3xl font-semibold mb-2">Move your body</h2>
      <p class="text-gray-600 mb-6">Find movement that feels good</p>
      <div class="grid grid-cols-1 gap-4">
        <health-card-large
          title="Muscle Defense™"
          description="Specially created for muscle maintenance"
          image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
          :premium="true"
        />
        <health-card-large
          title="Noom Move"
          description="Browse all workouts and programs"
          image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
        />
      </div>
    </section>

    <!-- Mindful Eating Section -->
    <section class="mb-10 px-4">
      <h2 class="text-3xl font-semibold mb-2">Mindful eating</h2>
      <p class="text-gray-600 mb-6">Build a better relationship with food</p>
      <div class="grid grid-cols-2 gap-4">
        <health-card
          title="Food Psychology"
          description="Learn the science behind your cravings"
          image="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
        />
        <health-card
          title="Emotional Eating"
          description="Understand and manage your triggers"
          image="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
        />
      </div>
    </section>

    <!-- Manage Side Effects Section -->
    <section class="mb-10 px-4">
      <h2 class="text-3xl font-semibold mb-2">Manage side effects</h2>
      <p class="text-gray-600 mb-6">Support for your medication journey</p>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <health-card
          title="Sleep Better"
          description="Tips for quality rest"
          image="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55"
        />
        <health-card
          title="Reduce Stress"
          description="Effective stress management"
          image="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
        />
        <health-card
          title="Energy Boost"
          description="Natural ways to stay energized"
          image="https://images.unsplash.com/photo-1565071559227-20ab25b7685e"
          class="col-span-2 sm:col-span-1"
        />
      </div>
    </section>

    <!-- Create Inner Calm Section -->
    <section class="mb-10 px-4">
      <h2 class="text-3xl font-semibold mb-2">Create inner calm</h2>
      <p class="text-gray-600 mb-6">Find your balance and peace</p>
      <div class="grid grid-cols-1 gap-4">
        <health-card-large
          title="Meditation Guide"
          description="Daily practices for mental wellness"
          image="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
          :premium="true"
        />
        <health-card-large
          title="Stress Relief"
          description="Techniques for everyday calm"
          image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
        />
      </div>
    </section>

    <tab-bar />
  </div>
</template>

<script setup>
import TabBar from '../components/TabBar.vue'
import HealthCard from '../components/health/HealthCard.vue'
import HealthCardLarge from '../components/health/HealthCardLarge.vue'
</script>