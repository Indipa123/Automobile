<script setup lang="ts">
import type { Dealer, Part } from '~/types'

definePageMeta({ layout: 'default' })

useHead({
  title: "Automobile.lk — Sri Lanka's Complete Automobile Super-Platform",
  meta: [
    {
      name: 'description',
      content: 'Sri Lanka’s 360° automobile marketplace. Buy & sell cars, visit verified dealer showroom stores, find spare parts filtered by Chassis/VIN, book certified garages & 24/7 roadside towing.',
    },
    { property: 'og:title', content: "Automobile.lk — Sri Lanka's Complete Automobile Super-Platform" },
    { property: 'og:description', content: 'Vehicles, Dealer Stores, Chassis Spare Parts, Garages, Service Stations, 24/7 Towing, and Auto Finance.' },
  ],
})

const router = useRouter()

// Fetch featured dealers for showcase
const { data: dealersData } = await useFetch('/api/dealers')
const featuredDealers = computed<Dealer[]>(() => (dealersData.value as any)?.dealers?.slice(0, 4) || [])

// Quick Chassis code search input on home
const homeChassisQuery = ref('')
const handleHomeChassisSearch = () => {
  if (homeChassisQuery.value.trim()) {
    router.push({ path: '/parts', query: { chassis: homeChassisQuery.value.trim() } })
  } else {
    router.push('/parts')
  }
}

// 6 Core Ecosystem Pillars
const ecosystemPillars = [
  {
    title: 'Dealer Showroom Stores',
    tag: '1,200+ Verified Stores',
    description: 'Each dealership features their own virtual storefront listing all their vehicles in stock, warranties, and test drives.',
    icon: '🏬',
    href: '/dealers',
    color: 'from-blue-600/20 to-indigo-600/10 border-blue-500/30 text-blue-600',
    btnText: 'Explore Dealer Stores →',
  },
  {
    title: 'Spare Parts by Chassis / VIN',
    tag: 'Guaranteed Fitment',
    description: 'Filter OEM & aftermarket replacement parts, batteries, and engine oils by exact Chassis number (e.g. ZVW50, NZE141, GP5).',
    icon: '⚙️',
    href: '/parts',
    color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-600',
    btnText: 'Find Chassis Parts →',
  },
  {
    title: 'Certified Garages & Labs',
    tag: 'Engine & Battery Experts',
    description: 'Specialized hybrid battery balancing, European computer diagnostics, and mechanical overhaul repair workshops.',
    icon: '🔧',
    href: '/services/garages',
    color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-600',
    btnText: 'Find Garages →',
  },
  {
    title: '24/7 Emergency Towing',
    tag: '15-20 Min Response',
    description: 'Islandwide hydraulic flatbeds, expressway rescue units, battery jump starts, and rapid breakdown assistance.',
    icon: '🚨',
    href: '/services/towing',
    color: 'from-red-600/20 to-rose-600/10 border-red-500/30 text-primary',
    btnText: 'Towing SOS Hub →',
  },
  {
    title: 'Service Stations & Wash',
    tag: 'Periodic Maintenance',
    description: 'Express lube bays, underbody rust protection spray, touchless car wash, and 9H nano ceramic detailing studios.',
    icon: '🧼',
    href: '/services/service-stations',
    color: 'from-cyan-500/20 to-sky-500/10 border-cyan-500/30 text-cyan-600',
    btnText: 'Lube Stations →',
  },
  {
    title: 'Leasing & Insurance',
    tag: 'Lowest Bank Rates',
    description: 'Compare leasing interest rates from Commercial Bank, Sampath, HNB and calculate instant insurance premiums.',
    icon: '🏦',
    href: '/finance',
    color: 'from-purple-500/20 to-fuchsia-500/10 border-purple-500/30 text-purple-600',
    btnText: 'Finance & Insurance →',
  },
]
</script>

