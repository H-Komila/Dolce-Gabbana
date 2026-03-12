import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../../Store/useStore'; 
import { AiOutlineDelete, AiOutlineArrowLeft, AiOutlineInfoCircle } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import CheckoutModal from './CheckoutModal';

const Cart = () => {
    const { cartItems, removeFromCart } = useStore();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const totalPrice = useMemo(() => {
        return cartItems.reduce((acc, item) => {
            const priceStr = typeof item.price === 'string' ? item.price.replace(/[^\d.]/g, '') : item.price;
            const price = parseFloat(priceStr) || 0;
            return acc + price;
        }, 0);
    }, [cartItems]);

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <HiOutlineShoppingBag size={45} className="text-gray-300" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-3 text-center">
                    Your cart is empty
                </h2>
                <p className="text-gray-500 mb-8 text-center max-w-sm leading-relaxed">
                    You haven't selected anything yet. We recommend checking out our new collection!
                </p>
                <Link 
                    to="/catalog" 
                    className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all active:scale-95 shadow-lg"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-[1240px] mx-auto px-6 py-12 font-sans antialiased">

            <div className="flex items-end gap-3 mb-10 border-b pb-6">
                <h1 className="text-3xl font-extrabold tracking-tight italic uppercase">
                    Cart
                </h1>
                <span className="text-gray-400 font-medium pb-1">
                    ({cartItems.length} items)
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
                
                <div className="lg:col-span-2">
                    <div className="space-y-10">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex flex-col sm:flex-row gap-6 pb-10 border-b border-gray-50 group">

                                <div 
                                    className="w-full sm:w-48 h-48 bg-[#f7f7f7] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0"
                                    onClick={() => navigate('/product-detail')}
                                >
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                                    />
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:underline cursor-pointer">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-500 mt-1">
                                                {item.category || "Sportswear"}
                                            </p>
                                        </div>
                                        <p className="text-xl font-black">{item.price}</p>
                                    </div>
                                    
                                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
                                        <p>Size: <span className="text-black font-semibold uppercase">L (EU 44)</span></p>
                                        <p>Quantity: <span className="text-black font-semibold">1</span></p>
                                    </div>

                                    <div className="mt-auto pt-6 flex gap-6">
                                        <button 
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-600 transition-colors flex items-center gap-2 group/btn"
                                        >
                                            <AiOutlineDelete size={22} className="group-hover/btn:rotate-12 transition-transform" />
                                            <span className="text-sm font-bold uppercase tracking-tighter">
                                                Remove
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={() => navigate('/catalog')}
                        className="flex items-center gap-2 text-zinc-900 font-bold hover:translate-x-[-5px] transition-transform py-8 text-sm uppercase tracking-widest"
                    >
                        <AiOutlineArrowLeft /> Back to catalog
                    </button>
                </div>

                <div className="relative">
                    <div className="sticky top-28 bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50">
                        <h2 className="text-2xl font-black mb-8 italic tracking-tighter uppercase">
                            Summary
                        </h2>
                        
                        <div className="space-y-5 mb-8">
                            <div className="flex justify-between text-gray-600 font-medium">
                                <span>Subtotal:</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between text-gray-600 font-medium">
                                <span className="flex items-center gap-1.5">
                                    Shipping <AiOutlineInfoCircle size={16} className="text-gray-400 cursor-help" />
                                </span>
                                <span className="text-green-600 font-bold uppercase text-sm">
                                    Free
                                </span>
                            </div>

                            <div className="flex justify-between text-gray-600 font-medium border-b pb-5">
                                <span>Estimated taxes:</span>
                                <span>$0.00</span>
                            </div>

                            <div className="flex justify-between font-black text-2xl pt-2 tracking-tighter">
                                <span>TOTAL:</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                        </div>

                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="w-full bg-black text-white py-5 rounded-full font-black text-lg hover:bg-zinc-800 transition-all active:scale-[0.97] shadow-lg"
                        >
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                </div>
            </div>

            <CheckoutModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                total={totalPrice.toFixed(2)} 
            />
        </div>
    );
};

export default Cart;