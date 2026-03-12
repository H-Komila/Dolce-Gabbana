import React from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import useStore from '../../../Store/useStore';
import { useI18n } from '../../../i18n/I18nProvider';

// Rasmlar
import krasofka from './images/krasofka.png';
import rsm from './images/rsm.png';
import rss from './images/rss.png';
import rr from './images/rr.png';
import ss from './images/sss.png';
import p from "./images/p.svg";
import pp from "./images/pp.png";
import p1 from './images/p1.svg';
import ps from "./images/ps.png";

const Trending = () => {
    const navigate = useNavigate();
    const { toggleWishlist, wishlist, addToCart } = useStore();
    const { t } = useI18n();

    const checkIsLiked = (id) => wishlist.some(item => item.id === id);

    // Ma'lumotlar strukturasi
    const sections = {
        trending: [
            { id: 10, img: krasofka, titleKey: "trending.newFromJordan", category: "Shoes", price: "$150", path: '/product-detail' },
            { id: 11, img: rsm, titleKey: "trending.newFromJordan", category: "Shoes", price: "$120", path: '/product-detail' },
            { id: 12, img: rss, titleKey: "trending.newFromJordan", category: "Shoes", price: "$130", path: '/product-detail' },
        ],
        jackets: [
            { id: 13, img: rr, titleKey: "trending.reversibleDenimJacket", price: "$200", path: '/catalog' },
            { id: 14, img: ss, titleKey: "trending.cottonJacquardJacket", price: "$180", path: '/catalog' },
        ],
        popular: [
            { id: 15, img: p, titleKey: "trending.justIn", text: "Nike Tech Fleece Windrunner", price: "$145", path: '/catalog' },
            { id: 16, img: pp, titleKey: "trending.justIn", text: "Nike Sportswear", price: "$145", path: '/catalog' },
            { id: 17, img: p1, titleKey: "trending.justIn", text: "Nike Air Max", price: "$145", path: '/catalog' },
            { id: 18, img: ps, titleKey: "trending.justIn", text: "Nike Blazer", price: "$145", path: '/catalog' },
        ]
    };

    const handleAction = (e, action) => {
        e.stopPropagation();
        action();
    };

        return (
            <main className="w-full bg-white pb-32 font-sans">
            {/* 1. TRENDING SECTION (Krasofkalar - Endi Cart tugmasi bor) */}
            <section className="py-10 md:py-12 max-w-[1440px] mx-auto px-4 sm:px-6">
                <h1 className="text-2xl font-bold mb-8 tracking-tight text-gray-900">{t("trending.title")}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {sections.trending.map(item => (
                        <div key={item.id} className="group cursor-pointer" onClick={() => navigate(item.path)}>
                            <div className="relative overflow-hidden bg-[#f5f5f5] rounded-sm">
                                <img 
                                    src={item.img} 
                                    alt={t(item.titleKey)} 
                                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" 
                                />
                                
                                {/* Hoverda chiqadigan tugmalar */}
                                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5">
                                    <button 
                                        onClick={(e) => handleAction(e, () => toggleWishlist(item))}
                                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all hover:scale-110"
                                    >
                                        {checkIsLiked(item.id) ? <AiFillHeart className="text-red-500" size={24} /> : <AiOutlineHeart size={24} />}
                                    </button>
                                    <button 
                                        onClick={(e) => handleAction(e, () => addToCart(item))}
                                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-all hover:scale-110"
                                    >
                                        <AiOutlineShoppingCart size={24} />
                                    </button>
                                </div>
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:underline">{t(item.titleKey)}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. LIFESTYLE/JACKETS SECTION (Catalogga o'tadi) */}
            <section className="py-10 md:py-12 max-w-[1440px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sections.jackets.map(item => (
                        <div key={item.id} className="relative group cursor-pointer overflow-hidden rounded-sm" onClick={() => navigate(item.path)}>
                            <img src={item.img} alt={t(item.titleKey)} className="w-full h-[420px] sm:h-[520px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-[1.03]" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                            <div className="absolute bottom-8 left-6 sm:bottom-10 sm:left-10 text-white">
                                <h2 className="text-2xl font-bold mb-4">{t(item.titleKey)}</h2>
                                    <button className="bg-white text-black px-8 py-2.5 rounded-full font-bold hover:bg-gray-200 transition-all active:scale-95 shadow-md">
                                    {t("common.shopNow")}
                                    </button>
                            </div>
                            <button 
                                onClick={(e) => handleAction(e, () => toggleWishlist(item))}
                                className="absolute top-6 right-6 p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                            >
                                {checkIsLiked(item.id) ? <AiFillHeart className="text-red-500" size={26} /> : <AiOutlineHeart size={26} className="text-black" />}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. POPULAR SECTION (Catalogga o'tadi) */}
            <section className="py-10 md:py-12 max-w-[1440px] mx-auto px-4 sm:px-6">
                <h3 className="text-2xl font-bold mb-8 text-gray-900">{t("trending.popularNow")}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sections.popular.map(item => (
                        <div key={item.id} className="group cursor-pointer" onClick={() => navigate(item.path)}>
                            <div className="relative aspect-[4/5] bg-[#f6f6f6] overflow-hidden rounded-sm">
                                <img src={item.img} alt={item.text} className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
                                
                                <div className="absolute inset-x-0 bottom-0 p-4 flex justify-center gap-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                    <button 
                                        onClick={(e) => handleAction(e, () => toggleWishlist(item))}
                                        className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-black hover:text-white transition-all"
                                    >
                                        {checkIsLiked(item.id) ? <AiFillHeart className="text-red-500" size={20} /> : <AiOutlineHeart size={20} />}
                                    </button>
                                    <button 
                                        onClick={(e) => handleAction(e, () => addToCart(item))}
                                        className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-black hover:text-white transition-all"
                                    >
                                        <AiOutlineShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4 space-y-1">
                                <h4 className="text-[#9e3500] font-bold text-sm uppercase">{t(item.titleKey)}</h4>
                                <p className="text-lg font-medium text-black leading-tight group-hover:text-gray-600 transition-colors">{item.text}</p>
                                <p className="text-lg font-bold text-gray-900">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Trending;
