import Carousel from "../Carousel"
import Carousel2 from "../Carousel2"
import styles from "./styles.module.scss"

export default function Index() {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Our service.</h2>
      </div>
      {/* <Carousel/> */}
      <Carousel2/>
    </div>
  )
}