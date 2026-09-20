<script setup lang="ts">
const { calculateLoan } = useLoanCalculator()
const { formatLKRFull } = useFormatCurrency()

const vehiclePrice = ref(5_000_000)
const downPaymentPct = ref(20)
const annualRate = ref(14)
const months = ref(60)

const result = computed(() =>
  calculateLoan(vehiclePrice.value, downPaymentPct.value, annualRate.value, months.value)
)

const showAmortization = ref(false)

const banks = [
  { name: 'Sampath Bank', rate: '12.5% – 15%', logo: 'S' },
  { name: 'Commercial Bank', rate: '13% – 16%', logo: 'C' },
  { name: 'BOC', rate: '11.5% – 14%', logo: 'B' },
  { name: 'HNB', rate: '13.5% – 16.5%', logo: 'H' },
]
</script>

<template>
  <div class="space-y-6">
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Inputs -->
      <div class="bg-white border border-border rounded-2xl p-4 sm:p-6 space-y-5">
        <h3 class="font-display font-bold text-gray-900 text-xl">Loan Calculator</h3>

        <div>
          <div class="flex justify-between mb-1.5">
            <label class="text-sm text-muted">Vehicle Price</label>
            <span class="font-mono text-gray-900 text-sm font-medium">{{ formatLKRFull(vehiclePrice) }}</span>
          </div>
          <input type="range" v-model.number="vehiclePrice" :min="500000" :max="50000000" :step="100000" class="w-full" />
          <div class="flex justify-between text-xs text-muted mt-1">
            <span>Rs. 500K</span><span>Rs. 50M</span>
          </div>
        </div>

        <div>
          <div class="flex justify-between mb-1.5">
            <label class="text-sm text-muted">Down Payment</label>
            <span class="font-mono text-gray-900 text-sm font-medium">{{ downPaymentPct }}% ({{ formatLKRFull(result.downPayment) }})</span>
          </div>
          <input type="range" v-model.number="downPaymentPct" :min="10" :max="60" :step="5" class="w-full" />
          <div class="flex justify-between text-xs text-muted mt-1">
            <span>10%</span><span>60%</span>
          </div>
        </div>

        <div>
          <div class="flex justify-between mb-1.5">
            <label class="text-sm text-muted">Loan Term</label>
            <span class="font-mono text-gray-900 text-sm font-medium">{{ months }} months ({{ (months / 12).toFixed(1) }} yrs)</span>
          </div>
          <input type="range" v-model.number="months" :min="12" :max="84" :step="12" class="w-full" />
          <div class="flex justify-between text-xs text-muted mt-1">
            <span>1 year</span><span>7 years</span>
          </div>
        </div>

        <div>
          <div class="flex justify-between mb-1.5">
            <label class="text-sm text-muted">Interest Rate (Annual)</label>
            <span class="font-mono text-gray-900 text-sm font-medium">{{ annualRate }}%</span>
          </div>
          <input type="range" v-model.number="annualRate" :min="8" :max="24" :step="0.5" class="w-full" />
          <div class="flex justify-between text-xs text-muted mt-1">
            <span>8%</span><span>24%</span>
          </div>
        </div>
      </div>

      <!-- Results -->
      <div class="space-y-4">
        <!-- EMI highlight -->
        <div class="bg-primary/10 border border-primary/20 rounded-2xl p-6 text-center">
          <p class="text-primary text-sm font-medium mb-1">Monthly EMI</p>
          <p class="font-mono font-bold text-gray-900 text-4xl">{{ formatLKRFull(result.monthlyEMI) }}</p>
          <p class="text-muted text-xs mt-1">per month for {{ months }} months</p>
        </div>

        <!-- Summary -->
        <div class="bg-white border border-border rounded-2xl p-5 space-y-3">
          <div class="flex justify-between text-sm">
            <span class="text-muted">Loan Amount</span>
            <span class="text-gray-900 font-mono">{{ formatLKRFull(result.loanAmount) }}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-muted">Total Interest</span>
            <span class="text-red-500 font-mono">{{ formatLKRFull(result.totalInterest) }}</span>
          </div>
          <div class="flex justify-between text-sm pt-3 border-t border-border font-semibold">
            <span class="text-muted">Total Payment</span>
            <span class="text-gray-900 font-mono">{{ formatLKRFull(result.totalPayment) }}</span>
          </div>
        </div>

        <!-- Pie chart visualization -->
        <div class="bg-white border border-border rounded-2xl p-5">
          <div class="flex items-center gap-4">
            <div class="relative w-20 h-20 flex-shrink-0">
              <svg viewBox="0 0 36 36" class="transform -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#E2E8F0" stroke-width="3.8" />
                <circle
                  cx="18" cy="18" r="15.9" fill="none" stroke="#C8102E" stroke-width="3.8"
                  :stroke-dasharray="`${(result.loanAmount / result.totalPayment) * 100} 100`"
                />
              </svg>
            </div>
            <div class="flex-1 space-y-2 text-xs">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-primary" />
                <span class="text-muted">Principal: {{ Math.round((result.loanAmount / result.totalPayment) * 100) }}%</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <span class="text-muted">Interest: {{ Math.round((result.totalInterest / result.totalPayment) * 100) }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Banks -->
    <div class="bg-white border border-border rounded-2xl p-4 sm:p-6">
      <h4 class="font-display font-semibold text-gray-900 mb-4">Partner Banks & Estimated Rates</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        <div
          v-for="bank in banks"
          :key="bank.name"
          class="flex items-center gap-3 p-3 bg-gray-50 border border-border rounded-xl"
        >
          <div class="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
            {{ bank.logo }}
          </div>
          <div class="min-w-0">
            <p class="text-gray-900 text-xs font-medium truncate">{{ bank.name }}</p>
            <p class="text-primary text-xs font-mono">{{ bank.rate }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Amortization table -->
    <div class="bg-white border border-border rounded-2xl overflow-hidden">
      <button
        class="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
        @click="showAmortization = !showAmortization"
      >
        <span class="font-display font-semibold text-gray-900">Amortization Schedule</span>
        <svg
          class="w-5 h-5 text-muted transition-transform"
          :class="showAmortization ? 'rotate-180' : ''"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <Transition name="slide-down">
        <div v-if="showAmortization" class="overflow-x-auto no-scrollbar border-t border-border">
          <table class="w-full text-xs">
            <thead>
              <tr class="bg-gray-50">
                <th class="px-4 py-2 text-left text-muted font-medium">Month</th>
                <th class="px-4 py-2 text-right text-muted font-medium">EMI</th>
                <th class="px-4 py-2 text-right text-muted font-medium">Principal</th>
                <th class="px-4 py-2 text-right text-muted font-medium">Interest</th>
                <th class="px-4 py-2 text-right text-muted font-medium">Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="entry in result.amortization.slice(0, 24)"
                :key="entry.month"
                class="border-t border-border/30 hover:bg-gray-50"
              >
                <td class="px-4 py-2 text-muted">{{ entry.month }}</td>
                <td class="px-4 py-2 text-right text-gray-900 font-mono">{{ formatLKRFull(entry.payment) }}</td>
                <td class="px-4 py-2 text-right text-emerald-600 font-mono">{{ formatLKRFull(entry.principal) }}</td>
                <td class="px-4 py-2 text-right text-red-500 font-mono">{{ formatLKRFull(entry.interest) }}</td>
                <td class="px-4 py-2 text-right text-muted font-mono">{{ formatLKRFull(entry.balance) }}</td>
              </tr>
            </tbody>
          </table>
          <p v-if="result.amortization.length > 24" class="text-center text-muted text-xs py-3">
            Showing first 24 of {{ result.amortization.length }} months
          </p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.slide-down-enter-active, .slide-down-leave-active { transition: all 0.3s ease; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; max-height: 0; }
</style>
