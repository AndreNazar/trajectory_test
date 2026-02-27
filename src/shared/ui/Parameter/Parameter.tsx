import styles from "./Parameter.module.scss"

type ParameterProps = {
  label: string
  value: string | number
}

export default function Parameter({ label, value }: ParameterProps) {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
    </div>
  )
}
