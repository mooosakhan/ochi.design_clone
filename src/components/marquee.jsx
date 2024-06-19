// import { motion } from "framer-motion";
// import React from "react";

// function Marquee() {

//   return (
//     <div className="w-full py-20 bg-[#004D43]  rounded-t-3xl">
//       <div className="text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden gap-10">
//         <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease:"linear",repeat: Infinity,duration:5}}  className="text-[24vw] leading-none tracking-tighten uppercase pt-10 -mb-32 font-bold mr-20">
//           We are ochi
//         </motion.h1>
//         <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease:"linear",duration:5}} className="text-[24vw] leading-none tracking-tighten uppercase pt-10 -mb-32 font-bold mr-20">
//           We are ochi
//         </motion.h1>

//         <div className="text border-t-2 border-b-2 border-zinc-200 flex gap-10 whitespace-nowrap overflow-hidden"></div>
//       </div>
//     </div>
//   );
// }

// export default Marquee;

import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".03" className="w-full py-20 bg-[#004D43] rounded-t-3xl">
      <div className="text border-t-2 border-b-2 border-zinc-400 tracking-tighten flex whitespace-nowrap overflow-hidden">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
        
          }}
          className="flex"
        >
          <h1 className="text-[20vw] leading-none tracking-tighten uppercase pb-10 font-bold pr-20">
            We are ochi
          </h1>
          <h1 className="text-[20vw] leading-none tracking-tighten uppercase pb-10 font-bold pr-20">
            We are ochi
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;

// import { motion } from "framer-motion";
// import React from "react";

// function Marquee() {

//   return (
//     <div className="w-full py-20 bg-[#004D43] rounded-t-3xl">
//       <div className="border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden">
//         <motion.div
//           initial={{ x: "0%" }}
//           animate={{ x: "-100%" }}
//           transition={{
//             ease: "linear",
//             duration: 5,
//             repeat: Infinity,
//             repeatType: "loop",
//           }}
//           className="flex gap-10"
//         >
//           <h1 className="text-[22vw] leading-none tracking-tighten uppercase pt-10 -mb-32 font-bold mr-20">
//             We are ochi
//           </h1>
//           <h1 className="text-[22vw] leading-none tracking-tighten uppercase pt-10 -mb-32 font-bold mr-20">
//             We are ochi
//           </h1>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Marquee;
