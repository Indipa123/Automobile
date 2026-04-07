<script setup lang="ts">
const { data } = useFetch('/api/reviews', { query: { limit: 4 } })
const reviews = computed(() => (data.value as any)?.reviews || [])
</script>

<template>
  <section class="py-12 bg-surface">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionTitle eyebrow="Expert Opinions" view-all-link="/reviews">
        Latest Expert Reviews
        <template #description>In-depth reviews by our automotive experts</template>
      </SectionTitle>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <NuxtLink
          v-for="review in reviews"
          :key="review.id"
          :to="`/reviews/${review.slug}`"
          class="group flex flex-col bg-white border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
        >
          <div class="relative aspect-video overflow-hidden bg-gray-100">
            <img
              :src="review.carImage"
              :alt="`${review.carMake} ${review.carModel}`"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <!-- Score -->
            <div class="absolute top-3 right-3 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span class="font-mono font-bold text-white text-lg">{{ review.overallScore }}</span>
            </div>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <p class="text-muted text-xs mb-1">{{ review.carMake }} · {{ review.carYear }}</p>
            <h3 class="font-display font-bold text-gray-900 text-base mb-2">{{ review.carModel }}</h3>
            <StarRating :rating="review.overallScore / 20" size="sm" class="mb-2" />
            <p class="text-muted text-xs line-clamp-2 mb-3">{{ review.summary }}</p>
            <div class="mt-auto flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-gray-100 border border-border overflow-hidden">
                <img v-if="review.expertPhoto" :src="review.expertPhoto" :alt="review.expertName" class="w-full h-full object-cover" />
                <div v-else class="w-full h-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                  {{ review.expertName?.[0] }}
                </div>
              </div>
              <span class="text-xs text-muted">{{ review.expertName }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
