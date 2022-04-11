import styles from "./styles.module.scss";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

const Index = () => {
  return (
    <div className={styles["footer"]}>
      <div
        className={`${styles["footer__container"]} custom_container custom_container--xxxl`}
      >
        <div className={styles["footer__line"]}></div>

        <nav className={styles["social"]}>
          <ul className={styles["social__list"]}>
            <li className={styles["social__item"]}>
              <Link href={"https://www.instagram.com/somos.404/?hl=es"}>
                <a className={styles["social__link"]} target="_blank">
                  <InstagramIcon className={`${styles["icon"]}`} />
                  Instagram
                </a>
              </Link>
            </li>
            <li className={styles["social__item"]}>
              <Link href={"https://wa.me/34672632656"}>
                <a className={styles["social__link"]} target="_blank">
                  <LocalPhoneIcon className={`${styles["icon"]}`} />
                  Telefono
                </a>
              </Link>
            </li>
            <li className={styles["social__item"]}>
              <Link href={"mailto:somos404studio@gmail.com"}>
                <a className={styles["social__link"]} target="_blank">
                  <MailOutlineIcon className={`${styles["icon"]}`} />
                  Gmail
                </a>
              </Link>
            </li>
            <li className={styles["social__item"]}>
              <Link href={"https://404studio.myportfolio.com/"}>
                <a className={styles["social__link"]} target="_blank">
                  <FontAwesomeIcon
                    icon={faBehance}
                    className={`${styles["icon"]} ${styles["be"]}`}
                  />
                  <span>hance</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Index;
