import React, { useEffect, useRef } from "react";
import Layout from "./components/sections/Layout";
import "./App.css";

function App() {
  const blobRef = useRef();

  /**
   * This effect will move the blob to the pointer's position
   */
  useEffect(() => {
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      blobRef.current.style.left = `${clientX}px`;
      blobRef.current.style.top = `${clientY}px`;
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <section className="app">
      <p id="blob" ref={blobRef}></p>
      <main className="app-content">
        <Layout />
      </main>
    </section>
  );
}

export default App;
