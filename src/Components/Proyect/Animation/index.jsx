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
// import React from 'react'

// class MyComponent extends React.Component {
//   state = { x: 0, y: 0 }

//   refCallback = (element) => {
//     if (!element) {
//       return
//     }
//     const { x, y } = element.getBoundingClientRect()
//     this.setState({ x, y })
//   }
  
//   render() {
//     console.log('STATE:', this.state.y) // Outputs the correct x and y values.
//     return (
//       <div ref={this.refCallback} className={`${styles["img"]}`}>
//      <img  src="/gray.jpg" alt="" className={this.state.y < 0 ? styles["im"] : styles["im--2"]}  />        

//       </div>
//     )
//   }
// }
// export default MyComponent