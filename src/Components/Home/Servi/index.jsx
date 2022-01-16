import Carousel from "../Carousel"
import Carousel2 from "../Carousel2"
import Carousel3 from "../Carousel3"

import styles from "./styles.module.scss"

export default function Index() {
  return (
    <>
      <div className={`${styles["container"]}`}>
        <h2 className={styles.title}>Our service.</h2>
      </div>
      <div className={`${styles.contain} custom_container custom_container--xxxl`}>
      {/* <Carousel /> */}
      {/* <Carousel2/> */}
      <Carousel3/>
      </div>
    </>
  )
}