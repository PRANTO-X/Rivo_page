import React, { useContext, useEffect, useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from '../../hooks/CartContext';
import { assets } from '../../assets/assets';
import Checkout from './Checkout';


const Cart = ({ isOpen, onClose }) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const { cartItems, dispatch } = useContext(CartContext);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

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

  useEffect(() => {
  if (cartItems.length === 0 && showCheckout) {
    setShowCheckout(false);
  }
  }, [cartItems.length, showCheckout]);


  return (
    <>
      <div className={`
        fixed top-0 right-0 h-full w-full sm:w-[75%] md:w-[60%] lg:w-[40%] 2xl:w-1/4 
        bg-gray-200 shadow-lg z-50 
        transform transition-transform duration-500 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col justify-between h-full py-7 gap-4">
          <h1 className='text-3xl font-roboto font-bold text-primary text-center mb-3.5 flex justify-center gap-0.5'>
            <BsCart4 />Your Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-2.5">
              <img src={assets.emptyCart} alt="empty cart" loading="lazy" />
              <h2 className="font-semibold text-primary text-2xl font-roboto">Your Cart Is Empty</h2>
            </div>
          ) : (
            <ul className="flex flex-col gap-3.5 w-full px-4 overflow-y-auto flex-1">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white flex justify-between items-center gap-3 p-3 rounded shadow w-full">
                  <img className="w-16 h-16 object-cover rounded" src={item.img} alt="" loading="lazy" />

                  <div className="flex-1">
                    <h4 className="text-sm text-gray-700 font-roboto">{item.name}</h4>
                    <div className="flex gap-3.5">
                      <div className="flex gap-3.5 text-primary font-poppins text-sm">
                        <p>@${item.price}</p>
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mr-1.5">
                    <button
                      onClick={() => dispatch({ type: 'INCREASE', payload: item.id })}
                      className="p-1.5 cursor-pointer rounded-full bg-primary text-white"
                    >
                      <FaPlus className="size-3" />
                    </button>

                    <p className="font-bold">{item.quantity}</p>

                    <button
                      onClick={() => dispatch({ type: 'DECREASE', payload: item.id })}
                      className="p-1.5 cursor-pointer rounded-full bg-primary text-white"
                    >
                      <FaMinus className="size-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => dispatch({ type: 'REMOVE', payload: item.id })}
                    className="p-1.5 cursor-pointer rounded-full bg-red-600 text-white"
                  >
                    <RxCross2 className="size-3" />
                  </button>
                </div>
              ))}
            </ul>
          )}

          <div>
            <div className="px-4 py-2 border-t border-gray-300 z-10">
              <div className="flex justify-between text-xl font-semibold text-primary py-3">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="py-4 px-4 flex justify-between gap-3 border-t border-gray-300 bg-gray-200">
              <button onClick={onClose} className='btn w-full'>Close</button>
              <button
                onClick={() => setShowCheckout(true)}
                className='btn w-full'
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      
    {showCheckout && cartItems.length > 0 && (
      <Checkout
        onCloseCheckout={() => setShowCheckout(false)}
        onCompleteOrder={() => {
          setShowCheckout(false);
          onClose();
        }}
      />
    )}


    </>
  );
};

export default Cart;
