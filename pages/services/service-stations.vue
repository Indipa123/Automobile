<script setup lang="ts">
import type { ServiceProvider } from '~/types'

definePageMeta({ layout: 'default' })

useHead({
  title: 'Service Stations, Express Lube & Auto Detailing Sri Lanka',
  meta: [
    {
      name: 'description',
      content: 'Find trusted car service stations, express lube maintenance bays, touchless car wash, and ceramic coating studios across Sri Lanka.',
    },
  ],
})

const { data } = await useFetch('/api/services?type=service-station')
const stations = computed<ServiceProvider[]>(() => (data.value as any)?.services || [])
</script>

<template>
  <div class="min-h-screen bg-surface pb-16">
    <div class="bg-gray-900 text-white py-12 border-b border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <NuxtLink to="/services" class="inline-flex items-center gap-1 text-xs text-white/70 hover:text-white mb-4 transition-colors">
          ← Back to All Automotive Services
        </NuxtLink>
        <h1 class="font-display font-extrabold text-3xl sm:text-4xl text-white mb-2">
          Service Stations, Lube Bays & Auto Detailing
        </h1>
        <p class="text-white/70 text-sm max-w-2xl">
          Periodic vehicle maintenance, genuine lubricant oil changes, underbody wash & rust treatment, and 9H nano ceramic detailing studios.
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="station in stations"
          :key="station.id"
          class="bg-white border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
        >
          <div class="relative h-48 bg-gray-100 overflow-hidden">
            <img
              :src="station.images[0]"
              :alt="station.name"
              class="w-full h-full object-cover"
              @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&h=500&fit=crop&auto=format'"
            />
            <div class="absolute top-3 left-3 px-2.5 py-1 bg-emerald-600 text-white text-[10px] font-bold rounded-md">
              Lube & Detailing Bay
            </div>
            <div class="absolute top-3 right-3 px-2 py-0.5 bg-black/70 text-white text-[10px] rounded">
              ★ {{ station.rating.toFixed(1) }} ({{ station.reviewCount }})
            </div>
          </div>

          <div class="p-6 flex-1 flex flex-col space-y-4">
            <div>
              <h3 class="font-display font-bold text-gray-900 text-lg leading-tight mb-1">{{ station.name }}</h3>
              <p class="text-muted text-xs">📍 {{ station.address }}</p>
            </div>

            <p class="text-gray-700 text-xs leading-relaxed">{{ station.description }}</p>

            <div>
              <div class="text-[10px] font-bold uppercase text-muted mb-1.5">Capabilities:</div>
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="spec in station.specializations"
                  :key="spec"
                  class="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[11px] rounded-md border border-emerald-100 font-medium"
                >
                  {{ spec }}
                </span>
              </div>
            </div>

            <div class="space-y-1.5 pt-2 border-t border-border">
              <div
                v-for="(serv, idx) in station.servicesOffered.slice(0, 3)"
                :key="idx"
                class="flex justify-between text-xs py-1"
              >
                <span class="text-gray-800">{{ serv.name }}</span>
                <span class="font-mono font-bold text-primary">{{ serv.priceEstimate }}</span>
              </div>
            </div>

            <div class="mt-auto pt-4 border-t border-border flex gap-2">
              <a
                :href="`tel:${station.phone}`"
                class="flex-1 py-2.5 bg-primary text-white font-bold rounded-xl text-xs text-center hover:bg-primary-dark transition-colors"
              >
                Call Service Station
              </a>
              <a
                :href="`https://wa.me/${station.whatsapp.replace(/[^0-9]/g, '')}`"
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
