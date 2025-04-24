
import Logo from "./assets/Logo.png";

function Cards() {
  return (
    <div className="w-full h-screen flex gap-5 items-center px-20">
      <div className="Cardcontainer w-1/2 h-[50vh]">
        <div className="card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="logo"
          />
          <button className="absolute left-6 bottom-7 border-2 border-[#CDEA68] px-4 py-1 rounded-full text-[#CDEA68]">
            &copy;2019-2020
          </button>
        </div>
      </div>
      <div className="Cardcontainer w-1/2 h-[50vh] flex gap-5">
        <div className="Card w-1/2 relative rounded-xl h-full bg-[#212121] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="logo"
          />
          <button className="absolute left-6 bottom-7 border-2 px-4 py-1 rounded-full uppercase text-white">
            rating 5.0 clutch
          </button>
        </div>
        <div className="Card w-1/2 relative rounded-xl h-full bg-[#212121] flex items-center justify-center">
          <img className="w-32" src={Logo} alt="Bootcamp alumni logo" />
          <button className="absolute left-6 bottom-7 border-2 px-4 py-1 rounded-full uppercase text-white">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
