import React,{useState,useEffect} from 'react'
import { assets,navItems } from '../assets/assets'
import { Link, Links } from 'react-router-dom'
import { RxHamburgerMenu,RxCross1 } from "react-icons/rx";

const Navbar = () => {
  
  const [showMobileMenu,setShowMobileMenu] = useState(false);

  const mobileMenuToggler = ()=>{
    setShowMobileMenu(prev=>!prev);
  }
  useEffect(()=>{
    if(showMobileMenu){
      document.body.classList.add('overflow-hidden');
    }else{
      document.body.classList.remove('overflow-hidden');
    }

    return ()=>{
      document.body.classList.remove('overflow-hidden');
    }
  },[showMobileMenu]);

  return (
    <header className='z-100 fixed top-0 left-0 right-0  bg-bg'>
        <nav className='relative w-[90%] md:w-auto container md:px-8 lg:px-14 mx-auto flex justify-between items-center py-6'>

            <div className="z-100 font-rufina font-black text-primary text-3xl">Rivo</div>

            <ul className='hidden md:flex gap-5 lg:gap-10 items-center z-100'>
              {navItems.map((item)=>(
                <Link className='nav-link' key={item.name} to={item.link}>{item.name}</Link>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-4">
                <div><img className='size-9 mt-2' src={assets.cartIcon} alt="" loading='lazy' /></div>
                <div><button className='border-2 border-primary font-poppins text-primary  px-5 py-1.5'>LOGIN</button></div>
            </div>

            {/*Mobile Menu  */}
             <ul className={`md:hidden absolute top-full left-0 right-0 bg-secondary-bg px-6 py-10 rounded-lg z-50
                flex flex-col items-center gap-8 transition-transform duration-500 ease-in-out transform
                ${showMobileMenu ? 'translate-y-0 mt-3' : '-translate-y-[200%] mt-0'}`}>

                {navItems.map((item) => (
                  <Link className='nav-link' key={item.name} to={item.link}>{item.name}</Link>
                ))}
                
              </ul>


             <div className="md:hidden flex items-center gap-4 z-100">
                <div><img className='size-9 ' src={assets.cartIcon} alt="" loading='lazy' /></div>
                <div>
                  <button onClick={mobileMenuToggler} className='text-2xl z-200'>{showMobileMenu ? <RxCross1/> : <RxHamburgerMenu/>}</button>
                </div>
            </div> 


        </nav>

    </header>
  )
}

export default Navbar