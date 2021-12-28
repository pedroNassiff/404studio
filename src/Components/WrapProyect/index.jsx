import styles from "./styles.module.scss"
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const index = (props) => {
  return (
    <div className={`${styles["wrap"]}`}>
      <div className={`${styles["border"]} ${styles["border--left"]}`}></div>
      <img src={`/images/${props.images}`} className={styles.image}/>

      <div className={styles["background"]}>
        <p className={styles["text"]}>{props.description}</p>

        <div className={styles["icon"]}>></div>
      </div>
    </div>
  )
}

export default index
