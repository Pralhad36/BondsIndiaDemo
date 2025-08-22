import React from 'react'

const AwardsSection = () => {
  return (
    <div className=' w-full text-black flex md:flex-row flex-col md:px-14 px-4 md:py-40 py-10 md:mt-0 mt-4'>
        <div className=' text-left md:w-[50%] w-full flex flex-col'>
            <h2 className=' md:text-4xl text-xl font-bold'>Alliances</h2>
            <h3 className='md:text-lg text-sm py-4'>Key Partnership and  Integrations</h3>
            <img className='md:w-[96%] w-[100%]  md:h-100 h-40' src='https://assets.indiabonds.com/react/assets/img/alliances-new.webp' alt='image'/>
        </div>
        <div className=' text-left  md:w-[50%] w-full flex flex-col md:mt-0 mt-10'>
            <h2 className=' md:text-4xl text-xl  font-bold'>Awards</h2>
            <h3 className='md:text-lg text-sm py-4'>Recognitions and Accolades received</h3>
            <img className='md:w-[96%] w-[100%] md:h-100 h-40' src='https://assets.indiabonds.com/react/assets/img/assocham-award.webp' alt='image'/>
        </div>
    </div>
  )
}

export default AwardsSection