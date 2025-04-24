function About() {
  return (
    <div className="w-full py-20 bg-[#CDEA68] rounded-2xl">
      <h1 className=" font-['Neue Montreal'] text-[4vw] leading-[4.5vw] tracking-tight ml-[2vw]">
        Ochi is a strategic presentation agency for forward- thinking businesses
        that need to{" "}
        <span className=" underline">
          {" "}
          raise funds,sell prod­ucts, ex­plain com­plex ideas,
        </span>{" "}
        and
        <span className="underline"> hire great peo­ple.</span>
      </h1>
      <div className=" w-full border-t-[1.5px] border-zinc-400 mt-20 flex font-[Neue Montreal] text-xl font-light">
        <div className="w-1/2 p-[2vw]  ">
          <h1>What you can expect:</h1>
        </div>
        <div className=" w-1/2 p-5 flex">
          <div className="w-[50%] flex flex-col gap-10  ">
            <h1 className=" leading-6 tracking-tight">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </h1>
            <h1 className="leading-6 tracking-tight">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </h1>
          </div>
          <div className="w-[50%]  flex justify-center items-center flex-col mt-[5vw]">
            <h1>S:</h1>
            <div className="flex flex-col ml-[6vw] underline">
              <a href="#">Instagram</a>
              <a href="#">Behance</a>
              <a href="#">Facebook</a>
              <a href="#">Linkedin</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t-[1.5px] border-zinc-400 pt-20 px-[2vw] flex gap-5">
        <div className="w-1/2">
            <h1 className="text-6xl">Our approach:</h1>
            <button className="px-7 py-4 bg-zinc-900 uppercase rounded-full text-white mt-8 flex gap-5 items-center">read more
                <div className=" w-2 h-2 bg-zinc-50 rounded-full"></div>
            </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[#6d7f2b] rounded-3xl">
        <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="logo" className="h-full w-full rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

export default About;
