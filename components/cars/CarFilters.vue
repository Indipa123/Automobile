<script setup lang="ts">
import type { CarFilters } from '~/types'

const emit = defineEmits<{ apply: [filters: CarFilters] }>()

const { makes, provinces, bodyTypes } = useFilters()
const filtersStore = useFiltersStore()
const filters = ref({ ...filtersStore.filters })

const fuelTypes = ['petrol', 'diesel', 'electric', 'hybrid', 'cng']
const transmissions = ['automatic', 'manual', 'cvt', 'dsg']

const toggleArray = <T>(arr: T[] | undefined, val: T): T[] => {
  const current = arr || []
  return current.includes(val)
    ? current.filter(v => v !== val)
    : [...current, val]
}

const apply = () => {
  filtersStore.filters = { ...filters.value }
  emit('apply', filters.value)
}

const clear = () => {
  filters.value = { condition: 'all', sortBy: 'relevance', page: 1, limit: 12 }
  filtersStore.clearFilters()
  emit('apply', filters.value)
}

const makeOptions = computed(() => makes.map(m => ({ value: m, label: m })))
const provinceOptions = computed(() => provinces.map(p => ({ value: p, label: p })))
</script>

<template>
  <div class="bg-white border border-border rounded-2xl p-5 space-y-5 sticky top-20 shadow-sm">
    <div class="flex items-center justify-between">
      <h2 class="font-display font-bold text-gray-900 text-base">Filters</h2>
      <button class="text-xs text-primary hover:text-accent transition-colors" @click="clear">Clear all</button>
    </div>

    <!-- Condition -->
    <div>
      <label class="text-xs text-muted uppercase tracking-wide mb-2 block">Condition</label>
      <div class="flex gap-2">
        <button
          v-for="c in ['all', 'new', 'used', 'reconditioned']"
          :key="c"
          :class="[
            'flex-1 py-1.5 text-xs font-medium rounded-lg border transition-colors capitalize',
            filters.condition === c
              ? 'bg-primary border-primary text-white'
              : 'border-border text-muted hover:text-gray-900 hover:border-primary/50 bg-white'
          ]"
          @click="filters.condition = c as any"
        >
          {{ c === 'all' ? 'All' : c === 'reconditioned' ? 'Recon' : c.charAt(0).toUpperCase() + c.slice(1) }}
        </button>
      </div>
    </div>

    <!-- Make -->
    <div>
      <AppDropdown
        v-model="filters.make"
        :options="makeOptions"
        label="Make"
        placeholder="Any make"
        searchable
      />
    </div>

    <!-- Model -->
    <div>
      <label class="text-xs text-muted uppercase tracking-wide mb-1.5 block">Model</label>
      <input
        v-model="filters.model"
        type="text"
        placeholder="Any model"
        class="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-muted focus:outline-none focus:border-primary transition-colors"
      />
    </div>

    <!-- Year Range -->
    <div>
      <label class="text-xs text-muted uppercase tracking-wide mb-2 block">Year Range</label>
      <div class="flex items-center gap-2">
        <input
          v-model.number="filters.yearMin"
          type="number"
          placeholder="2000"
          min="1990"
          max="2026"
          class="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-muted focus:outline-none focus:border-primary"
        />
        <span class="text-muted text-xs">—</span>
        <input
          v-model.number="filters.yearMax"
          type="number"
          placeholder="2026"
          min="1990"
          max="2026"
          class="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-muted focus:outline-none focus:border-primary"
        />
      </div>
    </div>

    <!-- Price Range -->
    <div>
      <label class="text-xs text-muted uppercase tracking-wide mb-2 block">Price Range (LKR)</label>
      <div class="flex items-center gap-2">
        <input
          v-model.number="filters.priceMin"
          type="number"
          placeholder="Min"
          class="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-muted focus:outline-none focus:border-primary"
        />
        <span class="text-muted text-xs">—</span>
        <input
          v-model.number="filters.priceMax"
          type="number"
          placeholder="Max"
          class="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-muted focus:outline-none focus:border-primary"
        />
      </div>
    </div>

    <!-- Body Type -->
    <div>
      <label class="text-xs text-muted uppercase tracking-wide mb-2 block">Body Type</label>
      <div class="grid grid-cols-2 gap-1.5">
        <button
          v-for="bt in bodyTypes"
          :key="bt.value"
          :class="[
            'py-1.5 px-2 text-xs rounded-lg border transition-colors text-left',
            filters.bodyType?.includes(bt.value as any)
              ? 'bg-primary/10 border-primary text-primary'
              : 'border-border text-muted hover:text-gray-900 hover:border-primary/40 bg-white'
          ]"
          @click="filters.bodyType = toggleArray(filters.bodyType, bt.value as any)"
        >
          {{ bt.label }}
        </button>
      </div>
    </div>

    <!-- Fuel Type -->
    <div>
      <label class="text-xs text-muted uppercase tracking-wide mb-2 block">Fuel Type</label>
      <div class="flex flex-wrap gap-1.5">
        <button
          v-for="ft in fuelTypes"
          :key="ft"
          :class="[
            'py-1 px-3 text-xs rounded-full border transition-colors capitalize',
            filters.fuelType?.includes(ft as any)
              ? 'bg-primary/10 border-primary text-primary'
              : 'border-border text-muted hover:text-gray-900 hover:border-primary/40'
          ]"
          @click="filters.fuelType = toggleArray(filters.fuelType, ft as any)"
        >
          {{ ft }}
        </button>
      </div>
    </div>

    <!-- Transmission -->
    <div>
      <label class="text-xs text-muted uppercase tracking-wide mb-2 block">Transmission</label>
      <div class="flex flex-wrap gap-1.5">
        <button
          v-for="tr in transmissions"
          :key="tr"
          :class="[
            'py-1 px-3 text-xs rounded-full border transition-colors capitalize',
            filters.transmission?.includes(tr as any)
              ? 'bg-primary/10 border-primary text-primary'
              : 'border-border text-muted hover:text-gray-900 hover:border-primary/40'
          ]"
          @click="filters.transmission = toggleArray(filters.transmission, tr as any)"
        >
          {{ tr }}
        </button>
      </div>
    </div>

    <!-- Province -->
    <div>
      <AppDropdown
        v-model="filters.province"
        :options="provinceOptions"
        label="Province"
        placeholder="Any province"
      />
    </div>

    <!-- Apply Button -->
    <AppButton variant="primary" full-width @click="apply">
      Apply Filters
    </AppButton>
  </div>
</template>
