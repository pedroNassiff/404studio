import React, { useState, useEffect, useRef } from "react";
import hero from "./styles.module.scss";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import gsap from "gsap";

export default function Hero() {
  const [state, setstate] = useState(true);

  const ref = useRef();

  // --------------------------------
  const tl = gsap.timeline({ repeat: 0 });

  useEffect(() => {
    tl.from(`#title_1`, 1, {
      y: 200,
      duration: 0.7,
    });

    tl.from(`#title_2`, 1, {
      y: 200,
      duration: 0.7,
    });

    tl.from(`#title_3`, 1, {
      y: 200,
      duration: 0.7,
    });
  }, [tl]);

  // ------------------------------

  return (
    <div className={`${hero["hero"]}`}>
      <div
        className={`${hero["hero__container"]} custom_container custom_container--xxxl`}
      >
        <section className={hero["hero_top"]}>
          <div className={hero["cont"]}>
            <h1 className={hero["hero_top__title"]} id="title_1">
              Fuck the Roof
            </h1>
          </div>
          <div className={hero["cont"]}>
            <h1 className={hero["hero_top__title"]} id="title_2">
              Fuck the Limit
            </h1>
          </div>
          <div className={hero["cont"]}>
            <h1
              className={`${hero["hero_top__title"]} ${hero["hero_top__title--modify"]}`}
              id="title_3"
            >
              Fuck Everthing.
            </h1>
          </div>
        </section>
        <div className={`${hero["hero_bottom"]} `}>
          <div
            className={`${hero["hero_bottom__container"]} aspect_ratio aspect_ratio--16by9`}
          >
            <div
              className={`${hero["hero_bottom__frame"]} ${hero["hero_bottom__frame--one"]}`}
            ></div>
            <div
              className={`${hero["hero_bottom__frame"]} ${hero["hero_bottom__frame--two"]}`}
            ></div>

            <div
              onClick={() => setstate(!state)}
              className={`${hero["hero_bottom__icon"]}`}
            >
              {state ? (
                <VolumeOffIcon className={hero["icon__muted"]}></VolumeOffIcon>
              ) : (
                <VolumeUpIcon className={hero["icon__unmuted"]}></VolumeUpIcon>
              )}
            </div>

            <div
              className={`${hero["hero_bottom__frame"]} ${hero["hero_bottom__frame--three"]} aspect_ratio__item object_fit_cover`}
            >
              <video
                src="/header1.mp4"
                className={hero["hero_video__container"]}
                autoPlay
                muted={state}
                ref={ref}
              >
                <source src="/header1.mp4" type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
