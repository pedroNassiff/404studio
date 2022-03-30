import styles from "./styles.module.scss";

const Index = ({ state }) => {
  const { id, title_2 } = state;
  return (
    <div className={`${styles["container"]} custom_container custom_container--xxxl `}>
      <h2
        className={title_2.length < 13 ? `${styles["title"]}` : `${styles["title--2"]}`}
        dangerouslySetInnerHTML={{ __html: title_2 }}
      ></h2>
      {id < 10 ? (
        <span className={styles.id}>{`0${id}`}</span>
      ) : (
        <span className={styles.id}>{id}</span>
      )}
    </div>
  );
};

export default Index;
