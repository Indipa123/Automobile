<script setup lang="ts">
interface Props {
  type?: 'car' | 'news' | 'dealer' | 'review'
  count?: number
}

withDefaults(defineProps<Props>(), {
  type: 'car',
  count: 1,
})
</script>

<template>
  <template v-if="type === 'car'">
    <div v-for="i in count" :key="i" class="bg-surface border border-border rounded-2xl overflow-hidden">
      <div class="skeleton aspect-video w-full" />
      <div class="p-4 space-y-3">
        <div class="skeleton h-4 w-3/4 rounded" />
        <div class="skeleton h-6 w-1/2 rounded" />
        <div class="flex gap-2">
          <div class="skeleton h-3 w-16 rounded" />
          <div class="skeleton h-3 w-16 rounded" />
          <div class="skeleton h-3 w-16 rounded" />
        </div>
        <div class="skeleton h-9 w-full rounded-lg" />
      </div>
    </div>
  </template>

  <template v-else-if="type === 'news'">
    <div v-for="i in count" :key="i" class="bg-surface border border-border rounded-2xl overflow-hidden">
      <div class="skeleton h-48 w-full" />
      <div class="p-4 space-y-3">
        <div class="skeleton h-3 w-20 rounded" />
        <div class="skeleton h-5 w-full rounded" />
        <div class="skeleton h-5 w-3/4 rounded" />
        <div class="skeleton h-3 w-32 rounded" />
      </div>
    </div>
  </template>

  <template v-else-if="type === 'dealer'">
    <div v-for="i in count" :key="i" class="bg-surface border border-border rounded-2xl p-4 flex gap-4">
      <div class="skeleton w-16 h-16 rounded-xl flex-shrink-0" />
      <div class="flex-1 space-y-2">
        <div class="skeleton h-4 w-3/4 rounded" />
        <div class="skeleton h-3 w-1/2 rounded" />
        <div class="skeleton h-3 w-1/3 rounded" />
      </div>
    </div>
  </template>
</template>
