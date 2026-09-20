<script setup lang="ts">
const authStore = useAuthStore()
const compareStore = useCompareStore()
const route = useRoute()

const showFloatingCTA = computed(() =>
  !route.path.startsWith('/auth') && route.path !== '/sell/post-ad'
)
</script>


<template>
  <div class="min-h-screen bg-background text-gray-900 overflow-x-hidden">
    <AppHeader />
    <main class="pt-16 pb-16 lg:pb-0">
      <slot />
    </main>
    <AppFooter />
    <AppToast />
    <MobileBottomNav />

    <!-- Compare Bar -->
    <CompareBar v-if="compareStore.count > 0" />

    <!-- Floating Post Ad CTA -->
    <Transition name="bounce">
      <NuxtLink
        v-if="showFloatingCTA"
        to="/sell/post-ad"
        class="floating-cta hidden sm:flex items-center gap-2 px-5 py-3 bg-primary text-white font-bold rounded-full text-sm"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
        </svg>
        Post Free Ad
      </NuxtLink>
    </Transition>
  </div>
</template>

<style scoped>
.bounce-enter-active { animation: bounceIn 0.5s ease; }
@keyframes bounceIn {
  0% { transform: scale(0) translateY(20px); opacity: 0; }
  70% { transform: scale(1.05) translateY(-4px); }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}
</style>
