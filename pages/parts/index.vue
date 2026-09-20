<script setup lang="ts">
import type { Part } from '~/types'

definePageMeta({ layout: 'default' })

const route = useRoute()
const router = useRouter()
const { formatLKRFull } = useFormatCurrency()
const uiStore = useUiStore()

useHead({
  title: 'Auto Parts, Lubricants & Accessories Sri Lanka — Filter by Chassis & Model',
  meta: [
    {
      name: 'description',
      content: 'Buy genuine spare parts, engine oils, lubricants, and car accessories in Sri Lanka. Filter by Vehicle Type, Model, and Chassis / VIN number with guaranteed fitment.',
    },
  ],
})

// Query state initialization from URL
const selectedVehicleType = ref(route.query.vehicleType as string || 'all')
const selectedMake = ref(route.query.make as string || '')
const selectedModel = ref(route.query.model as string || '')
const chassisQuery = ref(route.query.chassis as string || '')
const selectedCategory = ref(route.query.category as string || 'all')
const selectedCondition = ref(route.query.condition as string || 'all')
const searchQuery = ref(route.query.q as string || '')
const sortBy = ref<'relevance' | 'price_asc' | 'price_desc' | 'rating'>('relevance')

// Chassis Helper modal
const showChassisGuide = ref(false)

// Data fetching
const { data, pending, refresh } = await useFetch('/api/parts', {
  query: computed(() => ({
    vehicleType: selectedVehicleType.value !== 'all' ? selectedVehicleType.value : undefined,
    make: selectedMake.value || undefined,
    model: selectedModel.value || undefined,
    chassis: chassisQuery.value.trim() || undefined,
    category: selectedCategory.value !== 'all' ? selectedCategory.value : undefined,
    condition: selectedCondition.value !== 'all' ? selectedCondition.value : undefined,
    q: searchQuery.value.trim() || undefined,
    sortBy: sortBy.value,
  })),
})

const parts = computed<Part[]>(() => (data.value as any)?.parts || [])
const totalCount = computed(() => (data.value as any)?.total || 0)

// Quick popular chassis buttons
const popularChassis = [
  { code: 'ZVW50', label: 'Prius 4th Gen' },
  { code: 'ZVW30', label: 'Prius 3rd Gen' },
  { code: 'RU3', label: 'Vezel Hybrid' },
  { code: 'GP5', label: 'Fit Hybrid' },
  { code: 'NZE141', label: 'Corolla Axio' },
  { code: 'HA36S', label: 'Alto 660cc' },
  { code: 'W205', label: 'Mercedes C200' },
  { code: 'F30', label: 'BMW 3 Series' },
]

const setChassis = (code: string) => {
  chassisQuery.value = code
  applyFilters()
}

const clearFilters = () => {
  selectedVehicleType.value = 'all'
  selectedMake.value = ''
  selectedModel.value = ''
  chassisQuery.value = ''
  selectedCategory.value = 'all'
  selectedCondition.value = 'all'
  searchQuery.value = ''
  applyFilters()
}

const applyFilters = () => {
  router.push({
    path: '/parts',
    query: {
      vehicleType: selectedVehicleType.value !== 'all' ? selectedVehicleType.value : undefined,
      make: selectedMake.value || undefined,
      model: selectedModel.value || undefined,
      chassis: chassisQuery.value.trim() || undefined,
      category: selectedCategory.value !== 'all' ? selectedCategory.value : undefined,
      condition: selectedCondition.value !== 'all' ? selectedCondition.value : undefined,
      q: searchQuery.value.trim() || undefined,
    },
  })
}

// WhatsApp Quick Order
const openWhatsAppEnquiry = (part: Part) => {
  const text = `Hello, I saw "${part.title}" (Part No: ${part.partNumber}) for ${formatLKRFull(part.price)} on Automobile.lk. Is it currently in stock for immediate purchase/dispatch?`
  window.open(`https://wa.me/${part.seller.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`, '_blank')
}
</script>

