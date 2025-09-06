import React, { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
const Image = () => {
  const [visible, setVisible] = useState(true);
  useGSAP(function () {
    gsap.from(".image", {
      scale: 5,
      duration: 2.5,
    });
  });
  useEffect(() => {
    setVisible(true); // Show image on mount
    const timer = setTimeout(() => {
      setVisible(false); // Hide after 1 second
    }, 3000);
    return () => clearTimeout(timer);
  }, []); // If you want to trigger on every navigation, add location as a dependency

  return visible ? (
    <div className=" h-full w-full fixed top-0 left-0 z-50 bg-black">
      <img
        src="/img/15.webp"
        alt=""
        className="h-full w-full image object-cover"
      />
    </div>
  ) : null;
};

export default Image;
