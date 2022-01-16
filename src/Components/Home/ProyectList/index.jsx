import styles from "./styles.module.scss"
import WrapProyect from "../WrapProyect"
import Masonry from 'react-masonry-css'

export default function ProyectList() {

  const breakpoints ={
    default:3,
    940:2
  }
  return (
    <div className={`${styles["proyect_list"]} `}>

      <h2 className={`${styles["proyect_list__title"]}`}>Our Proyects.</h2>
      
      <div className={`${styles["proyect_list__my_mansory"]} custom_container custom_container--xxxl`}>
        
        <Masonry
          breakpointCols={breakpoints}
          className={styles["my_masonry_grid"]}
          columnClassName={styles["my_masonry_grid_column"]}>

            <WrapProyect left={true} images='anima3.jpeg' description='Anima' id={1} sm="lg" />
            
            <WrapProyect left={true} images='topm5.JPG' description='Top<br/>Me<br/>ga' id={2} sm="lg" />
            
            <WrapProyect left={false} images='harlemsport1.jpg' description='Harlem Sportswear' id={3}  />
            
            <WrapProyect left={false} images='rom1.jpg' description='La Romeria de las rosas' id={4} />
            
            <WrapProyect left={true} images='harlem3.jpg' description='Harlem Bar' id={5} />
            
            <WrapProyect left={false} images='aljibe3.png' description='El aljibe de Mendez' id={6} />
            
            <WrapProyect left={true} images='ranchov2.jpeg' description='Rancho Viejo' id={7} />
            
            <WrapProyect left={false} images='marren2.jpg' description='Marren' id={8} />
            
            <WrapProyect left={true} images='moda2.jpg' description='Moda 1' id={9} />
            
            <WrapProyect left={true} images='somosc1.jpg' description='Somos Chola' id={10} />
            
            <WrapProyect left={false} images='WhatsApp Image 2019-01-08 at 22.09.32-4.jpeg' description='Paprika' id={11} />
            
            <WrapProyect left={true} images='mirasoles1.jpg' description='NUT Mirasoles' id={12} />
        </Masonry>
      </div>
    </div>
  )
}
