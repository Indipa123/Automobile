<script setup lang="ts">
interface Props {
  currentPrice: number
  marketValue: number
  make: string
  model: string
}

const props = defineProps<Props>()

const { formatLKRShort } = useFormatCurrency()

// Mock price history data
const priceHistory = computed(() => {
  const base = props.marketValue
  return [
    { month: 'Jul', price: base * 1.05 },
    { month: 'Aug', price: base * 1.03 },
    { month: 'Sep', price: base * 1.02 },
    { month: 'Oct', price: base * 1.01 },
    { month: 'Nov', price: base * 0.99 },
    { month: 'Dec', price: base * 0.98 },
    { month: 'Jan', price: props.currentPrice },
  ]
})

const maxPrice = computed(() => Math.max(...priceHistory.value.map(p => p.price)))
const minPrice = computed(() => Math.min(...priceHistory.value.map(p => p.price)))
const range = computed(() => maxPrice.value - minPrice.value || 1)

const barHeight = (price: number) => {
  return ((price - minPrice.value) / range.value) * 60 + 20
}
</script>

<template>
  <div class="bg-white border border-border rounded-2xl p-6">
    <h3 class="font-display font-bold text-gray-900 text-lg mb-2">Price Trend</h3>
    <p class="text-muted text-sm mb-5">{{ make }} {{ model }} — Last 7 months</p>

    <div class="flex items-end justify-between gap-1 h-24">
      <div
        v-for="point in priceHistory"
        :key="point.month"
        class="flex-1 flex flex-col items-center gap-1"
      >
        <div
          class="w-full rounded-t-lg transition-all duration-500"
          :class="point.price === currentPrice ? 'bg-primary' : 'bg-gray-200 hover:bg-primary/40'"
          :style="{ height: `${barHeight(point.price)}px` }"
        />
        <p class="text-xs text-muted">{{ point.month }}</p>
      </div>
    </div>

    <div class="mt-4 pt-4 border-t border-border flex items-center justify-between text-sm">
      <div>
        <p class="text-muted text-xs">Market Average</p>
        <p class="text-gray-900 font-mono font-semibold">{{ formatLKRShort(marketValue) }}</p>
      </div>
      <div class="text-right">
        <p class="text-muted text-xs">Listed Price</p>
        <p class="text-primary font-mono font-semibold">{{ formatLKRShort(currentPrice) }}</p>
      </div>
    </div>
  </div>
</template>
