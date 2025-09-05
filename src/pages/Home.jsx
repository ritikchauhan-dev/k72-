import React from "react";
import Video from "../components/home/Video";
import Image from "../components/home/Image";
import HomeUpperText from "../components/home/HomeUpperText";
import HomeLowerText from "../components/home/HomeLowerText";
import Navbar from "../components/Navigation/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar color="white" />
      <div>
        <div className="fixed h-screen w-screen">
          <Image />
          <Video />
        </div>
        <div className="relative h-screen pb-2 pt-55 lg:pt-0 flex flex-col gap-20 items-center  justify-between  p-4">
          <HomeUpperText />
          <HomeLowerText />
        </div>
      </div>
    </div>
  );
};

export default Home;
