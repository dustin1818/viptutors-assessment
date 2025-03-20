<script setup>
import Navbar from './components/Navbar.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const showNavbar = computed(() => {
  return route.name !== 'login'
})
</script>

<template>
  <div>
    <Navbar v-if="showNavbar" />
    <router-view />
  </div>
</template>
