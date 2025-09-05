import FirstPage from "../components/agence/FirstPage";
import SecondPage from "../components/agence/SecondPage";
import ThirdPage from "../components/agence/ThirdPage";
import LogoIcon from "../components/common/LogoIcon";
import Navbar from "../components/Navigation/Navbar";
const Agence = () => {
  return (
    <div className="">
      <div className="md:hidden">
        <Navbar color="black" />
      </div>
      <LogoIcon color="black" />
      <div>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
      </div>
    </div>
  );
};

export default Agence;
