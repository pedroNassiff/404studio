import styles from "./styles.module.scss";

const index = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About us</h2>
      <div className={styles.container_two}>

        <div>
          <div className={styles.right}>
            <div className={styles["border"]}></div>
            <video src="/about_v.mov" className={styles.video} autoPlay muted loop></video>
          </div>
        </div>

        <div className={styles.left}>
          <div></div>
          <div className={styles.blend}>
            <h2 className={`${styles["subtitle"]}`}>Don't blend</h2>
            <p className={`${styles["description"]}`}>Somos la banda de Garage, los graffitis de penumbra, la gambeta de potrero. Confiamos más en la intuición que en los concejos. Cuidamos a los nuestros y siempre nos sumamos a empujar. No negociamos principios y confiamos en nuestras ideas. No olvidamos de donde somos y tenemos claro donde vamos.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
