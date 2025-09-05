import FirstPage from "../components/agence/FirstPage";
import SecondPage from "../components/agence/SecondPage";
import ThirdPage from "../components/agence/ThirdPage";
import LogoIcon from "../components/common/LogoIcon";
import { useState } from "react";
import FullScreenNav from "../components/Navigation/FullScreenNav";
import Navbar from "../components/Navigation/Navbar";

const Agence = () => {
  const [showFullScreenNav, setShowFullScreenNav] = useState(false);
  return (
    <div className="">
      {showFullScreenNav ? (
        <FullScreenNav onClose={() => setShowFullScreenNav(false)} />
      ) : (
        <>
          <div className="md:hidden">
            <Navbar color="black" />
          </div>
          <LogoIcon color="black" setShowFullScreenNav={setShowFullScreenNav} />
          <div>
            <FirstPage />
            <SecondPage />
            <ThirdPage />
          </div>
        </>
      )}
    </div>
  );
};

export default Agence;
