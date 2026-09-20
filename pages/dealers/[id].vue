<script setup lang="ts">
import type { Dealer, Car } from '~/types'

definePageMeta({ layout: 'default' })

const route = useRoute()
const id = route.params.id as string
const uiStore = useUiStore()

const { data, pending, error } = await useFetch(`/api/dealers/${id}`)

const dealer = computed<Dealer | null>(() => (data.value as any)?.dealer || null)
const cars = computed<Car[]>(() => (data.value as any)?.cars || [])

useHead(() => ({
  title: dealer.value
    ? `${dealer.value.name} — Verified Vehicle Showroom & Store — Automobile.lk`
    : 'Dealer Store — Automobile.lk',
  meta: [
    {
      name: 'description',
      content: dealer.value
        ? `Visit ${dealer.value.name} virtual store. Explore all ${dealer.value.listingCount} vehicles for sale, book test drives, and view showroom location in ${dealer.value.address}.`
        : 'Automobile dealership virtual store.',
    },
  ],
}))

// Store tabs
const activeTab = ref<'inventory' | 'about' | 'services' | 'reviews'>('inventory')

// Inventory filters
const inventorySearch = ref('')
const selectedCondition = ref<'all' | 'new' | 'used' | 'reconditioned'>('all')
const selectedBodyType = ref<string>('all')
const sortBy = ref<'newest' | 'price_asc' | 'price_desc' | 'mileage'>('newest')

const bodyTypes = computed(() => {
  const types = new Set<string>()
  cars.value.forEach(c => types.add(c.bodyType))
  return ['all', ...Array.from(types)]
})

const filteredCars = computed(() => {
  let list = [...cars.value]

  if (inventorySearch.value.trim()) {
    const q = inventorySearch.value.toLowerCase()
    list = list.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.make.toLowerCase().includes(q) ||
      c.model.toLowerCase().includes(q) ||
      c.variant.toLowerCase().includes(q)
    )
  }

  if (selectedCondition.value !== 'all') {
    list = list.filter(c => c.condition === selectedCondition.value)
  }

  if (selectedBodyType.value !== 'all') {
    list = list.filter(c => c.bodyType === selectedBodyType.value)
  }

  if (sortBy.value === 'price_asc') {
    list.sort((a, b) => a.price - b.price)
  } else if (sortBy.value === 'price_desc') {
    list.sort((a, b) => b.price - a.price)
  } else if (sortBy.value === 'mileage') {
    list.sort((a, b) => a.mileage - b.mileage)
  } else {
    list.sort((a, b) => new Date(b.posted).getTime() - new Date(a.posted).getTime())
  }

  return list
})

// Booking Modal
const showBookingModal = ref(false)
const bookingCar = ref('')
const bookingName = ref('')
const bookingPhone = ref('')
const bookingDate = ref('')
const bookingNotes = ref('')
const bookingSuccess = ref(false)

const openBookingModal = (carTitle?: string) => {
  if (carTitle) bookingCar.value = carTitle
  showBookingModal.value = true
  bookingSuccess.value = false
}

const submitBooking = () => {
  if (!bookingName.value || !bookingPhone.value) {
    uiStore.addToast('Please provide your name and contact phone number', 'warning')
    return
  }
  bookingSuccess.value = true
  uiStore.addToast('Test drive appointment request sent to dealer!', 'success')
  setTimeout(() => {
    showBookingModal.value = false
    bookingName.value = ''
    bookingPhone.value = ''
    bookingNotes.value = ''
  }, 1800)
}

// Review form state
const newReviewAuthor = ref('')
const newReviewRating = ref(5)
const newReviewComment = ref('')
const newReviewCar = ref('')
const reviewSubmitted = ref(false)

const submitReview = () => {
  if (!newReviewAuthor.value || !newReviewComment.value) {
    uiStore.addToast('Please enter your name and review details', 'warning')
    return
  }
  reviewSubmitted.value = true
  uiStore.addToast('Thank you! Your verified review has been submitted for moderation.', 'success')
  newReviewAuthor.value = ''
  newReviewComment.value = ''
  newReviewCar.value = ''
}
</script>

