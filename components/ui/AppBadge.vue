<script setup lang="ts">
interface Props {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'accent' | 'outline'
  size?: 'sm' | 'md'
  dot?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  dot: false,
})

const variantClasses: Record<string, string> = {
  default: 'bg-gray-100 text-gray-700 border border-border',
  primary: 'bg-primary/10 text-primary border border-primary/30',
  success: 'bg-emerald-500/15 text-emerald-700 border border-emerald-500/30',
  warning: 'bg-amber-500/15 text-amber-700 border border-amber-500/30',
  danger: 'bg-red-500/15 text-red-700 border border-red-500/30',
  info: 'bg-blue-500/15 text-blue-700 border border-blue-500/30',
  accent: 'bg-accent/15 text-amber-700 border border-accent/30',
  outline: 'bg-transparent text-gray-600 border border-border',
}

const sizeClasses: Record<string, string> = {
  sm: 'px-1.5 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
}
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-1 font-medium rounded-full',
      variantClasses[variant],
      sizeClasses[size],
    ]"
  >
    <span v-if="dot" class="w-1.5 h-1.5 rounded-full bg-current" />
    <slot />
  </span>
</template>
