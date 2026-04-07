<script setup lang="ts">
definePageMeta({ layout: 'default' })

useHead({
  title: "Automobile.lk — Sri Lanka's #1 Car Marketplace",
  meta: [
    { name: 'description', content: 'Buy and sell new and used cars in Sri Lanka. 45,000+ listings from trusted dealers. Expert reviews, price comparisons, loan calculator.' },
    { property: 'og:title', content: "Automobile.lk — Sri Lanka's #1 Car Marketplace" },
    { property: 'og:description', content: 'Buy, sell & research cars with confidence. Sri Lanka\'s largest automobile marketplace.' },
  ],
})
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection />

    <!-- Browse by Body Type -->
    <BodyTypeFilter />

    <!-- Featured New Cars -->
    <FeaturedListings
      title="New Cars"
      eyebrow="Brand New"
      condition="new"
      view-all-link="/cars/new"
      bg-class="bg-surface"
    />

    <!-- Popular Brands -->
    <PopularBrands />

    <!-- Used Cars -->
    <FeaturedListings
      title="Popular Used Cars"
      eyebrow="Pre-Owned"
      condition="used"
      view-all-link="/cars/used"
      bg-class="bg-background"
    />

    <!-- Deal of the Week -->
    <DealOfWeek />

    <!-- Price Range Cards -->
    <PriceRangeCards />

    <!-- New Arrivals -->
    <NewArrivals />

    <!-- Recent Expert Reviews -->
    <RecentReviews />

    <!-- Loan Calculator Teaser -->
    <section class="py-12 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Finance Tools</p>
            <h2 class="font-display font-bold text-gray-900 text-3xl md:text-4xl mb-4">
              Calculate Your Monthly EMI
            </h2>
            <p class="text-muted text-base mb-6 leading-relaxed">
              Use our free loan calculator to estimate monthly repayments, compare bank rates, and plan your purchase with confidence.
            </p>
            <div class="flex flex-wrap gap-3">
              <NuxtLink to="/finance/loan-calculator">
                <AppButton variant="primary" size="lg">Try Loan Calculator</AppButton>
              </NuxtLink>
              <NuxtLink to="/finance/insurance">
                <AppButton variant="outline" size="lg">Insurance Quote</AppButton>
              </NuxtLink>
            </div>
          </div>
          <div class="bg-background border border-border rounded-2xl p-6">
            <LoanCalculator />
          </div>
        </div>
      </div>
    </section>

    <!-- News & Guides -->
    <NewsSection />

    <!-- Sell CTA Banner -->
    <section class="py-16 bg-primary relative overflow-hidden">
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 80% 50%, white 0%, transparent 60%)" />
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="font-display font-extrabold text-white text-3xl md:text-5xl mb-4">
          Ready to Sell Your Car?
        </h2>
        <p class="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          List for free and reach over 100,000 monthly buyers. Get more enquiries, sell faster.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <NuxtLink to="/sell/post-ad">
            <AppButton variant="accent" size="xl" class="font-bold">
              + Post Free Ad Now
            </AppButton>
          </NuxtLink>
          <NuxtLink to="/sell">
            <AppButton
              variant="ghost"
              size="xl"
              class="text-white border border-white/30 hover:bg-white/10"
            >
              Learn More →
            </AppButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
