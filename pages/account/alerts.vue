<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Price Alerts — Automobile.lk' })

const uiStore = useUiStore()

const alerts = ref([
  { id: '1', make: 'Toyota', model: 'Prius', maxPrice: 9_000_000, condition: 'used', active: true, createdAt: '2024-12-01' },
  { id: '2', make: 'Honda', model: 'Vezel', maxPrice: 14_000_000, condition: 'new', active: false, createdAt: '2024-11-20' },
])

const showForm = ref(false)
const newAlert = reactive({ make: '', model: '', maxPrice: '', condition: 'any', email: '' })
const { formatLKRFull } = useFormatCurrency()

const addAlert = () => {
  if (!newAlert.make || !newAlert.maxPrice) {
    uiStore.addToast('Please fill in make and max price', 'warning')
    return
  }
  alerts.value.push({
    id: Date.now().toString(),
    make: newAlert.make,
    model: newAlert.model,
    maxPrice: Number(newAlert.maxPrice),
    condition: newAlert.condition,
    active: true,
    createdAt: new Date().toISOString().split('T')[0],
  })
  showForm.value = false
  Object.assign(newAlert, { make: '', model: '', maxPrice: '', condition: 'any', email: '' })
  uiStore.addToast('Price alert created!', 'success')
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="font-display font-bold text-gray-900 text-2xl">Price Alerts</h1>
          <p class="text-muted text-sm">Get notified when cars matching your criteria go on sale</p>
        </div>
        <AppButton variant="primary" size="sm" @click="showForm = !showForm">+ New Alert</AppButton>
      </div>

      <!-- New alert form -->
      <Transition name="slide-down">
        <div v-if="showForm" class="bg-surface border border-primary/30 rounded-2xl p-5 mb-5 space-y-4">
          <h3 class="font-semibold text-gray-900">Create Alert</h3>
          <div class="grid grid-cols-2 gap-3">
            <input v-model="newAlert.make" type="text" placeholder="Make (e.g. Toyota)" class="bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 placeholder-muted focus:outline-none focus:border-primary text-sm" />
            <input v-model="newAlert.model" type="text" placeholder="Model (optional)" class="bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 placeholder-muted focus:outline-none focus:border-primary text-sm" />
            <input v-model="newAlert.maxPrice" type="number" placeholder="Max price (LKR)" class="bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 placeholder-muted focus:outline-none focus:border-primary text-sm col-span-2" />
          </div>
          <div class="flex gap-2">
            <AppButton variant="primary" size="sm" @click="addAlert">Create Alert</AppButton>
            <AppButton variant="ghost" size="sm" @click="showForm = false">Cancel</AppButton>
          </div>
        </div>
      </Transition>

      <!-- Alert list -->
      <div class="space-y-3">
        <div
          v-for="alert in alerts"
          :key="alert.id"
          class="flex items-center gap-4 p-4 bg-surface border border-border rounded-2xl"
        >
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-1">
              <p class="text-gray-900 font-semibold">{{ alert.make }} {{ alert.model || '(any model)' }}</p>
              <span :class="['px-2 py-0.5 text-xs rounded-full', alert.active ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600']">
                {{ alert.active ? 'Active' : 'Paused' }}
              </span>
            </div>
            <p class="text-muted text-xs">
              Max price: <span class="text-primary font-mono">{{ formatLKRFull(alert.maxPrice) }}</span> ·
              Condition: <span class="capitalize">{{ alert.condition }}</span>
            </p>
          </div>
          <div class="flex items-center gap-2">
            <button
              class="text-xs text-muted hover:text-gray-900 transition-colors"
              @click="alert.active = !alert.active"
            >
              {{ alert.active ? 'Pause' : 'Resume' }}
            </button>
            <button
              class="text-xs text-red-400 hover:text-red-300 transition-colors"
              @click="alerts = alerts.filter(a => a.id !== alert.id)"
            >
              Delete
            </button>
          </div>
        </div>

        <div v-if="!alerts.length" class="text-center py-12 text-muted">
          <p class="mb-3">No alerts set yet</p>
          <AppButton variant="outline" size="sm" @click="showForm = true">Create Your First Alert</AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-down-enter-active, .slide-down-leave-active { transition: all 0.3s ease; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; transform: translateY(-10px); max-height: 0; }
</style>
