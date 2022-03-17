import styles from "./styles.module.scss";
import Fade from "react-reveal/Fade";

import Link from "next/link";

const Index = (props) => {
  return (
    <Fade>
      <div className={`${styles["wrap_proyects"]}`} id={`proyect_${props.id}`}>
        <Link
          href={`/proyect/${props.id}`}
          className={`${styles["wrap_proyects__link"]}`}
        >
          <a>
            <img
              src={`/images/${props.images}`}
              className={styles["wrap_proyects__images"]}
              loading={"lazy"}
              alt="imagen"
            />

            <div
              className={
                props.left
                  ? `${styles["wrap_proyects__frame"]} ${styles["wrap_proyects__frame--left"]}`
                  : `${styles["wrap_proyects__frame"]} ${styles["wrap_proyects__frame--right"]}`
              }
            ></div>

            <div className={styles["background"]}>
              <p
                className={`${styles[props.sm]} ${styles["text"]}`}
                dangerouslySetInnerHTML={{ __html: props.description }}
              ></p>
            </div>
          </a>
        </Link>
      </div>
    </Fade>
  );
};

export default Index;
