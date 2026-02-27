import useModalControl from "@/shared/hooks/useModalControl.hook"
import { Button, Map } from "@/shared/ui"
import Input from "@/shared/ui/Input/Input"
import Modal from "@/shared/ui/Modal/Modal"
import useFormCar from "../model/helpers/useForm"
import { useCarStore } from "@/entities/Car"
import styles from "./AddCarButton.module.scss"

export default function AddCarButton() {
  const { addCar } = useCarStore()
  const { isOpen, onOpen, onClose } = useModalControl()
  const { latitude, longitude, setPosition, name, model, year, color, price, changerName, changerColor, changerModel, changerYear, changerPrice, clearForm } = useFormCar()

  const onSubmit = () => {
    addCar({ id: Date.now(), name, model, year, color, price, latitude, longitude })
    onClose()
    clearForm()
  }

  return (
    <>
      <Button onClick={onOpen} icon="add"></Button>
      {isOpen && (
        <Modal title="Создание" onClose={onClose} onSubmit={onSubmit}>
          <div className={styles.form}>
            <Input label="Название" onChange={changerName} value={name} />
            <Input label="Модель" onChange={changerModel} value={model} />
            <Input label="Год выпуска" onChange={changerYear} value={year.toString()} />
            <Input label="Цвет" onChange={changerColor} value={color} />
            <Input label="Цена" onChange={changerPrice} value={price.toString()} />
            <Map latitude={latitude} longitude={longitude} setPosition={setPosition} position={[latitude, longitude]} />
          </div>
        </Modal>
      )}
    </>
  )
}
