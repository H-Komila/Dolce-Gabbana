import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // bg-white -> bg-black ga o'zgardi, border rangi ham moslashtirildi
    <footer className="bg-black border-t border-gray-800 pt-16 pb-8 font-sans text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* ASOSIY QISM (GRID) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. COMPANY */}
          <div className="space-y-4">
            <h1 className="text-sm font-black uppercase tracking-widest">Company</h1>
            {/* text-gray-500 -> text-gray-400 (to'q fonda yaxshiroq ko'rinishi uchun) */}
            <ul className="space-y-3 text-gray-400 text-[14px]">
              <li className="hover:text-white cursor-pointer transition-colors duration-300">Find location nearest to you</li>
              {/* text-black -> text-white ga o'zgardi */}
              <li className="hover:text-white cursor-pointer transition-colors duration-300 font-bold underline underline-offset-4 text-white">See Our Stores</li>
              <li className="hover:text-white cursor-pointer transition-colors duration-300">+998 99 123 45 67</li>
              <li className="hover:text-white cursor-pointer transition-colors duration-300">hello@mail.com</li>
            </ul>
          </div>

          {/* 2. INFORMATION */}
          <div className="space-y-4">
            <h1 className="text-sm font-black uppercase tracking-widest">Information</h1>
            <ul className="space-y-3 text-gray-400 text-[14px]">
              <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">My Account</li>
              <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Log In</li>
              <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">My Cart</li>
              <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Wishlist</li>
            </ul>
          </div>

          {/* 3. SERVICES */}
          <div className="space-y-4">
            <h1 className="text-sm font-black uppercase tracking-widest">Services</h1>
            <ul className="space-y-3 text-gray-400 text-[14px]">
              <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">About us</li>
              <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Careers</li>
              <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Delivery Information</li>
              <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* 4. SUBSCRIBE */}
          <div className="space-y-4">
            <h1 className="text-sm font-black uppercase tracking-widest">Subscribe</h1>
            <p className="text-gray-400 text-[14px] leading-relaxed">
              Enter your e-mail below to be the first to know about new collections and product launches.
            </p>
            <div className="relative group">
              {/* focus:border-black -> focus:border-white, border rangi moslashtirildi */}
              <input 
                type="email" 
                placeholder='Your Email' 
                className="w-full border-b-2 border-gray-700 py-2 pr-10 outline-none focus:border-white transition-colors duration-500 bg-transparent text-white placeholder:text-gray-500"
              />
              {/* group-focus-within:text-black -> group-focus-within:text-white */}
              <IoMailOutline className="absolute right-2 top-2 text-xl text-gray-500 group-focus-within:text-white transition-colors" />
            </div>
          </div>
        </div>

        {/* BOTTOM QISM (COPYRIGHT & SOCIALS) */}
        {/* border rangi moslashtirildi */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className="text-[12px] font-medium text-gray-500">
            © Company {currentYear}. All Rights Reserved
          </h1>
          
          <div className="flex items-center gap-6">
            {[ 
              { icon: <FaFacebook />, link: "#" },
              { icon: <FaXTwitter />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaYoutube />, link: "#" }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.link} 
                className="text-xl text-gray-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;