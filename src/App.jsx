import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import FullScreenNav from "./components/Navigation/FullScreenNav";
import Projects from "./pages/Projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update(); // keeps GSAP synced with Lenis
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Optional: Sync GSAP's scroll event
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/menu" element={<FullScreenNav />} />
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
