import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


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
  onSwiper={setSwiperRef} 
  slidesPerView={3} 
  centeredSlides={true} 
  spaceBetween={30} 
  pagination={{
  "type": "fraction"
}} 
navigation={true} 
className="mySwiper">
            <div className={styles.background__one }></div>
        <div className={styles.background__two }></div>  
          <SwiperSlide >
            <img src='/imagenes/g_contenidos.png' className={styles.img} />
            <div className={styles.borde}></div>
            <div className={styles.bottom}>
              <span className={styles.number}>
              01 - 05
              </span>
              </div>
          </SwiperSlide>

          <SwiperSlide >
            <img src='/imagenes/m_digital.png' className={styles.img} />
            <div className={styles.borde}></div>
            <div className={styles.bottom}>
              <span className={styles.number}>
              02 - 05
              </span>
              </div>
          </SwiperSlide>          

          <SwiperSlide >
            <img src='/imagenes/id_marca.png' className={styles.img} />
            <div className={styles.borde}></div>
            <div className={styles.bottom}>
              <span className={styles.number}>
              03 - 05
              </span>
              </div>
          </SwiperSlide>          

          <SwiperSlide >
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