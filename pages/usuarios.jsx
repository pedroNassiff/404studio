import {useState, useEffect} from 'react'
import LoginModal from '../src/Components/Login'
import hero from "./styles.module.scss";
import Layout from "../src/Components/Layout/Layout";
import Head from "next/head";
import usuarios from '../src/Components/usuarios.json'

const Usuarios = () => {
const [usuario, setUsuario] = useState([])
  useEffect(() => {
    usuarios.map(usuario => {
      console.log("usuarios", usuario.email);
      console.log("usuarios", usuario);
      setUsuario(usuario.email)
    })
  }, [])

  return (
 <div>
{/*      
     <Head>
       <title>404 - Usuarios</title>
       <meta name="description" content="Generated by somos404" />
       <link rel="icon" href="/logo_2 (1).ico" />
     </Head> */}
   <div>
   <div>
   <div>
  
     </div>
     <div>
   
          {usuario}
     </div>
     </div>
   </div>

 </div>
 
  
  )
}

export default Usuarios;