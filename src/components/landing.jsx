import { motion } from "framer-motion";
import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";

function landing() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"  className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-44 px-16">
        {["we create", "eye opening", "presentetion"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit overflow-hidden flex">
                {index===1 && (<motion.div 
                initial={{width:0}} animate={{width:"9vw"}} transition={{ease :[0.16, 1, 0.3, 1] ,duration :1.5,delay:.3}}
                // mr-1vw
                // mt-[1.2vw]
                className="relative top-[1vw] w-[9vw] rounded-3xl h-[5.7vw] ">
                <img className="rounded h-[5.3vw]" src="data:image/jpeg;base64,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" alt="" />
                </motion.div>)}
              <h1 className="uppercase leading-[6.5vw] h-full tracking-tighter py-1vw text-[7.5vw] font-bold">
                {item}
              </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-[1vw] border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="flex item-center gap-3">
          <div className="px-2 py-1 flex items-center justify-center  border-[1px] border-zinc-400 rounded-full font-light text-md uppercase">
            Start the Project
          </div>
          <div className="h-11 w-11 flex items-center justify-center border-[1px] border-zinc-400 rounded-full ">
            <CiLocationArrow1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default landing;
