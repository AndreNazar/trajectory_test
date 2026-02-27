import { Parameter } from "@/shared/ui"
import styles from "./CarCard.module.scss"
import type { ICar } from "../../types/Car.interfaces"
import { CarIcon } from "@/shared/assets"
import { RemoveCarButton } from "@/features/RemoveCar"
import { EditCarButton } from "@/features/EditCar"

interface Props {
  car: ICar
}

export default function CarCard({ car }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.text_wrapper}>
        <h2>
          {car.name} {car.model} ({car.year})
        </h2>
        <div className={styles.parameters}>
          <Parameter label="Марка" value={car.name} />
          <Parameter label="Модель" value={car.model} />
          <Parameter label="Год выпуска" value={car.year} />
          <Parameter label="Цвет" value={car.color} />
          <Parameter label="Цена" value={`$${car.price}`} />
        </div>
        <div className={styles.controls}>
          <EditCarButton id={car.id} name={car.name} price={car.price} />
          <RemoveCarButton id={car.id} />
        </div>
      </div>
      <div className={styles.car_icon} style={{ color: car.color }}>
        <CarIcon />
      </div>
    </div>
  )
}
