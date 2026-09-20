<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'EV Buying Guide Sri Lanka — Automobile.lk' })

const carsStore = useCarsStore()
onMounted(() => carsStore.fetchCars({ fuelType: ['electric'], limit: 6 }))

const whyEV = [
  { icon: '💰', title: 'Save on Fuel', desc: 'EVs cost ~Rs. 2/km vs Rs. 15–20/km for petrol vehicles in Sri Lanka.' },
  { icon: '🌿', title: 'Eco Friendly', desc: 'Zero tailpipe emissions. Help reduce Sri Lanka\'s carbon footprint.' },
  { icon: '🔧', title: 'Lower Maintenance', desc: 'Fewer moving parts means lower servicing costs over time.' },
  { icon: '⚡', title: 'Government Incentives', desc: 'Reduced import duty on EVs under 2024 budget policies.' },
]

const { formatLKRFull } = useFormatCurrency()
const petrolCost = ref(15_000)
const evCost = computed(() => Math.round(petrolCost.value * 0.15))
const annualSaving = computed(() => (petrolCost.value - evCost.value) * 12)
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Hero -->
    <section class="relative py-20 overflow-hidden" style="background: linear-gradient(135deg, #022c22 0%, #07080A 80%)">
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span class="text-6xl block mb-4">⚡</span>
        <h1 class="font-display font-extrabold text-white text-4xl md:text-6xl mb-4">EV Buying Guide</h1>
        <p class="text-emerald-300 text-xl mb-8 max-w-2xl mx-auto">Everything you need to know about buying an electric vehicle in Sri Lanka</p>
        <NuxtLink to="/cars/electric">
          <AppButton size="xl" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold">Browse Electric Cars</AppButton>
        </NuxtLink>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      <!-- Why Go Electric? -->
      <section>
        <SectionTitle eyebrow="Benefits" center>Why Go Electric?</SectionTitle>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          <div v-for="item in whyEV" :key="item.title" class="bg-surface border border-border rounded-2xl p-5 text-center">
            <span class="text-3xl block mb-3">{{ item.icon }}</span>
            <h3 class="font-display font-bold text-gray-900 text-base mb-2">{{ item.title }}</h3>
            <p class="text-muted text-xs leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Cost Comparison -->
      <section class="bg-surface border border-border rounded-2xl p-5 sm:p-8">
        <h2 class="font-display font-bold text-gray-900 text-2xl mb-6">EV vs Petrol Cost Calculator</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <div class="flex justify-between mb-2">
              <label class="text-sm text-muted">Monthly petrol spend (LKR)</label>
              <span class="font-mono text-gray-900 text-sm">{{ formatLKRFull(petrolCost) }}</span>
            </div>
            <input type="range" v-model.number="petrolCost" :min="5000" :max="50000" :step="1000" class="w-full" />
          </div>
          <div class="space-y-4">
            <div class="flex justify-between items-center p-4 bg-background rounded-xl">
              <span class="text-muted">Monthly EV cost (electricity)</span>
              <span class="font-mono text-emerald-400 font-bold">{{ formatLKRFull(evCost) }}</span>
            </div>
            <div class="flex justify-between items-center p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              <span class="text-emerald-300">Annual savings with EV</span>
              <span class="font-mono text-emerald-400 font-bold text-xl">{{ formatLKRFull(annualSaving) }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- EV Listings -->
      <section>
        <SectionTitle eyebrow="Available Now" view-all-link="/cars/electric">Electric Cars for Sale</SectionTitle>
        <div v-if="carsStore.loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <SkeletonCard type="car" :count="3" />
        </div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <CarCard v-for="car in carsStore.cars" :key="car.id" :car="car" />
        </div>
      </section>

      <!-- Government incentives -->
      <section class="bg-surface border border-emerald-500/20 rounded-2xl p-5 sm:p-8">
        <h2 class="font-display font-bold text-gray-900 text-2xl mb-4">🏛️ Government Incentives 2025</h2>
        <div class="space-y-4 text-sm">
          <div v-for="item in [
            { title: 'Reduced Import Duty', desc: 'EVs with less than 100kWh battery capacity qualify for reduced import duty under the 2025 budget.' },
            { title: 'VAT Exemption', desc: 'Select electric vehicles may qualify for partial VAT exemption on the government-approved list.' },
            { title: 'Charging Infrastructure', desc: 'Government plans to install 500+ EV charging stations across Sri Lanka by 2026.' },
          ]" :key="item.title" class="flex gap-4 p-4 bg-background rounded-xl">
            <span class="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
            <div>
              <p class="text-gray-900 font-semibold">{{ item.title }}</p>
              <p class="text-muted mt-0.5">{{ item.desc }}</p>
            </div>
          </div>
        </div>
        <p class="text-muted text-xs mt-4">* Always verify with official government sources. Policies subject to change.</p>
      </section>
    </div>
  </div>
</template>
