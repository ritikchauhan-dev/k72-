import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Marquee from "./Marquee";

const SecondPage = () => {
  const marquee1Arr = ["PHILIPPE", "PERREAULT", "Conseiller"];
  const marquee2Arr = ["LAWRENCE", "MEUNIER", "Coordonatrice"];
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const fulldivRef = useRef(null);
  // const imagedivRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const ctx = gsap.context(() => {
      // 1. Pin the image while scrolling
      gsap.to(imageRef1.current, {
        scrollTrigger: {
          trigger: imageRef1.current,
          markers: false, // for debugging
          start: "top 0%",
          end: "top -90%",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });

      // 2. Animate background color of full div
      gsap.to(fulldivRef.current, {
        backgroundColor: "#000", // <-- target color
        scrollTrigger: {
          trigger: imageRef1.current,
          start: "top 50%",
          end: "top -100%",
          scrub: true,
        },
      });
      gsap.to(imageRef2.current, {
        scrollTrigger: {
          trigger: imageRef2.current,
          markers: false, // for debugging
          start: "top 0%",
          end: "top -90%",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={fulldivRef}
      className=" section-2 font-[Font2]  uppercase  overflow-hidden w-full min-h-screen "
    >
      <div className="mt-30 sm:mt-90">
        <div
          // ref={imagedivRef}
          className="flex flex-col  justify-center z-10 relative items-center  "
        >
          <Marquee arr={marquee1Arr} />
          <img
            ref={imageRef1}
            className="w-[60vw] h-[70vh] md:w-[40vw] md:h-[100vh] rounded-4xl relative object-cover"
            src="/img/19.webp"
            alt=""
          />
        </div>
        <div className="w-full flex justify-center rounded-4xl h-[100vh] -top-15 md:-top-0 z-10 relative">
          <Marquee arr={marquee2Arr} />
          <img
            ref={imageRef2}
            className="w-[60vw] h-[70vh] md:w-[40vw] md:h-[100vh] relative rounded-4xl object-cover"
            src="/img/20.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
