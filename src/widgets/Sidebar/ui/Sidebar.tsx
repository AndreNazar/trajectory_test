import { CarsList } from "@/features/CarsList"
import styles from "./Sidebar.module.scss"
import { AddCarButton } from "@/features/AddCar"
import { FilterCarButton } from "@/features/FilterCar"

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <FilterCarButton />
        <AddCarButton />
      </div>
      <CarsList />
    </div>
  )
}
