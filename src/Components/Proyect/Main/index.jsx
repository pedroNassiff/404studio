import styles from "./styles.module.scss";
import Link from "next/Link"
import {proyects} from "../../../../const"




const index = (props) => {
const linkId = props.props.id 
const NextProyect = linkId + 1

const MaxProyects = proyects.length 

  console.log(linkId,MaxProyects)

  return (
    <div>
      <div>
        <img src="/gray.jpg" alt="" className={styles.images} /> 
      </div>

      <div className={styles.section_two}>
        <img src="/gray.jpg" alt="" className={styles.image__two} />
        <img src="/gray.jpg" alt="" className={styles.image__three} />
      </div>
      
      <div className={styles.section_three}>
        <img src="/gray.jpg" alt="" className={styles.image__four} />
      </div>  
      
      <div className={styles.section_four}>
        <img src="/gray.jpg" alt="" className={styles.image__five} />
      </div>  
      
      <div className={styles.section_five}>
        <img src="/gray.jpg" alt="" className={styles.image__six} />
      </div>  
      
      <div className={styles.section_two}>
        <img src="/gray.jpg" alt="" className={styles.image__two} />
        <img src="/gray.jpg" alt="" className={styles.image__three} />
      </div>


      {
        NextProyect > MaxProyects ?(
          <button disabled className={styles.btn}>
        <h6 className={styles["next_proyect__link"]}>Next Proyect</h6>
      </button>
          ):(
            <button className={styles.btn}>
          <Link href={`/proyect/${NextProyect}`} className={styles.NextProyect}  >
            <h6 className={styles["next_proyect__link"]}>Next Proyect</h6>
          </Link>
      </button>

          )
      }

      
    </div>
  )
}

export default index
