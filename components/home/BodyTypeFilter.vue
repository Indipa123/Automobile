<script setup lang="ts">
const bodyTypes = [
  { label: 'Sedan', value: 'sedan', icon: '🚗', count: '3,200+' },
  { label: 'SUV', value: 'suv', icon: '🚙', count: '8,500+' },
  { label: 'Hatchback', value: 'hatchback', icon: '🚘', count: '4,100+' },
  { label: 'Pickup', value: 'pickup', icon: '🛻', count: '1,800+' },
  { label: 'Van', value: 'van', icon: '🚐', count: '2,300+' },
  { label: 'Coupe', value: 'coupe', icon: '🏎️', count: '450+' },
  { label: 'Electric', value: 'electric', icon: '⚡', count: '1,200+' },
  { label: 'Luxury', value: 'luxury', icon: '💎', count: '900+' },
]
</script>

<template>
  <section class="py-12 bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionTitle eyebrow="Browse by Style">
        Find by Body Type
        <template #description>From sporty coupes to practical SUVs — find the perfect body style</template>
      </SectionTitle>

      <div class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3">
        <NuxtLink
          v-for="type in bodyTypes"
          :key="type.value"
          :to="`/cars?bodyType=${type.value}`"
          class="group flex flex-col items-center gap-2 p-3 md:p-4 bg-white border border-border rounded-2xl hover:border-primary/50 hover:bg-gray-50 transition-all duration-300 text-center shadow-sm hover:shadow-md"
        >
          <span class="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">{{ type.icon }}</span>
          <div>
            <p class="text-gray-900 text-xs md:text-sm font-medium">{{ type.label }}</p>
            <p class="text-muted text-xs hidden md:block">{{ type.count }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
