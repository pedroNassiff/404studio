import React, { useState } from "react";
const Coverflow = dynamic(() => import( 'react-coverflow'),{ssr:false})
import dynamic from 'next/dynamic'
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";

// className={stateCard ? ` ${styles.text} ${styles.desplegar} `:  `${styles.text} `  }

const About = () => {
  return (
    <Coverflow
      height={2500}
      displayQuantityOfSide={2}
      navigation={true}
      enableHeading={true}
      clickable={true}
      enableScroll={false}
      infiniteScroll={true}
      tabIndex="1"
      className={styles.container}
      >
      <div
        alt="01 - 06"
        tabIndex="0"
        className={styles.cont}
        >
        <img
          src="/imagenes/g_contenidos.png"                  
          className={styles.img}
          />
          <div className={styles.border}></div>
          <div className={`${styles["text"]} ${styles["desplegar"]}`} >
            <p className={styles.texto}> Desarrollamos un análisis competitivo del entorno digital para
                crear y ejecutar una estrategia de contenido. Creación y
                difusión de los distintos formatos audiovisuales, enfocados en
                generar y realzar la imagen y los valores de la marca.</p>
                <Button size="small" className={styles.btn}>veni te muestro mas verdura</Button>
            
          </div>
      </div>
      <div
        role="menuitem"
        tabIndex="1"
        alt="02 - 06"
        className={styles.cont}
        >
        <img
          src="/imagenes/m_digital.png"
          className={styles.img}
          />
          <div className={styles.border}></div>
          <div className={`${styles["text"]} ${styles["desplegar"]}`} >
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
        role="menuitem"
        alt="03 - 06"
        className={styles.cont}
        tabIndex="0"
        >
        <img
          src="/imagenes/id_marca.png"
          className={styles.img}
          />
          <div className={styles.border}></div>
          <div className={`${styles["text"]} ${styles["desplegar"]}`} >
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
        role="menuitem"
        alt="04 - 06"
        tabIndex="0"
        className={styles.cont}
        >
        <img
          src="/imagenes/e_comun.png"
          className={styles.img}
          />
          <div className={styles.border}></div>
          <div className={`${styles["text"]} ${styles["desplegar"]}`} >
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
          <div className={styles.border}></div>
          <div className={`${styles["text"]} ${styles["desplegar"]}`}>
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