<template>
  <div class="min-h-screen bg-surface pb-16">
    <!-- Hero Header -->
    <div class="bg-gray-950 text-white relative overflow-hidden py-10 md:py-14 border-b border-gray-800">
      <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 75% 30%, #C8102E 0%, transparent 60%), radial-gradient(circle at 20% 70%, #F5A623 0%, transparent 50%)" />

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div class="max-w-3xl">
          <div class="flex items-center gap-2 mb-3">
            <span class="w-8 h-0.5 bg-primary" />
            <span class="text-xs uppercase tracking-widest text-primary font-bold">100% Genuine Compatibility</span>
          </div>
          <h1 class="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-3">
            Auto Parts, Lubricants & Accessories
          </h1>
          <p class="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
            Filter spare parts, performance upgrades, engine oils and body accessories guaranteed to fit your vehicle's exact Make, Model, or Chassis number.
          </p>
        </div>

        <!-- Interactive Vehicle & Chassis Compatibility Filter Bar -->
        <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl">
          <div class="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/15 flex-wrap">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span class="text-xs font-bold uppercase tracking-wider text-white">Vehicle Compatibility Filter</span>
            </div>
            <button
              @click="showChassisGuide = true"
              class="text-xs text-amber-300 hover:text-amber-200 underline flex items-center gap-1 font-medium"
            >
              ℹ️ Where do I find my Chassis / VIN number?
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <!-- 1. Vehicle Type -->
            <div>
              <label class="block text-[11px] font-semibold text-white/80 mb-1">1. Vehicle Type</label>
              <select
                v-model="selectedVehicleType"
                @change="applyFilters"
                class="w-full bg-gray-900/90 text-white border border-white/20 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-primary"
              >
                <option value="all">All Vehicle Types</option>
                <option value="Car">Passenger Car / Sedan / Hatchback</option>
                <option value="SUV">SUV & Crossover</option>
                <option value="Van">Van & MPV</option>
                <option value="Motorcycle">Motorcycle / Two Wheeler</option>
                <option value="Truck">Commercial Truck / Lorry</option>
              </select>
            </div>

            <!-- 2. Make -->
            <div>
              <label class="block text-[11px] font-semibold text-white/80 mb-1">2. Manufacturer Make</label>
              <select
                v-model="selectedMake"
                @change="applyFilters"
                class="w-full bg-gray-900/90 text-white border border-white/20 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-primary"
              >
                <option value="">All Makes</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Nissan">Nissan</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Hyundai">Hyundai</option>
              </select>
            </div>

            <!-- 3. Model -->
            <div>
              <label class="block text-[11px] font-semibold text-white/80 mb-1">3. Model</label>
              <input
                v-model="selectedModel"
                type="text"
                placeholder="e.g. Prius, Vezel, Alto..."
                @keyup.enter="applyFilters"
                class="w-full bg-gray-900/90 text-white placeholder-white/40 border border-white/20 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-primary"
              />
            </div>

            <!-- 4. Chassis Number / VIN -->
            <div>
              <label class="block text-[11px] font-semibold text-amber-300 mb-1 flex items-center justify-between">
                <span>4. Chassis Code / VIN</span>
                <span class="text-[10px] text-white/60">Exact Match</span>
              </label>
              <div class="relative">
                <input
                  v-model="chassisQuery"
                  type="text"
                  placeholder="e.g. ZVW50, NZE141, GP5..."
                  @keyup.enter="applyFilters"
                  class="w-full bg-gray-900/90 text-white placeholder-white/40 border border-amber-400/50 rounded-xl px-3 py-2.5 text-xs uppercase font-mono tracking-wider focus:outline-none focus:border-amber-400"
                />
                <button
                  v-if="chassisQuery"
                  @click="chassisQuery = ''; applyFilters()"
                  class="absolute right-3 top-2.5 text-white/50 hover:text-white text-xs"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>

          <!-- Quick Popular Chassis Shortcuts -->
          <div class="flex items-center gap-1.5 flex-wrap mt-4 pt-3 border-t border-white/10 text-xs">
            <span class="text-white/60 shrink-0 text-[11px]">Popular Chassis:</span>
            <button
              v-for="item in popularChassis"
              :key="item.code"
              @click="setChassis(item.code)"
              :class="[
                'px-2.5 py-1 rounded-md text-[11px] font-mono transition-all',
                chassisQuery.toUpperCase() === item.code
                  ? 'bg-amber-400 text-gray-950 font-bold shadow-glow-accent'
                  : 'bg-white/10 hover:bg-white/20 text-white/90 border border-white/10'
              ]"
            >
              {{ item.code }} ({{ item.label }})
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Active Compatibility Filter Status Banner -->
    <div v-if="chassisQuery || selectedMake || selectedModel" class="bg-emerald-50 border-b border-emerald-200 py-3">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 flex-wrap text-xs">
        <div class="flex items-center gap-2">
          <span class="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[11px]">✓</span>
          <span class="text-emerald-900 font-semibold">
            Compatibility Filter Active:
          </span>
          <span class="font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
            {{ chassisQuery ? `Chassis: ${chassisQuery.toUpperCase()}` : '' }}
            {{ selectedMake ? `Make: ${selectedMake}` : '' }}
            {{ selectedModel ? `Model: ${selectedModel}` : '' }}
          </span>
          <span class="text-emerald-700">Showing only verified compatible parts</span>
        </div>

        <button
          @click="clearFilters"
          class="text-emerald-800 hover:text-emerald-950 font-semibold underline"
        >
          Reset All Filters
        </button>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <!-- Visual Category Showcase -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h2 class="font-display font-bold text-gray-900 text-lg">Browse by Product Category</h2>
          <span class="text-xs text-muted">100% Guaranteed OEM & Aftermarket Fitment</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          <button
            v-for="cat in [
              { id: 'engine', label: 'Engine & Hybrid', count: '14 Parts', img: 'https://images.unsplash.com/photo-1600790142055-619df03207e6?w=400&h=250&fit=crop&auto=format' },
              { id: 'suspension-brakes', label: 'Brakes & Suspension', count: '28 Parts', img: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=400&h=250&fit=crop&auto=format' },
              { id: 'lubricants-fluids', label: 'Lubricants & Oils', count: '45 Items', img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=250&fit=crop&auto=format' },
              { id: 'batteries', label: 'Batteries & EV Cells', count: '12 Items', img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&h=250&fit=crop&auto=format' },
              { id: 'tyres-wheels', label: 'Tyres & Alloys', count: '30 Items', img: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=400&h=250&fit=crop&auto=format' },
              { id: 'accessories', label: 'Dashcams & Tech', count: '50+ Items', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop&auto=format' },
            ]"
            :key="cat.id"
            :class="[
              'group relative rounded-2xl overflow-hidden text-left border transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md aspect-4/3 flex flex-col justify-end p-3',
              selectedCategory === cat.id ? 'ring-2 ring-primary border-primary' : 'border-border'
            ]"
            @click="selectedCategory = (selectedCategory === cat.id ? 'all' : cat.id); applyFilters()"
          >
            <img
              :src="cat.img"
              :alt="cat.label"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1600790142055-619df03207e6?w=400&h=250&fit=crop&auto=format'"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/40 to-transparent" />
            <div class="relative z-10">
              <span class="text-[10px] text-primary-light font-semibold uppercase tracking-wider block">{{ cat.count }}</span>
              <span class="font-display font-bold text-white text-xs sm:text-sm leading-tight block">{{ cat.label }}</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Category Filter Pills -->
      <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
        <button
          v-for="cat in [
            { id: 'all', label: 'All Products' },
            { id: 'engine', label: '⚙️ Engine & Drivetrain' },
            { id: 'suspension-brakes', label: '🛑 Brakes & Suspension' },
            { id: 'lubricants-fluids', label: '🛢️ Lubricants & Fluids' },
            { id: 'batteries', label: '🔋 Batteries & Hybrid' },
            { id: 'tyres-wheels', label: '🛞 Tyres & Wheels' },
            { id: 'accessories', label: '✨ Tech & Accessories' },
          ]"
          :key="cat.id"
          :class="[
            'px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all',
            selectedCategory === cat.id
              ? 'bg-primary text-white shadow-sm'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-border'
          ]"
          @click="selectedCategory = cat.id; applyFilters()"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Controls & Count Bar -->
      <div class="bg-white border border-border rounded-2xl p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <!-- Search within parts -->
        <div class="relative w-full sm:w-80">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search part name or number..."
            @keyup.enter="applyFilters"
            class="w-full bg-surface border border-border rounded-xl pl-9 pr-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-primary"
          />
          <svg class="w-3.5 h-3.5 text-muted absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div class="flex items-center justify-between w-full sm:w-auto gap-4 text-xs">
          <span class="text-muted font-medium">
            Found <strong class="text-gray-900 font-bold">{{ totalCount }}</strong> products
          </span>

          <div class="flex items-center gap-2">
            <label class="text-muted text-xs">Condition:</label>
            <select
              v-model="selectedCondition"
              @change="applyFilters"
              class="bg-surface border border-border rounded-xl px-2.5 py-1.5 text-xs text-gray-900 focus:outline-none focus:border-primary"
            >
              <option value="all">All</option>
              <option value="brand-new-oem">Brand New OEM</option>
              <option value="aftermarket">Aftermarket</option>
              <option value="reconditioned">Reconditioned</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Products Grid -->
      <div v-if="parts.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="part in parts"
          :key="part.id"
          class="bg-white border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col group"
        >
          <!-- Product Image -->
          <div class="relative h-48 bg-gray-100 overflow-hidden">
            <img
              :src="part.images[0]"
              :alt="part.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1600790142055-619df03207e6?w=800&h=600&fit=crop&auto=format'"
            />
            <!-- Badges -->
            <div class="absolute top-2.5 left-2.5 flex flex-col gap-1">
              <span v-if="part.badge" class="px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded-md uppercase tracking-wider shadow-sm">
                {{ part.badge }}
              </span>
              <span v-if="part.condition === 'brand-new-oem'" class="px-2 py-0.5 bg-emerald-600 text-white text-[10px] font-semibold rounded-md">
                OEM Genuine
              </span>
            </div>

            <!-- In Stock status -->
            <div class="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-black/75 backdrop-blur-xs text-white text-[10px] font-medium rounded-md">
              {{ part.inStock ? `${part.stockQuantity} in stock` : 'Out of Stock' }}
            </div>
          </div>

          <!-- Product Details -->
          <div class="p-4 flex-1 flex flex-col">
            <!-- Brand & Part No -->
            <div class="flex items-center justify-between text-[11px] text-muted mb-1 font-mono">
              <span class="font-bold text-gray-900">{{ part.brand }}</span>
              <span>PN: {{ part.partNumber }}</span>
            </div>

            <!-- Title -->
            <NuxtLink :to="`/parts/${part.id}`" class="block mb-2">
              <h3 class="font-display font-bold text-sm text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                {{ part.title }}
              </h3>
            </NuxtLink>

            <!-- Chassis compatibility tag -->
            <div class="mb-3">
              <div class="flex items-center gap-1 flex-wrap">
                <span class="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  ✓ Fits:
                </span>
                <span
                  v-for="cCode in part.chassisCodes.slice(0, 3)"
                  :key="cCode"
                  :class="[
                    'text-[10px] font-mono px-1.5 py-0.5 rounded',
                    chassisQuery && cCode.toUpperCase() === chassisQuery.toUpperCase()
                      ? 'bg-amber-300 text-gray-950 font-bold'
                      : 'bg-gray-100 text-gray-700'
                  ]"
                >
                  {{ cCode }}
                </span>
                <span v-if="part.chassisCodes.length > 3" class="text-[10px] text-muted">
                  +{{ part.chassisCodes.length - 3 }} more
                </span>
              </div>
            </div>

            <!-- Pricing & Action -->
            <div class="mt-auto pt-3 border-t border-border flex items-center justify-between">
              <div>
                <div class="font-mono font-extrabold text-primary text-base">
                  {{ formatLKRFull(part.price) }}
                </div>
                <div v-if="part.originalPrice" class="text-[10px] text-muted line-through">
                  {{ formatLKRFull(part.originalPrice) }}
                </div>
              </div>

              <!-- Action buttons -->
              <div class="flex items-center gap-1.5">
                <button
                  @click="openWhatsAppEnquiry(part)"
                  title="WhatsApp Enquiry / Quick Order"
                  class="w-8 h-8 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </button>
                <NuxtLink
                  :to="`/parts/${part.id}`"
                  class="px-3 py-1.5 bg-gray-900 hover:bg-primary text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  View Part
                </NuxtLink>
              </div>
            </div>

            <!-- Seller link -->
            <div class="mt-2 text-[11px] text-muted truncate">
              Sold by:
              <NuxtLink
                v-if="part.seller.storeId"
                :to="`/dealers/${part.seller.storeId}`"
                class="text-primary hover:underline font-medium"
              >
                {{ part.seller.name }}
              </NuxtLink>
              <span v-else class="font-medium text-gray-700">{{ part.seller.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="bg-white border border-border rounded-3xl p-12 text-center max-w-lg mx-auto">
        <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
          ⚙️
        </div>
        <h3 class="font-display font-bold text-xl text-gray-900 mb-1">No Matching Parts Found</h3>
        <p class="text-muted text-xs leading-relaxed mb-6">
          We couldn't find products matching your selected chassis code or criteria. Try searching for generic keywords or clearing filters.
        </p>
        <button
          @click="clearFilters"
          class="px-5 py-2.5 bg-primary text-white text-xs font-semibold rounded-xl"
        >
          Clear Compatibility Filters
        </button>
      </div>
    </div>

    <!-- Chassis Guide Modal -->
    <div
      v-if="showChassisGuide"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
      @click.self="showChassisGuide = false"
    >
      <div class="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-border relative">
        <button
          @click="showChassisGuide = false"
          class="absolute top-5 right-5 text-gray-400 hover:text-gray-900"
        >
          ✕
        </button>

        <h3 class="font-display font-bold text-xl text-gray-900 mb-2">Finding Your Vehicle Chassis / VIN Number</h3>
        <p class="text-muted text-xs mb-6">
          In Sri Lanka, the chassis number represents the exact platform code of your vehicle (e.g. `ZVW50`, `NZE141`, `RU3`, `HA36S`) guaranteeing 100% replacement part accuracy.
        </p>

        <div class="space-y-4 text-xs">
          <div class="p-3 bg-surface border border-border rounded-xl">
            <span class="font-bold text-gray-900 block mb-1">1. Certificate of Registration (CR Book / Revenue License)</span>
            <p class="text-muted leading-relaxed">
              Check the section labeled <strong>"Chassis No."</strong> on your Sri Lankan vehicle registration certificate or annual revenue license slip.
            </p>
          </div>

          <div class="p-3 bg-surface border border-border rounded-xl">
            <span class="font-bold text-gray-900 block mb-1">2. Under the Engine Hood / Firewall Plate</span>
            <p class="text-muted leading-relaxed">
              Metal compliance plate riveted onto the engine bay firewall or suspension tower displaying model code and frame number.
            </p>
          </div>

          <div class="p-3 bg-surface border border-border rounded-xl">
            <span class="font-bold text-gray-900 block mb-1">3. Driver's Door Jamb Sticker</span>
            <p class="text-muted leading-relaxed">
              Tyre pressure and chassis specification sticker located at the bottom of the B-pillar driver's door opening.
            </p>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-border flex justify-end">
          <AppButton variant="primary" size="sm" @click="showChassisGuide = false">
            Got It, Let's Search!
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>
