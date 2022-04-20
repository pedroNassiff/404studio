import styles from "./styles.module.scss";
import Link from "next/link";
import WrapProyects from "../WrapProyects";
import { proyects } from "../../../../const";

const Index = ({ state }) => {
  const { content, id, description, title, link_content } = state;
  const linkId = id;
  const NextProyect = linkId + 1;
  const MaxProyects = proyects.length;

  return (
    <div>
      <div className={`custom_container custom_container--xxxl`}>
        <div className={styles.wrap}>
          {content.map((item) => (
            <WrapProyects
              video={item.video}
              description={description}
              link={item.link}
              id={item.id}
              key={item.id}
              title={link_content}
              ratio={item.ratio}
              size={item.size}
              heightBackground={item.heightBackground}
            />
          ))}
        </div>
      </div>

      {NextProyect > MaxProyects ? (
        <button disabled className={styles.btn}>
          <h6 className={styles["next_proyect__link"]}>Next Proyect</h6>
        </button>
      ) : (
        <button className={styles.btn}>
          <Link href={`/proyect/${NextProyect}`} passHref className={styles.NextProyect}>
            <h6 className={styles["next_proyect__link"]}>Next Proyect</h6>
          </Link>
        </button>
      )}
    </div>
  );
};

export default Index;
