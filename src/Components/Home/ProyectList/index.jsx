import styles from "./styles.module.scss";
import WrapProyect from "../WrapProyect";
import Masonry from "react-masonry-css";
import { Slide } from "react-reveal";
import { proyects } from "../../../../const";
import { useEffect, useState } from "react";

function ProyectList() {
  const breakpoints = {
    default: 3,
    940: 2,
  };
  return (
    <div className={`${styles["proyect_list"]} `}>
      <div className={`${styles["cont"]}`}>
        <Slide bottom text delay={1000}>
          <h2 className={`${styles["proyect_list__title"]}`} id="proyectList">
            Our Proyects.
          </h2>
        </Slide>
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
