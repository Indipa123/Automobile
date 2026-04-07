<script setup lang="ts">
interface Props {
  tag?: string
  eyebrow?: string
  viewAllLink?: string
  viewAllText?: string
  center?: boolean
}

withDefaults(defineProps<Props>(), {
  tag: 'h2',
  viewAllText: 'View All →',
  center: false,
})
</script>

<template>
  <div :class="['flex items-end justify-between mb-6 md:mb-8 gap-4', center ? 'flex-col items-center text-center' : '']">
    <div>
      <p v-if="eyebrow" class="text-primary text-xs font-semibold tracking-widest uppercase mb-2">
        {{ eyebrow }}
      </p>
      <component :is="tag" class="font-display font-bold text-gray-900 text-2xl md:text-3xl leading-tight">
        <slot />
      </component>
      <p v-if="$slots.description" class="text-muted mt-2 text-sm md:text-base max-w-2xl">
        <slot name="description" />
      </p>
    </div>
    <NuxtLink
      v-if="viewAllLink"
      :to="viewAllLink"
      class="flex-shrink-0 text-sm text-primary hover:text-accent transition-colors font-medium"
    >
      {{ viewAllText }}
    </NuxtLink>
  </div>
</template>
