import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './images/logo.png';
import { IoSearchSharp, IoMenuOutline, IoCloseOutline, IoLocationOutline } from "react-icons/io5";
import { FaHeart, FaUserCircle, FaQuestionCircle, FaUserPlus } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import useStore from '../../Store/useStore'; 

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false); // Full-screen search holati
    
    const { cartItems, wishlist } = useStore(); 

    const navigate = useNavigate();

    // Mahsulotlar ro'yxati (obyekt ko'rinishida, rasmlari bilan)
    const products = [
        { id: 1, name: "Nike Air Max 270", category: "Men's Shoes", price: "$150", img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f63ea490-6421-4654-803a-0e99f6927a4d/air-max-270-mens-shoes-K9BTBy.png" },
        { id: 2, name: "Nike Air Force 1", category: "Women's Shoes", price: "$110", img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-64ca-439f-966a-2f4701257904/air-force-1-01-womens-shoes-387997.png" },
        { id: 3, name: "Jordan Retro 4", category: "Lifestyle", price: "$210", img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8f921f66-8797-4c8d-8067-934d40232491/air-jordan-4-retro-oxidized-green-mens-shoes-6V9999.png" },
        { id: 4, name: "Nike Pegasus 40", category: "Running Shoes", price: "$130", img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/59489437-124b-486a-848e-206e2f1e626e/air-zoom-pegasus-40-mens-road-running-shoes-6B0000.png" },
        { id: 5, name: "Nike Dunk Low", category: "Men's Shoes", price: "$115", img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/095c721b-df00-474c-8f1d-1594815a519b/dunk-low-retro-mens-shoes-S00000.png" },
        { id: 6, name: "Women's Training Shoes", category: "Training", price: "$100", img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f989e57d-947e-40f4-9040-309d9a0d4a97/free-metcon-5-womens-workout-shoes-H8Z9vG.png" },
        { id: 7, name: "Men's Running Shorts", category: "Apparel", price: "$45", img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/660c609c-7037-4a0f-90e6-a07e4d89617d/challenger-mens-7-brief-lined-shorts-Zl7m3M.png" }
    ];

    const filteredProducts = products.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm !== ""
    );

    // Full screen qidiruv ochiqligida scrollni bloklash
    useEffect(() => {
        if (isSearchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isSearchOpen]);

    const handleAuthSubmit = (e, type) => {
        e.preventDefault();
        const message = type === 'signin'
            ? "Successfully signed in! ✅"
            : "Thank you for joining! Welcome! 🎉";
        alert(message);
        setActiveModal(null);
    };

    const handleFindStore = () => {
        alert("Searching for nearby stores... 📍");
        setActiveModal(null);
    };

    return (
        <nav className="w-full font-sans fixed left-0 right-0 z-50 bg-white shadow-sm">
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

                    {/* LOGO & MOBILE ICONS */}
                    <div className="flex justify-between items-center w-full md:w-auto">
                        <div className="flex-shrink-0 relative group">
                            <Link to="/" className="block transition-all duration-500 ease-in-out transform hover:scale-105 active:scale-95 outline-none">
                                <div className="absolute inset-0 bg-black/5 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
                                <img src={Logo} alt="Nike Logo" className="relative w-20 md:w-[100px] lg:w-[150px] h-auto object-contain" />
                            </Link>
                        </div>

                        {/* Mobile Menu & Cart (Mobile Only) */}
                        <div className="flex md:hidden items-center gap-4 text-2xl">
                            <Link to="wishlist" className="relative">
                                <FaHeart className="text-xl" />
                                {wishlist.length > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">{wishlist.length}</span>
                                )}
                            </Link>
                            <Link to="cart" className="relative">
                                <FaBagShopping className="text-xl" />
                                {cartItems.length > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">{cartItems.length}</span>
                                )}
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

                    {/* SEARCH & DESKTOP ICONS */}
                    <div className="flex items-center w-full md:w-auto gap-4">
                        <div className="relative flex-1 md:flex-none">
                            <div 
                                onClick={() => setIsSearchOpen(true)}
                                className="bg-[#f5f5f5] rounded-full py-2 pl-3 pr-4 flex items-center cursor-pointer hover:bg-[#e5e5e5] transition-all w-full md:w-44 lg:w-64"
                            >
                                <IoSearchSharp className="text-xl text-gray-500" />
                                <span className="ml-2 text-gray-400">Search</span>
                            </div>
                        </div>

                        {/* DESKTOP ICONS */}
                        <div className="hidden md:flex items-center gap-4 text-2xl">
                            <Link to="wishlist" className="relative p-1">
                                <FaHeart className="hover:text-red-500 transition-colors" />
                                {wishlist.length > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                                        {wishlist.length}
                                    </span>
                                )}
                            </Link>
                            <Link to="cart" className="relative p-1">
                                <FaBagShopping className="hover:text-black transition-colors" />
                                {cartItems.length > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                                        {cartItems.length}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* --- 3. FULL SCREEN SEARCH OVERLAY (YANGI QISh) --- */}
                {isSearchOpen && (
                    <div className="fixed inset-0 bg-white z-[100] animate-in fade-in slide-in-from-top duration-300 overflow-y-auto">
                        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-6">
                            {/* Search Header */}
                            <div className="flex items-center justify-between gap-6 md:gap-20">
                                <img src={Logo} alt="Logo" className="w-16 md:w-20" />
                                
                                <div className="flex-1 relative">
                                    <IoSearchSharp className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-black" />
                                    <input 
                                        autoFocus
                                        type="text" 
                                        placeholder="Search"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full bg-[#f5f5f5] py-3 pl-14 pr-4 rounded-full text-lg outline-none focus:bg-[#e5e5e5]"
                                    />
                                </div>

                                <button 
                                    onClick={() => { setIsSearchOpen(false); setSearchTerm(""); }}
                                    className="text-lg font-medium hover:text-gray-500 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>

                            {/* Search Content */}
                            <div className="mt-16 max-w-6xl mx-auto">
                                {!searchTerm ? (
                                    <div className="space-y-8">
                                        <h3 className="text-gray-400 font-medium tracking-wide">Popular Search Terms</h3>
                                        <ul className="text-2xl md:text-3xl font-bold space-y-5">
                                            {['Air Max', 'Jordan', 'Nike Dunk', 'Running', 'Training'].map(term => (
                                                <li key={term} className="cursor-pointer hover:opacity-40 transition-opacity">{term}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="pb-20">
                                        <h3 className="text-gray-400 mb-8">Results for "{searchTerm}" ({filteredProducts.length})</h3>
                                        {filteredProducts.length > 0 ? (
                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
                                                {filteredProducts.map(product => (
                                                    <div 
                                                        key={product.id} 
                                                        onClick={() => { navigate('/product-detail'); setIsSearchOpen(false); }}
                                                        className="group cursor-pointer"
                                                    >
                                                        <div className="bg-[#f6f6f6] rounded-sm overflow-hidden mb-4 aspect-square">
                                                            <img 
                                                                src={product.img} 
                                                                alt={product.name} 
                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                            />
                                                        </div>
                                                        <h4 className="font-bold text-gray-900 leading-tight">{product.name}</h4>
                                                        <p className="text-gray-500 text-sm mt-1">{product.category}</p>
                                                        <p className="font-bold mt-2">{product.price}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="text-center py-32">
                                                <p className="text-2xl text-gray-300 font-medium">No results found for "{searchTerm}"</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* --- MODALS (O'zgarmagan qismlar) --- */}
                {activeModal === 'signin' && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
                        <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl relative animate-in zoom-in duration-200">
                            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-2xl"><IoCloseOutline /></button>
                            <form onSubmit={(e) => handleAuthSubmit(e, 'signin')} className="flex flex-col items-center">
                                <FaUserCircle className="text-5xl mb-4 text-gray-700" />
                                <h2 className="text-xl font-black text-center mb-6 uppercase tracking-tighter">Account Sign In</h2>
                                <input required type="email" placeholder="Email address" className="w-full border p-3 rounded-md mb-3 outline-black" />
                                <input required type="password" placeholder="Password" className="w-full border p-3 rounded-md mb-6 outline-black" />
                                <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-bold hover:bg-gray-800 transition-colors">LOGIN</button>
                            </form>
                        </div>
                    </div>
                )}

                {activeModal === 'join' && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
                        <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl relative animate-in zoom-in duration-200 text-center">
                            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-2xl"><IoCloseOutline /></button>
                            <FaUserPlus className="text-5xl mx-auto mb-4 text-gray-700" />
                            <h2 className="text-xl font-black mb-4 uppercase tracking-tighter">Become a Nike Member</h2>
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
                    <div className="fixed inset-0 bg-black/60 z-[110] flex items-center justify-center p-4">
                        <div className="bg-white w-full max-w-sm rounded-2xl p-8 text-center animate-in fade-in duration-300">
                            <IoLocationOutline className="text-6xl mx-auto mb-4 text-red-500 animate-bounce" />
                            <h2 className="text-2xl font-bold mb-2">Find a Nike Store</h2>
                            <button onClick={handleFindStore} className="w-full bg-black text-white py-3 rounded-full font-bold mt-4">Allow Access</button>
                            <button onClick={() => setActiveModal(null)} className="text-gray-500 py-2 mt-2">Maybe Later</button>
                        </div>
                    </div>
                )}

                {activeModal === 'help' && (
                    <div className="fixed inset-0 bg-black/60 z-[110] flex items-center justify-center p-4">
                        <div className="bg-white w-full max-w-sm rounded-2xl p-8 relative">
                            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-2xl"><IoCloseOutline /></button>
                            <h3 className="text-xl font-bold mb-4 text-center">Help</h3>
                            <ul className="space-y-2">
                                {['Order Status', 'Shipping & Delivery', 'Returns'].map(item => (
                                    <li key={item} onClick={() => setActiveModal(null)} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer border">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {/* MOBILE SIDEBAR MENU (O'zgarmagan) */}
                <div className={`fixed top-0 right-0 h-full w-full bg-white z-[120] transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden p-8`}>
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