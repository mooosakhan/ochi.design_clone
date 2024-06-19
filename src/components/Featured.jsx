import { motion, useAnimation } from "framer-motion";
import { Power4 } from "gsap/all";
import React from "react";

const boxStyle = {
  boxShadow: "0 0 20px #004D43",
  border: "2px solid #004D43",
};

function Featured() {

  const cards=[useAnimation(),useAnimation()]

  const handleHover = (index) => {
    cards[index].start({ y:"0"});
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y:"100%"});
  };

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".5" className="relative w-full py-20 text-white rounded-t-full">
      <div className="w-full px-20 border-zinc-700 pb-20 border-b-[1px] rounded-t-lg">
        <h1 className="text-7xl tracking-tight">Featured Project's</h1>
      </div>
     
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div 
          onHoverStart={()=> handleHover(0)}
          onHoverEnd={()=> handleHoverEnd(0)}
          className="cardcontainer relative w-1/2 h-[80vh]">
            <h1 className="absolute flex overflow-hidden right-0
             translate-x-1/2  text-[#CDEA68] top-1/2 -translate-y-1/2 
             tracking-tight  z-[9] loading-none text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                initial={{y:"100%"}}
                animate={cards[0]}
                transition={{ease:[0.16, 1, 0.3, 1],delay: index*0.05}}
                className="inline-block">{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-lg ">
              <img
              style={boxStyle}
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 hover:duration-500 rounded-lg h-full w-full bg-cover"
              />
            </div>
          </motion.div>
          <motion.div 
           onHoverStart={()=> handleHover(1)}
           onHoverEnd={()=> handleHoverEnd(1)}
          className="cardcontainer relative w-1/2 h-[80vh]">
            <div className="card w-full  h-full rounded-lg ">
            <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 
             text-[#CDEA68] top-1/2 -translate-y-1/2 tracking-tight 
              z-[9] loading-none text-8xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                initial={{y:"100%"}}
                animate={cards[1]}
                transition={{ease:[0.16, 1, 0.3, 1],delay: index*0.05}}
                className="inline-block">{item}</motion.span>
              ))}
            </h1>
              <img
                style={boxStyle}
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
                
                className="rounded-lg h-full w-full bg-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 hover:duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
