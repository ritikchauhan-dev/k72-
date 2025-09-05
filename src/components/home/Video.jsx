import React from "react";
import videoFile from "/video.mp4";
const Video = () => {
  return (
    <div className="  h-full w-full  ">
      <video
        autoPlay
        loop
        muted
        src={videoFile}
        className="h-full w-full object-cover "
      />
    </div>
  );
};

export default Video;
