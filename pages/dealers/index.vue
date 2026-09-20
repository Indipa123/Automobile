<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({
  title: 'Car Dealers & Official Showrooms in Sri Lanka — Automobile.lk',
  meta: [
    { name: 'description', content: 'Explore verified automobile dealerships, visit official virtual showrooms, browse live stock inventory, and book test drives across Sri Lanka.' }
  ]
})

const { data, pending } = useFetch('/api/dealers')
const dealers = computed(() => (data.value as any)?.dealers || [])

const selectedDealer = ref<any>(null)
const search = ref('')
const selectedProvince = ref('all')
const verifiedOnly = ref(false)
const viewMode = ref<'grid' | 'map'>('grid')

const provinces = computed(() => {
  const set = new Set<string>()
  dealers.value.forEach((d: any) => {
    if (d.province) set.add(d.province)
  })
  return ['all', ...Array.from(set)]
})

const filteredDealers = computed(() => {
  return dealers.value.filter((d: any) => {
    const matchesSearch = !search.value ||
      d.name.toLowerCase().includes(search.value.toLowerCase()) ||
      d.address.toLowerCase().includes(search.value.toLowerCase()) ||
      (d.district && d.district.toLowerCase().includes(search.value.toLowerCase())) ||
      (d.specialization && d.specialization.some((s: string) => s.toLowerCase().includes(search.value.toLowerCase())))

    const matchesProvince = selectedProvince.value === 'all' || d.province === selectedProvince.value
    const matchesVerified = !verifiedOnly.value || d.verified

    return matchesSearch && matchesProvince && matchesVerified
  })
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Header Hero Banner -->
    <div class="bg-gray-950 text-white border-b border-border/40 relative overflow-hidden">
      <!-- Background Ambient Glow -->
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div class="absolute top-1/2 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold uppercase tracking-wider mb-3">
              <span>🏛️</span> Official Dealer Directory
            </div>
            <h1 class="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Verified Automobile Showrooms
            </h1>
            <p class="text-gray-300 text-sm sm:text-base mt-2 max-w-2xl">
              Connect with Sri Lanka's leading vehicle importers and authorized showrooms. Step into each dealer's dedicated virtual store to inspect verified stock, view auction certifications, and schedule VIP test drives.
            </p>
          </div>

          <!-- Quick Stats -->
          <div class="flex items-center justify-around sm:justify-start gap-2 sm:gap-4 border border-white/10 bg-white/5 rounded-2xl p-3 sm:p-4 backdrop-blur-md w-full md:w-auto shrink-0">
            <div class="text-center px-2">
              <div class="font-display font-bold text-2xl text-white">{{ dealers.length }}</div>
              <div class="text-[11px] text-gray-400 uppercase tracking-wider">Showrooms</div>
            </div>
            <div class="w-px h-8 bg-white/10" />
            <div class="text-center px-2">
              <div class="font-display font-bold text-2xl text-primary">500+</div>
              <div class="text-[11px] text-gray-400 uppercase tracking-wider">Cars in Store</div>
            </div>
            <div class="w-px h-8 bg-white/10" />
            <div class="text-center px-2">
              <div class="font-display font-bold text-2xl text-emerald-400">100%</div>
              <div class="text-[11px] text-gray-400 uppercase tracking-wider">Verified</div>
            </div>
          </div>
        </div>

        <!-- Filter & Search Controls Bar -->
        <div class="mt-8 bg-white/10 p-3 sm:p-4 rounded-2xl backdrop-blur-md border border-white/15 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div class="flex-1 flex flex-col sm:flex-row gap-3">
            <!-- Search input -->
            <div class="relative flex-1">
              <input
                v-model="search"
                type="text"
                placeholder="Search dealer by name, brand, or location (e.g. Prima, Toyota, Colombo)..."
                class="w-full bg-white/90 text-gray-900 placeholder-gray-500 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
              />
              <svg class="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <!-- Province Dropdown -->
            <select
              v-model="selectedProvince"
              class="bg-white/90 text-gray-900 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary capitalize"
            >
              <option value="all">All Provinces</option>
              <option v-for="prov in provinces.filter(p => p !== 'all')" :key="prov" :value="prov">
                {{ prov }} Province
              </option>
            </select>
          </div>

          <!-- Verified toggle and View mode switcher -->
          <div class="flex items-center justify-between sm:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
            <label class="flex items-center gap-2 text-xs font-semibold text-white/90 cursor-pointer select-none">
              <input
                v-model="verifiedOnly"
                type="checkbox"
                class="w-4 h-4 rounded text-primary focus:ring-primary"
              />
              <span>Verified Only</span>
            </label>

            <!-- View Switcher -->
            <div class="flex items-center bg-black/40 p-1 rounded-xl border border-white/15">
              <button
                :class="[
                  'px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5',
                  viewMode === 'grid' ? 'bg-primary text-white shadow-sm' : 'text-gray-400 hover:text-white'
                ]"
                @click="viewMode = 'grid'"
              >
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Showroom Grid
              </button>
              <button
                :class="[
                  'px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5',
                  viewMode === 'map' ? 'bg-primary text-white shadow-sm' : 'text-gray-400 hover:text-white'
                ]"
                @click="viewMode = 'map'"
              >
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Map View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Dealers Showcase -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <!-- Loading State -->
      <div v-if="pending" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="n in 6" :key="n" class="bg-white border border-border rounded-3xl p-5 animate-pulse space-y-4">
          <div class="h-48 bg-gray-200 rounded-2xl" />
          <div class="h-5 bg-gray-200 rounded w-2/3" />
          <div class="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      </div>

      <!-- VIEW MODE 1: SHOWROOM GRID VIEW (All Showroom Photos Prominently Visible) -->
      <div v-else-if="viewMode === 'grid'">
        <div v-if="filteredDealers.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
            v-for="dealer in filteredDealers"
            :key="dealer.id"
            :to="`/dealers/${dealer.id}`"
            class="group bg-white border border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <!-- Showroom Banner Photo -->
              <div class="relative h-56 overflow-hidden bg-gray-100">
                <img
                  :src="dealer.bannerImage || 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop&auto=format'"
                  :alt="`${dealer.name} Showroom`"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop&auto=format'"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-black/20" />

                <!-- Badges top -->
                <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span v-if="dealer.verified" class="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-600 text-white rounded-lg text-xs font-semibold shadow-md">
                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Verified Store
                  </span>
                  <span class="px-2.5 py-1 bg-black/60 backdrop-blur-md text-white rounded-lg text-xs font-medium">
                    Est. {{ dealer.established || '2010' }}
                  </span>
                </div>

                <!-- Cars in Store Pill top right -->
                <div class="absolute top-3 right-3 px-3 py-1 bg-emerald-600 text-white rounded-lg text-xs font-bold shadow-md flex items-center gap-1">
                  <span>🚗</span> {{ dealer.listingCount }} Cars in Store
                </div>

                <!-- Dealer Logo floating bottom-left -->
                <div class="absolute bottom-3 left-3 flex items-center gap-3">
                  <div class="w-14 h-14 rounded-2xl bg-white p-1 border-2 border-white/40 shadow-xl overflow-hidden flex items-center justify-center shrink-0">
                    <img
                      v-if="dealer.logo"
                      :src="dealer.logo"
                      :alt="dealer.name"
                      class="w-full h-full object-cover rounded-xl"
                      @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=160&h=160&fit=crop&auto=format'"
                    />
                    <span v-else class="font-display font-extrabold text-xl text-primary">
                      {{ dealer.name[0] }}
                    </span>
                  </div>
                  <div class="text-white">
                    <div class="text-[11px] text-white/70 uppercase tracking-wider font-semibold">Official Showroom</div>
                    <div class="flex items-center gap-1 text-amber-400 text-xs font-bold">
                      <span>★</span>
                      <span>{{ dealer.rating.toFixed(1) }}</span>
                      <span class="text-white/70 font-normal">({{ dealer.reviewCount }} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Content Body -->
              <div class="p-5 space-y-3">
                <div>
                  <h3 class="font-display font-bold text-gray-900 text-xl group-hover:text-primary transition-colors line-clamp-1">
                    {{ dealer.name }}
                  </h3>
                  <p class="text-muted text-xs flex items-center gap-1 mt-1">
                    <svg class="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {{ dealer.address }} · {{ dealer.district || dealer.province }}
                  </p>
                </div>

                <!-- Specializations -->
                <div class="flex flex-wrap gap-1.5 pt-1">
                  <span
                    v-for="spec in dealer.specialization.slice(0, 3)"
                    :key="spec"
                    class="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
                  >
                    {{ spec }}
                  </span>
                </div>

                <!-- Facility Images Preview Strip -->
                <div v-if="dealer.showroomImages && dealer.showroomImages.length > 1" class="pt-2 border-t border-border/70">
                  <div class="text-[11px] font-semibold text-muted mb-2 flex items-center justify-between">
                    <span>Showroom Facilities:</span>
                    <span class="text-primary font-normal text-[10px]">{{ dealer.showroomImages.length }} Photos</span>
                  </div>
                  <div class="grid grid-cols-4 gap-1.5 h-12 rounded-xl overflow-hidden">
                    <div
                      v-for="(img, idx) in dealer.showroomImages.slice(0, 4)"
                      :key="idx"
                      class="relative overflow-hidden bg-gray-100 h-full"
                    >
                      <img
                        :src="img"
                        :alt="`Showroom photo ${idx + 1}`"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&h=120&fit=crop&auto=format'"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer Action CTA -->
            <div class="p-5 pt-0">
              <div class="w-full py-3 bg-primary/10 group-hover:bg-primary group-hover:text-white text-primary font-bold rounded-2xl text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2">
                <span>Enter Virtual Store & Inventory</span>
                <span class="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Empty state -->
        <div v-else class="bg-white border border-border rounded-3xl p-12 text-center max-w-lg mx-auto">
          <span class="text-4xl block mb-3">🔍</span>
          <h3 class="font-display font-bold text-gray-900 text-lg mb-1">No matching dealers found</h3>
          <p class="text-muted text-sm mb-5">Try resetting your search term or province filter to see all verified car showrooms.</p>
          <button
            @click="search = ''; selectedProvince = 'all'; verifiedOnly = false"
            class="px-4 py-2 bg-primary text-white text-xs font-semibold rounded-xl"
          >
            Reset All Filters
          </button>
        </div>
      </div>

      <!-- VIEW MODE 2: MAP & DIRECTORY SPLIT VIEW -->
      <div v-else class="grid lg:grid-cols-5 gap-6">
        <!-- Interactive Map -->
        <div class="lg:col-span-3 h-[580px] rounded-3xl overflow-hidden border border-border sticky top-24 shadow-sm">
          <ClientOnly>
            <DealerMap
              :dealers="filteredDealers"
              @select="selectedDealer = $event"
            />
            <template #fallback>
              <div class="w-full h-full bg-surface flex items-center justify-center text-muted text-sm">
                Loading interactive map...
              </div>
            </template>
          </ClientOnly>
        </div>

        <!-- Dealer List with Rich Cards -->
        <div class="lg:col-span-2 space-y-4 overflow-y-auto max-h-[580px] pr-1">
          <div
            v-for="dealer in filteredDealers"
            :key="dealer.id"
            :class="[
              'rounded-2xl transition-all',
              selectedDealer?.id === dealer.id ? 'ring-2 ring-primary ring-offset-2' : ''
            ]"
            @click="selectedDealer = dealer"
          >
            <DealerCard :dealer="dealer" />
          </div>
          <p v-if="!filteredDealers.length" class="text-center text-muted py-8">No dealers found</p>
        </div>
      </div>
    </div>
  </div>
</template>
