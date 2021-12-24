import styles from "./styles.module.scss";

const index = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About us</h2>
      <div className={styles.wrap}>
        <img src="/gray.jpg" alt="" className={styles.images} />
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda non eius! Ex molestias rem sapiente iure ullam distinctio tempore, voluptates quo illum itaque adipisci. Incidunt maxime quia saepe numquam.</p>
      </div>
    </div>
  )
}

export default index
