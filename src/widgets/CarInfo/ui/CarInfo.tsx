import { useParams } from "react-router"
import styles from "./CarInfo.module.scss"
import { useCarStore } from "@/entities/Car"
import "leaflet/dist/leaflet.css"
import { CarCard, CarLocation } from "@/entities/Car"

export default function CarInfo() {
  const { id } = useParams()
  const car = useCarStore((s) => s.getCarById(Number(id)))

  if (!car) return null
  return (
    <div className={styles.container}>
      <CarCard car={car} />
      <CarLocation latitude={car.latitude} longitude={car.longitude} />
    </div>
  )
}
