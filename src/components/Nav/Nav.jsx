import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './images/logo.png';
import { IoSearchSharp, IoMenuOutline, IoCloseOutline, IoLocationOutline } from "react-icons/io5";
import { FaHeart, FaUserCircle, FaUserPlus } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import useStore from '../../Store/useStore';
import { useI18n } from '../../i18n/I18nProvider';
import { productsData } from '../../data/products';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false); // Full-screen search holati

    const { cartItems, wishlist } = useStore();
    const { lang, setLang, t } = useI18n();

    const navigate = useNavigate();

    const filteredProducts = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();
        if (!term) return [];
        return productsData.filter((item) => item.title.toLowerCase().includes(term));
    }, [searchTerm]);

    const popularTerms = t("nav.search.popularTerms");
    const popularTermsList = Array.isArray(popularTerms) ? popularTerms : [];

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
        alert(type === 'signin' ? t("toast.signedIn") : t("toast.joined"));
        setActiveModal(null);
    };

    const handleFindStore = () => {
        alert(t("toast.searchingStores"));
        setActiveModal(null);
    };

    return (
        <nav className="w-full font-sans fixed left-0 right-0 z-50 bg-white shadow-sm">
            <div className='max-w-[1440px] mx-auto'>
                {/* 1. TOP BAR */}
                <div className="bg-[#f5f5f5] py-1.5 px-6 md:px-12 flex justify-end items-center text-[12px] font-medium border-b border-gray-200 hidden md:flex">
                    <ul className="flex gap-4">
                        <li onClick={() => setActiveModal('store')} className="hover:opacity-70 cursor-pointer">{t("nav.findStore")}</li>
                        <div className="w-[1px] h-3 bg-black/20 self-center"></div>
                        <li onClick={() => setActiveModal('help')} className="hover:opacity-70 cursor-pointer">{t("nav.help")}</li>
                        <div className="w-[1px] h-3 bg-black/20 self-center"></div>
                        <li onClick={() => setActiveModal('join')} className="hover:opacity-70 cursor-pointer">{t("nav.joinUs")}</li>
                        <div className="w-[1px] h-3 bg-black/20 self-center"></div>
                        <li onClick={() => setActiveModal('signin')} className="hover:opacity-70 cursor-pointer font-bold tracking-tight text-black">{t("nav.signIn")}</li>
                        <div className="w-[1px] h-3 bg-black/20 self-center"></div>
                        <li className="flex items-center">
                            <select
                                value={lang}
                                onChange={(e) => setLang(e.target.value)}
                                aria-label="Language"
                                className="bg-transparent outline-none cursor-pointer hover:opacity-70"
                            >
                                <option value="en">{t("lang.en")}</option>
                                <option value="ru">{t("lang.ru")}</option>
                                <option value="uz">{t("lang.uz")}</option>
                            </select>
                        </li>
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
                        {[
                            { key: "newFeatured", label: t("nav.menu.newFeatured") },
                            { key: "men", label: t("nav.menu.men") },
                            { key: "women", label: t("nav.menu.women") },
                            { key: "sale", label: t("nav.menu.sale") },
                        ].map((item) => (
                            <li key={item.key} className="relative group cursor-pointer hover:text-black">
                                <Link to="/catalog">{item.label}</Link>
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
                                <span className="ml-2 text-gray-400">{t("nav.search.label")}</span>
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
                                        placeholder={t("nav.search.placeholder")}
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full bg-[#f5f5f5] py-3 pl-14 pr-4 rounded-full text-lg outline-none focus:bg-[#e5e5e5]"
                                    />
                                </div>

                                <button
                                    onClick={() => { setIsSearchOpen(false); setSearchTerm(""); }}
                                    className="text-lg font-medium hover:text-gray-500 transition-colors"
                                >
                                    {t("nav.search.cancel")}
                                </button>
                            </div>

                            {/* Search Content */}
                            <div className="mt-16 max-w-6xl mx-auto">
                                {!searchTerm.trim() ? (
                                    <div className="space-y-8">
                                        <h3 className="text-gray-400 font-medium tracking-wide">{t("nav.search.popularTitle")}</h3>
                                        <ul className="text-2xl md:text-3xl font-bold space-y-5">
                                            {popularTermsList.map((term) => (
                                                <li
                                                    key={term}
                                                    onClick={() => setSearchTerm(term)}
                                                    className="cursor-pointer hover:opacity-40 transition-opacity"
                                                >
                                                    {term}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="pb-20">
                                        <h3 className="text-gray-400 mb-8">
                                            {t("nav.search.resultsFor", { term: searchTerm.trim(), count: filteredProducts.length })}
                                        </h3>
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
                                                                alt={product.title}
                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                            />
                                                        </div>
                                                        <h4 className="font-bold text-gray-900 leading-tight">{product.title}</h4>
                                                        <p className="text-gray-500 text-sm mt-1">{product.category}</p>
                                                        <p className="font-bold mt-2">{product.price}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="text-center py-32">
                                                <p className="text-2xl text-gray-300 font-medium">
                                                    {t("nav.search.noResults", { term: searchTerm.trim() })}
                                                </p>
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
                                <h2 className="text-xl font-black text-center mb-6 uppercase tracking-tighter">{t("modal.signIn.title")}</h2>
                                <input required type="email" placeholder={t("modal.signIn.email")} className="w-full border p-3 rounded-md mb-3 outline-black" />
                                <input required type="password" placeholder={t("modal.signIn.password")} className="w-full border p-3 rounded-md mb-6 outline-black" />
                                <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-bold hover:bg-gray-800 transition-colors">{t("modal.signIn.login")}</button>
                            </form>
                        </div>
                    </div>
                )}

                {activeModal === 'join' && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
                        <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl relative animate-in zoom-in duration-200 text-center">
                            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-2xl"><IoCloseOutline /></button>
                            <FaUserPlus className="text-5xl mx-auto mb-4 text-gray-700" />
                            <h2 className="text-xl font-black mb-4 uppercase tracking-tighter">{t("modal.join.title")}</h2>
                            <p className="text-gray-500 text-sm mb-6">{t("modal.join.desc")}</p>
                            <form onSubmit={(e) => handleAuthSubmit(e, 'join')} className="space-y-3">
                                <input required type="text" placeholder={t("modal.join.firstName")} className="w-full border p-3 rounded-md outline-black" />
                                <input required type="email" placeholder={t("modal.join.email")} className="w-full border p-3 rounded-md outline-black" />
                                <input required type="password" placeholder={t("modal.join.password")} className="w-full border p-3 rounded-md outline-black" />
                                <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-bold mt-4 hover:bg-gray-800">{t("modal.join.join")}</button>
                            </form>
                        </div>
                    </div>
                )}

                {activeModal === 'store' && (
                    <div className="fixed inset-0 bg-black/60 z-[110] flex items-center justify-center p-4">
                        <div className="bg-white w-full max-w-sm rounded-2xl p-8 text-center animate-in fade-in duration-300">
                            <IoLocationOutline className="text-6xl mx-auto mb-4 text-red-500 animate-bounce" />
                            <h2 className="text-2xl font-bold mb-2">{t("modal.store.title")}</h2>
                            <button onClick={handleFindStore} className="w-full bg-black text-white py-3 rounded-full font-bold mt-4">{t("modal.store.allow")}</button>
                            <button onClick={() => setActiveModal(null)} className="text-gray-500 py-2 mt-2">{t("modal.store.later")}</button>
                        </div>
                    </div>
                )}

                {activeModal === 'help' && (
                    <div className="fixed inset-0 bg-black/60 z-[110] flex items-center justify-center p-4">
                        <div className="bg-white w-full max-w-sm rounded-2xl p-8 relative">
                            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-2xl"><IoCloseOutline /></button>
                            <h3 className="text-xl font-bold mb-4 text-center">{t("modal.help.title")}</h3>
                            <ul className="space-y-2">
                                {(Array.isArray(t("modal.help.items")) ? t("modal.help.items") : []).map(item => (
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
                        <li onClick={() => { navigate('/catalog'); setIsOpen(false); }}>{t("nav.menu.newFeatured")}</li>
                        <li onClick={() => { navigate('/catalog'); setIsOpen(false); }}>{t("nav.menu.men")}</li>
                        <li onClick={() => { navigate('/catalog'); setIsOpen(false); }}>{t("nav.menu.women")}</li>
                        <li onClick={() => { navigate('/catalog'); setIsOpen(false); }} className="text-red-600">{t("nav.menu.sale")}</li>
                    </ul>
                    <div className="mt-12 pt-12 border-t space-y-4">
                        <button onClick={() => { setActiveModal('signin'); setIsOpen(false) }} className="block text-lg font-medium">{t("nav.signIn")}</button>
                        <button onClick={() => { setActiveModal('join'); setIsOpen(false) }} className="block text-lg font-medium">{t("nav.joinUs")}</button>
                        <button onClick={() => { setActiveModal('store'); setIsOpen(false) }} className="block text-lg font-medium">{t("nav.findStore")}</button>
                        <div className="pt-4">
                            <select
                                value={lang}
                                onChange={(e) => setLang(e.target.value)}
                                aria-label="Language"
                                className="w-full border rounded-md px-3 py-2 text-base"
                            >
                                <option value="en">{t("lang.en")}</option>
                                <option value="ru">{t("lang.ru")}</option>
                                <option value="uz">{t("lang.uz")}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;

