import Hero from "../../src/Components/Proyect/Hero";
import Main from "../../src/Components/Proyect/Main";
import Head from "next/head";
import Link from "next/link";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { proyects } from "../../const";
import styles from "../../styles/id.module.scss";
import { Description } from "@material-ui/icons";
import { ContentPasteSearchOutlined } from "@mui/icons-material";

export default function Proyect() {
  const [state, setState] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const { id } = router.query;
    const select = proyects.find((item) => item.id === parseInt(id));
    if (select == undefined) {
      return;
    } else setState(select);
  }, [router.query]);

  return state ? (
    <div className={styles.container}>
      <div onClick={() => router.push(`/#proyect_${id}`)}>
        <img
          alt="back home"
          src="/boton_back_home-09-removebg-preview.png"
          className={`${styles["back"]}`}
        />
      </div>

      <Head>
        <title>404 - {state.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo_2 (1).ico" />
      </Head>
      <Hero state={state} />
      <Main state={state} />
    </div>
  ) : (
    <>{state === false ? <div>No encontrado</div> : <div>Cargando...</div>}</>
  );
}
