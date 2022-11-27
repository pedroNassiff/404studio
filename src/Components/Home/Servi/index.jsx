import dynamic from "next/dynamic";
import { useEffect, useState, useRef, useLayoutEffect } from "react";

const Carousel = dynamic(() => import("../Carousel"), { ssr: false });
// import Carousel from "../Carousel";
import styles from "./styles.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Index() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    


    gsap.fromTo(
      `#servi__title`,
      1,
      {
        y: 200,
        duration: 0.5,
      },
      {
        y: 0,
        duration: 0.5,

        scrollTrigger: {
          trigger: `#servi__title`,
          start: "top 700px",
          end: "bottom bottom",
        },
      }
    );

  }, []);

  return (
    <div className={`${styles["servi"]}`}>
      <div className={`${styles["servi__container"]}`}>
        <div className={styles["conten"]}>
          <h2 className={`${styles["servi__title"]}`} id={`servi__title`}>
            Our service.
          </h2>
        </div>
      </div>

<div className={`${styles["servi__wrap"]} `}>
  <Carousel />
    
       
      </div>

   
    </div>
  );
}
