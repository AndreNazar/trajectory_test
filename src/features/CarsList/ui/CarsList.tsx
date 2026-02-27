import { useCarStore } from "@/entities/Car"
import { CarItem } from "@/entities/Car"
import { SkeletonLoadingList } from "@/shared/ui"
import { useEffect } from "react"
import { Link } from "react-router"

export default function CarsList() {
  const { cars, fetchCars, isLoading } = useCarStore((state) => state)

  useEffect(() => {
    fetchCars()
  }, [fetchCars])

  return (
    <ul>
      {isLoading && <SkeletonLoadingList />}
      {cars?.map((car) => (
        <li key={car.id}>
          <Link to={`/${car.id}`}>
            <CarItem car={car} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
