import styles from "./styles.module.scss";
import Slide from "react-reveal/Slide";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.3]);
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
        <div className={`${styles["about_right"]} aspect_ratio aspect_ratio--3by4`}>
          <div className={`${styles["about_right__frame"]}`}></div>
          <video
            src={`/about_v.mov`}
            autoPlay
            loop
            muted={true}
            className={`${styles["img"]}`}
          >
            <source src={`/about_v.mov`} type="video/mp4"></source>
          </video>
        </div>

        <div className={styles["about_left"]}>
          <div></div>

          <div className={styles["about_left__wrap"]}>
            <div className={styles["about_left__cont"]}>
              <Slide bottom text delay={1000}>
                <h2 className={`${styles["about_left__subtitle"]}`}>Don`t blend</h2>
              </Slide>
            </div>
            <p className={`${styles["about_left__description"]}`}>
              <span className={`${styles["cont_1"]}`}>
                Somos la banda de Garage, los graffitis de penumbra, la gambeta de
                potrero.
              </span>
              <br />
              <span className={`${styles["cont_2"]}`}>
                Confiamos más en la intuición que en los concejos. Cuidamos a los nuestros
                y siempre
              </span>
              <br />
              <span className={`${styles["cont_3"]}`}>
                nos sumamos a empujar. No negociamos principios y confiamos en nuestras
                ideas. No
              </span>
              <span className={`${styles["cont_4"]}`}>
                olvidamos de donde somos y tenemos claro donde vamos.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
