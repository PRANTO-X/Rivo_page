import React from 'react'
import { designerCloths } from '../../assets/assets'

const Designer = () => {
  return (
     <section className='section-container'>
        <div className="space-y-4 text-center mb-12">
            <h2 className='heading'>Designer Clothes For You</h2>
            <p className='title'>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!.</p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
            {designerCloths.map((item,index)=>(
                <div key={index} className="min-h-96 flex flex-col justify-center items-center text-center gap-5">
                    <div className='bg-gray-300' >
                        <img src={item.img} alt={item.name} loading='lazy' />
                    </div>

                    <h2 className='text-xl md:text-2xl lg:text-3xl text-gray-600 font-poppins font-semibold'>{item.name}</h2>
                    <p className='md:text-lg text-gray-600'>{item.description}</p>
                </div>
            ))}
        </div>
     </section>
  )
}

export default Designer