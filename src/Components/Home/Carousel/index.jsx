import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import "swiper/css/effect-coverflow"


// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow
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
        slidesPerView={3}
        centeredSlides={true}
        // spaceBetween={200}
        breakpoints={{
          370: {
            spaceBetween:25,
          },
          640: {
            spaceBetween: 50,
          },
          768: {
            spaceBetween: 37,
          },
          1024: {
            spaceBetween: 80,
          },
          1279: {
            spaceBetween:65,
          },
          1601: {
            spaceBetween:80,
          },

        }}
        modules={[Pagination]}
      navigation={true} 
      pagination={{
        "type": "fraction"
      }} 

        loop={true}
        className={styles.cont}
      >
        <SwiperSlide>
          <div className={styles.container}>
            <img src='/imagenes/Desarrollo web .jpg' className={styles.img} />
            <div className={styles.borde}></div>
            {/* <div className={styles.hover}>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, quibusdam architecto accusamus dolorum magni nobis recusandae aliquid impedit voluptatem. Incidunt quidem perferendis placeat sint ullam atque! Optio rem odit molestias!
              </div>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.container}>
            <img src='/imagenes/Estrategia de comunicación .jpg' className={`${styles["img"]} ${styles["img--2"]}`} />
            <div className={styles.borde}></div>
            {/* <div className={styles.hover}>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, quibusdam architecto accusamus dolorum magni nobis recusandae aliquid impedit voluptatem. Incidunt quidem perferendis placeat sint ullam atque! Optio rem odit molestias!
              </div>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.container}>
            <img src='/imagenes/Generación de contenidos.jpg' className={`${styles["img"]} ${styles["img--3"]}`}/>
            <div className={styles.borde}></div>
            {/* <div className={styles.hover}>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, quibusdam architecto accusamus dolorum magni nobis recusandae aliquid impedit voluptatem. Incidunt quidem perferendis placeat sint ullam atque! Optio rem odit molestias!
              </div>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.container}>
            <img src='/imagenes/identidad de marca -07.jpg' className={styles.img} />
            <div className={styles.borde}></div>
            {/* <div className={styles.hover}>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, quibusdam architecto accusamus dolorum magni nobis recusandae aliquid impedit voluptatem. Incidunt quidem perferendis placeat sint ullam atque! Optio rem odit molestias!
              </div>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.container}>
            <img src='/imagenes/Marketing digital -07.jpg' className={styles.img} />
            <div className={styles.borde}></div>
            {/* <div className={styles.hover}>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, quibusdam architecto accusamus dolorum magni nobis recusandae aliquid impedit voluptatem. Incidunt quidem perferendis placeat sint ullam atque! Optio rem odit molestias!
              </div>
            </div> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}