import styles from "./styles.module.scss"

const index = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.menu}>
        <div className={styles.menu__linear}></div>
        <div className={styles.menu__linear}></div>
        <div className={styles.menu__linear}></div>      
      </div>
    </div>
  )
}

export default index
