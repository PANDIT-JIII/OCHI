import { MdArrowOutward } from "react-icons/md";
function Vishal() {
  return (
    <div className="flex flex-col justify-start items-start h-auto w-full">
      <h1 className="text-4xl md:text-7xl font-bold py-10 md:py-20 px-4 md:pl-16 font-['Founders Grotesk']">
        SERVICES
      </h1>
      <div className="w-full border-t-[1.5px] border-zinc-300 px-4 md:pl-16 py-10">
        <p className="text-2xl md:text-5xl font-sans md:w-[75%]">
          We create{" "}
          <span className="underline underline-offset-8"> eye-catching </span>
          and <span className="underline underline-offset-8"> eye-opening </span>
          presentations that educate, inspire and influence action.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:px-16 px-4 py-5">
        <div className="w-full md:w-1/2">
          <p className="font-md">We do this by following a simple approach:</p>
        </div>
        <div className="w-full md:w-1/2 flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2 space-y-5 md:px-10">
            <p className="text-lg font-bold underline">Goal defines it all</p>
            <div>
              <p>What do you want to achieve?</p>
              <p>
                Understanding the purpose of your presentation allows us to
                tailor it to ensure it hits the mark and drives results.
              </p>
            </div>
            <div className="space-y-5 pt-10">
              <p className="text-lg font-bold underline">Audience is the hero</p>
              <p>
                Who is it for? What do they want? Why does it matter to them?
                We need to know your audience well enough to deliver a
                personalized presentation that they truly care about.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-5 md:px-10">
            <p className="text-lg font-bold underline">Context makes a difference</p>
            <p>
              When do you present? Online or live? At a sales meeting, at a
              conference, or just sending a cold email? We knit the context
              together to decide the style of the presentation.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full border-b-[1.5px] border-zinc-300 py-10">
        <h1 className="text-3xl md:text-5xl font-semibold px-4 md:pl-16">
          Holistic Process
        </h1>
      </div>
      {/* Phase Sections */}
      {["Discovery", "Storytelling", "Design", "Feedback", "Delivery"].map(
        (phase, index) => (
          <div
            key={phase}
            className={`w-full flex flex-col md:flex-row justify-between items-start border-b-[1.5px] border-zinc-300 py-5 px-4 md:px-9 ${
              index === 0 ? "pt-10" : ""
            }`}
          >
            <div className="w-full md:w-1/2">
              <p className="text-md">01. Phase</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-between items-center">
              <p className="text-md">{phase}</p>
              <p className="text-gray-500 underline">READ</p>
            </div>
          </div>
        )
      )}
      {/* Bottom Section */}
      <div className="h-auto w-full flex flex-col justify-start items-center bg-[#cdea68] mt-20 md:mt-56 gap-10 md:gap-20 py-10 md:py-20">
        <div className="w-full border-b border-b-zinc-400 px-4 md:px-10 pb-10">
          <p className="text-2xl md:text-6xl font-light font-sans">
            <span className="underline">Let’s be honest.</span> There are really
            no excuses to have a bad presentation anymore. No one has time for
            poorly communicated ideas. Focus on what you do best — growing your
            business, while we do our best at{" "}
            <span className="underline">making your presentations awesome.</span>
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-start px-4 md:px-16 gap-10 md:gap-0">
          <div className="w-full md:w-1/2">
            <h1 className="text-md font-semibold">Our Capabilities:</h1>
          </div>
          {/* Capabilities */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-5">
            {[
              "RAISE FUNDS:",
              "SELL PRODUCTS:",
              "HIRE & MANAGE PEOPLE",
              "ADDITIONAL",
            ].map((category) => (
              <div key={category} className="space-y-5">
                <div className="flex space-x-3 items-center">
                  <div className="h-4 w-4 rounded-full bg-black"></div>
                  <p className="text-lg font-bold">{category}</p>
                </div>
                {["Option 1", "Option 2"].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <button className="border-black border px-4 py-1 hover:bg-black hover:text-white rounded-full">
                      {option}
                    </button>
                    <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black">
                      <MdArrowOutward />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vishal
