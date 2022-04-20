import styles from "./styles.module.scss";

const Index = ({ left, title, name, description, img, id }) => {
  return (
    <div className={styles["card"]} key={id}>
      <div className={styles["card__container"]}>
        <div
          className={
            left
              ? `${styles["card_text"]} ${styles["card_text--left"]}`
              : `${styles["card_text"]} ${styles["card_text--right"]}`
          }
        >
          <h4 className={styles["card__title"]}>{title}</h4>

          <h6 className={styles["card__name"]}>{name}</h6>

          <p
            className={
              left
                ? `${styles["card__abilities"]} ${styles["card__abilities--left"]}`
                : `${styles["card__abilities"]} ${styles["card__abilities--right"]}`
            }
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>

        <div
          className={
            left
              ? `${styles["card_image"]} aspect_ratio aspect_ratio--1by1 ${styles["card_image--left"]}`
              : `${styles["card_image"]} aspect_ratio aspect_ratio--1by1 ${styles["card_image--right"]}`
          }
        >
          <div
            className={
              left
                ? `${styles["card__frame"]} ${styles["card__frame--left"]}`
                : `${styles["card__frame"]} ${styles["card__frame--right"]}`
            }
          ></div>

          <div className={`aspect_ratio__item object_fit_cover`}>
            <div className={`${styles["image__wrap"]}`}>
              <img src={img} alt="" className={`${styles["image"]}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
