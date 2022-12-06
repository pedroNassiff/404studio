import { useState, useEffect } from 'react'
import Modal from "react-modal";
import styles from "./styles.module.scss";
import usuarios from '../usuarios.json'
import { useRouter } from "next/router"

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [email, setEmail] = useState("")
  const [codigo, setCodigo] = useState("")
  const [errorMessage, setErrorMsg] = useState("")
  const [msg, setMssg] = useState("")
  const route = useRouter();

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'black',
      border: 'none'
    },
    overlay: {
      backgroundColor: 'none',
    }
  };

  useEffect(() => {
  
  }, [])

  const checkuser = () => {
    let usuariosArray = []
    try {
      usuarios.map(usuario => {
        console.log(usuario.email)
        usuariosArray.push(usuario.email)
 
      })
      if (usuariosArray.includes(email)) {
        route.push({ pathname: "/presupuestos/presupuesto1" }) 
      } else {
        alert("no existe el usuario perris")
      }
      console.log("emailstate",email)
      console.log("usuariosArray",usuariosArray)

      
    } catch (e) {
    }
  }


  useEffect(() => {
    console.log("emaissl", email);
  }, []);
  return (

    <div className={`${styles["background-modal"]}`} >


      <Modal
        isOpen={isOpen}
        style={customStyles}
      >
        <div id="wrapper" className={`${styles["contenedor-modal"]}`}>
          <div>
            <div>
              <div className="title">
                {/* <span>Titulo</span> */}
              </div>
            </div>
            <div  className={`${styles["contenedor-email"]}`}>
              <label>
                <span className={`${styles["label-email"]}`}>Email</span>
                <input
className={`${styles["input-email"]}`}
                  placeholder="email"
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value), setErrorMsg(""), setMssg("") }}
                />
              </label>
             
            </div>
            <div className={`${styles["contenedor-codigo"]}`}>
              <label>
                <span className={`${styles["label-codigo"]}`}>Codigo</span>
                <input
className={`${styles["input-codigo"]}`}
                  placeholder="codigo"
                  type="text"
                  id="email"
                  name="email"
                 
                  onChange={(e) => { setCodigo(e.target.value), setErrorMsg(""), setMssg("") }}
                />
              </label>

            </div>

            <div className={`${styles["btn-container"]}`}>
              <div className={`${styles["btn"]}`}  onClick={() => { checkuser() }}>
                INGRESAR
                </div>

            </div>


          </div>

        </div>
      </Modal>

    </div>
  )
}

export default LoginModal;