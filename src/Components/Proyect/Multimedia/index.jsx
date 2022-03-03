import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

export default function index({
  video,
  description,
  link,
  object_fit,
  object_position,
  id,
}) {
  function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    useEffect(() => {
      observer.observe(ref.current);
      console.log("is isIntersecting ", isIntersecting);
      console.log("observer ", observer);

      // Remove the observer as soon as the component is unmounted
      return () => {
        observer.disconnect();
      };
    }, []);

    return isIntersecting;
  }

  const ref = useRef();
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      document.querySelector(`#aspect_ratio__item${id}`).classList.add("active");
    } else {
      if (
        document.querySelector(`#aspect_ratio__item${id}`).classList.contains("active")
      ) {
        document.querySelector(`#aspect_ratio__item${id}`).classList.remove("active");
      }
    }
  }, [isVisible]);
  console.log("isVisible ", isVisible);
  console.log("=============================================================");
  return (
    <div className={`${styles["section"]} aspect_ratio aspect_ratio--16by9`}>
      {video ? (
        <div
          className={`aspect_ratio__item`}
          ref={ref}
          id={`aspect_ratio__item${id}`}
          style={{ overflow: `hidden` }}
        >
          <video
            src={`/proyects/${description}/videos/${link}`}
            autoPlay
            loop
            muted={true}
            className={`img`}
            style={{ objectFit: `${object_fit}`, objectPosition: `${object_position}` }}
          >
            <source
              src={`/proyects/${description}/videos/${link}`}
              type="video/mp4"
            ></source>
          </video>
        </div>
      ) : (
        <div
          className={`aspect_ratio__item`}
          ref={ref}
          id={`aspect_ratio__item${id}`}
          style={{ overflow: `hidden` }}
        >
          <img
            src={`/proyects/${description}/photos/${link}`}
            alt=""
            className={`img`}
            style={{ objectFit: `${object_fit}`, objectPosition: `${object_position}` }}
          />
        </div>
      )}
    </div>
  );
}
