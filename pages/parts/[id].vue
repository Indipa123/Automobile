<script setup lang="ts">
import type { Part } from '~/types'

definePageMeta({ layout: 'default' })

const route = useRoute()
const id = route.params.id as string
const { formatLKRFull } = useFormatCurrency()
const uiStore = useUiStore()

const { data, pending, error } = await useFetch(`/api/parts/${id}`)
const part = computed<Part | null>(() => (data.value as any)?.part || null)

useHead(() => ({
  title: part.value ? `${part.value.title} (PN: ${part.value.partNumber}) — Automobile.lk` : 'Auto Part Details',
  meta: [
    {
      name: 'description',
      content: part.value ? `${part.value.title} for ${formatLKRFull(part.value.price)}. Genuine compatibility for ${part.value.chassisCodes.join(', ')}.` : '',
    },
  ],
}))

const activeImgIndex = ref(0)
const orderQuantity = ref(1)

const whatsappUrl = computed(() => {
  if (!part.value) return ''
  const text = `Hello ${part.value.seller.name}, I am interested in purchasing "${part.value.title}" (Part No: ${part.value.partNumber}) listed on Automobile.lk for ${formatLKRFull(part.value.price)}. Please confirm availability and delivery.`
  return `https://wa.me/${part.value.seller.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`
})
</script>

