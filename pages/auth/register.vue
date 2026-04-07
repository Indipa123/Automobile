<script setup lang="ts">
definePageMeta({ layout: 'auth' })
useHead({ title: 'Create Account — Automobile.lk' })

const authStore = useAuthStore()
const router = useRouter()
const uiStore = useUiStore()

const form = reactive({ name: '', email: '', phone: '', password: '', agree: false })
const loading = ref(false)

const handleRegister = async () => {
  if (!form.name || !form.email || !form.password) {
    uiStore.addToast('Please fill in all required fields', 'warning')
    return
  }
  if (!form.agree) {
    uiStore.addToast('Please agree to the terms', 'warning')
    return
  }
  loading.value = true
  const result = await authStore.register(form.name, form.email, form.phone, form.password)
  loading.value = false
  if (result.success) {
    uiStore.addToast('Account created! Welcome to Automobile.lk', 'success')
    router.push('/account')
  } else {
    uiStore.addToast(result.error || 'Registration failed', 'error')
  }
}
</script>

<template>
  <div class="w-full max-w-md">
    <div class="bg-surface border border-border rounded-2xl p-8 shadow-2xl">
      <div class="text-center mb-8">
        <h1 class="font-display font-bold text-gray-900 text-2xl mb-1">Create Free Account</h1>
        <p class="text-muted text-sm">Join Sri Lanka's #1 car marketplace</p>
      </div>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
          <label class="text-sm text-muted block mb-1.5">Full Name *</label>
          <input v-model="form.name" type="text" placeholder="Kasun Perera" required class="w-full bg-background border border-border rounded-xl px-4 py-3 text-gray-900 placeholder-muted focus:outline-none focus:border-primary transition-colors" />
        </div>
        <div>
          <label class="text-sm text-muted block mb-1.5">Email Address *</label>
          <input v-model="form.email" type="email" placeholder="you@example.com" required class="w-full bg-background border border-border rounded-xl px-4 py-3 text-gray-900 placeholder-muted focus:outline-none focus:border-primary transition-colors" />
        </div>
        <div>
          <label class="text-sm text-muted block mb-1.5">Phone Number</label>
          <input v-model="form.phone" type="tel" placeholder="+94 7X XXX XXXX" class="w-full bg-background border border-border rounded-xl px-4 py-3 text-gray-900 placeholder-muted focus:outline-none focus:border-primary transition-colors" />
        </div>
        <div>
          <label class="text-sm text-muted block mb-1.5">Password *</label>
          <input v-model="form.password" type="password" placeholder="Min. 8 characters" required minlength="8" class="w-full bg-background border border-border rounded-xl px-4 py-3 text-gray-900 placeholder-muted focus:outline-none focus:border-primary transition-colors" />
        </div>

        <label class="flex items-start gap-3 cursor-pointer">
          <input v-model="form.agree" type="checkbox" class="w-4 h-4 mt-0.5 rounded border-border bg-background text-primary focus:ring-primary flex-shrink-0" />
          <span class="text-muted text-sm">
            I agree to the <NuxtLink to="/terms" class="text-primary hover:underline">Terms of Service</NuxtLink> and
            <NuxtLink to="/privacy" class="text-primary hover:underline">Privacy Policy</NuxtLink>
          </span>
        </label>

        <AppButton type="submit" variant="primary" size="lg" full-width :loading="loading">
          Create Free Account
        </AppButton>
      </form>

      <p class="text-center text-muted text-sm mt-6">
        Already have an account?
        <NuxtLink to="/auth/login" class="text-primary hover:text-accent font-medium transition-colors">Sign in →</NuxtLink>
      </p>
    </div>
  </div>
</template>
