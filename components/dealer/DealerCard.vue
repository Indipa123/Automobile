<script setup lang="ts">
import type { Dealer } from '~/types'

defineProps<{ dealer: Dealer; compact?: boolean }>()
</script>

<template>
  <NuxtLink
    :to="`/dealers/${dealer.id}`"
    class="group flex gap-4 p-4 bg-white border border-border rounded-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
  >
    <!-- Logo -->
    <div class="w-14 h-14 rounded-xl bg-gray-50 border border-border flex items-center justify-center flex-shrink-0 text-xl font-bold text-primary">
      {{ dealer.name[0] }}
    </div>

    <!-- Info -->
    <div class="flex-1 min-w-0">
      <div class="flex items-start justify-between gap-2">
        <div class="min-w-0">
          <div class="flex items-center gap-1.5">
            <h3 class="font-display font-bold text-gray-900 text-sm truncate">{{ dealer.name }}</h3>
            <span v-if="dealer.verified" class="text-blue-500 flex-shrink-0" title="Verified Dealer">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </div>
          <p class="text-muted text-xs truncate">{{ dealer.address }}</p>
        </div>
        <div class="text-right flex-shrink-0">
          <div class="flex items-center gap-1">
            <svg class="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span class="text-gray-900 text-xs font-semibold">{{ dealer.rating.toFixed(1) }}</span>
            <span class="text-muted text-xs">({{ dealer.reviewCount }})</span>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
        <span class="text-xs text-muted flex items-center gap-1">
          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          {{ dealer.province }}
        </span>
        <span class="text-xs text-muted">{{ dealer.listingCount }} listings</span>
        <span v-for="spec in dealer.specialization.slice(0, 2)" :key="spec" class="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
          {{ spec }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
