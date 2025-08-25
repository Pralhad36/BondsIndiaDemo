import React from "react";
import { useState, useEffect } from "react";

const Header = () => {
  const headerMenu = [
    "How It Works",
    "Bonds Library ",
    "Products",
    "Resources",
    "Who we are",
  ];

  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <div className=" w-screen text-black flex flex-col items-center  ">
        <div
          className={` text-black bg-white border-gray-300  border-b-[0.2px]  md:flex justify-between w-full md:px-6 p-2 text-sm flex  ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
          <div className=" w-[23%] md:flex hidden justify-between cursor-pointer">
            <div className=" w-full flex justify-center items-center ">
                <img src="https://www.bondsindia.com/_next/static/media/phone-enabled.4a90924b.svg"/><p>+91-8882-200-300</p>
            </div>
            <div className=" flex justify-center items-center">
                <img src="	https://www.bondsindia.com/_next/static/media/Envelope.6a963afe.svg"/>
            <p>info@bondsindia.com</p>
            </div>
          </div>
          <div className="md:w-[40%] w-full"> 
            <p>
              We have special deals every day
              <span className="text-[#E8780A] font-bold underline mx-2 cursor-pointer">
                Find your deal
              </span>
            </p>
          </div>
          <div className=" w-[18%] px-4 cursor-pointer md:flex hidden justify-evenly">
            <p>Help</p>
            <p>BondsPedia</p>
          </div>
        </div>

           <div className={`flex  w-screen px-4 z-10 bg-white ${hidden ? "fixed" : "flex"}`}>
             <div className='md:w-[30%] w-full px-0 py-4 '>
            <img className='md:w-[60%] w-[80%]' src='https://www.bondsindia.com/_next/static/media/logo.ec6021df.svg'/>
        </div>
        <div className=' w-[70%] flex  justify-between'>
            <div className='  hidden md:flex text-md  justify-between w-[70%] items-center'>
           { headerMenu.map(menu => <label className=' mx-2 cursor-pointer '>{menu}</label>)}
        </div>
        
        <div className=' flex md:w-[25%] w-[90%] justify-end  items-center '>
            <img className=" w-6" src="	https://www.bondsindia.com/_next/static/media/user.411a1fcc.svg"/>
            <button className='md:flex hidden text-sm m-2 md:text-lg cursor-pointer '>Login</button>
            <button className='md:flex hidden md:w-30 w-20 p-2 rounded-3xl h-10 cursor-pointer border-black border-[0.5px] text-[#E8780A] md:px-4 px-2   text-sm md:font-bold'>SIGNUP</button>
        </div>
        </div>
           </div> 

      </div>
    </>
  );
};

export default Header;
