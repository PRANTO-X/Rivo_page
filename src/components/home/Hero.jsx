import React from 'react'
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <section id='hero' className='bg-bg py-28 md:py-32 lg:py-40'>
        <div className="section-container flex  flex-col-reverse md:flex-row  gap-6">
            <div className="md:w-1/2 space-y-5 text-center md:text-start">
                <h1 className='text-primary font-rufina font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight w-full xl:w-3/4'>Discover and Find Your Own Fashion!</h1>
                <p className='lg:text-xl text-[#267D49] font-poppins w-full xl:w-3/5 md:leading-11'>Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
                <div>
                    <button className='btn lg:mt-6'>EXPLORE NOW</button>
                </div>
            </div>

            <div className="md:w-1/2 flex justify-center md:justify-end"> 
                <img className='size-3/4 md:size-auto' src={assets.homeImg} alt="home img" loading='lazy' />
            </div>
        </div>
    </section>
  )
}

export default Hero