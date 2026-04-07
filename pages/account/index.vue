<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'My Account — Automobile.lk' })

const authStore = useAuthStore()
const favoritesStore = useFavoritesStore()
const router = useRouter()

if (!authStore.isLoggedIn) {
  router.push('/auth/login')
}

const stats = computed(() => [
  { label: 'Active Listings', value: '3', icon: '🚗' },
  { label: 'Views This Week', value: '284', icon: '👁️' },
  { label: 'Messages', value: '7', icon: '💬' },
  { label: 'Saved Cars', value: String(favoritesStore.count), icon: '❤️' },
])

const navLinks = [
  { label: 'Dashboard', href: '/account', icon: '📊' },
  { label: 'My Ads', href: '/account/my-ads', icon: '🚗' },
  { label: 'Saved Cars', href: '/account/saved-cars', icon: '❤️' },
  { label: 'Price Alerts', href: '/account/alerts', icon: '🔔' },
]
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div class="grid lg:grid-cols-4 gap-6">
        <!-- Sidebar -->
        <aside class="lg:col-span-1">
          <div class="bg-surface border border-border rounded-2xl p-5 mb-4">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                {{ authStore.user?.name?.[0]?.toUpperCase() }}
              </div>
              <div>
                <p class="text-gray-900 font-semibold">{{ authStore.user?.name }}</p>
                <p class="text-muted text-xs">{{ authStore.user?.email }}</p>
              </div>
            </div>
            <nav class="space-y-1">
              <NuxtLink
                v-for="link in navLinks"
                :key="link.href"
                :to="link.href"
                class="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                active-class="bg-primary/10 text-primary"
              >
                <span>{{ link.icon }}</span>
                {{ link.label }}
              </NuxtLink>
              <button
                class="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-muted hover:text-red-400 transition-colors mt-2"
                @click="authStore.logout(); router.push('/')"
              >
                <span>🚪</span>
                Sign Out
              </button>
            </nav>
          </div>
        </aside>

        <!-- Main content -->
        <main class="lg:col-span-3">
          <h1 class="font-display font-bold text-gray-900 text-2xl mb-6">Dashboard</h1>

          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="bg-surface border border-border rounded-2xl p-4 text-center"
            >
              <span class="text-2xl block mb-1">{{ stat.icon }}</span>
              <p class="font-mono font-bold text-gray-900 text-2xl">{{ stat.value }}</p>
              <p class="text-muted text-xs">{{ stat.label }}</p>
            </div>
          </div>

          <!-- Quick actions -->
          <div class="grid sm:grid-cols-2 gap-4">
            <NuxtLink to="/sell/post-ad" class="flex items-center gap-4 p-5 bg-primary/10 border border-primary/30 rounded-2xl hover:border-primary/60 transition-colors">
              <span class="text-3xl">➕</span>
              <div>
                <p class="text-gray-900 font-semibold">Post New Ad</p>
                <p class="text-muted text-xs">List your car for free</p>
              </div>
            </NuxtLink>
            <NuxtLink to="/cars" class="flex items-center gap-4 p-5 bg-surface border border-border rounded-2xl hover:border-primary/30 transition-colors">
              <span class="text-3xl">🔍</span>
              <div>
                <p class="text-gray-900 font-semibold">Browse Cars</p>
                <p class="text-muted text-xs">Find your next vehicle</p>
              </div>
            </NuxtLink>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
