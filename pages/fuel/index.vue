<script setup lang="ts">
useHead({ title: 'Fuel prices & stations — Automobile.lk' })
const city = ref('')
const grade = ref('')
const grades = ['Petrol 92', 'Petrol 95', 'Diesel', 'Super Diesel']
const stations = [
  { name: 'Find a station near you', detail: 'Search fuel stations by city, operator, fuel grade and opening hours.' },
  { name: 'Check the latest price', detail: 'Prices should always include their source and last confirmed date.' },
]
</script>
<template>
  <main class="min-h-screen bg-background py-12"><div class="max-w-5xl mx-auto px-4 sm:px-6">
    <p class="text-primary font-semibold text-sm">Fuel & travel</p><h1 class="text-4xl font-display font-bold text-gray-900 mt-2">Fuel prices & stations</h1>
    <p class="text-muted mt-4 max-w-2xl">Compare fuel grades and find a nearby filling station. Price and station information will appear here once verified sources are available.</p>
    <div class="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">Current prices and station availability are not yet verified. Please confirm with the station before travelling.</div>
    <section class="mt-8"><h2 class="text-xl font-bold">Fuel grades</h2><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4"><div v-for="fuel in grades" :key="fuel" class="bg-white border border-border rounded-xl p-5"><h3 class="font-semibold">{{ fuel }}</h3><p class="text-muted text-sm mt-2">Price awaiting verification</p></div></div></section>
    <section class="mt-8"><h2 class="text-xl font-bold">Find a fuel station</h2><div class="grid sm:grid-cols-2 gap-3 mt-4"><label class="text-sm text-muted">City or district<input v-model="city" placeholder="e.g. Colombo" class="mt-1 w-full border border-border rounded-xl p-3 bg-white text-gray-900" /></label><label class="text-sm text-muted">Fuel grade<select v-model="grade" class="mt-1 w-full border border-border rounded-xl p-3 bg-white text-gray-900"><option value="">All grades</option><option v-for="fuel in grades" :key="fuel">{{ fuel }}</option></select></label></div><p class="mt-4 p-5 rounded-xl border border-border bg-white text-muted">No verified stations are available for {{ city || 'this location' }}{{ grade ? ` and ${grade}` : '' }} yet.</p></section>
    <div class="grid md:grid-cols-2 gap-5 mt-8"><div v-for="item in stations" :key="item.name" class="rounded-2xl bg-white border border-border p-6"><h2 class="font-bold text-lg">{{ item.name }}</h2><p class="text-muted mt-2">{{ item.detail }}</p></div></div>
  </div></main>
</template>
