<script setup lang="ts">
import type { Dealer } from '~/types'

interface Props {
  dealers: Dealer[]
  center?: [number, number]
  zoom?: number
}

const props = withDefaults(defineProps<Props>(), {
  center: () => [7.8731, 80.7718], // Sri Lanka center
  zoom: 8,
})

const emit = defineEmits<{ 'select': [dealer: Dealer] }>()

const mapRef = ref<HTMLElement>()
const mapInstance = ref<any>(null)

onMounted(async () => {
  if (!process.client) return
  const L = await import('leaflet')
  await import('leaflet/dist/leaflet.css')

  mapInstance.value = L.map(mapRef.value!, {
    center: props.center,
    zoom: props.zoom,
    zoomControl: true,
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(mapInstance.value)

  // Add markers
  props.dealers.forEach(dealer => {
    const icon = L.divIcon({
      className: '',
      html: `<div style="background:#C8102E;width:28px;height:28px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;"></div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 28],
    })
    const marker = L.marker([dealer.lat, dealer.lng], { icon })
    marker.bindPopup(`
      <div style="font-family:'DM Sans',sans-serif;min-width:160px;">
        <strong style="color:#111">${dealer.name}</strong><br>
        <small style="color:#666">${dealer.address}</small><br>
        <small style="color:#C8102E">⭐ ${dealer.rating} · ${dealer.listingCount} listings</small>
      </div>
    `)
    marker.on('click', () => emit('select', dealer))
    marker.addTo(mapInstance.value)
  })
})

onUnmounted(() => {
  mapInstance.value?.remove()
})
</script>

<template>
  <div ref="mapRef" class="w-full h-full rounded-2xl overflow-hidden border border-border" />
</template>

<style>
.leaflet-container { background: #07080A; }
</style>
