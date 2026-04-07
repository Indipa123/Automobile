<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Car Insurance Quote Sri Lanka — Automobile.lk' })

const { formatLKRFull } = useFormatCurrency()

const vehicleValue = ref(5_000_000)
const vehicleYear = ref(2022)
const usageType = ref<'personal' | 'commercial'>('personal')
const coverageType = ref<'third-party' | 'comprehensive'>('comprehensive')

const estimatedPremium = computed(() => {
  const rate = coverageType.value === 'comprehensive' ? 0.035 : 0.015
  const ageFactor = 2024 - vehicleYear.value
  const depreciatedValue = vehicleValue.value * Math.pow(0.9, ageFactor)
  const baseRate = depreciatedValue * rate
  const commercialMultiplier = usageType.value === 'commercial' ? 1.4 : 1
  return Math.round(baseRate * commercialMultiplier)
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="bg-surface border-b border-border py-10">
      <div class="max-w-2xl mx-auto px-4 sm:px-6">
        <h1 class="font-display font-bold text-gray-900 text-3xl mb-2">Insurance Quote</h1>
        <p class="text-muted">Get an estimated annual insurance premium for your vehicle</p>
      </div>
    </div>

    <div class="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <div class="bg-surface border border-border rounded-2xl p-6 space-y-6">
        <div>
          <div class="flex justify-between mb-2">
            <label class="text-sm text-muted">Vehicle Value (LKR)</label>
            <span class="font-mono text-gray-900 text-sm font-medium">{{ formatLKRFull(vehicleValue) }}</span>
          </div>
          <input type="range" v-model.number="vehicleValue" :min="500000" :max="50000000" :step="100000" class="w-full" />
        </div>

        <div>
          <label class="text-sm text-muted block mb-2">Vehicle Year</label>
          <input
            v-model.number="vehicleYear"
            type="number"
            :min="2000"
            :max="2024"
            class="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-gray-900 focus:outline-none focus:border-primary"
          />
        </div>

        <div>
          <label class="text-sm text-muted block mb-2">Usage Type</label>
          <div class="flex gap-2">
            <button
              v-for="t in ['personal', 'commercial']"
              :key="t"
              :class="['flex-1 py-2.5 text-sm rounded-xl border transition-colors capitalize', usageType === t ? 'bg-primary border-primary text-white' : 'border-border text-muted hover:text-gray-900 bg-background']"
              @click="usageType = t as any"
            >{{ t }}</button>
          </div>
        </div>

        <div>
          <label class="text-sm text-muted block mb-2">Coverage Type</label>
          <div class="flex gap-2">
            <button
              v-for="t in [{ val: 'third-party', label: 'Third Party' }, { val: 'comprehensive', label: 'Comprehensive' }]"
              :key="t.val"
              :class="['flex-1 py-2.5 text-sm rounded-xl border transition-colors', coverageType === t.val ? 'bg-primary border-primary text-white' : 'border-border text-muted hover:text-gray-900 bg-background']"
              @click="coverageType = t.val as any"
            >{{ t.label }}</button>
          </div>
        </div>

        <!-- Result -->
        <div class="bg-background border border-border rounded-xl p-5 text-center">
          <p class="text-muted text-sm mb-1">Estimated Annual Premium</p>
          <p class="font-mono font-bold text-primary text-3xl">{{ formatLKRFull(estimatedPremium) }}</p>
          <p class="text-muted text-xs mt-1">≈ {{ formatLKRFull(Math.round(estimatedPremium / 12)) }}/month</p>
        </div>

        <p class="text-muted text-xs text-center">* This is an estimate only. Contact insurers for exact quotes. Rates may vary based on driver age, no-claims bonus, and other factors.</p>

        <AppButton variant="primary" full-width size="lg">
          Get Detailed Quote
        </AppButton>
      </div>
    </div>
  </div>
</template>
