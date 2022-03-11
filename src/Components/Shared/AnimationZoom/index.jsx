import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

export default function Index({ link, id, item, ratio }) {
  const [select, setSelect] = useState(1);
  const [scale, setScale] = useState(0);
  const [probar, setProbar] = useState("1.0");

  const ref = useRef();

  const [position, setPosition] = useState(0);
  const [screenSize, setScreenSize] = useState(null);

  const handleScale = () => {
    if (scale < 300 && scale > 275) {
      setProbar("1.0");
    }
    if (scale <= 275 && scale > 250) {
      setProbar("1.01");
    }
    if (scale <= 250 && scale > 225) {
      setProbar("1.02");
    }
    if (scale <= 225 && scale > 200) {
      setProbar("1.04");
    }
    if (scale <= 200 && scale > 175) {
      setProbar("1.06");
    }
    if (scale <= 175 && scale > 150) {
      setProbar("1.08");
    }
    if (scale <= 150 && scale > 125) {
      setProbar("1.09");
    }
    if (scale <= 125 && scale > 100) {
      setProbar("1.10");
    }
    if (scale <= 100 && scale > 75) {
      setProbar("1.11");
    }
    if (scale <= 75 && scale > 50) {
      setProbar("1.13");
    }
  };
  const ver = parseFloat(probar);
  const AnimationZoom = () => {
    if (!ref.current) return;
    const example = ref.current.getBoundingClientRect().top;
    let position = Math.trunc(example);
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
    window.addEventListener("scroll", AnimationZoom);
    return () => {
      window.removeEventListener("scroll", AnimationZoom);
    };
  }, []);

  return (
    <div
      className={
        !item
          ? `${styles["about_right"]} aspect_ratio aspect_ratio--${ratio}`
          : `${styles["blend__wrap"]} aspect_ratio aspect_ratio--${ratio}`
      }
      id={`aspect_ratio__item${id}`}
      style={{ transform: `scale(${ver})` }}
      ref={ref}
    >
      <div
        className={
          !item ? `${styles["about_right__frame"]} ` : `${styles["blend__frame"]} `
        }
      ></div>

      <div className={`aspect_ratio__item object_fit_cover`}>
        <video src={`${link}`} autoPlay loop muted={true} className={`${styles["img"]}`}>
          <source src={`${link}`} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}
