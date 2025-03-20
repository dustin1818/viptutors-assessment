<script setup>
import { useTasksStore } from '../stores/tasks'

const props = defineProps({
  taskId: {
    type: Number,
    required: true,
  },
})

const tasksStore = useTasksStore()

const getTask = () => {
  return tasksStore.tasks.find((task) => task.id === props.taskId)
}

const markAsDone = () => {
  tasksStore.markTaskAsDone(props.taskId)
}

const deleteTask = () => {
  tasksStore.deleteTask(props.taskId)
}
</script>

<template>
  <div
    v-if="getTask()"
    class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
  >
    <div class="p-5">
      <div class="flex items-center justify-between">
        <h3
          class="text-lg font-medium"
          :class="{
            'text-gray-400 line-through': getTask().completed,
            'text-gray-800': !getTask().completed,
          }"
        >
          {{ getTask().todo }}
        </h3>

        <span
          class="px-2 py-1 text-xs rounded-full"
          :class="getTask().completed ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'"
        >
          {{ getTask().completed ? 'Completed' : 'Pending' }}
        </span>
      </div>

      <div class="mt-3 flex justify-end space-x-2">
        <button
          v-if="!getTask().completed"
          @click="markAsDone"
          class="px-4 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 focus:outline-none transition duration-300 ease-in-out"
        >
          Mark as Done
        </button>

        <button
          @click="deleteTask"
          class="px-4 py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 focus:outline-none transition duration-300 ease-in-out"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
