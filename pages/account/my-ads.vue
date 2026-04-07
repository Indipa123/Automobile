<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'My Ads — Automobile.lk' })

const { formatLKRFull } = useFormatCurrency()

const myAds = [
  { id: 'a1', title: '2022 Toyota Prius', price: 8_500_000, status: 'active', views: 284, enquiries: 12, posted: '2024-12-15', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=120&h=80&fit=crop&auto=format' },
  { id: 'a2', title: '2019 Honda Fit', price: 4_200_000, status: 'active', views: 156, enquiries: 8, posted: '2024-12-10', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=120&h=80&fit=crop&auto=format' },
  { id: 'a3', title: '2018 Suzuki Swift', price: 3_100_000, status: 'sold', views: 492, enquiries: 24, posted: '2024-11-20', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=120&h=80&fit=crop&auto=format' },
]

const statusBadge: Record<string, string> = {
  active: 'bg-emerald-100 text-emerald-700',
  pending: 'bg-amber-100 text-amber-700',
  sold: 'bg-gray-100 text-gray-600',
  rejected: 'bg-red-100 text-red-700',
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div class="flex items-center justify-between mb-6">
        <h1 class="font-display font-bold text-gray-900 text-2xl">My Ads</h1>
        <NuxtLink to="/sell/post-ad">
          <AppButton variant="primary" size="sm">+ New Ad</AppButton>
        </NuxtLink>
      </div>

      <div class="space-y-3">
        <div
          v-for="ad in myAds"
          :key="ad.id"
          class="flex items-center gap-4 p-4 bg-surface border border-border rounded-2xl"
        >
          <img :src="ad.image" :alt="ad.title" class="w-24 h-16 object-cover rounded-xl flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <h3 class="text-gray-900 font-semibold text-sm">{{ ad.title }}</h3>
              <span :class="['px-2 py-0.5 text-xs rounded-full capitalize', statusBadge[ad.status]]">{{ ad.status }}</span>
            </div>
            <p class="font-mono text-primary font-bold">{{ formatLKRFull(ad.price) }}</p>
            <p class="text-muted text-xs mt-1">{{ ad.views }} views · {{ ad.enquiries }} enquiries · Posted {{ new Date(ad.posted).toLocaleDateString('en-LK') }}</p>
          </div>
          <div class="flex items-center gap-2 flex-shrink-0">
            <AppButton variant="outline" size="sm">Edit</AppButton>
            <AppButton variant="ghost" size="sm" class="text-red-400 hover:text-red-300">Delete</AppButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
