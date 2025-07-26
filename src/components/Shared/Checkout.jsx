import React, { useContext, useState } from 'react';
import { CartContext } from '../../hooks/CartContext';
import { motion, easeIn } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const Checkout = ({ onCloseCheckout, onCompleteOrder }) => {
  const { cartItems, dispatch } = useContext(CartContext);
  const [confirmed, setConfirmed] = useState(false);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleConfirm = () => {
  setConfirmed(true);
  setTimeout(() => {
    dispatch({ type: 'CLEAR_CART' });
    onCompleteOrder(); 
  }, 1200);
};


  return (
    <div className="fixed inset-0 px-3 bg-opacity-60 flex items-center justify-center z-70">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{
            duration: 0.3,
            ease: easeIn,
        }}
        className="bg-white w-full max-w-md rounded-xl p-6 shadow-lg relative"
      >
        <button onClick={onCloseCheckout} className="absolute cursor-pointer  top-2 right-3 text-gray-400 hover:text-black text-2xl">&times;</button>

        {!confirmed ? (
          <>
            <h2 className="text-xl font-bold mb-4 text-primary font-roboto">Order Summary</h2>
            <div className="space-y-3 max-h-64 overflow-y-auto bg-gray-100 p-2">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between font-poppins border-b pb-1">
                  <span>{item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-lg font-semibold">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handleConfirm}
              className="btn w-full py-2 text-[16px] mt-3"
            >
              Confirm Order
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <FaCheckCircle className="text-green-500 text-6xl" />
            </motion.div>
            <h3 className="text-xl font-bold text-primary">Order Complete!</h3>
            <p className="text-sm text-gray-600">Thank you for your purchase.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Checkout;
