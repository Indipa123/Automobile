<script setup lang="ts">
const { formatLKRFull } = useFormatCurrency()

// Mock deal of the week
const deal = {
  id: 'deal-1',
  slug: 'toyota-land-cruiser-prado-2022-deal',
  make: 'Toyota',
  model: 'Land Cruiser Prado',
  year: 2022,
  price: 32_500_000,
  marketValue: 35_000_000,
  image: 'https://images.unsplash.com/photo-1583267746897-2cf415887172?w=800&h=450&fit=crop&auto=format',
  location: 'Colombo 03',
  mileage: 28_000,
  savings: 2_500_000,
}

// Countdown timer
const timeLeft = ref({ days: 2, hours: 14, minutes: 33, seconds: 45 })

onMounted(() => {
  const interval = setInterval(() => {
    if (timeLeft.value.seconds > 0) {
      timeLeft.value.seconds--
    } else if (timeLeft.value.minutes > 0) {
      timeLeft.value.minutes--
      timeLeft.value.seconds = 59
    } else if (timeLeft.value.hours > 0) {
      timeLeft.value.hours--
      timeLeft.value.minutes = 59
    } else if (timeLeft.value.days > 0) {
      timeLeft.value.days--
      timeLeft.value.hours = 23
    } else {
      clearInterval(interval)
    }
  }, 1000)
  onUnmounted(() => clearInterval(interval))
})

const pad = (n: number) => n.toString().padStart(2, '0')
</script>

<template>
  <section class="py-12 bg-surface">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionTitle eyebrow="Limited Time">
        Deal of the Week
        <template #description>Exceptional value, verified by our pricing experts</template>
      </SectionTitle>

      <NuxtLink :to="`/cars/${deal.slug}`" class="group block">
        <div class="relative overflow-hidden rounded-3xl bg-white border border-primary/20 hover:border-primary/50 transition-colors shadow-md hover:shadow-lg">
          <div class="grid md:grid-cols-2 gap-0">
            <!-- Image -->
            <div class="relative aspect-video md:aspect-auto overflow-hidden">
              <img
                :src="deal.image"
                :alt="`${deal.make} ${deal.model}`"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-r from-transparent to-white/60 md:block hidden" />
              <!-- Deal badge -->
              <div class="absolute top-4 left-4 px-3 py-1.5 bg-accent text-black font-bold text-sm rounded-full">
                🏆 Deal of the Week
              </div>
            </div>

            <!-- Details -->
            <div class="flex flex-col justify-center p-8 md:p-10">
              <p class="text-primary text-sm font-semibold mb-1">{{ deal.make }}</p>
              <h3 class="font-display font-extrabold text-gray-900 text-3xl md:text-4xl mb-2">{{ deal.model }}</h3>
              <p class="text-muted mb-5">{{ deal.year }} · {{ deal.mileage.toLocaleString() }} km · {{ deal.location }}</p>

              <div class="flex items-baseline gap-3 mb-5">
                <span class="font-mono font-bold text-primary text-3xl">{{ formatLKRFull(deal.price) }}</span>
                <span class="font-mono text-muted line-through text-lg">{{ formatLKRFull(deal.marketValue) }}</span>
              </div>

              <div class="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl px-4 py-2 mb-6 w-fit">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Save {{ formatLKRFull(deal.savings) }}
              </div>

              <!-- Countdown -->
              <div>
                <p class="text-muted text-xs mb-2 uppercase tracking-widest">Offer ends in</p>
                <div class="flex items-center gap-2">
                  <div
                    v-for="(val, unit) in { days: timeLeft.days, hrs: timeLeft.hours, min: timeLeft.minutes, sec: timeLeft.seconds }"
                    :key="unit"
                    class="flex flex-col items-center px-3 py-2 bg-gray-100 border border-border rounded-xl"
                  >
                    <span class="font-mono font-bold text-gray-900 text-xl leading-none">{{ pad(val) }}</span>
                    <span class="text-muted text-xs mt-0.5">{{ unit }}</span>
                  </div>
                </div>
              </div>

              <AppButton variant="primary" size="lg" class="mt-6 w-fit">
                View This Deal →
              </AppButton>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
