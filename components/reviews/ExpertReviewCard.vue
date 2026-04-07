<script setup lang="ts">
import type { ExpertReview } from '~/types'

defineProps<{ review: ExpertReview }>()
</script>

<template>
  <NuxtLink
    :to="`/reviews/${review.slug}`"
    class="group flex flex-col bg-white border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
  >
    <div class="relative aspect-video overflow-hidden">
      <img
        :src="review.carImage"
        :alt="`${review.carMake} ${review.carModel}`"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <!-- Score badge -->
      <div class="absolute bottom-3 right-3 w-14 h-14 rounded-full bg-primary border-2 border-white/30 flex flex-col items-center justify-center">
        <span class="font-mono font-bold text-white text-lg leading-none">{{ review.overallScore }}</span>
        <span class="text-white/80 text-xs">/ 100</span>
      </div>
    </div>

    <div class="p-5 flex flex-col flex-1">
      <div class="flex items-start justify-between gap-2 mb-3">
        <div>
          <p class="text-primary text-xs font-semibold mb-0.5">{{ review.carMake }} · {{ review.carYear }}</p>
          <h3 class="font-display font-bold text-gray-900 text-lg leading-tight">{{ review.carModel }}</h3>
        </div>
        <StarRating :rating="review.overallScore / 20" size="sm" />
      </div>

      <p class="text-muted text-sm line-clamp-2 mb-4">{{ review.summary }}</p>

      <!-- Pros & Cons -->
      <div class="grid grid-cols-2 gap-3 mb-4">
        <div>
          <p class="text-emerald-600 text-xs font-semibold mb-1.5">✓ Pros</p>
          <ul class="space-y-1">
            <li v-for="pro in review.pros.slice(0, 2)" :key="pro" class="text-gray-600 text-xs truncate">{{ pro }}</li>
          </ul>
        </div>
        <div>
          <p class="text-red-500 text-xs font-semibold mb-1.5">✕ Cons</p>
          <ul class="space-y-1">
            <li v-for="con in review.cons.slice(0, 2)" :key="con" class="text-gray-600 text-xs truncate">{{ con }}</li>
          </ul>
        </div>
      </div>

      <div class="mt-auto flex items-center justify-between pt-3 border-t border-border">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-full bg-gray-100 border border-border overflow-hidden">
            <div class="w-full h-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
              {{ review.expertName[0] }}
            </div>
          </div>
          <div>
            <p class="text-gray-900 text-xs font-medium">{{ review.expertName }}</p>
            <p class="text-muted text-xs">{{ review.expertTitle }}</p>
          </div>
        </div>
        <span class="text-primary text-sm font-medium group-hover:underline">Read →</span>
      </div>
    </div>
  </NuxtLink>
</template>
