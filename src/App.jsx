// import React, { useEffect, useRef } from "react";
// import Layout from "./components/views/Layout";
// import "./App.css";

// function App() {
//   const blobRef = useRef();

//   // This effect adds an animation to the blob element based on the mouse position
//   useEffect(() => {
//     const handlePointerMove = (event) => {
//       const { clientX, clientY } = event;

//       blobRef.current.animate(
//         {
//           left: `${clientX}px`,
//           top: `${clientY}px`,
//         },
//         { duration: 3000, fill: "forwards" },
//       );
//     };

//     window.addEventListener("pointermove", handlePointerMove);

//     // Clean up event listener when component unmounts
//     return () => {
//       window.removeEventListener("pointermove", handlePointerMove);
//     };
//   }, []); // Run once on component mount

//   return (
//     <div className="app">
//       <div id="blob" ref={blobRef}></div>
//       <div className="app-content">
//         <Layout />
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useRef } from "react";
// import Layout from "./components/views/Layout";
// import "./App.css";

// function App() {
//   const blobRef = useRef();

//   // This effect adds an animation to the blob element based on the mouse position
//   useEffect(() => {
//     const handlePointerMove = (event) => {
//       const { clientX, clientY } = event;

//       blobRef.current.animate(
//         {
//           left: `${clientX}px`,
//           top: `${clientY}px`,
//         },
//         { duration: 3000, fill: "forwards" },
//       );
//     };

//     window.addEventListener("pointermove", handlePointerMove);

//     // Clean up event listener when component unmounts
//     return () => {
//       window.removeEventListener("pointermove", handlePointerMove);
//     };
//   }, []); // Run once on component mount

//   // Check the current path
//   const isBlogPath = window.location.pathname.startsWith("/blog/");

//   if (isBlogPath) {
//     window.location.href = window.location.pathname + "index.html";
//     return null; // Render nothing while the redirect happens
//   }

//   return (
//     <div className="app">
//       <div id="blob" ref={blobRef}></div>
//       <div className="app-content">
//         <Layout />
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useRef, useState } from "react";
import Layout from "./components/views/Layout";
import "./App.css";
import "./Loading.css"; // Import the CSS file for the loading screen

function App() {
  const blobRef = useRef();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;

      blobRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  useEffect(() => {
    const isBlogPath = window.location.pathname.startsWith("/blog/");
    if (isBlogPath && !window.location.pathname.endsWith("/index.html")) {
      setIsRedirecting(true);
      const url = new URL(window.location.href);
      url.pathname = url.pathname.replace(/\/$/, "") + "/index.html";
      window.history.replaceState({}, "", url.href);
      setTimeout(() => {
        window.location.href = url.href;
      }, 300); // Delay to ensure smooth transition
    }
  }, []);

  if (isRedirecting) {
    return <div className="black-screen"></div>; // Plain black screen
  }

  return (
    <div className="app">
      <div id="blob" ref={blobRef}></div>
      <div className="app-content">
        <Layout />
      </div>
    </div>
  );
}

export default App;
