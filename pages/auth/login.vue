<script setup lang="ts">
definePageMeta({ layout: 'auth' })
useHead({ title: 'Login — Automobile.lk' })

const authStore = useAuthStore()
const router = useRouter()
const uiStore = useUiStore()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)

const handleLogin = async () => {
  if (!email.value || !password.value) {
    uiStore.addToast('Please fill in all fields', 'warning')
    return
  }
  loading.value = true
  const result = await authStore.login(email.value, password.value)
  loading.value = false
  if (result.success) {
    uiStore.addToast('Welcome back!', 'success')
    router.push('/account')
  } else {
    uiStore.addToast(result.error || 'Login failed', 'error')
  }
}
</script>

<template>
  <div class="w-full max-w-md">
    <div class="bg-surface border border-border rounded-2xl p-8 shadow-2xl">
      <div class="text-center mb-8">
        <h1 class="font-display font-bold text-gray-900 text-2xl mb-1">Welcome Back</h1>
        <p class="text-muted text-sm">Sign in to your Automobile.lk account</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="text-sm text-muted block mb-1.5" for="email">Email Address</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="you@example.com"
            required
            autocomplete="email"
            class="w-full bg-background border border-border rounded-xl px-4 py-3 text-gray-900 placeholder-muted focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div>
          <div class="flex justify-between mb-1.5">
            <label class="text-sm text-muted" for="password">Password</label>
            <NuxtLink to="/auth/forgot" class="text-xs text-primary hover:text-accent transition-colors">Forgot password?</NuxtLink>
          </div>
          <div class="relative">
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              required
              autocomplete="current-password"
              class="w-full bg-background border border-border rounded-xl px-4 py-3 text-gray-900 placeholder-muted focus:outline-none focus:border-primary transition-colors pr-12"
            />
            <button
              type="button"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-gray-900 transition-colors"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? '🙈' : '👁️' }}
            </button>
          </div>
        </div>

        <AppButton type="submit" variant="primary" size="lg" full-width :loading="loading">
          Sign In
        </AppButton>
      </form>

      <div class="relative my-6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-border" />
        </div>
        <div class="relative flex justify-center text-xs">
          <span class="px-3 bg-surface text-muted">or continue with</span>
        </div>
      </div>

      <button class="w-full flex items-center justify-center gap-3 py-3 border border-border rounded-xl text-gray-700 text-sm hover:bg-gray-50 transition-colors">
        <svg class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Continue with Google
      </button>

      <p class="text-center text-muted text-sm mt-6">
        Don't have an account?
        <NuxtLink to="/auth/register" class="text-primary hover:text-accent font-medium transition-colors">Register free →</NuxtLink>
      </p>
    </div>
  </div>
</template>
