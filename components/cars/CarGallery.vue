<script setup lang="ts">
interface Props {
  images: string[]
  alt?: string
}

const props = withDefaults(defineProps<Props>(), { alt: 'Car image' })

const activeIndex = ref(0)
const lightboxOpen = ref(false)

const prev = () => {
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length
}
const next = () => {
  activeIndex.value = (activeIndex.value + 1) % props.images.length
}

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (!lightboxOpen.value) return
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'Escape') lightboxOpen.value = false
  })
})
</script>

<template>
  <div class="space-y-3">
    <!-- Main image -->
    <div
      class="relative aspect-video rounded-2xl overflow-hidden bg-surface cursor-zoom-in"
      @click="lightboxOpen = true"
    >
      <img
        :src="images[activeIndex] || 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=450&fit=crop&auto=format'"
        :alt="`${alt} - Image ${activeIndex + 1}`"
        class="w-full h-full object-cover"
      />
      <div class="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-white text-xs">
        {{ activeIndex + 1 }} / {{ images.length }}
      </div>
      <div class="absolute inset-0 flex items-center justify-between px-3">
        <button
          v-if="images.length > 1"
          class="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/80 transition-colors"
          @click.stop="prev"
        >
          ‹
        </button>
        <button
          v-if="images.length > 1"
          class="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/80 transition-colors"
          @click.stop="next"
        >
          ›
        </button>
      </div>
    </div>

    <!-- Thumbnails -->
    <div v-if="images.length > 1" class="flex gap-2 overflow-x-auto pb-1">
      <button
        v-for="(img, i) in images"
        :key="i"
        class="flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all"
        :class="i === activeIndex ? 'border-primary' : 'border-border hover:border-primary/50'"
        @click="activeIndex = i"
      >
        <img :src="img" :alt="`Thumbnail ${i + 1}`" class="w-full h-full object-cover" />
      </button>
    </div>
  </div>

  <!-- Lightbox -->
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
        @click.self="lightboxOpen = false"
      >
        <button class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300" @click="lightboxOpen = false">✕</button>
        <button v-if="images.length > 1" class="absolute left-4 text-white text-4xl px-4 hover:text-gray-300" @click="prev">‹</button>
        <img
          :src="images[activeIndex]"
          :alt="`${alt} fullscreen`"
          class="max-w-full max-h-full object-contain rounded-xl"
        />
        <button v-if="images.length > 1" class="absolute right-4 text-white text-4xl px-4 hover:text-gray-300" @click="next">›</button>
        <div class="absolute bottom-4 text-white text-sm">{{ activeIndex + 1 }} / {{ images.length }}</div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
