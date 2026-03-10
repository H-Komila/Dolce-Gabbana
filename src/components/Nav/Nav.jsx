import React, { useState } from 'react';
import Logo from './images/logo.png';
import { IoSearchSharp, IoMenuOutline, IoCloseOutline, IoLocationOutline } from "react-icons/io5";
import { FaHeart, FaUserCircle, FaQuestionCircle, FaUserPlus } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null); // 'signin', 'help', 'join', 'store'
    const [searchTerm, setSearchTerm] = useState("");

    // Test mahsulotlar
    const products = ["Nike Air Max", "Jordan Retro", "Nike Pegasus", "Women's Training Shoes", "Men's Running Shorts"];
    const filteredProducts = products.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm !== ""
    );

    // Form handling (Oddiy misol)
    const handleAuthSubmit = (e, type) => {
        e.preventDefault();
        const message = type === 'signin'
            ? "Tizimga muvaffaqiyatli kirdingiz! ✅"
            : "Ro'yxatdan o'tganingiz uchun tashakkur! Xush kelibsiz! 🎉";
        alert(message);
        setActiveModal(null); // Modalni yopish
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
                <div className="px-6 md:px-12 py-4 flex justify-between items-center bg-white">
                    <div className="flex-shrink-0 relative group">
                        <a
                            href="/"
                            className="block transition-all duration-500 ease-in-out transform hover:scale-105 active:scale-95 outline-none"
                        >
                            {/* Logoning orqasidagi mayin nur (Glow effect) - Hover bo'lganda ko'rinadi */}
                            <div className="absolute inset-0 bg-black/5 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>

                            <img
                                src={Logo}
                                alt="Nike Logo"
                                className="relative w-30 md:w-[100px] lg:w-[120px] h-auto object-contain drop-shadow-sm filter brightness-100 contrast-105"
                            // brightness va contrast logoni tiniqlashtiradi
                            />
                        </a>
                    </div>

                    <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-800">
                        {['New & Featured', 'Men', 'Women', 'Sale'].map((item) => (
                            <li key={item} className="relative group cursor-pointer hover:text-black">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="relative hidden lg:block group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <IoSearchSharp className="text-xl text-gray-500" />
                            </div>
                            <input
                                onChange={(e) => setSearchTerm(e.target.value)}
                                value={searchTerm}
                                type="text"
                                placeholder="Search products..."
                                className="bg-[#f5f5f5] rounded-full py-2 pl-10 pr-4 outline-none focus:bg-[#e5e5e5] transition-all w-44 focus:w-64"
                            />
                            {searchTerm && (
                                <div className="absolute top-full right-0 w-64 bg-white shadow-2xl mt-2 rounded-lg p-4 z-[60] border animate-in fade-in slide-in-from-top-2">
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

                        <div className="flex gap-4 text-2xl items-center">
                            <FaHeart className="cursor-pointer hover:text-red-500 transition-colors" />
                            <div className="relative cursor-pointer">
                                <FaBagShopping />
                                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
                            </div>
                            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                                {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- MODALLAR --- */}

                {/* 1. SIGN IN MODAL */}
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

                {/* 2. JOIN US MODAL */}
                {activeModal === 'join' && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
                        <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl relative animate-in zoom-in duration-200 text-center">
                            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-2xl"><IoCloseOutline /></button>
                            <FaUserPlus className="text-5xl mx-auto mb-4 text-gray-700" />
                            <h2 className="text-xl font-black mb-4">BECOME A NIKE MEMBER</h2>
                            <p className="text-gray-500 text-sm mb-6">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
                            <form onSubmit={(e) => handleAuthSubmit(e, 'join')} className="space-y-3">
                                <input required type="text" placeholder="First Name" className="w-full border p-3 rounded-md outline-black" />
                                <input required type="email" placeholder="Email Address" className="w-full border p-3 rounded-md outline-black" />
                                <input required type="password" placeholder="Password" className="w-full border p-3 rounded-md outline-black" />
                                <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-bold mt-4 hover:bg-gray-800">JOIN US</button>
                            </form>
                        </div>
                    </div>
                )}

                {/* 3. FIND STORE MODAL */}
                {activeModal === 'store' && (
                    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
                        <div className="bg-white w-full max-w-sm rounded-2xl p-8 text-center animate-in fade-in duration-300">
                            <IoLocationOutline className="text-6xl mx-auto mb-4 text-red-500 animate-bounce" />
                            <h2 className="text-2xl font-bold mb-2">Find a Nike Store</h2>
                            <p className="text-gray-500 mb-6">Yaqin atrofdagi do'konlarni topish uchun joylashuvingizni aniqlashga ruxsat bering.</p>
                            <div className="flex flex-col gap-2">
                                <button onClick={handleFindStore} className="bg-black text-white py-3 rounded-full font-bold">Ruxsat berish</button>
                                <button onClick={() => setActiveModal(null)} className="text-gray-500 py-2">Keyinroq</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* 4. HELP MODAL (Avvalgidek qoldi) */}
                {activeModal === 'help' && (
                    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
                        <div className="bg-white w-full max-w-sm rounded-2xl p-8 relative">
                            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-2xl"><IoCloseOutline /></button>
                            <FaQuestionCircle className="text-5xl text-blue-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-4 text-center">Sizga qanday yordam bera olamiz?</h3>
                            <ul className="space-y-2">
                                {['Buyurtma holati', 'Yetkazib berish', 'Qaytarish', 'To\'lov usullari'].map(item => (
                                    <li key={item} onClick={() => { alert(item + " bo'limiga o'tilmoqda..."); setActiveModal(null) }} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors border">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {/* MOBILE MENU */}
                <div className={`fixed top-0 right-0 h-full w-full bg-white z-[90] transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden p-8`}>
                    <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-3xl"><IoCloseOutline /></button>
                    <ul className="mt-12 space-y-6 text-2xl font-bold">
                        <li onClick={() => setIsOpen(false)}>New & Featured</li>
                        <li onClick={() => setIsOpen(false)}>Men</li>
                        <li onClick={() => setIsOpen(false)}>Women</li>
                        <li className="text-red-600">Sale</li>
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