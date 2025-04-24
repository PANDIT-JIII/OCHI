import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Footer from "./Footer";
export default function Contact() {
  return (
    <div className=" flex flex-col justify-start items-start">
      <Navbar />
      <div className=" textstructure mt-[5vw] p-16">
        {["let's start", "a project together",].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex overflow-hidden">
                {index === 0 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration:1}}
                  >
                    <img
                      src="https://ochi.design/wp-content/uploads/2022/05/Asset-41-20-300x203.jpg"
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
         <p className="pl-16 text-[1.3vw]">Fill the form below:</p>
         <div className=" pl-16 flex items-center">
          <label className="text-[4vw] tracking-tighter leading-none"> Hi! My name is</label>
          <input type="text" placeholder="Enter your name*" className="h-[40px] w-[300px] mt-5 outline-none border-b border-black text-center text-lg"/>
          <label className="text-[4vw] tracking-tighter leading-none"> and I work with</label>
          <input type="text" placeholder="Company name type here*" className="h-[40px] w-[330px] mt-5 outline-none border-b border-black text-center text-lg"/>
         </div>
         <div className="pl-16">
         <label className="text-[4vw] leading-none tracking-tighter">I m looking for a partner to help me with</label>
         <input type="text" placeholder="Your goal type here*" className="h-[40px] w-[385px] mt-5 outline-none border-b border-black text-center text-lg"/>
         </div>
         <div className="pl-16">
         <label className="text-[4vw] leading-none tracking-tighter">With an idea of having that completed</label>
         <input type="date" placeholder="Enter your name*" className="h-[40px] w-[430px] mt-5 outline-none border-b border-black text-center text-lg"/>
         </div>
         <div className="pl-16">
         <label className="text-[4vw] leading-none tracking-tighter">I am hoping to stay around a budget range of</label>
         <select className="h-[40px] w-[250px] mt-5 outline-none border-b border-black text-center text-lg" name="" id="">
          <option value="">$5000-15,000</option>
          <option value="">$15,000-25,000</option>
          <option value="">$25,000-50,000+</option>
         </select>
         </div>
         <div className="pl-16">
         <label className="text-[4vw] leading-none tracking-tighter">You can reach me at</label>
         <input type="email" placeholder="name@Example.com" className="h-[40px] w-[280px] mt-5 outline-none border-b border-black text-center text-lg"/>
         <label className="text-[4vw] leading-none tracking-tighter">to start the conversation.</label>
         </div>
         <div className="pl-16">
         <label className="text-[4vw] leading-none tracking-tighter">Optionally, i m sharing more:</label>
         <input type="text" placeholder="Product details type here...." className="h-[40px] w-[680px] mt-5 outline-none border-b border-black text-center text-lg"/>
         </div>
         <Footer/>
    </div>
  );
}
