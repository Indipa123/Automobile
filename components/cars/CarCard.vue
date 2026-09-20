<script setup lang="ts">
import type { Car } from '~/types'

interface Props {
  car: Car
  showCompare?: boolean
}

const props = withDefaults(defineProps<Props>(), { showCompare: true })

const { formatLKRFull } = useFormatCurrency()
const favoritesStore = useFavoritesStore()
const compareStore = useCompareStore()
const uiStore = useUiStore()

const conditionBadge: Record<string, string> = {
  new: 'bg-emerald-500/90 text-white',
  used: 'bg-gray-500/90 text-white',
  reconditioned: 'bg-blue-500/90 text-white',
}

const conditionLabel: Record<string, string> = {
  new: 'New',
  used: 'Used',
  reconditioned: 'Recon',
}

const toggleFav = (e: Event) => {
  e.preventDefault()
  favoritesStore.toggleFavorite(props.car.id)
  uiStore.addToast(
    favoritesStore.isFavorited(props.car.id) ? 'Added to saved cars' : 'Removed from saved cars',
    'info'
  )
}

const toggleCompare = (e: Event) => {
  e.preventDefault()
  if (compareStore.isInCompare(props.car.id)) {
    compareStore.removeCar(props.car.id)
  } else if (compareStore.count < 3) {
    compareStore.addCar(props.car)
    uiStore.addToast('Added to compare', 'success')
  } else {
    uiStore.addToast('You can only compare up to 3 cars', 'warning')
  }
}

</script>

<template>
  <NuxtLink
    :to="`/cars/${car.slug}`"
    class="car-card group flex flex-col bg-white border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
  >
    <!-- Image -->
    <div class="relative aspect-video overflow-hidden bg-gray-100">
      <img
        :src="car.images[0] || 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=225&fit=crop&auto=format'"
        :alt="`${car.year} ${car.make} ${car.model}`"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=225&fit=crop&auto=format'"
      />
      <!-- Condition badge -->
      <span
        :class="['absolute top-3 left-3 px-2 py-0.5 text-xs font-semibold rounded-full backdrop-blur-sm', conditionBadge[car.condition]]"
      >
        {{ conditionLabel[car.condition] }}
      </span>
      <!-- Featured badge -->
      <span v-if="car.featured" class="absolute top-3 left-14 px-2 py-0.5 text-xs font-semibold rounded-full bg-accent text-black backdrop-blur-sm">
        Featured
      </span>
      <!-- Heart -->
      <button
        class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white shadow-sm"
        @click="toggleFav"
        :aria-label="favoritesStore.isFavorited(car.id) ? 'Remove from saved' : 'Save car'"
      >
        <svg
          class="w-4 h-4 transition-colors"
          :class="favoritesStore.isFavorited(car.id) ? 'text-primary fill-current' : 'text-gray-500'"
          viewBox="0 0 24 24"
          :fill="favoritesStore.isFavorited(car.id) ? 'currentColor' : 'none'"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
      <!-- Compare checkbox -->
      <label
        v-if="showCompare"
        class="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
        @click.stop
      >
        <input
          type="checkbox"
          class="w-3.5 h-3.5 rounded border-gray-300 bg-white text-primary focus:ring-primary"
          :checked="compareStore.isInCompare(car.id)"
          @change="toggleCompare"
        />
        <span class="text-gray-700 text-xs">Compare</span>
      </label>
    </div>

    <!-- Content -->
    <div class="flex-1 flex flex-col p-4">
      <div class="flex items-start justify-between gap-2 mb-1">
        <div>
          <p class="text-muted text-xs mb-0.5">{{ car.make }}</p>
          <h3 class="font-display font-bold text-gray-900 text-base leading-tight">
            {{ car.model }} {{ car.variant }}
          </h3>
        </div>
        <DealRatingBadge :rating="car.dealRating" class="flex-shrink-0 mt-0.5" />
      </div>

      <p class="font-mono font-bold text-primary text-lg mt-2">
        {{ formatLKRFull(car.price) }}
      </p>

      <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-muted text-xs">
        <span>{{ car.year }}</span>
        <span>·</span>
        <span>{{ car.mileage === 0 ? '0 km' : car.mileage.toLocaleString() + ' km' }}</span>
        <span>·</span>
        <span class="capitalize">{{ car.fuelType }}</span>
        <span>·</span>
        <span class="capitalize">{{ car.transmission === 'automatic' ? 'Auto' : car.transmission.toUpperCase() }}</span>
      </div>

      <div class="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
        <span class="flex items-center gap-1 text-xs text-muted">
          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {{ car.location.city }}
        </span>
        <span class="text-xs text-primary font-medium group-hover:underline">View Details →</span>
      </div>
    </div>
  </NuxtLink>
</template>
