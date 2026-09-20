<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Car Research Hub — Automobile.lk' })

const guides = [
  { title: 'Best Cars Under Rs. 2M', href: '/cars?priceMax=2000000', icon: '💰' },
  { title: 'Best SUVs in Sri Lanka', href: '/research/body-types/suv', icon: '🚙' },
  { title: 'EV Buying Guide', href: '/ev-guide', icon: '⚡' },
  { title: 'Hybrid vs Electric', href: '/news?category=guide', icon: '🔋' },
  { title: 'Safety Ratings Guide', href: '/safety', icon: '🛡️' },
  { title: 'Best Family Cars 2024', href: '/awards', icon: '👨‍👩‍👧‍👦' },
]

const brands = [
  { name: 'Toyota', slug: 'toyota', count: '12,400+' },
  { name: 'Honda', slug: 'honda', count: '8,200+' },
  { name: 'Suzuki', slug: 'suzuki', count: '6,800+' },
  { name: 'Nissan', slug: 'nissan', count: '5,400+' },
  { name: 'Mitsubishi', slug: 'mitsubishi', count: '4,100+' },
  { name: 'BMW', slug: 'bmw', count: '2,800+' },
  { name: 'Mercedes-Benz', slug: 'mercedes-benz', count: '2,200+' },
  { name: 'Hyundai', slug: 'hyundai', count: '3,600+' },
]
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="bg-surface border-b border-border py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 class="font-display font-bold text-gray-900 text-3xl mb-2">Research Hub</h1>
        <p class="text-muted">Make informed decisions with expert guides, comparisons, and data</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      <!-- Buying Guides -->
      <section>
        <SectionTitle eyebrow="Editors' Picks">Buying Guides & Top Lists</SectionTitle>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          <NuxtLink
            v-for="guide in guides"
            :key="guide.title"
            :to="guide.href"
            class="group flex items-center gap-4 p-4 bg-surface border border-border rounded-2xl hover:border-primary/40 transition-all"
          >
            <span class="text-2xl">{{ guide.icon }}</span>
            <span class="text-gray-700 text-sm font-medium group-hover:text-gray-900 transition-colors">{{ guide.title }}</span>
            <span class="ml-auto text-primary text-sm">→</span>
          </NuxtLink>
        </div>
      </section>

      <!-- Brands -->
      <section>
        <SectionTitle eyebrow="By Manufacturer" view-all-link="/research/brands">Browse by Brand</SectionTitle>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <NuxtLink
            v-for="brand in brands"
            :key="brand.name"
            :to="`/research/brands/${brand.slug}`"
            class="group flex items-center gap-3 p-4 bg-surface border border-border rounded-2xl hover:border-primary/40 transition-all"
          >
            <div class="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold font-display">
              {{ brand.name[0] }}
            </div>
            <div>
              <p class="text-gray-900 font-semibold text-sm">{{ brand.name }}</p>
              <p class="text-muted text-xs">{{ brand.count }}</p>
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- Quick links -->
      <section class="grid md:grid-cols-3 gap-5">
        <NuxtLink to="/compare" class="bg-primary/10 border border-primary/30 rounded-2xl p-6 hover:border-primary/60 transition-colors">
          <span class="text-3xl mb-3 block">⚖️</span>
          <h3 class="font-display font-bold text-gray-900 text-xl mb-1">Car Comparison</h3>
          <p class="text-muted text-sm">Compare specs of up to 3 cars side by side</p>
        </NuxtLink>
        <NuxtLink to="/awards" class="bg-accent/10 border border-accent/30 rounded-2xl p-6 hover:border-accent/60 transition-colors">
          <span class="text-3xl mb-3 block">🏆</span>
          <h3 class="font-display font-bold text-gray-900 text-xl mb-1">Awards 2024</h3>
          <p class="text-muted text-sm">Best cars of the year in every category</p>
        </NuxtLink>
        <NuxtLink to="/safety" class="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-500/60 transition-colors">
          <span class="text-3xl mb-3 block">🛡️</span>
          <h3 class="font-display font-bold text-gray-900 text-xl mb-1">Safety Ratings</h3>
          <p class="text-muted text-sm">NCAP and local safety test results</p>
        </NuxtLink>
      </section>
    </div>
  </div>
</template>
