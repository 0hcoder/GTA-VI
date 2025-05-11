import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to("#vi-mask-group", {
      rotate: 10,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
      duration: 2,
    }).to("#vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setIsVisible(true);
          this.kill();
        }
      },
    });
  });
  useGSAP(() => {
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });

      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [isVisible]);
  return (
    <>
      <div className="svg flex ite justify-center fixed top-0 left-0  z-[10] w-full h-screen overflow-hidden bg-[#000] ">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g id="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>

          <image
            href="./bg.png"
            x="10"
            y="120"
            width="100%"
            height="100%"
            mask="url(#viMask)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
      {isVisible && (
        <div className="main w-full Overflow-hidden">
          <div className="landing w-full h-screen no-scrollbar bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10  text-white">
              <div className="logo flex gap-6 items-center">
                <div className="lines flex flex-col gap-[6px]">
                  <div className="line w-14 h-1.5 bg-white"></div>
                  <div className="line w-9 h-1.5 bg-white"></div>
                  <div className="line w-7 h-1.5 bg-white"></div>
                </div>
                <h3 className="text-3xl -mt-[19px] leading-none">RockStar</h3>
              </div>
            </div>
            <div className="imagesdiv relative w-full h-screen overflow-y-hidden">
              <img
                className="sky w-full h-full bg-cover absolute scale-[1.2] top-0 left-0"
                src="./sky.png"
                alt=""
              />
              <img
                className="w-full bg scale-[1.2] h-full bg-cover absolute top-0 left-0"
                src="./bg.png"
                alt=""
              />
              <div className="text absolute top-1.5 left-1/2 -translate-x-1/2 text-white flex flex-col gap-1">
                <h1 className="text-[6.2rem] leading-none  -ml-16">grand</h1>
                <h1 className="text-[6.2rem] leading-none  ml-14">theft</h1>
                <h1 className="text-[6.2rem] leading-none  -ml-16">auto</h1>
              </div>
              <img
                className="absolute -bottom-[70%] left-1/2 -translate-x-1/2 scale-[0.8]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar w-full px-6 py-8 bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 z-[10]">
              <div className="flex gap-4 items-center text-white ">
                <i className="ri-arrow-down-line"></i>
                <h3 className="font-[Helvetica_Now_Display]">Scrol Down</h3>
              </div>
              <img
                className="h-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen bg-amber-500">
            <img className="w-full h-full bg-cover" src="https://images.alphacoders.com/135/thumb-1920-1355218.jpg" alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
