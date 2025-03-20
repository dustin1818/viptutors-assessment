<script setup>
import { useRouter } from 'vue-router'
import { useTasksStore } from '../stores/tasks'
import { onMounted, computed } from 'vue'
import TaskCard from '../components/TaskCard.vue'
import { useUserStore } from '../stores/user'
import LogoutButton from '../components/LogoutButton.vue'

const router = useRouter()
const tasksStore = useTasksStore()
const userStore = useUserStore()

const completedTasks = computed(() => {
  return tasksStore.tasks.filter((task) => task.completed)
})

onMounted(() => {
  tasksStore.fetchTasks()
})

const logout = () => {
  userStore.logout()
  router.push('/login')
}
</script>

<template>
  <div class="container mx-auto p-6">
    <h1 class="mb-6 text-3xl font-bold text-gray-800">Welcome {{ userStore.username }}</h1>

    <div class="mb-8">
      <h2 class="text-2xl text-center font-semibold mb-4">Completed Tasks:</h2>

      <div
        v-if="completedTasks.length === 0"
        class="flex flex-col items-center justify-center my-16"
      >
        <div class="bg-gray-100 p-8 rounded-lg shadow-md text-center">
          <h2 class="text-2xl font-semibold mb-4 text-gray-700">No Completed Tasks</h2>
          <p class="text-gray-500 mb-4">You haven't completed any tasks yet.</p>
          <p class="text-gray-500">Complete some tasks to see them here.</p>
        </div>

        <div class="flex justify-center mt-6">
          <button
            @click="router.push('/')"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Go to Home
          </button>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TaskCard v-for="task in completedTasks" :key="task.id" :taskId="task.id" />
      </div>
    </div>

    <LogoutButton @logout="logout" />
  </div>
</template>
