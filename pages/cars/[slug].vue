<script setup lang="ts">
definePageMeta({ layout: 'listing' })

const route = useRoute()
const { formatLKRFull } = useFormatCurrency()
const compareStore = useCompareStore()
const favoritesStore = useFavoritesStore()
const uiStore = useUiStore()

const { data: car, pending, error } = await useFetch(`/api/cars/${route.params.slug}`)

useHead(() => ({
  title: car.value ? `${car.value.year} ${car.value.make} ${car.value.model} — Automobile.lk` : 'Car Detail',
  meta: [
    { name: 'description', content: car.value ? `${car.value.year} ${car.value.make} ${car.value.model} for ${formatLKRFull(car.value.price)} in ${car.value.location.city}.` : '' },
  ],
}))

const whatsappText = computed(() =>
  car.value ? `I'm interested in the ${car.value.year} ${car.value.make} ${car.value.model} listed on Automobile.lk for ${formatLKRFull(car.value.price)}` : ''
)

const activeTab = ref<'specs' | 'reviews' | 'pricing'>('specs')

const toggleFav = () => {
  if (!car.value) return
  favoritesStore.toggleFavorite(car.value.id)
  uiStore.addToast(favoritesStore.isFavorited(car.value.id) ? 'Saved to favourites' : 'Removed from favourites', 'info')
}

const addToCompare = () => {
  if (!car.value) return
  if (compareStore.isInCompare(car.value.id)) {
    compareStore.removeCar(car.value.id)
  } else if (compareStore.count < 3) {
    compareStore.addCar(car.value as any)
    uiStore.addToast('Added to compare', 'success')
  } else {
    uiStore.addToast('Only 3 cars can be compared', 'warning')
  }
}

// Mock user reviews
const userReviews = [
  {
    id: 'ur1', carId: '1', userId: 'u1', userName: 'Saman Perera', overallRating: 5,
    ratings: { performance: 4, comfort: 5, safety: 5, fuelEconomy: 5, value: 4 },
    title: 'Excellent hybrid car for Sri Lanka roads', content: 'I\'ve been using this car for 6 months and it\'s been fantastic. Fuel economy is outstanding — I\'m getting around 25km/L in mixed conditions.',
    pros: ['Great fuel economy', 'Comfortable ride', 'Easy to drive'],
    cons: ['Could use more cargo space'],
    ownership: 'Owned 6 months', helpful: 12, published: '2024-11-15T10:00:00Z', verified: true,
  },
]

