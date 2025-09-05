import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const FirstPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
  ];

  useGSAP(function () {
    gsap.from(imageRef.current, {
      x: -800,
      duration: 2.5,
      delay: 0.6,
    });
    gsap.from(".firsthead", {
      y: 300,
      duration: 2.5,
      delay: 0.6,
    });
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 30%",
        end: "top -70%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });
  return (
    <div className="relative h-full  section1 py-1">
      <div
        ref={imageDivRef}
        className="h-[30vw]  w-[20vw] overflow-hidden rounded-2xl absolute  ml-[30vw] mt-[20vh]  lg:mt-[28vh] xl:mt-[22vh]  "
      >
        <img
          ref={imageRef}
          src=""
          alt="Agence"
          className="w-full h-full rounded-2xl  object-cover"
        />
      </div>
      <div className="mt-65 overflow-hidden sm:mt-90 lg:mt-120 relative">
        <h1 className="firsthead text-[19.5vw]  uppercase font-[Font2] leading-[19vw] 2xl:leading-80 text-center ">
          Soixan7e <br />
          Douze
        </h1>
        <p className=" font-[Font1] leading-[5vw] lg:leading-[3vw] text-[5vw] lg:text-[3vw] mt-11 sm:mt-9 px-2 md:pl-[40%]  ">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
          curiosité nourrit notre créativité. On reste humbles et on dit non aux
          gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs,
          une personnalité, une histoire. Si on oublie ça, on peut faire de bons
          chiffres à court terme, mais on la tue à long terme. C’est pour ça
          qu’on s’engage à donner de la perspective, pour bâtir des marques
          influentes.
        </p>
        <div className="lg:flex  gap-2 px-2 text-center lg:mt-10">
          <p className=" font-[Font1] leading-[5vw] lg:leading-[3vw] text-[5vw] lg:text-[2vw] mt-9 ">
            Nos projets_ naissent dans l’humilité, grandissent dans la curiosité
            et vivent grâce à la créativité sous toutes ses formes.
          </p>
          <p className=" font-[Font1] leading-[5vw] lg:leading-[3vw] text-[5vw] lg:text-[2vw] mt-9  ">
            Notre création_ bouillonne dans un environnement où le talent a le
            goût d’exploser. Où on se sent libre d’être la meilleure version de
            soi-même.
          </p>
          <p className=" font-[Font1] leading-[5vw] lg:leading-[3vw] text-[5vw] lg:text-[2vw] mt-9  ">
            Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage
            participe à bâtir une agence dont on est fiers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
