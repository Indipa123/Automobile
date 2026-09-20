<script setup lang="ts">
import type { ServiceProvider, ServiceType } from '~/types'

definePageMeta({ layout: 'default' })

const route = useRoute()
const uiStore = useUiStore()

useHead({
  title: 'Automobile Services, Garages, Service Stations & 24/7 Towing in Sri Lanka',
  meta: [
    {
      name: 'description',
      content: 'Directory of verified auto garages, service stations, hybrid battery repair labs, ceramic detailing studios, and 24/7 emergency roadside towing across Sri Lanka.',
    },
  ],
})

const selectedType = ref<string>(route.query.type as string || 'all')
const selectedDistrict = ref<string>('')
const search = ref<string>('')

const { data, pending } = await useFetch('/api/services', {
  query: computed(() => ({
    type: selectedType.value !== 'all' ? selectedType.value : undefined,
    district: selectedDistrict.value || undefined,
    q: search.value.trim() || undefined,
  })),
})

const services = computed<ServiceProvider[]>(() => (data.value as any)?.services || [])

// Booking appointment modal
const showBookingModal = ref(false)
const selectedProvider = ref<ServiceProvider | null>(null)
const bookingService = ref('')
const bookingVehicle = ref('')
const bookingName = ref('')
const bookingPhone = ref('')
const bookingDate = ref('')
const bookingSent = ref(false)

const openBooking = (provider: ServiceProvider) => {
  selectedProvider.value = provider
  bookingService.value = provider.servicesOffered[0]?.name || ''
  showBookingModal.value = true
  bookingSent.value = false
}

const submitBooking = () => {
  if (!bookingName.value || !bookingPhone.value) {
    uiStore.addToast('Please enter your name and phone number', 'warning')
    return
  }
  bookingSent.value = true
  uiStore.addToast('Service appointment request sent successfully!', 'success')
  setTimeout(() => {
    showBookingModal.value = false
  }, 1600)
}
</script>

