import styles from "./styles.module.scss";
import Card from "../Card"

const index = () => {
  return (
    <div className={styles.container}>
      <Card 
        left={true}
        title="AKA EL INGENIERO" 
        name="Pedro Nassiff" 
        description="Prófugode la Prisión de Corrientes. Es capaz de vulnerar cualquier sistema conectado a internet"
        img="/people/PedroNassiff.jpg"
      />

      <Card 
        left={false}
        title="AKA LA PROVEEDORA" 
        name="Ana Belén de Bardec" 
        description="Origen desconocido. Capaz de montar operaciones complejas en cualquier lugar del mundo en cuestión de horas"
        img="/gray.jpg"
      />

      <Card 
        left={true}
        title="AKA LA INFILTRADA" 
        name="Romina Ojeda" 
        description="Las apariencias engañan.Sigilosa, observadora y analítica. tiene la vitud de pasar desapersivida pero es capaz de proveer información infalible."
        img="/people/RominaOjeda.jpg"
      />

      <Card 
      left={false}
        title="AKA EL MAGO" 
        name="Pablo Chahin" 
        description="Experto en el arte de la prestidigitación.Hipnotiza a sus objetivos con humo y espejos para cometer sus fechorías"
        img="/people/PabloChahin.jpg"
      />
      
    </div>
  )
}

export default index
