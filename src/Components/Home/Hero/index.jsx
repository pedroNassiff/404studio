import React, { useState, useEffect, useRef } from "react";
import hero from "./styles.module.scss";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Vimeo from '@u-wave/react-vimeo';

import axios from 'axios';

export default function Hero() {
  const [state, setstate] = useState(true);

  const ref = useRef();

  // --------------------------------
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

  }, []);

  useEffect(() => {
    gsap.fromTo(
      `#home__title_one`,
      1,
      {
        y: 200,
        duration: 0.5,
      },
      {
        y: 0,
        duration: 0.5,

        scrollTrigger: {
          trigger: `#home__title_one`,
          start: "bottom bottom",
          end: "bottom bottom",
        },
      }
    );
    gsap.fromTo(
      `#home__title_two`,
      2,
      {
        y: 200,
        duration: 0.5,
      },
      {
        y: 0,
        duration: 0.5,

        scrollTrigger: {
          trigger: `#home__title_two`,
          start: "bottom bottom",
          end: "bottom bottom",
        },
      }
    );
    gsap.fromTo(
      `#home__title_three`,
      3,
      {
        y: 200,
        duration: 0.5,
      },
      {
        y: 0,
        duration: 0.5,

        scrollTrigger: {
          trigger: `#home__title_three`,
          start: "bottom bottom",
          end: "bottom bottom",
        },
      }
    );
  }, []);

  // ------------------------------

  return (
    <div className={`${hero["hero"]}`}>
      <div
        className={`${hero["hero__container"]} custom_container custom_container--xxxl`}
      >
        <section className={hero["hero_top"]}>
          <div className={hero["cont"]}>
            <h1 className={hero["hero_top__title"]} id={`home__title_one`}>
              Fuck the Roof
            </h1>
          </div>
          <div className={hero["cont"]}>
            <h1 className={hero["hero_top__title"]} id={`home__title_two`}>
              Fuck the Limit
            </h1>
          </div>
          <div className={hero["cont"]}>
            <h1
              className={`${hero["hero_top__title"]} ${hero["hero_top__title--modify"]}`}
              id={`home__title_three`}
            >
              Fuck Everything.
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
              className={`${hero["hero_bottom__frame"]} ${hero["hero_bottom__frame--three"]} aspect_ratio__item object_fit_cover div-video`}
            >
              <video
                src="/header1.mp4"
                className={hero["hero_video__container"]}
                autoPlay
                muted={state}
                ref={ref}
                playsInline
                
              >
                <link rel="preload" as="script" ></link>
                <source src="/header1.mp4" type="video/mp4"></source>
              </video>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
