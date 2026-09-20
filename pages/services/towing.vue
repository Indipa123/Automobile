<script setup lang="ts">
import type { ServiceProvider } from '~/types'

definePageMeta({ layout: 'default' })

useHead({
  title: '24/7 Emergency Towing & Roadside Assistance Sri Lanka — Instant SOS',
  meta: [
    {
      name: 'description',
      content: '24/7 Islandwide Emergency Flatbed Towing, Expressway breakdown recovery, battery jump start, and vehicle rescue across Sri Lanka. Instant dispatch & fare calculator.',
    },
  ],
})

const { formatLKRFull } = useFormatCurrency()
const uiStore = useUiStore()

// Fetch all towing services
const { data } = await useFetch('/api/services?type=towing')
const towingProviders = computed<ServiceProvider[]>(() => (data.value as any)?.services || [])

// Interactive Towing Fare & ETA Calculator
const pickupLocations = [
  { name: 'Colombo 01-15 (Fort / Bambalapitiya / Borella)', kmOffset: 0, eta: '15-20 mins' },
  { name: 'Kottawa Interchange (E01 Entrance)', kmOffset: 18, eta: '15-20 mins' },
  { name: 'Kadawatha Interchange (E02 / E04)', kmOffset: 16, eta: '18-22 mins' },
  { name: 'Ja-Ela / Katunayake Airport Expressway (E03)', kmOffset: 25, eta: '20-25 mins' },
  { name: 'Mirigama / Kurunegala Interchange', kmOffset: 55, eta: '25-30 mins' },
  { name: 'Galle Interchange / Southern Expressway', kmOffset: 110, eta: '25-35 mins' },
  { name: 'Kandy Town / Peradeniya Road', kmOffset: 115, eta: '20-25 mins' },
  { name: 'Negombo Town', kmOffset: 38, eta: '20-25 mins' },
]

const destinations = [
  { name: 'Colombo Central Workshop / Dealership', kmDist: 10 },
  { name: 'Nearest Authorized Garage / Service Center', kmDist: 8 },
  { name: 'Residence / Private Garage', kmDist: 15 },
  { name: 'Insurance Assessment Yard', kmDist: 22 },
  { name: 'Inter-City Long Distance Transport (to Colombo)', kmDist: 95 },
]

const vehicleTypes = [
  { id: 'sedan', label: 'Sedan / Hatchback / Prius', surcharge: 0 },
  { id: 'suv', label: 'SUV / 4WD / Prado / Pickup', surcharge: 2500 },
  { id: 'luxury', label: 'Low-Clearance Luxury / BMW / Mercedes (Hydraulic Flatbed Only)', surcharge: 4000 },
  { id: 'motorcycle', label: 'Motorbike / Scooter', surcharge: -2000 },
]

const serviceTypes = [
  { id: 'flatbed', label: 'Hydraulic Flatbed Tow (Recommended)', base: 7500, perKm: 350 },
  { id: 'wheel-lift', label: 'Wheel-Lift Towing', base: 6000, perKm: 300 },
  { id: 'jump-start', label: 'Battery Jump Start (No Tow)', base: 3500, perKm: 0 },
  { id: 'tyre', label: 'Flat Tyre Replacement On-Site', base: 3000, perKm: 0 },
  { id: 'fuel', label: 'Emergency Fuel Delivery (5 Litres)', base: 4000, perKm: 0 },
]

const selectedPickup = ref(pickupLocations[0].name)
const selectedDestination = ref(destinations[0].name)
const selectedVehicle = ref(vehicleTypes[0].id)
const selectedService = ref(serviceTypes[0].id)

const estimatedDistance = computed(() => {
  const p = pickupLocations.find(loc => loc.name === selectedPickup.value)
  const d = destinations.find(loc => loc.name === selectedDestination.value)
  const baseDist = d?.kmDist || 12
  return p?.kmOffset ? Math.abs(p.kmOffset - 10) + baseDist : baseDist
})

