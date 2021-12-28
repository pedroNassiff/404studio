import styles from "./styles.module.scss"
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const index = (props) => {
  return (
    <div className={`${styles["wrap"]}`}>
      <div className={ props.left ? `${styles["border"]} ${styles["border--left"]}`: `${styles["border"]} ${styles["border--right"]}` }></div>
      <img src={`/images/${props.images}`} className={styles.image}/>

      <div className={styles["background"]}>
        <p className={styles["text"]}>{props.description}</p>

        {/* <ArrowForwardIosIcon></ArrowForwardIosIcon> */}

        {/* <div className={styles["icon"]}>></div> */}
      </div>
    </div>
  )
}

export default index
