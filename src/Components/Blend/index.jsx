import styles from "./styles.module.scss";

const index = () => {
  return (
    <div className={styles.container} >
      <h2 className={styles.title}>Don't blend</h2>
      <p className={styles.description}>Somos la banda de Garage, los graffitis de penumbra, la gambeta de potrero. Confiamos más en la intuición que en los concejos. Cuidamos a los nuestros y siempre nos sumamos a empujar. No negociamos principios y confiamos en nuestras ideas. No olvidamos de donde somos y tenemos claro donde vamos.</p>
      <img src="/gray.jpg" alt="" className={styles.image} />
    </div>
  )
}

export default index
