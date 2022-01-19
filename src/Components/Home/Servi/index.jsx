import Carousel3 from "../Carousel3"
import styles from "./styles.module.scss"

export default function Index() {
  return (
    <div className={`${styles["servi"]}`} >
      <div className={`${styles["servi__container"]}`}>
        
        <h2 className={`${styles["servi__title"]}`}>Our service.</h2>
      </div>

      <div className={`${styles["servi__wrap"]} custom_container custom_container--xxxl`}>
        <Carousel3/>        
      </div>
    </div>
  )
}