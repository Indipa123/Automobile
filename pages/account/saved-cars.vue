<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Saved Cars — Automobile.lk' })

const favoritesStore = useFavoritesStore()
const { data } = await useFetch('/api/cars', { query: { limit: 100 } })
const allCars = computed(() => (data.value as any)?.cars || [])
const savedCars = computed(() => allCars.value.filter((c: any) => favoritesStore.isFavorited(c.id)))
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <h1 class="font-display font-bold text-gray-900 text-2xl mb-6">
        Saved Cars
        <span class="text-muted font-body font-normal text-base ml-2">({{ savedCars.length }})</span>
      </h1>

      <div v-if="savedCars.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <CarCard v-for="car in savedCars" :key="car.id" :car="car" />
      </div>

      <div v-else class="text-center py-20">
        <span class="text-5xl block mb-4">❤️</span>
        <h2 class="font-display font-bold text-gray-900 text-xl mb-3">No saved cars yet</h2>
        <p class="text-muted mb-6">Heart cars you like while browsing to save them here</p>
        <NuxtLink to="/cars"><AppButton variant="primary">Browse Cars</AppButton></NuxtLink>
      </div>
    </div>
  </div>
</template>
