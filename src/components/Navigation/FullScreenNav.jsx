import React, { useRef } from "react";
import Footer from "../common/Footer";
import MenuLinks from "./MenuLinks";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const FullScreenNav = (props) => {
  const fullScreenRef = useRef(null);
  useGSAP(function () {
    const tl = gsap.timeline();
    tl.from(".stairing", {
      // onStart: () => {
      //   gsap.to(".linksOfMenu", {
      //     opacity: 0,
      //   });
      // },
      onComplete: () => {
        gsap.to(".stairs", {
          display: "none",
        });
      },
      height: 0,
      stagger: {
        amount: -0.4,
      },
    });
    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: -0.4,
      },
      onComplete: () => {
        gsap.to(".stairs", {
          display: "none",
        });
        gsap.to(".linksOfMenu", {
          opacity: 1,
        });
      },
    });
  });
  const handleClick = () => {
    const tl = gsap.timeline();
    tl.to(".stairs", {
      display: "block",
    });
    tl.from(".stairing", {
      delay: 0.1,
      height: "100%",
      stagger: {
        amount: -0.5,
      },
    });
    tl.to(".stairing", {
      delay: 0.2,
      height: "100%",
      duration: 0.5,
      stagger: {
        amount: -0.5,
      },
      onComplete: () => {
        gsap.to(".stairs", {
          display: "none",
        }); // runs AFTER animation finishes
        props.onClose();
      },
    });
  };
  useGSAP(function () {
    gsap.from(".logoA", {
      x: -800,
      duration: 1.3,
      delay: 0.5,
    });
    gsap.from(".cross1", {
      rotate: 40,
      duration: 1,
      delay: 1,
    });
    gsap.from(".cross2", {
      rotate: 140,
      duration: 1,
      delay: 1,
    });
  });
  const hahaha = () => {
    gsap.to(".cross1", {
      rotate: 140,
      duration: 0.4,
    });
    gsap.to(".cross2", {
      rotate: 40,
      duration: 0.4,
    });
  };
  const hihihi = () => {
    gsap.to(".cross1", {
      rotate: 40,
      duration: 0.7,
    });
    gsap.to(".cross2", {
      rotate: 140,
      duration: 0.7,
    });
  };
  return (
    <div
      ref={fullScreenRef}
      className="fixed inset-0  z-50 bg-black h-screen w-screen  overflow-hidden text-white   pt-[16vh] flex flex-col"
    >
      <div className="stairs h-screen w-full z-[99999] bg-black top-0  fixed">
        <div className="h-screen  w-full flex">
          <div className="stairing h-full w-1/5 bg-white"></div>
          <div className="stairing h-full w-1/5 bg-white"></div>
          <div className="stairing h-full w-1/5 bg-white"></div>
          <div className="stairing h-full w-1/5 bg-white"></div>
          <div className="stairing h-full w-1/5 bg-white"></div>
          <div className="stairing h-full w-1/5 bg-white"></div>
        </div>
      </div>

      <div className="w-36 p-2 absolute top-0 left-0 ">
        <Link to="/">
          <svg
            className="w-full text-white logoA"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 103 44"
          >
            <path
              fill="white"
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </Link>
      </div>
      <div
        onClick={handleClick}
        onMouseEnter={hihihi}
        onMouseLeave={hahaha}
        className="cross absolute h-40 w-40 top-11 right-0 cursor-pointer"
      >
        <div className="w-36 cross1 p-2  rotate-140 bg-[#D3FD50]"></div>
        <div className="w-36 cross2 p-2  rotate-40 bg-[#D3FD50]"></div>
      </div>
      <div className="linksOfMenu bg-black">
        <MenuLinks />
        <div className="flex flex-col xl:flex-row justify-between items-center gap-2 xl:items-baseline-last fixed bottom-2 lg:bottom-4 xl:bottom-2 z-50 w-full px-8 lg:px-3">
          <Footer />
          <span className="text-[7vw] sm:text-[3vw] lg:text-[2vw] text-white hover:text-[#D3FD50] cursor-default">
            RETOUR EN HAUT
          </span>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
