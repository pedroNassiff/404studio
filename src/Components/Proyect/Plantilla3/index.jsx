import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

export default function Index({
  video,
  description,
  link,
  object_fit,
  object_position,
  id,
  plantilla,
}) {
  const [state, setstate] = useState(true);
  const [scale, setScale] = useState(0);
  const [probar, setProbar] = useState("1.0");

  const ref = useRef();

  const [position, setPosition] = useState(null);
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
  const Probar = () => {
    if (!ref.current) return;
    const example = ref.current.getBoundingClientRect().top;
    let position = Math.trunc(example);
    setPosition(position);
    let screenSize = Math.trunc(window.innerHeight / 3.5);
    setScreenSize(screenSize);
  };

  useEffect(() => {
    if (position > screenSize && position < 300) {
      setSelect(1);
      handleScale();
    }
    if (position < screenSize && position > 50) {
      setSelect(2);
      setScale(position);
      handleScale();
    }
    if (position < 50) {
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
  console.log(scale);

  return (
    <div className={`${styles["section"]} aspect_ratio aspect_ratio--16by9`}>
      {video ? (
        <div
          className={`aspect_ratio__item`}
          ref={ref}
          id={`aspect_ratio__item${id}`}
          style={{ transform: `scale(${ver})` }}
        >
          {state ? (
            <div
              onClick={() => setstate(!state)}
              className={`${styles["hero_bottom__icon"]}`}
              style={{ objectFit: `${object_fit}`, objectPosition: `${object_position}` }}
            >
              <VolumeOffIcon className={styles["icon__muted"]}></VolumeOffIcon>
            </div>
          ) : (
            <div
              onClick={() => setstate(!state)}
              className={`${styles["hero_bottom__icon"]}`}
              style={{ objectFit: `${object_fit}`, objectPosition: `${object_position}` }}
            >
              <VolumeUpIcon className={styles["icon__unmuted"]}></VolumeUpIcon>
            </div>
          )}
          <video
            src={`/proyects/${description}/videos/${link}`}
            autoPlay
            loop
            muted={state}
            className={`${styles["img"]}`}
            style={{ objectFit: `${object_fit}`, objectPosition: `${object_position}` }}
          >
            <source
              src={`/proyects/${description}/videos/${link}`}
              type="video/mp4"
            ></source>
          </video>
        </div>
      ) : (
        <div
          className={`aspect_ratio__item`}
          ref={ref}
          id={`aspect_ratio__item${id}`}
          style={{ transform: `scale(${ver})` }}
        >
          <img
            loading="lazy"
            src={`/proyects/${description}/photos/${link}`}
            alt=""
            className={`${styles["img"]}`}
            style={{ objectFit: `${object_fit}`, objectPosition: `${object_position}` }}
          />
        </div>
      )}
    </div>
  );
}
