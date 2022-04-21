import styles from "./styles.module.scss";
import WrapProyect from "../WrapProyect";
import Masonry from "react-masonry-css";
import { proyects } from "../../../../const";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function ProyectList() {
  const breakpoints = {
    default: 3,
    940: 2,
  };

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      `#proyect_list__title`,
      1,
      {
        y: 200,
        duration: 0.5,
      },
      {
        y: 0,
        duration: 0.5,

        scrollTrigger: {
          trigger: `#proyect_list__title`,
          start: "top 80%",
          end: "bottom bottom",
        },
      }
    );
  }, []);

  return (
    <div className={`${styles["proyect_list"]} `}>
      <div className={`${styles["cont"]}`} id="cont">
        <h2 className={`${styles["proyect_list__title"]}`} id="proyect_list__title">
          Our Proyects.
        </h2>
      </div>

      <div
        className={`${styles["proyect_list__my_mansory"]} custom_container custom_container--xxxl`}
      >
        <Masonry
          breakpointCols={breakpoints}
          className={styles["my_masonry_grid"]}
          columnClassName={styles["my_masonry_grid_column"]}
        >
          {proyects.map((item) => (
            <WrapProyect
              left={item.left}
              images={item.images}
              title={item.title}
              id={item.id}
              font_title={item.font_title}
              key={item.id}
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default ProyectList;
