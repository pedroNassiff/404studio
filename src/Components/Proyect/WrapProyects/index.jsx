import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Index({ video, link, id, ratio, title, size, heightBackground }) {
  const [state, setstate] = useState(true);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      `#animate_${id}`,
      1,
      {
        scale: 1,
      },
      {
        scale: 1.13,
        scrollTrigger: {
          trigger: `#animate_${id}`,
          start: "top 90%",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, [id]);

  return (
    <div
      className={`${styles["section"]} ${styles[`section--${size}`]}`}
      style={{ height: `${heightBackground}%` }}
      key={id}
      id={`animate_${id}`}
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
              playsInline 
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
