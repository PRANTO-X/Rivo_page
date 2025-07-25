import React,{useEffect} from 'react'
import { products } from '../assets/assets'
import { FaPlus,FaMinus} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BsCart4 } from "react-icons/bs";

const Cart = ({ isOpen, onClose }) => {

    
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);
  return (
    <div className={`
      fixed top-0 right-0 h-full w-full sm:w-[75%] md:w-1/2 lg:w-1/3 2xl:w-1/4 
      bg-gray-200 shadow-lg z-50 
      transform transition-transform duration-500 ease-in-out
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}
    `}>
    <div className="flex flex-col h-full py-7 gap-4">
    <h1 className='text-3xl font-roboto font-bold text-primary text-center mb-3.5 flex justify-center gap-0.5'><BsCart4 />Your Cart</h1>

    <ul className='flex flex-col gap-3.5 w-full px-4 overflow-y-auto flex-1'>
      {products.map((item) => (
        <div key={item.id}  className="bg-white flex justify-between items-center gap-3 p-3 rounded shadow w-full">
          <img className='w-16 h-16 object-cover rounded' src={item.img} alt="" loading='lazy'/>

          <div className="flex-1">
            <h4 className='text-sm text-gray-700 font-roboto'>{item.name}</h4>
            <p className='text-primary font-poppins text-sm'>{item.price}</p>
          </div>

          <div className="flex items-center gap-3 mr-1.5">
            <button className='p-1.5 cursor-pointer rounded-full bg-primary text-white'><FaPlus className='size-3'/></button>
            <p className='font-bold'>1</p>
            <button className='p-1.5 cursor-pointer rounded-full bg-primary text-white'><FaMinus className='size-3'/></button>
          </div>

          <button className='p-1.5 cursor-pointer rounded-full bg-red-600 text-white'><RxCross2 className='size-3'/></button>
        </div>
      ))}
    </ul>

    <div className="px-4 py-2 border-t border-gray-300 z-10">
      <div className="flex justify-between text-lg font-semibold text-gray-700 mt-2">
        <span>Total:</span>
        <span>$123.45</span> 
      </div>
    </div>

    {/* Bottom Buttons */}
    <div className="py-4 px-4 flex justify-between gap-3 border-t border-gray-300 bg-gray-200">
      <button onClick={onClose}  className='btn w-full'>Close</button>
      <button className='btn w-full'>Checkout</button>
    </div>
  </div>
    </div>


  )
}

export default Cart