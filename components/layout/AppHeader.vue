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
  { id: 'vehicles', label: 'Vehicles', href: '/cars', hasMega: true },
  { id: 'parts', label: 'Spare Parts', href: '/parts', hasMega: true },
  { id: 'services', label: 'Services', href: '/services', hasMega: true },
  { id: 'dealers', label: 'Dealers', href: '/dealers' },
  { id: 'finance', label: 'Finance & Insurance', href: '/finance' },
  { id: 'news', label: 'News', href: '/news' },
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
            :key="link.id"
            class="relative"
            @mouseenter="link.hasMega && (megaMenuOpen = link.id)"
            @mouseleave="megaMenuOpen = ''"
          >
            <NuxtLink
              :to="link.href"
              :class="[
                'px-3 py-2 text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-1',
                route.path.startsWith(link.href) && link.href !== '/'
                  ? 'text-primary font-semibold'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
              ]"
            >
              {{ link.label }}
              <span v-if="link.hasMega" class="text-[10px] opacity-60">▾</span>
            </NuxtLink>

            <!-- Mega Menu: Vehicles -->
            <Transition name="dropdown">
              <div
                v-if="link.id === 'vehicles' && megaMenuOpen === 'vehicles'"
                class="absolute top-full left-0 w-[520px] mt-1 bg-white rounded-2xl shadow-xl border border-border p-6 grid grid-cols-2 gap-6"
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
                  <p class="text-xs text-muted uppercase tracking-widest mb-3 font-semibold">Popular Makes</p>
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
                  <NuxtLink to="/dealers" class="flex-1 text-center py-2 rounded-lg bg-emerald-500/10 text-emerald-700 text-sm font-medium hover:bg-emerald-500/20 transition-colors">
                    🏬 Dealer Stores
                  </NuxtLink>
                </div>
              </div>
            </Transition>

            <!-- Mega Menu: Spare Parts -->
            <Transition name="dropdown">
              <div
                v-if="link.id === 'parts' && megaMenuOpen === 'parts'"
                class="absolute top-full left-0 w-[540px] mt-1 bg-white rounded-2xl shadow-xl border border-border p-6 grid grid-cols-2 gap-6"
              >
                <div>
                  <p class="text-xs text-muted uppercase tracking-widest mb-3 font-semibold">Categories</p>
                  <div class="space-y-1">
                    <NuxtLink to="/parts?category=engine" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm text-gray-700">
                      <span>⚙️</span> Engine & Drivetrain
                    </NuxtLink>
                    <NuxtLink to="/parts?category=suspension-brakes" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm text-gray-700">
                      <span>🛑</span> Brakes & Suspension
                    </NuxtLink>
                    <NuxtLink to="/parts?category=lubricants-fluids" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm text-gray-700">
                      <span>🛢️</span> Lubricants & Engine Oils
                    </NuxtLink>
                    <NuxtLink to="/parts?category=batteries" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm text-gray-700">
                      <span>🔋</span> Batteries & Hybrid Cells
                    </NuxtLink>
                    <NuxtLink to="/parts?category=accessories" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm text-gray-700">
                      <span>✨</span> Car Tech & Accessories
                    </NuxtLink>
                  </div>
                </div>

                <div>
                  <p class="text-xs text-muted uppercase tracking-widest mb-3 font-semibold">Chassis Code Quick Search</p>
                  <p class="text-xs text-muted mb-3">Filter parts guaranteed to fit your exact chassis generation:</p>
                  <div class="grid grid-cols-2 gap-1.5 text-xs font-mono">
                    <NuxtLink to="/parts?chassis=ZVW50" class="p-2 rounded-lg bg-surface hover:bg-amber-100 border border-border">
                      ZVW50 (Prius 4)
                    </NuxtLink>
                    <NuxtLink to="/parts?chassis=RU3" class="p-2 rounded-lg bg-surface hover:bg-amber-100 border border-border">
                      RU3 (Vezel)
                    </NuxtLink>
                    <NuxtLink to="/parts?chassis=GP5" class="p-2 rounded-lg bg-surface hover:bg-amber-100 border border-border">
                      GP5 (Fit Hybrid)
                    </NuxtLink>
                    <NuxtLink to="/parts?chassis=NZE141" class="p-2 rounded-lg bg-surface hover:bg-amber-100 border border-border">
                      NZE141 (Corolla)
                    </NuxtLink>
                    <NuxtLink to="/parts?chassis=HA36S" class="p-2 rounded-lg bg-surface hover:bg-amber-100 border border-border">
                      HA36S (Alto)
                    </NuxtLink>
                    <NuxtLink to="/parts?chassis=W205" class="p-2 rounded-lg bg-surface hover:bg-amber-100 border border-border">
                      W205 (C-Class)
                    </NuxtLink>
                  </div>
                </div>

                <div class="col-span-2 border-t border-border pt-3">
                  <NuxtLink to="/parts" class="block text-center py-2 rounded-xl bg-amber-400/20 text-amber-900 text-xs font-bold hover:bg-amber-400/30">
                    Open Complete Parts & Lubricants Marketplace →
                  </NuxtLink>
                </div>
              </div>
            </Transition>

            <!-- Mega Menu: Services -->
            <Transition name="dropdown">
              <div
                v-if="link.id === 'services' && megaMenuOpen === 'services'"
                class="absolute top-full left-0 w-[480px] mt-1 bg-white rounded-2xl shadow-xl border border-border p-5 space-y-3"
              >
                <!-- 24/7 Towing Card -->
                <NuxtLink
                  to="/services/towing"
                  class="flex items-center gap-3 p-3 rounded-xl bg-red-50 hover:bg-red-100 border border-red-200 transition-colors"
                >
                  <div class="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center text-lg shrink-0">
                    🚨
                  </div>
                  <div>
                    <div class="text-xs font-bold text-primary flex items-center gap-1.5">
                      24/7 Roadside Towing & Breakdown Assistance
                      <span class="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    </div>
                    <div class="text-[11px] text-gray-600">Instant flatbed dispatch & live fare calculator</div>
                  </div>
                </NuxtLink>

                <!-- Garages Card -->
                <NuxtLink
                  to="/services/garages"
                  class="flex items-center gap-3 p-3 rounded-xl bg-surface hover:bg-gray-100 border border-border transition-colors"
                >
                  <div class="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center text-lg shrink-0">
                    🔧
                  </div>
                  <div>
                    <div class="text-xs font-bold text-gray-900">Garages & Specialized Workshops</div>
                    <div class="text-[11px] text-gray-600">Hybrid battery rebuild labs, engine overhauls, European specialists</div>
                  </div>
                </NuxtLink>

                <!-- Service Stations Card -->
                <NuxtLink
                  to="/services/service-stations"
                  class="flex items-center gap-3 p-3 rounded-xl bg-surface hover:bg-gray-100 border border-border transition-colors"
                >
                  <div class="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-lg shrink-0">
                    🧼
                  </div>
                  <div>
                    <div class="text-xs font-bold text-gray-900">Service Stations & Auto Detailing</div>
                    <div class="text-[11px] text-gray-600">Periodic lube bays, underbody rust protection, 9H ceramic coating</div>
                  </div>
                </NuxtLink>
              </div>
            </Transition>
          </div>
        </nav>

        <!-- Right actions -->
        <div class="flex items-center gap-2.5">
          <!-- 24/7 Towing SOS Emergency Button -->
          <NuxtLink
            to="/services/towing"
            class="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 bg-red-50 hover:bg-red-100 border border-red-200 text-primary text-xs font-extrabold rounded-lg transition-all"
            title="24/7 Emergency Towing Islandwide"
          >
            <span class="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span>🚨 24/7 Towing</span>
          </NuxtLink>

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
