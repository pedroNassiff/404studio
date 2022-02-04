import styles from "./styles.module.scss";
import Link from "next/link"
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
          <div className={`${styles["section"]} aspect_ratio aspect_ratio--16by9`}>
            {
              item.video? (
                <div className={`aspect_ratio__item`}>
                  <video src={`/proyects/${props.props.description}/videos/${item.link}`} autoPlay loop muted={true} className={styles.img}>
                    <source src={`/proyects/${props.props.description}/videos/${item.link}`} type="video/mp4" ></source>
                  </video>
                </div>
              )
              :
              (<div className={`aspect_ratio__item`}>
                <img src={`/proyects/${props.props.description}/photos/${item.link}`} alt="" className={styles.img} />
              </div>
              )
            }
          </div>
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
