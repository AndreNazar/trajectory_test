import { AddIcon, CloseIcon, EditIcon, FilterIcon, SelectIcon } from "@/shared/assets"
import type { IconsType } from "./Button.types"

interface Props {
  icon: IconsType
}

export default function ButtonIcon({ icon }: Props) {
  if (icon === "close") return <CloseIcon />
  if (icon === "add") return <AddIcon />
  if (icon === "edit") return <EditIcon />
  if (icon === "filter") return <FilterIcon />
  if (icon === "select") return <SelectIcon />

  return null
}
