<script setup lang="ts">
const uiStore = useUiStore()

const typeClasses = {
  success: 'border-emerald-500/40 bg-emerald-50 text-emerald-800',
  error: 'border-red-500/40 bg-red-50 text-red-800',
  warning: 'border-amber-500/40 bg-amber-50 text-amber-800',
  info: 'border-blue-500/40 bg-blue-50 text-blue-800',
}

const icons = {
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ℹ',
}
</script>

<template>
  <Teleport to="body">
    <div class="fixed top-4 right-4 z-[200] flex flex-col gap-2 pointer-events-none">
      <TransitionGroup name="toast">
        <div
          v-for="toast in uiStore.toasts"
          :key="toast.id"
          :class="[
            'pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border max-w-sm shadow-lg',
            typeClasses[toast.type],
          ]"
        >
          <span class="text-lg leading-none">{{ icons[toast.type] }}</span>
          <p class="text-sm font-medium flex-1">{{ toast.message }}</p>
          <button
            class="opacity-60 hover:opacity-100 transition-opacity"
            @click="uiStore.removeToast(toast.id)"
          >
            ✕
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<style scoped>
.toast-enter-active, .toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
