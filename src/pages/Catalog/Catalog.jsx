import React, { useState } from 'react'
import { HiChevronDown, HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";
import useStore from '../../Store/useStore'; 

import Rasm from "./images/aka.png"
import G from './images/g.png'
import O from './images/o.png'
import W from './images/w.png'

export const productsData = [
    { id: 1, title: "Nike Air Max", price: "$145", category: "Men's Shoes", img: Rasm },
    { id: 2, title: "Jordan Retro", price: "$190", category: "Men's Basketball", img: G },
    { id: 3, title: "Nike Pegasus", price: "$130", category: "Running Shoes", img: O },
    { id: 4, title: "Nike Air Force", price: "$110", category: "Unisex Shoes", img: W },
    { id: 5, title: "Nike Dunk Low", price: "$115", category: "Women's Shoes", img: Rasm },
    { id: 6, title: "Nike ZoomX", price: "$160", category: "Pro Running", img: G },
];

export const ProductCard = ({ product }) => {
    const { addToCart, toggleWishlist, wishlist } = useStore(); 
    const [currentImg, setCurrentImg] = useState(product.img);
    
    const isLiked = wishlist.some(item => item.id === product.id);

    return (
        <div className='group cursor-pointer '>
            <div className='relative bg-gray-100 rounded-sm overflow-hidden'>
                <img className='w-full object-cover h-[350px] transition-all duration-500' src={currentImg} alt="product" />
                
                <div className='absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0'>
                    <button 
                        onClick={(e) => { 
                            e.stopPropagation(); 
                            toggleWishlist(product); 
                        }}
                        className={`p-2 rounded-full shadow-md transition-colors ${isLiked ? 'bg-red-500 text-white' : 'bg-white hover:bg-black hover:text-white'}`}
                    >
                        <HiOutlineHeart size={20} fill={isLiked ? "currentColor" : "none"} />
                    </button>
                </div>
            </div>

            <div className='flex mt-4 gap-2 px-2'>
                <img 
                    className={`w-14 h-14 border-2 p-1 rounded cursor-pointer transition-all ${currentImg === G ? 'border-black scale-105' : 'border-transparent hover:border-gray-300'}`} 
                    src={G} alt="v1" 
                    onClick={() => setCurrentImg(G)} 
                />
                <img 
                    className={`w-14 h-14 border-2 p-1 rounded cursor-pointer transition-all ${currentImg === O ? 'border-black scale-105' : 'border-transparent hover:border-gray-300'}`} 
                    src={O} alt="v2" 
                    onClick={() => setCurrentImg(O)} 
                />
                <img 
                    className={`w-14 h-14 border-2 p-1 rounded cursor-pointer transition-all ${currentImg === W ? 'border-black scale-105' : 'border-transparent hover:border-gray-300'}`} 
                    src={W} alt="v3" 
                    onClick={() => setCurrentImg(W)} 
                />
                <div className='flex items-center text-xs text-gray-400 font-medium'>+12</div>
            </div>

            <div className='mt-4 px-2 pb-6'>
                <h1 className='font-bold text-orange-600 text-sm uppercase tracking-wider'>Just In</h1>
                <div className='flex justify-between items-start mt-1'>
                    <div>
                        <p className='text-gray-800 font-medium text-lg'>{product.title}</p>
                        <p className='text-gray-500 text-sm'>{product.category}</p>
                    </div>
                    <p className='font-bold text-lg'>{product.price}</p>
                </div>

                <button 
                    onClick={() => addToCart(product)}
                    className="w-full mt-4 bg-black text-white py-3 rounded-full font-bold text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 active:scale-95"
                >
                    ADD TO BAG
                </button>
            </div>
        </div>
    );
};

const Catalog = () => {
    const [openMenus, setOpenMenus] = useState({ 
        sale: true, 
        color: true, 
        tech: false,
        size: false,
        collections: false,
        fit: false
    });

    const toggle = (name) => {
        setOpenMenus(prev => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <div className="bg-white min-h-screen relative top-34">
            <div className='container mx-auto px-4 flex flex-col md:flex-row gap-12 pt-12 pb-32'>
                {/* CHAP TOMON (SIDEBAR) */}
                <div className='w-full md:w-1/4'>
                    <div className='sticky top-5'>
                        <ul className='space-y-7'>
                            <li>
                                <h1 className='font-bold text-2xl mb-6 text-gray-900'>New Releases ({productsData.length})</h1>
                                <div className='space-y-3 text-[16px] text-gray-700 font-medium'>
                                    {["Tops & T-Shirts", "Shorts", "Hoodies & Pullovers", "Jackets & Vests", "Pants & Tights", "Fleece", "Tracksuits", "Socks"].map(item => (
                                        <p key={item} className='hover:translate-x-1 transition-transform cursor-pointer hover:text-black'>{item}</p>
                                    ))}
                                </div>
                            </li>

                            <hr className='border-gray-100' />

                            <li>
                                <div className='flex justify-between items-center cursor-pointer group' onClick={() => toggle('sale')}>
                                    <h1 className='font-bold text-lg'>Sale & Offers</h1>
                                    <HiChevronDown className={`text-2xl transition-transform duration-300 ${openMenus.sale ? 'rotate-180' : ''}`} />
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ${openMenus.sale ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className='space-y-3'>
                                        <div className='flex items-center gap-3'><input type="checkbox" className='w-5 h-5 accent-black cursor-pointer' id="s1" /><label htmlFor="s1" className='text-gray-700 cursor-pointer'>Up to 50% Off</label></div>
                                        <div className='flex items-center gap-3'><input type="checkbox" className='w-5 h-5 accent-black cursor-pointer' id="s2" /><label htmlFor="s2" className='text-gray-700 cursor-pointer'>Sale</label></div>
                                    </div>
                                </div>
                            </li>

                            <hr className='border-gray-100' />

                            <li>
                                <div className='flex justify-between items-center cursor-pointer group' onClick={() => toggle('color')}>
                                    <h1 className='font-bold text-lg tracking-tight'>Color</h1>
                                    <HiChevronDown className={`text-2xl transition-transform duration-300 ${openMenus.color ? 'rotate-180' : ''}`} />
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ${openMenus.color ? 'max-h-64 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className='grid grid-cols-3 gap-y-6 text-center text-[11px] font-bold text-gray-500'>
                                        <div className='flex flex-col items-center gap-2 group cursor-pointer'><div className='w-8 h-8 bg-black rounded-full border ring-offset-2 group-hover:ring-2 ring-gray-300 transition-all'></div>BLACK</div>
                                        <div className='flex flex-col items-center gap-2 group cursor-pointer'><div className='w-8 h-8 bg-blue-500 rounded-full border ring-offset-2 group-hover:ring-2 ring-blue-300 transition-all'></div>BLUE</div>
                                        <div className='flex flex-col items-center gap-2 group cursor-pointer'><div className='w-8 h-8 bg-orange-900 rounded-full border ring-offset-2 group-hover:ring-2 ring-amber-700 transition-all'></div>BROWN</div>
                                        <div className='flex flex-col items-center gap-2 group cursor-pointer'><div className='w-8 h-8 bg-green-500 rounded-full border ring-offset-2 group-hover:ring-2 ring-green-300 transition-all'></div>GREEN</div>
                                        <div className='flex flex-col items-center gap-2 group cursor-pointer'><div className='w-8 h-8 bg-gray-400 rounded-full border ring-offset-2 group-hover:ring-2 ring-gray-300 transition-all'></div>GRAY</div>
                                        <div className='flex flex-col items-center gap-2 group cursor-pointer'><div className='w-8 h-8 bg-[#F5F5DC] rounded-full border ring-offset-2 group-hover:ring-2 ring-orange-100 transition-all'></div>CREAM</div>
                                    </div>
                                </div>
                            </li>

                            <hr className='border-gray-100' />

                            <li>
                                <div className='flex justify-between items-center cursor-pointer group' onClick={() => toggle('tech')}>
                                    <h1 className='font-bold text-lg'>Technology</h1>
                                    <HiChevronDown className={`text-2xl transition-transform duration-300 ${openMenus.tech ? 'rotate-180' : ''}`} />
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ${openMenus.tech ? 'max-h-60 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className='space-y-3'>
                                        {["Nike Air", "Zoom Air", "Flyknit", "Gore-Tex", "React Foam"].map(t => (
                                            <div key={t} className='flex items-center gap-3'><input type="checkbox" id={t} className='w-5 h-5 accent-black cursor-pointer' /><label htmlFor={t} className='text-gray-700 cursor-pointer'>{t}</label></div>
                                        ))}
                                    </div>
                                </div>
                            </li>

                            <hr className='border-gray-100' />

                            <li>
                                <div className='flex justify-between items-center cursor-pointer group' onClick={() => toggle('size')}>
                                    <h1 className='font-bold text-lg'>Size</h1>
                                    <HiChevronDown className={`text-2xl transition-transform duration-300 ${openMenus.size ? 'rotate-180' : ''}`} />
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ${openMenus.size ? 'max-h-64 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className='grid grid-cols-3 gap-2'>
                                        {["38", "39", "40", "41", "42", "43", "44", "45", "46"].map(s => (
                                            <button key={s} className='border py-2 text-sm font-medium hover:border-black transition-colors rounded-sm'>{s}</button>
                                        ))}
                                    </div>
                                </div>
                            </li>

                            <hr className='border-gray-100' />

                            <li>
                                <div className='flex justify-between items-center cursor-pointer group' onClick={() => toggle('collections')}>
                                    <h1 className='font-bold text-lg'>Collections</h1>
                                    <HiChevronDown className={`text-2xl transition-transform duration-300 ${openMenus.collections ? 'rotate-180' : ''}`} />
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ${openMenus.collections ? 'max-h-60 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className='space-y-3'>
                                        {["Air Force 1", "Air Jordan", "Air Max", "Nike Dunk", "Nike Pegasus"].map(c => (
                                            <div key={c} className='flex items-center gap-3'><input type="checkbox" id={c} className='w-5 h-5 accent-black cursor-pointer' /><label htmlFor={c} className='text-gray-700 cursor-pointer'>{c}</label></div>
                                        ))}
                                    </div>
                                </div>
                            </li>

                            <hr className='border-gray-100' />

                            <li>
                                <div className='flex justify-between items-center cursor-pointer group' onClick={() => toggle('fit')}>
                                    <h1 className='font-bold text-lg'>Fit</h1>
                                    <HiChevronDown className={`text-2xl transition-transform duration-300 ${openMenus.fit ? 'rotate-180' : ''}`} />
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ${openMenus.fit ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className='space-y-3'>
                                        {["Standard Fit", "Slim Fit", "Loose Fit", "Oversized"].map(f => (
                                            <div key={f} className='flex items-center gap-3'><input type="checkbox" id={f} className='w-5 h-5 accent-black cursor-pointer' /><label htmlFor={f} className='text-gray-700 cursor-pointer'>{f}</label></div>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* O'NG TOMON (MAHSULOTLAR GRIDI) */}
                <div className='w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10'>
                    {productsData.map(product => (
                        <ProductCard 
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Catalog;