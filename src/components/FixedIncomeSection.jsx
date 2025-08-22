import React from 'react'

const FixedIncomeSection = () => {
  return (
    <div className=' w-full flex text-left flex-col md:px-14 px-4 pt-10 '>
        <h2 className=' md:text-4xl text-lg font-bold pt-4'>
            Fixed Income Investing Fuelled by Technology
        </h2>
        <h3 className=' text-md my-2'>
            Cutting-edge tech Investment Tools you may not find anywhere else
        </h3>
        <div className='w-full flex md:flex-row flex-col justify-between my-4 '>
            <div className='md:w-[30%] w-full cursor-pointer flex md:flex-col mb-4 flex-row bg-gray-200 shadow-2xl rounded-3xl items-start md:px-10 px-4 '>
                <div className=' flex flex-col'>
                    <h2 className=' md:text-xl text-lg font-bold py-2'>Portfolio Analysis</h2>
                <h3 className='py-2 text-left md:font-bold font-normal md:text-normal text-sm '>For ease of understanding your portfolio and cashflow planning</h3>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <img className='md:w-80 w-50 md:h-60 h-35 p-4 ' src='https://assets.indiabonds.com/react/assets/img/mobile_easy_payment-mob.webp'/>
                </div>
            </div>
            <div className='md:w-[30%] w-full cursor-pointer flex md:flex-col mb-4 flex-row bg-gray-200 shadow-2xl rounded-3xl items-start md:px-10 px-4 '>
                <div className=' flex flex-col'>
                    <h2 className='md:text-xl text-lg font-bold py-2'>Portfolio Analysis</h2>
                <h3 className='py-2 text-left md:font-bold font-normal md:text-normal text-sm '>For ease of understanding your portfolio and cashflow planning</h3>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <img className='md:w-80 w-50 md:h-60 h-35 p-4' src='https://assets.indiabonds.com/react/assets/img/mobile_easy_payment-mob.webp'/>
                </div>
            </div>
            <div className='md:w-[30%] w-full cursor-pointer flex md:flex-col mb-4 flex-row bg-gray-200 shadow-2xl rounded-3xl items-start md:px-10 px-4 '>
                <div className=' flex flex-col'>
                    <h2 className=' md:text-xl text-lg font-bold py-2'>Portfolio Analysis</h2>
                <h3 className='py-2 text-left md:font-bold font-normal md:text-normal text-sm '>For ease of understanding your portfolio and cashflow planning</h3>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <img className='md:w-80 w-50 md:h-60 h-35 p-4' src='https://assets.indiabonds.com/react/assets/img/mobile_easy_payment-mob.webp'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FixedIncomeSection