import React from "react";
import Timer from "../agence/Timer";
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
const HomeLowerText = () => {
  useGSAP(function () {
    gsap.from(".but1", {
      x: -800,
      duration: 2,
      delay: 0.6,
    });
    gsap.from(".but2", {
      x: 800,
      duration: 2,
      delay: 0.5,
    });
  });
  return (
    <div className="w-full relative  ">
      <div className="text-white  relative lg:top-0 w-full  justify-center uppercase font-[Font2] gap-5 xl:gap-10 flex text-[6vw] bottom-5">
        <span className="hidden  lg:flex absolute  left-0 bottom-0 items-center gap-3 cursor-default ">
          <CiGlobe className="text-[2vw] text-white" />
          <p className="text-[1.2vw] pt-2 text-white">
            {" "}
            MONTREAL_
            <Timer />
          </p>
        </span>
        <Link
          className="border-4 but1 hover:text-[#D3FD50] rounded-full  px-5 pt-2 xl:px-9 xl:pt-3 leading-[5vw] "
          to="/projects"
        >
          projects
        </Link>
        <Link
          className="border-4 but2 hover:text-[#D3FD50] rounded-full px-5 pt-2 xl:px-9 xl:pt-3 leading-[5vw]"
          to="/agence"
        >
          agence
        </Link>
      </div>
    </div>
  );
};

export default HomeLowerText;
