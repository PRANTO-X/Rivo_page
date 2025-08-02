import React from 'react';
import { motion,easeIn } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const ProductAddCard = () => {
  return (
    <motion.div
    initial={{x: 100,opacity:0}}
    animate={{x:0,opacity:1}}
    exit={{x:100,opacity:0}}
    transition={{
        duration: 0.3,
        ease: easeIn,
    }}
    className='fixed top-15 right-3 md:right-10 lg:right-15 bg-white shadow-lg z-100 rounded-lg '
    >
        <div className="flex flex-col justify-center items-center gap-3 text-center px-18 py-6 md:px-24 md:py-8">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100,delay:0.2 }}
            >
            <FaCheckCircle className="text-green-500 text-5xl md:text-6xl" />
            </motion.div>
            <h3 className="text-lg md:text-xl font-bold text-primary">Item Added</h3>                
        </div>
    </motion.div>
  )
}

export default ProductAddCard