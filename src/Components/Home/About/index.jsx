import styles from "./styles.module.scss";
import Slide from "react-reveal/Slide";
import AnimationZoom from "../../Shared/AnimationZoom";

const Index = () => {
  return (
    <div className={styles["about"]}>
      <div className={`${styles["cont"]}`}>
        <Slide bottom text delay={1000}>
          <h2 className={`${styles["about__title"]}`}>About us</h2>
        </Slide>
      </div>

      <div
        className={`${styles["about__container"]} custom_container custom_container--xxxl`}
      >
        <AnimationZoom link={"/about_v.mov"} id={1} item={false} ratio={"9by16"} />

        <div className={styles["about_left"]}>
          <div></div>

          <div className={styles["about_left__wrap"]}>
            <div className={styles["about_left__cont"]}>
              <Slide bottom text delay={1000}>
                <h2 className={`${styles["about_left__subtitle"]}`}>Don`t blend</h2>
              </Slide>
            </div>
            <p className={`${styles["about_left__description"]}`}>
              Somos la banda de Garage, los graffitis de penumbra, la gambeta de potrero.
              Confiamos más en la intuición que en los concejos. Cuidamos a los nuestros y
              siempre nos sumamos a empujar. No negociamos principios y confiamos en
              nuestras ideas. No olvidamos de donde somos y tenemos claro donde vamos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
