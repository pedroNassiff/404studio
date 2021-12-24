import styles from "./styles.module.scss"

export default function Index() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Proyects.</h2>
      <div className={styles.container__proyects}>
        <img src="/images/img1.jpg" className={styles.image}/>
        <img src="/images/img2.png" className={styles.image}/>
        <img src="/images/img3.png" className={styles.image}/>
        <img src="/images/img4.jpg" className={styles.image}/>
        <img src="/images/img5.jpg" className={styles.image}/>
        <img src="/images/img6.jpg" className={styles.image}/>
        <img src="/images/img7.jpg" className={styles.image}/>
        <img src="/images/img8.jpg" className={styles.image}/>
        <img src="/images/img9.jpg" className={styles.image}/>
        <img src="/images/img10.jpeg" className={styles.image}/>
        <img src="/images/img11.jpeg" className={styles.image}/>
      </div>
    </div>
  )
}
