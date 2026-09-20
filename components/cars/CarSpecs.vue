<script setup lang="ts">
import type { Car } from '~/types'

defineProps<{ car: Car }>()
</script>

<template>
  <div class="space-y-6">
    <!-- Engine & Performance -->
    <div class="bg-white border border-border rounded-2xl p-4 sm:p-6">
      <h3 class="font-display font-bold text-gray-900 text-lg mb-4">Engine & Performance</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div class="space-y-1">
          <p class="text-muted text-xs uppercase tracking-wide">Engine</p>
          <p class="text-gray-900 font-medium">{{ car.engineCC.toLocaleString() }}cc</p>
        </div>
        <div class="space-y-1" v-if="car.horsepower">
          <p class="text-muted text-xs uppercase tracking-wide">Power</p>
          <p class="text-gray-900 font-medium">{{ car.horsepower }} hp</p>
        </div>
        <div class="space-y-1" v-if="car.torque">
          <p class="text-muted text-xs uppercase tracking-wide">Torque</p>
          <p class="text-gray-900 font-medium">{{ car.torque }} Nm</p>
        </div>
        <div class="space-y-1">
          <p class="text-muted text-xs uppercase tracking-wide">Fuel Type</p>
          <p class="text-gray-900 font-medium capitalize">{{ car.fuelType }}</p>
        </div>
        <div class="space-y-1">
          <p class="text-muted text-xs uppercase tracking-wide">Transmission</p>
          <p class="text-gray-900 font-medium capitalize">{{ car.transmission }}</p>
        </div>
        <div class="space-y-1">
          <p class="text-muted text-xs uppercase tracking-wide">Drive Type</p>
          <p class="text-gray-900 font-medium uppercase">{{ car.driveType }}</p>
        </div>
        <div class="space-y-1" v-if="car.fuelConsumption">
          <p class="text-muted text-xs uppercase tracking-wide">Fuel Economy</p>
          <p class="text-gray-900 font-medium">{{ car.fuelConsumption }}</p>
        </div>
        <div class="space-y-1" v-if="car.tankCapacity">
          <p class="text-muted text-xs uppercase tracking-wide">Tank Capacity</p>
          <p class="text-gray-900 font-medium">{{ car.tankCapacity }}L</p>
        </div>
      </div>
    </div>

    <!-- Vehicle Info -->
    <div class="bg-white border border-border rounded-2xl p-4 sm:p-6">
      <h3 class="font-display font-bold text-gray-900 text-lg mb-4">Vehicle Details</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div class="space-y-1">
          <p class="text-muted text-xs uppercase tracking-wide">Year</p>
          <p class="text-gray-900 font-medium">{{ car.year }}</p>
        </div>
        <div class="space-y-1">
          <p class="text-muted text-xs uppercase tracking-wide">Body Type</p>
          <p class="text-gray-900 font-medium capitalize">{{ car.bodyType }}</p>
        </div>
        <div class="space-y-1">
          <p class="text-muted text-xs uppercase tracking-wide">Color</p>
          <p class="text-gray-900 font-medium capitalize">{{ car.color }}</p>
        </div>
        <div class="space-y-1">
          <p class="text-muted text-xs uppercase tracking-wide">Seats</p>
          <p class="text-gray-900 font-medium">{{ car.seats }}</p>
        </div>
        <div class="space-y-1">
          <p class="text-muted text-xs uppercase tracking-wide">Mileage</p>
          <p class="text-gray-900 font-medium">{{ car.mileage.toLocaleString() }} km</p>
        </div>
        <div class="space-y-1">
          <p class="text-muted text-xs uppercase tracking-wide">Condition</p>
          <p class="text-gray-900 font-medium capitalize">{{ car.condition }}</p>
        </div>
      </div>
    </div>

    <!-- Dimensions (if available) -->
    <div v-if="car.length || car.width || car.height" class="bg-white border border-border rounded-2xl p-4 sm:p-6">
      <h3 class="font-display font-bold text-gray-900 text-lg mb-4">Dimensions & Weight</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div v-if="car.length" class="space-y-1">
          <p class="text-muted text-xs uppercase tracking-wide">Length</p>
          <p class="text-gray-900 font-medium">{{ car.length }} mm</p>
        </div>
        <div v-if="car.width" class="space-y-1">
          <p class="text-muted text-xs uppercase tracking-wide">Width</p>
          <p class="text-gray-900 font-medium">{{ car.width }} mm</p>
        </div>
        <div v-if="car.height" class="space-y-1">
          <p class="text-muted text-xs uppercase tracking-wide">Height</p>
          <p class="text-gray-900 font-medium">{{ car.height }} mm</p>
        </div>
        <div v-if="car.wheelbase" class="space-y-1">
          <p class="text-muted text-xs uppercase tracking-wide">Wheelbase</p>
          <p class="text-gray-900 font-medium">{{ car.wheelbase }} mm</p>
        </div>
        <div v-if="car.kerbWeight" class="space-y-1">
          <p class="text-muted text-xs uppercase tracking-wide">Kerb Weight</p>
          <p class="text-gray-900 font-medium">{{ car.kerbWeight }} kg</p>
        </div>
      </div>
    </div>

    <!-- Features -->
    <div v-if="car.features?.length" class="bg-white border border-border rounded-2xl p-4 sm:p-6">
      <h3 class="font-display font-bold text-gray-900 text-lg mb-4">Features & Equipment</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
        <div
          v-for="feature in car.features"
          :key="feature"
          class="flex items-center gap-2 text-sm text-gray-700"
        >
          <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          {{ feature }}
        </div>
      </div>
    </div>
  </div>
</template>
