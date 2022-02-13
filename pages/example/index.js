import styles from "./styles.module.scss";

const isServer = typeof window === "undefined";
let RSS = null;
try {
  RSS = require("react-scroll-motion");
} catch (error) {}

export default function AboutMe() {
  return !isServer ? (
    <RSS.ScrollContainer>
      <RSS.ScrollPage page={0}>
        <RSS.Animator animation={RSS.batch(RSS.ZoomOut(1, 1.9))}>
          <img src="/pexels-lucas-meneses-5019409.jpg" className={styles["img"]} />
        </RSS.Animator>
      </RSS.ScrollPage>
      <RSS.ScrollPage page={1}>
        <RSS.Animator animation={RSS.batch(RSS.ZoomOut(1, 1.9))}>
          <img src="/pexels-евгения-егорова-9595891.jpg" className={styles["img"]} />
        </RSS.Animator>
      </RSS.ScrollPage>
      <RSS.ScrollPage page={2}>
        <RSS.Animator animation={RSS.batch(RSS.FadeIn(), RSS.ZoomOut(1, 1.9))}>
          <div className={`${styles["section"]} `}>
            <img src="/pexels-vladimir-konoplev-10955577.jpg" className={styles["img"]} />
          </div>
        </RSS.Animator>
      </RSS.ScrollPage>
      <RSS.ScrollPage page={3}>
        <RSS.Animator animation={RSS.ZoomOut(1, 1.9)}>
          <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
        </RSS.Animator>
      </RSS.ScrollPage>
    </RSS.ScrollContainer>
  ) : (
    <div></div>
  );
}
