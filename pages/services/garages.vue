<script setup lang="ts">
import type { ServiceProvider } from '~/types'

definePageMeta({ layout: 'default' })

useHead({
  title: 'Auto Garages, Hybrid Battery Labs & Repair Workshops Sri Lanka',
  meta: [
    {
      name: 'description',
      content: 'Find trusted auto garages, certified hybrid battery rebuilders, European vehicle specialists, and mechanical overhaul workshops across Sri Lanka.',
    },
  ],
})

const { data } = await useFetch('/api/services?type=garage')
const garages = computed<ServiceProvider[]>(() => (data.value as any)?.services || [])
</script>

<template>
  <div class="min-h-screen bg-surface pb-16">
    <div class="bg-gray-900 text-white py-12 border-b border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <NuxtLink to="/services" class="inline-flex items-center gap-1 text-xs text-white/70 hover:text-white mb-4 transition-colors">
          ← Back to All Automotive Services
        </NuxtLink>
        <h1 class="font-display font-extrabold text-3xl sm:text-4xl text-white mb-2">
          Automobile Garages & Specialized Workshops
        </h1>
        <p class="text-white/70 text-sm max-w-2xl">
          Verified mechanics, hybrid and EV high voltage battery diagnostics, transmission rebuilds, and European computer diagnostics.
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="garage in garages"
          :key="garage.id"
          class="bg-white border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
        >
          <div class="relative h-48 bg-gray-100 overflow-hidden">
            <img
              :src="garage.images[0]"
              :alt="garage.name"
              class="w-full h-full object-cover"
              @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop&auto=format'"
            />
            <div class="absolute top-3 left-3 px-2.5 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-md">
              Specialized Workshop
            </div>
            <div class="absolute top-3 right-3 px-2 py-0.5 bg-black/70 text-white text-[10px] rounded">
              ★ {{ garage.rating.toFixed(1) }} ({{ garage.reviewCount }})
            </div>
          </div>

          <div class="p-6 flex-1 flex flex-col space-y-4">
            <div>
              <h3 class="font-display font-bold text-gray-900 text-lg leading-tight mb-1">{{ garage.name }}</h3>
              <p class="text-muted text-xs">📍 {{ garage.address }}</p>
            </div>

            <p class="text-gray-700 text-xs leading-relaxed">{{ garage.description }}</p>

            <div>
              <div class="text-[10px] font-bold uppercase text-muted mb-1.5">Specialties:</div>
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="spec in garage.specializations"
                  :key="spec"
                  class="px-2 py-0.5 bg-blue-50 text-blue-700 text-[11px] rounded-md border border-blue-100 font-medium"
                >
                  {{ spec }}
                </span>
              </div>
            </div>

            <div class="space-y-1.5 pt-2 border-t border-border">
              <div
                v-for="(serv, idx) in garage.servicesOffered.slice(0, 3)"
                :key="idx"
                class="flex justify-between text-xs py-1"
              >
                <span class="text-gray-800">{{ serv.name }}</span>
                <span class="font-mono font-bold text-primary">{{ serv.priceEstimate }}</span>
              </div>
            </div>

            <div class="mt-auto pt-4 border-t border-border flex gap-2">
              <a
                :href="`tel:${garage.phone}`"
                class="flex-1 py-2.5 bg-primary text-white font-bold rounded-xl text-xs text-center hover:bg-primary-dark transition-colors"
              >
                Call Workshop
              </a>
              <a
                :href="`https://wa.me/${garage.whatsapp.replace(/[^0-9]/g, '')}`"
                target="_blank"
                rel="noopener"
                class="px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
