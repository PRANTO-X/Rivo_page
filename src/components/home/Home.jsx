import React from 'react'
import Hero from './Hero'
import BestSelling from './BestSelling'
import Products from './Products'
import ExclusiveOffer from './ExclusiveOffer'
import Designer from './Designer'
import FeedBack from './FeedBack'

export const Home = () => {
  return (
    <>
      <Hero/>
      <BestSelling/>
      <Products/>
      <ExclusiveOffer/>
      <Designer/>
      <FeedBack/>
    </>
  )
}
