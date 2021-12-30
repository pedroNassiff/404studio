import styles from "./styles.module.scss"
import WrapProyect from "../WrapProyect"
import {proyects} from "../../../../const"

export default function ProyectList() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Proyects.</h2>
      <div className={styles.container__proyects}>
        {
          proyects.map(item =>
            <WrapProyect left={item.left} images={item.images} description={item.description} id={item.id} key={item.id}/>
          )
        }
      </div>
    </div>
  )
}
