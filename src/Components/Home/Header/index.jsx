import React, { useState } from "react";
import home from "./styles.module.scss";
import Menu from "../../Shared/Menu"
import ReactPlayer from "react-player";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';


export default function Home() {
  const [state, setstate] = useState(true)
  return (
    <div className={home.container}>
      <div className={home.top}>
        <h1 className={home.title}>Fuck the Roof</h1>
        <h1 className={home.title}>Fuck the Limit</h1>
        <h1 className={`${home["title"]} ${home["title--one"]} `}>Fuck Everthing.</h1>
      </div>
      <div className={home.bottom}>
        <div className={home.wrap_frame}>
          <div className={home.frame_one}></div>
          <div className={home.frame_two}></div>
          {
            state ? 
            <div onClick={()=>setstate(!state)} >
              <VolumeOffIcon className={home.mute}></VolumeOffIcon>
              </div>
            :
            <div onClick={()=>setstate(!state)}>
              <VolumeUpIcon className={home.mute}></VolumeUpIcon>
              </div>
          }
          <div className={home.frame_three}>
            {/* <div className={home.video}>
              <ReactPlayer            
              url='/header1.mp4'
              width='100%'
              height='100%'
              playing
              loop       
              />
            </div> */}
            <video src="/header1.mp4" className={home.video} autoPlay loop muted={state}>
              <source src="/header1.mp4" type="video/mp4" ></source>
            </video>
          </div>
        </div>
      </div>
      {/* <Menu/> */}
    </div>
  );
}
