// import React from "react";
// import Layout from "./components/Layout";
// import "./App.css";

// function App() {
//   return (
//     <div className="app">
//       <div id="blob"></div>
//       <div id="blur"></div>
//       <div className="app-content">
//         <Layout />
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useRef } from "react";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  const blobRef = useRef();

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

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []); // Run once on component mount

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
