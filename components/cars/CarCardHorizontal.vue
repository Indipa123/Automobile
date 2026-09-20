<script setup lang="ts">
import type { Car } from '~/types'

defineProps<{ car: Car }>()

const { formatLKRFull } = useFormatCurrency()
const favoritesStore = useFavoritesStore()

const conditionBadge: Record<string, string> = {
  new: 'text-emerald-600',
  used: 'text-gray-500',
  reconditioned: 'text-blue-600',
}

const conditionLabel: Record<string, string> = {
  new: 'New',
  used: 'Used',
  reconditioned: 'Reconditioned',
}
</script>

<template>
  <NuxtLink
    :to="`/cars/${car.slug}`"
    class="car-card group flex flex-col sm:flex-row bg-white border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
  >
    <!-- Image -->
    <div class="relative w-full sm:w-64 h-52 sm:h-auto flex-shrink-0 bg-gray-100 overflow-hidden">
      <img
        :src="car.images[0] || 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=256&h=160&fit=crop&auto=format'"
        :alt="`${car.year} ${car.make} ${car.model}`"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=256&h=160&fit=crop&auto=format'"
      />
      <span :class="['absolute top-3 left-3 px-2 py-0.5 text-xs font-semibold rounded-full backdrop-blur-sm bg-white/90', conditionBadge[car.condition]]">
        {{ conditionLabel[car.condition] }}
      </span>
    </div>

    <!-- Content -->
    <div class="flex-1 p-4 sm:p-5 flex flex-col justify-between min-w-0">
      <div>
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <p class="text-muted text-xs">{{ car.make }} · {{ car.year }}</p>
            <h3 class="font-display font-bold text-gray-900 text-lg truncate">{{ car.model }} {{ car.variant }}</h3>
          </div>
          <div class="flex-shrink-0 flex flex-col items-end gap-1.5">
            <DealRatingBadge :rating="car.dealRating" />
            <button
              class="text-muted hover:text-primary transition-colors"
              @click.prevent="favoritesStore.toggleFavorite(car.id)"
            >
              <svg class="w-4 h-4" :class="favoritesStore.isFavorited(car.id) ? 'text-primary fill-current' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div class="flex flex-wrap gap-3 mt-3 text-xs text-muted">
          <span>{{ car.mileage.toLocaleString() }} km</span>
          <span>{{ car.engineCC }}cc</span>
          <span class="capitalize">{{ car.fuelType }}</span>
          <span class="capitalize">{{ car.transmission }}</span>
          <span>{{ car.seats }} seats</span>
          <span class="capitalize">{{ car.color }}</span>
        </div>
      </div>

      <div class="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
        <div>
          <p class="font-mono font-bold text-primary text-xl">{{ formatLKRFull(car.price) }}</p>
          <p v-if="car.negotiable" class="text-xs text-muted">Negotiable</p>
        </div>
        <div class="flex items-center gap-2 text-xs text-muted">
          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          {{ car.location.city }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
