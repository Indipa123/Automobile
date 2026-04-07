<script setup lang="ts">
import type { UserReview } from '~/types'

defineProps<{ review: UserReview }>()

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-LK', { year: 'numeric', month: 'short', day: 'numeric' })
</script>

<template>
  <div class="bg-white border border-border rounded-2xl p-5">
    <!-- Header -->
    <div class="flex items-start justify-between gap-3 mb-3">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
          {{ review.userName[0] }}
        </div>
        <div>
          <div class="flex items-center gap-1.5">
            <p class="text-gray-900 text-sm font-semibold">{{ review.userName }}</p>
            <span v-if="review.verified" class="text-blue-600 text-xs">✓ Verified Owner</span>
          </div>
          <p class="text-muted text-xs">{{ review.ownership }} · {{ formatDate(review.published) }}</p>
        </div>
      </div>
      <StarRating :rating="review.overallRating" size="sm" />
    </div>

    <h4 class="font-semibold text-gray-900 mb-2">{{ review.title }}</h4>
    <p class="text-muted text-sm leading-relaxed mb-4 line-clamp-3">{{ review.content }}</p>

    <!-- Pros & Cons -->
    <div v-if="review.pros?.length || review.cons?.length" class="grid grid-cols-2 gap-4 mb-4 text-xs">
      <div v-if="review.pros?.length">
        <p class="text-emerald-600 font-medium mb-1.5">Pros</p>
        <ul class="space-y-1">
          <li v-for="p in review.pros" :key="p" class="text-gray-600 flex items-start gap-1.5">
            <span class="text-emerald-600 mt-0.5">+</span> {{ p }}
          </li>
        </ul>
      </div>
      <div v-if="review.cons?.length">
        <p class="text-red-500 font-medium mb-1.5">Cons</p>
        <ul class="space-y-1">
          <li v-for="c in review.cons" :key="c" class="text-gray-600 flex items-start gap-1.5">
            <span class="text-red-500 mt-0.5">−</span> {{ c }}
          </li>
        </ul>
      </div>
    </div>

    <div class="flex items-center gap-3 pt-3 border-t border-border text-xs text-muted">
      <span>Was this helpful?</span>
      <button class="hover:text-gray-900 transition-colors">👍 {{ review.helpful }}</button>
    </div>
  </div>
</template>
