import {useEffect,useRef,useState} from 'react'
import styles from "./styles.module.scss";

export default function index() { 
  const [select,setSelect] = useState(1)
  const [scale,setScale] = useState(0)
  const[probar,setProbar]=useState('1.0')

  const handleScale =()=>{
    if(scale > 130 && scale<1000){
      setProbar('1.0')
    }
    if(scale<=130 && scale > 100){
      setProbar('1.1')
    }
    if(scale<=100 && scale > 50){
      setProbar('1.2')
    }
    if(scale<=50 && scale > -50){
      setProbar('1.3')
    }
    if(scale<=-50 && scale > -150){
      setProbar('1.4')
    }
    if(scale<= -150 && scale > -250){
      setProbar('1.5')
    }
    if(scale<=-250 && scale > -350){
      setProbar('1.6')
    }
    if(scale<=-350 && scale > -450){
      setProbar('1.7')
    }
    if(scale<=-450 && scale > -550){
      setProbar('1.8')
    }
    if(scale<-555 && scale>=-1000){
      setProbar('1.9')
    }
  }
  const ver = parseFloat(probar)

  useEffect(()=>{
    window.addEventListener("scroll", function () {  
      let image = document.querySelector(".algo");
      let position = Math.trunc(image.getBoundingClientRect().top)
      let screenSize = Math.trunc(window.innerHeight / 3.5);
      if (position > screenSize && position <1000) {
        setSelect(1)
        handleScale()

      }
      if (position < screenSize && position > -555) {
        setSelect(2)
        setScale(position)
        handleScale()
        }
      if (position < -555) {
        setSelect(1)
        handleScale()



        }
        console.log('position',position)
        console.log('scrensize',screenSize)
        console.log('select',select)

    },[])
    
    // let screenSize = window.innerHeight / 1.5;
    // if (position < screenSize) {
      //   image.classList.add("transition");
      // }
      });
      

      return (       
      <div  className={`algo ${styles["img"]}`}>
        <div className={styles["cont"]}>
          <img src="/pexels-евгения-егорова-9595891.jpg" alt=""className={select === 2 ? styles["im--2"] : styles["im"]} style={{ transform : `scale(${ver})`}}  />        
        </div>
      </div>
  )
}