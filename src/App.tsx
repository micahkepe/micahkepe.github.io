import { useEffect, useRef } from "react";
import Layout from "./components/sections/Layout";
import "./App.css";
import "./fonts.css";

function App() {
  const blobRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      if (blobRef.current) {
        blobRef.current.style.left = `${clientX}px`;
        blobRef.current.style.top = `${clientY}px`;
      }
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
