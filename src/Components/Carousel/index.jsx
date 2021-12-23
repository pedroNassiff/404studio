import React, { useState } from "react";
const Coverflow = dynamic(() => import( 'react-coverflow'),{ssr:false})
import dynamic from 'next/dynamic'
import container from "./styles.module.scss";



const About = () => {
  return (
    <div className={` ${container["content"]} `}>    
      <Coverflow
      height={600}
        displayQuantityOfSide={2}
        navigation={true}
        enableHeading={false}
        clickable={true}
        enableScroll={false}
        infiniteScroll={true}
        className={`${container["border"]}`}
        tabIndex="1"
      >
        <div className={container.img_c}>
          <img src="/gray.jpg" alt="" className={container.img}/>
          <p className={container.text}>hola1</p>
        </div>

        <div className={container.img_c}>
          <img src="/gray.jpg" alt="" className={container.img}/>
          <p className={container.text}>hola2</p>
        </div>

        <div className={container.img_c}>
          <img src="/gray.jpg" alt="" className={container.img}/>
          <p className={container.text}>hola3</p>
        </div>

        <div className={container.img_c}>
          <img src="/gray.jpg" alt="" className={container.img}/>
          <p className={container.text}>hola4</p>
        </div>

        <div className={container.img_c}>
          <img src="/gray.jpg" alt=""  className={container.img} />
          <p className={container.text}>hola5</p>
        </div>   
      </Coverflow>
    </div>
  );
};

export default About;