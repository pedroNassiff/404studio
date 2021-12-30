import styles from "./styles.module.scss"

const index = (props) => {
  return (
    <div className={styles.wrap}>
        <div className={props.left ? `${styles["text"]} ${styles["text--left"]}`:`${styles["text"]} ${styles["text--right"]}`}>
          <h4 className={styles.title_one}>{props.title}</h4>
          <h6 className={styles.title}>{props.name}</h6>
          <p className={props.left ? `${styles["description"]} ${styles["description--left"]}`:`${styles["description"]} ${styles["description--right"]}`}>{props.description}</p>
        </div>
        <div className={props.left ? `${styles["container_image"]} ${styles["container_image--left"]}`:`${styles["container_image"]} ${styles["container_image--right"]}`}>
          <div className={props.left ? `${styles["border"]} ${styles["border--left"]}`:`${styles["border"]} ${styles["border--right"]}`}></div>
          <div className={styles.image}>
            <img src={props.img} alt="" className={styles.img} />
          </div>
        </div>
      </div>
  )
}

export default index
