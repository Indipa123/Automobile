<script setup lang="ts">
interface Props {
  rating: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  interactive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  max: 5,
  size: 'md',
  interactive: false,
})

const emit = defineEmits<{ 'update:rating': [value: number] }>()

const hovered = ref(0)

const sizeClasses = { sm: 'w-3 h-3', md: 'w-4 h-4', lg: 'w-6 h-6' }

const starFill = (index: number) => {
  const val = props.interactive ? (hovered.value || props.rating) : props.rating
  if (val >= index) return 'text-amber-400'
  if (val >= index - 0.5) return 'text-amber-400 opacity-60'
  return 'text-gray-600'
}
</script>

<template>
  <div class="flex items-center gap-0.5">
    <button
      v-for="i in max"
      :key="i"
      :class="[
        sizeClasses[size],
        starFill(i),
        interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default',
      ]"
      :type="interactive ? 'button' : undefined"
      @mouseenter="interactive && (hovered = i)"
      @mouseleave="interactive && (hovered = 0)"
      @click="interactive && emit('update:rating', i)"
    >
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </button>
    <slot />
  </div>
</template>
