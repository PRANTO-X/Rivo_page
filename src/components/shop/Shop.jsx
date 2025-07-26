import React ,{useContext, useState} from 'react'
import { shopProducts } from '../../assets/assets'
import { CiFilter } from "react-icons/ci";
import { CartContext } from '../../hooks/CartContext';


const Shop = () => {
  const {cartItems,dispatch} = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState("sale");
  const categories = ["SALE", "HOT", "NEW ARRIVALS", "ACCESSORIES"];
  
    const filterProducts = 
      selectedCategory === 'sale' ? shopProducts : 
      shopProducts.filter((item)=>
        item.category.toLowerCase().trim() === selectedCategory.toLowerCase().trim()
    );

  return (

    <section className='section-container py-36'>
      <div className="flex justify-between items-center mb-10">

        <h2 className='heading text-2xl  md:text-4xl '>Our products</h2>

        {/* Mobile filter */}
        <div className="relative lg:hidden">
          <select
            className={`w-full px-4 mr-4 py-2 rounded-md text-white appearance-none bg-secondary-bg focus:bg-secondary-bg active:bg-secondary-bg focus:outline-none`}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((item, index) => (
              <option
                key={index}
                value={item.toLowerCase().split(" ")[0]}
                className="text-white"
              >
                {item}
              </option>
            ))}
          </select>

          {/* Custom filter icon */}
          <div className="absolute right-1 pr-1 top-1/2 -translate-y-1/2  pointer-events-none text-white text-xl">
            <CiFilter />
          </div>
        </div>
      </div>

      <div className="flex  gap-7">
        {/* Desktop filter */}
        <div className="hidden lg:block bg-secondary-bg self-start p-5 rounded-lg lg:w-54  xl:w-62 sticky top-31">
          <h4 className='text-2xl text-primary font-roboto font-semibold '>Filters</h4>

          <ul className='flex flex-col mt-3.5 gap-8'>
            {categories.map((item, index) => (
              <li key={index} className="w-full">
                <button
                  className={`w-full text-lg rounded-lg text-white hover:bg-primary transition duration-300 ease-in-out cursor-pointer px-4 py-2 text-left ${
                    selectedCategory === item.toLowerCase().split(" ")[0] ? 'bg-primary' : ''
                  }`}
                  onClick={() => setSelectedCategory(item.toLowerCase().split(" ")[0])}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Product Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {filterProducts.map((item)=>{
            const isInCart = cartItems.some(cartItem => cartItem.id === item.id);
              return (
                <div key={item.id}  className={`flex flex-col justify-center   items-center gap-2 bg-gray-200 shadow-lg p-5 rounded-lg transition duration-300 ${
                                            isInCart ? 'outline-2 outline-primary' : ''}`}>
              
                  <img className='w-full h-[70%] object-cover rounded-lg' src={item.img} alt={item.name} loading='lazy'/>
                  <h4 className="text-lg mt-2 md:text-xl font-poppins font-bold text-gray-800 text-center">{item.name}</h4>
                  <p className='font-poppins text-primary font-bold text-lg'>{item.price}</p>

                  <button onClick={()=>dispatch({type: 'ADD',payload: item})} className='btn text-sm lg:text-lg'>Add To Cart</button>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default Shop