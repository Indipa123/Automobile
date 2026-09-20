<script setup lang="ts">
import type { RatingBreakdown } from '~/types'

defineProps<{ breakdown: RatingBreakdown }>()
</script>

<template>
  <div class="bg-white border border-border rounded-2xl p-6">
    <div class="flex items-center gap-6 mb-6">
      <div class="text-center">
        <p class="font-mono font-bold text-gray-900 text-5xl">{{ breakdown.average.toFixed(1) }}</p>
        <StarRating :rating="breakdown.average" size="lg" class="justify-center mt-1" />
        <p class="text-muted text-xs mt-1">{{ breakdown.total.toLocaleString() }} reviews</p>
      </div>
      <div class="flex-1 space-y-2">
        <div
          v-for="stars in ([5, 4, 3, 2, 1] as const)"
          :key="stars"
          class="flex items-center gap-2"
        >
          <span class="text-muted text-xs w-4">{{ stars }}</span>
          <svg class="w-3 h-3 text-amber-400 fill-current flex-shrink-0" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <div class="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
            <div
              class="h-full bg-amber-400 rounded-full transition-all"
              :style="{ width: `${((breakdown.distribution[stars] || 0) / breakdown.total) * 100}%` }"
            />
          </div>
          <span class="text-muted text-xs w-8 text-right">{{ breakdown.distribution[stars] || 0 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
