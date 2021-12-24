import React, { useState } from "react";
const Coverflow = dynamic(() => import( 'react-coverflow'),{ssr:false})
import dynamic from 'next/dynamic'
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";

const About = () => {
  const [stateCard, setStateCard] = useState(false);
  const [stateCard1, setStateCard1] = useState(false);
  const [stateCard2, setStateCard2] = useState(false);
  const [stateCard3, setStateCard3] = useState(false);
  const [stateCard4, setStateCard4] = useState(false);
  const [stateCard5, setStateCard5] = useState(false);
  return (
    <Coverflow
    widht={1900}
      height={1150}
      displayQuantityOfSide={2}
      navigation={true}
      enableHeading={true}
      clickable={false}
      enableScroll={false}
      infiniteScroll={true}
      tabIndex="1"
      >
      <div
        onClick={() => setStateCard(true)}
        onKeyDown={() => setStateCard(false)}
        onMouseOver={() => setStateCard(true)}
        onMouseLeave={() => setStateCard(false)}
        alt="01 - 06"
        tabIndex="0"
        className={styles.cont}
        >
        <img
          src="/imagenes/g_contenidos.png"                  
          className={styles.img}
          />
          <div className={stateCard ? ` ${styles.text} ${styles.desplegar} `:  `${styles.text} `  }>
            <p className={styles.texto}> Desarrollamos un análisis competitivo del entorno digital para
                crear y ejecutar una estrategia de contenido. Creación y
                difusión de los distintos formatos audiovisuales, enfocados en
                generar y realzar la imagen y los valores de la marca.</p>
                <Button size="small" className={styles.btn}>veni te muestro mas verdura</Button>
            
          </div>
      </div>
      <div
        onClick={() => setStateCard1(true)}
        onKeyDown={() => setStateCard1(false)}
        onMouseOver={() => setStateCard1(true)}
        onMouseLeave={() => setStateCard1(false)}
        role="menuitem"
        tabIndex="1"
        alt="02 - 06"
        className={styles.cont}
        >
        <img
          src="/imagenes/m_digital.png"
          className={styles.img}
          />
          <div className={stateCard1 ? ` ${styles.text} ${styles.desplegar} `:  `${styles.text} `}>
            <p className={styles.texto}>Planificación estratégica, ejecución y análisis posterior en los
                distintos medios y canales digitales.Tenemos como objetivo
                construir, transformar la comercialización de los productos y/o
                servicios brindado por cada cliente seleccionando las
                herramientas y medios más efectivos para tener el alcance
                deseado.</p>
              <Button size="small" className={styles.btn}>veni te muestro mas verdura</Button>
          </div>
      </div>
      <div
        onClick={() => setStateCard2(true)}
        onKeyDown={() => setStateCard2(false)}
        onMouseOver={() => setStateCard2(true)}
        onMouseLeave={() => setStateCard2(false)}
        role="menuitem"
        alt="03 - 06"
        className={styles.cont}
        tabIndex="0"
        >
        <img
          src="/imagenes/id_marca.png"
          className={styles.img}
          />
          <div className={stateCard2 ? ` ${styles.text} ${styles.desplegar} `:  `${styles.text} `}>
            <p className={styles.texto}>Indagar en la esencia de cada cliente, aquello que lo hace único
                y reconocible ante la competencia y como es percibido por sus
                publicos. Buscamos destacar los valores, objetivos, la misión y
                el propósito de cada organización en pos de realzar el camino
                recorrido, de donde vienen y a donde van y usarlo como
                diferencial.</p>
              <Button size="small" className={styles.btn}>veni te muestro mas verdura</Button>
          </div>
      </div>
      <div
        onClick={() => setStateCard3(true)}
        onKeyDown={() => setStateCard3(false)}
        onMouseOver={() => setStateCard3(true)}
        onMouseLeave={() => setStateCard3(false)}
        role="menuitem"
        alt="04 - 06"
        tabIndex="0"
        className={styles.cont}
        >
        <img
          src="/imagenes/e_comun.png"
          className={styles.img}
          />
          <div className={stateCard3 ? ` ${styles.text} ${styles.desplegar} `:  `${styles.text} `}>
            <p className={styles.texto}>Para lograr prueba de cambio comunicación efectiva es
                imprescindible que la misma se desarrolle en base a una correcta
                planificación. Esto permite optimizar los recursos, llegar al
                publico deseado con el mensaje que mejor se adapte al mismo.
                Brindamos análisis e investigación de la situación actual,
                definición de objetivos y publico objetivo, viabilidad del
                proyecto, determinación del mensaje y los canales que lo
                optimizarían, ejecución y evaluación de los resultados de la
                estrategia.</p>
              <Button size="small" className={styles.btn}>veni te muestro mas verdura</Button>
          </div>
      </div>
      <div
        onClick={() => setStateCard4(true)}
        onKeyDown={() => setStateCard4(false)}
        onMouseOver={() => setStateCard4(true)}
        onMouseLeave={() => setStateCard4(false)}
        role="menuitem"
        alt="05 - 06"
        tabIndex="0"
        className={styles.cont}
        >
        <img
          src="/imagenes/desa.png"
          alt="05 - 06"
          className={styles.img}
          />
          <div className={stateCard4 ? ` ${styles.text} ${styles.desplegar} `:  `${styles.text} `}>
            <p className={styles.texto}> Planificación y creación de sitios web enfocados en la necesidad
                estratégica, comerciales y comunicacionales de cada cliente.
                Buscamos brindar una buena experiencia de navegación para los
                usuarios, transmitiendo de manera dinámica y practica el
                servicio, producto o mensaje deseado y a su vez, convertir el
                mismo en un recurso valioso para la marca.</p>
              <Button size="small" className={styles.btn}>veni te muestro mas verdura</Button>
          </div>
      </div>
    </Coverflow>
  );
};

export default About;
