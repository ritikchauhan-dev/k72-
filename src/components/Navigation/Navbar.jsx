import React, { useRef, useState } from "react";
import FullScreenNav from "./FullScreenNav";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const navRef = useRef(null);
  const lineRef1 = useRef(null);
  const lineRef2 = useRef(null);
  const [showFullScreenNav, setShowFullScreenNav] = useState(false);

  useGSAP(function () {
    gsap.from(".logoA", {
      y: 800,
      duration: 1.3,
      delay: 1,
    });
    gsap.from(".navhead", {
      x: 800,
      duration: 1.3,
      delay: 1,
    });
  });
  return (
    <>
      <div className="fixed  z-50 flex top-0 items-start justify-between  overflow-hidden  w-full">
        <div className="w-36 p-2 ">
          <Link href="/">
            <svg
              className="w-full logoA"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
            >
              <path
                fill={props.color}
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </Link>
        </div>

        <div
          onClick={() => setShowFullScreenNav(true)}
          onMouseEnter={() => {
            navRef.current.style.height = "100%";
            lineRef1.current.style.backgroundColor = "#000";
            lineRef2.current.style.backgroundColor = "#000";
          }}
          onMouseLeave={() => {
            navRef.current.style.height = "0%";
            lineRef1.current.style.backgroundColor = "#ffff";
            lineRef2.current.style.backgroundColor = "#ffff";
          }}
          className="h-11 w-[300px] lg:h-15 lg:w-[16vw] relative navhead  bg-black "
        >
          <div className="relative h-full w-full">
            <div
              ref={navRef}
              className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full "
            ></div>
            <div className="flex flex-col relative  z-50 justify-center h-full gap-1 items-end px-7">
              <div
                ref={lineRef1}
                className="w-13 h-[0.1vh] lg:w-17 lg:h-0.5 bg-white"
              ></div>
              <div
                ref={lineRef2}
                className="w-8 h-[0.1vh] lg:w-10 lg:h-0.5 bg-white"
              ></div>
            </div>
          </div>
        </div>
      </div>
      {showFullScreenNav && (
        <FullScreenNav onClose={() => setShowFullScreenNav(false)} />
      )}
    </>
  );
};

export default Navbar;
