<script setup>
import { useRoute } from 'vue-router'
import { useUserStore } from '../stores/user'

const route = useRoute()
const userStore = useUserStore()
</script>

<template>
  <nav class="bg-gray-800 text-white mb-8">
    <div class="container mx-auto px-6 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <router-link to="/" class="font-bold text-xl mr-6">VIP Tutors</router-link>
          <div class="flex space-x-4">
            <router-link
              to="/"
              class="py-2 px-3 rounded transition"
              :class="
                route.name === 'home'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              "
            >
              All Tasks
            </router-link>
            <router-link
              to="/completed"
              class="py-2 px-3 rounded transition"
              :class="
                route.name === 'completed'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              "
            >
              Completed Tasks
            </router-link>
          </div>
        </div>

        <div class="flex items-center space-x-3">
          <span class="text-gray-300 hidden md:block">{{ userStore.username }}</span>
          <img
            src="https://i.pravatar.cc/300"
            alt="User Avatar"
            class="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer hover:border-white transition-colors"
            title="User Profile"
          />
        </div>
      </div>
    </div>
  </nav>
</template>
