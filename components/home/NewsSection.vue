<script setup lang="ts">
import type { NewsArticle } from '~/types'

const { data } = useFetch('/api/news', { query: { limit: 3 } })
const articles = computed(() => (data.value as any)?.articles || [])

const categoryColors: Record<string, string> = {
  news: 'bg-blue-100 text-blue-700',
  review: 'bg-purple-100 text-purple-700',
  guide: 'bg-amber-100 text-amber-700',
  ev: 'bg-emerald-100 text-emerald-700',
  motorsport: 'bg-red-100 text-red-700',
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-LK', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <section class="py-12 bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionTitle eyebrow="Latest Updates" view-all-link="/news">
        News & Guides
        <template #description>Stay informed with expert insights, reviews and buying guides</template>
      </SectionTitle>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <NuxtLink
          v-for="(article, i) in articles"
          :key="article.id"
          :to="`/news/${article.slug}`"
          :class="['group flex flex-col bg-white border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md', i === 0 ? 'md:col-span-1 md:row-span-1' : '']"
        >
          <div class="relative overflow-hidden" :class="i === 0 ? 'aspect-video' : 'aspect-[16/9]'">
            <img
              :src="article.image"
              :alt="article.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <div class="flex-1 flex flex-col p-4">
            <div class="flex items-center gap-2 mb-2">
              <span :class="['px-2 py-0.5 text-xs font-medium rounded-full capitalize', categoryColors[article.category] || categoryColors.news]">
                {{ article.category }}
              </span>
              <span class="text-muted text-xs">{{ article.readTime }} min read</span>
            </div>
            <h3 class="font-display font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {{ article.title }}
            </h3>
            <p class="text-muted text-sm line-clamp-2 mb-3">{{ article.excerpt }}</p>
            <div class="mt-auto flex items-center justify-between text-xs text-muted">
              <span>{{ article.author }}</span>
              <span>{{ formatDate(article.published) }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
