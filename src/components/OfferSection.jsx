import React from 'react'
import OfferCard from './OfferCard'

const OfferSection = () => {

    const offerTabs = ["New Arrivals","High Yielding","State Guaranteed","Min-10000","Secured","G-Sec/SDL","Monthly Income","Tax Free","Bank","PSU","PSU Tax Notified"]
  return (
    <div className=' bg-gray-50 flex flex-col items-start py-10 px-14 '>
        <h2 className=' text-4xl font-bold pb-8'>
            Offers and Categories
        </h2>
        <div className=' flex justify-between w-full overflow-scroll whitespace-nowrap'>
            {
                offerTabs.map( (tab,idx) => <button className=' bg-gray-200 font-bold  rounded-3xl px-4 py-2 mx-2' id={idx}>{tab}</button>)
            }
        </div>
        <div>
            <OfferCard/>
        </div>
        <div className='flex items-start'>
            <p className='' >
            Note: Pursuant to the provisions of Section 193 of the Income Tax Act, 1961, as amended, effective from 1st April 2023, TDS will be deducted at the rate of 10% (or such other rates as may be notified from time to time) on any interest payable on any security issued by a company other than securities issued by the Central Government or a State Government. The listing of products above: (a) should not be considered an advertisement, endorsement, or recommendation to invest. Please use your own discretion before you transact. (b) is in compliance with regulatory framework as applicable for Online Bond Platform Provider (c) at their given price or yield are subject to availability and market cut-off timings. Investments in debt securities/ municipal debt securities/ securitised debt instruments are subject to risks including delay and/ or default in payment. Read all the offer related documents carefully.
        </p>
        </div>
    </div>
  )
}

export default OfferSection