import React from "react";
import "./Button57.css";

function Cards() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".03" className="w-full h-screen ">
         <div className="line border-t border-zinc-600 mt-5"></div>
        <div className="flex gap-5 px-20 py-36">
        
      <div className="cardcontainer  w-1/2 h-[53vh] ">
        <div className="card relative w-full flex items-center justify-center rounded-2xl h-full bg-[#004D43]">
          <img className="w-36" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          {/* <button className="absolute left-9 text-[#CDEA68] border-[#CDEA68] bottom-9 border-2 px-3 py-[0.2vw] rounded-full">&copy;2019-2023</button> */}
          <button className="button-57 absolute left-9 text-[#CDEA68] border-[#CDEA68] bottom-9 border-2 px-3 py-[0.2vw] rounded-full" role="button">
      <span className="text">&copy;2019-2023</span>
      <span>&copy;2019-2023</span>
    </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[53vh]">
        <div className="card relative w-full flex items-center justify-center  rounded-2xl h-full bg-[#004D43]">
          <img className="w-36" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className="absolute left-9 text-[#CDEA68] border-[#CDEA68] bottom-9 border-2 px-3 py-[0.2vw] rounded-full uppercase">Rating 5.0 on clutch</button>
        </div>
        <div className="card relative w-full flex items-center justify-center rounded-2xl h-full bg-[#004D43]">
          <img className="w-28"  src=".\src\assets\logo003-removebg-preview (1).png" alt="" />
          <button className="absolute text- left-9 text-[#CDEA68] border-[#CDEA68] bottom-9 border-2 px-2 py-[0.2vw] rounded-full uppercase">business bootcamp alumni</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
