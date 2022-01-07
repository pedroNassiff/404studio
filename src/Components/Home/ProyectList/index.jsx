import styles from "./styles.module.scss"
import WrapProyect from "../WrapProyect"
import {proyects} from "../../../../const"
import Masonry from 'react-masonry-css'

export default function ProyectList() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Proyects.</h2>
      <div className={styles.container__proyects}>
        <Masonry
          breakpointCols={3}
          width={'1800px'}
          className={styles.my_masonry_grid}
          columnClassName={styles.my_masonry_grid_column}>
          {
            proyects.map(item =>
              <WrapProyect left={item.left} images={item.images} description={item.description} id={item.id} key={item.id}/>
              )
            }
        </Masonry>
      </div>
      {/* <div className={styles.container__proyects}>
        {
          proyects.map(item =>
            <WrapProyect left={item.left} images={item.images} description={item.description} id={item.id} key={item.id}/>
          )
        }
      </div> */}
    </div>
  )
}


// ---------------------------------------

