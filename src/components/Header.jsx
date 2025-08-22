import React from 'react'

const Header = () => {

    const headerMenu = ["Products","Tools ","BoundUNI","KYC","Refer & Earn","More"]
  return (
    <>
    <div className='bg-purple-600 md:block fixed z-10 top-0   w-screen text-white p-2 text-xs font-bold mx-auto'>DownloadBondsIndiaApp 100k + downloads</div>
    <div className=' w-screen bg-[#E6D9F6] z-10  h-23 fixed top-8 flex flex-row md:px-10 px-4'>
        
        <div className='md:w-[20%] w-[40%] px-0 py-4 '>
            <img className='md:w-48 w-40' src='https://www.indiabonds.com/static/customer/home_page/images/india-bonds-logo.png'/>
        </div>
        <div className='  hidden md:flex text-md font-bold justify-between w-[40%] items-center'>
           { headerMenu.map(menu => <label className=' mx-2 cursor-pointer '>{menu}</label>)}
        </div>
        <div className=' md:w-[23%] w-[20%] flex items-center justify-center mx-4'>
            <input className='w-full text-sm flex justify-center items-center md:p-3  p-2 rounded-3xl border-[0.5px]' type='text' onChange={(e) => e.target.value} placeholder='Search any bond by ISIN or issuer name'></input>
        </div>
        <div className=' flex md:w-[25%] w-[30%] justify-center items-center '>
            <button className=' text-sm m-2 md:text-lg  '>Login</button>
            <button className='md:w-30 w-60 p-2 rounded-3xl h-10 bg-purple-400 md:px-4 px-2   text-sm md:font-bold'>Sign Up</button>
        </div>
    </div>
    </>
  )
}

export default Header