<template>
  <div>
    <!-- Hero with Luxury Animated Showcase & 5-in-1 Universal Search -->
    <HeroSection />

    <!-- 24/7 Emergency Towing Islandwide Ticker Strip -->
    <div class="bg-gray-900 border-y border-white/10 py-3.5 px-4">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div class="flex items-center gap-2.5 text-white/90 font-medium">
          <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping shrink-0" />
          <span class="font-bold text-white">24/7 Roadside Towing SOS Hotline:</span>
          <span class="text-white/70">Stranded on highway or road? Hydraulic flatbeds on standby across Sri Lanka.</span>
        </div>
        <div class="flex items-center gap-3">
          <a
            href="tel:+94779992424"
            class="px-3 py-1.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors shadow-xs"
          >
            📞 Emergency Dispatch: 077 999 2424
          </a>
          <NuxtLink to="/services/towing" class="text-amber-400 hover:underline font-semibold">
            Fare Calculator →
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 360° Automobile Ecosystem Grid -->
    <section class="py-14 md:py-20 bg-background">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <p class="text-primary text-xs font-extrabold tracking-widest uppercase mb-2">Complete Automobile Infrastructure</p>
          <h2 class="font-display font-black text-gray-900 text-3xl sm:text-4xl md:text-5xl tracking-tight">
            One Platform. Every Automotive Need.
          </h2>
          <p class="text-muted text-sm sm:text-base mt-3 leading-relaxed">
            From vehicle buying and dealership showroom stores to chassis-filtered spare parts, specialized hybrid garages, and 24/7 highway towing.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="item in ecosystemPillars"
            :key="item.title"
            :to="item.href"
            class="group p-7 bg-white border border-border rounded-3xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <div class="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {{ item.icon }}
                </div>
                <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-surface border border-border text-gray-700">
                  {{ item.tag }}
                </span>
              </div>

              <h3 class="font-display font-bold text-xl text-gray-900 group-hover:text-primary transition-colors mb-2">
                {{ item.title }}
              </h3>

              <p class="text-muted text-xs leading-relaxed mb-6">
                {{ item.description }}
              </p>
            </div>

            <div class="pt-4 border-t border-border flex items-center justify-between text-xs font-bold text-gray-900 group-hover:text-primary">
              <span>{{ item.btnText }}</span>
              <span class="transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Quick Chassis / VIN Lookup Banner Tool -->
    <section class="py-12 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 80% 50%, #F5A623 0%, transparent 60%)" />

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7">
            <span class="px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              Precision Parts Matching
            </span>
            <h2 class="font-display font-black text-2xl sm:text-4xl text-white tracking-tight mb-3">
              Never Buy The Wrong Spare Part Again.
            </h2>
            <p class="text-white/75 text-sm leading-relaxed max-w-xl">
              Sri Lankan vehicles have subtle variant differences across production years. Simply type your vehicle’s <strong class="text-white">Chassis Code</strong> (found on your CR book or engine bay plate) to see parts guaranteed to fit.
            </p>
          </div>

          <div class="lg:col-span-5 bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-3xl border border-white/20">
            <label class="block text-xs font-bold text-amber-300 uppercase font-mono mb-2">
              Instant Chassis Number / VIN Lookup:
            </label>
            <div class="flex flex-col sm:flex-row gap-2 mb-3">
              <input
                v-model="homeChassisQuery"
                type="text"
                placeholder="e.g. ZVW50, NZE141, GP5, HA36S..."
                @keyup.enter="handleHomeChassisSearch"
                class="flex-1 bg-gray-950 text-white placeholder-white/40 border border-amber-400/40 rounded-xl px-4 py-3 text-xs uppercase font-mono tracking-wider focus:outline-none focus:border-amber-400"
              />
              <button
                @click="handleHomeChassisSearch"
                class="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-gray-950 font-black rounded-xl text-xs transition-all shrink-0 min-h-[44px] touch-manipulation flex items-center justify-center"
              >
                Search Parts →
              </button>
            </div>
            <div class="flex items-center gap-1.5 flex-wrap text-[11px] text-white/70">
              <span>Try:</span>
              <button
                v-for="code in ['ZVW50', 'RU3', 'GP5', 'NZE141', 'W205', 'HA36S']"
                :key="code"
                @click="homeChassisQuery = code; handleHomeChassisSearch()"
                class="underline hover:text-white font-mono"
              >
                {{ code }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Dealer Showroom Stores Spotlight -->
    <section class="py-16 bg-surface border-b border-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
          <div>
            <p class="text-primary text-xs font-semibold tracking-widest uppercase mb-1">Virtual Showroom Stores</p>
            <h2 class="font-display font-bold text-gray-900 text-3xl sm:text-4xl">
              Featured Dealership Stores
            </h2>
            <p class="text-muted text-sm mt-1">Visit each dealer’s dedicated store page to view their complete inventory</p>
          </div>
          <NuxtLink to="/dealers" class="text-primary font-bold text-sm hover:underline flex items-center gap-1">
            View All 1,200+ Dealers Directory →
          </NuxtLink>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <NuxtLink
            v-for="dealer in featuredDealers"
            :key="dealer.id"
            :to="`/dealers/${dealer.id}`"
            class="group bg-white border border-border rounded-3xl p-5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <!-- Store Banner / Logo -->
              <div class="relative h-36 rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <img
                  :src="dealer.bannerImage || 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=300&fit=crop&auto=format'"
                  :alt="dealer.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=300&fit=crop&auto=format'"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div class="absolute bottom-2.5 left-2.5 flex items-center gap-2">
                  <div class="w-10 h-10 rounded-xl bg-white p-1 shadow-sm overflow-hidden flex items-center justify-center font-display font-bold text-primary text-sm border border-white/40">
                    <img
                      v-if="dealer.logo"
                      :src="dealer.logo"
                      :alt="dealer.name"
                      class="w-full h-full object-cover rounded-lg"
                      @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=160&h=160&fit=crop&auto=format'"
                    />
                    <span v-else>{{ dealer.name[0] }}</span>
                  </div>
                  <div>
                    <span v-if="dealer.verified" class="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded shadow-sm">
                      Verified Store
                    </span>
                  </div>
                </div>
              </div>

              <h3 class="font-display font-bold text-gray-900 text-base group-hover:text-primary transition-colors leading-tight mb-1">
                {{ dealer.name }}
              </h3>
              <p class="text-muted text-xs mb-3">📍 {{ dealer.address }}</p>

              <!-- Stats & Specs -->
              <div class="flex items-center justify-between text-xs py-2 border-y border-border/70 mb-3">
                <div class="flex items-center gap-1 text-amber-500 font-bold">
                  <span>★</span>
                  <span>{{ dealer.rating.toFixed(1) }}</span>
                  <span class="text-muted font-normal text-[11px]">({{ dealer.reviewCount }})</span>
                </div>
                <span class="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                  {{ dealer.listingCount }} Cars in Store
                </span>
              </div>
            </div>

            <div class="pt-2 flex items-center justify-between text-xs font-bold text-primary">
              <span>Enter Virtual Store</span>
              <span class="transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Browse by Body Type -->
    <BodyTypeFilter />

    <!-- Featured New Cars -->
    <FeaturedListings
      title="Brand New Vehicles"
      eyebrow="Direct Importers"
      condition="new"
      view-all-link="/cars/new"
      bg-class="bg-surface"
    />

    <!-- Popular Brands -->
    <PopularBrands />

    <!-- Popular Pre-Owned Cars -->
    <FeaturedListings
      title="Verified Pre-Owned Cars"
      eyebrow="Dealer Certified"
      condition="used"
      view-all-link="/cars/used"
      bg-class="bg-background"
    />

    <!-- Deal of the Week -->
    <DealOfWeek />

    <!-- Price Range Cards -->
    <PriceRangeCards />

    <!-- Loan Calculator Teaser -->
    <section class="py-16 bg-surface border-t border-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Financing & Insurance Connections</p>
            <h2 class="font-display font-bold text-gray-900 text-3xl md:text-4xl mb-4">
              Calculate Your Monthly Leasing EMI
            </h2>
            <p class="text-muted text-base mb-6 leading-relaxed">
              Estimate monthly repayments across Commercial Bank, Sampath, HNB and compare full comprehensive auto insurance quotes directly on our platform.
            </p>
            <div class="flex flex-wrap gap-3">
              <NuxtLink to="/finance/loan-calculator">
                <AppButton variant="primary" size="lg">Try Loan Calculator</AppButton>
              </NuxtLink>
              <NuxtLink to="/finance/insurance">
                <AppButton variant="outline" size="lg">Get Insurance Quote</AppButton>
              </NuxtLink>
            </div>
          </div>
          <div class="bg-background border border-border rounded-3xl p-6 shadow-sm">
            <LoanCalculator />
          </div>
        </div>
      </div>
    </section>

    <!-- Sell CTA Banner -->
    <section class="py-16 bg-primary relative overflow-hidden">
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 80% 50%, white 0%, transparent 60%)" />
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="font-display font-extrabold text-white text-3xl md:text-5xl mb-4">
          Are You An Automobile Dealer or Service Provider?
        </h2>
        <p class="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Create your own virtual showroom store, list spare parts, or register your garage and towing fleet on Sri Lanka's largest automobile network.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <NuxtLink to="/sell/post-ad">
            <AppButton variant="accent" size="xl" class="font-bold">
              + Post Vehicle Ad Free
            </AppButton>
          </NuxtLink>
          <NuxtLink to="/dealers">
            <AppButton
              variant="ghost"
              size="xl"
              class="text-white border border-white/30 hover:bg-white/10"
            >
              Dealer Showrooms Directory →
            </AppButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
