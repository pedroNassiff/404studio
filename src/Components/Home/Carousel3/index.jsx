
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

  const breakpoints ={
    default:3,
    940:2
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
        <img src='/imagenes/web 404 desarrollo web -07.png' className={styles.img} />
            <div className={styles.borde}></div>
            
        </SwiperSlide>
        <SwiperSlide>
        <img src='/imagenes/web 404 estragtegia de comunicación -07-07.png' className={styles.img} />
            <div className={styles.borde}></div>
           
        </SwiperSlide>
        <SwiperSlide>
        <img src='/imagenes/web 404 estragtegia de comunicación -07-07-07.png' className={styles.img} />
            <div className={styles.borde}></div>
            
        </SwiperSlide>
        <SwiperSlide>
        <img src='/imagenes/web 404 Generación de contenidos -07-07.png' className={styles.img} />
            <div className={styles.borde}></div>
            
        </SwiperSlide>
        <SwiperSlide>
        <img src='/imagenes/web 404 Identidad de marca -07-07.png' className={styles.img} />
            <div className={styles.borde}></div>
            
        </SwiperSlide>
        <SwiperSlide>
        <img src='/imagenes/web 404 Maketing digital -07.png' className={styles.img} />
            <div className={styles.borde}></div>
            
        </SwiperSlide>
        
    </Swiper>
    </>
  )
}