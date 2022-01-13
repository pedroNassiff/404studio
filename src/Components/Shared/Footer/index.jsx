import styles from "./styles.module.scss"
import Link from "next/link"
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBell} from '@fortawesome/free-solid-svg-icons'
import {faBehance} from '@fortawesome/free-brands-svg-icons'


const index = () => {
  return (
    <div className={styles.container}>
        <div className={styles.line}></div>
      <div className={styles.wrap}>
        <nav>
          <ul className={styles.list}>
            <li className={styles.item} >
              <Link href={'/'}>
                <a  className={styles.link} target="_blank" >
                <InstagramIcon className={`${styles['icon']}`} />                  
                  Instagram</a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={'/'} >
                <a  className={styles.link} target="_blank">
                  <LocalPhoneIcon className={`${styles['icon']}`}/>                  
                  Telefono</a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={'/'} >
                <a  className={styles.link} target="_blank">
                  <MailOutlineIcon className={`${styles['icon']}`} />                  
                  Gmail</a>              
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={'/'}>
                <a  className={styles.link} target="_blank">
                <FontAwesomeIcon icon={faBehance} className={`${styles['icon']} ${styles['be']}`} />          
                  Behance</a>              
              </Link>
            </li>
          </ul>
        </nav>    
      </div>      
    </div>
  );
}

export default index;
