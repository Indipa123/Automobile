<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; message: string; url?: string } }>()

const errorMessages: Record<number, { title: string; desc: string; icon: string }> = {
  404: { title: 'Page Not Found', desc: "The page you're looking for doesn't exist or has been moved.", icon: '🔍' },
  500: { title: 'Server Error', desc: 'Something went wrong on our end. Please try again in a moment.', icon: '⚠️' },
  403: { title: 'Access Denied', desc: "You don't have permission to access this page.", icon: '🔒' },
}

const info = computed(() =>
  errorMessages[props.error.statusCode] || {
    title: 'Something Went Wrong',
    desc: props.error.message || 'An unexpected error occurred.',
    icon: '😕',
  }
)

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
    <span class="text-7xl block mb-6">{{ info.icon }}</span>
    <h1 class="font-display font-extrabold text-gray-900 text-5xl mb-3">{{ error.statusCode }}</h1>
    <h2 class="font-display font-bold text-gray-900 text-2xl mb-3">{{ info.title }}</h2>
    <p class="text-muted text-base max-w-md mb-8 leading-relaxed">{{ info.desc }}</p>
    <div class="flex flex-wrap items-center justify-center gap-4">
      <button
        class="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors"
        @click="handleError"
      >
        Go to Homepage
      </button>
      <button
        class="px-6 py-3 border border-border text-gray-600 hover:text-gray-900 rounded-xl transition-colors"
        @click="() => history.back()"
      >
        ← Go Back
      </button>
    </div>

    <div class="mt-12 text-center">
      <NuxtLink to="/" class="font-display font-extrabold text-xl text-gray-900">
        automobile<span class="text-primary">.lk</span>
      </NuxtLink>
    </div>
  </div>
</template>
