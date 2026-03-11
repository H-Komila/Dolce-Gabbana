import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './images/logo.png';
import { IoSearchSharp, IoMenuOutline, IoCloseOutline, IoLocationOutline } from "react-icons/io5";
import { FaHeart, FaUserCircle, FaQuestionCircle, FaUserPlus } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    // showMobileSearch holati endi kerak emas, chunki u doim ko'rinib turadi
    const navigate = useNavigate();

    const products = ["Nike Air Max", "Jordan Retro", "Nike Pegasus", "Women's Training Shoes", "Men's Running Shorts"];
    const filteredProducts = products.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm !== ""
    );

    const handleAuthSubmit = (e, type) => {
        e.preventDefault();
        const message = type === 'signin'
            ? "Tizimga muvaffaqiyatli kirdingiz! ✅"
            : "Ro'yxatdan o'tganingiz uchun tashakkur! Xush kelibsiz! 🎉";
        alert(message);
        setActiveModal(null);
    };

    const handleFindStore = () => {
        alert("Yaqin atrofdagi do'konlar qidirilmoqda... 📍");
        setActiveModal(null);
    };

    return (
        <nav className="w-full font-sans relative">
            <div className='max-w-[1440px] mx-auto'>
                {/* 1. TOP BAR */}
                <div className="bg-[#f5f5f5] py-1.5 px-6 md:px-12 flex justify-end items-center text-[12px] font-medium border-b border-gray-200 hidden md:flex">
                    <ul className="flex gap-4">
                        <li onClick={() => setActiveModal('store')} className="hover:opacity-70 cursor-pointer">Find a store</li>
                        <div className="w-[1px] h-3 bg-black/20 self-center"></div>
                        <li onClick={() => setActiveModal('help')} className="hover:opacity-70 cursor-pointer">Help</li>
                        <div className="w-[1px] h-3 bg-black/20 self-center"></div>
                        <li onClick={() => setActiveModal('join')} className="hover:opacity-70 cursor-pointer">Join Us</li>
                        <div className="w-[1px] h-3 bg-black/20 self-center"></div>
                        <li onClick={() => setActiveModal('signin')} className="hover:opacity-70 cursor-pointer font-bold tracking-tight text-black">Sign In</li>
                    </ul>
                </div>

                {/* 2. MAIN NAV */}
                <div className="px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center bg-white relative gap-4 md:gap-0">

                    {/* LOGO VA MOBIL ICONS */}
                    <div className="flex justify-between items-center w-full md:w-auto">
                        <div className="flex-shrink-0 relative group">
                            <Link to="/" className="block transition-all duration-500 ease-in-out transform hover:scale-105 active:scale-95 outline-none">
                                <div className="absolute inset-0 bg-black/5 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
                                <img src={Logo} alt="Nike Logo" className="relative w-16 md:w-[80px] lg:w-[100px] h-auto object-contain" />
                            </Link>
                        </div>

                        {/* Mobil menyu va savatcha (faqat kichik ekranda) */}
                        <div className="flex md:hidden items-center gap-4 text-2xl">
                            <Link to="/cart"><FaHeart className="text-xl" /></Link>
                            <Link to="/product" className="relative">
                                <FaBagShopping className="text-xl" />
                                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
                            </Link>
                            <button onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
                            </button>
                        </div>
                    </div>

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-800">
                        {['New & Featured', 'Men', 'Women', 'Sale'].map((item) => (
                            <li key={item} className="relative group cursor-pointer hover:text-black">
                                <Link to="/catalog">{item}</Link>
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>

                    {/* SEARCH VA DESKTOP ICONS */}
                    <div className="flex items-center w-full md:w-auto gap-4">
                        {/* SEARCH INPUT - Endi mobil va desktopda doim ko'rinadi */}
                        <div className="relative flex-1 md:flex-none">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <IoSearchSharp className="text-xl text-gray-500" />
                            </div>
                            <input
                                onChange={(e) => setSearchTerm(e.target.value)}
                                value={searchTerm}
                                type="text"
                                placeholder="Search..."
                                className="bg-[#f5f5f5] rounded-full py-2 pl-10 pr-4 outline-none focus:bg-[#e5e5e5] transition-all w-full md:w-44 lg:w-64"
                            />

                            {/* Search Results Dropdown */}
                            {searchTerm && (
                                <div className="absolute top-full left-0 md:right-0 w-full md:w-64 bg-white shadow-2xl mt-2 rounded-lg p-4 z-[60] border animate-in fade-in slide-in-from-top-2">
                                    <p className="text-xs text-gray-400 mb-2 italic text-center">"{searchTerm}" bo'yicha natijalar</p>
                                    {filteredProducts.length > 0 ? (
                                        filteredProducts.map(p => (
                                            <div key={p} className="py-2 hover:bg-gray-50 cursor-pointer text-sm border-b last:border-none px-2">{p}</div>
                                        ))
                                    ) : (
                                        <p className="text-sm text-gray-500 text-center py-2">Hech narsa topilmadi 😕</p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* DESKTOP ICONS (Faqat md dan yuqori ekranlarda) */}
                        <div className="hidden md:flex items-center gap-4 text-2xl">
                            <Link to="/cart" className="relative p-1">
                                <FaHeart className="hover:text-red-500 transition-colors" />
                            </Link>
                            <Link to="/product" className="relative p-1">
                                <FaBagShopping />
                                <span className="absolute top-0 right-0 bg-black text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* --- MODALS --- */}
                {activeModal === 'signin' && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
                        <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl relative animate-in zoom-in duration-200">
                            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-2xl"><IoCloseOutline /></button>
                            <form onSubmit={(e) => handleAuthSubmit(e, 'signin')} className="flex flex-col items-center">
                                <FaUserCircle className="text-5xl mb-4 text-gray-700" />
                                <h2 className="text-xl font-black text-center mb-6">ACCOUNT SIGN IN</h2>
                                <input required type="email" placeholder="Email address" className="w-full border p-3 rounded-md mb-3 outline-black" />
                                <input required type="password" placeholder="Password" className="w-full border p-3 rounded-md mb-6 outline-black" />
                                <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-bold hover:bg-gray-800 transition-colors">LOGIN</button>
                            </form>
                        </div>
                    </div>
                )}

                {activeModal === 'join' && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
                        <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl relative animate-in zoom-in duration-200 text-center">
                            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-2xl"><IoCloseOutline /></button>
                            <FaUserPlus className="text-5xl mx-auto mb-4 text-gray-700" />
                            <h2 className="text-xl font-black mb-4">BECOME A NIKE MEMBER</h2>
                            <p className="text-gray-500 text-sm mb-6">Create your Nike Member profile and get first access.</p>
                            <form onSubmit={(e) => handleAuthSubmit(e, 'join')} className="space-y-3">
                                <input required type="text" placeholder="First Name" className="w-full border p-3 rounded-md outline-black" />
                                <input required type="email" placeholder="Email Address" className="w-full border p-3 rounded-md outline-black" />
                                <input required type="password" placeholder="Password" className="w-full border p-3 rounded-md outline-black" />
                                <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-bold mt-4 hover:bg-gray-800">JOIN US</button>
                            </form>
                        </div>
                    </div>
                )}

                {activeModal === 'store' && (
                    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
                        <div className="bg-white w-full max-w-sm rounded-2xl p-8 text-center animate-in fade-in duration-300">
                            <IoLocationOutline className="text-6xl mx-auto mb-4 text-red-500 animate-bounce" />
                            <h2 className="text-2xl font-bold mb-2">Find a Nike Store</h2>
                            <button onClick={handleFindStore} className="w-full bg-black text-white py-3 rounded-full font-bold mt-4">Ruxsat berish</button>
                            <button onClick={() => setActiveModal(null)} className="text-gray-500 py-2 mt-2">Keyinroq</button>
                        </div>
                    </div>
                )}

                {activeModal === 'help' && (
                    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
                        <div className="bg-white w-full max-w-sm rounded-2xl p-8 relative">
                            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-2xl"><IoCloseOutline /></button>
                            <h3 className="text-xl font-bold mb-4 text-center">Yordam</h3>
                            <ul className="space-y-2">
                                {['Buyurtma holati', 'Yetkazib berish', 'Qaytarish'].map(item => (
                                    <li key={item} onClick={() => setActiveModal(null)} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer border">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {/* MOBILE SIDEBAR MENU */}
                <div className={`fixed top-0 right-0 h-full w-full bg-white z-[90] transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden p-8`}>
                    <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-3xl"><IoCloseOutline /></button>
                    <ul className="mt-12 space-y-6 text-2xl font-bold">
                        <li onClick={() => { navigate('/catalog'); setIsOpen(false); }}>New & Featured</li>
                        <li onClick={() => { navigate('/catalog'); setIsOpen(false); }}>Men</li>
                        <li onClick={() => { navigate('/catalog'); setIsOpen(false); }}>Women</li>
                        <li onClick={() => { navigate('/catalog'); setIsOpen(false); }} className="text-red-600">Sale</li>
                    </ul>
                    <div className="mt-12 pt-12 border-t space-y-4">
                        <button onClick={() => { setActiveModal('signin'); setIsOpen(false) }} className="block text-lg font-medium">Sign In</button>
                        <button onClick={() => { setActiveModal('join'); setIsOpen(false) }} className="block text-lg font-medium">Join Us</button>
                        <button onClick={() => { setActiveModal('store'); setIsOpen(false) }} className="block text-lg font-medium">Find a Store</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;