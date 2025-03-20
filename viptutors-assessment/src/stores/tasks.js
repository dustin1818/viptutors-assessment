import { ref } from 'vue'
import { defineStore } from 'pinia'

const initialTasks = []

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref(JSON.parse(localStorage.getItem('tasks') || JSON.stringify(initialTasks)))
  const loading = ref(false)
  const error = ref(null)

  function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks.value))
  }

  function fetchTasks() {
    if (tasks.value.length === 0) {
      tasks.value = initialTasks
      saveTasksToLocalStorage()
    }
  }

  function markTaskAsDone(taskId) {
    const task = tasks.value.find((t) => t.id === taskId)
    if (task) {
      task.completed = true
      saveTasksToLocalStorage()
    }
  }

  function addTask(todoText) {
    console.log('Adding task:', todoText)
    const maxId = tasks.value.reduce((max, task) => Math.max(max, task.id), 0)
    const newTask = {
      id: maxId + 1,
      todo: todoText,
      completed: false,
    }

    tasks.value.unshift(newTask)
    saveTasksToLocalStorage()
    return newTask
  }

  function deleteTask(taskId) {
    const index = tasks.value.findIndex((task) => task.id === taskId)
    if (index !== -1) {
      tasks.value.splice(index, 1)
      saveTasksToLocalStorage()
    }
  }

  return {
    tasks,
    loading,
    error,
    fetchTasks,
    markTaskAsDone,
    addTask,
    deleteTask,
  }
})
