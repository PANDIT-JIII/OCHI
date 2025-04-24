import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-speed=".1"
      className="w-full py-20 rounded-t-2xl bg-[#004D43]"
    >
      <div className="border-zinc-300 flex border-t-[2px] border-b-[2px] whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          className="text-[15vw] uppercase font-bold font-['Founders Grotesk'] mb-6 text-white"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          className="text-[15vw] uppercase font-bold font-['Founders Grotesk'] mb-6 text-white"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
