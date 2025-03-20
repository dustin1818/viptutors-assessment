<script setup>
import { useRouter } from 'vue-router'
import { useTasksStore } from '../stores/tasks'
import { onMounted, ref } from 'vue'
import TaskCard from '../components/TaskCard.vue'
import { useUserStore } from '../stores/user'
import LogoutButton from '../components/LogoutButton.vue'
import AddTaskModal from '../components/AddTaskModal.vue'

const router = useRouter()
const tasksStore = useTasksStore()
const userStore = useUserStore()
const showAddModal = ref(false)

onMounted(() => {
  tasksStore.fetchTasks()
})

const handleAddTask = (taskText) => {
  tasksStore.addTask(taskText)
}

const openAddModal = () => {
  showAddModal.value = true
}

const closeAddModal = () => {
  showAddModal.value = false
}

const logout = () => {
  userStore.logout()
  router.push('/login')
}
</script>

<template>
  <div class="container mx-auto p-6 relative">
    <h1 class="mb-6 text-3xl font-bold text-gray-800">Welcome {{ userStore.username }}</h1>

    <div class="mb-8">
      <h2 class="text-2xl text-center font-semibold mb-4">All Tasks:</h2>

      <div
        v-if="tasksStore.tasks.length === 0"
        class="flex flex-col items-center justify-center my-16"
      >
        <div class="bg-gray-100 p-8 rounded-lg shadow-md text-center">
          <h2 class="text-2xl font-semibold mb-4 text-gray-700">No Tasks Available</h2>
          <p class="text-gray-500 mb-4">There are no tasks available at the moment.</p>
          <p class="text-gray-500">Check back later or create a new task.</p>
        </div>

        <div class="flex justify-center mt-6">
          <button
            @click="openAddModal"
            class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Create a Task
          </button>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TaskCard v-for="task in tasksStore.tasks" :key="task.id" :taskId="task.id" />
      </div>
    </div>

    <button
      @click="openAddModal"
      class="fixed bottom-8 right-8 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all duration-300 transform hover:scale-110 z-10"
      title="Add New Task"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
    </button>

    <AddTaskModal :show="showAddModal" @close="closeAddModal" @add-task="handleAddTask" />
    <LogoutButton @logout="logout" />
  </div>
</template>
