<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
  ],
  buying: [
    { label: 'New Cars', href: '/cars/new' },
    { label: 'Used Cars', href: '/cars/used' },
    { label: 'Electric & Hybrid', href: '/cars/electric' },
    { label: 'Dealer Directory', href: '/dealers' },
    { label: 'Car Comparison', href: '/compare' },
  ],
  tools: [
    { label: 'Loan Calculator', href: '/finance/loan-calculator' },
    { label: 'Insurance Quote', href: '/finance/insurance' },
    { label: 'EV Guide', href: '/ev-guide' },
    { label: 'Safety Ratings', href: '/safety' },
    { label: 'Awards 2024', href: '/awards' },
  ],
  resources: [
    { label: 'Expert Reviews', href: '/reviews' },
    { label: 'News & Articles', href: '/news' },
    { label: 'Research Hub', href: '/research' },
    { label: 'Buying Guides', href: '/news?category=guide' },
    { label: 'Price Trends', href: '/research' },
  ],
}
</script>

<template>
  <footer class="bg-surface border-t border-border mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
        <!-- Brand -->
        <div class="col-span-2 md:col-span-3 lg:col-span-1">
          <NuxtLink to="/" class="inline-block mb-4">
            <span class="font-display font-extrabold text-2xl text-gray-900">
              automobile<span class="text-primary">.lk</span>
            </span>
          </NuxtLink>
          <p class="text-muted text-sm leading-relaxed mb-5 max-w-xs">
            Sri Lanka's #1 automobile marketplace. Buy, sell and research cars with confidence.
          </p>
          <div class="flex items-center gap-3">
            <a href="#" class="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center text-muted hover:text-gray-900 hover:border-primary transition-colors" aria-label="Facebook">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" class="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center text-muted hover:text-gray-900 hover:border-primary transition-colors" aria-label="Instagram">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke-width="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke-width="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-width="2"/></svg>
            </a>
            <a href="#" class="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center text-muted hover:text-gray-900 hover:border-primary transition-colors" aria-label="YouTube">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#F8FAFC"/></svg>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div v-for="(links, section) in footerLinks" :key="section">
          <h3 class="text-gray-900 font-semibold text-sm mb-4 capitalize">{{ section }}</h3>
          <ul class="space-y-2.5">
            <li v-for="link in links" :key="link.label">
              <NuxtLink
                :to="link.href"
                class="text-muted hover:text-gray-900 text-sm transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-muted text-sm">
          © {{ currentYear }} Automobile.lk. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <NuxtLink to="/privacy" class="text-muted hover:text-gray-900 text-sm transition-colors">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="text-muted hover:text-gray-900 text-sm transition-colors">Terms of Service</NuxtLink>
          <NuxtLink to="/sitemap" class="text-muted hover:text-gray-900 text-sm transition-colors">Sitemap</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
