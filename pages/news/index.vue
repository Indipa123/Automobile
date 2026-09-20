<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Automobile News & Guides — Automobile.lk' })

const activeCategory = ref<string>('all')
const categories = [
  { value: 'all', label: 'All' },
  { value: 'news', label: 'Industry News' },
  { value: 'review', label: 'Reviews' },
  { value: 'guide', label: 'Buying Guides' },
  { value: 'ev', label: 'EV News' },
  { value: 'motorsport', label: 'Motorsport' },
]

const { data, pending } = useFetch('/api/news', {
  query: computed(() => activeCategory.value !== 'all' ? { category: activeCategory.value, limit: 20 } : { limit: 20 })
})

const articles = computed(() => (data.value as any)?.articles || [])
const featured = computed(() => articles.value.find((a: any) => a.featured))
const rest = computed(() => articles.value.filter((a: any) => !a.featured || articles.value.indexOf(a) > 0))
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="bg-surface border-b border-border py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 class="font-display font-bold text-gray-900 text-3xl mb-5">News & Guides</h1>
        <!-- Category tabs -->
        <div class="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button
            v-for="cat in categories"
            :key="cat.value"
            :class="[
              'flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-colors',
              activeCategory === cat.value
                ? 'bg-primary text-white'
                : 'bg-background border border-border text-muted hover:text-gray-900'
            ]"
            @click="activeCategory = cat.value"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      <div v-if="pending" class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <SkeletonCard type="news" :count="3" />
      </div>
      <template v-else>
        <!-- Featured -->
        <NewsCard v-if="featured" :article="featured" :featured="true" />

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <NewsCard v-for="article in rest" :key="article.id" :article="article" />
        </div>

        <div v-if="!articles.length" class="text-center py-20 text-muted">
          No articles found in this category.
        </div>
      </template>
    </div>
  </div>
</template>
