import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("../Carousel"), { ssr: false });
// import Carousel from "../Carousel";
import styles from "./styles.module.scss";
import { Slide } from "react-reveal";

export default function Index() {
  return (
    <div className={`${styles["servi"]}`}>
      <div className={`${styles["servi__container"]}`}>
        <div className={styles["conten"]}>
          <Slide bottom delay={1000}>
            <h2 className={`${styles["servi__title"]}`}>Our service.</h2>
          </Slide>
        </div>
      </div>

      <div className={`${styles["servi__wrap"]} `}>
        <Carousel />
      </div>
    </div>
  );
}
