<script setup lang="ts">
definePageMeta({ layout: 'default' })

const route = useRoute()
const { data } = await useFetch('/api/news')
const article = computed(() => (data.value as any)?.articles?.find((a: any) => a.slug === route.params.slug))

useHead(() => ({
  title: article.value ? `${article.value.title} — Automobile.lk` : 'Article',
}))

const formatDate = (d: string) => new Date(d).toLocaleDateString('en-LK', { year: 'numeric', month: 'long', day: 'numeric' })
</script>

<template>
  <div class="min-h-screen bg-background">
    <div v-if="!article" class="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 class="font-display font-bold text-gray-900 text-2xl mb-4">Article not found</h1>
      <NuxtLink to="/news"><AppButton variant="outline">Back to News</AppButton></NuxtLink>
    </div>

    <template v-else>
      <div class="relative h-72 md:h-96 overflow-hidden">
        <img :src="article.image" :alt="article.title" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>

      <div class="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <nav class="flex items-center gap-2 text-xs text-muted mb-6">
          <NuxtLink to="/" class="hover:text-gray-900">Home</NuxtLink>
          <span>›</span>
          <NuxtLink to="/news" class="hover:text-gray-900">News</NuxtLink>
          <span>›</span>
          <span class="text-gray-900 truncate max-w-xs">{{ article.title }}</span>
        </nav>

        <div class="flex items-center gap-2 mb-4">
          <span class="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full capitalize">{{ article.category }}</span>
          <span class="text-muted text-xs">{{ article.readTime }} min read</span>
        </div>

        <h1 class="font-display font-extrabold text-gray-900 text-3xl md:text-4xl mb-4 leading-tight">{{ article.title }}</h1>

        <div class="flex items-center gap-3 mb-8 pb-6 border-b border-border">
          <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            {{ article.author[0] }}
          </div>
          <div>
            <p class="text-gray-900 text-sm font-medium">{{ article.author }}</p>
            <p class="text-muted text-xs">{{ formatDate(article.published) }}</p>
          </div>
        </div>

        <div class="prose prose-sm max-w-none">
          <p class="text-gray-700 text-base leading-relaxed">{{ article.excerpt }}</p>
          <p class="text-gray-700 text-base leading-relaxed mt-4">
            This is where the full article content would appear. Our editorial team provides in-depth analysis, expert opinions, and the latest news from Sri Lanka's automobile market.
          </p>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
          <span
            v-for="tag in article.tags"
            :key="tag"
            class="px-3 py-1 bg-surface border border-border text-muted text-xs rounded-full hover:border-primary hover:text-gray-900 transition-colors cursor-pointer"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </template>
  </div>
</template>
