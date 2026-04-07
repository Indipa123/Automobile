<script setup lang="ts">
definePageMeta({ layout: 'default' })

const route = useRoute()
const brand = computed(() => {
  const slug = String(route.params.brand)
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    .replace('Mercedes Benz', 'Mercedes-Benz')
    .replace('Land Rover', 'Land Rover')
})

useHead(() => ({ title: `${brand.value} Cars in Sri Lanka — Automobile.lk` }))

const carsStore = useCarsStore()
onMounted(() => carsStore.fetchCars({ make: brand.value, limit: 12 }))
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="bg-surface border-b border-border py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <nav class="flex items-center gap-2 text-xs text-muted mb-4">
          <NuxtLink to="/research/brands" class="hover:text-gray-900">Brands</NuxtLink>
          <span>›</span>
          <span class="text-gray-900">{{ brand }}</span>
        </nav>
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold font-display text-3xl">
            {{ brand[0] }}
          </div>
          <div>
            <h1 class="font-display font-bold text-gray-900 text-3xl">{{ brand }}</h1>
            <p class="text-muted">{{ carsStore.total }} listings available</p>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div v-if="carsStore.loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <SkeletonCard type="car" :count="4" />
      </div>
      <div v-else-if="carsStore.cars.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <CarCard v-for="car in carsStore.cars" :key="car.id" :car="car" />
      </div>
      <div v-else class="text-center py-20">
        <p class="text-muted text-lg mb-4">No {{ brand }} listings found at this time.</p>
        <NuxtLink to="/cars"><AppButton variant="outline">Browse All Cars</AppButton></NuxtLink>
      </div>
    </div>
  </div>
</template>
