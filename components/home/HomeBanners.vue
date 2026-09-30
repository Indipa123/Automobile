<script setup lang="ts">
const banners = [
  { eyebrow: 'Sell your vehicle', title: 'Reach buyers across Sri Lanka', text: 'Individuals and dealers can list registered or unregistered vehicles.', href: '/sell/post-ad', action: 'Post a vehicle', icon: '🚗' },
  { eyebrow: 'Find your next car', title: 'Search by make, model & ownership', text: 'Compare listings and explore the details that matter.', href: '/cars', action: 'Browse vehicles', icon: '🔎' },
  { eyebrow: 'For the journey', title: 'Garages, fuel & EV charging', text: 'Explore vehicle care and travel resources in one place.', href: '/services', action: 'Explore services', icon: '⚡' },
]
const active = ref(0)
</script>
<template>
  <section aria-label="Home page banners" class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-slate-800 to-primary text-white p-7 sm:p-10 min-h-64 flex items-center">
      <div class="relative z-10 max-w-xl"><p class="text-amber-300 text-sm font-bold uppercase tracking-wide">{{ banners[active].eyebrow }}</p><h2 class="text-2xl sm:text-4xl font-display font-bold mt-2">{{ banners[active].title }}</h2><p class="text-white/80 mt-3">{{ banners[active].text }}</p><NuxtLink :to="banners[active].href" class="inline-flex mt-5 rounded-xl bg-white text-gray-900 font-bold px-5 py-3 hover:bg-gray-100">{{ banners[active].action }} →</NuxtLink></div>
      <div class="hidden sm:block absolute right-10 text-8xl opacity-40" aria-hidden="true">{{ banners[active].icon }}</div>
    </div>
    <div class="flex justify-center gap-2 mt-3"><button v-for="(banner, index) in banners" :key="banner.title" type="button" :aria-label="`Show banner ${index + 1}: ${banner.title}`" :aria-current="active === index ? 'true' : undefined" :class="['h-2 rounded-full transition-all', active === index ? 'w-8 bg-primary' : 'w-2 bg-gray-300']" @click="active = index" /></div>
  </section>
</template>
