<script setup lang="ts">
const compareStore = useCompareStore()
const router = useRouter()
const { formatLKRShort } = useFormatCurrency()
</script>

<template>
  <div class="fixed bottom-14 lg:bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border shadow-lg pb-1 sm:pb-0">
    <div class="max-w-7xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-3 sm:gap-4">
      <div class="flex-1 flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
        <div
          v-for="car in compareStore.cars"
          :key="car.id"
          class="flex items-center gap-2 bg-gray-50 border border-border rounded-xl px-3 py-2 flex-shrink-0"
        >
          <img
            :src="car.images[0] || 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=48&h=32&fit=crop&auto=format'"
            class="w-12 h-8 object-cover rounded-lg"
            :alt="car.model"
          />
          <div class="min-w-0">
            <p class="text-gray-900 text-xs font-medium truncate max-w-[100px]">{{ car.make }} {{ car.model }}</p>
            <p class="text-primary text-xs font-mono">{{ formatLKRShort(car.price) }}</p>
          </div>
          <button
            class="text-muted hover:text-gray-900 ml-1 flex-shrink-0"
            @click="compareStore.removeCar(car.id)"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Empty slots -->
        <div
          v-for="i in 3 - compareStore.count"
          :key="`empty-${i}`"
          class="flex items-center justify-center w-32 h-14 border-2 border-dashed border-border rounded-xl text-muted text-xs flex-shrink-0"
        >
          Add car
        </div>
      </div>

      <div class="flex items-center gap-2 flex-shrink-0">
        <p class="text-muted text-sm hidden sm:block">{{ compareStore.count }}/3 selected</p>
        <AppButton
          variant="outline"
          size="sm"
          @click="compareStore.clearAll"
        >
          Clear
        </AppButton>
        <AppButton
          variant="primary"
          size="sm"
          :disabled="compareStore.count < 2"
          @click="router.push('/compare')"
        >
          Compare Now
        </AppButton>
      </div>
    </div>
  </div>
</template>
