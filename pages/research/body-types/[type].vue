<script setup lang="ts">
definePageMeta({ layout: 'default' })

const route = useRoute()
const type = computed(() => String(route.params.type))
const displayType = computed(() => type.value.charAt(0).toUpperCase() + type.value.slice(1))

useHead(() => ({ title: `${displayType.value} Cars in Sri Lanka — Automobile.lk` }))

const carsStore = useCarsStore()
onMounted(() => carsStore.fetchCars({ bodyType: [type.value as any], limit: 12 }))
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="bg-surface border-b border-border py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <nav class="flex items-center gap-2 text-xs text-muted mb-4">
          <NuxtLink to="/research" class="hover:text-gray-900">Research</NuxtLink>
          <span>›</span>
          <span class="text-gray-900 capitalize">{{ type }}</span>
        </nav>
        <h1 class="font-display font-bold text-gray-900 text-3xl capitalize">{{ displayType }} Cars in Sri Lanka</h1>
        <p class="text-muted mt-1">{{ carsStore.total }} {{ displayType }} listings available</p>
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
        No {{ displayType }} listings found. <NuxtLink to="/cars" class="text-primary hover:underline">Browse all cars →</NuxtLink>
      </div>
    </div>
  </div>
</template>
