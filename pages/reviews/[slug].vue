<script setup lang="ts">
definePageMeta({ layout: 'default' })

const route = useRoute()
const { data: reviews } = await useFetch('/api/reviews')
const review = computed(() => (reviews.value as any)?.reviews?.find((r: any) => r.slug === route.params.slug))

useHead(() => ({
  title: review.value ? `${review.value.carMake} ${review.value.carModel} Review — Automobile.lk` : 'Review',
}))
</script>

<template>
  <div class="min-h-screen bg-background">
    <div v-if="!review" class="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 class="font-display font-bold text-gray-900 text-2xl mb-4">Review not found</h1>
      <NuxtLink to="/reviews"><AppButton variant="outline">Back to Reviews</AppButton></NuxtLink>
    </div>

    <template v-else>
      <!-- Hero image -->
      <div class="relative h-80 md:h-[450px] overflow-hidden">
        <img :src="review.carImage" :alt="review.carModel" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
        <div class="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 pb-8">
          <nav class="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <NuxtLink to="/" class="hover:text-white">Home</NuxtLink>
            <span>›</span>
            <NuxtLink to="/reviews" class="hover:text-white">Reviews</NuxtLink>
            <span>›</span>
            <span class="text-white">{{ review.carModel }}</span>
          </nav>
          <h1 class="font-display font-extrabold text-white text-3xl md:text-5xl mb-2">
            {{ review.carYear }} {{ review.carMake }} {{ review.carModel }}
          </h1>
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
              <span class="font-mono font-bold text-white text-xl">{{ review.overallScore }}</span>
            </div>
            <div>
              <p class="text-white font-semibold">Overall Score</p>
              <StarRating :rating="review.overallScore / 20" size="md" />
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="md:col-span-2 space-y-8">
            <!-- Summary -->
            <div class="bg-surface border border-border rounded-2xl p-6">
              <h2 class="font-display font-bold text-gray-900 text-xl mb-3">Summary</h2>
              <p class="text-gray-600 leading-relaxed">{{ review.summary }}</p>
            </div>

            <!-- Pros & Cons -->
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5">
                <h3 class="font-semibold text-emerald-400 mb-3">✓ Pros</h3>
                <ul class="space-y-2">
                  <li v-for="pro in review.pros" :key="pro" class="text-gray-600 text-sm flex items-start gap-2">
                    <span class="text-emerald-400 mt-0.5 flex-shrink-0">+</span> {{ pro }}
                  </li>
                </ul>
              </div>
              <div class="bg-red-500/10 border border-red-500/20 rounded-2xl p-5">
                <h3 class="font-semibold text-red-400 mb-3">✕ Cons</h3>
                <ul class="space-y-2">
                  <li v-for="con in review.cons" :key="con" class="text-gray-600 text-sm flex items-start gap-2">
                    <span class="text-red-400 mt-0.5 flex-shrink-0">−</span> {{ con }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Ratings sidebar -->
          <div class="space-y-4">
            <div class="bg-surface border border-border rounded-2xl p-5">
              <h3 class="font-semibold text-gray-900 mb-4">Ratings Breakdown</h3>
              <div class="space-y-3">
                <div
                  v-for="(val, key) in review.ratings"
                  :key="key"
                  class="flex items-center gap-3"
                >
                  <span class="text-muted text-xs capitalize w-24 flex-shrink-0">{{ key }}</span>
                  <div class="flex-1 bg-background rounded-full h-2 overflow-hidden">
                    <div
                      class="h-full bg-primary rounded-full"
                      :style="{ width: `${val}%` }"
                    />
                  </div>
                  <span class="text-gray-900 text-xs font-mono w-6 text-right">{{ val }}</span>
                </div>
              </div>
            </div>

            <!-- Expert -->
            <div class="bg-surface border border-border rounded-2xl p-5">
              <h3 class="font-semibold text-gray-900 mb-3 text-sm">Reviewed By</h3>
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-xl">
                  {{ review.expertName[0] }}
                </div>
                <div>
                  <p class="text-gray-900 font-semibold">{{ review.expertName }}</p>
                  <p class="text-muted text-xs">{{ review.expertTitle }}</p>
                  <p class="text-muted text-xs">{{ review.readTime }} min read</p>
                </div>
              </div>
            </div>

            <NuxtLink :to="`/cars?make=${review.carMake}`">
              <AppButton variant="primary" full-width size="lg">View {{ review.carMake }} Cars</AppButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
