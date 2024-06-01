import React, { useEffect, useRef, useState } from "react";
import Layout from "./components/views/Layout";
import "./App.css";
import "./Loading.css";

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
        { duration: 3000, fill: "forwards" },
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
      document.body.classList.add("black-screen");
      setTimeout(() => {
        window.location.href = url.href;
      }, 0);
    }
  }, []);

  if (isRedirecting) {
    return null; // Render nothing while redirecting
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
