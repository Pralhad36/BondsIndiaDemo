import React from 'react'

const FeedbackSection = () => {
  return (
    <div className=' flex flex-col md:px-14 px-4 text-left'>
        <h2 className=' md:text-4xl text-lg font-bold py-2'>The Love from our Clients</h2>
        <h3 className=' md:text-lg text-sm '>What our users have to say</h3>
        <div className=' w-full flex justify-between mx-0 py-14 '>
            <div className='w-[48%] bg-gray-100 flex  flex-col rounded-xl relative items-center md:h-65 h-80 shadow-2xl px-4'>
                <img className=' rounded-full absolute -top-12' src='https://www.indiabonds.com/static/customer/revamped_home_page/assets/vipin-testimonials.webp' alt='image'/>
                <h2 className=' md:text-lg text-sm pt-20'>Vipin J Mehta</h2>
                <h3 className='  md:text-xl text-xs'>Today my 70% investments are in NCDs/Bonds</h3>
                
                <p className=' md:text-sm text-xs text-center pt-5'>With IndiaBonds i am very much convinced and having full trust in investing through them. Now i am feeling relaxed on my investment by getting more and safe return.</p>
            </div>
            <div className='w-[48%] flex bg-gray-100  flex-col rounded-xl relative items-center md:h-65 h-80 shadow-2xl px-4'>
                 <img className=' rounded-full absolute -top-12' src='https://www.indiabonds.com/static/customer/revamped_home_page/assets/placeholder-avatar.svg' alt='image'/>
                <h2 className='md:text-lg text-sm pt-20'>Kartik NRI</h2>
                <h3 className=' md:text-xl text-xs'>Expertise & professionalism have left a lasting</h3>
               
                <p className='md:text-sm text-xs text-center pt-5'>Despite the geographical and cultural differences, your customer support team seamlessly navigated through our interactions, demonstrating a thorough understanding of the financial products that they were advocating.</p>
            </div>
        </div>
    </div>
  )
}

export default FeedbackSection