<script setup lang="ts">
useHead({ title: 'EV charging points — Automobile.lk' })
const connector = ref('')
const city = ref('')
const features = ['Connector type', 'Charging power (kW)', 'Operator & access hours', 'Price & payment method', 'Last confirmed status']
</script>
<template>
  <main class="min-h-screen bg-background py-12"><div class="max-w-5xl mx-auto px-4 sm:px-6">
    <p class="text-primary font-semibold text-sm">Electric vehicles</p><h1 class="text-4xl font-display font-bold text-gray-900 mt-2">EV charging points</h1>
    <p class="text-muted mt-4 max-w-2xl">Find a compatible charging point using the details that matter for your journey.</p>
    <div class="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">Charging locations and live availability have not yet been verified. No live status is shown.</div>
    <div class="grid sm:grid-cols-2 gap-3 mt-8"><label class="text-sm text-muted">City or district<input v-model="city" placeholder="e.g. Kandy" class="mt-1 w-full border border-border rounded-xl p-3 bg-white text-gray-900" /></label><label class="text-sm text-muted">Connector<select v-model="connector" class="mt-1 w-full border border-border rounded-xl p-3 bg-white text-gray-900"><option value="">Any connector</option><option>CCS2</option><option>CHAdeMO</option><option>Type 2</option><option>GB/T</option></select></label></div>
    <p class="mt-4 p-5 rounded-xl border border-border bg-white text-muted">No verified charging points are available{{ city ? ` near ${city}` : '' }}{{ connector ? ` for ${connector}` : '' }} yet.</p>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"><div v-for="feature in features" :key="feature" class="rounded-xl bg-white border border-border p-5 font-medium">⚡ {{ feature }}</div></div>
    <NuxtLink to="/ev-guide" class="inline-flex mt-8 text-primary font-semibold hover:underline">Read the EV buying guide →</NuxtLink>
  </div></main>
</template>
