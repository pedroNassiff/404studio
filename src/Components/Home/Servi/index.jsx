import Carousel from "../Carousel"
import styles from "./styles.module.scss"

export default function Index() {
  return (
    <div>
      <div className={`${styles["container"]}`}>
        <h2 className={styles.title}>Our service.</h2>
      </div>
      <div className={styles.contain}>
      <Carousel />
      </div>
    </div>
  )
}