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
import "swiper/css/effect-coverflow";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div> "
    );
  };

  const append = () => {
    swiperRef.appendSlide('<div class="swiper-slide">Slide ' + ++appendNumber + "</div>");
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        // spaceBetween={200}
        breakpoints={{
          370: {
            spaceBetween: 20,
          },
          640: {
            spaceBetween: 50,
          },
          768: {
            spaceBetween: 54,
          },
          1024: {
            spaceBetween: 80,
          },
          1279: {
            spaceBetween: 65,
          },
          1601: {
            spaceBetween: 80,
          },
        }}
        modules={[Pagination]}
        navigation={true}
        pagination={{
          type: "fraction",
        }}
        loop={true}
        className={styles.cont}
      >
        <SwiperSlide>
          <div className={styles.container}>
            <div className={styles.borde}></div>
            <div className={`${styles["wrap"]} `}>
              <img
                src="/imagenes/Desarrollo web .jpg"
                className={`${styles["img"]} ${styles["img--3"]}`}
              />
              <div className={`${styles["hover"]} `}>
                <div className={`${styles["text"]} `}>
                  Planificación y creación de sitios web enfocados en la necesidad
                  estratégica, comerciales y comunicacionales de cada cliente. Buscamos
                  brindar una buena experiencia de navegación para los usuarios,
                  transmitiendo de manera dinámica y practica el servicio, producto o
                  mensaje deseado y a su vez, convertir el mismo en un recurso valioso
                  para la marca.
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.container}>
            <div className={styles.borde}></div>
            <div className={`${styles["wrap"]} `}>
              <img
                src="/imagenes/Estrategia de comunicación .jpg"
                className={`${styles["img"]} ${styles["img--2"]}`}
              />
              <div className={styles.hover}>
                <div className={styles.text}>
                  Para lograr una comunicación efectiva es imprescindible que la misma se
                  desarrolle en base a una correcta planificación. Esto permite optimizar
                  los recursos, llegar al publico deseado con el mensaje que mejor se
                  adapte al mismo. Brindamos análisis e investigación de la situación
                  actual, definición de objetivos y publico objetivo, viabilidad del
                  proyecto, determinación del mensaje y los canales que lo optimizarían,
                  ejecución y evaluación de los resultados de la estrategia.
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.container}>
            <div className={styles.borde}></div>
            <div className={`${styles["wrap"]} `}>
              <img
                src="/imagenes/Generación de contenidos.jpg"
                className={`${styles["img"]} ${styles["img--3"]}`}
              />
              <div className={styles.hover}>
                <div className={styles.text}>
                  Desarrollamos un análisis competitivo del entorno digital para crear y
                  ejecutar una estrategia de contenido. Creación y difusión de los
                  distintos formatos audiovisuales, enfocados en generar y realzar la
                  imagen y los valores de la marca.
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.container}>
            <div className={styles.borde}></div>
            <div className={`${styles["wrap"]} `}>
              <img src="/imagenes/identidad de marca -07.jpg" className={styles.img} />
              <div className={styles.hover}>
                <div className={styles.text}>
                  Indagar en la esencia de cada cliente, aquello que lo hace único y
                  reconocible ante la competencia y como es percibido por sus publicos.
                  Buscamos destacar los valores, objetivos, la misión y el propósito de
                  cada organización en pos de realzar el camino recorrido, de donde vienen
                  y a donde van y usarlo como diferencial.
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.container}>
            <div className={styles.borde}></div>
            <div className={`${styles["wrap"]} `}>
              <img src="/imagenes/Marketing digital -07.jpg" className={styles.img} />
              <div className={styles.hover}>
                <div className={styles.text}>
                  Planificación estratégica, ejecución y análisis posterior en los
                  distintos medios y canales digitales. Tenemos como objetivo construir,
                  transformar la comercialización de los productos y/o servicios brindado
                  por cada cliente seleccionando las herramientas y medios más efectivos
                  para tener el alcance deseado.
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
