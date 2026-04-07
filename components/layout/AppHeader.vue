<script setup lang="ts">
const uiStore = useUiStore()
const authStore = useAuthStore()
const route = useRoute()

const scrolled = ref(false)
const megaMenuOpen = ref('')

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
})

const navLinks = [
  { label: 'Buy', href: '/cars', hasMega: true },
  { label: 'Sell', href: '/sell' },
  { label: 'Research', href: '/research' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Dealers', href: '/dealers' },
  { label: 'Finance', href: '/finance' },
  { label: 'News', href: '/news' },
]

const bodyTypes = [
  { label: 'Sedan', href: '/research/body-types/sedan', icon: '🚗' },
  { label: 'SUV', href: '/research/body-types/suv', icon: '🚙' },
  { label: 'Pickup', href: '/research/body-types/pickup', icon: '🛻' },
  { label: 'Van', href: '/research/body-types/van', icon: '🚐' },
  { label: 'Hatchback', href: '/research/body-types/hatchback', icon: '🚘' },
  { label: 'Electric', href: '/cars/electric', icon: '⚡' },
]

const popularBrands = ['Toyota', 'Honda', 'Suzuki', 'Nissan', 'Mitsubishi', 'BMW', 'Mercedes-Benz', 'Hyundai']
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm'
        : 'bg-white border-b border-border/50'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-18">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-1 flex-shrink-0">
          <span class="font-display font-extrabold text-xl text-gray-900 tracking-tight">
            automobile<span class="text-primary">.</span><span class="text-primary">lk</span>
          </span>
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-1">
          <div
            v-for="link in navLinks"
            :key="link.label"
            class="relative"
            @mouseenter="link.hasMega && (megaMenuOpen = link.label)"
            @mouseleave="megaMenuOpen = ''"
          >
            <NuxtLink
              :to="link.href"
              :class="[
                'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                route.path.startsWith(link.href) && link.href !== '/'
                  ? 'text-primary'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
              ]"
            >
              {{ link.label }}
              <span v-if="link.hasMega" class="ml-0.5 opacity-60">▾</span>
            </NuxtLink>

            <!-- Mega Menu -->
            <Transition name="dropdown">
              <div
                v-if="link.hasMega && megaMenuOpen === link.label"
                class="absolute top-full left-0 w-[520px] mt-1 bg-white rounded-2xl shadow-lg border border-border p-6 grid grid-cols-2 gap-6"
              >
                <div>
                  <p class="text-xs text-muted uppercase tracking-widest mb-3 font-semibold">Browse by Type</p>
                  <div class="grid grid-cols-2 gap-1.5">
                    <NuxtLink
                      v-for="bt in bodyTypes"
                      :key="bt.label"
                      :to="bt.href"
                      class="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-gray-100 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span>{{ bt.icon }}</span>
                      {{ bt.label }}
                    </NuxtLink>
                  </div>
                </div>
                <div>
                  <p class="text-xs text-muted uppercase tracking-widest mb-3 font-semibold">Popular Brands</p>
                  <div class="grid grid-cols-2 gap-1.5">
                    <NuxtLink
                      v-for="brand in popularBrands"
                      :key="brand"
                      :to="`/research/brands/${brand.toLowerCase().replace(' ', '-')}`"
                      class="px-2.5 py-2 rounded-lg hover:bg-gray-100 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {{ brand }}
                    </NuxtLink>
                  </div>
                </div>
                <div class="col-span-2 border-t border-border pt-4 flex gap-3">
                  <NuxtLink to="/cars/new" class="flex-1 text-center py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
                    New Cars
                  </NuxtLink>
                  <NuxtLink to="/cars/used" class="flex-1 text-center py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors">
                    Used Cars
                  </NuxtLink>
                  <NuxtLink to="/cars/electric" class="flex-1 text-center py-2 rounded-lg bg-emerald-500/10 text-emerald-600 text-sm font-medium hover:bg-emerald-500/20 transition-colors">
                    ⚡ Electric
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>
        </nav>

        <!-- Right actions -->
        <div class="flex items-center gap-2">
          <!-- Auth -->
          <template v-if="authStore.isLoggedIn">
            <NuxtLink
              to="/account"
              class="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <div class="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                {{ authStore.user?.name?.[0]?.toUpperCase() }}
              </div>
              <span class="hidden lg:block">{{ authStore.user?.name?.split(' ')[0] }}</span>
            </NuxtLink>
          </template>
          <template v-else>
            <NuxtLink
              to="/auth/login"
              class="hidden md:block px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Login
            </NuxtLink>
          </template>

          <!-- Post Ad button -->
          <NuxtLink
            to="/sell/post-ad"
            class="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-lg transition-colors shadow-glow-red"
          >
            + Post Free Ad
          </NuxtLink>

          <!-- Mobile hamburger -->
          <button
            class="lg:hidden flex w-9 h-9 items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600"
            @click="uiStore.toggleMobileMenu"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!uiStore.mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Menu -->
  <MobileMenu />
</template>

<style scoped>
.dropdown-enter-active, .dropdown-leave-active { transition: all 0.2s ease; }
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
