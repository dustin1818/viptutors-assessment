<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close', 'add-task'])

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})

const newTaskText = ref('')

const addTask = () => {
  if (newTaskText.value.trim()) {
    emit('add-task', newTaskText.value.trim())
    newTaskText.value = ''
    emit('close')
  }
}

const closeModal = () => {
  newTaskText.value = ''
  emit('close')
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>

<template>
  <transition name="modal">
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black opacity-50" @click="closeModal"></div>
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md p-6 z-10">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-medium text-gray-900">Add New Task</h3>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-500 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="mb-4">
          <label for="task" class="block text-sm font-medium text-gray-700 mb-2"
            >Task description:</label
          >
          <input
            id="task"
            v-model="newTaskText"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter your task here..."
            @keyup.enter="addTask"
          />
        </div>

        <div class="flex justify-end space-x-3">
          <button
            @click="closeModal"
            class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Cancel
          </button>
          <button
            @click="addTask"
            class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
