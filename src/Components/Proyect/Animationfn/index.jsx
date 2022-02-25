import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

export default function index({
  video,
  description,
  link,
  object_fit,
  object_position,
  id,
  plantilla,
}) {
  const [state, setstate] = useState(true);

  const [select, setSelect] = useState(1);
  const [scale, setScale] = useState(0);
  const [probar, setProbar] = useState("1.0");

  const ref = useRef();

  const [position, setPosition] = useState(null);
  const [screenSize, setScreenSize] = useState(null);

  const handleScale = () => {
    // if (scale > 1000) {
    //   setProbar("1.0");
    // }
    if (scale === 0) {
      setProbar("1.00");
    }
    if (scale < 1000 && scale > 130) {
      setProbar("1.01");
    }
    if (scale <= 130 && scale > 100) {
      setProbar("1.02");
    }
    if (scale <= 100 && scale > 50) {
      setProbar("1.04");
    }
    if (scale <= 50 && scale > -50) {
      setProbar("1.06");
    }
    if (scale <= -50 && scale > -150) {
      setProbar("1.08");
    }
    if (scale <= -150 && scale > -250) {
      setProbar("1.09");
    }
    if (scale <= -250 && scale > -350) {
      setProbar("1.10");
    }
    if (scale <= -350 && scale > -450) {
      setProbar("1.11");
    }
    if (scale <= -450 && scale > -550) {
      setProbar("1.13");
    }
    if (scale <= -555 && scale > -1000) {
      setProbar("1.15");
    }
    // if (scale < -1000) {
    //   setProbar("1.16");
    // }
  };
  const ver = parseFloat(probar);
  const Probar = () => {
    // let image = document.querySelector(`#aspect_ratio__item${id}`);
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
    window.addEventListener("scroll", Probar);
    return () => {
      window.removeEventListener("scroll", Probar);
    };
  }, []);
  console.log(scale);

  return (
    <div className={`${styles["section"]}  aspect_ratio aspect_ratio--16by9`}>
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
