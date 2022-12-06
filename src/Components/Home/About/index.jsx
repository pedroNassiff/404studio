import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { Slide } from "react-reveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Index = () => {
  const [positionY, setPositionY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      `#about_video`,
      1,
      {
        scale: 0.8,
      },
      {
        scale: 1.2,
        scrollTrigger: {
          trigger: `#about_video`,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      `#about__title`,
      1,
      {
        y: 200,
        duration: 0.5,
      },
      {
        y: 0,
        duration: 0.5,

        scrollTrigger: {
          trigger: `#about__title`,
          start: "top 80%",
          end: "bottom bottom",
        },
      }
    );

    gsap.fromTo(
      `#about_left__subtitle`,
      1,
      {
        y: 200,
        duration: 0.5,
      },
      {
        y: 0,
        duration: 0.5,

        scrollTrigger: {
          trigger: `#about_left__subtitle`,
          start: "top 90%",
          end: "bottom bottom",
        },
      }
    );
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let scroll = 0;
      let width = 0;

      window.addEventListener('scroll', (event, scroll) => {

         scroll = window.scrollY;
        width = window.innerWidth
        setPositionY(scroll)
        if(width >= 500 ) {
          if (scroll >= 6000) {
            setIsVisible(true)
          }
        }else {
          if (scroll >= 2180) {
            setIsVisible(true)
          }
        }
      })
    }
  }, []);

  return (
    <div className={styles["about"]}>
      <div className={`${styles["cont"]}`}>
        <h2 className={`${styles["about__title"]}`} id={`about__title`}>
          About us.
        </h2>
      </div>

      <div
        className={`${styles["about__container"]} custom_container custom_container--xxxl`}
      >
        <div
          className={`${styles["about_right"]} aspect_ratio aspect_ratio--3by4`}
          id="about_video"
        >
          <div className={`${styles["about_right__frame"]}`}></div>
          {isVisible &&
            <video
              src={`/about_v.mov`}
              autoPlay
              loop
              muted={true}
              playsInline
              className={`${styles["img"]}`}
            >
              {/* <source src={`/about_v.mov`} type="video/mp4"></source> */}
            </video>
          }

        </div>

        <div className={styles["about_left"]}>
          <div></div>

          <div className={styles["about_left__wrap"]}>
            <div className={styles["about_left__cont"]}>
              <h2
                className={`${styles["about_left__subtitle"]}`}
                id={`about_left__subtitle`}
              >
                Don`t blend
              </h2>
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
