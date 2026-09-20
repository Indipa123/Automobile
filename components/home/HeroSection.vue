<script setup lang="ts">
const router = useRouter()

// 5-in-1 Ecosystem Search Tabs
const activeTab = ref<'vehicles' | 'parts' | 'services' | 'towing' | 'finance'>('vehicles')

// Vehicle Search State
const selectedMake = ref<string>('')
const selectedBody = ref<string>('')
const selectedCondition = ref<'all' | 'new' | 'used'>('all')

const makes = ['Toyota', 'Honda', 'Suzuki', 'Nissan', 'Mitsubishi', 'BMW', 'Mercedes-Benz', 'Hyundai', 'Kia', 'Isuzu']
const bodyTypes = ['Sedan', 'SUV', 'Hatchback', 'Pickup', 'Van', 'Electric']

const handleVehicleSearch = () => {
  const query: Record<string, string> = {}
  if (selectedMake.value) query.make = selectedMake.value
  if (selectedBody.value) query.bodyType = selectedBody.value.toLowerCase()
  if (selectedCondition.value !== 'all') query.condition = selectedCondition.value
  router.push({ path: '/cars', query })
}

// Parts by Chassis Search State
const partsChassisInput = ref('')
const partsCategory = ref('all')
const popularChassisTags = ['ZVW50', 'ZVW30', 'RU3', 'GP5', 'NZE141', 'HA36S', 'W205']

const handlePartsSearch = () => {
  const query: Record<string, string> = {}
  if (partsChassisInput.value.trim()) query.chassis = partsChassisInput.value.trim()
  if (partsCategory.value !== 'all') query.category = partsCategory.value
  router.push({ path: '/parts', query })
}

// Services Search State
const serviceType = ref('all')
const serviceDistrict = ref('')

const handleServiceSearch = () => {
  const query: Record<string, string> = {}
  if (serviceType.value !== 'all') query.type = serviceType.value
  if (serviceDistrict.value) query.district = serviceDistrict.value
  router.push({ path: '/services', query })
}

// Quick interactive showcase cars
const showcaseCars = [
  {
    id: 'c1',
    name: '2023 Toyota Prius 2.0L Hybrid',
    badge: 'Prima Auto Lanka Store',
    dealerId: 'd1',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=450&fit=crop&auto=format',
    chassis: 'ZVW50 / 60 Series',
    fuelEconomy: '26 km/L',
    zeroHundred: '7.2s',
    mode: 'Hybrid e-Four',
    price: 'Rs. 8,500,000',
  },
  {
    id: 'c2',
    name: '2023 Honda Vezel e:HEV Z',
    badge: 'Millennium Motors Store',
    dealerId: 'd2',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=450&fit=crop&auto=format',
    chassis: 'RV5 / RU3',
    fuelEconomy: '22 km/L',
    zeroHundred: '8.1s',
    mode: 'Honda Sensing',
    price: 'Rs. 12,800,000',
  },
  {
    id: 'c3',
    name: '2021 BMW 3 Series 320i M Sport',
    badge: 'Luxury Auto Gallery Store',
    dealerId: 'd3',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=450&fit=crop&auto=format',
    chassis: 'G20 / F30',
    fuelEconomy: '14 km/L',
    zeroHundred: '5.8s',
    mode: 'TwinPower Turbo',
    price: 'Rs. 22,000,000',
  },
  {
    id: 'c4',
    name: '2023 Kia EV6 Wind AWD',
    badge: 'EV Lanka Motors Store',
    dealerId: 'd6',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=450&fit=crop&auto=format',
    chassis: 'CV Electric Platform',
    fuelEconomy: '515 km Range',
    zeroHundred: '4.6s',
    mode: '800V Ultra Fast',
    price: 'Rs. 29,500,000',
  },
]

const activeCarIndex = ref(0)
const currentCar = computed(() => showcaseCars[activeCarIndex.value])

// Auto rotate showcase cars every 5 seconds
let autoInterval: any = null
onMounted(() => {
  autoInterval = setInterval(() => {
    activeCarIndex.value = (activeCarIndex.value + 1) % showcaseCars.length
  }, 5500)
})

onUnmounted(() => {
  if (autoInterval) clearInterval(autoInterval)
})

const stats = [
  { value: '45,000+', label: 'Vehicles Listed', icon: '🚗' },
  { value: '1,200+', label: 'Dealer Stores', icon: '🏬' },
  { value: '80,000+', label: 'Chassis Parts', icon: '⚙️' },
  { value: '24/7', label: 'Roadside Towing', icon: '🚨' },
]
</script>

