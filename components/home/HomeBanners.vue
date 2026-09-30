<script setup lang="ts">
const banners = [
  {
    eyebrow: 'Sell your vehicle',
    title: 'Your next buyer is already looking.',
    text: 'List registered or unregistered vehicles as an individual seller or dealer.',
    href: '/sell/post-ad',
    action: 'Post a vehicle',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1600&h=900&fit=crop&auto=format',
  },
  {
    eyebrow: 'Find your next car',
    title: 'Find the one that feels right.',
    text: 'Search by make, model, registration and ownership details.',
    href: '/cars',
    action: 'Browse vehicles',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&h=900&fit=crop&auto=format',
  },
  {
    eyebrow: 'For every journey',
    title: 'Everything you need on the road.',
    text: 'Explore registered garages, fuel information and EV charging resources.',
    href: '/services',
    action: 'Explore services',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&h=900&fit=crop&auto=format',
  },
]
const active = ref(0)
const showPrevious = () => { active.value = (active.value - 1 + banners.length) % banners.length }
const showNext = () => { active.value = (active.value + 1) % banners.length }
</script>

<template>
  <section aria-label="Home page banners" class="w-full mb-8 sm:mb-12">
    <div class="relative isolate flex min-h-[350px] sm:min-h-[410px] lg:min-h-[460px] items-center overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-900 border border-white/20 shadow-2xl">
      <img
        :key="banners[active].image"
        :src="banners[active].image"
        alt=""
        class="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/75 to-gray-950/20" />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-950/55 via-transparent to-transparent" />

      <div class="relative z-10 w-full max-w-3xl px-7 py-16 sm:px-12 lg:px-16">
        <p class="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 backdrop-blur-sm">{{ banners[active].eyebrow }}</p>
        <h2 class="mt-5 max-w-2xl font-display text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">{{ banners[active].title }}</h2>
        <p class="mt-4 max-w-xl text-sm sm:text-lg leading-relaxed text-white/85">{{ banners[active].text }}</p>
        <NuxtLink :to="banners[active].href" class="mt-7 inline-flex min-h-12 items-center rounded-xl bg-primary px-6 py-3 text-sm sm:text-base font-bold text-white shadow-lg transition-colors hover:bg-primary-dark">{{ banners[active].action }} →</NuxtLink>
      </div>

      <div class="absolute bottom-5 right-5 z-10 flex items-center gap-2 sm:bottom-6 sm:right-7">
        <button type="button" aria-label="Previous banner" class="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white hover:bg-black/60" @click="showPrevious">←</button>
        <button type="button" aria-label="Next banner" class="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white hover:bg-black/60" @click="showNext">→</button>
      </div>
    </div>
    <div class="mt-3 flex justify-center gap-2">
      <button
        v-for="(banner, index) in banners"
        :key="banner.title"
        type="button"
        :aria-label="`Show banner ${index + 1}: ${banner.title}`"
        :aria-current="active === index ? 'true' : undefined"
        :class="['h-2.5 rounded-full transition-all', active === index ? 'w-9 bg-primary' : 'w-2.5 bg-white/40 hover:bg-white/70']"
        @click="active = index"
      />
    </div>
  </section>
</template>
