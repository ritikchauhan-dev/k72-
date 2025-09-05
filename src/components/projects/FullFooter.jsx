import React, { useRef } from "react";
import Footer from "../common/Footer";
const FullFooter = (props) => {
  const linkArr = ["FB", "IG", "IN", "BE"];
  const lastdiv = useRef(null);
  return (
    <div className="h-[60vh] flex  bg-black">
      <div className="h-full w-full flex flex-col  relative justify-between text-white font-[Font2]  ">
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
          className="flex flex-col xl:flex-row justify-between gap-10 items-center xl:items-baseline-last lg:bottom-0 bottom-2 z-50 w-full px-8 lg:px-3"
        >
          <Footer />
          <span className="text-[7vw] sm:text-[3vw]  lg:text-[1.6vw] text-white  hover:text-[#D3FD50] cursor-default">
            RETOUR EN HAUT
          </span>
        </div>
      </div>
    </div>
  );
};

export default FullFooter;
