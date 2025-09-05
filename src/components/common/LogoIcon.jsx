import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
const LogoIcon = (props) => {
  const navRef1 = useRef(null);
  const navRef2 = useRef(null);
  const navRef3 = useRef(null);
  const headref1 = useRef(null);
  const headref2 = useRef(null);
  const headref3 = useRef(null);
  const lineRef1 = useRef(null);
  const lineRef2 = useRef(null);
  const projRef = useRef(null);
  const agenRef = useRef(null);
  const menuRef = useRef(null);
  const navbarRef = useRef(null);
  const menuRef3 = useRef(null);
  const ARef = useRef(null);

  const navigate = useNavigate();
  useEffect(() => {
    let lastScrollY = window.scrollY;
    gsap.registerPlugin(ScrollTrigger);
    const st = ScrollTrigger.create({
      start: 0,
      end: 0,
      onUpdate: () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScrollY) {
          // Scroll Down -> Hide Navbar
          gsap.to(projRef.current, {
            y: "-100%", // Moves navbar up
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(agenRef.current, {
            y: "-100%", // Moves navbar up
            duration: 0.8,
            ease: "power2.out",
          });
          gsap.to(menuRef.current, {
            y: "-70%",
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(menuRef3.current, {
            y: "70%",
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(headref3.current, {
            opacity: 0,
          });
        } else if (currentScroll < lastScrollY) {
          // Scroll Up -> Show Navbar
          gsap.to(projRef.current, {
            y: "0%",
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(agenRef.current, {
            y: "0%",
            duration: 0.8,
            ease: "power2.out",
          });
          gsap.to(menuRef.current, {
            y: "0%",
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(menuRef3.current, {
            y: "0%",
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(headref3.current, {
            opacity: 100,
          });
        }

        lastScrollY = currentScroll;
      },
    });

    return () => st.kill();
  }, []);
  useGSAP(function () {
    gsap.from(ARef.current, {
      y: 900,
      duration: 1.3,
      delay: 1,
    });
    gsap.from(".navhead1", {
      y: -800,
      duration: 1.3,
      delay: 1.2,
    });
    gsap.from(".navhead2", {
      y: -800,
      duration: 1.2,
      delay: 1.1,
    });
    gsap.from(".navhead3", {
      y: -800,
      duration: 1,
      delay: 1,
    });
  });
  return (
    <div
      ref={navbarRef}
      className="fixed z-50 font-[Font2] .olo hidden md:flex uppercase top-0 items-start justify-between w-full "
    >
      <div
        ref={ARef}
        className="w-36 p-2 "
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <svg
          className="w-full "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 103 44"
        >
          <path
            fill={props.color}
            fillRule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          ></path>
        </svg>
      </div>
      <div className="flex">
        <div
          ref={projRef}
          onClick={() => navigate("/projects")}
          onMouseEnter={() => {
            navRef1.current.style.height = "100%";
            headref1.current.style.color = "black";
          }}
          onMouseLeave={() => {
            navRef1.current.style.height = "0%";
            headref1.current.style.color = "white";
          }}
          className="h-12  xl:h-17 w-[20vw] hidden lg:flex items-end navhead1 relative text-white bg-black "
          style={{ cursor: "pointer" }}
        >
          <h1 ref={headref1} className=" xl:text-[1.4vw] relative z-10  px-2">
            projets
          </h1>
          <div
            ref={navRef1}
            className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full "
          ></div>
        </div>

        <div
          ref={agenRef}
          onClick={() => navigate("/agence")}
          onMouseEnter={() => {
            navRef2.current.style.height = "100%";
            headref2.current.style.color = "black";
          }}
          onMouseLeave={() => {
            navRef2.current.style.height = "0%";
            headref2.current.style.color = "white";
          }}
          className="h-18 xl:h-25 w-[30vw] hidden lg:flex items-end navhead2 relative text-white bg-black "
          style={{ cursor: "pointer" }}
        >
          <h1 ref={headref2} className="xl:text-[1.4vw] relative z-10 px-2">
            agence
          </h1>
          <div
            ref={navRef2}
            className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full "
          ></div>
        </div>

        <div
          ref={menuRef}
          onClick={() => navigate("/menu")}
          onMouseEnter={() => {
            navRef3.current.style.height = "100%";
            headref3.current.style.color = "black";
            lineRef1.current.style.backgroundColor = "#000";
            lineRef2.current.style.backgroundColor = "#000";
          }}
          onMouseLeave={() => {
            navRef3.current.style.height = "0%";
            headref3.current.style.color = "white";
            lineRef1.current.style.backgroundColor = "#ffff";
            lineRef2.current.style.backgroundColor = "#ffff";
          }}
          className="h-28 w-[30vw] lg:h-25 xl:h-37 lg:w-[16vw] relative navhead3 text-white bg-black "
          style={{ cursor: "pointer" }}
        >
          <h1
            ref={headref3}
            className="text-[2.5vw]  lg:text-[1.4vw]  z-10 px-2 absolute bottom-0"
          >
            menu
          </h1>
          <div
            ref={navRef3}
            className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full "
          ></div>
          <div
            ref={menuRef3}
            className="flex flex-col relative  z-50  pt-3 xl:pt-4 h-full gap-1 items-end px-7"
          >
            <div
              ref={lineRef1}
              className="w-13 h-[0.1vh] xl:w-20 xl:h-0.5 bg-white"
            ></div>
            <div
              ref={lineRef2}
              className="w-8 h-[0.1vh] xl:w-13 xl:h-0.5 bg-white"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoIcon;
