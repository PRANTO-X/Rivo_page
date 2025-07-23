import React, {useState} from 'react'
import { products } from '../../assets/assets'
import ProductCard from '../ProductCard'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("sale");

  const filterProducts = 
    selectedCategory === 'sale' ? products : 
    products.filter((item)=>
      item.category.toLowerCase().trim() === selectedCategory.toLowerCase().trim()
    );


  return (
      <section className='section-container'>
        <h2 className='heading text-center'>Our products</h2>

        <ul className='flex justify-center items-center gap-3 md:gap-14 my-5 md:my-10'>
          {["SALE","HOT","NEW ARRIVALS","ACCESSORIES"].map((item,index)=>(
            <button 
            key={index}  
            className={`category ${selectedCategory === item.toLowerCase().split(" ")[0] ? 'active text-primary' : ''}`}
            onClick={()=>setSelectedCategory(item.toLowerCase().split(" ")[0])}
            >{item}</button>
          ))}
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {filterProducts.map((item,index)=>(
            <ProductCard
              key={index}
              img={item.img}
              name={item.name}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </section>
  )
}

export default Products