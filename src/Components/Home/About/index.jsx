import { useEffect } from "react";
import styles from "./styles.module.scss";
import { Slide } from "react-reveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; 

const Index = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#contain`,
        start: "top top",
        end: "100% 100%",
        scrub: true,
        markers: true,
        pin: true,
      },
    });
    tl.to(".img_3", { y: "-70vh", border: "1px solid red", duration: 4 });
    // tl.to(".img_4", { y: "-50vh", border: "1px solid red", duration: 4 });
    tl.to(".img_2", { scale: 1.17 });
  }, []);

  return (
    <div className={styles["about"]}>
      <div className={`${styles["cont"]}`}>
        <Slide bottom text delay={1000}>
          <h2 className={`${styles["about__title"]}`}>About us.</h2>
        </Slide>
      </div>
      <div className={`cont `}>
        <div id="contain" className={`contain`}>
          <div className={`${styles["container_animacion"]} img_3`}>
            <div
              className={`${styles["about__container"]} custom_container custom_container--xxxl`}
            >
              <div className={`${styles["about_right"]} img_2`} id="about_video">
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

              <div className={`${styles["about_left"]} `}>
                <div></div>

                <div className={styles["about_left__wrap"]}>
                  <div className={styles["about_left__cont"]}>
                    <Slide bottom text delay={1000}>
                      <h2 className={`${styles["about_left__subtitle"]}`}>Don`t blend</h2>
                    </Slide>
                  </div>
                  <p className={`${styles["about_left__description"]}`}>
                    Somos la banda de Garage, los graffitis de penumbra, la gambeta de
                    potrero. Confiamos más en la intuición que en los concejos. Cuidamos a
                    los nuestros y siempre nos sumamos a empujar. No negociamos principios
                    y confiamos en nuestras ideas. No olvidamos de donde somos y tenemos
                    claro donde vamos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
