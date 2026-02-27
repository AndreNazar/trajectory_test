import { create } from "zustand"
import type { ICar } from "../types/Car.interfaces"

export type SelectDataType = "name_desc" | "name_asc" | "price_desc" | "price_asc"

type Store = {
  cars: ICar[]
  isLoading: boolean
  currentFilter: SelectDataType | null
  fetchCars: () => void
  getCarById: (id: number) => ICar | undefined
  addCar: (car: ICar) => void
  removeCar: (id: number) => void
  updateCar: (id: number, name: string, price: number) => void
  filterCars: (key: SelectDataType) => void
}

export const useCarStore = create<Store>((set, get) => ({
  cars: [],
  isLoading: false,
  currentFilter: null,
  fetchCars: async () => {
    set({ isLoading: true })
    await fetch("https://task.tspb.su/test-task/vehicles")
      .then((response) => response.json())
      .then((data) =>
        set({
          cars: data,
          isLoading: false,
        })
      )
  },
  getCarById: (id: number) => get().cars.find((car) => car.id === id),
  addCar: (car: ICar) => set((state) => ({ cars: [...state.cars, car] })),
  removeCar: (id: number) => set((state) => ({ cars: state.cars.filter((car) => car.id !== id) })),
  updateCar: (id: number, name: string, price: number) =>
    set((state) => ({
      cars: state.cars.map((car) => (car.id === id ? { ...car, name, price } : car)),
    })),
  filterCars: (key: SelectDataType) =>
    set((state) => {
      const cars = [...state.cars]
      switch (key) {
        case "name_desc":
          return { cars: cars.sort((a, b) => b.name.localeCompare(a.name)), currentFilter: key }
        case "name_asc":
          return { cars: cars.sort((a, b) => a.name.localeCompare(b.name)), currentFilter: key }
        case "price_desc":
          return { cars: cars.sort((a, b) => b.price - a.price), currentFilter: key }
        case "price_asc":
          return { cars: cars.sort((a, b) => a.price - b.price), currentFilter: key }
        default:
          return { cars }
      }
    }),
}))
