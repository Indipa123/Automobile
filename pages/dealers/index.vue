<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Car Dealers in Sri Lanka — Automobile.lk' })

const { data, pending } = useFetch('/api/dealers')
const dealers = computed(() => (data.value as any)?.dealers || [])

const selectedDealer = ref<any>(null)
const search = ref('')

const filteredDealers = computed(() =>
  search.value
    ? dealers.value.filter((d: any) =>
        d.name.toLowerCase().includes(search.value.toLowerCase()) ||
        d.province.toLowerCase().includes(search.value.toLowerCase())
      )
    : dealers.value
)
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="bg-surface border-b border-border py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 class="font-display font-bold text-gray-900 text-3xl mb-2">Dealer Directory</h1>
        <p class="text-muted mb-5">Find trusted car dealers across Sri Lanka</p>
        <div class="flex gap-3 max-w-md">
          <input
            v-model="search"
            type="text"
            placeholder="Search by dealer name or province..."
            class="flex-1 bg-background border border-border rounded-xl px-4 py-2.5 text-gray-900 placeholder-muted focus:outline-none focus:border-primary text-sm"
          />
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div class="grid lg:grid-cols-5 gap-6">
        <!-- Map -->
        <div class="lg:col-span-3 h-[500px] rounded-2xl overflow-hidden border border-border">
          <ClientOnly>
            <DealerMap
              :dealers="dealers"
              @select="selectedDealer = $event"
            />
            <template #fallback>
              <div class="w-full h-full bg-surface flex items-center justify-center text-muted">
                Loading map...
              </div>
            </template>
          </ClientOnly>
        </div>

        <!-- Dealer list -->
        <div class="lg:col-span-2 space-y-3 overflow-y-auto max-h-[500px] pr-1">
          <div v-if="pending">
            <SkeletonCard type="dealer" :count="5" />
          </div>
          <DealerCard
            v-for="dealer in filteredDealers"
            :key="dealer.id"
            :dealer="dealer"
            :class="selectedDealer?.id === dealer.id ? 'border-primary' : ''"
          />
          <p v-if="!pending && !filteredDealers.length" class="text-center text-muted py-8">No dealers found</p>
        </div>
      </div>
    </div>
  </div>
</template>
