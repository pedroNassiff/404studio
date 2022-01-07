import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss"
import { Navigation, Scrollbar } from 'swiper';



// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import 'swiper/css/navigation';


// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination,Navigation]);


export default function App() {  
  return (
    <>
      <Swiper 
      modules={[Navigation, Scrollbar]}
      effect={'coverflow'} 
      grabCursor={true} 
      centeredSlides={true} 
      slidesPerView={3} 
      coverflowEffect={{
        "rotate": 0,
        "stretch": 0,
        "depth": 100,
        "modifier": 1,
        "slideShadows": true
      }} 
      navigation
      loop
      className={styles.mySwiper}>

      <SwiperSlide>
      <img src='/imagenes/g_contenidos.png' className={styles.img} />
            <div className={styles.borde}></div>
            <div className={styles.bottom}>
              <span className={styles.number}>
              01 - 05
              </span>
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <img src='/imagenes/m_digital.png' className={styles.img} />
            <div className={styles.borde}></div>
            <div className={styles.bottom}>
              <span className={styles.number}>
              02 - 05
              </span>
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <img src='/imagenes/id_marca.png' className={styles.img} />
            <div className={styles.borde}></div>
            <div className={styles.bottom}>
              <span className={styles.number}>
              03 - 05
              </span>
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <img src='/imagenes/e_comun.png' className={styles.img} />
            <div className={styles.borde}></div>
            <div className={styles.bottom}>
              <span className={styles.number}>
              04 - 05
              </span>
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <img src='/imagenes/desa.png' className={styles.img} />
            <div className={styles.borde}></div>
            <div className={styles.bottom}>
              <span className={styles.number}>
              05 - 05
              </span>
              </div>
      </SwiperSlide>
     
      </Swiper>
    </>
  )
}