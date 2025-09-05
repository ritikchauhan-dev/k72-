import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
const Starirs = (props) => {
  const currentPath = useLocation().pathname;
  const pageRef = useRef(null);
  const stairPaentRef = useRef(null);
  useGSAP(
    function () {
      const tl = gsap.timeline();
      tl.to(stairPaentRef.current, {
        display: "block",
      });
      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.5,
        },
      });
      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.5,
        },
      });
      tl.to(stairPaentRef.current, {
        display: "none",
      });
      tl.to(".stair", {
        y: "0%",
      });
      gsap.from(pageRef.current, {
        opacity: 0,
        delay: 1.5,
      });
    },
    [currentPath]
  );
  return (
    <div>
      <div ref={stairPaentRef} className="h-screen w-full fixed z-10">
        <div className="h-full w-full  flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Starirs;
