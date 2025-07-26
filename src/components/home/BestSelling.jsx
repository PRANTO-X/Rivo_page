import React from 'react'
import { bestSellingItems } from '../../assets/assets'
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from '../Shared/ProductCard';

const BestSelling = () => {
  return (
    <section className='section-container'>
      <div className="space-y-4 text-center mb-8">
        <h2 className='heading'>Best selling</h2>
        <p className='title'>Get in on the trend with our curated selection of best-selling styles.</p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {bestSellingItems.map((item,index)=>(
            <ProductCard
              key={index}
              img={item.img}
              name={item.name}
              price={item.price}
              rating={item.rating}
            />
          ))}
      </div>

      <div className="flex justify-center items-center mt-8">
        <button className='bg-transparent border-2 cursor-pointer border-primary text-primary px-9 py-3 text-lg flex items-center font-semibold gap-3'>See all<FaArrowRightLong /></button>
      </div>
    </section>
  )
}

export default BestSelling