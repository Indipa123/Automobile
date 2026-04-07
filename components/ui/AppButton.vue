<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'accent'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  as?: string
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
  fullWidth: false,
  as: 'button',
})

const variantClasses: Record<string, string> = {
  primary: 'bg-primary hover:bg-primary-dark text-white shadow-glow-red',
  secondary: 'bg-surface hover:bg-border text-gray-900 border border-border',
  outline: 'bg-transparent hover:bg-surface text-gray-900 border border-border hover:border-primary',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-600 hover:text-gray-900',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
  accent: 'bg-accent hover:bg-amber-400 text-black font-semibold',
}

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-xs rounded-md',
  md: 'px-4 py-2 text-sm rounded-lg',
  lg: 'px-6 py-3 text-base rounded-lg',
  xl: 'px-8 py-4 text-lg rounded-xl',
}

const classes = computed(() => [
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed',
  variantClasses[props.variant],
  sizeClasses[props.size],
  props.fullWidth ? 'w-full' : '',
])
</script>

<template>
  <component
    :is="as"
    :href="href"
    :class="classes"
    :disabled="disabled || loading"
  >
    <span v-if="loading" class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
    <slot />
  </component>
</template>
