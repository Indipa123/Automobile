<script setup lang="ts">
const brands = [
  { name: 'Toyota', count: '12,400+', color: '#EB0A1E' },
  { name: 'Honda', count: '8,200+', color: '#CC0000' },
  { name: 'Suzuki', count: '6,800+', color: '#194FA4' },
  { name: 'Nissan', count: '5,400+', color: '#C3002F' },
  { name: 'Mitsubishi', count: '4,100+', color: '#CC0000' },
  { name: 'BMW', count: '2,800+', color: '#0066B1' },
  { name: 'Mercedes-Benz', count: '2,200+', color: '#333' },
  { name: 'Hyundai', count: '3,600+', color: '#002C5F' },
  { name: 'Kia', count: '2,900+', color: '#05141F' },
  { name: 'Audi', count: '1,800+', color: '#BB0A30' },
  { name: 'Ford', count: '1,500+', color: '#003476' },
  { name: 'Isuzu', count: '3,200+', color: '#CC0000' },
]

const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')
</script>

<template>
  <section class="py-12 bg-surface">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionTitle eyebrow="Top Brands" view-all-link="/research/brands">
        Browse by Brand
        <template #description>Explore Sri Lanka's most popular automobile brands</template>
      </SectionTitle>

      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
        <NuxtLink
          v-for="brand in brands"
          :key="brand.name"
          :to="`/research/brands/${slugify(brand.name)}`"
          class="group flex flex-col items-center gap-2 sm:gap-3 p-2.5 sm:p-4 bg-white border border-border rounded-2xl hover:border-primary/40 transition-all duration-300 text-center hover:shadow-md touch-manipulation"
        >
          <!-- Brand logo placeholder with first letter -->
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-xl group-hover:scale-105 transition-transform"
            :style="{ background: `${brand.color}15`, border: `1px solid ${brand.color}30` }"
          >
            <span :style="{ color: brand.color }">{{ brand.name[0] }}</span>
          </div>
          <div>
            <p class="text-gray-900 text-sm font-semibold">{{ brand.name }}</p>
            <p class="text-muted text-xs">{{ brand.count }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
