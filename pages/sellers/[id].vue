<script setup lang="ts">
import type { Car } from '~/types'
const route = useRoute()
const { data } = await useFetch('/api/cars', { query: { limit: 100 } })
const listings = computed<Car[]>(() => ((data.value as any)?.cars || []).filter((car: Car) => car.sellerType === 'private' && (car.sellerName || car.id) === route.params.id))
const seller = computed(() => listings.value[0]?.sellerName || 'Individual seller')
const phone = ref<string | null>(null)
const phoneRevealed = ref(false)
const revealPhone = async () => {
  if (!listings.value[0]) return
  phoneRevealed.value = true
  try {
    const result = await $fetch<{ phone: string | null }>(`/api/cars/${listings.value[0].slug}/contact`)
    phone.value = result.phone
  } catch { phone.value = null }
}
useHead(() => ({ title: `${seller.value} — Automobile.lk` }))
</script>
<template>
  <main class="min-h-screen bg-background py-10"><div class="max-w-6xl mx-auto px-4 sm:px-6">
    <NuxtLink to="/cars" class="text-primary text-sm">← Browse vehicles</NuxtLink><h1 class="text-3xl font-display font-bold mt-5">{{ seller }}</h1>
    <p class="text-muted mt-1">Individual seller · Vehicle gallery and listings</p>
    <button v-if="listings.length && !phoneRevealed" type="button" class="mt-5 rounded-xl bg-primary text-white font-semibold px-5 py-3" @click="revealPhone">Show number</button>
    <a v-else-if="phone" :href="`tel:${phone}`" class="inline-flex mt-5 rounded-xl bg-primary text-white font-semibold px-5 py-3">{{ phone }}</a>
    <section v-if="listings.length" class="mt-8"><h2 class="text-xl font-bold mb-4">Vehicle gallery</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3"><NuxtLink v-for="photo in listings.flatMap(car => car.images.map((src, index) => ({ src, index, car })))" :key="`${photo.car.id}-${photo.index}`" :to="`/cars/${photo.car.slug}`" class="block overflow-hidden rounded-xl border border-border bg-white"><img :src="photo.src" :alt="`${photo.car.make} ${photo.car.model} photo ${photo.index + 1}`" class="aspect-video w-full object-cover" loading="lazy" /><span class="block p-2 text-xs font-medium truncate">{{ photo.car.year }} {{ photo.car.make }} {{ photo.car.model }}</span></NuxtLink></div>
      <h2 class="text-xl font-bold mt-10 mb-4">Vehicles for sale</h2><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"><CarCard v-for="car in listings" :key="car.id" :car="car" /></div>
    </section>
    <p v-else class="mt-8 rounded-xl bg-white border border-border p-6 text-muted">No public vehicles are available from this seller.</p>
  </div></main>
</template>
