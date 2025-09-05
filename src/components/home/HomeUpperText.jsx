import React from "react";
import Video from "./Video";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
const HomeUpperText = () => {
  useGSAP(function () {
    gsap.from(".h1ding", {
      y: -800,
      duration: 2,
      delay: 0.6,
    });
    gsap.from(".h2ding", {
      y: -800,
      duration: 1.9,
      delay: 0.6,
    });
    gsap.from(".h3ding", {
      y: -800,
      duration: 1.8,
      delay: 0.6,
    });
    gsap.from(".h4ding", {
      x: 800,
      duration: 2.5,
      delay: 0.6,
    });
  });
  return (
    <div className="text-white text-[12vw] sm:text-[11vw] lg:text-[9.5vw] pt-4 leading-[10vw] lg:leading-[8.5vw] text-center uppercase font-[Font2]  lg:font-[Font1]   ">
      <div className="h1ding">L'étincelle</div>
      <div className="h2ding">
        qui
        <div className="inline-block h2ding w-[17vw] h-[9vw] lg:w-[17vw] lg:h-[7vw] rounded-full  overflow-hidden xl:-top-2 xl:mx-2">
          <Video />
        </div>
        génère
      </div>
      <div className="h3ding">la créativité</div>
      <p className="h4ding pl-[10%] sm:pl-[60%] md:pl-[55%]  lg:pl-[70%] xl:pl-[80%] text-start text-[4vw] sm:text-[2vw] md:text-[1.1vw] lg:text-[1.7vw] xl:text-xs pt-20 lg:pt-30 xl:pt-17 sm:pt-5 leading-5 sm:leading-4 -mb-10">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72
        est une agence qui pense chaque action pour nourrir la marque. Demain,
        dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle
        pour générer de l’émotion. Pour assurer une relation honnête, on est
        sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
      </p>
    </div>
  );
};

export default HomeUpperText;
