<script setup lang="ts">
interface Props {
  title: string
  eyebrow?: string
  condition?: 'new' | 'used' | 'reconditioned'
  viewAllLink?: string
  bgClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  viewAllLink: '/cars',
  bgClass: 'bg-background',
})

const { data, pending } = useFetch('/api/cars', {
  query: computed(() => ({
    condition: props.condition,
    limit: 8,
    featured: true,
  }))
})

const cars = computed(() => data.value?.cars || [])
</script>

<template>
  <section :class="['py-12 md:py-16', bgClass]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionTitle :eyebrow="eyebrow" :view-all-link="viewAllLink">
        {{ title }}
      </SectionTitle>

      <!-- Loading skeletons -->
      <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        <SkeletonCard type="car" :count="4" />
      </div>

      <!-- Car grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        <CarCard
          v-for="car in cars.slice(0, 8)"
          :key="car.id"
          :car="car"
        />
      </div>

      <div class="text-center mt-8">
        <NuxtLink :to="viewAllLink">
          <AppButton variant="outline" size="lg">
            View All {{ title }} →
          </AppButton>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
