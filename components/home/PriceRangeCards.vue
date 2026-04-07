<script setup lang="ts">
const ranges = [
  {
    label: 'Under Rs. 2M',
    sublabel: 'Budget-friendly options',
    href: '/cars?priceMax=2000000',
    icon: '💚',
    gradient: 'from-emerald-50 to-emerald-100/50',
    border: 'border-emerald-200 hover:border-emerald-400',
    count: '12,400+ cars',
    examples: ['Suzuki Alto', 'Honda Fit', 'Toyota Aqua'],
  },
  {
    label: 'Rs. 2M – 5M',
    sublabel: 'Mid-range value picks',
    href: '/cars?priceMin=2000000&priceMax=5000000',
    icon: '💛',
    gradient: 'from-amber-50 to-amber-100/50',
    border: 'border-amber-200 hover:border-amber-400',
    count: '18,200+ cars',
    examples: ['Toyota Prius', 'Honda Vezel', 'Mazda Axela'],
  },
  {
    label: 'Rs. 5M – 15M',
    sublabel: 'Premium performance',
    href: '/cars?priceMin=5000000&priceMax=15000000',
    icon: '🔵',
    gradient: 'from-blue-50 to-blue-100/50',
    border: 'border-blue-200 hover:border-blue-400',
    count: '8,600+ cars',
    examples: ['Toyota Prado', 'BMW 3 Series', 'Honda CR-V'],
  },
  {
    label: 'Rs. 15M+',
    sublabel: 'Luxury & exotic',
    href: '/cars?priceMin=15000000',
    icon: '💎',
    gradient: 'from-purple-50 to-purple-100/50',
    border: 'border-purple-200 hover:border-purple-400',
    count: '2,100+ cars',
    examples: ['Mercedes C-Class', 'BMW 5 Series', 'Audi A6'],
  },
]
</script>

<template>
  <section class="py-12 bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionTitle eyebrow="Shop by Budget">
        Find Cars by Price Range
        <template #description>Discover the perfect car at every budget level</template>
      </SectionTitle>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <NuxtLink
          v-for="range in ranges"
          :key="range.label"
          :to="range.href"
          :class="[
            'group flex flex-col p-6 rounded-2xl border bg-gradient-to-br transition-all duration-300 hover:-translate-y-1 hover:shadow-md',
            range.gradient,
            range.border,
          ]"
        >
          <span class="text-3xl mb-3">{{ range.icon }}</span>
          <h3 class="font-display font-bold text-gray-900 text-xl mb-1">{{ range.label }}</h3>
          <p class="text-muted text-sm mb-4">{{ range.sublabel }}</p>
          <p class="text-xs text-muted mb-3">Popular choices:</p>
          <ul class="space-y-1 mb-5">
            <li v-for="ex in range.examples" :key="ex" class="text-gray-700 text-sm flex items-center gap-1.5">
              <span class="w-1 h-1 rounded-full bg-muted" />
              {{ ex }}
            </li>
          </ul>
          <div class="mt-auto flex items-center justify-between">
            <span class="text-xs text-muted">{{ range.count }}</span>
            <span class="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">Browse →</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
