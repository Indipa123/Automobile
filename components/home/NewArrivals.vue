<script setup lang="ts">
const { data, pending } = useFetch('/api/cars', {
  query: { sortBy: 'newest', limit: 6 }
})
const cars = computed(() => (data.value as any)?.cars || [])
</script>

<template>
  <section class="py-12 bg-surface">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionTitle eyebrow="Just Added" view-all-link="/cars?sortBy=newest">
        New Arrivals
        <template #description>Fresh listings added to Automobile.lk this week</template>
      </SectionTitle>

      <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SkeletonCard type="car" :count="3" />
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        <CarCard v-for="car in cars" :key="car.id" :car="car" />
      </div>
    </div>
  </section>
</template>
