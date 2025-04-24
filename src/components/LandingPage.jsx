import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.8' className="w-full h-auto pt-1">
      <div className=" textstructure mt-52 p-20">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration:1}}
                  >
                    <img
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt="logo"
                      className=" overflow-hidden rounded-md mr-3 w-[8vw] h-[5.1vw] mt-[1vw]"
                    />
                  </motion.div>
                )}
                <h1 className='uppercase text-[7vw] h-full leading-[6vw] tracking-tighter font-["Founders Grotesk"] font-bold'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" border-t-[1px] border-zinc-400 mt-10 flex justify-between items-center py-4 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index} className="text-lg tracking-tight leading-none ">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-1">
          <div className="">
          <button
                type="button"
                className="relative px-7 py-2 uppercase border-2 rounded-full border-black overflow-hidden group"
              >
                {/* Animated Background */}
                <span className="absolute inset-0 bg-black transform scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100"></span>
                {/* Button Content */}
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                start the project
                </span>
              </button>
          </div>
         
          <button
                type="button"
                className="relative px-3 py-3 uppercase border-2 rounded-full border-black overflow-hidden group"
              >
                {/* Animated Background */}
                <span className="absolute inset-0 bg-black transform scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100"></span>
                {/* Button Content */}
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                <FaArrowUpLong className=" rotate-45" />
                </span>
              </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
