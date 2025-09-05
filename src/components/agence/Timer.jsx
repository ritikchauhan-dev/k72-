import React from "react";
import { useState, useEffect } from "react";
const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format as HH:MM:SS (24-hour)
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  return (
    <>
      {hours}:{minutes}:{seconds}
    </>
  );
};

export default Timer;
