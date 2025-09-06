import LogoIcon from "../components/common/LogoIcon";
import ProjectsCard from "../components/projects/ProjectsCard";
import FullFooter from "../components/projects/FullFooter";
import Navbar from "../components/Navigation/Navbar";
import { useState } from "react";
import FullScreenNav from "../components/Navigation/FullScreenNav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
const Projects = () => {
  const projects = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".textani", {
      x: -800,
      duration: 2.5,
      delay: 0.6,
    });
    gsap.from(".heroani", {
      y: -400,
      duration: 2.5,
      delay: 0.6,
    });
    gsap.from(".hero", {
      height: "100px",
      stagger: {
        amount: 0.4,
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });
  const [showFullScreenNav, setShowFullScreenNav] = useState(false);
  return (
    <div>
      {showFullScreenNav ? (
        <FullScreenNav
          navopen={() => showFullScreenNav}
          onClose={() => setShowFullScreenNav(false)}
        />
      ) : (
        <>
          <div className="md:hidden">
            <Navbar color="black" setShowFullScreenNav={setShowFullScreenNav} />
          </div>
          <LogoIcon color="black" setShowFullScreenNav={setShowFullScreenNav} />
          <div className="lg:p-4 p-2 ">
            <div className=" pt-[45vh]">
              <h2 className="font-[font2] textani lg:text-[9.5vw] text-7xl uppercase">
                Projets
              </h2>
            </div>
            <div className="-lg:mt-20 heroani lol">
              {projects.map(function (elem, idx) {
                return (
                  <div
                    key={idx}
                    className="hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2"
                  >
                    <ProjectsCard image1={elem.image1} image2={elem.image2} />
                  </div>
                );
              })}
            </div>
          </div>
          <FullFooter />
        </>
      )}
    </div>
  );
};

export default Projects;
