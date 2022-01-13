import Hero from "../../src/Components/Proyect/Hero"
import Main from "../../src/Components/Proyect/Main"

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {proyects} from "../../const"
import styles from "../../styles/id.module.scss"

export default function Proyect(){
const [state, setstate] = useState(null)
const router = useRouter();

useEffect(() => {  
  const {id} = router.query
  // const productFounded = productsPopulated.find((item) => item.id === parseInt(id));  
  const select = proyects.find(item=>item.id === parseInt(id))
  setstate(select)
  
},[router.query])


return (
  state ?
    (
      <div className={styles.container}>
        <Hero props={state}/>
        <Main props={state}/>
        {/* <p>{state.id}</p>
        <img src={`/images/${state.images}`} className={styles.images}></img> */}
      </div>
    )
    :
    (
      <div> No encontrado </div>
    )
)}