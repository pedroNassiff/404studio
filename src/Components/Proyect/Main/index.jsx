import styles from "./styles.module.scss";
import Link from "next/link";
import Plantilla2 from "../Plantilla2";

import { proyects } from "../../../../const";

const Index = (props) => {
  const linkId = props.props.id;

  const NextProyect = linkId + 1;

  const MaxProyects = proyects.length;

  return (
    <div>
      <div className={`custom_container custom_container--xxxl`}>
        <div className={styles.wrap}>
          {props.props.content.map((item) => (
            <>
              {props.props.plantilla === 2 && (
                <Plantilla2
                  video={item.video}
                  description={props.props.description}
                  link={item.link}
                  id={item.id}
                  key={item.id}
                  title={props.props.title}
                  ratio={item.ratio}
                  size={item.size}
                  heightBackground={item.heightBackground}
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
          <Link href={`/proyect/${NextProyect}`} passHref className={styles.NextProyect}>
            <h6 className={styles["next_proyect__link"]}>Next Proyect</h6>
          </Link>
        </button>
      )}
    </div>
  );
};

export default Index;
