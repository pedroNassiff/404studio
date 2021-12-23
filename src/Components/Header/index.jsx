import home from "./styles.module.scss";

export default function Home() {
  return (
    <div>
      <div>
        <h1 className={`${home["title"]} ${home["title--one"]} `}>Fuck the Roof</h1>
        <h1 className={home.title}>Fuck teh Limit</h1>
        <h1 className={home.title}>Fuck Everthing.</h1>
      </div>
      <div>
        <div className={home.wrap_frame}>
          <div className={home.frame_one}></div>
          <div className={home.frame_two}></div>
          <div className={home.frame_three}>
            <img src="/gray.jpg" className={home.image} />
          </div>
        </div>
      </div>
    </div>
  );
}
