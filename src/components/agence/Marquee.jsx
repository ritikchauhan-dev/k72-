import React from "react";

const Marquee = ({ arr }) => {
  return (
    <div className=" text-[#D3FD50]  gap-20">
      <div className="whitespace-nowrap  gap-[50vw] flex  moveleft absolute left-0 top-[15%] ">
        <span className="text-[10vw]  flex gap-[50vw]  ">
          <p>{arr[0]}</p>
          <p>{arr[0]}</p>
        </span>
        <span className="text-[10vw]  flex gap-[50vw]  ">
          <p>{arr[0]}</p>
          <p>{arr[0]}</p>
        </span>
      </div>

      <div className="absolute moveright z-1 left-0  items-baseline-last flex whitespace-nowrap top-[55%]">
        <span className="text-[10vw] pl-[50vw] flex">{arr[1]}</span>
        <span className="text-[5vw] pl-30 text-white ">{arr[2]}</span>
        <span className="text-[10vw] pl-[50vw] flex">{arr[1]}</span>
        <span className="text-[5vw] pl-30 text-white ">{arr[2]}</span>
        <span className="text-[10vw] pl-[50vw] flex">{arr[1]}</span>
        <span className="text-[5vw] pl-30 text-white ">{arr[2]}</span>
        <span className="text-[10vw] pl-[50vw] flex">{arr[1]}</span>
        <span className="text-[5vw] pl-30 text-white ">{arr[2]}</span>
      </div>
    </div>
  );
};

export default Marquee;
