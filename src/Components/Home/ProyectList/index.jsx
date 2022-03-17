import styles from "./styles.module.scss";
import WrapProyect from "../WrapProyect";
import Masonry from "react-masonry-css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

export default function ProyectList() {
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
          <WrapProyect
            left={true}
            images="anima3.jpeg"
            description="Anima"
            id={1}
            sm="one"
          />

          <WrapProyect
            left={true}
            images="topm5.JPG"
            description="Top<br/>Me<br/>ga"
            id={2}
            sm="two"
          />

          <WrapProyect
            left={false}
            images="harlemsport1.jpg"
            description="Har<br/>lem<br/> Spor<br/>ts<br/>we<br/>ar"
            id={3}
            sm="three"
          />

          <WrapProyect
            left={false}
            images="rom1.jpg"
            description="Ro<br/>mer<br/>ia<br/> de<br/> las<br/> ro<br/>sas"
            id={4}
            sm="four"
          />

          <WrapProyect
            left={true}
            images="harlem3.jpg"
            description="Ha<br/>rlem<br/> Ba<br/>r"
            id={5}
            sm="five"
          />

          <WrapProyect
            left={false}
            images="aljibe3.png"
            description="El aljibe<br/> de Mendez"
            id={6}
            sm="six"
          />

          <WrapProyect
            left={true}
            images="ranchov2.jpeg"
            description="Ran<br/>cho<br/> Vie<br/>jo"
            id={7}
            sm="seven"
          />

          <WrapProyect
            left={false}
            images="marren2.jpg"
            description="Ma<br/>rr<br/>en"
            id={8}
            sm="eight"
          />

          <WrapProyect
            left={true}
            images="moda2.jpg"
            description="Mo<br/>da<br/> 1"
            id={9}
            sm="nine"
          />

          <WrapProyect
            left={true}
            images="somosc1.jpg"
            description="So<br/>mos<br/> Cho<br/>la"
            id={10}
            sm="ten"
          />

          <WrapProyect
            left={false}
            images="WhatsApp Image 2019-01-08 at 22.09.32-4.jpeg"
            description="Paprika"
            id={11}
            sm="eleven"
          />

          <WrapProyect
            left={true}
            images="mirasoles1.jpg"
            description="NUT<br/> Mira<br/>so<br/>les"
            id={12}
            sm="twelve"
          />
        </Masonry>
      </div>
    </div>
  );
}
