import React, { useState, useEffect, useRef } from "react";
import hero from "./styles.module.scss";
import Menu from "../../Shared/Menu";
import ReactPlayer from "react-player";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
// --------------------------------
import gsap from "gsap";
import SplitText from "../../../utils/Split3.min.js";

export default function Hero() {
  const [state, setstate] = useState(true);
  const [open, set] = useState(true);

  const ref = useRef();

  // useEffect(() => {
  //   const setPlay = () => {
  //     window.onload = function () {
  //       ref.current.play();
  //     };
  //     return setPlay();
  //   };
  // }, []);
  // let hasPlayed = false;
  // function handleFirstPlay(event) {
  //   if (hasPlayed === false) {
  //     hasPlayed = true;

  //     let vid = event.target;

  //     vid.onplay = null;

  //     // Start whatever you need to do after first playback has started
  //   }
  // }

  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: -400,
      opacity: 1,
      stagger: 0.02,
      ease: "circ.out",
    });
  }, []);

  return (
    <div className={`${hero["hero"]}`}>
      <div
        className={`${hero["hero__container"]} custom_container custom_container--xxxl`}
      >
        <section className={hero["hero_top"]}>
          <Fade bottom cascade>
            <div className={hero["cont"]}>
              <h1 className={hero["hero_top__title"]}>Fuck the Roof</h1>
            </div>
            <div className={hero["cont"]}>
              <h1 className={hero["hero_top__title"]}>Fuck the Limit</h1>
            </div>
            <div className={hero["cont"]}>
              <h1
                className={`${hero["hero_top__title"]} ${hero["hero_top__title--modify"]} `}
              >
                Fuck Everthing.
              </h1>
            </div>
          </Fade>
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

            {state ? (
              <div
                onClick={() => setstate(true)}
                className={`${hero["hero_bottom__icon"]}`}
              >
                <VolumeOffIcon className={hero["icon__muted"]}></VolumeOffIcon>
              </div>
            ) : (
              <div
                onClick={() => setstate(true)}
                className={`${hero["hero_bottom__icon"]}`}
              >
                <VolumeUpIcon className={hero["icon__unmuted"]}></VolumeUpIcon>
              </div>
            )}

            <div
              className={`${hero["hero_bottom__frame"]} ${hero["hero_bottom__frame--three"]} aspect_ratio__item object_fit_cover`}
            >
              {/* <div className={hero.video}>
                <ReactPlayer            
                url='/header1.mp4'
                width='100%'
                height='100%'
                playing
                loop       
                />
              </div> */}

              <video
                src="/header1.mp4"
                className={hero["hero_video__container"]}
                autoPlay
                // onplay={handleFirstPlay(event)}
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

{
  /* <Menu/> */
}
