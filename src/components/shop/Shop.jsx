import React ,{useState} from 'react'
import { shopProducts } from '../../assets/assets'


const Shop = () => {

  const [selectedCategory, setSelectedCategory] = useState("sale");
  
    const filterProducts = 
      selectedCategory === 'sale' ? shopProducts : 
      shopProducts.filter((item)=>
        item.category.toLowerCase().trim() === selectedCategory.toLowerCase().trim()
    );

  return (

    <section className='section-container py-36'>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterProducts.map((item)=>(
          <div key={item.id} className="flex flex-col justify-center items-center gap-2 bg-gray-200 shadow-lg p-5 rounded-lg">
             
              <img className='w-full h-[70%] object-cover rounded-lg' src={item.img} alt={item.name} loading='lazy'/>
             <h4 className="text-lg md:text-xl font-poppins font-bold text-gray-800 text-center">{item.name}</h4>
             <p className='font-poppins text-primary font-bold text-lg'>{item.price}</p>

             <button className='btn text-lg py-2.5'>Add To Cart</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Shop