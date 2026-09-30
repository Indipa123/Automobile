<script setup lang="ts">
const route = useRoute()
const clubs: Record<string, { name: string; description: string; make: string; icon: string }> = {
  'wagon-r': { name: 'Wagon R Club', description: 'A space for Wagon R owners to share ownership advice, meetups and experiences.', make: 'Suzuki', icon: '🚙' },
  bmw: { name: 'BMW Club', description: 'Connect with BMW drivers and enthusiasts across Sri Lanka.', make: 'BMW', icon: '🏁' },
  'mercedes-benz': { name: 'Mercedes-Benz Club', description: 'Explore Mercedes-Benz ownership stories and community events.', make: 'Mercedes-Benz', icon: '⭐' },
}
const club = computed(() => clubs[String(route.params.slug)])
useHead(() => ({ title: club.value ? `${club.value.name} — Automobile.lk` : 'Vehicle club' }))
</script>
<template>
  <main class="min-h-screen bg-background py-12"><div class="max-w-5xl mx-auto px-4 sm:px-6">
    <NuxtLink to="/clubs" class="text-primary text-sm">← All clubs</NuxtLink>
    <div v-if="club" class="mt-6"><div class="rounded-3xl bg-gradient-to-r from-gray-900 to-primary text-white p-8 sm:p-12"><span class="text-5xl">{{ club.icon }}</span><h1 class="text-4xl font-display font-bold mt-4">{{ club.name }}</h1><p class="text-white/80 mt-3 max-w-xl">{{ club.description }}</p></div>
      <div class="grid md:grid-cols-2 gap-5 mt-8"><section class="bg-white border border-border rounded-2xl p-6"><h2 class="font-bold text-xl">About the club</h2><p class="text-muted mt-3">Membership, announcements and events will appear here when the club opens.</p><p class="mt-4 text-sm text-muted">Club rules and organizer details will be shown before membership opens.</p></section><section class="bg-white border border-border rounded-2xl p-6"><h2 class="font-bold text-xl">Explore vehicles</h2><p class="text-muted mt-3">Browse listings related to this club.</p><NuxtLink :to="`/cars?make=${encodeURIComponent(club.make)}`" class="inline-flex text-primary font-semibold mt-5 hover:underline">Browse {{ club.make }} cars →</NuxtLink></section></div>
    </div><p v-else class="mt-8">Club not found.</p>
  </div></main>
</template>
