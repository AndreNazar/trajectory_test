import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from "react-leaflet"
import { useEffect } from "react"
import { icon } from "leaflet"

interface Props {
  latitude: number
  longitude: number
  width?: number
  height?: number
  position?: [number, number]
  setPosition?(pos: [number, number]): void
}

export default function Map({ latitude, longitude, width = 500, height = 250, position, setPosition }: Props) {
  return (
    <MapContainer key={width} style={{ width: `${width}px`, height: `${height}px` }} center={[latitude, longitude]} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ChangeView lat={latitude} lng={longitude} />
      {setPosition && <ClickHandler setPosition={setPosition} />}
      <Marker position={position || [latitude, longitude]} icon={icon({ iconUrl: "/trajectory_test/marker-icon.png", iconSize: [50, 50], shadowUrl: "" })} />
    </MapContainer>
  )
}

function ChangeView({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap()

  useEffect(() => {
    map.setView([lat, lng])
  }, [lat, lng, map])

  return null
}

function ClickHandler({ setPosition }: { setPosition: (pos: [number, number]) => void }) {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng])
    },
  })

  return null
}
