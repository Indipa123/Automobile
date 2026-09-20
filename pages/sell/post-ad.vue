<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Post Your Car Ad — Automobile.lk' })

const currentStep = ref(1)
const totalSteps = 5
const uiStore = useUiStore()
const router = useRouter()

const form = reactive({
  // Step 1: Vehicle info
  make: '', model: '', year: new Date().getFullYear(), variant: '', bodyType: '', condition: 'used',
  // Step 2: Specs
  engineCC: '', fuelType: '', transmission: '', mileage: '', color: '', seats: 5,
  // Step 3: Photos (file list)
  photos: [] as File[],
  photoPreviewUrls: [] as string[],
  // Step 4: Pricing
  price: '', negotiable: false, description: '',
  // Step 5: Contact
  name: '', phone: '', whatsapp: '', location: '', province: '',
})

const makes = ['Toyota', 'Honda', 'Suzuki', 'Nissan', 'Mitsubishi', 'BMW', 'Mercedes-Benz', 'Hyundai', 'Kia', 'Audi', 'Ford', 'Isuzu', 'Mazda', 'Subaru']
const fuelTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'CNG']
const transmissions = ['Automatic', 'Manual', 'CVT', 'DSG']
const bodyTypes = ['Sedan', 'SUV', 'Hatchback', 'Pickup Truck', 'Van', 'Coupe', 'Convertible', 'Minivan']
const provinces = ['Western', 'Central', 'Southern', 'Northern', 'Eastern', 'North Western', 'North Central', 'Uva', 'Sabaragamuwa']

const nextStep = () => { if (currentStep.value < totalSteps) currentStep.value++ }
const prevStep = () => { if (currentStep.value > 1) currentStep.value-- }

const handlePhotos = (e: Event) => {
  const files = Array.from((e.target as HTMLInputElement).files || [])
  form.photos.push(...files.slice(0, 20 - form.photos.length))
  form.photoPreviewUrls = form.photos.map(f => URL.createObjectURL(f))
}

const removePhoto = (i: number) => {
  form.photos.splice(i, 1)
  form.photoPreviewUrls.splice(i, 1)
}

const { formatLKRFull } = useFormatCurrency()
const suggestedRange = computed(() => {
  if (!form.price) return null
  const price = Number(form.price.toString().replace(/[^0-9]/g, ''))
  return { min: formatLKRFull(price * 0.9), max: formatLKRFull(price * 1.1) }
})

const handleSubmit = () => {
  uiStore.addToast('Your ad has been submitted! We\'ll review and publish it shortly.', 'success')
  router.push('/account/my-ads')
}

