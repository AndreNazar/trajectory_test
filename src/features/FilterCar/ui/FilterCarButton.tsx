import { Button } from "@/shared/ui"
import styles from "./FilterCarButton.module.scss"
import Modal from "@/shared/ui/Modal/Modal"
import { selectData } from "../data/selectData"
import useModalControl from "@/shared/hooks/useModalControl.hook"
import { useCarStore, type SelectDataType } from "@/entities/Car"

export default function FilterCarButton() {
  const { isOpen, onClose, onOpen } = useModalControl()
  const filter = useCarStore((state) => state.filterCars)
  const currentFilter = useCarStore((state) => state.currentFilter)
  const arraySelectData = Object.entries(selectData) as [SelectDataType, string][]

  const filterHandler = (key: SelectDataType) => {
    onClose()
    setTimeout(() => filter(key), 0)
  }

  return (
    <>
      <Button icon="filter" onClick={onOpen} />
      {isOpen && (
        <Modal title="Фильтр" onClose={onClose}>
          <div className={styles.select_list}>
            {arraySelectData.map(([key, title]) => (
              <Button key={key} w100 onClick={filterHandler.bind(null, key)} icon={currentFilter === key ? "select" : null}>
                {title}
              </Button>
            ))}
          </div>
        </Modal>
      )}
    </>
  )
}
