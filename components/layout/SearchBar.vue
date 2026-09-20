<script setup lang="ts">
const router = useRouter()
const query = ref('')
const focused = ref(false)

const suggestions = computed(() => {
  if (!query.value || query.value.length < 2) return []
  return [
    { label: `Toyota ${query.value}`, href: `/cars?make=Toyota&q=${query.value}` },
    { label: `Honda ${query.value}`, href: `/cars?make=Honda&q=${query.value}` },
    { label: query.value + ' for sale', href: `/cars?q=${query.value}` },
  ].slice(0, 3)
})

const handleSearch = () => {
  if (query.value.trim()) {
    router.push(`/cars?q=${encodeURIComponent(query.value.trim())}`)
    query.value = ''
    focused.value = false
  }
}

const handleBlur = () => {
  setTimeout(() => {
    focused.value = false
  }, 200)
}
</script>

<template>
  <div class="relative flex-1 max-w-xl">
    <div class="flex items-center gap-2 bg-background border border-border rounded-xl px-4 py-2.5 focus-within:border-primary transition-colors">
      <svg class="w-4 h-4 text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        v-model="query"
        type="text"
        placeholder="Search make, model, or keyword..."
        class="flex-1 bg-transparent text-gray-900 placeholder-muted text-sm focus:outline-none"
        @focus="focused = true"
        @blur="handleBlur"
        @keydown.enter="handleSearch"
      />
      <button v-if="query" class="text-muted hover:text-gray-900" @click="query = ''">✕</button>
    </div>

    <Transition name="dropdown">
      <div
        v-if="focused && suggestions.length"
        class="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-xl shadow-lg z-50 overflow-hidden"
      >
        <NuxtLink
          v-for="s in suggestions"
          :key="s.href"
          :to="s.href"
          class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg class="w-3.5 h-3.5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {{ s.label }}
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown-enter-active, .dropdown-leave-active { transition: all 0.15s ease; }
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
