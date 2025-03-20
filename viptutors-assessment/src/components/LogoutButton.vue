<script setup>
import { useUserStore } from '../stores/user'
const userStore = useUserStore()
</script>

<template>
  <button
    @click="userStore.logout"
    class="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 focus:outline-none"
  >
    Logout
  </button>
</template>
