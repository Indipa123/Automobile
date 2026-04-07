<script setup lang="ts">
import type { NewsArticle } from '~/types'

interface Props {
  article: NewsArticle
  featured?: boolean
}

withDefaults(defineProps<Props>(), { featured: false })

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-LK', { year: 'numeric', month: 'long', day: 'numeric' })

const categoryColors: Record<string, string> = {
  news: 'bg-blue-500/20 text-blue-400',
  review: 'bg-purple-500/20 text-purple-400',
  guide: 'bg-amber-500/20 text-amber-400',
  ev: 'bg-emerald-500/20 text-emerald-400',
  motorsport: 'bg-red-500/20 text-red-400',
}
</script>

<template>
  <NuxtLink
    :to="`/news/${article.slug}`"
    :class="[
      'group flex flex-col bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1',
      featured ? 'md:flex-row' : ''
    ]"
  >
    <div :class="['relative overflow-hidden bg-background', featured ? 'md:w-2/5 aspect-auto' : 'aspect-video']">
      <img
        :src="article.image"
        :alt="article.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <span v-if="article.featured" class="absolute top-3 left-3 px-2 py-0.5 bg-accent text-black text-xs font-bold rounded-full">
        Featured
      </span>
    </div>

    <div :class="['flex-1 flex flex-col p-4 md:p-5', featured ? '' : '']">
      <div class="flex items-center gap-2 mb-2">
        <span :class="['px-2 py-0.5 text-xs font-medium rounded-full capitalize', categoryColors[article.category] || 'bg-gray-500/20 text-gray-400']">
          {{ article.category }}
        </span>
        <span class="text-muted text-xs">{{ article.readTime }} min read</span>
      </div>

      <h3
        :class="[
          'font-display font-bold text-white leading-snug mb-2 group-hover:text-primary transition-colors',
          featured ? 'text-xl md:text-2xl' : 'text-base',
        ]"
      >
        {{ article.title }}
      </h3>

      <p class="text-muted text-sm line-clamp-2 mb-3 flex-1">{{ article.excerpt }}</p>

      <div class="flex items-center justify-between text-xs text-muted mt-auto pt-3 border-t border-border">
        <span>{{ article.author }}</span>
        <span>{{ formatDate(article.published) }}</span>
      </div>
    </div>
  </NuxtLink>
</template>
