import React, { useLayoutEffect, useRef, useState } from "react";
import Layout from "./components/views/Layout";
import "./App.css";
import "./Redirect.css";

function App() {
  const blobRef = useRef();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useLayoutEffect(() => {
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

  useLayoutEffect(() => {
    const isBlogPath = window.location.pathname.startsWith("/blog/");
    if (isBlogPath && !window.location.pathname.endsWith("/index.html")) {
      setIsRedirecting(true);
      document.body.classList.add("black-screen"); // Ensure the black screen class is applied immediately
      const url = new URL(window.location.href);
      url.pathname = url.pathname.replace(/\/$/, "") + "/index.html";
      window.location.href = url.href;
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
