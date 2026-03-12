import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../Store/useStore";
import { AiFillHeart, AiOutlineShoppingCart, AiOutlineArrowLeft } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useI18n } from "../i18n/I18nProvider";

const Wishlist = () => {
    const { wishlist, toggleWishlist, addToCart } = useStore();
    const navigate = useNavigate();
    const { t } = useI18n();

    if (wishlist.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-5 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <AiFillHeart size={40} className="text-gray-300" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    {t("wishlist.emptyTitle")}
                </h2>
                <p className="text-gray-500 max-w-md mb-8">
                    {t("wishlist.emptyDesc")}
                </p>
                <Link 
                    to="/catalog" 
                    className="bg-black text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition-all active:scale-95"
                >
                    {t("wishlist.startShopping")}
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-[1440px] mx-auto px-6 py-16 font-sans">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
                <div>
                    <button 
                        onClick={() => navigate(-1)} 
                        className="flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-2"
                    >
                        <AiOutlineArrowLeft className="mr-2" /> {t("wishlist.back")}
                    </button>

                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                        {t("wishlist.title")} <span className="text-gray-400 font-light">({wishlist.length})</span>
                    </h1>
                </div>

                <p className="text-sm text-gray-500 italic">
                    {t("wishlist.note")}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {wishlist.map((item) => (
                    <div key={item.id} className="group relative flex flex-col h-full bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500">
                        
                        <div className="relative aspect-[4/5] bg-[#f9f9f9] overflow-hidden">
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110" 
                            />
                            
                            <button 
                                onClick={() => toggleWishlist(item)} 
                                className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-sm hover:bg-red-50 hover:text-red-600 transition-all duration-300 z-10"
                                title={t("wishlist.remove")}
                            >
                                <IoMdClose size={22} />
                            </button>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="mb-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600 mb-1 block">
                                    {item.category || "Premium Collection"}
                                </span>

                                <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-700 transition-colors">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="mt-auto">
                                <p className="text-xl font-black text-gray-900 mb-5">{item.price}</p>
                                
                                <button 
                                    onClick={() => addToCart(item)}
                                    className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3.5 rounded-lg font-bold hover:bg-black transition-all active:scale-[0.98] shadow-lg shadow-gray-200"
                                >
                                    <AiOutlineShoppingCart size={20} />
                                    <span>{t("wishlist.addToCart")}</span>
                                </button>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full" />
                    </div>
                ))}
            </div>

            <div className="mt-32 p-12 bg-gray-50 rounded-3xl text-center">
                <h3 className="text-xl font-bold mb-2">
                    {t("wishlist.youMightAlsoLike")}
                </h3>

                <p className="text-gray-500 mb-6">
                    {t("wishlist.basedOnInterests")}
                </p>

                <button 
                    onClick={() => navigate('/catalog')}
                    className="text-sm font-bold underline underline-offset-4 hover:text-gray-600"
                >
                    {t("wishlist.goToCatalog")}
                </button>
            </div>
        </div>
    );
};

export default Wishlist;
