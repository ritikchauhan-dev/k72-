import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
const MenuLinks = () => {
  useGSAP(function () {
    gsap.from(".link1", {
      y: -700,
      duration: 2,
      stagger: 0.2,
    });
    gsap.from(".link", {
      x: -2000,
      duration: 1.8,
      stagger: 0.1,
    });
  });
  return (
    <div className="overflow-hidden">
      <Link to="/projects">
        <div className="overflow-hidden link origin-top relative border-t-1 border-white">
          <h1 className="link1 font-[font2] uppercase text-6xl text-center pt-7 pb-5 md:pt-6 md:pb-3 leading-[0.7] sm:text-7xl sm:pt-8 sm:leading-[0.8] md:text-[9vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5">
            Projets
          </h1>
          <div className="moveLink absolute text-black flex h-full top-0 bg-[#D3FD50]">
            <div className="moveX flex items-center">
              <h2 className="whitespace-nowrap font-[font2] uppercase text-center text-6xl  pt-7 pb-5 leading-[0.7] sm:text-8xl sm:pt-10 sm:leading-[0.8] md:text-[9vw] lg:text-[11vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:text-[8vw] 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5 ">
                Pour Tout voir
              </h2>
              <img
                className="h-14 w-32 object-cover rounded-full shrink-0 sm:h-24 sm:w-48 md:h-24 md:w-60  lg:h-30 lg:w-62"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] uppercase text-center text-6xl  pt-7 pb-5 leading-[0.7] sm:text-8xl sm:pt-10 sm:leading-[0.8] md:text-[9vw] lg:text-[11vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:text-[8vw] 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5 ">
                Pour Tout voir
              </h2>
              <img
                className="h-14 w-32 object-cover rounded-full shrink-0 sm:h-24 sm:w-48 md:h-24 md:w-60  lg:h-30 lg:w-62"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
            </div>
            <div className="moveX flex items-center">
              <h2 className="whitespace-nowrap font-[font2] uppercase text-center text-6xl  pt-7 pb-5 leading-[0.7] sm:text-8xl sm:pt-10 sm:leading-[0.8] md:text-[9vw] lg:text-[11vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:text-[8vw] 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5 ">
                Pour Tout voir
              </h2>
              <img
                className="h-14 w-32 object-cover rounded-full shrink-0 sm:h-24 sm:w-48 md:h-24 md:w-60  lg:h-30 lg:w-62"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] uppercase text-center text-6xl  pt-7 pb-5 leading-[0.7] sm:text-8xl sm:pt-10 sm:leading-[0.8] md:text-[9vw] lg:text-[11vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:text-[8vw] 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5 ">
                Pour Tout voir
              </h2>
              <img
                className="h-14 w-32 object-cover rounded-full shrink-0 sm:h-24 sm:w-48 md:h-24 md:w-60  lg:h-30 lg:w-62"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </Link>
      <Link to="/agence">
        <div className="link overflow-hidden origin-top relative border-t-1 border-white">
          <h1 className="link1 font-[font2] uppercase text-6xl text-center pt-7 pb-5 md:pt-6 md:pb-3 leading-[0.7] sm:text-7xl sm:pt-8 sm:leading-[0.8] md:text-[9vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5">
            Agence
          </h1>
          <div className="moveLink absolute text-black flex top-0 h-full bg-[#D3FD50]">
            <div className="moveX flex items-center">
              <h2 className="whitespace-nowrap font-[font2] uppercase text-center text-6xl  pt-7 pb-5 leading-[0.7] sm:text-8xl sm:pt-10 sm:leading-[0.8] md:text-[9vw] lg:text-[11vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:text-[8vw] 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5 ">
                Pour Tout savoir
              </h2>
              <img
                className="h-14 w-32 object-cover rounded-full shrink-0 sm:h-24 sm:w-48 md:h-24 md:w-60  lg:h-30 lg:w-62"
                src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] uppercase text-center text-6xl  pt-7 pb-5 leading-[0.7] sm:text-8xl sm:pt-10 sm:leading-[0.8] md:text-[9vw] lg:text-[11vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:text-[8vw] 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5 ">
                Pour Tout savoir
              </h2>
              <img
                className="h-14 w-32 object-cover rounded-full shrink-0 sm:h-24 sm:w-48 md:h-24 md:w-60  lg:h-30 lg:w-62"
                src="https://k72.ca/uploads/teamMembers/CAMILLE_640X290_2-640x290.jpg"
                alt=""
              />
            </div>
            <div className="moveX flex items-center">
              <h2 className="whitespace-nowrap font-[font2] uppercase text-center text-6xl  pt-7 pb-5 leading-[0.7] sm:text-8xl sm:pt-10 sm:leading-[0.8] md:text-[9vw] lg:text-[11vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:text-[8vw] 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5 ">
                Pour Tout savoir
              </h2>
              <img
                className="h-14 w-32 object-cover rounded-full shrink-0 sm:h-24 sm:w-48 md:h-24 md:w-60  lg:h-30 lg:w-62"
                src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] uppercase text-center text-6xl  pt-7 pb-5 leading-[0.7] sm:text-8xl sm:pt-10 sm:leading-[0.8] md:text-[9vw] lg:text-[11vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:text-[8vw] 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5 ">
                Pour Tout savoir
              </h2>
              <img
                className="h-14 w-32 object-cover rounded-full shrink-0 sm:h-24 sm:w-48 md:h-24 md:w-60  lg:h-30 lg:w-62"
                src="https://k72.ca/uploads/teamMembers/CAMILLE_640X290_2-640x290.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </Link>
      <Link to="/">
        <div className="link overflow-hidden origin-top relative border-t-1 border-white">
          <h1 className="link1 font-[font2] uppercase text-6xl text-center pt-7 pb-5 md:pt-6 md:pb-3 leading-[0.7] sm:text-7xl sm:pt-8 sm:leading-[0.8] md:text-[9vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5">
            Contact
          </h1>
          <div className="moveLink absolute text-black flex h-full top-0 bg-[#D3FD50]">
            <div className="moveX flex items-center">
              <h2 className="whitespace-nowrap font-[font2] uppercase text-center text-6xl  pt-7 pb-5 leading-[0.7] sm:text-8xl sm:pt-10 sm:leading-[0.8] md:text-[9vw] lg:text-[11vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:text-[8vw] 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5">
                pour envoyer un fax
              </h2>
              <img
                className="h-14 w-32 object-cover rounded-full shrink-0 sm:h-24 sm:w-48 md:h-24 md:w-60  lg:h-30 lg:w-62"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] uppercase text-center text-6xl  pt-7 pb-5 leading-[0.7] sm:text-8xl sm:pt-10 sm:leading-[0.8] md:text-[9vw] lg:text-[11vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:text-[8vw] 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5">
                pour envoyer un fax
              </h2>
              <img
                className="h-14 w-32 object-cover rounded-full shrink-0 sm:h-24 sm:w-48 md:h-24 md:w-60  lg:h-30 lg:w-62"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
            </div>
            <div className="moveX flex items-center">
              <h2 className="whitespace-nowrap font-[font2] uppercase text-center text-6xl  pt-7 pb-5 leading-[0.7] sm:text-8xl sm:pt-10 sm:leading-[0.8] md:text-[9vw] lg:text-[11vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:text-[8vw] 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5">
                pour envoyer un fax
              </h2>
              <img
                className="h-14 w-32 object-cover rounded-full shrink-0 sm:h-24 sm:w-48 md:h-24 md:w-60  lg:h-30 lg:w-62"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] uppercase text-center text-6xl  pt-7 pb-5 leading-[0.7] sm:text-8xl sm:pt-10 sm:leading-[0.8] md:text-[9vw] lg:text-[11vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:text-[8vw] 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5">
                pour envoyer un fax
              </h2>
              <img
                className="h-14 w-32 object-cover rounded-full shrink-0 sm:h-24 sm:w-48 md:h-24 md:w-60  lg:h-30 lg:w-62"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </Link>
      <Link to="/">
        <div className="link overflow-hidden origin-top relative border-y-1 border-white">
          <h1 className="link1 font-[font2] uppercase text-6xl text-center pt-7 pb-5 md:pt-6 md:pb-3 leading-[0.7] sm:text-7xl sm:pt-8 sm:leading-[0.8] md:text-[9vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5 ">
            Blogs
          </h1>
          <div className="moveLink absolute text-black flex h-full top-0 bg-[#D3FD50]">
            <div className="moveX flex items-center">
              <h2 className="whitespace-nowrap font-[font2] uppercase text-center text-6xl  pt-7 pb-5 leading-[0.7] sm:text-8xl sm:pt-10 sm:leading-[0.8] md:text-[9vw] lg:text-[11vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:text-[8vw] 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5">
                lire les articles
              </h2>
              <img
                className=" h-14 w-32 object-cover rounded-full shrink-0 sm:h-24 sm:w-48 md:h-24 md:w-60  lg:h-30 lg:w-62 "
                src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] uppercase text-center text-6xl  pt-7 pb-5 leading-[0.7] sm:text-8xl sm:pt-10 sm:leading-[0.8] md:text-[9vw] lg:text-[11vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:text-[8vw] 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5">
                lire les articles
              </h2>
              <img
                className=" h-14 w-32 object-cover rounded-full shrink-0 sm:h-24 sm:w-48 md:h-24 md:w-60  lg:h-30 lg:w-62 "
                src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-1280x960.png"
                alt=""
              />
            </div>
            <div className="moveX flex items-center">
              <h2 className="whitespace-nowrap font-[font2] uppercase text-center text-6xl  pt-7 pb-5 leading-[0.7] sm:text-8xl sm:pt-10 sm:leading-[0.8] md:text-[9vw] lg:text-[11vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:text-[8vw] 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5">
                lire les articles
              </h2>
              <img
                className=" h-14 w-32 object-cover rounded-full shrink-0 sm:h-24 sm:w-48 md:h-24 md:w-60  lg:h-30 lg:w-62 "
                src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] uppercase text-center text-6xl  pt-7 pb-5 leading-[0.7] sm:text-8xl sm:pt-10 sm:leading-[0.8] md:text-[9vw] lg:text-[11vw] xl:leading-[0.9] xl:pb-2 xl:pt-5 2xl:text-[8vw] 2xl:leading-[0.8] 2xl:pb-0  2xl:pt-5">
                lire les articles
              </h2>
              <img
                className=" h-14 w-32 object-cover rounded-full shrink-0 sm:h-24 sm:w-48 md:h-24 md:w-60  lg:h-30 lg:w-62"
                src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-1280x960.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuLinks;
