import styles from "./CarInfo.module.scss"

export default function EmptyInfo() {
  return (
    <div className={styles.empty_container}>
      <h2>Нет информации</h2>
      <p>Выберите машину из списка или создайте</p>
    </div>
  )
}
