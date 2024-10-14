import {useEffect, useState} from 'react'
import styles from "./styles.module.scss";
import Card from "../Card";

const Index = () => {
  const [positionY, setPositionY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const peopel = [
    {
      id: 1,
      left: true,
      title: "Pablo Viscubi",
      name: "FOTÓGRAFO",
      description:
        "Es el cazador de sombras y luz, el que captura lo que no se puede ver a simple vista. No dispara para documentar, sino para revelar lo oculto, lo inquietante.<br />  En cada toma, congela el caos y lo transforma en arte. Su lente no observa, desafía. Es el ojo que convierte la distopía en belleza brutal.",
      img: "/people/polperfilI.jpeg",
    },
    {
      id: 2,
      left: false,
      title: "Pedro Nassiff",
      name: "DESARROLLADOR WEB",
      description:
        "Arquitecto del futuro digital, construye mundos donde la estética se encuentra con la funcionalidad. No escribe código, teje realidades. Su trabajo es la estructura invisible que sostiene lo imposible, donde cada línea de código es un pulso de vida en el caos. Transforma lo abstracto en experiencia, lo complejo en intuitivo. Es el ingeniero de lo inexplorado.",
      img: "/people/PedroNassiff-destock2.jpg",
    },
    {
      id: 3,
      left: true,
      title: "Pablo Chahin",
      name: "DC Y FILMMAKER",
      description:
        "Su poder está en lo disruptivo, en la capacidad de transformar lo absurdo en arte. Es el visionario que convierte lo banal en experiencias que descolocan y cautivan. Con sus ideas y su lente, hace que un simple video se convierta en un film simplemente desde los colores o ángulos.",
      img: "/people/PabloChahin-destock.jpg",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      let scroll = 0;
      let width = 0;
      window.addEventListener('scroll', (event) => {

        scroll = window.scrollY;
        width = window.innerWidth
        setPositionY(scroll)
        if(width >= 500 ) {
          if (scroll >= 6000) {
            setIsVisible(true)
          }
        }else {
          if (scroll >= 2180) {
            setIsVisible(true)
          }
        }
   
      })
    }
  }, []);
  return (
    <div
      className={`${styles["people__container"]} custom_container custom_container--xxxl`}
    >
      {isVisible &&
        peopel.map((item) => (
          <Card
            left={item.left}
            title={item.title}
            name={item.name}
            description={item.description}
            img={item.img}
            id={item.id}
            key={item.id}
          />
        ))
      }
    
    </div>
  );
};

export default Index;
