<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const captcha = ref('')
const router = useRouter()
import { useUserStore } from '../stores/user'

const userStore = useUserStore()
const captchaUrl = ref(
  `https://placehold.co/150x40/CCCCCC/666666?text=CAPTCHA${Math.floor(Math.random() * 1000)}`,
)
const refreshCaptcha = () => {
  captchaUrl.value = `https://placehold.co/150x40/CCCCCC/666666?text=CAPTCHA${Math.floor(Math.random() * 1000)}`
  captcha.value = ''
}
const login = () => {
  if (userStore.username && userStore.password) {
    userStore.setUser(userStore.username)
    userStore.setAuthenticated(true)
    router.push('/')
  }
}
</script>
<template>
  <div
    class="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-300 to-blue-600 p-4"
  >
    <div
      class="bg-blue-50/15 w-full max-w-3xl rounded-xl p-3 shadow-lg backdrop-blur-sm border border-white/20"
    >
      <div class="overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100">
        <div class="flex flex-col md:flex-row">
          <div class="flex justify-center bg-gray-50 p-12 md:w-2/5">
            <img
              src="@/assets/logo.png"
              alt="VIP Tutors Logo"
              class="mx-auto h-12"
              onerror="this.src='https://placehold.co/200x80/FFA500/000000?text=VIP TUTORS.co'"
            />
          </div>

          <div class="p-10 py-16 md:w-3/5">
            <h2 style="font-weight: 500" class="mb-6 text-2xl text-gray-800">
              Sign in to your account
            </h2>

            <form @submit.prevent="login">
              <div class="mb-4">
                <label for="username" class="mb-2 block text-sm text-gray-700">
                  Username / Email Address / Mobile
                </label>
                <input
                  id="username"
                  type="text"
                  v-model="userStore.username"
                  class="w-full rounded-md border border-gray-200 px-3 py-2.5 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:outline-none"
                />
              </div>

              <div class="mb-4">
                <label for="password" class="mb-2 block text-sm text-gray-700"> Password </label>
                <input
                  id="password"
                  type="password"
                  v-model="userStore.password"
                  class="w-full rounded-md border border-gray-200 px-3 py-2.5 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:outline-none"
                />
              </div>

              <div class="mb-4 flex items-center">
                <div class="text-xs">
                  <span class="text-gray-700">Forgot your password?</span>
                  <a href="#" class="ml-1 text-orange-500 font-semibold hover:underline"
                    >Reset Password</a
                  >
                </div>
              </div>

              <div class="mb-5">
                <div class="mb-2 flex items-center">
                  <img
                    :src="captchaUrl"
                    alt="CAPTCHA"
                    class="h-10"
                    onerror="this.src='https://placehold.co/150x40/CCCCCC/666666?text=CAPTCHA'"
                  />
                  <button
                    type="button"
                    @click="refreshCaptcha"
                    class="ml-2 text-gray-500 hover:text-gray-700 transition-all duration-200 transform hover:rotate-180"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-7 w-7 rounded-full bg-gray-200 p-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <label for="captcha" class="mb-2 block text-xs text-gray-700">
                  Enter the characters you see above
                </label>
                <input
                  id="captcha"
                  type="text"
                  v-model="captcha"
                  class="w-full rounded-md border border-gray-200 px-3 py-2.5 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                class="mb-4 w-full rounded-full bg-[#1a237e] py-2.5 text-center text-gray-200 hover:bg-blue-900 focus:outline-none shadow-md hover:shadow-lg transition-all duration-200"
              >
                Login
              </button>

              <div class="text-xs">
                <span class="text-gray-700">Don't have an account?</span>
                <a href="#" class="ml-1 text-orange-500 font-semibold hover:underline"
                  >Create an account</a
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
