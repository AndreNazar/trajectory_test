import type { ChangeEvent } from "react"
import styles from "./Input.module.scss"

interface Props {
  value: string
  onChange(e: ChangeEvent): void
  label?: string
}

export default function Input({ value, onChange, label }: Props) {
  return (
    <div className={styles.input_wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input value={value} onChange={onChange} className={styles.input} />
    </div>
  )
}
