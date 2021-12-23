import proyect from "../../styles/Proyects.module.css"

export default function Proyects() {
  return (
    <div>
      <h2 className={proyect.title}>Our Proyects.</h2>
      <div className={proyect.container__proyects}>
        <img src="/images/img1.jpg" className={proyect.image}/>
        <img src="/images/img2.png" className={proyect.image}/>
        <img src="/images/img3.png" className={proyect.image}/>
        <img src="/images/img4.jpg" className={proyect.image}/>
        <img src="/images/img5.jpg" className={proyect.image}/>
        <img src="/images/img6.jpg" className={proyect.image}/>
        <img src="/images/img7.jpg" className={proyect.image}/>
        <img src="/images/img8.jpg" className={proyect.image}/>
        <img src="/images/img9.jpg" className={proyect.image}/>
        <img src="/images/img10.jpeg" className={proyect.image}/>
        <img src="/images/img11.jpeg" className={proyect.image}/>
      </div>
    </div>
  )
}