<template>
  <div class="min-h-screen bg-surface pb-16">
    <!-- Loading State -->
    <div v-if="pending" class="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div class="h-64 bg-gray-200 rounded-3xl animate-pulse mb-8" />
      <div class="h-10 w-64 bg-gray-200 rounded-lg animate-pulse" />
    </div>

    <!-- 404 State -->
    <div v-else-if="!dealer" class="max-w-xl mx-auto px-4 py-20 text-center">
      <div class="w-16 h-16 bg-red-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
        !
      </div>
      <h1 class="text-2xl font-bold font-display text-gray-900 mb-2">Dealership Not Found</h1>
      <p class="text-muted text-sm mb-6">The automobile showroom store you are searching for might have moved or is inactive.</p>
      <NuxtLink to="/dealers">
        <AppButton variant="primary">Browse Verified Dealers</AppButton>
      </NuxtLink>
    </div>

    <!-- Dealer Storefront Main -->
    <div v-else>
      <!-- Store Header Hero Banner -->
      <div class="relative bg-gray-900 text-white overflow-hidden">
        <!-- Banner Background -->
        <div class="absolute inset-0 z-0">
          <img
            :src="dealer.bannerImage || 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&h=500&fit=crop&auto=format'"
            :alt="dealer.name"
            class="w-full h-full object-cover opacity-35"
            @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&h=500&fit=crop&auto=format'"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/80 to-transparent" />
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-8 md:pt-14 md:pb-12">
          <!-- Back Link -->
          <NuxtLink to="/dealers" class="inline-flex items-center gap-1 text-xs text-white/70 hover:text-white mb-6 transition-colors">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            All Dealerships Directory
          </NuxtLink>

          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <!-- Brand Identity -->
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white p-2 border-2 border-white/20 shadow-2xl flex-shrink-0 overflow-hidden flex items-center justify-center">
                <img
                  v-if="dealer.logo"
                  :src="dealer.logo"
                  :alt="dealer.name"
                  class="w-full h-full object-cover rounded-xl"
                  @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=160&h=160&fit=crop&auto=format'"
                />
                <span v-else class="font-display font-extrabold text-4xl text-primary">
                  {{ dealer.name[0] }}
                </span>
              </div>

              <div>
                <div class="flex items-center gap-2 flex-wrap mb-1.5">
                  <span class="px-2.5 py-0.5 rounded-full bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold uppercase tracking-wider">
                    Official Showroom Store
                  </span>
                  <span v-if="dealer.verified" class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-medium">
                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Verified Dealer
                  </span>
                  <span class="text-xs text-white/60">Est. {{ dealer.established || '2005' }}</span>
                </div>

                <h1 class="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
                  {{ dealer.name }}
                </h1>

                <p class="text-white/80 text-sm mt-1.5 flex items-center gap-1.5 flex-wrap">
                  <svg class="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {{ dealer.address }} · {{ dealer.district }}, {{ dealer.province }}
                </p>

                <!-- Rating & Active listings stats -->
                <div class="flex items-center gap-4 mt-3 text-sm flex-wrap">
                  <div class="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg">
                    <svg class="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="font-bold text-white">{{ dealer.rating.toFixed(1) }}</span>
                    <span class="text-white/60">({{ dealer.reviewCount }} reviews)</span>
                  </div>

                  <div class="bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-semibold px-3 py-1 rounded-lg text-xs">
                    {{ cars.length || dealer.listingCount }} Active Vehicles in Store
                  </div>

                  <div v-if="dealer.openHours" class="text-white/70 text-xs flex items-center gap-1">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {{ dealer.openHours }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons: 2x2 grid on mobile phones, flex row on tablet/desktop -->
            <div class="w-full md:w-auto grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-2.5">
              <a
                :href="`tel:${dealer.phone}`"
                class="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-glow-red min-h-[44px]"
              >
                <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="truncate">Call Showroom</span>
              </a>

              <a
                v-if="dealer.whatsapp"
                :href="`https://wa.me/${dealer.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${dealer.name}, I am viewing your virtual vehicle showroom on Automobile.lk and would like more details.`)}`"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all min-h-[44px]"
              >
                <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span class="truncate">WhatsApp Chat</span>
              </a>

              <button
                v-if="dealer.showroomImages && dealer.showroomImages.length > 0"
                @click="activeTab = 'about'"
                class="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs sm:text-sm font-semibold transition-all backdrop-blur-md min-h-[44px]"
              >
                <svg class="w-4 h-4 text-primary-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span class="truncate">Tour ({{ dealer.showroomImages.length }})</span>
              </button>

              <button
                @click="openBookingModal()"
                class="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white/15 hover:bg-white/25 text-white border border-white/20 rounded-xl text-xs sm:text-sm font-semibold transition-all backdrop-blur-md min-h-[44px]"
              >
                <svg class="w-4 h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span class="truncate">Book Test Drive</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Storefront Navigation Tabs -->
      <div class="bg-white border-b border-border sticky top-16 z-30 shadow-xs">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex items-center gap-2 sm:gap-6 overflow-x-auto py-2 no-scrollbar">
            <button
              v-for="tab in [
                { id: 'inventory', label: 'Vehicles in Stock', count: cars.length },
                { id: 'about', label: 'About Showroom' },
                { id: 'services', label: 'Services & Guarantees' },
                { id: 'reviews', label: 'Customer Reviews', count: dealer.reviewCount },
              ]"
              :key="tab.id"
              :class="[
                'px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2',
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              ]"
              @click="activeTab = tab.id as any"
            >
              <span>{{ tab.label }}</span>
              <span
                v-if="tab.count !== undefined"
                :class="[
                  'px-2 py-0.5 rounded-full text-xs font-mono',
                  activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
                ]"
              >
                {{ tab.count }}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <!-- TAB 1: VEHICLES IN STOCK (INVENTORY) -->
        <div v-if="activeTab === 'inventory'">
          <!-- Inventory Search & Filter Bar -->
          <div class="bg-white border border-border rounded-2xl p-4 sm:p-5 mb-8 shadow-sm">
            <div class="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
              <!-- Search box -->
              <div class="relative flex-1 max-w-md">
                <input
                  v-model="inventorySearch"
                  type="text"
                  placeholder="Search in this showroom (e.g. Prius, Vezel, Prado)..."
                  class="w-full bg-surface border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-muted focus:outline-none focus:border-primary"
                />
                <svg class="w-4 h-4 text-muted absolute left-3.5 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <!-- Quick Condition Pills -->
              <div class="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 no-scrollbar">
                <button
                  v-for="cond in ['all', 'new', 'used', 'reconditioned']"
                  :key="cond"
                  :class="[
                    'px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors',
                    selectedCondition === cond
                      ? 'bg-primary text-white font-semibold'
                      : 'bg-surface text-gray-600 hover:text-gray-900 border border-border'
                  ]"
                  @click="selectedCondition = cond as any"
                >
                  {{ cond === 'all' ? 'All Conditions' : cond }}
                </button>
              </div>

              <!-- Sort Dropdown -->
              <div class="flex items-center gap-2">
                <label class="text-xs text-muted shrink-0">Sort By:</label>
                <select
                  v-model="sortBy"
                  class="bg-surface border border-border rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-primary"
                >
                  <option value="newest">Newest Arrivals</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="mileage">Lowest Mileage</option>
                </select>
              </div>
            </div>

            <!-- Body Type Badges -->
            <div v-if="bodyTypes.length > 2" class="flex items-center gap-2 mt-4 pt-3 border-t border-border/60 overflow-x-auto">
              <span class="text-xs text-muted shrink-0">Body Style:</span>
              <button
                v-for="bt in bodyTypes"
                :key="bt"
                :class="[
                  'px-2.5 py-1 rounded-md text-xs uppercase tracking-wide font-medium transition-colors',
                  selectedBodyType === bt
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                ]"
                @click="selectedBodyType = bt"
              >
                {{ bt }}
              </button>
            </div>
          </div>

          <!-- Cars Grid -->
          <div v-if="filteredCars.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="car in filteredCars" :key="car.id" class="relative group">
              <CarCard :car="car" />
              <!-- Quick Test Drive Button -->
              <button
                @click="openBookingModal(car.title)"
                class="absolute top-3 right-12 z-20 px-2.5 py-1 bg-white/95 hover:bg-primary hover:text-white text-gray-700 text-xs font-semibold rounded-lg shadow-sm backdrop-blur-md transition-all border border-border/80"
              >
                Test Drive
              </button>
            </div>
          </div>

          <!-- No Cars Empty State -->
          <div v-else class="bg-white border border-border rounded-2xl p-12 text-center">
            <div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-muted text-xl">
              🔍
            </div>
            <h3 class="font-display font-bold text-gray-900 text-lg mb-1">No matching vehicles</h3>
            <p class="text-muted text-sm max-w-sm mx-auto mb-5">
              No vehicles found matching your current filter criteria in this dealership's showroom.
            </p>
            <button
              @click="inventorySearch = ''; selectedCondition = 'all'; selectedBodyType = 'all'"
              class="px-4 py-2 bg-primary text-white text-xs font-semibold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        </div>

        <!-- TAB 2: ABOUT SHOWROOM & LOCATION -->
        <div v-else-if="activeTab === 'about'" class="space-y-8">
          <div class="grid lg:grid-cols-3 gap-8">
            <!-- Dealer Description & Features -->
            <div class="lg:col-span-2 bg-white border border-border rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <h2 class="font-display font-bold text-2xl text-gray-900 mb-3">About {{ dealer.name }}</h2>
                <p class="text-gray-700 leading-relaxed text-base">
                  {{ dealer.description || 'Welcome to our verified vehicle showroom. We provide genuine, top-condition vehicles directly inspected with transparent paperwork and full Japanese auction history.' }}
                </p>
              </div>

              <!-- Specializations -->
              <div>
                <h3 class="font-semibold text-gray-900 text-sm mb-3">Dealership Specializations</h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="spec in dealer.specialization"
                    :key="spec"
                    class="px-3 py-1.5 bg-primary/10 text-primary rounded-xl text-xs font-semibold border border-primary/20"
                  >
                    ✓ {{ spec }}
                  </span>
                </div>
              </div>

              <!-- Showroom Facility Photos Gallery -->
              <div v-if="dealer.showroomImages && dealer.showroomImages.length > 0">
                <div class="flex items-center justify-between mb-3">
                  <h3 class="font-semibold text-gray-900 text-sm">Official Showroom & Facility Gallery</h3>
                  <span class="text-xs text-primary font-medium">{{ dealer.showroomImages.length }} Verified Photos</span>
                </div>
                <div class="grid sm:grid-cols-2 gap-4">
                  <div
                    v-for="(img, idx) in dealer.showroomImages"
                    :key="idx"
                    class="group relative h-48 rounded-2xl overflow-hidden border border-border shadow-xs bg-gray-100"
                  >
                    <img
                      :src="img"
                      :alt="`${dealer.name} Facility ${idx + 1}`"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop&auto=format'"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div class="absolute bottom-2.5 left-2.5 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-lg text-white text-xs font-semibold">
                      {{ idx === 0 ? 'Main Showroom Floor' : idx === 1 ? 'Customer VIP Lounge' : idx === 2 ? 'Vehicle Handover Bay' : 'Certified Inspection Bay' }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Dealership Highlights -->
              <div>
                <h3 class="font-semibold text-gray-900 text-sm mb-3">Showroom Credentials & Trust Badges</h3>
                <div class="grid sm:grid-cols-2 gap-3">
                  <div
                    v-for="badge in dealer.badges || ['Verified Automobile.lk Dealer', 'Direct Japanese Importer', 'Authorized Vehicle Inspection']"
                    :key="badge"
                    class="flex items-center gap-3 p-3 bg-surface border border-border rounded-xl text-xs font-medium text-gray-800"
                  >
                    <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                      ★
                    </span>
                    <span>{{ badge }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Operating Hours & Contact Card -->
            <div class="space-y-6">
              <div class="bg-white border border-border rounded-2xl p-6">
                <h3 class="font-display font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                  <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Opening Hours
                </h3>
                <div class="space-y-2.5 text-sm">
                  <div class="flex justify-between pb-2 border-b border-border/60">
                    <span class="text-muted">Monday - Friday</span>
                    <span class="font-semibold text-gray-900">{{ dealer.openingHours?.weekdays || '8:30 AM - 6:30 PM' }}</span>
                  </div>
                  <div class="flex justify-between pb-2 border-b border-border/60">
                    <span class="text-muted">Saturday</span>
                    <span class="font-semibold text-gray-900">{{ dealer.openingHours?.saturday || '9:00 AM - 5:00 PM' }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-muted">Sunday</span>
                    <span class="font-semibold text-gray-900">{{ dealer.openingHours?.sunday || '10:00 AM - 2:00 PM' }}</span>
                  </div>
                </div>
              </div>

              <!-- Location Map -->
              <div class="bg-white border border-border rounded-2xl p-6">
                <h3 class="font-display font-bold text-gray-900 text-base mb-2">Showroom Location</h3>
                <p class="text-muted text-xs mb-4">{{ dealer.address }}</p>
                <div class="h-48 rounded-xl overflow-hidden border border-border">
                  <ClientOnly>
                    <DealerMap :dealers="[dealer]" :center="[dealer.lat, dealer.lng]" :zoom="14" />
                    <template #fallback>
                      <div class="w-full h-full bg-surface flex items-center justify-center text-xs text-muted">
                        Loading interactive map...
                      </div>
                    </template>
                  </ClientOnly>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 3: SERVICES & GUARANTEES -->
        <div v-else-if="activeTab === 'services'" class="space-y-6">
          <div class="bg-white border border-border rounded-2xl p-8">
            <h2 class="font-display font-bold text-2xl text-gray-900 mb-2">Showroom Services & Buyer Protection</h2>
            <p class="text-muted text-sm mb-8 max-w-2xl">
              Every vehicle purchased from {{ dealer.name }} comes with our comprehensive customer guarantee and dedicated after-sales support.
            </p>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="(serv, idx) in dealer.services || [
                  'Official Dealership Warranty (3 Years / 100,000 km)',
                  'Speedy Bank Lease Assistance (1-day pre-approval)',
                  'Guaranteed Trade-In & Vehicle Exchange Valuations',
                  'Doorstep Test Drives & VIP Home Consultations',
                  'Government Registration & Revenue License Handling',
                  'Free 1-Year Comprehensive Lube & Oil Maintenance'
                ]"
                :key="idx"
                class="p-6 bg-surface border border-border rounded-2xl hover:border-primary/30 transition-all hover:shadow-sm"
              >
                <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mb-4">
                  0{{ idx + 1 }}
                </div>
                <h3 class="font-semibold text-gray-900 text-base mb-2">{{ serv }}</h3>
                <p class="text-muted text-xs leading-relaxed">
                  Handled on-site with verified legal documentation, authorized bank partners, and genuine parts.
                </p>
              </div>
            </div>

            <!-- Lease Calculator Connect Banner -->
            <div class="mt-8 p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 class="font-display font-bold text-lg text-white">Need Financing For A Vehicle At This Store?</h3>
                <p class="text-white/70 text-xs mt-1">Compare leasing interest rates from Commercial Bank, Sampath, HNB and more.</p>
              </div>
              <NuxtLink to="/finance/loan-calculator">
                <AppButton variant="accent" size="md">Calculate Monthly EMI →</AppButton>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- TAB 4: CUSTOMER REVIEWS & RATINGS -->
        <div v-else-if="activeTab === 'reviews'" class="space-y-8">
          <div class="bg-white border border-border rounded-2xl p-6 sm:p-8">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-border">
              <div>
                <h2 class="font-display font-bold text-2xl text-gray-900 mb-1">Customer Reviews & Ratings</h2>
                <p class="text-muted text-sm">Verified buyer testimonials for {{ dealer.name }}</p>
              </div>

              <!-- Rating summary pill -->
              <div class="flex items-center gap-4 bg-surface p-4 rounded-2xl border border-border">
                <div class="text-center">
                  <div class="font-display font-extrabold text-3xl text-gray-900">{{ dealer.rating.toFixed(1) }}</div>
                  <div class="flex items-center justify-center gap-0.5 text-amber-400 mt-1">
                    <span v-for="i in 5" :key="i">★</span>
                  </div>
                  <div class="text-muted text-xs mt-0.5">{{ dealer.reviewCount }} verified reviews</div>
                </div>
              </div>
            </div>

            <!-- Reviews List -->
            <div class="space-y-4 my-8">
              <div
                v-for="rev in dealer.reviewsList || []"
                :key="rev.id"
                class="p-5 bg-surface border border-border rounded-2xl space-y-3"
              >
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <div class="flex items-center gap-2 flex-wrap">
                      <span class="font-semibold text-gray-900 text-sm">{{ rev.author }}</span>
                      <span v-if="rev.verifiedBuyer" class="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full">
                        ✓ Verified Buyer
                      </span>
                    </div>
                    <span v-if="rev.vehiclePurchased" class="text-xs text-primary font-medium">
                      Purchased {{ rev.vehiclePurchased }}
                    </span>
                  </div>
                  <div class="text-right">
                    <div class="flex items-center gap-1 text-amber-400 text-xs font-bold">
                      <span>★</span>
                      <span class="text-gray-900">{{ rev.rating }}/5</span>
                    </div>
                    <span class="text-muted text-[11px]">{{ rev.date }}</span>
                  </div>
                </div>

                <p class="text-gray-700 text-sm leading-relaxed">{{ rev.comment }}</p>
              </div>
            </div>

            <!-- Write a Review Form -->
            <div class="bg-gray-50 border border-border rounded-2xl p-6 mt-8">
              <h3 class="font-display font-bold text-gray-900 text-lg mb-2">Leave a Customer Review</h3>
              <p class="text-muted text-xs mb-4">Did you buy a vehicle or interact with this showroom? Share your experience.</p>

              <div class="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                  <input
                    v-model="newReviewAuthor"
                    type="text"
                    placeholder="e.g. Rohitha Perera"
                    class="w-full bg-white border border-border rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Vehicle Purchased (Optional)</label>
                  <input
                    v-model="newReviewCar"
                    type="text"
                    placeholder="e.g. 2022 Toyota Prius"
                    class="w-full bg-white border border-border rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div class="mb-4">
                <label class="block text-xs font-semibold text-gray-700 mb-1">Rating</label>
                <div class="flex items-center gap-2">
                  <button
                    v-for="star in 5"
                    :key="star"
                    type="button"
                    :class="[
                      'text-xl transition-transform hover:scale-125',
                      star <= newReviewRating ? 'text-amber-400' : 'text-gray-300'
                    ]"
                    @click="newReviewRating = star"
                  >
                    ★
                  </button>
                  <span class="text-xs text-muted ml-2">{{ newReviewRating }} Stars</span>
                </div>
              </div>

              <div class="mb-4">
                <label class="block text-xs font-semibold text-gray-700 mb-1">Review Comments</label>
                <textarea
                  v-model="newReviewComment"
                  rows="3"
                  placeholder="Describe vehicle condition, customer service, and paperwork turnaround..."
                  class="w-full bg-white border border-border rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-primary"
                />
              </div>

              <AppButton variant="primary" size="md" @click="submitReview">
                Submit Customer Review
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Book Test Drive / Showroom Visit Modal -->
    <div
      v-if="showBookingModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
      @click.self="showBookingModal = false"
    >
      <div class="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-border relative">
        <button
          @click="showBookingModal = false"
          class="absolute top-5 right-5 text-gray-400 hover:text-gray-900"
        >
          ✕
        </button>

        <div v-if="bookingSuccess" class="text-center py-8">
          <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            ✓
          </div>
          <h3 class="font-display font-bold text-2xl text-gray-900 mb-2">Request Received!</h3>
          <p class="text-muted text-sm">
            {{ dealer?.name }} showroom manager will contact you at {{ bookingPhone }} to confirm your test drive appointment.
          </p>
        </div>

        <div v-else>
          <h3 class="font-display font-bold text-2xl text-gray-900 mb-1">Book Showroom Visit</h3>
          <p class="text-muted text-xs mb-6">Schedule a personal test drive or viewing at {{ dealer?.name }}.</p>

          <div class="space-y-4">
            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1">Vehicle Interested In</label>
              <select
                v-model="bookingCar"
                class="w-full bg-surface border border-border rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-primary"
              >
                <option value="">Any Vehicle / General Consultation</option>
                <option v-for="car in cars" :key="car.id" :value="car.title">
                  {{ car.title }} ({{ car.condition.toUpperCase() }})
                </option>
              </select>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Your Full Name</label>
                <input
                  v-model="bookingName"
                  type="text"
                  placeholder="e.g. Kasun Silva"
                  class="w-full bg-surface border border-border rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Contact Phone</label>
                <input
                  v-model="bookingPhone"
                  type="tel"
                  placeholder="+94 77 ..."
                  class="w-full bg-surface border border-border rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1">Preferred Date & Time</label>
              <input
                v-model="bookingDate"
                type="datetime-local"
                class="w-full bg-surface border border-border rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1">Additional Notes</label>
              <textarea
                v-model="bookingNotes"
                rows="2"
                placeholder="Trade-in queries, leasing interest, or specific questions..."
                class="w-full bg-surface border border-border rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-primary"
              />
            </div>

            <div class="pt-2 flex gap-3">
              <AppButton variant="primary" size="lg" full-width @click="submitBooking">
                Confirm Appointment Request
              </AppButton>
              <button
                @click="showBookingModal = false"
                class="px-4 py-2.5 border border-border text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
