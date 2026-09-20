<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Best Cars of the Year 2024 — Automobile.lk Awards' })

const awards = [
  { category: 'Best Sedan', winner: 'Toyota Prius 2024', reason: 'Unmatched hybrid efficiency and refinement', score: 92, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=250&fit=crop&auto=format', badge: '🥇' },
  { category: 'Best SUV', winner: 'Honda Vezel e:HEV', reason: 'Best combination of performance, comfort and value', score: 91, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=250&fit=crop&auto=format', badge: '🏆' },
  { category: 'Best Electric Vehicle', winner: 'Kia EV6 2023', reason: 'Revolutionary 800V charging and 515km range', score: 95, image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=250&fit=crop&auto=format', badge: '⚡' },
  { category: 'Best Budget Car', winner: 'Suzuki Alto 2024', reason: 'Best value under Rs. 2M with modern safety features', score: 85, image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop&auto=format', badge: '💚' },
  { category: 'Best Luxury Car', winner: 'BMW 5 Series 2024', reason: 'Pinnacle of luxury, technology and driving dynamics', score: 94, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=250&fit=crop&auto=format', badge: '💎' },
  { category: 'Best Family Car', winner: 'Toyota Alphard 2024', reason: 'Supreme comfort and practicality for families', score: 90, image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=250&fit=crop&auto=format', badge: '👨‍👩‍👧‍👦' },
]
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Hero -->
    <section class="relative py-20 overflow-hidden bg-gradient-to-b from-[#1a1000] to-background">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span class="text-5xl block mb-4">🏆</span>
        <p class="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Automobile.lk Awards</p>
        <h1 class="font-display font-extrabold text-white text-5xl md:text-6xl mb-4">Best Cars of 2024</h1>
        <p class="text-gray-400 text-lg">Our editors' picks for the finest vehicles available in Sri Lanka</p>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <div
          v-for="award in awards"
          :key="award.category"
          class="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-all hover:-translate-y-1 hover:shadow-glow-accent"
        >
          <div class="relative aspect-video overflow-hidden">
            <img
              :src="award.image"
              :alt="award.winner"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop&auto=format'"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div class="absolute top-3 left-3 text-3xl">{{ award.badge }}</div>
            <div class="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <span class="font-mono font-bold text-black text-sm">{{ award.score }}</span>
            </div>
          </div>
          <div class="p-5">
            <p class="text-accent text-xs font-semibold uppercase tracking-widest mb-1">{{ award.category }}</p>
            <h3 class="font-display font-bold text-gray-900 text-xl mb-2">{{ award.winner }}</h3>
            <p class="text-muted text-sm">"{{ award.reason }}"</p>
            <div class="mt-4 pt-4 border-t border-border flex justify-between items-center">
              <StarRating :rating="award.score / 20" size="sm" />
              <span class="text-accent font-mono text-sm font-bold">{{ award.score }}/100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
