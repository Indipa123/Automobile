<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'New Cars in Sri Lanka — Automobile.lk' })

const carsStore = useCarsStore()
const filtersStore = useFiltersStore()

filtersStore.filters.condition = 'new'
onMounted(() => carsStore.fetchCars({ condition: 'new', limit: 12 }))
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="bg-surface border-b border-border py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 class="font-display font-bold text-gray-900 text-3xl mb-2">New Cars</h1>
        <p class="text-muted">Brand new vehicles from authorized dealers across Sri Lanka</p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div v-if="carsStore.loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <SkeletonCard type="car" :count="8" />
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <CarCard v-for="car in carsStore.cars" :key="car.id" :car="car" />
      </div>
    </div>
  </div>
</template>
