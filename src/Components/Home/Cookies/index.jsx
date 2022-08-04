import React, { useState, useEffect, useRef } from "react";
import hero from "./styles.module.scss";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";

import gsap from "gsap";

export default function Cookies404() {
  const [btnAcceptState, setbtnAcceptState] = useState(true)
  console.log(getCookieConsentValue());
  const cookieConsentRef = useRef();
  const ref = useRef();

  const aceptFunction = (acceptedByScrolling) => {
    console.log("getCookieConsentValue", getCookieConsentValue());
    cookieConsentRef.current.accept();
    if (acceptedByScrolling & document.cookie) {
      setbtnAcceptState(false)
      alert()
    } else {
      setbtnAcceptState(false)
    }
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

        <div className={`${hero["containerCookies"]} `} style={{ position: 'fixed', width: '800px', height: '225px'}}>
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
                className={`${hero["hero_bottom__frame"]} ${hero["hero_bottom__frame--three"]} aspect_ratio__item object_fit_cover div-video`}
              >
                <div>
                  <div><h1  style={{ textAlign: 'center', color: 'yellow', fontWeight: '700', fontFamily: 'Helvetica', fontSize:'35px', }}>WELCOME TO OUR WORLD</h1></div>
                  <div><h2 style={{ textAlign: 'center',  fontWeight: '700',fontFamily: 'Helvetica', fontSize: '22px', marginTop: '-15px'}}>AVISO DE COOKIES</h2></div>
                </div>
                <span style={{ display: 'flex', justifyContent: ' center' }}>
                  <button 
                  style={{ border: "none", color: 'blue', fontWeight: '700', width: "200px", height: "50PX", marginLeft: "0px",fontSize: '24px', cursor: 'pointer'}}
                  onClick={aceptFunction}>OK</button>
                  <button 
                  style={{ border: "none", color: 'blue', fontWeight: '700', width: "200px", height: "50PX", marginLeft: "100px", fontSize: '24px', cursor: 'pointer'}}
                  className="buttonModal">CANCEL</button>
                </span>
                <div style={{ }}>
                  <CookieConsent
                    ref={cookieConsentRef}
                    onAccept={(acceptedByScrolling) => {
                      if (acceptedByScrolling) {
                        // triggered if user scrolls past threshold
                      } else {
                      }
                    }}
                    cookieName="CookieConsent404"
                    style={{ visibility: 'hidden' }}
                    debug={true}
                  >
                  </CookieConsent>
                  <video
                src="/cookies.mp4"
                className={hero["hero_video__containerCokies"]}
                autoPlay
                ref={ref}
              >
                <source src="/cookies.mp4" type="video/mp4"></source>
              </video>
                </div>
              </div>
            </div>
          </div>
          </div>
  );
}
