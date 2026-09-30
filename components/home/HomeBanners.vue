<script setup lang="ts">
const banners = [
  { eyebrow: 'Sell your vehicle', title: 'Reach buyers across Sri Lanka', text: 'Individuals and dealers can list registered or unregistered vehicles.', href: '/sell/post-ad', action: 'Post a vehicle', icon: '🚗' },
  { eyebrow: 'Find your next car', title: 'Search by make, model & ownership', text: 'Compare listings and explore the details that matter.', href: '/cars', action: 'Browse vehicles', icon: '🔎' },
  { eyebrow: 'For the journey', title: 'Garages, fuel & EV charging', text: 'Explore vehicle care and travel resources in one place.', href: '/services', action: 'Explore services', icon: '⚡' },
]
const active = ref(0)
</script>
<template>
  <section aria-label="Home page banners" class="w-full mb-6 sm:mb-10">
    <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-red-700 to-gray-900 text-white p-5 sm:px-8 sm:py-6 min-h-44 flex items-center border border-white/20 shadow-xl">
      <div class="relative z-10 max-w-3xl"><p class="text-amber-300 text-sm font-bold uppercase tracking-wide">{{ banners[active].eyebrow }}</p><h2 class="text-xl sm:text-3xl font-display font-bold mt-1">{{ banners[active].title }}</h2><p class="text-white/80 mt-1 text-sm">{{ banners[active].text }}</p><NuxtLink :to="banners[active].href" class="inline-flex mt-3 rounded-lg bg-white text-gray-900 text-sm font-bold px-4 py-2.5 hover:bg-gray-100">{{ banners[active].action }} →</NuxtLink></div>
      <div class="hidden md:block absolute right-8 text-7xl opacity-30" aria-hidden="true">{{ banners[active].icon }}</div>
    </div>
    <div class="flex justify-center gap-2 mt-2"><button v-for="(banner, index) in banners" :key="banner.title" type="button" :aria-label="`Show banner ${index + 1}: ${banner.title}`" :aria-current="active === index ? 'true' : undefined" :class="['h-2 rounded-full transition-all', active === index ? 'w-8 bg-primary' : 'w-2 bg-gray-300']" @click="active = index" /></div>
  </section>
</template>
