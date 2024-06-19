import React from "react";
import { GoDotFill } from "react-icons/go";

function about() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="" className="w-full text-black p-20 rounded-t-3xl bg-[#CDEA68]">
      <h1 className="text-[3.5vw]  leading-[3.5vw] tracking-tighter pr-48">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to <span className="underline">raise funds</span> , sell products ,
        <span className="underline">explain complex ideas ,</span> and hire
        great people.
      </h1>
      <div className="w-full flex gap-5 border-t pt-2 mt-10 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-[3.5vw] tracking-tighter tracking-tighter">
            Our approach :
          </h1>
          <button className="px-6 text-[1.2vw] py-3.5 flex justify-center items-center bg-zinc-800 text-white mt-3 rounded-full uppercase">
            Read more
            <div className="pl-7">
              <GoDotFill />
            </div>
          </button>
        
      </div>  
      <div className="w-1/2 rounded-4xl mt-3">
      <img
      className="bg-gray-200 w-full max-w-full rounded-3xl"
      src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
      // width="663"
      // height="469"
      // srcSet="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x"
      // alt="image description"
      style={{}}
    />
      </div>
        </div>
    </div>
  );
}

export default about;
