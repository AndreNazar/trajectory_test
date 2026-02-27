import { createPortal } from "react-dom"
import styles from "./Modal.module.scss"
import type { PropsWithChildren } from "react"
import { CloseIcon } from "@/shared/assets"
import Button from "../Button/Button"

interface Props extends PropsWithChildren {
  title: string
  onClose(): void
  onSubmit?(): void
}

export default function Modal({ title, children, onClose, onSubmit }: Props) {
  return createPortal(
    <div onClick={onClose} className={styles.container}>
      <div onClick={(e) => e.stopPropagation()} className={styles.content}>
        <div onClick={onClose} className={styles.close}>
          <CloseIcon />
        </div>
        <h2>{title}</h2>
        <div>{children}</div>
        {onSubmit && <Button onClick={onSubmit}>Сохранить</Button>}
      </div>
    </div>,
    document.body
  )
}
