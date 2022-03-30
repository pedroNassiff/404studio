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
        scale: 0.8,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: `#blend_video`,
          start: "center center",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div
      className={`${styles["blend__container"]} custom_container custom_container--xxxl`}
    >
      <div className={`${styles["blend__wrap"]}`} id="blend_video">
        <div className={styles["blend__frame"]}></div>

        <div className={``}>
          <video className={`${styles["blend__video"]}`} autoPlay muted loop>
            <source src="/about_h.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Index;
