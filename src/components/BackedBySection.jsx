import React from 'react'

const BackedBySection = () => {

    const data = [
        {
            name:"Amit Rathi",
            des:"Co-Founder,QiCAP.Ai",
            imagePath:"https://ib-prod-media.s3.ap-south-1.amazonaws.com/investor-amit-rathi.webp"
        },
         {
            name:"Sandeep Barasia",
            des:"ex-CBO,Delhivery",
            imagePath:"https://ib-prod-media.s3.ap-south-1.amazonaws.com/investor-sandeep-barasia.webp"
        },
         {
            name:"Sandeep Gupta",
            des:"Partner Broadpick Investment Advisors",
            imagePath:"https://ib-prod-media.s3.ap-south-1.amazonaws.com/investor-sandeep-gupta.webp"
        },
         {
            name:"Shiv Gupta",
            des:"Founder and CEO",
            imagePath:"https://ib-prod-media.s3.ap-south-1.amazonaws.com/investor-sg.webp"
        },
         {
            name:"Ambresh Sukhani",
            des:"Indian Equity Investment",
            imagePath:"	https://ib-prod-media.s3.ap-south-1.amazonaws.com/investor-ambresh-+sukhani.webp"
        },
       

    ]
  return (
    <div className=' flex flex-col text-left md:px-14 px-4 md:pt-20 pt-10'>
        <h2 className=' md:text-4xl text-lg font-bold'>Backed By</h2>
        <h3 className=' text-md pb-10'>Investers and Leaders in Finance and Technology</h3>
        <div className=' flex md:flex-nowrap flex-wrap '>
            {data.map((card ) => <div className='mr-4 md:w-65 w-40 hover:scale-120 transition-all h-50  relative' id={card.name}> 
                <img src={card.imagePath}/>
                {/* <h2 className=' text-2xl font-bold absolute'>{card.name}</h2>
                <h3 className=' absolute'>{card.des}</h3> */}
            </div>)}
        </div>
    </div>
  )
}

export default BackedBySection