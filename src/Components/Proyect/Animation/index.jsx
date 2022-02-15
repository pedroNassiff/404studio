// // import {useEffect,useRef,useState} from 'react'
// import styles from "./styles.module.scss";

// // export default function index() { 
// //   const image = useRef();
// //   useEffect(() => {
// //     window.addEventListener("scroll", function () {  
// //       let image = document.querySelector(".aspect_ratio__item");
// //       let position = image.current.getBoundingClientRect();
// //       console.log(position)
// //       // const algo = _ => {
// //       //   console.log(image.current.getBoundingClientRect());
// //       // };
  
  
// //       // let screenSize = window.innerHeight / 1.5;
// //       // if (position < screenSize) {
// //       //   image.classList.add("transition");
// //       // }
// //       // if (window.innerWidth > 768) {
// //       //   image.classList.remove("transition");
// //       // }
// //     });
// //   }, []);

// //   return (       
// //        <div className={` aspect_ratio aspect_ratio--16by9`} >
// //         <img  src="/gray.jpg" alt="" ref={image} />        
// //       </div>
// //   )
// // }
import React from "react";
import styles from "./styles.module.scss";
class MyComponent extends React.Component {
  state = {
    x: 0,
    y: 0,
  };

  element = React.createRef();

  onWindowResize = () => {
    if (this.element.current) {
      const {x, y} = this.element.current.getBoundingClientRect();
      this.setState({x, y}, () => {
        console.log(this.state.y);
      });
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  render() {
    console.log(this.state.y);
    
    return (

      <div ref={this.myRef} className={`${styles["img"]}`}>
        <img  src="/gray.jpg" alt="" className={this.state.y >200 ? styles["im"]:styles["im--2"]} />  
      </div>
    );
  }
}
export default MyComponent