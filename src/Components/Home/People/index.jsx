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
      title: "AKA EL INGENIERO",
      name: "Pedro Nassiff",
      description:
        "Prófugo de la Prisión de Corrientes.<br/> Es capaz de vulnerar cualquier sistema conectado a internet",
      img: "/people/PedroNassiff-destock2.jpg",
    },
    {
      id: 2,
      left: false,
      title: "AKA LA PROVEEDORA",
      name: "Ana Belén de Bardeci",
      description:
        "Origen desconocido.<br />Capaz de montar operaciones complejas en cualquier lugar del mundo en cuestión de horas",
      img: "/gray.jpg",
    },
    {
      id: 3,
      left: true,
      title: "AKA LA INFILTRADA",
      name: "Romina Ojeda",
      description:
        "Las apariencias engañan.<br /> Sigilosa, observadora y analítica.<br /> Tiene la virtud de pasar desapersivida pero es capaz de proveer información infalible.",
      img: "/people/RominaOjeda-destock.jpg",
    },
    {
      id: 4,
      left: false,
      title: "AKA EL MAGO",
      name: "Pablo Chahin",
      description:
        "Experto en el arte de la prestidigitación.<br />Hipnotiza a sus objetivos con humo y espejos para cometer sus fechorías",
      img: "/people/PabloChahin-destock.jpg",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      let scroll = 0;
      window.addEventListener('scroll', (event, scroll) => {

        scroll = window.scrollY;
        setPositionY(scroll)
        if (scroll >= 6000) {
          console.log("scroll", scroll);
          setIsVisible(true)
          console.log("isVisible", isVisible);
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
