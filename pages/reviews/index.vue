<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Expert Car Reviews — Automobile.lk' })

const { data, pending } = useFetch('/api/reviews', { query: { limit: 20 } })
const reviews = computed(() => (data.value as any)?.reviews || [])
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="bg-surface border-b border-border py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p class="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Expert Opinions</p>
        <h1 class="font-display font-bold text-gray-900 text-4xl md:text-5xl mb-4">Car Reviews</h1>
        <p class="text-muted text-lg max-w-xl mx-auto">In-depth, honest reviews from our team of automotive experts</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <SkeletonCard type="car" :count="4" />
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <ExpertReviewCard v-for="review in reviews" :key="review.id" :review="review" />
      </div>
    </div>
  </div>
</template>
