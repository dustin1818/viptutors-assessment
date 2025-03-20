import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const username = ref(localStorage.getItem('username'))
  const password = ref('')
  const isAuthenticated = ref(localStorage.getItem('isAuthenticated') === 'true')

  const setUser = (name) => {
    if (name && name.trim() !== '') {
      username.value = name
      localStorage.setItem('username', name)
    }
  }

  const setAuthenticated = (value) => {
    isAuthenticated.value = value
    localStorage.setItem('isAuthenticated', value)
  }

  const logout = () => {
    isAuthenticated.value = false
    localStorage.removeItem('isAuthenticated')
    password.value = ''
    router.push('/login')
  }

  return {
    username,
    password,
    isAuthenticated,
    setUser,
    setAuthenticated,
    logout,
  }
})
