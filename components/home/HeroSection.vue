<script setup lang="ts">
const router = useRouter()

const activeTab = ref<'buy' | 'sell' | 'research'>('buy')
const selectedMake = ref<string | null>(null)
const selectedBody = ref<string | null>(null)
const selectedCondition = ref<'new' | 'used' | 'all'>('all')

const makes = ['Toyota', 'Honda', 'Suzuki', 'Nissan', 'Mitsubishi', 'BMW', 'Mercedes-Benz', 'Hyundai', 'Kia', 'Audi', 'Ford', 'Isuzu']
const bodyTypes = ['Sedan', 'SUV', 'Hatchback', 'Pickup', 'Van', 'Electric']

const makeOptions = computed(() => makes.map(m => ({ value: m, label: m })))
const bodyOptions = computed(() => bodyTypes.map(b => ({ value: b.toLowerCase(), label: b })))

const handleSearch = () => {
  const query: Record<string, string> = {}
  if (selectedMake.value) query.make = selectedMake.value
  if (selectedBody.value) query.bodyType = selectedBody.value
  if (selectedCondition.value !== 'all') query.condition = selectedCondition.value
  router.push({ path: '/cars', query })
}

const stats = [
  { value: '45,000+', label: 'Listings' },
  { value: '1,200+', label: 'Dealers' },
  { value: '500+', label: 'Expert Reviews' },
  { value: '#1', label: 'in Sri Lanka' },
]
</script>

<template>
  <section class="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-slate-100">
    <!-- Subtle decorative background -->
    <div class="absolute inset-0 opacity-40" style="background-image: radial-gradient(ellipse at 70% 50%, #C8102E18 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, #F5A62312 0%, transparent 50%)" />

    <!-- Decorative car silhouette -->
    <div class="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent z-10" />
      <div class="w-full h-full flex items-center justify-center opacity-15">
        <svg viewBox="0 0 600 300" class="w-full h-auto" fill="none">
          <path d="M80 200 C100 200 150 180 200 160 L280 140 L350 140 C380 140 420 150 460 170 L520 200 Z" fill="#C8102E" opacity="0.4"/>
          <ellipse cx="160" cy="205" rx="40" ry="15" fill="#94A3B8"/>
          <ellipse cx="420" cy="205" rx="40" ry="15" fill="#94A3B8"/>
        </svg>
      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-20 md:py-28">
      <div class="max-w-3xl">
        <!-- Eyebrow -->
        <div class="flex items-center gap-2 mb-6">
          <span class="w-8 h-px bg-primary" />
          <span class="text-primary text-xs font-semibold tracking-widest uppercase">Sri Lanka's #1 Marketplace</span>
        </div>

        <!-- Headline -->
        <h1 class="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-[1.05] mb-6">
          Find Your
          <span class="text-primary">Perfect</span>
          <br />Car Today
        </h1>

        <p class="text-gray-500 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
          Buy, sell & research cars with confidence. Access 45,000+ listings from trusted dealers across Sri Lanka.
        </p>

        <!-- Search Card -->
        <div class="bg-white border border-border rounded-2xl p-5 shadow-lg max-w-2xl">
          <!-- Tabs -->
          <div class="flex gap-1 mb-5 bg-gray-100 rounded-xl p-1">
            <button
              v-for="tab in [{ id: 'buy', label: 'Buy a Car' }, { id: 'sell', label: 'Sell My Car' }, { id: 'research', label: 'Research' }]"
              :key="tab.id"
              :class="[
                'flex-1 py-2 text-sm font-medium rounded-lg transition-all',
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:text-gray-900'
              ]"
              @click="activeTab = tab.id as any"
            >
              {{ tab.label }}
            </button>
          </div>

          <!-- Buy Tab -->
          <template v-if="activeTab === 'buy'">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <AppDropdown
                v-model="selectedMake"
                :options="makeOptions"
                label="Make"
                placeholder="Any Make"
                searchable
              />
              <AppDropdown
                v-model="selectedBody"
                :options="bodyOptions"
                label="Body Type"
                placeholder="Any Type"
              />
              <div>
                <label class="block text-xs text-muted mb-1">Condition</label>
                <div class="flex gap-1.5">
                  <button
                    v-for="c in ['all', 'new', 'used']"
                    :key="c"
                    :class="[
                      'flex-1 py-2.5 text-xs rounded-lg border transition-colors capitalize',
                      selectedCondition === c
                        ? 'bg-primary border-primary text-white'
                        : 'border-border text-muted hover:text-gray-900 bg-white'
                    ]"
                    @click="selectedCondition = c as any"
                  >
                    {{ c === 'all' ? 'All' : c.charAt(0).toUpperCase() + c.slice(1) }}
                  </button>
                </div>
              </div>
            </div>
            <AppButton variant="primary" size="lg" full-width @click="handleSearch">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search Cars
            </AppButton>
          </template>

          <!-- Sell Tab -->
          <template v-else-if="activeTab === 'sell'">
            <div class="text-center py-4">
              <p class="text-gray-500 text-sm mb-4">List your car for free and reach thousands of buyers</p>
              <NuxtLink to="/sell/post-ad">
                <AppButton variant="primary" size="lg">
                  + Post Free Ad
                </AppButton>
              </NuxtLink>
            </div>
          </template>

          <!-- Research Tab -->
          <template v-else>
            <div class="grid grid-cols-2 gap-2">
              <NuxtLink
                v-for="link in [
                  { label: '🔥 New Car Reviews', href: '/reviews?sort=newest' },
                  { label: '⚡ EV Buying Guide', href: '/ev-guide' },
                  { label: '🏆 Best Cars 2024', href: '/awards' },
                  { label: '💰 Under Rs. 2M', href: '/cars?priceMax=2000000' },
                ]"
                :key="link.href"
                :to="link.href"
                class="px-3 py-2.5 bg-gray-50 border border-border hover:border-primary/50 rounded-xl text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </div>
          </template>
        </div>

        <!-- Stats -->
        <div class="flex flex-wrap items-center gap-6 mt-8">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="flex items-center gap-2"
          >
            <span class="font-mono font-bold text-gray-900 text-lg">{{ stat.value }}</span>
            <span class="text-muted text-sm">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
      <svg class="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>
