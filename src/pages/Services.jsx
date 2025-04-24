import { MdArrowOutward } from "react-icons/md";
function Services() {
  return (
    <div className="flex flex-col justify-start items-left h-auto w-full">
      <h1 className="text-7xl font-semibold  py-20 font-serif pl-16">
        SERVICES                       
      </h1>
      <div className="w-full items-left border-[1.5px] border-zinc-300 pl-16 py-10">
        <p className="text-5xl font-sans w-[75%] ">
          We create{" "}
          <span className="underline underline-offset-8"> eye-catching </span>
          and <span className="underline underline-offset-8">
            eye-opening
          </span>{" "}
          presentations that educate, inspire and influence action.
        </p>
      </div>
      <div className="flex justify-evenly items-start px-16 py-5">
        <div className="w-1/2 ">
          <p className="font-md w-[200px]">
            We do this by following simple approach:
          </p>
        </div>
        <div className="w-1/2 flex justify-start items-start ">
          <div className="w-1/2 flex-col space-y-5 px-10">
            <p className="text-md font-md underline">Goal defines it all</p>
            <div>
              <p>What do you want to achieve?</p>
              <p>
                Understanding the purpose of your presentation allows us to
                tailor it to ensure it hits the mark and drives results.
              </p>
            </div>
            <div className=" flex-col space-y-5 pt-14 ">
              <p className="text-md font-md underline">Audience is the hero</p>
              <div>
                <p>
                  Who is it for? What do they want? Why does it matter to them?
                  We need to know your audience well enough to deliver a
                  personalized presentation that they truly care about.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex-col ">
            <div className=" flex-col space-y-5 px-10 ">
              <p className="text-md font-md underline">
                Context makes a difference
              </p>
              <div>
                <p>
                  When do you present? Online or live? At a sales meeting, at a
                  conference, or just sending a cold email? We knit the context
                  together to decide the style of the presentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b-[1.5px] border-zinc-300 py-10">
        <h1 className="text-5xl font-md pl-16"> Holstic Process</h1>
      </div>
      <div className="w-full flex justify-between items-start px-10 py-8">
        <div className="w-1/2">
          <p className="text-md">01. Phase</p>
        </div>
        <div className="w-1/2 flex flex-col justify-start items-left gap-10 ">
          <div className="flex w-full justify-between items-center">
            <p className="text-md">Discovery</p>
            <p className="text-md text-gray-500">READ</p>
          </div>
          <div className="mt-10 space-y-5 py-10">
            <img
              src={
                "https://ochi.design/wp-content/uploads/2022/05/1.Discovery-194x194.png"
              }
              alt="discovery"
              className="h-[100px] w-[100px] rounded-lg"
            />
            <p className="text-md w-[500px]">
              We define your goals, get to know your audience, and understand
              the context. Through a process of exploration, investigation, and
              research, we seek the insights that inform our future decisions.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-start border-[1.5px] border-zinc-300 py-5 px-9">
        <div className="w-1/2">
          <p className="text-md">01. Phase</p>
        </div>
        <div className=" w-1/2 flex justify-between items-start">
          <p className="text-md">Storytelling</p>
          <p className="text-gray-500 underline">READ</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-start border-[1.5px] border-zinc-300 py-5 px-9">
        <div className="w-1/2">
          <p className="text-md">01. Phase</p>
        </div>
        <div className=" w-1/2 flex justify-between items-start">
          <p className="text-md">Design</p>
          <p className="text-gray-500 underline">READ</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-start border-[1.5px] border-zinc-300 py-5 px-9">
        <div className="w-1/2">
          <p className="text-md">01. Phase</p>
        </div>
        <div className=" w-1/2 flex justify-between items-start">
          <p className="text-md">Feedback</p>
          <p className="text-gray-500 underline">READ</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-start border-[1.5px] border-zinc-300 py-5 px-9">
        <div className="w-1/2">
          <p className="text-md">01. Phase</p>
        </div>
        <div className=" w-1/2 flex justify-between items-start">
          <p className="text-md">Delivery</p>
          <p className="text-gray-500 underline">READ</p>
        </div>
      </div>
      <div className="h-auto w-full flex flex-col justify-start items-center bg-[#cdea68] mt-56 gap-20 py-20 ">
        <div className="w-full py-20 border-b border-b-zinc-400 px-10">
          <p className="text-6xl font-sm font-sans w-[95%]">
            <span className="underline">Let’s be honest.</span> There are really
            no excuses to have a bad presentation anymore. No one has time for
            poorly communicated ideas. Focus on what you do best — growing your
            business, while we do our best at{" "}
            <span className="underline">
              making your presentations awesome.
            </span>
          </p>
        </div>
        <div className=" w-full flex justify-between px-16">
          <div className="w-1/2 justify-start items-left">
            <h1 className="text-md">Our Capabilities:</h1>
          </div>
          <div className="w-1/2 flex">
            <div className="w-1/2 flex-col space-y-10 *:">
              <div className="flex space-x-5 items-center">
                <div className="h-[14px] w-[14px] rounded-full bg-black"></div>
                <p className="text-md">RAISE FUNDS:</p>
              </div>
              <div>
                <div
                  className=" flex justify-start items-center
 space-x-2"
                >
                  <button
                    type="button"
                    className="border-black border w-[150px] hover:bg-black hover:text-white rounded-full p-1"
                  >
                    INVESTOR DECK
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black   font-semibold">
                    <MdArrowOutward className="text-xl" />
                  </div>
                </div>
                <div className=" flex justify-start items-center space-x-2">
                  <button
                    type="button"
                    className="border-black border w-[150px] hover:bg-black hover:text-white rounded-full p-1"
                  >
                    STARTUP PITCH
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black   font-semibold">
                    <MdArrowOutward />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex-col space-y-10 *:">
              <div className="flex space-x-5 items-center">
                <div className="h-[14px] w-[14px] rounded-full bg-black"></div>
                <p className="text-md">SELL PRODUCTS:</p>
              </div>
              <div>
                <div
                  className=" flex justify-start items-center
 space-x-2"
                >
                  <button
                    type="button"
                    className="border-black border w-[200px] hover:bg-black hover:text-white rounded-full p-1"
                  >
                    BUSINESS PROPOSAL
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black   font-semibold">
                    <MdArrowOutward className="text-xl" />
                  </div>
                </div>
                <div className=" flex justify-start items-center space-x-2">
                  <button
                    type="button"
                    className="border-black border w-[230px] hover:bg-black hover:text-white rounded-full p-1"
                  >
                    COMPANY PRESENTATION
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black   font-semibold">
                    <MdArrowOutward />
                  </div>
                </div>
                <div className=" flex justify-start items-center space-x-2">
                  <button
                    type="button"
                    className="border-black border w-[230px] hover:bg-black hover:text-white rounded-full p-1"
                  >
                    PRODUCT PRESENTATION
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black   font-semibold">
                    <MdArrowOutward />
                  </div>
                </div>
                <div className=" flex justify-start items-center space-x-2">
                  <button
                    type="button"
                    className="border-black border w-[150px] hover:bg-black hover:text-white rounded-full p-1"
                  >
                    SALES DECK
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black   font-semibold">
                    <MdArrowOutward />
                  </div>
                </div>
                <div className=" flex justify-start items-center space-x-2">
                  <button
                    type="button"
                    className="border-black border w-[150px] hover:bg-black hover:text-white rounded-full p-1"
                  >
                    SERVICE DECK
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black   font-semibold">
                    <MdArrowOutward />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-between px-16">
          <div className="w-1/2 "></div>
          <div className="w-1/2 flex">
            <div className="w-1/2 flex-col space-y-10 *:">
              <div className="flex space-x-5 items-center">
                <div className="h-[14px] w-[14px] rounded-full bg-black"></div>
                <p className="text-md">HIRE&MANAGEPEOPLE</p>
              </div>
              <div>
                <div
                  className=" flex justify-start items-center
 space-x-2"
                >
                  <button
                    type="button"
                    className="border-black border w-[150px] hover:bg-black hover:text-white rounded-full p-1"
                  >
                    BIG NEWS DECK
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black   font-semibold">
                    <MdArrowOutward className="text-xl" />
                  </div>
                </div>
                <div className=" flex justify-start items-center space-x-2">
                  <button
                    type="button"
                    className="border-black border w-[200px] hover:bg-black hover:text-white rounded-full p-1"
                  >
                    BRANDED TEMPLATE
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black   font-semibold">
                    <MdArrowOutward />
                  </div>
                </div>
                <div className=" flex justify-start items-center space-x-2">
                  <button
                    type="button"
                    className="border-black border w-[260px] hover:bg-black hover:text-white rounded-full p-1"
                  >
                    ONBOARDING PRESENTATION7
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black   font-semibold">
                    <MdArrowOutward />
                  </div>
                </div>
                <div className=" flex justify-start items-center space-x-2">
                  <button
                    type="button"
                    className="border-black border w-[230px] hover:bg-black hover:text-white rounded-full p-1"
                  >
                    POLICY DECK & PLAYBOOK
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black   font-semibold">
                    <MdArrowOutward />
                  </div>
                </div>
                <div className=" flex justify-start items-center space-x-2">
                  <button
                    type="button"
                    className="border-black border w-[200px] hover:bg-black hover:text-white rounded-full p-1"
                  >
                    PROGRESS REPORT
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black   font-semibold">
                    <MdArrowOutward />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex-col space-y-10 *:">
              <div className="flex space-x-5 items-center">
                <div className="h-[14px] w-[14px] rounded-full bg-black"></div>
                <p className="text-md">ADDITIONAL</p>
              </div>
              <div>
                <div
                  className=" flex justify-start items-center
 space-x-2"
                >
                  <button
                    type="button"
                    className="border-black border w-[120px] hover:bg-black hover:text-white rounded-full p-1"
                  >
                    AGENCY
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black   font-semibold">
                    <MdArrowOutward className="text-xl" />
                  </div>
                </div>
                <div className=" flex justify-start items-center space-x-2">
                  <button
                    type="button"
                    className="border-black border w-[120px] hover:bg-black hover:text-white rounded-full p-1"
                  >
                    BRANDING
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black   font-semibold">
                    <MdArrowOutward />
                  </div>
                </div>
                <div className=" flex justify-start items-center space-x-2">
                  <button
                    type="button"
                    className="border-black border w-[200px] hover:bg-black hover:text-white rounded-full p-1"
                  >
                    CORPORATE TRAINING
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black   font-semibold">
                    <MdArrowOutward />
                  </div>
                </div>
                <div className=" flex justify-start items-center space-x-2">
                  <button
                    type="button"
                    className="border-black border w-[120px] hover:bg-black hover:text-white rounded-full p-1"
                  >
                    REDESIGN
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black   font-semibold">
                    <MdArrowOutward />
                  </div>
                </div>
                <div className=" flex justify-start items-center space-x-2">
                  <button
                    type="button"
                    className="border-black border w-[120px] hover:bg-black hover:text-white rounded-full p-1"
                  >
                    REVIEW
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#cdea68] text-[#cdea68] hover:bg-black   font-semibold">
                    <MdArrowOutward />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services
