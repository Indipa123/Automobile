import type { Car } from '~/types'

export const useCompare = () => {
  const compareStore = useCompareStore()

  const cars = computed(() => compareStore.cars)
  const count = computed(() => compareStore.cars.length)
  const isFull = computed(() => compareStore.cars.length >= 3)

  const addCar = (car: Car) => {
    if (compareStore.cars.length < 3 && !compareStore.isInCompare(car.id)) {
      compareStore.addCar(car)
    }
  }

  const removeCar = (carId: string) => {
    compareStore.removeCar(carId)
  }

  const toggleCompare = (car: Car) => {
    if (compareStore.isInCompare(car.id)) {
      removeCar(car.id)
    } else {
      addCar(car)
    }
  }

  const isInCompare = (carId: string) => compareStore.isInCompare(carId)

  const clearAll = () => compareStore.clearAll()

  return { cars, count, isFull, addCar, removeCar, toggleCompare, isInCompare, clearAll }
}
