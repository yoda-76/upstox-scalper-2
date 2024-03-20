import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Services from '../Components/Services'
import FAQ from '../Components/FAQ'
import Footer from '../Components/Footer'
import HowItWorks from '../Components/HowItWorks'

export default function LandingPage() {
  return (
    <div className='flex flex-col items-center bg-slate-800'>
        <Navbar/>
        <Header/>
        <Services/>
        <HowItWorks/>
        <FAQ/>
        <Footer/>
    </div>
  )
}
