<script setup lang="ts">
interface Props {
  price: number
  size?: 'sm' | 'md' | 'lg' | 'xl'
  negotiable?: boolean
  strikethrough?: boolean
  strikethroughPrice?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  negotiable: false,
  strikethrough: false,
})

const { formatLKRFull } = useFormatCurrency()

const sizeClasses = {
  sm: 'text-base',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl',
}
</script>

<template>
  <div class="flex items-baseline gap-2 flex-wrap">
    <span :class="['font-mono font-bold text-primary', sizeClasses[size]]">
      {{ formatLKRFull(price) }}
    </span>
    <span
      v-if="strikethrough && strikethroughPrice"
      class="text-muted line-through text-sm font-mono"
    >
      {{ formatLKRFull(strikethroughPrice) }}
    </span>
    <span v-if="negotiable" class="text-xs text-muted bg-surface border border-border rounded px-1.5 py-0.5">
      Negotiable
    </span>
  </div>
</template>
