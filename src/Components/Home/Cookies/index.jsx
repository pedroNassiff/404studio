import React, { useState, useEffect, useRef } from "react";
import hero from "./styles.module.scss";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

import gsap from "gsap";

export default function Cookies404() {
  const [btnAcceptState, setbtnAcceptState] = useState(true)
  const [btnCancel, setBtnCancel] = useState(true)
  const cookieConsentRef = useRef();
  const ref = useRef();

  const getCokkie = () => {
    let id = getCookie('key')
    if (id == 'somos404') {
      setbtnAcceptState(false);
    }
  }

  const aceptFunction = (acceptedByScrolling) => {
    setCookie('key', 'somos404');
    setbtnAcceptState(false)
  }

  const cancelFuncion = () => {
    setBtnCancel(false);
    setbtnAcceptState(false)

  }

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
    <>
   {btnAcceptState && 
      <div className={`${hero["containerCookies"]} `}>
        {/* <div className={`${hero["hero_bottom"]} `}>
          <div
            className={`${hero["hero_bottom__container"]} aspect_ratio aspect_ratio--1by1`}
          >
            <div
              className={`${hero["hero_bottom__frame"]} ${hero["hero_bottom__frame--one"]}`}
            ></div>
            <div
              className={`${hero["hero_bottom__frame"]} ${hero["hero_bottom__frame--two"]}`}
            ></div>

            <div
              className={`${hero["hero_bottom__frame"]} ${hero["hero_bottom__frame--three"]} aspect_ratio__item object_fit_cover div-video`}
            >
              <div className={`${hero["hero_container_text"]} content-end bg-white`} style={{ justifyContent: ' center' }}>
                <div>
                  <h1 className={`${hero["hero_text_title"]} absolute inset-x-0 bottom-0`} style={{ textAlign: 'center', color: 'yellow', fontWeight: '700', fontFamily: 'Helvetica', justifyContent: 'center' }}>WELCOME TO OUR WORLD</h1>
                </div>
                <div>
                  <h2 className={`${hero["hero_text_subtitle"]}`} style={{ textAlign: 'center', fontWeight: '700', fontFamily: 'Helvetica' }}>AVISO DE COOKIES</h2></div>
              </div>
              <div>
              
                <video
                  // src="/cookies.mp4"
                  className={hero["hero_video__containerCokies"]}
                  autoPlay
                  muted

                >
                  <source src="/cookies.mp4" type="video/mp4"></source>
                </video>
              </div>
              </div>
              </div>
        </div> */}
<div className={hero["hero_video__containerCokies"]}>
<video
  // src="/cookies.mp4"
  className={hero["hero_video__containerCokies"]}
  autoPlay
  muted

>
  <source src="/cookie_desktop.mp4" type="video/mp4"></source>
</video>
              <span className={hero["hero_container_btn"]} style={{ display: 'flex', justifyContent: ' center' }}>
                <button
                  className={`${hero["hero_btn_ok"]}`}
                  style={{ border: "none", color: 'blue', fontWeight: '700', marginLeft: "0px", cursor: 'pointer' }}
                  onClick={aceptFunction}>OK</button>
                <button
                  style={{ border: "none", color: 'blue', fontWeight: '700', cursor: 'pointer' }}
                  className={`${hero["hero_btn_cancel"]}`}
                  onClick={cancelFuncion}
                >CANCEL
                </button>
              </span>
</div>
      </div>
          }
    </>
  );
}
