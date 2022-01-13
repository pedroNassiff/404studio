import styles from "./styles.module.scss";

const index = () => {
  return (
    <div className={styles.container} > 
      <div className={styles.content}>
        <div className={styles.wrap}>
          <div className={styles.border}></div>
          <video src="/about_h.mp4" className={styles.video} autoPlay muted loop></video>
        </div> 
      </div>
    </div>
  )
}

export default index
