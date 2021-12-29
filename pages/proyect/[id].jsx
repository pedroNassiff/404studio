import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {product} from "../../const"
import styles from "../../styles/id.module.scss"

export default function Proyect(){
const [state, setstate] = useState(null)
const router = useRouter();

useEffect(() => {  
  const {id} = router.query
  // const productFounded = productsPopulated.find((item) => item.id === parseInt(id));  
  const select = product.find(item=>item.id === parseInt(id))
  console.log(select)
  setstate(select)
  
},[router.query])


return (
  state ?
    (
      <div>
        <p>{state.id}</p>
        <img src={`/images/${state.images}`} className={styles.images}></img>
      </div>
    )
    :
    (
      <div> No encontrado </div>
    )
)}