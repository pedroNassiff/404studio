import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { motion, useViewportScroll, useTransform, Variants } from "framer-motion";

export default function Index({ children }) {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  // const [scale, setScale] = useState(0);
  const [probar, setProbar] = useState("1.0");
  const [position, setPosition] = useState(null);
  const [screenSize, setScreenSize] = useState(null);

  const ref = useRef();

  const handleScale = () => {
    if (scale < 300 && scale > 275) {
      setProbar("1.0");
    }
    if (scale <= 275 && scale > 250) {
      setProbar("1.01");
    }
    if (scale <= 250 && scale > 225) {
      setProbar("1.02");
    }
    if (scale <= 225 && scale > 200) {
      setProbar("1.04");
    }
    if (scale <= 200 && scale > 175) {
      setProbar("1.06");
    }
    if (scale <= 175 && scale > 150) {
      setProbar("1.08");
    }
    if (scale <= 150 && scale > 125) {
      setProbar("1.09");
    }
    if (scale <= 125 && scale > 100) {
      setProbar("1.10");
    }
    if (scale <= 100 && scale > 75) {
      setProbar("1.11");
    }
    if (scale <= 75 && scale > 50) {
      setProbar("1.13");
    }
  };
  const ver = parseFloat(probar);
  const Probar = () => {
    if (!ref.current) return;
    const example = ref.current.getBoundingClientRect().top;
    let position = Math.trunc(example);
    setPosition(position);
    let screenSize = Math.trunc(window.innerHeight / 2);
    setScreenSize(screenSize);
  };

  useEffect(() => {
    if (position > screenSize && position < 300) {
      handleScale();
    }
    if (position < screenSize && position > 50) {
      setScale(position);
      handleScale();
    }
    if (position < 50) {
      handleScale();
    }
  }, [position, screenSize]);

  useEffect(() => {
    window.addEventListener("scroll", Probar);
    return () => {
      window.removeEventListener("scroll", Probar);
    };
  }, []);

  return (
    <motion.div style={{ scale }}>
      <motion.div
        style={{
          scaleY: scrollYProgress,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
// <div ref={ref} style={{ transform: `scale(${ver})` }}>

/* </div> */
