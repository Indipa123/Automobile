<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Car Loan Calculator Sri Lanka — Automobile.lk' })
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="bg-surface border-b border-border py-10">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <p class="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Finance Tools</p>
        <h1 class="font-display font-bold text-gray-900 text-3xl md:text-4xl mb-2">Loan Calculator</h1>
        <p class="text-muted">Calculate your monthly EMI and plan your car purchase with confidence</p>
      </div>
    </div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <LoanCalculator />
    </div>
  </div>
</template>
