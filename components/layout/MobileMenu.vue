<script setup lang="ts">
const uiStore = useUiStore()
const authStore = useAuthStore()

const navLinks = [
  { label: '🚗 Buy Vehicles', href: '/cars' },
  { label: '🏬 Dealer Stores', href: '/dealers' },
  { label: '⚙️ Spare Parts & Chassis Filter', href: '/parts' },
  { label: '🔧 Garages & Services', href: '/services' },
  { label: '🚨 24/7 Roadside Towing Hub', href: '/services/towing' },
  { label: '🏦 Finance & Insurance', href: '/finance' },
  { label: '➕ Post Ad (Sell Vehicle)', href: '/sell/post-ad' },
  { label: '📰 News & Guides', href: '/news' },
]
</script>

<template>
  <Transition name="slide">
    <div
      v-if="uiStore.mobileMenuOpen"
      class="fixed inset-0 z-40 lg:hidden"
    >
      <div class="absolute inset-0 bg-black/50 backdrop-blur-xs" @click="uiStore.closeMobileMenu" />
      <div class="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white border-l border-border flex flex-col shadow-2xl">
        <div class="flex items-center justify-between p-5 border-b border-border">
          <span class="font-display font-extrabold text-gray-900 text-lg">
            automobile<span class="text-primary">.lk</span>
          </span>
          <button class="text-gray-500 hover:text-gray-900 p-1" @click="uiStore.closeMobileMenu">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- 24/7 Towing Emergency Call Button in Mobile Menu -->
        <div class="p-4 border-b border-border bg-red-50">
          <a
            href="tel:+94779992424"
            class="flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-white font-extrabold rounded-xl text-xs shadow-xs"
          >
            <span class="w-2 h-2 rounded-full bg-white animate-pulse" />
            🚨 24/7 SOS Towing: 077 999 2424
          </a>
        </div>

        <nav class="flex-1 overflow-y-auto p-4 space-y-1 no-scrollbar">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.label"
            :to="link.href"
            class="flex items-center px-4 py-3 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors text-sm font-semibold"
            @click="uiStore.closeMobileMenu"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="p-4 border-t border-border space-y-3 pb-safe">
          <NuxtLink
            to="/sell/post-ad"
            class="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-colors text-sm shadow-glow-red"
            @click="uiStore.closeMobileMenu"
          >
            + Post Free Vehicle Ad
          </NuxtLink>

          <template v-if="!authStore.isLoggedIn">
            <div class="grid grid-cols-2 gap-2">
              <NuxtLink
                to="/auth/login"
                class="text-center py-2.5 border border-border text-gray-700 hover:text-gray-900 rounded-xl text-xs font-semibold transition-colors"
                @click="uiStore.closeMobileMenu"
              >
                Login
              </NuxtLink>
              <NuxtLink
                to="/auth/register"
                class="text-center py-2.5 bg-gray-100 text-gray-900 rounded-xl text-xs font-semibold hover:bg-gray-200 transition-colors"
                @click="uiStore.closeMobileMenu"
              >
                Register
              </NuxtLink>
            </div>
          </template>
          <template v-else>
            <NuxtLink
              to="/account"
              class="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-xl"
              @click="uiStore.closeMobileMenu"
            >
              <div class="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">
                {{ authStore.user?.name?.[0]?.toUpperCase() }}
              </div>
              <div>
                <p class="text-gray-900 text-sm font-semibold">{{ authStore.user?.name }}</p>
                <p class="text-muted text-xs">View Account</p>
              </div>
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease; }
.slide-enter-from .absolute.right-0, .slide-leave-to .absolute.right-0 { transform: translateX(100%); }
.slide-enter-from .absolute.inset-0, .slide-leave-to .absolute.inset-0 { opacity: 0; }
</style>
