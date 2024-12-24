import React from 'react'
import HeroSection from '../HeroSection'
import ServicesSection from '../ServicesSection'
import ValueProp from '../ValuProp'
import Intro from '../Intro'
import WhatNDIS from '../WhatNDIS'
import Testimonials from '../Testimonials'

const Home = () => {
  return (
    <div> 
        <HeroSection/>
        <Intro/>
        <ServicesSection/>
        <Testimonials/>
        <ValueProp/>
        
       
    </div>
  )
}

export default Home
