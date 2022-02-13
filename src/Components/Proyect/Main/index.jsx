import styles from "./styles.module.scss";
import Link from "next/link"
import Multimedia from "../Multimedia"
import {proyects} from "../../../../const"

const index = (props) => {
  const linkId = props.props.id 

  const NextProyect = linkId + 1
  
  const MaxProyects = proyects.length 
  

  return (
    <div>
      <div className={`custom_container custom_container--xxxl`}>
        <div className={styles.wrap}>
      {
        props.props.content.map(item=>(
          <Multimedia video={item.video} description={props.props.description} link={item.link} object_fit={item.object_fit} object_position={item.object_position} id={item.id}/>
         ))
      }
        </div>
      </div>      
      {
        NextProyect > MaxProyects ?(
          <button disabled className={`${styles["btn--disable"]}`}>
            <h6 className={`${styles["next_proyect__link--disable"]}`}>Next Proyect</h6>
          </button>
          ):(
          <button className={styles.btn}>
            <Link href={`/proyect/${NextProyect}`} className={styles.NextProyect}  >
              <h6 className={`${styles["next_proyect__link"]}`}>Next Proyect</h6>
            </Link>
          </button>
          )
        }      
    </div>
  )
}

export default index
