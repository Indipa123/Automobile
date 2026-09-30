<script setup lang="ts">
useHead({ title: 'Vehicle clubs — Automobile.lk' })
const clubs = [
  { name: 'Wagon R Club', description: 'For Suzuki Wagon R owners and enthusiasts.', query: 'Suzuki', slug: 'wagon-r', icon: '🚙' },
  { name: 'BMW Club', description: 'For BMW drivers and enthusiasts.', query: 'BMW', slug: 'bmw', icon: '🏁' },
  { name: 'Mercedes-Benz Club', description: 'For Mercedes-Benz drivers and enthusiasts.', query: 'Mercedes-Benz', slug: 'mercedes-benz', icon: '⭐' },
]
</script>
<template>
  <main class="min-h-screen bg-background py-12"><div class="max-w-6xl mx-auto px-4 sm:px-6">
    <p class="text-primary font-semibold text-sm">Community</p><h1 class="text-4xl font-display font-bold text-gray-900 mt-2">Vehicle clubs</h1>
    <p class="text-muted mt-4 max-w-2xl">Discover people who drive and enjoy the same vehicles. Club membership and events are coming soon.</p>
    <div class="grid md:grid-cols-3 gap-5 mt-8"><article v-for="club in clubs" :key="club.name" class="rounded-2xl bg-white border border-border p-6"><div class="text-4xl">{{ club.icon }}</div><h2 class="text-xl font-bold mt-4">{{ club.name }}</h2><p class="text-muted mt-2">{{ club.description }}</p><NuxtLink :to="`/clubs/${club.slug}`" class="inline-flex text-primary font-semibold mt-5 hover:underline">Explore club →</NuxtLink></article></div>
  </div></main>
</template>