const stepTitles = [
  'Vehicle Information',
  'Specifications',
  'Photos',
  'Pricing',
  'Contact & Review',
]
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <div class="bg-surface border-b border-border py-8">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 class="font-display font-bold text-gray-900 text-2xl mb-4">Post Your Car Ad</h1>
        <!-- Progress bar -->
        <div class="flex items-center gap-1 mb-2">
          <div
            v-for="i in totalSteps"
            :key="i"
            :class="[
              'flex-1 h-1.5 rounded-full transition-all duration-300',
              i <= currentStep ? 'bg-primary' : 'bg-border',
            ]"
          />
        </div>
        <div class="flex justify-between text-xs text-muted">
          <span>Step {{ currentStep }} of {{ totalSteps }}: {{ stepTitles[currentStep - 1] }}</span>
          <span>{{ Math.round((currentStep / totalSteps) * 100) }}% complete</span>
        </div>
      </div>
    </div>

    <div class="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <div class="bg-surface border border-border rounded-2xl p-4 sm:p-6 md:p-8">

        <!-- Step 1: Vehicle Info -->
        <div v-if="currentStep === 1" class="space-y-5">
          <h2 class="font-display font-bold text-gray-900 text-xl">Tell us about your vehicle</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="text-sm text-muted block mb-1.5">Make *</label>
              <select v-model="form.make" class="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 focus:outline-none focus:border-primary">
                <option value="" disabled>Select make</option>
                <option v-for="m in makes" :key="m" :value="m">{{ m }}</option>
              </select>
            </div>
            <div>
              <label class="text-sm text-muted block mb-1.5">Model *</label>
              <input v-model="form.model" type="text" placeholder="e.g. Prius" class="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 placeholder-muted focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label class="text-sm text-muted block mb-1.5">Year *</label>
              <input v-model.number="form.year" type="number" :min="1990" :max="2025" class="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label class="text-sm text-muted block mb-1.5">Variant</label>
              <input v-model="form.variant" type="text" placeholder="e.g. Hybrid G" class="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 placeholder-muted focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label class="text-sm text-muted block mb-1.5">Body Type *</label>
              <select v-model="form.bodyType" class="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 focus:outline-none focus:border-primary">
                <option value="" disabled>Select type</option>
                <option v-for="bt in bodyTypes" :key="bt" :value="bt.toLowerCase()">{{ bt }}</option>
              </select>
            </div>
            <div>
              <label class="text-sm text-muted block mb-1.5">Condition *</label>
              <div class="flex gap-2">
                <button
                  v-for="c in ['new', 'used', 'reconditioned']"
                  :key="c"
                  :class="['flex-1 py-2 text-sm rounded-xl border transition-colors capitalize', form.condition === c ? 'bg-primary border-primary text-white' : 'border-border text-muted hover:text-gray-900 bg-background']"
                  type="button"
                  @click="form.condition = c"
                >
                  {{ c === 'reconditioned' ? 'Recon' : c.charAt(0).toUpperCase() + c.slice(1) }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2: Specs -->
        <div v-if="currentStep === 2" class="space-y-5">
          <h2 class="font-display font-bold text-gray-900 text-xl">Vehicle specifications</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="text-sm text-muted block mb-1.5">Engine CC</label>
              <input v-model="form.engineCC" type="number" placeholder="e.g. 1800" class="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 placeholder-muted focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label class="text-sm text-muted block mb-1.5">Fuel Type *</label>
              <select v-model="form.fuelType" class="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 focus:outline-none focus:border-primary">
                <option value="" disabled>Select fuel</option>
                <option v-for="ft in fuelTypes" :key="ft" :value="ft.toLowerCase()">{{ ft }}</option>
              </select>
            </div>
            <div>
              <label class="text-sm text-muted block mb-1.5">Transmission *</label>
              <select v-model="form.transmission" class="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 focus:outline-none focus:border-primary">
                <option value="" disabled>Select</option>
                <option v-for="tr in transmissions" :key="tr" :value="tr.toLowerCase()">{{ tr }}</option>
              </select>
            </div>
            <div>
              <label class="text-sm text-muted block mb-1.5">Mileage (km)</label>
              <input v-model="form.mileage" type="number" placeholder="e.g. 45000" class="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 placeholder-muted focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label class="text-sm text-muted block mb-1.5">Color</label>
              <input v-model="form.color" type="text" placeholder="e.g. Pearl White" class="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 placeholder-muted focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label class="text-sm text-muted block mb-1.5">Number of Seats</label>
              <input v-model.number="form.seats" type="number" :min="2" :max="15" class="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 focus:outline-none focus:border-primary" />
            </div>
          </div>
        </div>

        <!-- Step 3: Photos -->
        <div v-if="currentStep === 3" class="space-y-5">
          <h2 class="font-display font-bold text-gray-900 text-xl">Add photos</h2>
          <p class="text-muted text-sm">Add at least 4 photos. Listings with more photos get 5x more enquiries.</p>

          <label
            class="flex flex-col items-center justify-center h-36 border-2 border-dashed border-border hover:border-primary rounded-2xl cursor-pointer transition-colors bg-background"
          >
            <svg class="w-8 h-8 text-muted mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span class="text-muted text-sm">Click to upload photos</span>
            <span class="text-muted text-xs mt-1">{{ form.photos.length }}/20 photos added</span>
            <input type="file" accept="image/*" multiple class="hidden" @change="handlePhotos" />
          </label>

          <div v-if="form.photoPreviewUrls.length" class="grid grid-cols-3 sm:grid-cols-4 gap-3">
            <div
              v-for="(url, i) in form.photoPreviewUrls"
              :key="i"
              class="relative aspect-video rounded-xl overflow-hidden bg-surface"
            >
              <img :src="url" class="w-full h-full object-cover" :alt="`Photo ${i + 1}`" />
              <button
                class="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/70 text-white text-xs hover:bg-red-600 transition-colors"
                type="button"
                @click="removePhoto(i)"
              >✕</button>
              <span v-if="i === 0" class="absolute bottom-1 left-1 text-xs bg-primary/80 text-white px-1 rounded">Main</span>
            </div>
          </div>
        </div>

        <!-- Step 4: Pricing -->
        <div v-if="currentStep === 4" class="space-y-5">
          <h2 class="font-display font-bold text-gray-900 text-xl">Set your price</h2>
          <div>
            <label class="text-sm text-muted block mb-1.5">Asking Price (LKR) *</label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-sm font-mono">Rs.</span>
              <input
                v-model="form.price"
                type="number"
                placeholder="0"
                class="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-3 text-gray-900 placeholder-muted focus:outline-none focus:border-primary font-mono text-lg"
              />
            </div>
            <div v-if="suggestedRange" class="mt-2 text-xs text-muted">
              Suggested range for similar cars: <span class="text-accent">{{ suggestedRange.min }} – {{ suggestedRange.max }}</span>
            </div>
          </div>

          <label class="flex items-center gap-3 cursor-pointer">
            <input v-model="form.negotiable" type="checkbox" class="w-4 h-4 rounded border-border bg-background text-primary focus:ring-primary" />
            <span class="text-gray-700 text-sm">Price is negotiable</span>
          </label>

          <div>
            <label class="text-sm text-muted block mb-1.5">Description</label>
            <textarea
              v-model="form.description"
              rows="5"
              placeholder="Describe your car — service history, modifications, reason for selling..."
              class="w-full bg-background border border-border rounded-xl px-4 py-3 text-gray-900 placeholder-muted focus:outline-none focus:border-primary resize-none text-sm"
            />
          </div>
        </div>

        <!-- Step 5: Contact & Review -->
        <div v-if="currentStep === 5" class="space-y-5">
          <h2 class="font-display font-bold text-gray-900 text-xl">Your contact details</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="col-span-2 sm:col-span-1">
              <label class="text-sm text-muted block mb-1.5">Your Name *</label>
              <input v-model="form.name" type="text" placeholder="Full name" class="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 placeholder-muted focus:outline-none focus:border-primary" />
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label class="text-sm text-muted block mb-1.5">Phone Number *</label>
              <input v-model="form.phone" type="tel" placeholder="+94 7X XXX XXXX" class="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 placeholder-muted focus:outline-none focus:border-primary" />
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label class="text-sm text-muted block mb-1.5">WhatsApp Number</label>
              <input v-model="form.whatsapp" type="tel" placeholder="+94 7X XXX XXXX" class="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 placeholder-muted focus:outline-none focus:border-primary" />
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label class="text-sm text-muted block mb-1.5">Province *</label>
              <select v-model="form.province" class="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 focus:outline-none focus:border-primary">
                <option value="" disabled>Select province</option>
                <option v-for="p in provinces" :key="p" :value="p">{{ p }}</option>
              </select>
            </div>
            <div class="col-span-2">
              <label class="text-sm text-muted block mb-1.5">City / Town *</label>
              <input v-model="form.location" type="text" placeholder="e.g. Colombo 05" class="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-gray-900 placeholder-muted focus:outline-none focus:border-primary" />
            </div>
          </div>

          <!-- Summary -->
          <div class="bg-background border border-border rounded-xl p-4 mt-4">
            <h3 class="font-semibold text-gray-900 text-sm mb-3">Ad Summary</h3>
            <div class="grid grid-cols-2 gap-2 text-xs text-muted">
              <div>Vehicle: <span class="text-gray-900">{{ form.year }} {{ form.make }} {{ form.model }}</span></div>
              <div>Condition: <span class="text-gray-900 capitalize">{{ form.condition }}</span></div>
              <div>Fuel: <span class="text-gray-900 capitalize">{{ form.fuelType }}</span></div>
              <div>Mileage: <span class="text-gray-900">{{ form.mileage || '0' }} km</span></div>
              <div>Photos: <span class="text-gray-900">{{ form.photos.length }}</span></div>
              <div>Price: <span class="text-primary font-mono font-semibold">{{ form.price ? 'Rs. ' + Number(form.price).toLocaleString() : 'Not set' }}</span></div>
            </div>
          </div>

          <p class="text-muted text-xs">By submitting, you agree to our <NuxtLink to="/terms" class="text-primary hover:underline">Terms of Service</NuxtLink> and <NuxtLink to="/privacy" class="text-primary hover:underline">Privacy Policy</NuxtLink>.</p>
        </div>

        <!-- Navigation -->
        <div class="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <AppButton
            v-if="currentStep > 1"
            variant="outline"
            size="lg"
            @click="prevStep"
          >
            ← Back
          </AppButton>
          <div v-else />

          <AppButton
            v-if="currentStep < totalSteps"
            variant="primary"
            size="lg"
            @click="nextStep"
          >
            Continue →
          </AppButton>
          <AppButton
            v-else
            variant="primary"
            size="lg"
            @click="handleSubmit"
          >
            🚗 Submit Ad
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>
