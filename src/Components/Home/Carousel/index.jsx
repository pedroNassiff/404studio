// Import Swiper React components
import { useEffect, useState, useRef, useLayoutEffect } from "react";

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
import SwiperCore from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function App() {
  const [positionY, setPositionY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let scroll = 0;
      let width = 0;
      window.addEventListener('scroll', (event, scroll) => {

        scroll = window.scrollY;
        width = window.innerWidth

        setPositionY(scroll)
        switch(width){
          case (width >= 500):
            if (scroll >= 6000) {
              setIsVisible(true)
            }
            break;
          case(width >=1000):
          if (scroll >= 2000) {
            setIsVisible(true)
          }
          break;
          default:
            if (scroll >= 1000) {
              setIsVisible(true)
            }
            break;
        }
       
      })
    }
  }, []);
  const carousel = [
    {
      id: 1,
      image: "/Carrusel/web 404 desarrollo web -07.png",
      text: "Planificación y creación de sitios web enfocados en la necesidad estratégica, comerciales y comunicacionales de cada cliente. Buscamos brindar una buena experiencia de navegación para los usuarios, transmitiendo de manera dinámica y practica el servicio, producto o mensaje deseado y a su vez, convertir el mismo en un recurso valioso para la marca.",
    },
    {
      id: 2,
      image: "/Carrusel/web 404 estragtegia de comunicación -07-07-07.png",
      text: "Para lograr una comunicación efectiva es imprescindible que la misma se desarrolle en base a una correcta planificación. Esto permite optimizar los recursos, llegar al publico deseado con el mensaje que mejor se adapte al mismo. Brindamos análisis e investigación de la situación actual, definición de objetivos y publico objetivo, viabilidad del proyecto, determinación del mensaje y los canales que lo optimizarían, ejecución y evaluación de los resultados de la estrategia.",
    },
    {
      id: 3,
      image: "/Carrusel/web 404 Generación de contenidos -07-07.png",
      text: "Desarrollamos un análisis competitivo del entorno digital para crear y ejecutar una estrategia de contenido. Creación y difusión de los distintos formatos audiovisuales, enfocados en generar y realzar la imagen y los valores de la marca.",
    },
    {
      id: 4,
      image: "/Carrusel/web 404 Identidad de marca -07-07.png",
      text: "Indagar en la esencia de cada cliente, aquello que lo hace único y reconocible ante la competencia y como es percibido por sus publicos.Buscamos destacar los valores, objetivos, la misión y el propósito de cada organización en pos de realzar el camino recorrido, de donde vienen y a donde van y usarlo como diferencial.",
    },
    {
      id: 5,
      image: "/Carrusel/web 404 Maketing digital -07.png",
      text: "Planificación estratégica, ejecución y análisis posterior en los distintos medios y canales digitales. Tenemos como objetivo construir, transformar la comercialización de los productos y/o servicios brindado por cada cliente seleccionando las herramientas y medios más efectivos para tener el alcance deseado.",
    },
  ];
  return (
    <>
      <Swiper
        // slidesPerView={1.8}
        centeredSlides={true}
        breakpoints={{
          0: {
            spaceBetween: 0,
            slidesPerView: 1.5,
          },
          375: {
            spaceBetween: 0,
            slidesPerView: 1.4,
          },
          380: {
            spaceBetween: 0,
            slidesPerView: 1.4,
          },
          420: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
          1024: {
            spaceBetween: 50,
            slidesPerView: 3,
          },
          1536: {
            spaceBetween: 60,
            slidesPerView: 3,
          },
          1792: {
            spaceBetween: 90,
            slidesPerView: 3,
          },
        }}
        effect={"fade"}
        modules={[Pagination]}
        navigation={true}
        pagination={{
          type: "fraction",
        }}
        loop={true}
        className={styles["carousel__container"]}
      >
        {carousel.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={`${styles["container"]} hover`}>
              <div className={styles.borde}></div>
              <div className={`${styles["wrap"]} `}>
                {isVisible && <img src={item.image} className={`${styles["img"]} im`} alt="image" />}

                <div className={`${styles["hover"]} `}>
                  <div className={`${styles["text"]} `}>{item.text}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
