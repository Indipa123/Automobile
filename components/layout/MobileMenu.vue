<script setup lang="ts">
const uiStore = useUiStore()
const authStore = useAuthStore()

const navLinks = [
  { label: 'Buy a Car', href: '/cars' },
  { label: 'Sell My Car', href: '/sell' },
  { label: 'Research', href: '/research' },
  { label: 'Expert Reviews', href: '/reviews' },
  { label: 'Dealers', href: '/dealers' },
  { label: 'Finance', href: '/finance' },
  { label: 'EV Guide', href: '/ev-guide' },
  { label: 'News & Guides', href: '/news' },
  { label: 'Awards', href: '/awards' },
]
</script>

<template>
  <Transition name="slide">
    <div
      v-if="uiStore.mobileMenuOpen"
      class="fixed inset-0 z-40 lg:hidden"
    >
      <div class="absolute inset-0 bg-black/40" @click="uiStore.closeMobileMenu" />
      <div class="absolute right-0 top-0 bottom-0 w-80 bg-white border-l border-border flex flex-col shadow-xl">
        <div class="flex items-center justify-between p-5 border-b border-border">
          <span class="font-display font-extrabold text-gray-900">automobile<span class="text-primary">.lk</span></span>
          <button class="text-gray-500 hover:text-gray-900" @click="uiStore.closeMobileMenu">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav class="flex-1 overflow-y-auto p-4 space-y-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.label"
            :to="link.href"
            class="flex items-center px-4 py-3 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors text-sm font-medium"
            @click="uiStore.closeMobileMenu"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="p-4 border-t border-border space-y-3">
          <NuxtLink
            to="/sell/post-ad"
            class="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors"
            @click="uiStore.closeMobileMenu"
          >
            + Post Free Ad
          </NuxtLink>
          <template v-if="!authStore.isLoggedIn">
            <div class="grid grid-cols-2 gap-2">
              <NuxtLink
                to="/auth/login"
                class="text-center py-2.5 border border-border text-gray-600 hover:text-gray-900 rounded-xl text-sm transition-colors"
                @click="uiStore.closeMobileMenu"
              >
                Login
              </NuxtLink>
              <NuxtLink
                to="/auth/register"
                class="text-center py-2.5 bg-gray-100 text-gray-900 rounded-xl text-sm hover:bg-gray-200 transition-colors"
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
              <div class="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                {{ authStore.user?.name?.[0]?.toUpperCase() }}
              </div>
              <div>
                <p class="text-gray-900 text-sm font-medium">{{ authStore.user?.name }}</p>
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
