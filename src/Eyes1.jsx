function Eyes1() {
    return (
      <div className="w-full h-auto bg-[#CDEA68] flex items-center justify-center">
<div className="textstructure p-20">
          {["ready", "to start", "the project ?"].map((item, index) => {
            return (
              <div key={index} className="masker">
                  <h1 className='uppercase text-[10vw] text-center h-full leading-none tracking-tighter font-["Founders Grotesk"] font-bold'>
                    {item}
                  </h1>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default Eyes1;
  