import styles from "./styles.module.scss";

const index = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.wrap}>
          <img src="/gray.jpg" alt="" className={styles.images} />         
        </div>
      </div>

      <div className={styles.left}>
        <h2 className={styles.title}>About us</h2>
        <div>
          <h2>Don't blend</h2>
          <p>Somos la banda de Garage, los graffitis de penumbra, la gambeta de potrero. Confiamos más en la intuición que en los concejos. Cuidamos a los nuestros y siempre nos sumamos a empujar. No negociamos principios y confiamos en nuestras ideas. No olvidamos de donde somos y tenemos claro donde vamos.</p>
        </div>
      </div>
    </div>
  )
}

export default index
