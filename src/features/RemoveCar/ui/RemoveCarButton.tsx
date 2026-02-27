import { Button } from "@/shared/ui"
import { useCarStore } from "@/entities/Car/model/store"
import { useNavigate } from "react-router"

interface Props {
  id: number
}

export default function RemoveCarButton({ id }: Props) {
  const remove = useCarStore((state) => state.removeCar)
  const navigate = useNavigate()

  const handleClick = () => {
    remove(id)
    navigate("/")
  }

  return (
    <Button icon="close" onClick={handleClick}>
      Удалить
    </Button>
  )
}
