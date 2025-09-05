import React from "react";
import Timer from "../agence/Timer";
import { CiGlobe } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <span className="flex items-center  mb-4 lg:mb-0 gap-2 xl:gap-4 cursor-default ">
        <CiGlobe className="text-5xl  md:text-7xl xl:text-5xl 2xl:text-6xl text-white" />
        <p className="text-2xl md:text-5xl xl:text-xl 2xl:text-3xl text-white">
          {" "}
          MONTREAL_
          <Timer />
        </p>
      </span>
      <span className="text-[1.7vw] md:text-[1.45vw] lg:text-1xl hidden sm:flex mb-4  xl:text-xs  items-end text-white gap-4 md:gap-10 lg:gap-6 uppercase">
        <a href="" className="hover:text-[#D3FD50]">
          Politique de confidentialité
        </a>
        <a href="" className="hover:text-[#D3FD50]">
          Avis de confidentialité
        </a>
        <a href="" className="hover:text-[#D3FD50]">
          Rapport éthique
        </a>
        <a href="" className="hover:text-[#D3FD50]">
          OPTIONS DE CONSENTEMENT
        </a>
      </span>
    </>
  );
};

export default Footer;
