import type { SelectDataType } from "@/entities/Car"

export const selectData = {
  name_asc: "Название (по возрастанию)",
  name_desc: "Название (по убыванию)",
  price_asc: "Цена (по возрастанию)",
  price_desc: "Цена (по убыванию)",
} satisfies Record<SelectDataType, string>
