import styles from "./styles.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useEffect } from "react";

const Index = ({ id, images, left, title, font_title }) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      `#wrap_proyects_${id}`,
      1,
      {
        opacity: 0,
        duration: 0.5,
      },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: `#wrap_proyects_${id}`,
          start: "top 90%",
          end: "bottom bottom",
        },
      }
    );
  }, []);
  return (
    <div id={`proyect_${id}`} key={id}>
      <div className={`${styles["wrap_proyects"]}`} id={`wrap_proyects_${id}`}>
        <Link href={`/proyect/${id}`} className={`${styles["wrap_proyects__link"]}`}>
          <a>
            <img
              src={`/images/${images}`}
              className={styles["wrap_proyects__images"]}
              loading={"lazy"}
              alt="imagen"
            />

            <div
              className={
                left
                  ? `${styles["wrap_proyects__frame"]} ${styles["wrap_proyects__frame--left"]}`
                  : `${styles["wrap_proyects__frame"]} ${styles["wrap_proyects__frame--right"]}`
              }
            ></div>
            <div className={styles["background"]}>
              <p
                className={`${styles[font_title]} ${styles["text"]}`}
                dangerouslySetInnerHTML={{ __html: title }}
              ></p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Index;
