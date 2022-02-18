import styles from "./styles.module.scss";

const index = (props) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card__container"]}>
        <div
          className={
            props.left
              ? `${styles["card_text"]} ${styles["card_text--left"]}`
              : `${styles["card_text"]} ${styles["card_text--right"]}`
          }
        >
          <h4 className={styles["card__title"]}>{props.title}</h4>

          <h6 className={styles["card__name"]}>{props.name}</h6>

          <p
            className={
              props.left
                ? `${styles["card__abilities"]} ${styles["card__abilities--left"]}`
                : `${styles["card__abilities"]} ${styles["card__abilities--right"]}`
            }
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></p>
        </div>

        <div
          className={
            props.left
              ? `${styles["card_image"]} aspect_ratio aspect_ratio--1by1 ${styles["card_image--left"]}`
              : `${styles["card_image"]} aspect_ratio aspect_ratio--1by1 ${styles["card_image--right"]}`
          }
        >
          <div
            className={
              props.left
                ? `${styles["card__frame"]} ${styles["card__frame--left"]}`
                : `${styles["card__frame"]} ${styles["card__frame--right"]}`
            }
          ></div>

          <div className={`aspect_ratio__item object_fit_cover`}>
            <div className={`${styles["image__wrap"]}`}>
              <img src={props.img} alt="" className={`${styles["image"]}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
