import home from "./styles.module.scss";

export default function Home() {
  return (
    <div className={home.container}>
      <div className={home.top}>
        <h1 className={home.title}>Fuck the Roof</h1>
        <h1 className={home.title}>Fuck the Limit</h1>
        <h1 className={`${home["title"]} ${home["title--one"]} `}>Fuck Everthing.</h1>
      </div>
      <div className={home.bottom}>
        <div className={home.wrap_frame}>
          <div className={home.frame_one}></div>
          <div className={home.frame_two}></div>
          <div className={home.frame_three}>
            <video src="/header1.mp4" className={home.video} autoplay muted loop></video>
          </div>
        </div>
      </div>
    </div>
  );
}
