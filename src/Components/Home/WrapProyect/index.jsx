import styles from "./styles.module.scss";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from "next/Link"

const index = (props) => {
  return (
    <div className={`${styles["wrap"]}`}>
      {/* <p className={`${styles[props.sm]}`} dangerouslySetInnerHTML={{__html: props.description}}></p> */}
      <Link href={`/proyect/${props.id}`}>
        <a >
          <img src={`/images/${props.images}`} className={styles.image}/>
          <div className={ props.left ? `${styles["border"]} ${styles["border--left"]}`: `${styles["border"]} ${styles["border--right"]}` }></div>

          <div className={styles["background"]}>
            <p className={`${styles[props.sm]} ${styles["text"]}`} 
            dangerouslySetInnerHTML={{__html: props.description}}            
            ></p>            
            <ArrowForwardIosIcon className={styles.arrow}></ArrowForwardIosIcon>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default index