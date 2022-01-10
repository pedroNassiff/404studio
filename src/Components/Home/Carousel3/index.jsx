
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


export default function App() {  
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
    swiperRef.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
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
      slidesPerView={3} 
      coverflowEffect={{
        "rotate": 0,
        "stretch": 0,
        "depth": 0,
        "modifier": 1,
        "slideShadows": true
      }} 
      pagination={{
        "type": "fraction"
      }} 
      navigation={true} 
      loop={true}>
        <SwiperSlide>
        <img src='/imagenes/g_contenidos.png' className={styles.img} />
            <div className={styles.borde}></div>
            
        </SwiperSlide>
        <SwiperSlide>
        <img src='/imagenes/m_digital.png' className={styles.img} />
            <div className={styles.borde}></div>
           
        </SwiperSlide>
        <SwiperSlide>
        <img src='/imagenes/id_marca.png' className={styles.img} />
            <div className={styles.borde}></div>
            
        </SwiperSlide>
        <SwiperSlide>
        <img src='/imagenes/e_comun.png' className={styles.img} />
            <div className={styles.borde}></div>
            
        </SwiperSlide>
        <SwiperSlide>
        <img src='/imagenes/desa.png' className={styles.img} />
            <div className={styles.borde}></div>
            
        </SwiperSlide>
        
    </Swiper>
    </>
  )
}