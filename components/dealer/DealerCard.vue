<script setup lang="ts">
import type { Dealer } from '~/types'

defineProps<{ dealer: Dealer; compact?: boolean }>()
</script>

<template>
  <NuxtLink
    :to="`/dealers/${dealer.id}`"
    class="group block p-4 bg-white border border-border rounded-2xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
  >
    <div class="flex gap-4">
      <!-- Logo or Initial -->
      <div class="w-14 h-14 rounded-xl bg-gray-50 border border-border flex items-center justify-center flex-shrink-0 overflow-hidden shadow-inner">
        <img
          v-if="dealer.logo"
          :src="dealer.logo"
          :alt="dealer.name"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform"
          @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=160&h=160&fit=crop&auto=format'"
        />
        <span v-else class="text-xl font-bold text-primary font-display">
          {{ dealer.name[0] }}
        </span>
      </div>

      <!-- Info -->
      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap">
              <h3 class="font-display font-bold text-gray-900 text-sm group-hover:text-primary transition-colors truncate">
                {{ dealer.name }}
              </h3>
              <span v-if="dealer.verified" class="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-semibold flex-shrink-0">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Verified
              </span>
            </div>
            <p class="text-muted text-xs truncate mt-0.5">{{ dealer.address }}</p>
          </div>
          <div class="text-right flex-shrink-0">
            <div class="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">
              <svg class="w-3 h-3 text-amber-500 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span class="text-gray-900 text-xs font-bold">{{ dealer.rating.toFixed(1) }}</span>
              <span class="text-muted text-[11px]">({{ dealer.reviewCount }})</span>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2.5">
          <span class="text-xs text-muted flex items-center gap-1">
            <svg class="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {{ dealer.district || dealer.province }}
          </span>
          <span class="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            {{ dealer.listingCount }} Cars in Store
          </span>
          <span v-for="spec in dealer.specialization.slice(0, 2)" :key="spec" class="text-[11px] text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">
            {{ spec }}
          </span>
        </div>
      </div>
    </div>

    <!-- Store action bar -->
    <div class="mt-3 pt-3 border-t border-border/70 flex items-center justify-between text-xs">
      <span class="text-muted">Established {{ dealer.established || '2010' }}</span>
      <span class="text-primary font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
        Visit Store & Showroom →
      </span>
    </div>
  </NuxtLink>
</template>

