
import { useEffect } from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"



// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination,Navigation]);

// -----------------------------------

// ---------------------------------

export default function App() {  

  // ---------------------------------------------

  
  // ------------------------------------------
  
  
  const [swiperRef, setSwiperRef] = useState(null);
  
  let appendNumber = 4;
  let prependNumber = 1;
  
  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
    ]);
  }
  
  const prepend = () => {
    swiperRef.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div> ');
  }
  
  const append = () => {
    swiperRef.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
  }
  
  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
    ]);
  }
  
 
  return (
    <>
      <Swiper 
      effect={'coverflow'}  
      centeredSlides={true} 
      slidesPerView= {3}
      
      coverflowEffect={{
        "rotate": 0,
        "stretch": 0,
        "depth": 0,
        // "modifier": 1,
        // "slideShadows": true
      }} 
      pagination={{
        "type": "fraction"
      }} 
      navigation={true} 
      loop={true}
      >
        <SwiperSlide>
          <div className={styles.container}>

        <img src='/imagenes/Desarrollo web .jpg' className={styles.img} />
            <div className={styles.borde}></div>
          </div>
            
        </SwiperSlide>

        <SwiperSlide>
        <div className={`${styles.container} aspect_ratio aspect_ratio--9by16`}>
        <img src='/imagenes/Estrategia de comunicación .jpg' className={`${styles["img"]} ${styles["img--2"]}`} />
            <div className={styles.borde}></div>
          </div>
           
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.container} aspect_ratio aspect_ratio--9by16`}>
        <div className={styles.container}>
        <img src='/imagenes/Generación de contenidos.jpg' className={`${styles["img"]} ${styles["img--3"]}`}/>
            <div className={styles.borde}></div>
            
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.container} aspect_ratio aspect_ratio--9by16`}>
        <div className={styles.container}>
        <img src='/imagenes/identidad de marca -07.jpg' className={styles.img} />
            <div className={styles.borde}></div>
          </div>
          </div>
            
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.container} aspect_ratio aspect_ratio--16by9`}>
        <div className={styles.container}>
        <img src='/imagenes/Marketing digital -07.jpg' className={styles.img} />
            <div className={styles.borde}></div>
          </div>
          </div>
            
        </SwiperSlide>
        
    </Swiper>
    </>
  )
}