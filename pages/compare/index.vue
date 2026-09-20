<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Compare Cars Side by Side — Automobile.lk' })

const compareStore = useCompareStore()
const { formatLKRFull } = useFormatCurrency()

const specFields = [
  { label: 'Price', key: 'price', format: (v: any) => formatLKRFull(v) },
  { label: 'Year', key: 'year' },
  { label: 'Condition', key: 'condition', class: 'capitalize' },
  { label: 'Body Type', key: 'bodyType', class: 'capitalize' },
  { label: 'Engine', key: 'engineCC', format: (v: any) => `${v.toLocaleString()}cc` },
  { label: 'Horsepower', key: 'horsepower', format: (v: any) => `${v} hp` },
  { label: 'Fuel Type', key: 'fuelType', class: 'capitalize' },
  { label: 'Transmission', key: 'transmission', class: 'capitalize' },
  { label: 'Drive Type', key: 'driveType', class: 'uppercase' },
  { label: 'Mileage', key: 'mileage', format: (v: any) => v === 0 ? 'Brand New' : `${v.toLocaleString()} km` },
  { label: 'Seats', key: 'seats' },
  { label: 'Color', key: 'color', class: 'capitalize' },
  { label: 'Safety Rating', key: 'safetyRating', format: (v: any) => `${v}/5 ★` },
  { label: 'Market Value', key: 'marketValue', format: (v: any) => formatLKRFull(v) },
  { label: 'Deal Rating', key: 'dealRating', class: 'capitalize' },
  { label: 'Location', key: 'location', format: (v: any) => v.city },
]

const getBest = (key: string) => {
  if (compareStore.cars.length < 2) return null
  const numericKeys = ['price', 'safetyRating', 'horsepower', 'mileage', 'marketValue']
  if (!numericKeys.includes(key)) return null
  const vals = compareStore.cars.map(c => (c as any)[key] as number)
  if (key === 'price' || key === 'mileage') return Math.min(...vals)
  return Math.max(...vals)
}

const isBest = (car: any, key: string) => {
  const best = getBest(key)
  if (best === null) return false
  return (car as any)[key] === best
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="bg-surface border-b border-border py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 class="font-display font-bold text-gray-900 text-3xl mb-2">Compare Cars</h1>
        <p class="text-muted">Compare up to 3 cars side by side</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <!-- Empty state -->
      <div v-if="compareStore.count === 0" class="text-center py-20">
        <div class="text-6xl mb-4">⚖️</div>
        <h2 class="font-display font-bold text-gray-900 text-2xl mb-3">No cars to compare</h2>
        <p class="text-muted mb-6">Browse cars and click "Compare" to add them here</p>
        <NuxtLink to="/cars"><AppButton variant="primary" size="lg">Browse Cars</AppButton></NuxtLink>
      </div>

      <!-- Comparison table -->
      <div v-else class="overflow-x-auto no-scrollbar">
        <table class="w-full">
          <!-- Car headers -->
          <thead>
            <tr>
              <th class="w-40 text-left text-muted text-sm font-medium py-4 pr-4">Specification</th>
              <th
                v-for="car in compareStore.cars"
                :key="car.id"
                class="min-w-[220px] text-center pb-6 px-3 align-top"
              >
                <div class="relative">
                  <button
                    class="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white border border-border text-muted hover:text-primary text-xs flex items-center justify-center shadow-sm touch-manipulation"
                    @click="compareStore.removeCar(car.id)"
                  >
                    ✕
                  </button>
                  <img
                    :src="car.images[0]"
                    :alt="car.model"
                    class="w-full aspect-video object-cover rounded-xl mb-3"
                  />
                  <p class="text-muted text-xs">{{ car.make }}</p>
                  <h3 class="font-display font-bold text-gray-900 text-base">{{ car.model }}</h3>
                  <p class="text-primary font-mono font-bold">{{ formatLKRFull(car.price) }}</p>
                  <NuxtLink :to="`/cars/${car.slug}`" class="text-xs text-muted hover:text-gray-900 mt-1 block">View →</NuxtLink>
                </div>
              </th>
              <!-- Add slot -->
              <th v-if="compareStore.count < 3" class="min-w-[220px] text-center px-3 pb-6">
                <NuxtLink
                  to="/cars"
                  class="flex flex-col items-center justify-center aspect-video border-2 border-dashed border-border hover:border-primary rounded-xl transition-colors text-muted hover:text-gray-900"
                >
                  <span class="text-2xl mb-1">+</span>
                  <span class="text-sm">Add Car</span>
                </NuxtLink>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="field in specFields"
              :key="field.key"
              class="border-t border-border"
            >
              <td class="py-3 pr-4 text-muted text-sm">{{ field.label }}</td>
              <td
                v-for="car in compareStore.cars"
                :key="car.id"
                :class="[
                  'py-3 px-3 text-sm text-center',
                  isBest(car, field.key) ? 'text-emerald-700 font-semibold' : 'text-gray-900',
                  (field as any).class || '',
                ]"
              >
                <template v-if="field.format">{{ field.format((car as any)[field.key]) }}</template>
                <template v-else>{{ (car as any)[field.key] }}</template>
                <span v-if="isBest(car, field.key)" class="ml-1 text-xs">✓</span>
              </td>
              <td v-if="compareStore.count < 3" />
            </tr>
          </tbody>
        </table>

        <div class="flex items-center gap-2 mt-6 text-xs text-muted">
          <span class="w-3 h-3 rounded-full bg-emerald-500/30 border border-emerald-500" />
          <span class="text-emerald-700">Green ✓</span> = Best value in this category
        </div>
      </div>
    </div>
  </div>
</template>
