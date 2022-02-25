import styles from "./styles.module.scss";
import Link from "next/link";
import Multimedia from "../Multimedia";
import Animation from "../Animation";
import Animationfn from "../Animationfn";
import Plantilla2 from "../Plantilla2";
import Plantilla3 from "../Plantilla3";
import Plantilla4 from "../Plantilla4";

import { proyects } from "../../../../const";

const index = (props) => {
  const linkId = props.props.id;

  const NextProyect = linkId + 1;

  const MaxProyects = proyects.length;

  return (
    <div>
      <div className={`custom_container custom_container--xxxl`}>
        <div className={styles.wrap}>
          {props.props.content.map((item) => (
            // <Multimedia video={item.video} description={props.props.description} link={item.link} object_fit={item.object_fit} object_position={item.object_position} id={item.id}/>
            // <Animation video={item.video} description={props.props.description} link={item.link} object_fit={item.object_fit} object_position={item.object_position} id={item.id}/>
            <>
              {props.props.plantilla === 1 && (
                <Animationfn
                  video={item.video}
                  description={props.props.description}
                  link={item.link}
                  object_fit={item.object_fit}
                  object_position={item.object_position}
                  id={item.id}
                />
              )}
              {props.props.plantilla === 2 && (
                <Plantilla2
                  video={item.video}
                  description={props.props.description}
                  link={item.link}
                  object_fit={item.object_fit}
                  object_position={item.object_position}
                  id={item.id}
                />
              )}
              {props.props.plantilla === 3 && (
                <Plantilla3
                  video={item.video}
                  description={props.props.description}
                  link={item.link}
                  object_fit={item.object_fit}
                  object_position={item.object_position}
                  id={item.id}
                />
              )}
              {props.props.plantilla === 4 && (
                <Plantilla4
                  video={item.video}
                  description={props.props.description}
                  link={item.link}
                  object_fit={item.object_fit}
                  object_position={item.object_position}
                  id={item.id}
                />
              )}
            </>
          ))}
        </div>
      </div>

      {NextProyect > MaxProyects ? (
        <button disabled className={styles.btn}>
          <h6 className={styles["next_proyect__link"]}>Next Proyect</h6>
        </button>
      ) : (
        <button className={styles.btn}>
          <Link href={`/proyect/${NextProyect}`} className={styles.NextProyect}>
            <h6 className={styles["next_proyect__link"]}>Next Proyect</h6>
          </Link>
        </button>
      )}
    </div>
  );
};

export default index;
