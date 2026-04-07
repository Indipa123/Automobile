<template>
  <div class="min-h-screen bg-background flex flex-col">
    <!-- Simple header -->
    <header class="py-6 px-6 flex justify-center border-b border-border/50">
      <NuxtLink to="/" class="font-display font-extrabold text-2xl text-gray-900">
        automobile<span class="text-primary">.lk</span>
      </NuxtLink>
    </header>

    <main class="flex-1 flex items-center justify-center p-4">
      <slot />
    </main>

    <footer class="py-6 text-center">
      <p class="text-muted text-xs">
        © {{ new Date().getFullYear() }} Automobile.lk ·
        <NuxtLink to="/privacy" class="hover:text-gray-900 transition-colors">Privacy</NuxtLink> ·
        <NuxtLink to="/terms" class="hover:text-gray-900 transition-colors">Terms</NuxtLink>
      </p>
    </footer>

    <AppToast />
  </div>
</template>
