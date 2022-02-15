import React, { useState , useEffect} from "react";
import hero from "./styles.module.scss";
import Menu from "../../Shared/Menu"
import ReactPlayer from "react-player";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Fade from 'react-reveal/Fade';
// --------------------------------
import gsap from "gsap";
import SplitText from "../../../utils/Split3.min.js";

export default function Hero() {
  const [state, setstate] = useState(true)
  const [open, set] = useState(true)

  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);


  return (
    <div className={`${hero["hero"]}`}>
      <div className={`${hero["hero__container"]} custom_container custom_container--xxxl`}>
        <div className={hero["hero_top"]}>

          <div className={hero["header-container"]}>
        <h1 className={hero["hero_top__title"]} id="header-text">Fuck the Roof</h1>

          </div>
  
        <h1 className={hero["hero_top__title"]} id="prueba">Fuck the Limit</h1>
        <h1 className={`${hero["hero_top__title"]} ${hero["hero_top__title--modify"]} `} id="prueba">Fuck Everthing.</h1>

       

        {/* <Fade bottom cascade delay={4000}>
          <div className={hero["cont"]}>
            <h1 className={hero["hero_top__title"]}>Fuck the Roof</h1>
          </div>        
          <div className={hero["cont"]}>
            <h1 className={hero["hero_top__title"]}>Fuck the Limit</h1>
          </div>        
          <div className={hero["cont"]}>
            <h1 className={`${hero["hero_top__title"]} ${hero["hero_top__title--modify"]} `}>Fuck Everthing.</h1>
          </div>
        </Fade> */}

        </div>
        <div className={`${hero["hero_bottom"]} `}>
          <div className={`${hero["hero_bottom__container"]} aspect_ratio aspect_ratio--16by9`}>   

            <div className={`${hero["hero_bottom__frame"]} ${hero["hero_bottom__frame--one"]}`}></div>
            <div className={`${hero["hero_bottom__frame"]} ${hero["hero_bottom__frame--two"]}`}></div>
            
            {
              state ? 
              
              <div onClick={()=>setstate(!state)} className={`${hero["hero_bottom__icon"]}`} >
                <VolumeOffIcon className={hero["icon__muted"]}></VolumeOffIcon>
              </div>
              :
              
              <div onClick={()=>setstate(!state)} className={`${hero["hero_bottom__icon"]}`}>
                <VolumeUpIcon className={hero["icon__unmuted"]}></VolumeUpIcon>
              </div>
            }

            <div className={`${hero["hero_bottom__frame"]} ${hero["hero_bottom__frame--three"]} aspect_ratio__item object_fit_cover`}>
              
              {/* <div className={hero.video}>
                <ReactPlayer            
                url='/header1.mp4'
                width='100%'
                height='100%'
                playing
                loop       
                />
              </div> */}

              <video src="/header1.mp4" className={hero["hero_video__container"]} autoPlay loop muted={state}>
                <source src="/header1.mp4" type="video/mp4" ></source>
              </video>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* <Menu/> */}