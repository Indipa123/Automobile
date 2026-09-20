<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Sitemap & Ecosystem Directory — Automobile.lk' })

const sections = [
  {
    title: 'Vehicles & Showrooms',
    links: [
      { label: 'All Vehicles for Sale', href: '/cars' },
      { label: 'Brand New Vehicles', href: '/cars/new' },
      { label: 'Used & Reconditioned Cars', href: '/cars/used' },
      { label: 'Electric Vehicles (EV)', href: '/cars/electric' },
      { label: 'Dealer Showroom Directory', href: '/dealers' },
      { label: 'Post Vehicle Ad Free', href: '/sell/post-ad' },
      { label: 'Compare Vehicles Side by Side', href: '/compare' },
    ],
  },
  {
    title: 'Spare Parts & Chassis Directory',
    links: [
      { label: 'Spare Parts Catalog', href: '/parts' },
      { label: 'Toyota Prius (ZVW50 / ZVW30)', href: '/parts?chassis=ZVW50' },
      { label: 'Honda Vezel (RU3 / RV5)', href: '/parts?chassis=RU3' },
      { label: 'Honda Fit (GP5)', href: '/parts?chassis=GP5' },
      { label: 'Toyota Corolla Axio (NZE141)', href: '/parts?chassis=NZE141' },
      { label: 'Suzuki Alto (HA36S)', href: '/parts?chassis=HA36S' },
      { label: 'Mercedes C-Class (W205)', href: '/parts?chassis=W205' },
    ],
  },
  {
    title: 'Automotive Services & 24/7 Rescue',
    links: [
      { label: 'Automotive Services Directory', href: '/services' },
      { label: '24/7 Emergency Towing Hub & Fare Estimator', href: '/services/towing' },
      { label: 'Garages & Hybrid Battery Repair Labs', href: '/services/garages' },
      { label: 'Service Stations, Lube Bays & Detailing', href: '/services/service-stations' },
    ],
  },
  {
    title: 'Finance, Insurance & Research',
    links: [
      { label: 'Finance Hub & Bank Interest Rates', href: '/finance' },
      { label: 'Auto Loan EMI Calculator', href: '/finance/loan-calculator' },
      { label: 'Car Insurance Premium Calculator', href: '/finance/insurance' },
      { label: 'EV Buyer’s Guide', href: '/ev-guide' },
      { label: 'Automobile Research Hub', href: '/research' },
      { label: 'Automobile News & Reviews', href: '/news' },
      { label: 'Automobile Awards', href: '/awards' },
      { label: 'Safety Ratings Guide', href: '/safety' },
    ],
  },
]
</script>

<template>
  <div class="min-h-screen bg-background py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <h1 class="font-display font-black text-3xl sm:text-5xl text-gray-900 tracking-tight mb-3">
          Platform Sitemap & Directory
        </h1>
        <p class="text-muted text-sm sm:text-base">
          Quick access to every section of Sri Lanka's 360° automotive ecosystem.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="sec in sections"
          :key="sec.title"
          class="bg-white border border-border rounded-3xl p-6 shadow-sm flex flex-col justify-between"
        >
          <div>
            <h2 class="font-display font-bold text-gray-900 text-base mb-4 pb-2 border-b border-border">
              {{ sec.title }}
            </h2>
            <ul class="space-y-2.5 text-xs sm:text-sm">
              <li v-for="link in sec.links" :key="link.label">
                <NuxtLink :to="link.href" class="text-muted hover:text-primary transition-colors flex items-center gap-1.5">
                  <span class="text-primary font-bold">›</span>
                  <span>{{ link.label }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