<template>
  <div class="min-h-screen bg-surface pb-16">
    <!-- Breadcrumb -->
    <div class="bg-white border-b border-border py-3">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex items-center gap-2 text-xs text-muted">
          <NuxtLink to="/" class="hover:text-gray-900">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/parts" class="hover:text-gray-900">Auto Parts & Lubricants</NuxtLink>
          <span>/</span>
          <span class="text-gray-900 font-semibold truncate">{{ part?.title || 'Part Details' }}</span>
        </div>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="pending" class="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div class="h-96 bg-gray-200 rounded-3xl animate-pulse" />
    </div>

    <!-- 404 -->
    <div v-else-if="!part" class="max-w-md mx-auto px-4 py-20 text-center">
      <h2 class="font-display font-bold text-2xl text-gray-900 mb-2">Part Not Found</h2>
      <p class="text-muted text-xs mb-6">This item may have been sold out or unlisted.</p>
      <NuxtLink to="/parts">
        <AppButton variant="primary">Browse Parts Catalog</AppButton>
      </NuxtLink>
    </div>

    <!-- Main Content -->
    <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div class="grid lg:grid-cols-12 gap-8">
        <!-- Left: Image Gallery (5 cols) -->
        <div class="lg:col-span-5 space-y-4">
          <div class="bg-white border border-border rounded-3xl overflow-hidden aspect-4/3 shadow-sm relative">
            <img
              :src="part.images[activeImgIndex] || part.images[0]"
              :alt="part.title"
              class="w-full h-full object-cover"
              @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1600790142055-619df03207e6?w=800&h=600&fit=crop&auto=format'"
            />
            <span v-if="part.badge" class="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-lg uppercase tracking-wider shadow-md">
              {{ part.badge }}
            </span>
          </div>

          <!-- Thumbnails -->
          <div v-if="part.images.length > 1" class="flex gap-3">
            <button
              v-for="(img, idx) in part.images"
              :key="idx"
              :class="[
                'w-20 h-20 rounded-xl overflow-hidden border-2 transition-all',
                activeImgIndex === idx ? 'border-primary shadow-sm' : 'border-border opacity-70 hover:opacity-100'
              ]"
              @click="activeImgIndex = idx"
            >
              <img
                :src="img"
                class="w-full h-full object-cover"
                @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1600790142055-619df03207e6?w=800&h=600&fit=crop&auto=format'"
              />
            </button>
          </div>

          <!-- Compatibility Guarantee Card -->
          <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">✓</span>
              <h4 class="font-display font-bold text-emerald-950 text-sm">Guaranteed Chassis Fitment</h4>
            </div>
            <p class="text-emerald-800 text-xs leading-relaxed">
              Every part in this catalog is cross-referenced with manufacturer factory parts catalogs (EPC) and verified for Sri Lankan Japanese / European import specifications.
            </p>
            <div class="pt-2 border-t border-emerald-200 flex flex-wrap gap-1.5">
              <span class="text-[11px] font-semibold text-emerald-900 mr-1">Direct Fits:</span>
              <span
                v-for="code in part.chassisCodes"
                :key="code"
                class="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-mono text-xs font-bold"
              >
                {{ code }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right: Info & Purchase Action (7 cols) -->
        <div class="lg:col-span-7 space-y-6">
          <div class="bg-white border border-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <!-- Brand & Part numbers -->
            <div>
              <div class="flex items-center justify-between text-xs text-muted font-mono mb-2">
                <span class="font-bold text-gray-900 text-sm uppercase">{{ part.brand }}</span>
                <span class="bg-gray-100 px-2.5 py-1 rounded-md font-semibold">Part No: {{ part.partNumber }}</span>
              </div>

              <h1 class="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight leading-snug mb-3">
                {{ part.title }}
              </h1>

              <!-- Badges & Ratings -->
              <div class="flex items-center gap-3 flex-wrap text-xs">
                <div class="flex items-center gap-1 text-amber-400 font-bold">
                  <span>★</span>
                  <span class="text-gray-900">{{ part.rating.toFixed(1) }}</span>
                  <span class="text-muted font-normal">({{ part.reviewCount }} reviews)</span>
                </div>
                <span class="text-gray-300">|</span>
                <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize"
                  :class="part.condition === 'brand-new-oem' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'"
                >
                  {{ part.condition.replace(/-/g, ' ') }}
                </span>
                <span class="text-gray-300">|</span>
                <span class="text-muted">Warranty: <strong class="text-gray-900">{{ part.warranty }}</strong></span>
              </div>
            </div>

            <!-- Price Tag -->
            <div class="p-5 bg-surface rounded-2xl border border-border flex items-center justify-between flex-wrap gap-4">
              <div>
                <div class="text-xs text-muted mb-1">Sri Lanka Market Price:</div>
                <div class="flex items-baseline gap-3">
                  <span class="font-mono font-black text-3xl text-primary">{{ formatLKRFull(part.price) }}</span>
                  <span v-if="part.originalPrice" class="font-mono text-sm text-muted line-through">
                    {{ formatLKRFull(part.originalPrice) }}
                  </span>
                </div>
              </div>

              <div class="text-right">
                <span
                  class="inline-block px-3 py-1 rounded-full text-xs font-bold"
                  :class="part.inStock ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-primary'"
                >
                  ● {{ part.inStock ? `In Stock (${part.stockQuantity} available)` : 'Out of Stock' }}
                </span>
                <div class="text-[11px] text-muted mt-1">Delivery islandwide within 24-48h</div>
              </div>
            </div>

            <!-- Order / Enquiry Action Buttons -->
            <div class="space-y-3">
              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener"
                class="flex items-center justify-center gap-2.5 w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl transition-all shadow-md text-base"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Instant Order & Delivery via WhatsApp
              </a>

              <a
                :href="`tel:${part.seller.phone}`"
                class="flex items-center justify-center gap-2 w-full py-3 bg-surface hover:bg-gray-100 text-gray-900 border border-border font-semibold rounded-2xl transition-all text-sm"
              >
                📞 Call Parts Department ({{ part.seller.phone }})
              </a>
            </div>

            <!-- Seller / Storefront Link Card -->
            <div class="p-4 bg-gray-50 border border-border rounded-2xl flex items-center justify-between gap-4">
              <div>
                <span class="text-[10px] uppercase tracking-wider text-muted font-bold block">Verified Merchant / Showroom:</span>
                <span class="font-display font-bold text-gray-900 text-sm">{{ part.seller.name }}</span>
                <span class="text-xs text-muted block">{{ part.seller.location }} · ★ {{ part.seller.rating.toFixed(1) }}</span>
              </div>
              <NuxtLink
                v-if="part.seller.storeId"
                :to="`/dealers/${part.seller.storeId}`"
                class="px-3.5 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-xs rounded-xl transition-colors shrink-0"
              >
                Visit Store →
              </NuxtLink>
            </div>

            <!-- Description -->
            <div>
              <h3 class="font-display font-bold text-gray-900 text-base mb-2">Product Description</h3>
              <p class="text-gray-700 text-sm leading-relaxed">{{ part.description }}</p>
            </div>

            <!-- Technical Specifications Table -->
            <div>
              <h3 class="font-display font-bold text-gray-900 text-base mb-3">Technical Specifications</h3>
              <div class="border border-border rounded-2xl overflow-hidden divide-y divide-border text-xs">
                <div
                  v-for="(val, key) in part.specifications"
                  :key="key"
                  class="flex justify-between p-3 bg-surface"
                >
                  <span class="text-muted font-medium">{{ key }}</span>
                  <span class="text-gray-900 font-semibold text-right">{{ val }}</span>
                </div>
              </div>
            </div>

            <!-- Detailed Compatibility Table -->
            <div>
              <h3 class="font-display font-bold text-gray-900 text-base mb-3">Compatible Vehicles & Chassis Matrix</h3>
              <div class="border border-border rounded-2xl overflow-hidden divide-y divide-border text-xs">
                <div
                  v-for="(cv, idx) in part.compatibleVehicles"
                  :key="idx"
                  class="p-3 bg-white flex flex-col sm:flex-row justify-between sm:items-center gap-2"
                >
                  <div>
                    <span class="font-bold text-gray-900">{{ cv.make }} {{ cv.model }}</span>
                    <span class="text-muted ml-2">({{ cv.yearRange }})</span>
                  </div>
                  <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="text-muted">Chassis:</span>
                    <span
                      v-for="code in cv.chassisCodes"
                      :key="code"
                      class="px-2 py-0.5 bg-gray-100 font-mono font-bold text-gray-800 rounded border border-gray-200"
                    >
                      {{ code }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
