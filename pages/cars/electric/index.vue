<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Electric & Hybrid Cars in Sri Lanka — Automobile.lk' })

const carsStore = useCarsStore()
onMounted(() => carsStore.fetchCars({ fuelType: ['electric', 'hybrid'], limit: 12 }))
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Hero -->
    <div class="relative py-16 overflow-hidden" style="background: linear-gradient(135deg, #064e3b 0%, #07080A 100%)">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <span class="text-5xl mb-4 block">⚡</span>
        <h1 class="font-display font-bold text-white text-3xl md:text-5xl mb-4">Electric & Hybrid Cars</h1>
        <p class="text-emerald-300 text-lg max-w-2xl mx-auto">Drive the future today. Discover Sri Lanka's best selection of electric and hybrid vehicles.</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div v-if="carsStore.loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <SkeletonCard type="car" :count="8" />
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <CarCard v-for="car in carsStore.cars" :key="car.id" :car="car" />
      </div>
      <div v-if="!carsStore.loading && !carsStore.cars.length" class="text-center py-20 text-muted">
        No EV/Hybrid listings found at this time.
      </div>
    </div>
  </div>
</template>
