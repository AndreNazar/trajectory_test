import { CarIcon } from "@/shared/assets"
import type { ICar } from "../../types/Car.interfaces"
import styles from "./CarItem.module.scss"
import cn from "classnames"
import { useLocation } from "react-router"

interface Props {
  car: ICar
}

export default function CarItem({ car }: Props) {
  const currentId = useLocation().pathname.slice(1)

  return (
    <div
      className={cn(styles.container, {
        [styles.active]: Number(currentId) === car.id,
      })}
    >
      <div style={{ color: car.color }} className={styles.icon}>
        <CarIcon />
      </div>
      <div className={styles.name_wrapper}>
        <p className={styles.name}>{car.name}</p>
        <p className={styles.model}>
          {car.model}({car.year})
        </p>
      </div>
      <p className={styles.price}>${car.price}</p>
    </div>
  )
}
