import React, { useEffect, useRef } from "react";
import Layout from "./components/views/Layout";
import "./App.css";

function App() {
  const blobRef = useRef();

  /**
   * Animate the blob to follow the user's pointer around the screen.
   */
  useEffect(() => {
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;

      blobRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" },
      );
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  /**
   * Render the app.
   */
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
