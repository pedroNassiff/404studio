import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

export default function index() {
  const [select, setSelect] = useState(1);
  const [scale, setScale] = useState(0);
  const [probar, setProbar] = useState("1.0");

  const [position, setPosition] = useState(null);
  const [screenSize, setScreenSize] = useState(null);

  const handleScale = () => {
    if (scale > 130 && scale < 1000) {
      setProbar("1.05");
    }
    if (scale <= 130 && scale > 100) {
      setProbar("1.10");
    }
    //   if (scale <= 100 && scale > 50) {
    //     setProbar("1.15");
    //   }
    //   if (scale <= 50 && scale > -50) {
    //     setProbar("1.20");
    //   }
    //   if (scale <= -50 && scale > -150) {
    //     setProbar("1.25");
    //   }
    //   if (scale <= -150 && scale > -250) {
    //     setProbar("1.30");
    //   }
    //   if (scale <= -250 && scale > -350) {
    //     setProbar("1.35");
    //   }
    //   if (scale <= -350 && scale > -450) {
    //     setProbar("1.40");
    //   }
    //   if (scale <= -450 && scale > -550) {
    //     setProbar("1.45");
    //   }
    //   if (scale < -555 && scale >= -1000) {
    //     setProbar("1.50");
    //   }
  };
  const ver = parseFloat(probar);
  const Probar = () => {
    let image = document.querySelector(".algo");
    let position = Math.trunc(image.getBoundingClientRect().top);
    setPosition(position);
    let screenSize = Math.trunc(window.innerHeight / 3.5);
    setScreenSize(screenSize);
  };

  useEffect(() => {
    if (position > screenSize && position < 1000) {
      setSelect(1);
      handleScale();
    }
    if (position < screenSize && position > -555) {
      setSelect(2);
      setScale(position);
      handleScale();
    }
    if (position < -555) {
      setSelect(1);
      handleScale();
    }
  }, [position, screenSize]);

  useEffect(() => {
    window.addEventListener("scroll", Probar);
    return () => {
      window.removeEventListener("scroll", Probar);
    };
  }, []);

  return (
    <div className={`algo ${styles["img"]}`}>
      <div className={styles["cont"]}>
        <img
          src="/pexels-евгения-егорова-9595891.jpg"
          alt=""
          className={styles["imageScroll"]}
          style={{ transform: `scale(${ver})` }}
        />
      </div>
    </div>
  );
}
