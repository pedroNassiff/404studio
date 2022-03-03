import styles from "./styles.module.scss";

const Index = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.menu}>
        <div className={styles.menu__linear}></div>
        <div className={styles.menu__linear}></div>
        <div className={styles.menu__linear}></div>
      </div>
    </div>
  );
};

export default Index;
