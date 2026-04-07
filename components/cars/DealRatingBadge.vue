<script setup lang="ts">
import type { DealRating } from '~/types'

interface Props {
  rating: DealRating
  price?: number
  marketValue?: number
  size?: 'sm' | 'md'
}

const props = withDefaults(defineProps<Props>(), { size: 'sm' })

const { formatLKRShort } = useFormatCurrency()

const config: Record<DealRating, { label: string; classes: string }> = {
  great: { label: 'Great Deal', classes: 'bg-emerald-500 text-white' },
  good: { label: 'Good Deal', classes: 'bg-blue-500 text-white' },
  fair: { label: 'Fair Price', classes: 'bg-amber-500 text-white' },
  overpriced: { label: 'Overpriced', classes: 'bg-red-500 text-white' },
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
}

const savingText = computed(() => {
  if (!props.price || !props.marketValue) return null
  const diff = props.marketValue - props.price
  if (diff > 0) return `${formatLKRShort(diff)} below market`
  if (diff < 0) return `${formatLKRShort(Math.abs(diff))} above market`
  return null
})
</script>

<template>
  <div class="flex flex-wrap items-center gap-1.5">
    <span :class="['font-semibold rounded-full', config[rating].classes, sizeClasses[size]]">
      {{ config[rating].label }}
    </span>
    <span v-if="savingText && size === 'md'" class="text-xs text-muted">{{ savingText }}</span>
  </div>
</template>
