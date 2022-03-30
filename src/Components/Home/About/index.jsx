import { useEffect } from "react";
import styles from "./styles.module.scss";
import Slide from "react-reveal/Slide";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Index = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      `#about_video`,
      1,
      {
        scale: 0.8,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: `#about_video`,
          start: "center center",
          end: "bottom top",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      `#text`,
      1,
      {
        opacity: 0,
        y: 250,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: `#text`,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);
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
        <div
          className={`${styles["about_right"]} aspect_ratio aspect_ratio--3by4`}
          id="about_video"
        >
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
            <p className={`${styles["about_left__description"]}`} id="text">
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
