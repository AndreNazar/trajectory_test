import useModalControl from "@/shared/hooks/useModalControl.hook"
import { Button, Map } from "@/shared/ui"
import Input from "@/shared/ui/Input/Input"
import Modal from "@/shared/ui/Modal/Modal"
import useFormCar from "../model/hooks/useForm"
import { useCarStore, type ICar } from "@/entities/Car"
import styles from "./AddCarButton.module.scss"
import { useMemo, useState, type ChangeEvent } from "react"
import { validateForm } from "../model/helpers/validateForm"
import { useNavigate } from "react-router"

type ICarWithoutID = Omit<ICar, "id">

// prettier-ignore
type InputItemType<K extends keyof ICarWithoutID = keyof ICarWithoutID> = [
  K,
  string,
  ICarWithoutID[K],
  (e: ChangeEvent<HTMLInputElement>) => void
]
// в этом типе если что картеж выглядит вот так ["name", "Название", name, changerName]

type InputsType = InputItemType[]

export default function AddCarButton() {
  const navigate = useNavigate()
  const { addCar } = useCarStore()
  const { isOpen, onOpen, onClose } = useModalControl()

  // prettier-ignore
  const { 
    latitude, longitude, name, model, year, color, price, 
    setPosition, changerName, changerColor, changerModel, changerYear, changerPrice, 
    clearForm 
  } = useFormCar()

  const [error, setError] = useState<[keyof ICarWithoutID, string] | null>(null)

  const inputs: InputsType = [
    ["name", "Название", name, changerName],
    ["model", "Модель", model, changerModel],
    ["year", "Год выпуска", year, changerYear],
    ["color", "Цвет", color, changerColor],
    ["price", "Цена", price, changerPrice],
  ]

  const onSubmit = () => {
    const newCar = { id: Date.now(), name, model, year, color, price, latitude, longitude }
    const validate = validateForm(newCar)
    if (validate === null) {
      onClose()
      clearForm()
      setError(null)
      navigate(newCar.id.toString())
      setTimeout(() => addCar(newCar), 0)
    } else {
      setError(validate)
    }
  }

  const checkerError = useMemo(
    () => (key: keyof ICarWithoutID) => {
      if (error?.[0] === key) return error[1]
      return undefined
    },
    [error]
  )

  return (
    <>
      <Button onClick={onOpen} icon="add"></Button>
      {isOpen && (
        <Modal title="Создание" onClose={onClose} onSubmit={onSubmit}>
          <div className={styles.form}>
            {inputs.map(([key, title, value, onChange]) =>
              // prettier-ignore
              <Input 
                key={key}
                error={checkerError(key)}
                label={title}
                onChange={onChange}
                value={value.toString()}
              />
            )}
            <div className={styles.map_wrapper}>
              <p className={styles.label}>Выберите местоположение</p>
              <Map latitude={latitude} longitude={longitude} setPosition={setPosition} position={[latitude, longitude]} />
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
