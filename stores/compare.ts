import { defineStore } from 'pinia'
import type { Car } from '~/types'

export const useCompareStore = defineStore('compare', () => {
  const cars = ref<Car[]>([])

  const addCar = (car: Car) => {
    if (cars.value.length < 3 && !isInCompare(car.id)) {
      cars.value.push(car)
    }
  }

  const removeCar = (carId: string) => {
    cars.value = cars.value.filter(c => c.id !== carId)
  }

  const isInCompare = (carId: string) => cars.value.some(c => c.id === carId)

  const clearAll = () => {
    cars.value = []
  }

  const count = computed(() => cars.value.length)

  return { cars, count, addCar, removeCar, isInCompare, clearAll }
})
