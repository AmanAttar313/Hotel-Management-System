import React from 'react'
import Hero from '../components/hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffer from '../components/ExclusiveOffer'
import Testimonials from '../components/Testimonials'
import NewsLetter from '../components/NewsLetter'


const Home = () => {
  return (
    <>
        <Hero/>
        <FeaturedDestination/>
        <ExclusiveOffer/> 
        <Testimonials/>
        <NewsLetter/>
        
    </>
  )
}

export default Home