import styles from "./styles.module.scss";
import AnimationZoom from "../../Shared/AnimationZoom";

const Index = () => {
  return (
    <div
      className={`${styles["blend__container"]} custom_container custom_container--xxxl`}
    >
      <AnimationZoom link={"/about_h.mp4"} id={2} item={true} ratio={"16by9"} />

      {/* <div className={`${styles["blend__wrap"]}  aspect_ratio aspect_ratio--16by9`}>
        <div className={styles["blend__frame"]}></div>

        <div className={`aspect_ratio__item object_fit_cover`}>
          <video className={`${styles["blend__video"]}`} autoPlay muted loop>
            <source src="/about_h.mp4" type="video/mp4" />
          </video>
        </div>
      </div> */}
    </div>
  );
};

export default Index;
