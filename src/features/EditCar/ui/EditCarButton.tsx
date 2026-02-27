import { Button } from "@/shared/ui"
import styles from "./EditCarButton.module.scss"
import { useState, type ChangeEvent } from "react"
import Modal from "@/shared/ui/Modal/Modal"
import Input from "@/shared/ui/Input/Input"
import { useCarStore } from "@/entities/Car/model/store"
import useModalControl from "@/shared/hooks/useModalControl.hook"

interface Props {
  id: number
  name: string
  price: number
}

export default function EditCarButton({ id, name, price }: Props) {
  const { isOpen, onOpen, onClose } = useModalControl()
  const [localName, setLocalName] = useState<string>(name)
  const [localPrice, setLocalPrice] = useState<string>(price.toString())
  const update = useCarStore((state) => state.updateCar)

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalName(e.target.value)
  }
  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalPrice(e.target.value)
  }

  const onSubmit = () => {
    update(id, localName, Number(localPrice))
    onClose()
  }

  return (
    <>
      <Button onClick={onOpen} icon="edit">
        Изменить
      </Button>
      {isOpen && (
        <Modal title="Редактирование" onClose={onClose} onSubmit={onSubmit}>
          <div className={styles.form}>
            <Input label="Название" value={localName} onChange={handleChangeName} />
            <Input label="Цена" value={localPrice} onChange={handleChangePrice} />
          </div>
        </Modal>
      )}
    </>
  )
}
