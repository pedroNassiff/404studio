import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

export default function Index({
  video,
  description,
  link,
  id,
  ratio,
  title,
  size,
  heightBackground,
}) {
  const [state, setstate] = useState(true);

  return (
    <div
      className={`${styles["section"]} ${styles[`section--${size}`]}`}
      style={{ height: `${heightBackground}%` }}
    >
      <div key={id} className={`aspect_ratio aspect_ratio--${ratio}`}>
        {video ? (
          <div className={`aspect_ratio__item`}>
            <div
              onClick={() => setstate(!state)}
              className={`${styles["hero_bottom__icon__right"]}`}
            >
              {state ? (
                <VolumeOffIcon className={styles["icon__muted"]}></VolumeOffIcon>
              ) : (
                <VolumeUpIcon className={styles["icon__unmuted"]}></VolumeUpIcon>
              )}
            </div>

            <video
              src={`/proyects/${title}/videos/${link}`}
              autoPlay
              loop
              muted={state}
              className={`${styles["img"]} `}
            >
              <source src={`/proyects/${title}/videos/${link}`} type="video/mp4"></source>
            </video>
          </div>
        ) : (
          <div className={`aspect_ratio__item`}>
            <img
              loading="lazy"
              src={`/proyects/${title}/photos/${link}`}
              alt=""
              className={`${styles["img"]}`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
