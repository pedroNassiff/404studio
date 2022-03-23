import styles from "./styles.module.scss";
// import AnimationZoom from "../../Shared/AnimationZoom";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  return (
    <div
      className={`${styles["blend__container"]} custom_container custom_container--xxxl`}
    >
      {/* <AnimationZoom link={"/about_h.mp4"} id={2} item={true} ratio={"16by9"} /> */}

      <div className={`${styles["blend__wrap"]}  `}>
        <div className={styles["blend__frame"]}></div>

        <div className={``}>
          <video className={`${styles["blend__video"]}`} autoPlay muted loop>
            <source src="/about_h.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Index;
