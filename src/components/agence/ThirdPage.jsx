import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Footer from "../common/Footer";
const ThirdPage = () => {
  const linkArr = ["FB", "IG", "IN", "BE"];
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const headingRef = useRef(null);
  const lastdiv = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const ctx = gsap.context(() => {
      // 1. Pin the image while scrolling
      gsap.to(img1.current, {
        scrollTrigger: {
          trigger: img1.current,
          markers: false, // for debugging
          start: "top 0%",
          end: "top -200%",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
      gsap.to(img2.current, {
        scrollTrigger: {
          trigger: img2.current,
          markers: false, // for debugging
          start: "top 0%",
          end: "top -200%",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
      gsap.to(img3.current, {
        scrollTrigger: {
          trigger: img3.current,
          markers: false, // for debugging
          start: "top 0%",
          end: "top -100%",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
      gsap.to(lastdiv.current, {
        scrollTrigger: {
          trigger: lastdiv.current,
          markers: false, // for debugging
          start: "top 0%",
          end: "top -100%",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
      gsap.to(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          markers: false, // for debugging
          start: "top 0%",
          end: "top -300%",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className=" bg-black relative font-[Font2] text-white z-10 overflow-hidden ">
      <h1
        ref={headingRef}
        className="absolute cursor-default hover:underline hover:text-[#D3FD50] z-10 left-[43%] text-[1.5vw]"
      >
        VOIR TOUS LES PROJETS
      </h1>
      <div ref={img1} className="relative  h-[100vh] w-full">
        <span className="absolute z-10  hover:underline flex flex-col justify-center items-center h-full  w-full  text-[1.5vw]">
          <p className="text-2xl lg:text-[2vw] ">Lamajeure</p>
          <p className="text-5xl lg:text-[7vw] ">Lamajeure</p>
        </span>
        <img
          className="h-full w-full object-cover lg:w-full rounded-t-4xl brightness-90"
          src="https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg"
          alt=""
        />
      </div>
      <div ref={img2} className="  h-[100vh] w-full">
        <span className="absolute z-10  hover:underline flex flex-col justify-center items-center h-full  w-full  text-[1.5vw]">
          <p className="text-2xl lg:text-[2vw]">GardaWorld</p>
          <p className="text-5xl lg:text-[7vw]">Crisis24</p>
        </span>
        <img
          className="h-full w-full object-cover rounded-t-4xl brightness-90"
          src="https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg"
          alt=""
        />
      </div>
      <div ref={img3} className=" h-[100vh] overflow-hidden w-full">
        <span className="absolute z-10  hover:underline flex flex-col justify-center items-center h-full  w-full  text-[1.5vw]">
          <p className="text-2xl lg:text-[2vw] ">Lassonde</p>
          <p className="text-5xl lg:text-[7vw] ">Fruité</p>
        </span>
        <img
          className="h-full w-full object-cover rounded-t-4xl "
          src="https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg"
          alt=""
        />
      </div>
      <div className="h-[50vh] w-full flex flex-col  relative justify-between text-white font-[Font2] bg-black ">
        <div className="flex justify-around gap-5 md:gap-0 flex-col md:flex-row md:justify-between pt-4">
          <div className="text-[7vw] mx-auto  md:mx-0  sm:text-[6vw] md:text-[5vw] ">
            {linkArr.map((link, index) => (
              <a
                key={index}
                href="#"
                className=" hover:text-[#D3FD50] border-[#D3FD50] border-3 lg:leading-0 mx-2 rounded-full px-4 py-2 sm:px-9 md:py-1 md:px-6 lg:px-9"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="text-[10vw] mx-auto  md:mx-0  sm:text-[6vw] md:text-[5vw] ">
            <a
              href="#"
              className=" hover:text-[#D3FD50] border-[#D3FD50] border-3 lg:leading-0 mx-2  rounded-full px-4 py-2  sm:px-9  md:py-1  md:px-6 lg:px-9"
            >
              CONTACT
            </a>
          </div>
        </div>
        <div
          ref={lastdiv}
          className="flex  flex-col xl:flex-row justify-between gap-10 items-center xl:items-baseline-last  lg:bottom-0 bottom-2 z-50 w-full px-8 lg:px-3"
        >
          <Footer />
          <span className="text-[7vw] sm:text-[3vw]  lg:text-4xl  xl:text-xl text-white  hover:text-[#D3FD50] cursor-default">
            RETOUR EN HAUT
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
