import styles from "./styles.module.scss";
import { Fade } from "react-reveal";

import Link from "next/link";

const Index = ({ id, images, left, title, font_title }) => {
  return (
    <div id={`proyect_${id}`} key={id}>
      <Fade>
        <div className={`${styles["wrap_proyects"]}`}>
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
      </Fade>
    </div>
  );
};

export default Index;
