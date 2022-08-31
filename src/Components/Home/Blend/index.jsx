import { useEffect } from "react";
import styles from "./styles.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Index = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      `#blend_video`,
      1,
      {
        scale: 0.7,
      },
      {
        scale: 1.1,
        scrollTrigger: {
          trigger: `#blend_video`,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div
      className={`${styles["blend__container"]} custom_container custom_container--xxxl `}
      id="contain"
    >
      <div className={`${styles["blend__wrap"]}`} id="blend_video">
        <div className={styles["blend__frame"]}></div>

        <div className={``}>
          <video className={`${styles["blend__video"]}`} autoPlay muted loop playsInline>
            <source src="/about_h.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Index;
