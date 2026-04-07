import { defineStore } from 'pinia'
import type { User } from '~/types'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)
  const loading = ref(false)

  const isLoggedIn = computed(() => !!user.value)

  const login = async (email: string, password: string) => {
    loading.value = true
    try {
      // Mock login - replace with real API
      await new Promise(resolve => setTimeout(resolve, 800))
      user.value = {
        id: '1',
        name: 'Kasun Perera',
        email,
        role: 'user',
        verified: true,
        createdAt: new Date().toISOString(),
      }
      token.value = 'mock-token-123'
      return { success: true }
    } catch (e) {
      return { success: false, error: 'Invalid credentials' }
    } finally {
      loading.value = false
    }
  }

  const register = async (name: string, email: string, phone: string, password: string) => {
    loading.value = true
    try {
      await new Promise(resolve => setTimeout(resolve, 800))
      user.value = {
        id: '1',
        name,
        email,
        phone,
        role: 'user',
        verified: false,
        createdAt: new Date().toISOString(),
      }
      token.value = 'mock-token-123'
      return { success: true }
    } catch (e) {
      return { success: false, error: 'Registration failed' }
    } finally {
      loading.value = false
    }
  }

  const logout = () => {
    user.value = null
    token.value = null
  }

  return { user, token, loading, isLoggedIn, login, register, logout }
})
