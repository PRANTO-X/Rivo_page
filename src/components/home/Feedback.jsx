import React,{useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {assets, feedbacks } from '../../assets/assets';
import 'swiper/css';
import 'swiper/css/navigation';

const FeedBack = () => {
    const swiperRef = useRef(null)

  return (
    <section className='section-container relative overflow-visible'>
        <h2 className='heading text-center'>Best selling</h2>
        <Swiper
        modules={[Navigation]}
        spaceBetween={30}
    
        onSwiper={(swiper) => swiperRef.current = swiper}
        className='my-10 md:my-14 lg:my-18'
        breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        }}
        >
            {feedbacks.map((item,i)=>(
                <SwiperSlide key={i} className='flex flex-col bg-secondary/80 shadow-lg  p-5 rounded-md space-y-4 min-h-[230px]'>
                    <img src={assets.cloneIcon} alt="" />
                    <h3 className='font-roboto text-primary text-xl md:text-2xl'>{item.name}</h3>
                    <p className='font-poppins text-gray-500'>{item.text}</p>
                </SwiperSlide>
            ))}
        </Swiper>

        <div className="flex gap-5 justify-center items-center">
            <button onClick={() => swiperRef.current?.slidePrev()} className='py-2 px-3 cursor-pointer hover:bg-secondary transition duration-300 ease-in-out border '><img src={assets.rightArrow} alt="" loading='lazy'/></button>
            <button onClick={() => swiperRef.current?.slideNext()} className='py-2 px-3 cursor-pointer hover:bg-secondary transition duration-300 ease-in-out border '><img src={assets.leftArrow} alt="" loading='lazy'/></button>
        </div>
    </section>
  )
}

export default FeedBack