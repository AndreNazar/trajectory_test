import SkeletonLoading from "./SkeletonLoading"
import styles from "./SkeletonLoading.module.scss"

export default function SkeletonLoadingList() {
  return (
    <div className={styles.list}>
      {[...Array(10)].map((_, index) => (
        <SkeletonLoading key={index} />
      ))}
    </div>
  )
}