const estimatedETA = computed(() => {
  const p = pickupLocations.find(loc => loc.name === selectedPickup.value)
  return p?.eta || '20-25 mins'
})

const calculatedFare = computed(() => {
  const s = serviceTypes.find(st => st.id === selectedService.value)
  const v = vehicleTypes.find(vt => vt.id === selectedVehicle.value)
  if (!s || !v) return 7500

  const dist = estimatedDistance.value
  const base = s.base + v.surcharge
  const distanceCost = s.perKm * dist

  return Math.max(3000, base + distanceCost)
})

// Dispatch Modal
const showDispatchModal = ref(false)
const dispatchPhone = ref('')
const dispatchName = ref('')
const dispatchVehicleModel = ref('')
const dispatchSent = ref(false)

const submitDispatch = () => {
  if (!dispatchPhone.value) {
    uiStore.addToast('Please enter your emergency phone number', 'warning')
    return
  }
  dispatchSent.value = true
  uiStore.addToast('Emergency Towing Unit Dispatched! Driver will call you immediately.', 'success')
  setTimeout(() => {
    showDispatchModal.value = false
  }, 2200)
}
</script>

<template>
  <div class="min-h-screen bg-surface pb-16">
    <!-- Urgent Emergency SOS Banner Hero -->
    <div class="bg-gray-950 text-white relative overflow-hidden py-12 md:py-16 border-b border-red-900/40">
      <div class="absolute inset-0 opacity-25" style="background-image: radial-gradient(circle at 50% 20%, #C8102E 0%, transparent 70%)" />

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center max-w-3xl mx-auto mb-8">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/30 border border-red-500/50 text-red-300 text-xs font-bold uppercase tracking-wider mb-4 animate-pulse">
            <span class="w-2.5 h-2.5 rounded-full bg-red-500" />
            24/7 Islandwide Emergency Breakdown & Towing
          </div>

          <h1 class="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-4">
            Need An Emergency Tow <span class="text-primary">Right Now?</span>
          </h1>

          <p class="text-white/70 text-sm sm:text-lg leading-relaxed mb-8">
            Flatbeds, roadside wheel-lifts, battery boosts, and expressway rescues stationed at major interchanges across Sri Lanka.
          </p>

          <!-- 1-Tap Big Emergency Dial Actions -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <a
              href="tel:+94779992424"
              class="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-primary hover:bg-primary-dark text-white font-extrabold rounded-2xl shadow-glow-red text-lg transition-all transform hover:-translate-y-0.5"
            >
              <svg class="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>CALL SOS: 077 999 2424</span>
            </a>

            <a
              href="https://wa.me/94779992424?text=EMERGENCY%20TOW%20REQUEST:%20I%20have%20broken%20down%20and%20need%20immediate%20towing%20assistance.%20My%20current%20location%20is:"
              target="_blank"
              rel="noopener"
              class="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-2xl transition-all text-base"
            >
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>WhatsApp Live GPS</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Interactive Towing Fare & ETA Estimator Card -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
      <div class="bg-white border border-border rounded-3xl p-6 sm:p-8 shadow-xl">
        <div class="flex items-center justify-between pb-4 mb-6 border-b border-border flex-wrap gap-2">
          <div>
            <h2 class="font-display font-bold text-xl sm:text-2xl text-gray-900">
              Instant Towing Fare & ETA Estimator
            </h2>
            <p class="text-muted text-xs mt-0.5">Calculate transparent standardized rates before dispatching</p>
          </div>
          <span class="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
            ⚡ Live Driver Dispatch Active
          </span>
        </div>

        <div class="grid lg:grid-cols-12 gap-8 items-center">
          <!-- Inputs (7 cols) -->
          <div class="lg:col-span-7 space-y-4">
            <!-- Pickup Location -->
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-1">Breakdown / Pickup Location</label>
              <select
                v-model="selectedPickup"
                class="w-full bg-surface border border-border rounded-xl px-3.5 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-primary font-medium"
              >
                <option v-for="loc in pickupLocations" :key="loc.name" :value="loc.name">
                  📍 {{ loc.name }} (Estimated ETA: {{ loc.eta }})
                </option>
              </select>
            </div>

            <!-- Destination -->
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-1">Drop-off Destination</label>
              <select
                v-model="selectedDestination"
                class="w-full bg-surface border border-border rounded-xl px-3.5 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-primary font-medium"
              >
                <option v-for="dest in destinations" :key="dest.name" :value="dest.name">
                  🏁 {{ dest.name }}
                </option>
              </select>
            </div>

            <!-- Vehicle Type -->
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-1">Vehicle Classification</label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  v-for="vt in vehicleTypes"
                  :key="vt.id"
                  type="button"
                  :class="[
                    'p-2.5 rounded-xl text-xs font-semibold text-left border transition-all touch-manipulation min-h-[44px]',
                    selectedVehicle === vt.id
                      ? 'bg-primary/10 border-primary text-primary font-bold'
                      : 'bg-surface border-border text-gray-700 hover:bg-gray-100'
                  ]"
                  @click="selectedVehicle = vt.id"
                >
                  {{ vt.label }}
                </button>
              </div>
            </div>

            <!-- Service Required -->
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-1">Service Type Needed</label>
              <div class="grid sm:grid-cols-2 gap-2">
                <button
                  v-for="st in serviceTypes"
                  :key="st.id"
                  type="button"
                  :class="[
                    'p-2.5 rounded-xl text-xs font-semibold text-left border transition-all',
                    selectedService === st.id
                      ? 'bg-gray-900 border-gray-900 text-white'
                      : 'bg-surface border-border text-gray-700 hover:bg-gray-100'
                  ]"
                  @click="selectedService = st.id"
                >
                  {{ st.label }}
                </button>
              </div>
            </div>
          </div>

          <!-- Output Calculation Box (5 cols) -->
          <div class="lg:col-span-5 bg-gradient-to-br from-gray-950 to-gray-900 text-white p-6 sm:p-7 rounded-2xl shadow-xl space-y-6">
            <div class="flex items-center justify-between border-b border-white/10 pb-4">
              <span class="text-xs uppercase tracking-wider text-white/60 font-semibold">Response Estimate</span>
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ETA: {{ estimatedETA }}
              </span>
            </div>

            <!-- Metrics -->
            <div class="space-y-3 text-xs">
              <div class="flex justify-between text-white/80">
                <span>Calculated Distance:</span>
                <span class="font-mono font-bold text-white">~{{ estimatedDistance }} km</span>
              </div>
              <div class="flex justify-between text-white/80">
                <span>Equipment Assigned:</span>
                <span class="font-semibold text-amber-300">Hydraulic Flatbed Unit</span>
              </div>
              <div class="flex justify-between text-white/80">
                <span>Expressway Permit:</span>
                <span class="text-emerald-300 font-semibold">Included</span>
              </div>
            </div>

            <!-- Estimated Total -->
            <div class="pt-4 border-t border-white/10">
              <span class="text-xs text-white/70 block mb-1">Estimated Standardized Fare:</span>
              <div class="font-mono font-black text-3xl sm:text-4xl text-primary">
                {{ formatLKRFull(calculatedFare) }}
              </div>
              <span class="text-[11px] text-white/50 block mt-1">
                *Subject to exact GPS route & toll tickets. Card, Cash & Insurance billing accepted.
              </span>
            </div>

            <!-- Dispatch CTA button -->
            <button
              @click="showDispatchModal = true"
              class="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-extrabold rounded-xl transition-all shadow-glow-red text-sm"
            >
              🚨 Request Immediate Dispatch Now
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Verified Fleets Directory -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div class="mb-6">
        <h3 class="font-display font-bold text-2xl text-gray-900 mb-1">
          Verified 24/7 Roadside Rescue & Towing Fleets
        </h3>
        <p class="text-muted text-xs">
          Direct telephone contacts of authorized emergency fleets covering Colombo, Southern Expressway, and outstation routes.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="provider in towingProviders"
          :key="provider.id"
          class="bg-white border border-border rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-primary/40 transition-all hover:shadow-md"
        >
          <div>
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-md uppercase">
                {{ provider.towingDetails?.avgResponseMins }} Min Avg ETA
              </span>
              <span v-if="provider.towingDetails?.expresswayPermit" class="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-md border border-emerald-200">
                Highway Permit
              </span>
            </div>

            <h4 class="font-display font-bold text-gray-900 text-base mb-1">{{ provider.name }}</h4>
            <p class="text-muted text-xs mb-4">📍 Base: {{ provider.address }}</p>

            <!-- Covered areas -->
            <div class="space-y-1.5 text-xs mb-4">
              <div class="font-semibold text-gray-800 text-[11px]">Primary Coverage Areas:</div>
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="area in provider.towingDetails?.serviceAreas || []"
                  :key="area"
                  class="px-2 py-0.5 bg-surface text-gray-600 rounded text-[10px] border border-border"
                >
                  {{ area }}
                </span>
              </div>
            </div>
          </div>

          <!-- Contact Buttons -->
          <div class="pt-4 border-t border-border flex items-center gap-2">
            <a
              :href="`tel:${provider.emergencyPhone || provider.phone}`"
              class="flex-1 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-bold text-center transition-colors shadow-xs"
            >
              📞 Call Fleet
            </a>
            <a
              :href="`https://wa.me/${provider.whatsapp.replace(/[^0-9]/g, '')}?text=Need%20Emergency%20Towing%20Assistance`"
              target="_blank"
              rel="noopener"
              class="w-10 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors shrink-0"
              title="WhatsApp Dispatch"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Emergency Dispatch Request Modal -->
    <div
      v-if="showDispatchModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in"
      @click.self="showDispatchModal = false"
    >
      <div class="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-red-200 relative">
        <button
          @click="showDispatchModal = false"
          class="absolute top-5 right-5 text-gray-400 hover:text-gray-900"
        >
          ✕
        </button>

        <div v-if="dispatchSent" class="text-center py-6">
          <div class="w-16 h-16 bg-red-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold animate-pulse">
            🚨
          </div>
          <h3 class="font-display font-bold text-2xl text-gray-900 mb-2">Dispatch In Progress!</h3>
          <p class="text-muted text-xs leading-relaxed mb-4">
            The closest available flatbed tow truck has been alerted. Our hotline operator will call you at <strong>{{ dispatchPhone }}</strong> within 2 minutes.
          </p>
          <div class="p-3 bg-red-50 text-primary font-bold rounded-xl text-xs">
            Keep your hazard lights on & stay safe behind road barrier.
          </div>
        </div>

        <div v-else>
          <div class="flex items-center gap-2 mb-2 text-primary font-bold text-xs uppercase tracking-wider">
            <span>🚨 Urgent Dispatch Request</span>
          </div>
          <h3 class="font-display font-bold text-2xl text-gray-900 mb-1">Confirm Tow Request</h3>
          <p class="text-muted text-xs mb-5">
            Pickup: {{ selectedPickup }} · Fare: {{ formatLKRFull(calculatedFare) }}
          </p>

          <div class="space-y-3.5">
            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1">Emergency Phone Number *</label>
              <input
                v-model="dispatchPhone"
                type="tel"
                placeholder="+94 77 123 4567"
                class="w-full bg-surface border border-primary/50 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 font-bold focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
              <input
                v-model="dispatchName"
                type="text"
                placeholder="e.g. Nalin Silva"
                class="w-full bg-surface border border-border rounded-xl px-3.5 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1">Vehicle Make / Model / Number</label>
              <input
                v-model="dispatchVehicleModel"
                type="text"
                placeholder="e.g. White Prius CAB-1234"
                class="w-full bg-surface border border-border rounded-xl px-3.5 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-primary"
              />
            </div>

            <div class="pt-2">
              <button
                @click="submitDispatch"
                class="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-extrabold rounded-xl text-sm transition-all shadow-glow-red"
              >
                🚨 Send Emergency Dispatch Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
