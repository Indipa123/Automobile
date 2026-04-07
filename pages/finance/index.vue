<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Car Finance in Sri Lanka — Automobile.lk' })

const tools = [
  { title: 'Loan Calculator', description: 'Calculate monthly EMI, total interest, and compare bank rates instantly.', href: '/finance/loan-calculator', icon: '📊', cta: 'Calculate EMI' },
  { title: 'Insurance Quote', description: 'Get an estimated annual insurance premium for your vehicle.', href: '/finance/insurance', icon: '🛡️', cta: 'Get Quote' },
]

const banks = [
  { name: 'Sampath Bank', rates: '12.5% – 15%', maxTerm: '7 years', maxFinancing: '80%' },
  { name: 'Commercial Bank', rates: '13% – 16%', maxTerm: '7 years', maxFinancing: '75%' },
  { name: 'Bank of Ceylon', rates: '11.5% – 14%', maxTerm: '6 years', maxFinancing: '80%' },
  { name: 'Hatton National Bank', rates: '13.5% – 16.5%', maxTerm: '7 years', maxFinancing: '75%' },
  { name: 'National Savings Bank', rates: '11% – 13.5%', maxTerm: '5 years', maxFinancing: '70%' },
  { name: 'Seylan Bank', rates: '13% – 15.5%', maxTerm: '6 years', maxFinancing: '75%' },
]
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="bg-surface border-b border-border py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h1 class="font-display font-bold text-gray-900 text-4xl mb-4">Finance Hub</h1>
        <p class="text-muted text-lg max-w-xl mx-auto">Plan your car purchase with our free finance tools and bank rate comparison</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      <!-- Tools -->
      <div class="grid md:grid-cols-2 gap-6">
        <NuxtLink
          v-for="tool in tools"
          :key="tool.title"
          :to="tool.href"
          class="group flex flex-col bg-surface border border-border rounded-2xl p-8 hover:border-primary/40 transition-all hover:-translate-y-1"
        >
          <span class="text-4xl mb-4">{{ tool.icon }}</span>
          <h2 class="font-display font-bold text-gray-900 text-2xl mb-2">{{ tool.title }}</h2>
          <p class="text-muted flex-1 mb-5">{{ tool.description }}</p>
          <span class="text-primary font-semibold group-hover:underline">{{ tool.cta }} →</span>
        </NuxtLink>
      </div>

      <!-- Bank rates table -->
      <div>
        <SectionTitle eyebrow="Partner Banks">
          Bank Interest Rates Comparison
          <template #description>Current vehicle loan rates from major Sri Lankan banks (approximate)</template>
        </SectionTitle>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-3 px-4 text-muted text-xs font-semibold uppercase tracking-wide">Bank</th>
                <th class="text-left py-3 px-4 text-muted text-xs font-semibold uppercase tracking-wide">Interest Rate</th>
                <th class="text-left py-3 px-4 text-muted text-xs font-semibold uppercase tracking-wide">Max Term</th>
                <th class="text-left py-3 px-4 text-muted text-xs font-semibold uppercase tracking-wide">Max Financing</th>
                <th class="py-3 px-4" />
              </tr>
            </thead>
            <tbody>
              <tr v-for="bank in banks" :key="bank.name" class="border-b border-border/50 hover:bg-surface transition-colors">
                <td class="py-4 px-4 text-gray-900 font-medium">{{ bank.name }}</td>
                <td class="py-4 px-4 text-primary font-mono">{{ bank.rates }}</td>
                <td class="py-4 px-4 text-gray-700">{{ bank.maxTerm }}</td>
                <td class="py-4 px-4 text-gray-700">{{ bank.maxFinancing }}</td>
                <td class="py-4 px-4">
                  <NuxtLink to="/finance/loan-calculator">
                    <AppButton variant="outline" size="sm">Calculate</AppButton>
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-muted text-xs mt-3">* Rates are indicative only. Contact banks directly for exact terms. Last updated: Jan 2025.</p>
      </div>
    </div>
  </div>
</template>
