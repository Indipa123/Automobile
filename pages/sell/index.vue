<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Sell Your Car — Automobile.lk' })

const benefits = [
  { icon: '🆓', title: 'Free to List', desc: 'Post your car ad completely free. No hidden fees.' },
  { icon: '👥', title: '100K+ Buyers', desc: 'Reach over 100,000 active car buyers monthly.' },
  { icon: '⚡', title: 'Sell Faster', desc: 'Get enquiries within hours of posting your ad.' },
  { icon: '🛡️', title: 'Secure & Safe', desc: 'Verified buyers and secure messaging platform.' },
]

const steps = [
  { step: '01', title: 'Create Your Ad', desc: 'Fill in your car details, add photos, and set your price.' },
  { step: '02', title: 'Get Noticed', desc: 'Your listing reaches thousands of active buyers instantly.' },
  { step: '03', title: 'Connect & Sell', desc: 'Chat with buyers, arrange viewings, and close the deal.' },
]
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Hero -->
    <section class="relative py-20 overflow-hidden" style="background: linear-gradient(135deg, #0a0a0a 0%, #1a0507 100%)">
      <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(ellipse at 70% 50%, #C8102E33 0%, transparent 70%)" />
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 class="font-display font-extrabold text-white text-5xl md:text-6xl mb-5">
          Sell Your Car<br /><span class="text-primary">in Days, Not Months</span>
        </h1>
        <p class="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
          List for free on Sri Lanka's most trusted car marketplace. Reach serious buyers fast.
        </p>
        <NuxtLink to="/sell/post-ad">
          <AppButton variant="primary" size="xl">
            + Post Your Free Ad
          </AppButton>
        </NuxtLink>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-16 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="b in benefits" :key="b.title" class="text-center">
            <span class="text-4xl block mb-3">{{ b.icon }}</span>
            <h3 class="font-display font-bold text-gray-900 text-lg mb-1">{{ b.title }}</h3>
            <p class="text-muted text-sm">{{ b.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="py-16 bg-background">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle center eyebrow="Simple Process">How It Works</SectionTitle>
        <div class="grid md:grid-cols-3 gap-8 mt-8">
          <div v-for="step in steps" :key="step.step" class="relative text-center">
            <div class="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
              <span class="font-mono font-bold text-primary text-2xl">{{ step.step }}</span>
            </div>
            <h3 class="font-display font-bold text-gray-900 text-xl mb-2">{{ step.title }}</h3>
            <p class="text-muted text-sm">{{ step.desc }}</p>
          </div>
        </div>
        <div class="text-center mt-10">
          <NuxtLink to="/sell/post-ad">
            <AppButton variant="primary" size="xl">Start Selling Now →</AppButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
