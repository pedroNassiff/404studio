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
        // spaceBetween={90}
        breakpoints={{
          0: {
            spaceBetween: 0,
          },
          375: {
            spaceBetween: 0,
          },
          380: {
            spaceBetween: 0,
          },
          640: {
            spaceBetween: 0,
          },
          768: {
            spaceBetween: 60,
          },
          1024: {
            spaceBetween: 70,
          },
          1536: {
            spaceBetween: 90,
          },
          1792: {
            spaceBetween: 90,
          },
        }}
        modules={[Pagination]}
        navigation={true}
        pagination={{
          type: "fraction",
        }}
        loop={true}
        className={styles["carousel__container"]}
      >
        <SwiperSlide>
          <div className={styles.container}>
            <div className={styles.borde}></div>
            <div className={`${styles["wrap"]} `}>
              <img
                src="/Carrusel/web 404 desarrollo web -07.png"
                className={`${styles["img"]} ${styles["img--3"]}`}
                alt="image"
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
                src="/Carrusel/web 404 estragtegia de comunicación -07-07-07.png"
                className={`${styles["img"]} ${styles["img--2"]}`}
                alt="image1"
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
                src="/Carrusel/web 404 Generación de contenidos -07-07.png"
                className={`${styles["img"]} ${styles["img--3"]}`}
                alt="image2"
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
              <img
                src="/Carrusel/web 404 Identidad de marca -07-07.png"
                className={styles.img}
                alt="image3"
              />
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
              <img
                src="/Carrusel/web 404 Maketing digital -07.png"
                className={styles.img}
                alt="image4"
              />
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
