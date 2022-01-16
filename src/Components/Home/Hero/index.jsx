import React, { useState } from "react";
import hero from "./styles.module.scss";
import Menu from "../../Shared/Menu"
import ReactPlayer from "react-player";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';


export default function Hero() {

  const [state, setstate] = useState(true)

  return (
    <div className={`${hero["hero"]}`}>
      <div className={`${hero["hero__container"]} custom_container custom_container--xxxl`}>
        <div className={hero["hero_top"]}>

          <h1 className={hero["hero_top__title"]}>Fuck the Roof</h1>
          <h1 className={hero["hero_top__title"]}>Fuck the Limit</h1>
          <h1 className={`${hero["hero_top__title"]} ${hero["hero_top__title--modify"]} `}>Fuck Everthing.</h1>

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