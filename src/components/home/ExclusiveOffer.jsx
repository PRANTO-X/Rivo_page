import React from 'react'
import { assets } from '../../assets/assets'

const ExclusiveOffer = () => {
  return (
    <section className='section-container '>
        <div className="flex flex-col bg-secondary lg:flex-row justify-center items-center gap-6  rounded-lg p-5 lg:p-0">
            <div className="md:w-1/2">
                <img src={assets.exclusiveImg} alt="exclusive img" loading=''/>
            </div>

            <div className="md:h-1/2 gap-5  xl:gap-8 flex flex-col items-center lg:items-start text-center lg:text-start">
                <h2 className='heading'>Exclusive offer</h2>
                <p className='title md:w-3/4 font-semibold'>Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals</p>

                <div className="flex gap-5">
                    {[{time: "06",title: "Days"},
                      {time: "18",title: "Hours"},
                      {time: "48",title: "Mins"}
                    ].map((item,i)=>(
                       <div key={i} className="bg-white text-primary font-poppins size-18 lg:size-20 xl:size-24 flex justify-center items-center flex-col">
                            <p className=' text-2xl xl:text-3xl font-bold'>{item.time}</p>
                            <p className=' text-lg xl:text-xl'>{item.title}</p>
                       </div>
                    ))}
                </div>

                <div>
                    <div className="btn w-fit">BUY NOW</div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default ExclusiveOffer