<template>
  <section class="relative min-h-[92vh] flex items-center overflow-hidden bg-gray-950 text-white">
    <!-- Animated Luxury Ambient Lighting Background -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -top-48 -left-48 w-96 h-96 bg-primary/25 rounded-full blur-3xl animate-pulse" />
      <div class="absolute top-1/3 -right-48 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse" style="animation-duration: 4s;" />
      <div class="absolute -bottom-48 left-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse" style="animation-duration: 6s;" />
      <!-- Subtle Carbon Grid Pattern Overlay -->
      <div
        class="absolute inset-0 opacity-15"
        style="background-size: 40px 40px; background-image: linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px);"
      />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 md:py-24">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <!-- Left Side: Headline & 5-in-1 Universal Search (7 cols) -->
        <div class="lg:col-span-7">
          <!-- Animated Status Pill -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white/90 backdrop-blur-md mb-6 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span>Sri Lanka's 360° All-in-One Automobile Ecosystem</span>
          </div>

          <!-- Main Headline -->
          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-4">
            Everything
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-amber-400">
              Automobile
            </span>
            <br />
            In One Platform.
          </h1>

          <p class="text-white/70 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
            Buy & sell vehicles, visit verified dealer virtual stores, find spare parts filtered by your exact <strong class="text-white">Chassis Number</strong>, book certified garages, and request <strong class="text-amber-300">24/7 emergency roadside towing</strong>.
          </p>

          <!-- Universal 5-in-1 Search Card -->
          <div class="bg-gray-900/90 border border-white/15 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
            <!-- Tabs Header -->
            <div class="flex items-center gap-1 overflow-x-auto pb-3 mb-5 border-b border-white/10">
              <button
                v-for="t in [
                  { id: 'vehicles', label: '🚗 Buy Vehicles' },
                  { id: 'parts', label: '⚙️ Chassis Parts' },
                  { id: 'services', label: '🔧 Garages & Care' },
                  { id: 'towing', label: '🚨 24/7 Towing SOS' },
                  { id: 'finance', label: '🏦 Finance & Loans' },
                ]"
                :key="t.id"
                :class="[
                  'px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5',
                  activeTab === t.id
                    ? 'bg-primary text-white shadow-glow-red'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                ]"
                @click="activeTab = t.id as any"
              >
                {{ t.label }}
              </button>
            </div>

            <!-- TAB 1: VEHICLES -->
            <div v-if="activeTab === 'vehicles'" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label class="block text-[11px] font-semibold text-white/70 mb-1">Make / Brand</label>
                  <select
                    v-model="selectedMake"
                    class="w-full bg-gray-950 text-white border border-white/15 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-primary"
                  >
                    <option value="">Any Make</option>
                    <option v-for="m in makes" :key="m" :value="m">{{ m }}</option>
                  </select>
                </div>

                <div>
                  <label class="block text-[11px] font-semibold text-white/70 mb-1">Body Type</label>
                  <select
                    v-model="selectedBody"
                    class="w-full bg-gray-950 text-white border border-white/15 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-primary"
                  >
                    <option value="">Any Body Style</option>
                    <option v-for="b in bodyTypes" :key="b" :value="b">{{ b }}</option>
                  </select>
                </div>

                <div>
                  <label class="block text-[11px] font-semibold text-white/70 mb-1">Condition</label>
                  <div class="grid grid-cols-3 gap-1">
                    <button
                      v-for="c in ['all', 'new', 'used']"
                      :key="c"
                      type="button"
                      :class="[
                        'py-2 text-xs rounded-xl font-semibold capitalize border transition-all',
                        selectedCondition === c
                          ? 'bg-primary border-primary text-white'
                          : 'bg-gray-950 border-white/15 text-white/60 hover:text-white'
                      ]"
                      @click="selectedCondition = c as any"
                    >
                      {{ c }}
                    </button>
                  </div>
                </div>
              </div>

              <button
                @click="handleVehicleSearch"
                class="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-extrabold rounded-2xl transition-all shadow-glow-red text-sm flex items-center justify-center gap-2"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search 45,000+ Vehicles
              </button>
            </div>

            <!-- TAB 2: PARTS BY CHASSIS NUMBER -->
            <div v-else-if="activeTab === 'parts'" class="space-y-4">
              <div class="p-3 bg-amber-400/10 border border-amber-400/30 rounded-2xl text-xs text-amber-200 flex items-center gap-2">
                <span class="text-base">⚙️</span>
                <span>Type your chassis number to guarantee 100% replacement part fitment</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-[11px] font-semibold text-amber-300 mb-1 font-mono uppercase">
                    Vehicle Chassis Code / VIN *
                  </label>
                  <input
                    v-model="partsChassisInput"
                    type="text"
                    placeholder="e.g. ZVW50, NZE141, GP5, W205..."
                    @keyup.enter="handlePartsSearch"
                    class="w-full bg-gray-950 text-white placeholder-white/40 border border-amber-400/50 rounded-xl px-3.5 py-2.5 text-xs font-mono tracking-wider focus:outline-none focus:border-amber-400 uppercase"
                  />
                </div>

                <div>
                  <label class="block text-[11px] font-semibold text-white/70 mb-1">Part Category</label>
                  <select
                    v-model="partsCategory"
                    class="w-full bg-gray-950 text-white border border-white/15 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-primary"
                  >
                    <option value="all">All Part Categories</option>
                    <option value="engine">Engine & Drivetrain</option>
                    <option value="suspension-brakes">Brakes & Suspension</option>
                    <option value="lubricants-fluids">Lubricants & Engine Oils</option>
                    <option value="batteries">Batteries & Hybrid Cells</option>
                    <option value="accessories">Car Tech & Accessories</option>
                  </select>
                </div>
              </div>

              <!-- Quick Chassis Pills -->
              <div class="flex items-center gap-1.5 flex-wrap text-xs">
                <span class="text-white/60 text-[11px]">Popular Chassis:</span>
                <button
                  v-for="code in popularChassisTags"
                  :key="code"
                  @click="partsChassisInput = code; handlePartsSearch()"
                  class="px-2 py-0.5 bg-white/10 hover:bg-amber-400 hover:text-gray-950 text-white rounded text-[11px] font-mono transition-colors"
                >
                  {{ code }}
                </button>
              </div>

              <button
                @click="handlePartsSearch"
                class="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-gray-950 font-black rounded-2xl transition-all shadow-glow-accent text-sm flex items-center justify-center gap-2"
              >
                Find Guaranteed Compatible Parts →
              </button>
            </div>

            <!-- TAB 3: SERVICES & GARAGES -->
            <div v-else-if="activeTab === 'services'" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-[11px] font-semibold text-white/70 mb-1">Service Required</label>
                  <select
                    v-model="serviceType"
                    class="w-full bg-gray-950 text-white border border-white/15 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-primary"
                  >
                    <option value="all">All Services</option>
                    <option value="garage">Mechanical Repair & Battery Labs</option>
                    <option value="service-station">Lube Bay & Car Wash</option>
                    <option value="towing">24/7 Roadside Towing</option>
                  </select>
                </div>

                <div>
                  <label class="block text-[11px] font-semibold text-white/70 mb-1">District / City</label>
                  <select
                    v-model="serviceDistrict"
                    class="w-full bg-gray-950 text-white border border-white/15 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-primary"
                  >
                    <option value="">Islandwide Sri Lanka</option>
                    <option value="colombo">Colombo</option>
                    <option value="gampaha">Gampaha</option>
                    <option value="kandy">Kandy</option>
                    <option value="galle">Galle</option>
                  </select>
                </div>
              </div>

              <button
                @click="handleServiceSearch"
                class="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-2xl transition-all text-sm flex items-center justify-center gap-2"
              >
                Browse Certified Auto Garages & Stations →
              </button>
            </div>

            <!-- TAB 4: 24/7 TOWING SOS -->
            <div v-else-if="activeTab === 'towing'" class="space-y-4">
              <div class="p-4 bg-red-600/20 border border-red-500/40 rounded-2xl">
                <div class="flex items-center gap-2 text-red-300 font-bold text-xs uppercase mb-1">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  <span>Immediate Emergency Roadside Dispatch</span>
                </div>
                <p class="text-white/80 text-xs">
                  Accident, dead battery, or mechanical breakdown? Our hydraulic flatbed fleet responds in under 20 minutes across Colombo and Expressways.
                </p>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:+94779992424"
                  class="py-3.5 bg-primary hover:bg-primary-dark text-white font-extrabold rounded-xl text-center text-sm shadow-glow-red flex items-center justify-center gap-2"
                >
                  📞 Direct Call 077 999 2424
                </a>
                <NuxtLink
                  to="/services/towing"
                  class="py-3.5 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl text-center text-sm border border-white/20 flex items-center justify-center gap-2"
                >
                  Towing Cost & ETA Calculator →
                </NuxtLink>
              </div>
            </div>

            <!-- TAB 5: FINANCE & INSURANCE -->
            <div v-else-if="activeTab === 'finance'" class="space-y-4">
              <div class="p-3.5 bg-emerald-500/15 border border-emerald-400/30 rounded-2xl text-xs text-emerald-200">
                Compare bank leasing rates (Commercial Bank, Sampath, HNB) & get instant auto insurance quotes.
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <NuxtLink
                  to="/finance/loan-calculator"
                  class="p-4 bg-gray-950 border border-white/10 rounded-2xl hover:border-primary/40 transition-all text-center"
                >
                  <div class="text-xl mb-1">📊</div>
                  <div class="font-bold text-white text-xs">Auto Loan EMI Calculator</div>
                  <div class="text-[11px] text-white/50 mt-0.5">Calculate monthly repayment</div>
                </NuxtLink>

                <NuxtLink
                  to="/finance/insurance"
                  class="p-4 bg-gray-950 border border-white/10 rounded-2xl hover:border-primary/40 transition-all text-center"
                >
                  <div class="text-xl mb-1">🛡️</div>
                  <div class="font-bold text-white text-xs">Vehicle Insurance Quotes</div>
                  <div class="text-[11px] text-white/50 mt-0.5">Ceylinco, SLIC, Allianz quotes</div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Live Ecosystem Stats -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="flex flex-col"
            >
              <div class="flex items-center gap-1.5 text-lg font-mono font-black text-white">
                <span>{{ stat.icon }}</span>
                <span>{{ stat.value }}</span>
              </div>
              <span class="text-xs text-white/60 mt-0.5">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <!-- Right Side: Animated Luxury Vehicle Showcase Card (5 cols) -->
        <div class="lg:col-span-5 relative">
          <!-- Ambient Glow under vehicle card -->
          <div class="absolute -inset-1 bg-gradient-to-r from-primary to-amber-500 rounded-3xl blur-xl opacity-30 animate-pulse" />

          <div class="relative bg-gray-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-5 backdrop-blur-md">
            <!-- Showcase Header -->
            <div class="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <NuxtLink :to="`/dealers/${currentCar.dealerId}`" class="text-white/90 hover:text-primary font-semibold flex items-center gap-1">
                  🏬 {{ currentCar.badge }} →
                </NuxtLink>
              </div>
              <span class="font-mono font-bold text-primary">{{ currentCar.price }}</span>
            </div>

            <!-- Dynamic Image Showcase -->
            <div class="relative h-56 sm:h-64 my-3 rounded-2xl overflow-hidden bg-gray-950">
              <Transition name="fade" mode="out-in">
                <img
                  :key="currentCar.id"
                  :src="currentCar.image"
                  :alt="currentCar.name"
                  class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  @error="(e: any) => e.target.src = 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=450&fit=crop&auto=format'"
                />
              </Transition>

              <!-- Telemetry Overlay Badge -->
              <div class="absolute top-3 left-3 px-3 py-1 bg-black/75 backdrop-blur-md text-white text-[11px] font-mono rounded-lg border border-white/20">
                Chassis: {{ currentCar.chassis }}
              </div>
              <div class="absolute bottom-3 right-3 px-3 py-1 bg-primary text-white text-xs font-bold rounded-lg shadow-sm">
                {{ currentCar.mode }}
              </div>
            </div>

            <!-- Car Title & Live Specs Grid -->
            <div>
              <h3 class="font-display font-bold text-white text-lg leading-tight mb-3">
                {{ currentCar.name }}
              </h3>

              <div class="grid grid-cols-3 gap-2 text-center text-xs">
                <div class="p-2 bg-white/5 border border-white/10 rounded-xl">
                  <div class="text-[10px] text-white/50 uppercase">Efficiency</div>
                  <div class="font-mono font-bold text-emerald-400 text-xs mt-0.5">{{ currentCar.fuelEconomy }}</div>
                </div>
                <div class="p-2 bg-white/5 border border-white/10 rounded-xl">
                  <div class="text-[10px] text-white/50 uppercase">0-100 km/h</div>
                  <div class="font-mono font-bold text-amber-300 text-xs mt-0.5">{{ currentCar.zeroHundred }}</div>
                </div>
                <div class="p-2 bg-white/5 border border-white/10 rounded-xl">
                  <div class="text-[10px] text-white/50 uppercase">Showroom</div>
                  <div class="font-semibold text-white text-[11px] mt-0.5 truncate">Verified Stock</div>
                </div>
              </div>

              <!-- Action button to view Dealer Store -->
              <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <NuxtLink :to="`/dealers/${currentCar.dealerId}`" class="flex-1">
                  <AppButton variant="primary" size="sm" full-width class="font-bold text-xs">
                    View Dealer Store & All Stock →
                  </AppButton>
                </NuxtLink>

                <!-- Selector Dots -->
                <div class="flex items-center gap-1.5 shrink-0">
                  <button
                    v-for="(_, idx) in showcaseCars"
                    :key="idx"
                    :class="[
                      'w-2.5 h-2.5 rounded-full transition-all',
                      activeCarIndex === idx ? 'bg-primary w-6' : 'bg-white/30 hover:bg-white/60'
                    ]"
                    @click="activeCarIndex = idx"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
