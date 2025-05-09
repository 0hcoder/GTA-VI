import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
        <div className="main w-full">
          <div className="landing w-full h-screen bg-black">
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
                className="w-full h-full bg-cover absolute top-0 left-0"
                src="./sky.png"
                alt=""
              />
              <img
                className="w-full h-full bg-cover absolute top-0 left-0"
                src="./bg.png"
                alt=""
              />
              <img
                className="absolute -bottom-[70%] left-1/2 -translate-x-1/2 scale-[0.8]"
                src="./girlbg.png"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
