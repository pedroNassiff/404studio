import styles from "./styles.module.scss";

const index = () => {
  return (
    <div className={styles["about"]}>
      <h2 className={styles["about__title"]}>About us</h2>

      <div
        className={`${styles["about__container"]} custom_container custom_container--xxxl`}
      >
        <div className={`${styles["about_right"]} aspect_ratio aspect_ratio--9by16`}>
          <div className={`${styles["about_right__frame"]} `}></div>

          <div className={`aspect_ratio__item object_fit_cover `}>
            <video
              src="/about_v.mov"
              className={`${styles["about_right__video"]}`}
              autoPlay
              muted
              loop
            >
              <source src="/about_v.mov" type="video/mov"></source>
            </video>
          </div>
        </div>

        <div className={styles["about_left"]}>
          <div></div>

          <div className={styles["about_left__wrap"]}>
            <h2 className={`${styles["about_left__subtitle"]}`}>Don't blend</h2>
            <p className={`${styles["about_left__description"]}`}>
              Somos la banda de Garage, los graffitis de penumbra, la gambeta de potrero.
              Confiamos más en la intuición que en los concejos. Cuidamos a los nuestros y
              siempre nos sumamos a empujar. No negociamos principios y confiamos en
              nuestras ideas. No olvidamos de donde somos y tenemos claro donde vamos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
