<script setup lang="ts">
definePageMeta({ layout: 'default' })

useHead({
  title: 'Browse Cars — Automobile.lk',
  meta: [{ name: 'description', content: 'Browse 45,000+ new and used cars in Sri Lanka with advanced filters.' }],
})

const route = useRoute()
const router = useRouter()

const filtersStore = useFiltersStore()
const carsStore = useCarsStore()
const compareStore = useCompareStore()

const viewMode = ref<'grid' | 'list'>('grid')
const showMobileFilters = ref(false)

// Sync URL query to filters
onMounted(() => {
  if (route.query.make) filtersStore.filters.make = String(route.query.make)
  if (route.query.condition) filtersStore.filters.condition = route.query.condition as any
  if (route.query.bodyType) filtersStore.filters.bodyType = [route.query.bodyType as any]
  if (route.query.priceMax) filtersStore.filters.priceMax = Number(route.query.priceMax)
  if (route.query.priceMin) filtersStore.filters.priceMin = Number(route.query.priceMin)
  loadCars()
})

const loadCars = () => {
  carsStore.fetchCars(filtersStore.filters)
}

const handleFilterApply = () => {
  showMobileFilters.value = false
  loadCars()
}

const sortOptions = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
  { value: 'mileage', label: 'Lowest Mileage' },
]

watch(() => filtersStore.filters.sortBy, loadCars)
watch(() => filtersStore.filters.page, loadCars)
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Page header -->
    <div class="bg-surface border-b border-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <h1 class="font-display font-bold text-gray-900 text-3xl mb-2">Browse Cars</h1>
        <p class="text-muted">Find your perfect car from our extensive collection</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div class="flex gap-6">
        <!-- Sidebar filters (desktop) -->
        <aside class="hidden lg:block w-72 flex-shrink-0">
          <CarFilters @apply="handleFilterApply" />
        </aside>

        <!-- Main content -->
        <div class="flex-1 min-w-0">
          <!-- Sort bar -->
          <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div class="flex items-center gap-3">
              <p class="text-gray-900 text-sm font-medium">
                <span class="font-mono font-bold text-primary">{{ carsStore.total }}</span> cars found
              </p>
              <span
                v-if="filtersStore.activeCount > 0"
                class="text-xs text-muted bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full"
              >
                {{ filtersStore.activeCount }} filter{{ filtersStore.activeCount > 1 ? 's' : '' }} active
              </span>
            </div>

            <div class="flex items-center gap-3">
              <!-- Mobile filter button -->
              <button
                class="lg:hidden flex items-center gap-2 px-3 py-2 border border-border rounded-lg text-sm text-gray-600 hover:text-gray-900"
                @click="showMobileFilters = true"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
                <span v-if="filtersStore.activeCount > 0" class="bg-primary text-white text-xs rounded-full px-1.5">{{ filtersStore.activeCount }}</span>
              </button>

              <!-- Sort -->
              <AppDropdown
                v-model="filtersStore.filters.sortBy"
                :options="sortOptions"
                label=""
                placeholder="Sort by"
              />

              <!-- View toggle -->
              <div class="hidden sm:flex border border-border rounded-lg overflow-hidden">
                <button
                  :class="['px-3 py-2 transition-colors', viewMode === 'grid' ? 'bg-primary text-white' : 'text-muted hover:text-gray-900']"
                  @click="viewMode = 'grid'"
                  title="Grid view"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  :class="['px-3 py-2 transition-colors', viewMode === 'list' ? 'bg-primary text-white' : 'text-muted hover:text-gray-900']"
                  @click="viewMode = 'list'"
                  title="List view"
                >
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Loading state -->
          <div v-if="carsStore.loading">
            <div :class="viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4' : 'space-y-3'">
              <SkeletonCard :type="viewMode === 'grid' ? 'car' : 'dealer'" :count="6" />
            </div>
          </div>

          <!-- Results -->
          <div v-else-if="carsStore.cars.length">
            <div
              v-if="viewMode === 'grid'"
              class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5"
            >
              <CarCard v-for="car in carsStore.cars" :key="car.id" :car="car" />
            </div>
            <div v-else class="space-y-3">
              <CarCardHorizontal v-for="car in carsStore.cars" :key="car.id" :car="car" />
            </div>

            <!-- Pagination -->
            <div v-if="carsStore.totalPages > 1" class="flex flex-wrap items-center justify-center gap-2 mt-8">
              <button
                :disabled="carsStore.currentPage === 1"
                class="px-3 sm:px-4 py-2 border border-border rounded-lg text-xs sm:text-sm text-muted hover:text-gray-900 hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors min-h-[40px] touch-manipulation"
                @click="filtersStore.filters.page = (filtersStore.filters.page || 1) - 1"
              >
                ← Prev
              </button>
              <div class="hidden sm:flex items-center gap-1">
                <button
                  v-for="p in Math.min(carsStore.totalPages, 7)"
                  :key="p"
                  :class="[
                    'w-9 h-9 rounded-lg text-sm font-medium transition-colors touch-manipulation',
                    carsStore.currentPage === p
                      ? 'bg-primary text-white font-bold'
                      : 'text-muted hover:text-gray-900 hover:bg-gray-100 border border-border'
                  ]"
                  @click="filtersStore.filters.page = p"
                >
                  {{ p }}
                </button>
              </div>
              <span class="sm:hidden text-xs text-muted font-medium px-2">
                Page {{ carsStore.currentPage }} of {{ carsStore.totalPages }}
              </span>
              <button
                :disabled="carsStore.currentPage === carsStore.totalPages"
                class="px-3 sm:px-4 py-2 border border-border rounded-lg text-xs sm:text-sm text-muted hover:text-gray-900 hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors min-h-[40px] touch-manipulation"
                @click="filtersStore.filters.page = (filtersStore.filters.page || 1) + 1"
              >
                Next →
              </button>
            </div>
          </div>

          <!-- Empty state -->
          <div v-else class="flex flex-col items-center justify-center py-20 text-center">
            <div class="text-6xl mb-4">🚗</div>
            <h3 class="font-display font-bold text-gray-900 text-xl mb-2">No cars found</h3>
            <p class="text-muted mb-6">Try adjusting your filters to see more results</p>
            <AppButton variant="outline" @click="filtersStore.clearFilters(); loadCars()">Clear All Filters</AppButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Filters Modal -->
    <AppModal v-model="showMobileFilters" title="Filter Cars" size="md">
      <CarFilters @apply="handleFilterApply" />
    </AppModal>
  </div>
</template>