<template>
  <div class="min-h-screen bg-surface pb-16">
    <!-- Top Emergency Towing SOS Hotline Bar -->
    <div class="bg-primary text-white py-3 px-4 sm:px-6 shadow-md">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        <div class="flex items-center gap-2 font-semibold text-center sm:text-left">
          <span class="w-3 h-3 rounded-full bg-white animate-ping shrink-0" />
          <span>Vehicle Breakdown or Accident on Road? 24/7 Emergency Towing & Roadside Assistance Available Islandwide</span>
        </div>
        <div class="flex items-center gap-3">
          <a
            href="tel:+94779992424"
            class="px-3.5 py-1.5 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
          >
            🚨 24/7 SOS Hotline: 077 999 2424
          </a>
          <NuxtLink to="/services/towing" class="underline hover:text-white/80 font-medium">
            Towing Calculator & Fleets →
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Header Section -->
    <div class="bg-gray-900 text-white py-12 border-b border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="max-w-3xl">
          <div class="flex items-center gap-2 mb-2">
            <span class="w-6 h-0.5 bg-primary" />
            <span class="text-xs uppercase tracking-widest text-primary font-bold">Automotive Care & Assistance</span>
          </div>
          <h1 class="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-3">
            Garages, Service Stations & Roadside Assistance
          </h1>
          <p class="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
            Find certified workshops, periodic lube bays, specialized hybrid battery labs, and 24/7 emergency towing fleets across Sri Lanka.
          </p>

          <!-- Quick Navigation Hub -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <NuxtLink
              to="/services/towing"
              class="p-3.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl transition-all flex items-center gap-3 group"
            >
              <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-lg">
                🚨
              </div>
              <div>
                <div class="text-xs font-bold text-white group-hover:text-amber-300">24/7 Towing Hub</div>
                <div class="text-[11px] text-white/60">Fare & ETA Estimator</div>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/services/garages"
              class="p-3.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl transition-all flex items-center gap-3 group"
            >
              <div class="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-lg">
                🔧
              </div>
              <div>
                <div class="text-xs font-bold text-white group-hover:text-blue-300">Garages & Repairs</div>
                <div class="text-[11px] text-white/60">Hybrid, Engine, Euro</div>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/services/service-stations"
              class="p-3.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl transition-all flex items-center gap-3 group col-span-2 sm:col-span-1"
            >
              <div class="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-lg">
                🧼
              </div>
              <div>
                <div class="text-xs font-bold text-white group-hover:text-emerald-300">Service Stations</div>
                <div class="text-[11px] text-white/60">Lube Bay & Detailing</div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters & Main Listing -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <!-- Category Tabs & Search Bar -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <!-- Type Tabs -->
        <div class="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          <button
            v-for="tab in [
              { id: 'all', label: 'All Services' },
              { id: 'towing', label: '🚨 24/7 Emergency Towing' },
              { id: 'garage', label: '🔧 Garages & Workshops' },
              { id: 'service-station', label: '🧼 Service Stations & Wash' },
            ]"
            :key="tab.id"
            :class="[
              'px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all',
              selectedType === tab.id
                ? 'bg-primary text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-border'
            ]"
            @click="selectedType = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Search & District Filter -->
        <div class="flex items-center gap-3 w-full md:w-auto">
          <input
            v-model="search"
            type="text"
            placeholder="Search provider, city, or service..."
            class="flex-1 md:w-64 bg-white border border-border rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-primary"
          />

          <select
            v-model="selectedDistrict"
            class="bg-white border border-border rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-primary"
          >
            <option value="">All Districts</option>
            <option value="colombo">Colombo</option>
            <option value="gampaha">Gampaha</option>
            <option value="kandy">Kandy</option>
            <option value="galle">Galle</option>
            <option value="kurunegala">Kurunegala</option>
          </select>
        </div>
      </div>

      <!-- Services Grid -->
      <div v-if="services.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in services"
          :key="service.id"
          class="bg-white border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col group"
        >
          <!-- Image Banner -->
          <div class="relative h-48 bg-gray-100 overflow-hidden">
            <img
              :src="service.images[0]"
              :alt="service.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format'"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />

            <!-- Type badge -->
            <div class="absolute top-3 left-3 flex gap-2">
              <span
                class="px-2.5 py-1 text-[10px] font-bold uppercase rounded-lg shadow-sm"
                :class="service.type === 'towing' ? 'bg-primary text-white' : 'bg-gray-900 text-white'"
              >
                {{ service.typeLabel }}
              </span>
              <span v-if="service.is24x7" class="px-2 py-0.5 bg-emerald-500 text-white text-[10px] font-bold rounded-md flex items-center gap-1 animate-pulse">
                ● 24/7 Available
              </span>
            </div>

            <!-- Verified badge -->
            <div v-if="service.verified" class="absolute top-3 right-3 px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded-md">
              ✓ Verified
            </div>

            <!-- Bottom title overlay -->
            <div class="absolute bottom-3 left-3 right-3">
              <h3 class="font-display font-bold text-white text-base leading-tight">
                {{ service.name }}
              </h3>
              <p class="text-white/80 text-xs mt-0.5 flex items-center gap-1">
                📍 {{ service.address }}
              </p>
            </div>
          </div>

          <!-- Body -->
          <div class="p-5 flex-1 flex flex-col space-y-4">
            <!-- Ratings & Operating Hours -->
            <div class="flex items-center justify-between text-xs pb-3 border-b border-border">
              <div class="flex items-center gap-1 text-amber-500 font-bold">
                <span>★</span>
                <span class="text-gray-900">{{ service.rating.toFixed(1) }}</span>
                <span class="text-muted font-normal">({{ service.reviewCount }} reviews)</span>
              </div>

              <span class="text-muted text-[11px]">{{ service.openHours }}</span>
            </div>

            <!-- Specializations -->
            <div>
              <div class="text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">Specialties:</div>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="spec in service.specializations.slice(0, 3)"
                  :key="spec"
                  class="px-2 py-0.5 bg-surface text-gray-700 rounded-md text-[11px] font-medium border border-border"
                >
                  {{ spec }}
                </span>
                <span v-if="service.specializations.length > 3" class="text-[11px] text-muted self-center">
                  +{{ service.specializations.length - 3 }}
                </span>
              </div>
            </div>

            <!-- Highlighted Services Offered -->
            <div class="space-y-1.5">
              <div class="text-[10px] font-bold uppercase tracking-wider text-muted">Services & Rates:</div>
              <div
                v-for="(item, idx) in service.servicesOffered.slice(0, 2)"
                :key="idx"
                class="p-2 bg-surface rounded-xl flex justify-between items-center text-xs"
              >
                <span class="font-medium text-gray-800 truncate">{{ item.name }}</span>
                <span class="font-mono font-bold text-primary text-[11px] shrink-0 ml-2">{{ item.priceEstimate }}</span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="mt-auto pt-3 border-t border-border flex items-center gap-2">
              <a
                :href="`tel:${service.emergencyPhone || service.phone}`"
                class="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
              >
                📞 Call Now
              </a>

              <a
                :href="`https://wa.me/${service.whatsapp.replace(/[^0-9]/g, '')}`"
                target="_blank"
                rel="noopener"
                class="w-9 h-9 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors shrink-0"
                title="WhatsApp Message"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>

              <button
                @click="openBooking(service)"
                class="px-3.5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-semibold transition-colors"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="bg-white border border-border rounded-3xl p-12 text-center max-w-lg mx-auto">
        <div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
          🔧
        </div>
        <h3 class="font-display font-bold text-lg text-gray-900 mb-1">No Service Providers Found</h3>
        <p class="text-muted text-xs mb-5">Try clearing filters or changing your search terms.</p>
        <button
          @click="selectedType = 'all'; selectedDistrict = ''; search = ''"
          class="px-4 py-2 bg-primary text-white text-xs font-semibold rounded-xl"
        >
          Reset Filters
        </button>
      </div>
    </div>

    <!-- Booking Modal -->
    <div
      v-if="showBookingModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
      @click.self="showBookingModal = false"
    >
      <div class="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-border relative">
        <button
          @click="showBookingModal = false"
          class="absolute top-5 right-5 text-gray-400 hover:text-gray-900"
        >
          ✕
        </button>

        <div v-if="bookingSent" class="text-center py-6">
          <div class="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
            ✓
          </div>
          <h3 class="font-display font-bold text-xl text-gray-900 mb-1">Appointment Requested!</h3>
          <p class="text-muted text-xs">
            {{ selectedProvider?.name }} will contact you on {{ bookingPhone }} to confirm your service slot.
          </p>
        </div>

        <div v-else>
          <h3 class="font-display font-bold text-xl text-gray-900 mb-1">Book Service Appointment</h3>
          <p class="text-muted text-xs mb-5">At {{ selectedProvider?.name }}</p>

          <div class="space-y-3.5">
            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1">Select Service</label>
              <select
                v-model="bookingService"
                class="w-full bg-surface border border-border rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-primary"
              >
                <option v-for="(s, idx) in selectedProvider?.servicesOffered" :key="idx" :value="s.name">
                  {{ s.name }} ({{ s.priceEstimate }})
                </option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1">Vehicle Make & Model</label>
              <input
                v-model="bookingVehicle"
                type="text"
                placeholder="e.g. 2018 Toyota Prius (ZVW50)"
                class="w-full bg-surface border border-border rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-primary"
              />
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                <input
                  v-model="bookingName"
                  type="text"
                  placeholder="e.g. Sahan Silva"
                  class="w-full bg-surface border border-border rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                <input
                  v-model="bookingPhone"
                  type="tel"
                  placeholder="+94 77 ..."
                  class="w-full bg-surface border border-border rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1">Preferred Date & Time</label>
              <input
                v-model="bookingDate"
                type="datetime-local"
                class="w-full bg-surface border border-border rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-primary"
              />
            </div>

            <div class="pt-2">
              <AppButton variant="primary" size="lg" full-width @click="submitBooking">
                Confirm Service Booking
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
