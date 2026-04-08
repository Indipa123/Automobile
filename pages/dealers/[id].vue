<script setup lang="ts">
import { useRoute } from 'vue-router'
definePageMeta({ layout: 'default' })

const route = useRoute()
const id = route.params.id as string

useHead({ title: `Dealer — ${id} — Automobile.lk` })

const { data, pending, error } = useFetch(`/api/dealers/${id}`)
const dealer = computed(() => (data.value as any)?.dealer || null)
</script>

<template>
  <div class="max-w-4xl mx-auto py-10">
    <div v-if="pending" class="p-6 bg-white rounded-2xl shadow-sm">
      Loading dealer...
    </div>

    <div v-else-if="dealer" class="bg-white rounded-2xl p-6 border border-border">
      <div class="flex items-start gap-4">
        <div class="w-20 h-20 rounded-xl bg-gray-50 border border-border flex items-center justify-center text-2xl font-bold text-primary">
          {{ dealer.name[0] }}
        </div>
        <div class="flex-1">
          <h1 class="font-display font-bold text-2xl">{{ dealer.name }} <span v-if="dealer.verified" class="text-blue-500 ml-2">✓</span></h1>
          <p class="text-muted mt-1">{{ dealer.address }} · {{ dealer.province }}</p>
          <div class="flex items-center gap-4 mt-3">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <span class="font-semibold">{{ dealer.rating.toFixed(1) }}</span>
              <span class="text-muted">({{ dealer.reviewCount }} reviews)</span>
            </div>
            <div class="text-sm text-muted">Established {{ dealer.established || '—' }}</div>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mt-6">
        <div class="md:col-span-2">
          <p class="text-gray-800">{{ dealer.description || 'No description available.' }}</p>

          <div class="mt-4 flex gap-3">
            <a :href="`tel:${dealer.phone}`" class="px-4 py-2 rounded-lg bg-primary text-white text-sm">Call</a>
            <a v-if="dealer.whatsapp" :href="`https://wa.me/${dealer.whatsapp.replace(/[^0-9]/g, '')}`" target="_blank" class="px-4 py-2 rounded-lg border border-border text-sm">WhatsApp</a>
            <NuxtLink to="/dealers" class="px-4 py-2 rounded-lg border border-border text-sm">Back to directory</NuxtLink>
          </div>
        </div>

        <div>
          <ClientOnly>
            <DealerMap :dealers="[dealer]" :center="[dealer.lat, dealer.lng]" :zoom="13" />
            <template #fallback>
              <div class="w-full h-44 bg-surface flex items-center justify-center text-muted">Loading map...</div>
            </template>
          </ClientOnly>
        </div>
      </div>
    </div>

    <div v-else class="p-6 bg-white rounded-2xl">Dealer not found.</div>
  </div>
</template>