const mockRatingBreakdown = {
  average: 4.6, total: 47,
  distribution: { 5: 28, 4: 12, 3: 5, 2: 1, 1: 1 },
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Loading -->
    <div v-if="pending" class="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div class="grid lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-4">
          <div class="skeleton aspect-video rounded-2xl" />
          <div class="skeleton h-8 w-3/4 rounded" />
          <div class="skeleton h-10 w-1/2 rounded" />
        </div>
        <div class="skeleton h-96 rounded-2xl" />
      </div>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div class="text-5xl mb-4">🚗</div>
      <h1 class="font-display font-bold text-gray-900 text-2xl mb-2">Car Not Found</h1>
      <p class="text-muted mb-6">This listing may have been removed or doesn't exist.</p>
      <NuxtLink to="/cars"><AppButton variant="primary">Browse All Cars</AppButton></NuxtLink>
    </div>

    <template v-else-if="car">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs text-muted mb-6">
          <NuxtLink to="/" class="hover:text-gray-900 transition-colors">Home</NuxtLink>
          <span>›</span>
          <NuxtLink to="/cars" class="hover:text-gray-900 transition-colors">Cars</NuxtLink>
          <span>›</span>
          <NuxtLink :to="`/cars?make=${car.make}`" class="hover:text-gray-900 transition-colors">{{ car.make }}</NuxtLink>
          <span>›</span>
          <span class="text-gray-900">{{ car.model }}</span>
        </nav>

        <div class="grid lg:grid-cols-3 gap-6 lg:gap-8">
          <!-- Left: Gallery + Details -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Gallery -->
            <CarGallery :images="car.images" :alt="`${car.year} ${car.make} ${car.model}`" />

            <!-- Key Info Bar -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div
                v-for="info in [
                  { label: 'Year', value: car.year },
                  { label: 'Mileage', value: car.mileage === 0 ? 'Brand New' : car.mileage.toLocaleString() + ' km' },
                  { label: 'Fuel', value: car.fuelType, class: 'capitalize' },
                  { label: 'Gearbox', value: car.transmission, class: 'capitalize' },
                ]"
                :key="info.label"
                class="bg-surface border border-border rounded-xl p-3 text-center"
              >
                <p class="text-muted text-xs mb-1">{{ info.label }}</p>
                <p :class="['text-gray-900 font-semibold text-sm', info.class]">{{ info.value }}</p>
              </div>
            </div>

            <!-- Title & Price (mobile) -->
            <div class="lg:hidden bg-surface border border-border rounded-2xl p-5">
              <div class="flex items-start justify-between gap-3 mb-3">
                <div>
                  <p class="text-muted text-sm">{{ car.make }} · {{ car.year }}</p>
                  <h1 class="font-display font-bold text-gray-900 text-2xl">{{ car.model }} {{ car.variant }}</h1>
                </div>
                <DealRatingBadge :rating="car.dealRating" :price="car.price" :market-value="car.marketValue" size="md" />
              </div>
              <PriceTag :price="car.price" size="lg" :negotiable="car.negotiable" />
            </div>

            <!-- Tabs -->
            <div class="border-b border-border">
              <div class="flex gap-0">
                <button
                  v-for="tab in [{ id: 'specs', label: 'Specifications' }, { id: 'reviews', label: `Reviews (${userReviews.length})` }, { id: 'pricing', label: 'Price Analysis' }]"
                  :key="tab.id"
                  :class="[
                    'px-5 py-3 text-sm font-medium border-b-2 transition-colors',
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted hover:text-gray-900'
                  ]"
                  @click="activeTab = tab.id as any"
                >
                  {{ tab.label }}
                </button>
              </div>
            </div>

            <!-- Tab content -->
            <div>
              <CarSpecs v-if="activeTab === 'specs'" :car="car as any" />

              <div v-else-if="activeTab === 'reviews'" class="space-y-5">
                <RatingBreakdown :breakdown="mockRatingBreakdown" />
                <UserReviewCard v-for="review in userReviews" :key="review.id" :review="review as any" />
              </div>

              <CarPricingHistory
                v-else-if="activeTab === 'pricing'"
                :current-price="car.price"
                :market-value="car.marketValue"
                :make="car.make"
                :model="car.model"
              />
            </div>
          </div>

          <!-- Right: Contact Card -->
          <div class="space-y-4">
            <!-- Price Block (desktop) -->
            <div class="hidden lg:block bg-surface border border-border rounded-2xl p-5">
              <div class="flex items-start justify-between gap-3 mb-3">
                <div>
                  <p class="text-muted text-xs">{{ car.make }} · {{ car.year }}</p>
                  <h1 class="font-display font-bold text-gray-900 text-xl">{{ car.model }}</h1>
                  <p class="text-muted text-sm">{{ car.variant }}</p>
                </div>
                <DealRatingBadge :rating="car.dealRating" :price="car.price" :market-value="car.marketValue" size="md" />
              </div>
              <PriceTag :price="car.price" size="lg" :negotiable="car.negotiable" class="mb-2" />
              <p class="text-muted text-xs">Market value: <span class="font-mono">{{ formatLKRFull(car.marketValue) }}</span></p>
            </div>

            <!-- Action buttons -->
            <div class="bg-surface border border-border rounded-2xl p-5 space-y-3">
              <AppButton variant="primary" size="lg" full-width>
                📞 Contact Seller
              </AppButton>
              <a
                :href="`https://wa.me/?text=${encodeURIComponent(whatsappText)}`"
                target="_blank"
                rel="noopener"
                class="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp Seller
              </a>
              <div class="grid grid-cols-2 gap-2">
                <AppButton variant="outline" size="sm" @click="toggleFav">
                  {{ favoritesStore.isFavorited(car.id) ? '❤️ Saved' : '🤍 Save' }}
                </AppButton>
                <AppButton variant="outline" size="sm" @click="addToCompare">
                  {{ compareStore.isInCompare(car.id) ? '✓ Comparing' : '⚖ Compare' }}
                </AppButton>
              </div>
              <NuxtLink to="/finance/loan-calculator">
                <AppButton variant="ghost" size="sm" full-width class="border border-border">
                  📊 Calculate EMI
                </AppButton>
              </NuxtLink>
            </div>

            <!-- Key info -->
            <div class="bg-surface border border-border rounded-2xl p-5 space-y-3">
              <h3 class="font-semibold text-gray-900 text-sm">Key Details</h3>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-muted">Location</span>
                  <span class="text-gray-900">{{ car.location.city }}, {{ car.location.province }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted">Body Type</span>
                  <span class="text-gray-900 capitalize">{{ car.bodyType }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted">Condition</span>
                  <span class="text-gray-900 capitalize">{{ car.condition }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted">Seller</span>
                  <span class="text-gray-900 capitalize">{{ car.sellerType }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted">Views</span>
                  <span class="text-gray-900">{{ car.views.toLocaleString() }}</span>
                </div>
              </div>
            </div>

            <!-- Dealer Store Link Card -->
            <div v-if="car.dealerId" class="bg-primary/5 border border-primary/20 rounded-2xl p-5 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-primary">Verified Showroom</span>
                <span class="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">Official Store</span>
              </div>
              <div>
                <h4 class="font-display font-bold text-gray-900 text-base">In Stock at Dealer Showroom</h4>
                <p class="text-muted text-xs mt-1">This vehicle is inspected and displayed at an authorized dealership with warranty options.</p>
              </div>
              <NuxtLink :to="`/dealers/${car.dealerId}`" class="block">
                <AppButton variant="primary" size="sm" full-width class="font-semibold">
                  Visit Dealer Store & See All Stock →
                </AppButton>
              </NuxtLink>
            </div>

            <!-- Safety rating -->
            <div class="bg-surface border border-border rounded-2xl p-5">
              <h3 class="font-semibold text-gray-900 text-sm mb-3">Safety Rating</h3>
              <StarRating :rating="car.safetyRating" size="lg" />
              <p class="text-muted text-xs mt-1">{{ car.safetyRating }}/5 NCAP Stars</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
