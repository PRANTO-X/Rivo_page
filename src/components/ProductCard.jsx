// components/ProductCard.jsx
import React from 'react';
import { assets } from '../assets/assets';

const ProductCard = ({ img, name, price, rating }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-5">
      <div className="bg-gray-200">
        <img src={img} alt={name} loading="lazy" />
      </div>

      <h4 className="text-lg md:text-xl font-poppins font-bold text-gray-800 text-center">{name}</h4>

      <div className="flex divide-x-2 divide-gray-700 gap-8">
        <p className="pr-5 md:text-lg text-gray-600 font-poppins">{price}</p>
        <div className="flex items-center gap-1">
          <p className="md:text-lg text-gray-600 font-poppins">{rating}</p>
          <img className="size-5 mb-1" src={assets.starIcon} alt="star icon" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
