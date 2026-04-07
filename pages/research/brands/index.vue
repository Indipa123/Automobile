<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Car Brands in Sri Lanka — Automobile.lk' })

const brands = [
  { name: 'Toyota', slug: 'toyota', count: '12,400+', origin: 'Japan' },
  { name: 'Honda', slug: 'honda', count: '8,200+', origin: 'Japan' },
  { name: 'Suzuki', slug: 'suzuki', count: '6,800+', origin: 'Japan' },
  { name: 'Nissan', slug: 'nissan', count: '5,400+', origin: 'Japan' },
  { name: 'Mitsubishi', slug: 'mitsubishi', count: '4,100+', origin: 'Japan' },
  { name: 'Mazda', slug: 'mazda', count: '3,200+', origin: 'Japan' },
  { name: 'Subaru', slug: 'subaru', count: '1,800+', origin: 'Japan' },
  { name: 'BMW', slug: 'bmw', count: '2,800+', origin: 'Germany' },
  { name: 'Mercedes-Benz', slug: 'mercedes-benz', count: '2,200+', origin: 'Germany' },
  { name: 'Audi', slug: 'audi', count: '1,800+', origin: 'Germany' },
  { name: 'Volkswagen', slug: 'volkswagen', count: '1,200+', origin: 'Germany' },
  { name: 'Hyundai', slug: 'hyundai', count: '3,600+', origin: 'South Korea' },
  { name: 'Kia', slug: 'kia', count: '2,900+', origin: 'South Korea' },
  { name: 'Ford', slug: 'ford', count: '1,500+', origin: 'USA' },
  { name: 'Isuzu', slug: 'isuzu', count: '3,200+', origin: 'Japan' },
  { name: 'Land Rover', slug: 'land-rover', count: '800+', origin: 'UK' },
]
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="bg-surface border-b border-border py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 class="font-display font-bold text-gray-900 text-3xl mb-2">All Brands</h1>
        <p class="text-muted">Explore cars by manufacturer</p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <NuxtLink
          v-for="brand in brands"
          :key="brand.slug"
          :to="`/research/brands/${brand.slug}`"
          class="group flex flex-col items-center gap-3 p-5 bg-surface border border-border rounded-2xl hover:border-primary/40 transition-all hover:-translate-y-1 text-center"
        >
          <div class="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold font-display text-2xl group-hover:scale-105 transition-transform">
            {{ brand.name[0] }}
          </div>
          <div>
            <p class="text-gray-900 font-semibold text-sm">{{ brand.name }}</p>
            <p class="text-muted text-xs">{{ brand.count }}</p>
            <p class="text-muted text-xs">{{ brand.origin }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
