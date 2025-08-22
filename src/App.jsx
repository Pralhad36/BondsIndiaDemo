import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import OfferSection from './components/OfferSection'
import FixedIncomeSection from './components/FixedIncomeSection'
import BackedBySection from './components/BackedBySection'
import AwardsSection from './components/AwardsSection'
import FeedbackSection from './components/FeedbackSection'
import BottomLineSection from './components/BottomLineSection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen flex flex-col  bg-[#E6D9F6]'>
        <Header/>
        <HeroSection/>
        {/* <OfferSection/> */}
        <FixedIncomeSection/>
        <BackedBySection/>
        <AwardsSection/>
        <FeedbackSection/>
        <BottomLineSection/>
        <Footer/>
        <div>

        </div>
        <footer/>
      </div>
    </>
  )
}

export default App
