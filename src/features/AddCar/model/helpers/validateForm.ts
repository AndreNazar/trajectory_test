import type { ICar } from "@/entities/Car"

export function validateForm(newCar: ICar): [keyof Omit<ICar, "id">, string] | null {
  const { name, model, year, color, price } = newCar
  if (name.length < 3) return ["name", "Название должно содержать не менее 3 символов"]
  if (model.length < 3) return ["model", "Модель должна содержать не менее 3 символов"]
  if (year < 0) return ["year", "Год выпуска должен быть больше 0"]
  if (color.length < 3) return ["color", "Цвет должен содержать не менее 3 символов"]
  if (price < 0) return ["price", "Цена должна быть больше 0"]
  return null
}
