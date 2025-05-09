import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.to("#vi-mask-group", {
    rotate: 10,
    ease: "power4.inOut",
    transformOrigin: "50% 50%",
    duration: 2,
    })
    .to("#vi-mask-group", {
     scale: 10,
     duration: 2,
     delay: -1.8,
     ease: "expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
    })
  })
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
                  fontSize="300"
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
    </>
  );
};

export default App;
