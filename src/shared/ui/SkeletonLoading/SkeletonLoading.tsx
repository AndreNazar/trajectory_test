import styles from "./SkeletonLoading.module.scss"

export default function SkeletonLoading() {
  return (
    <div className={styles.item}>
      <div className={styles.logo}></div>
      <div className={styles.text}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.price}></div>
    </div>
  )
}
