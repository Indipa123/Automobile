<script setup lang="ts">
const route = useRoute()
const uiStore = useUiStore()

const navItems = [
  { id: 'home', label: 'Home', href: '/', icon: 'home' },
  { id: 'cars', label: 'Vehicles', href: '/cars', icon: 'car' },
  { id: 'parts', label: 'Parts', href: '/parts', icon: 'parts' },
  { id: 'dealers', label: 'Stores', href: '/dealers', icon: 'store' },
  { id: 'towing', label: '24/7 SOS', href: '/services/towing', icon: 'sos', isEmergency: true },
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
    <!-- Bottom Nav Bar with iOS safe area padding -->
    <nav class="bg-white/95 backdrop-blur-xl border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-2 pt-1 pb-safe flex items-center justify-around">
      <NuxtLink
        v-for="item in navItems"
        :key="item.id"
        :to="item.href"
        :class="[
          'flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-all min-w-[56px] text-center relative select-none',
          isActive(item.href)
            ? 'text-primary font-bold'
            : 'text-gray-500 hover:text-gray-900 font-medium'
        ]"
      >
        <!-- Icon container -->
        <div class="relative w-6 h-6 flex items-center justify-center mb-0.5">
          <!-- SOS Emergency Highlighted Icon -->
          <template v-if="item.isEmergency">
            <span class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
            <span class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-600" />
            <span class="text-lg">🚨</span>
          </template>

          <!-- Home Icon -->
          <svg v-else-if="item.icon === 'home'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>

          <!-- Vehicles Icon -->
          <svg v-else-if="item.icon === 'car'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zM3 9l2-4h14l2 4v7a1 1 0 01-1 1h-1a2 2 0 01-4 0H9a2 2 0 01-4 0H4a1 1 0 01-1-1V9z" />
          </svg>

          <!-- Spare Parts Icon -->
          <svg v-else-if="item.icon === 'parts'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>

          <!-- Showroom Stores Icon -->
          <svg v-else-if="item.icon === 'store'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>

        <!-- Label -->
        <span class="text-[10px] tracking-tight leading-none">
          {{ item.label }}
        </span>

        <!-- Active Indicator Dot -->
        <span
          v-if="isActive(item.href)"
          class="w-1 h-1 rounded-full bg-primary mt-1"
        />
      </NuxtLink>

      <!-- Menu Drawer Toggle Button -->
      <button
        @click="uiStore.toggleMobileMenu"
        class="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-gray-500 hover:text-gray-900 min-w-[56px] text-center select-none"
        aria-label="Open navigation menu"
      >
        <div class="w-6 h-6 flex items-center justify-center mb-0.5">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <span class="text-[10px] tracking-tight leading-none font-medium">Menu</span>
      </button>
    </nav>
  </div>
</template>
