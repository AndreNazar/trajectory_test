import { Map, Parameter } from "@/shared/ui"
import styles from "./CarLocation.module.scss"

interface Props {
  latitude: number
  longitude: number
}

export default function CarLocation({ latitude, longitude }: Props) {
  return (
    <div className={styles.map}>
      <h2>Местоположение</h2>
      <div className={styles.map_content}>
        <Map latitude={latitude} longitude={longitude} />
        <div className={styles.coordinates}>
          <Parameter label="Широта" value={latitude} />
          <Parameter label="Долгота" value={longitude} />
        </div>
      </div>
    </div>
  )
}
