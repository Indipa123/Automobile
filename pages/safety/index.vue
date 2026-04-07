<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Car Safety Ratings — Automobile.lk' })

const ratings = [
  { car: 'Honda Vezel 2023', stars: 5, overall: 96, adult: 98, child: 93, pedestrian: 90 },
  { car: 'Toyota Prius 2022', stars: 5, overall: 94, adult: 96, child: 91, pedestrian: 88 },
  { car: 'Kia EV6 2023', stars: 5, overall: 97, adult: 98, child: 96, pedestrian: 92 },
  { car: 'Suzuki Alto 2023', stars: 3, overall: 67, adult: 71, child: 65, pedestrian: 58 },
  { car: 'BMW 3 Series 2021', stars: 5, overall: 93, adult: 95, child: 90, pedestrian: 88 },
]
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="bg-surface border-b border-border py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 class="font-display font-bold text-gray-900 text-3xl mb-2">🛡️ Safety Ratings</h1>
        <p class="text-muted">NCAP and international safety test results for cars available in Sri Lanka</p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8 overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="border-b border-border">
            <th class="text-left py-3 px-4 text-muted text-sm font-semibold">Vehicle</th>
            <th class="text-center py-3 px-4 text-muted text-sm font-semibold">Stars</th>
            <th class="text-center py-3 px-4 text-muted text-sm font-semibold">Overall</th>
            <th class="text-center py-3 px-4 text-muted text-sm font-semibold">Adult</th>
            <th class="text-center py-3 px-4 text-muted text-sm font-semibold">Child</th>
            <th class="text-center py-3 px-4 text-muted text-sm font-semibold">Pedestrian</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in ratings" :key="r.car" class="border-b border-border/50 hover:bg-surface transition-colors">
            <td class="py-4 px-4 text-gray-900 font-medium">{{ r.car }}</td>
            <td class="py-4 px-4 text-center">
              <StarRating :rating="r.stars" size="sm" />
            </td>
            <td class="py-4 px-4 text-center">
              <span :class="['font-mono font-bold', r.overall >= 90 ? 'text-emerald-700' : r.overall >= 70 ? 'text-amber-600' : 'text-red-600']">{{ r.overall }}%</span>
            </td>
            <td class="py-4 px-4 text-center text-gray-700">{{ r.adult }}%</td>
            <td class="py-4 px-4 text-center text-gray-700">{{ r.child }}%</td>
            <td class="py-4 px-4 text-center text-gray-700">{{ r.pedestrian }}%</td>
          </tr>
        </tbody>
      </table>
      <p class="text-muted text-xs mt-4">* Data sourced from ASEAN NCAP and Euro NCAP. Ratings are based on most recent test results.</p>
    </div>
  </div>
</template>
