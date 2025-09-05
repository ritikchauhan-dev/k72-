import React from "react";
import Footer from "../common/Footer";
import MenuLinks from "./MenuLinks";
import Navbar from "./Navbar";
const FullScreenNav = () => {
  return (
    <div>
      <Navbar color="white" />
      <div className="bg-black h-screen  overflow-hidden text-white pt-[16vh] w-full ">
        <MenuLinks />
        <div className=" flex flex-col xl:flex-row justify-between items-center  gap-2 xl:items-baseline-last fixed  bottom-2 lg:bottom-4 xl:bottom-2 z-50 w-full  px-8 lg:px-3">
          <Footer />
          <span className="text-[7vw] sm:text-[3vw]  lg:text-[2vw] text-white  hover:text-[#D3FD50] cursor-default">
            RETOUR EN HAUT
          </span>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
