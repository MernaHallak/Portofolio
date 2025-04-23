// import React, { useEffect, useState } from "react";
// import image from "../assets/Image.png";
// import { Link, useParams } from "react-router-dom";
// import image1 from "../assets/about.png";
// import image2 from "../assets/bg-tryMe.png";
// const LayOut2 = () => {
//   const { id } = useParams();
//   const [data, setData] = useState("");
//   const [count, setCount] = useState(0);
//   const [mainImg, setMainImg] = useState("");

//   useEffect(() => {
//     if (id === 1) {
//       setMainImg(image1);
//     } else if (id === 2) {
//       setMainImg(image2);
//     }
//     // document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
//       <img src={mainImg} alt="" />
//       <img src={image1} alt="" />
//     </div>
//   );
// };

// export default LayOut2;
