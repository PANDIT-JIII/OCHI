function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-16 border-b-[2px] border-zinc-400 pb-10">
        <h1 className="text-6xl font-['Neue Montreal'] tracking-tight">
          Featured Project
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative w-1/2 h-[70vh]">
            <div className=" flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-zinc-950"></div>
              <h1 className="text-lg uppercase">Cardboard Spaceship</h1>
            </div>
            {
              <h1 className=" absolute text-[#CDEA68] left-full mt-[3vw] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl leading-none tracking-tighter">
                Cardboard Spaceship
              </h1>
            }
            <div className=" card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt=""
              />
            </div>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                className="relative px-4 py-2 uppercase border-2 rounded-full border-black overflow-hidden group"
              >
                {/* Animated Background */}
                <span className="absolute inset-0 bg-black transform scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100"></span>
                {/* Button Content */}
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                  branded template
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
                  social media template
                </span>
              </button>
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[70vh]">
            <div className=" flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-zinc-950"></div>
              <h1 className="text-lg uppercase">AH2 & Matt Horn</h1>
            </div>
            {
              <h1 className=" absolute text-[#CDEA68] right-full mt-[3vw] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl leading-none tracking-tighter">
                AH2 & Matt Horn
              </h1>
            }
            <div className=" card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt=""
              />
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="relative px-4 py-2 uppercase border-2 rounded-full border-black overflow-hidden group"
              >
                {/* Animated Background */}
                <span className="absolute inset-0 bg-black transform scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100"></span>
                {/* Button Content */}
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                  pitch deck
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
