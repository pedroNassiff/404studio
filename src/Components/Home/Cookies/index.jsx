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
        <div className={`${hero["containerCookies"]} grid grid-cols-4 `}>
          <div className={`${hero["hero_video__containerCokies"]}  grid-cols-1 `}>
            <div className={`${hero["hero_contenedor_imagen"]}  `} >
              <img src="/logofooter.jpeg" alt="" className={`${hero["hero_imagen-log"]} `} />
            </div>
          </div>

          <div className={`${hero["hero_video__containerCokies"]}  grid-cols-1 `}>
            <span className={`${hero["hero_titulo_cookies"]}  `}>AVISO DE COOKIES</span>
            <span className={`${hero["hero_subtitulo_cookies"]}  `}>LO SIENTO PERO ALGO CAPITALISTA DEBEMOS SER</span>
          </div>


          <div className={`${hero["hero_video__containerCokies"]}  grid-cols-1 `}>
            <span className={hero["hero_container_btn"]} >
              <button
                className={`${hero["hero_btn_ok"]}`}
                style={{ color: 'white', fontWeight: '700', marginLeft: "0px", cursor: 'pointer' }}
                onClick={aceptFunction}>ACCEPT</button>
              {/* <button
                style={{ border: "none", color: 'blue', fontWeight: '700', cursor: 'pointer' }}
                className={`${hero["hero_btn_cancel"]}`}
                onClick={cancelFuncion}
              >CANCEL
              </button> */}
            </span>
          </div>
          <div className={`${hero["hero_video__containerCokies"]}  grid-cols-1 `}>
            <div className={`${hero["hero_contenedor_imagen_end"]}  `} >
              <img src="/logofooter.jpeg" alt="" className={`${hero["hero_imagen-log_end"]} rotate-90	`} />
            </div>
          </div>
        </div>
      }
    </>
  );
}
