import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Index = () => {
  const [positionY, setPositionY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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
  useEffect(() => {
    if (typeof window !== "undefined") {
      let scroll = 0;
      window.addEventListener('scroll', (event, scroll) => {

        scroll = window.scrollY;
        setPositionY(scroll)
        if (scroll >= 4000) {
          console.log("scroll", scroll);
          setIsVisible(true)
          console.log("isVisible", isVisible);
        }
      })
    }
  }, []);
  return (
    <div
      className={`${styles["blend__container"]} custom_container custom_container--xxxl `}
      id="contain"
    >
      <div className={`${styles["blend__wrap"]}`} id="blend_video">
        <div className={styles["blend__frame"]}></div>

        <div className={``}>
        {isVisible && 
         <video className={`${styles["blend__video"]}`} autoPlay muted loop playsInline>
         <source src="/about_h.mp4" type="video/mp4" />
       </video>
        }
         
        </div>
      </div>
    </div>
  );
};

export default Index;
