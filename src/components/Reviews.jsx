import { MdArrowOutward } from "react-icons/md";
function Reviews() {
  return (
    <div className="py-20 w-full flex flex-col items-center justify-center mt-[10vw] ">
      <button
        type="button"
        className="group relative py-2 pr-6 rounded-full bg-black text-white text-xl flex items-center justify-center w-full md:w-64 lg:w-80"
      >
        <span>View All Case Studies</span>
        <div
          className="absolute right-7 h-2 w-2 bg-white rounded-full flex justify-center items-center 
                   transition-all duration-300 ease-in-out group-hover:h-8 group-hover:w-8"
        >
          <MdArrowOutward className="text-black text-xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
        </div>
      </button>

      <h1 className="text-6xl font-md font-['Neue Montreal'] mt-[10vw]">
        Clients reviews
      </h1>

      {/* Karman Ventures Section */}
      <div className="border-t-[1.5px] mt-10 border-zinc-300 w-full flex">
        <div className="w-1/2 flex p-10">
          <h1 className="w-1/2 text-lg font-md font-['Neue Montreal'] underline">
            Karman Ventures
          </h1>
          <div className="w-1/2 flex flex-col gap-20">
            <h1 className="text-lg font-md font-['Neue Montreal']">
              Services:
            </h1>
            <div className="mr-[10vw]">
              <div className=" flex justify-center items-center space-x-2">
                <button
                  type="button"
                  className="border-black border w-[150px] hover:bg-black hover:text-white rounded-full py-1"
                >
                  INVESTOR DECK
                </button>
                <div className="px-2 py-2 rounded-full  flex justify-center items-center bg-white text-white hover:bg-black   font-semibold">
                  <MdArrowOutward className="text-lg" />
                </div>
              </div>
              <div className=" flex justify-center items-center space-x-2 mt-4">
                <button
                  type="button"
                  className="border-black border w-[150px] hover:bg-black hover:text-white rounded-full py-1 "
                >
                  SALES DECK
                </button>
                <div className="px-2 py-2 rounded-full flex justify-center items-center bg-white text-white hover:bg-black   font-semibold">
                  <MdArrowOutward className="text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[70vh] flex">
          <div className="w-1/2 flex flex-col gap-16 mt-10">
            <h1 className="text-lg font-md font-['Neue Montreal'] ">
              William Barnes
            </h1>
            <div className="space-y-5">
              <img
                src={
                  "https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                }
                alt="William Barnes"
                className="h-[100px] w-[100px] rounded-lg"
              />
              <p className="text-md font-md font-['Neue Montreal']">
                They were transparent about the time and the stages of the
                project. The end product is high quality, and I feel confident
                about how they were handholding the client through the process.
                I feel like I can introduce them to someone who needs to put a
                sales deck together from scratch, and they would be able to
                handhold the client experience from 0 to 100 very effectively
                from story to design. 5/5
              </p>
            </div>
          </div>
          <div className="w-1/2 flex flex-col pt-5">
            <h1 className="text-lg text-zinc-200 text-right pr-10">READ</h1>
          </div>
        </div>
      </div>

      {/* Client List Section */}
      {[
        { name: "Planetly", person: "Nina Walloch" },
        { name: "Workiz Easy", person: "Tomer Levy" },
        { name: "Premium Blend", person: "Ellen Kim" },
        { name: "Hypercare Systems", person: "Brendan Goss" },
        { name: "Officevibe", person: "Raff Labrie" },
        { name: "Orderlion", person: "Stefan Strohmer" },
        { name: "Black Book", person: "Jaci Smith" },
        { name: "Trawa Energy", person: "David Budde" },
      ].map((client, index) => (
        <div
          key={index}
          className="w-full flex justify-between  items-center py-7 border border-zinc-300 px-10"
        >
          <h1 className="text-xl underline text-start w-[40%]">
            {client.name}
          </h1>
          <h1 className="text-xl text-start  w-[40%]">{client.person}</h1>
          <h1 className="text-xl underline text-end w-[10%] underline-offset-8">
            READ
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
