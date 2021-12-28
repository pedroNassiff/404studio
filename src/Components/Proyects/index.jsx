import styles from "./styles.module.scss"
import WrapProyect from "../WrapProyect"

export default function Index() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Proyects.</h2>
      <div className={styles.container__proyects}>
        <WrapProyect left={true} images="aljibe3.png" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor rhoncus libero, a laoreet eros vehicula efficitur. Sed magna metus, feugiat sed fermentum at, ultricies id felis"/>
        <WrapProyect left={false} images="harlemsport1.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor rhoncus libero, a laoreet eros vehicula efficitur. Sed magna metus, feugiat sed fermentum at, ultricies id felis"/>
        <WrapProyect left={true} images="topm5.JPG" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor rhoncus libero, a laoreet eros vehicula efficitur. Sed magna metus, feugiat sed fermentum at, ultricies id felis"/>
        <WrapProyect left={false} images="rom1.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor rhoncus libero, a laoreet eros vehicula efficitur. Sed magna metus, feugiat sed fermentum at, ultricies id felis"/>
        <WrapProyect left={true} images="harlem3.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor rhoncus libero, a laoreet eros vehicula efficitur. Sed magna metus, feugiat sed fermentum at, ultricies id felis"/>
        <WrapProyect left={true} images="ranchov2.jpeg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor rhoncus libero, a laoreet eros vehicula efficitur. Sed magna metus, feugiat sed fermentum at, ultricies id felis"/>
        <WrapProyect left={false} images="anima3.jpeg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor rhoncus libero, a laoreet eros vehicula efficitur. Sed magna metus, feugiat sed fermentum at, ultricies id felis"/>
        <WrapProyect left={true} images="somosc1.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor rhoncus libero, a laoreet eros vehicula efficitur. Sed magna metus, feugiat sed fermentum at, ultricies id felis"/>
        <WrapProyect left={false} images="marren2.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor rhoncus libero, a laoreet eros vehicula efficitur. Sed magna metus, feugiat sed fermentum at, ultricies id felis"/>
        <WrapProyect left={true} images="moda2.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor rhoncus libero, a laoreet eros vehicula efficitur. Sed magna metus, feugiat sed fermentum at, ultricies id felis"/>
        <WrapProyect left={true} images="mirasoles1.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor rhoncus libero, a laoreet eros vehicula efficitur. Sed magna metus, feugiat sed fermentum at, ultricies id felis"/>
        <WrapProyect left={false} images="WhatsApp Image 2019-01-08 at 22.09.32-4.jpeg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor rhoncus libero, a laoreet eros vehicula efficitur. Sed magna metus, feugiat sed fermentum at, ultricies id felis"/>

        {/* <div className={`${styles["wrap"]}`}>
          <div className={`${styles["border"]} ${styles["border--right"]}`}></div>
          <img src="/images/harlemsport1.jpg" className={styles.image}/>
        </div> */}
      </div>
    </div>
  )
}
