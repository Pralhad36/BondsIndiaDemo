import React from 'react'

const HeroSection = () => {

  const heroBlocks = [
    {amount:"₹ 10000",
      disc:"Minimum Investment"
    },
    {
      amount:"2,15,000+*",
      disc:"Registered Users"
    },
     {
      amount:"₹ 3900 Cr+*",
      disc:"Registered Users"
    }
  ]
  return (
    <div className=' w-full  text-black flex md:flex-row  flex-col items-center md:mt-33 mt-2 md:px-10 px-4'>
      <div className=' flex md:w-[55%] w-full flex-col items-start' >
        <div className=' bg-[#5EC134] md:left-10 left-4 absolute text-white md:py-1  p-1 '>
          <p className=' md:text-sm text-md px-4'>SEBI Registered Stockbroker (Debt Segment)</p>
        </div>
        <h2 className=' font-bold md:text-5xl text-2xl pt-10'>Invest in Bonds & FDs Online</h2>
        <div className=' flex md:text-2xl text-lg md:py-4 py-2'>
          <h2 >Bonds give you <span className=' text-[#5EC134] font-bold'>Regular Income</span></h2>
        </div>
        <div className=' flex'>
          {heroBlocks.map((block) => <div className='  md:w-52 w-30 flex flex-col items-start m-2 p-3 md:border-[0.5px] border-[0.2px] md:rounded-2xl rounded-lg'>
            <h2 className=' md:text-xl text-sm md:font-bold pb-2'>{block.amount}</h2>
            <h3 className='text-left md:text-sm text-xs'>{block.disc}</h3>
          </div> )}
        </div>
           <div className='w-full md:h-35 h-20  flex justify-between items-center'>
        <button class=" md:w-55 w-40 cursor-pointer text-white bg-purple-700 hover:bg-purple-800  rounded-3xl md:text-lg text-sm font-bold py-2 ">Explore Bonds</button>
        <button class=" md:w-30 w-20 cursor-pointer text-white bg-purple-700 hover:bg-purple-800  rounded-3xl md:text-lg text-sm font-bold py-2 ">FDs</button>
        <button class=" w-30 border-2  cursor-pointer  rounded-3xl md:text-md  text-sm font-bold py-2 ">Sell Bonds</button>
        <p className='md:block hidden underline cursor-pointer'>What are Bonds?</p>
          
        </div>
      </div>
      <div className=' flex items-center mx-6 md:w-[43%] w-full h-full '>
          <div className='  flex items-center h-[68%]  bg-[#6C49C4] rounded-2xl '>
            <div className=' flex flex-col items-start  p-6 '>
              <h2 className=' py-2 text-[#7EF139] font-bold md:text-2xl text-lg'>New Issue</h2>
              <h2 className=' md:text-2xl text-left text-lg text-white '>ESAF Small Finance Bank Limited</h2>
              <h3 className=' md:text-xl text-sm text-white'>Invest Now</h3>
            </div>
            <div className=' w-58  p-0 m-2 '>
              <img src='https://assets.indiabonds.com/d6c0e5cc-ad6b-423c-b495-f8a54d0cbb81.png' alt='image'/>
            </div>
          </div>
      </div>
     
    </div>
  )
}

export default HeroSection