import { motion, useAnimation } from "framer-motion";
import Cards from "../Cards";

function Featured1() {
  const cards = [useAnimation(), useAnimation()];
  const handelHover = (index) => {
    Cards[index].start({});
  };

  return (
    <div className=" w-full px-20 mt-20">
      <div className="cards w-full flex gap-10 mt-10">
        <motion.div
          onHoverStart={() => handelHover(0)}
          className="cardcontainer relative w-1/2 h-[70vh]"
        >
          <div className=" flex items-center gap-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-zinc-950"></div>
            <h1 className="text-lg">FYDE</h1>
          </div>
          <h1 className=" absolute flex overflow-hidden text-[#CDEA68] left-full mt-[3vw] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl leading-none tracking-tighter">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                className=" inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className=" card w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              className="relative px-4 py-2 uppercase border-2 rounded-full border-black overflow-hidden group"
            >
              {/* Animated Background */}
              <span className="absolute inset-0 bg-black transform scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100"></span>
              {/* Button Content */}
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                audit
              </span>
            </button>
            <button
              type="button"
              className="relative px-4 py-2 uppercase border-2 rounded-full border-black overflow-hidden group"
            >
              {/* Animated Background */}
              <span className="absolute inset-0 bg-black transform scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100"></span>
              {/* Button Content */}
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                copywriting
              </span>
            </button>
            <button
              type="button"
              className="relative px-4 py-2 uppercase border-2 rounded-full border-black overflow-hidden group"
            >
              {/* Animated Background */}
              <span className="absolute inset-0 bg-black transform scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100"></span>
              {/* Button Content */}
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                sales deak
              </span>
            </button>
            <button
              type="button"
              className="relative px-4 py-2 uppercase border-2 rounded-full border-black overflow-hidden group"
            >
              {/* Animated Background */}
              <span className="absolute inset-0 bg-black transform scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100"></span>
              {/* Button Content */}
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                slides desingns
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div className="cardcontainer relative w-1/2 h-[70vh]">
          <div className=" flex items-center gap-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-zinc-950"></div>
            <h1 className="text-lg">VISE</h1>
          </div>
          <h1 className=" absolute text-[#CDEA68] right-full mt-[3vw] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl leading-none tracking-tighter">
            {"VISE".split("").map((item, index) => (
              <motion.span key={index}>{item}</motion.span>
            ))}
          </h1>
          <div className=" card w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </div>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              className="relative px-4 py-2 uppercase border-2 rounded-full border-black overflow-hidden group"
            >
              {/* Animated Background */}
              <span className="absolute inset-0 bg-black transform scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100"></span>
              {/* Button Content */}
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                agency
              </span>
            </button>
            <button
              type="button"
              className="relative px-4 py-2 uppercase border-2 rounded-full border-black overflow-hidden group"
            >
              {/* Animated Background */}
              <span className="absolute inset-0 bg-black transform scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100"></span>
              {/* Button Content */}
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                company presentation
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Featured1;
