import { defineStore } from 'pinia'

interface Toast {
  id: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

export const useUiStore = defineStore('ui', () => {
  const mobileMenuOpen = ref(false)
  const searchOpen = ref(false)
  const toasts = ref<Toast[]>([])
  const compareBarVisible = ref(false)

  const toggleMobileMenu = () => { mobileMenuOpen.value = !mobileMenuOpen.value }
  const closeMobileMenu = () => { mobileMenuOpen.value = false }

  const addToast = (message: string, type: Toast['type'] = 'info', duration = 4000) => {
    const id = Math.random().toString(36).slice(2)
    toasts.value.push({ id, message, type, duration })
    setTimeout(() => removeToast(id), duration)
  }

  const removeToast = (id: string) => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  return {
    mobileMenuOpen, searchOpen, toasts, compareBarVisible,
    toggleMobileMenu, closeMobileMenu, addToast, removeToast,
  }
})
