import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  const footerLinks = [
  {
    title: "SHOP",
    links: ["Products", "Overview", "Pricing", "Releases"]
  },
  {
    title: "COMPANY",
    links: ["About Us", "Contact", "News", "Support"]
  }
];


  return (
    <footer className='bg-primary'>
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between gap-6">
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h3 className='font-rufina text-3xl font-bold text-white'>Rivo</h3>
            <p className='font-poppins text-white'>Social Media</p>
            <ul className='flex gap-4'>
              <a href=""><img className='size-8' src={assets.facebookIcon} alt="" /></a>
              <a href=""><img className='size-8' src={assets.twitterIcon} alt="" /></a>
              <a href=""><img className='size-8' src={assets.instagramIcon} alt="" /></a>
            </ul>
          </div>

        {footerLinks.map((section, index) => (
          <div key={index} className='hidden lg:block'>
            <h4 className="text-white font-bold font-roboto mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-green-100 hover:text-white transition font-poppins">
                     {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="">
          <h4 className='text-white font-bold font-roboto mb-4 text-center md:text-start'>Stay up to date</h4>
         <form action="" className='flex items-center'>
           <input type="email" className='outline-none rounded-l border-2 border-secondary py-2 px-4 text-white' placeholder='Enter your email'/>
           <button className='bg-secondary py-2.5 px-2 rounded-r text-primary font-poppins'>Submit</button>
         </form>
        </div>

        </div>

        <div className="flex items-center pt-18">
          <div className="border border-secondary flex-1"></div>
          <ul className='flex gap-3.5 ml-5'>
            <p className='text-white font-poppins'>Terms</p>
            <p className='text-white font-poppins'>Privacy</p>
            <p className='text-white font-poppins'>Cookies</p>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer