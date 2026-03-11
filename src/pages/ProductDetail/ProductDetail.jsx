import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

import shoes1 from "./images/Shoes1.png";
import shoes2 from "./images/Shoes2.png";
import shoes3 from "./images/Shoes3.png";
import shoes4 from "./images/Shoes4.png";
import shoes5 from "./images/Shoes5.png";
import shoes6 from "./images/Shoes6.png";
import shoes7 from "./images/Shoes7.png";

import rasm1 from "./images/Balotviy nike 1.png";
import rasm2 from "./images/Kulrang nike 2.png";
import rasm3 from "./images/Oq bolka 3.png";
import rasm4 from "./images/Yashil bolka 4.png";

const ProductDetail = () => {
    const [mainImage, setMainImage] = useState(shoes1);
    const [selectedSize, setSelectedSize] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const images = [shoes1, shoes2, shoes3, shoes4, shoes5, shoes6, shoes7];

    const sizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5];

    const reviews = [
        {
            id: 1,
            user: "Nathan Dever",
            rating: 4,
            comment: "So cute and comfortable. I love the low air 1's.",
        },
        {
            id: 2,
            user: "Nathan Dever",
            rating: 4,
            comment: "Lorem ipsum dolor sit amet consectetur...",
        },
        {
            id: 3,
            user: "Nathan Dever",
            rating: 2,
            comment: "Lorem ipsum dolor sit amet consectetur...",
        },
    ];

    const data = [
        {
            img: rasm1,
            title: "Nike Tech Fleece Windrunner",
            label: "Just In",
            price: "$145",
        },
        {
            img: rasm2,
            title: "Nike Tech Fleece Windrunner",
            label: "Sustainable Materials",
            price: "$145",
            promo: "Extra 20% Off SPRING",
        },
        { img: rasm3, title: "Nike Dri-FIT Tee", label: "Just In", price: "$145" },
        {
            img: rasm4,
            title: "Nike Sportswear Tee",
            label: "Just In",
            price: "$145",
        },
    ];

    return (
        <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* LEFT SIDE IMAGES */}
                <section className="flex flex-col-reverse sm:flex-row gap-4">
                    {/* thumbnails */}
                    <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible pb-2">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="shoe"
                                onClick={() => setMainImage(img)}
                                className={`w-14 h-14 sm:w-16 sm:h-16 object-cover cursor-pointer border-2 rounded-xl transition-all duration-300 hover:scale-110
                ${mainImage === img
                                        ? "border-black shadow-lg"
                                        : "border-transparent hover:border-gray-400"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* main image */}
                    <div className="bg-gray-50 rounded-3xl p-4 sm:p-6 flex-1 flex items-center justify-center overflow-hidden">
                        <img
                            src={mainImage}
                            alt="Selected shoe"
                            className="w-full max-w-md object-contain transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                </section>

                {/* RIGHT SIDE INFO */}
                <section>
                    <p className="text-sm text-gray-500">
                        140 purchased in the last 7 days
                    </p>

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-2">
                        Air Jordan 1 Low
                    </h1>

                    <p className="text-lg sm:text-xl font-bold mt-4">$145</p>

                    {/* SIZE */}
                    <div className="mt-8">
                        <div className="flex justify-between mb-3">
                            <h3 className="font-bold">Select Size</h3>
                            <span className="text-gray-500 underline cursor-pointer hover:text-black">
                                Size Guide
                            </span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`py-3 border-2 rounded-lg font-medium transition-all duration-200 transform
                  ${selectedSize === size
                                            ? "border-black bg-black text-white scale-105"
                                            : "border-gray-200 hover:border-black hover:scale-105 active:scale-95"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-4 mt-8">
                        <button
                            className="flex-1 bg-black text-white py-3 sm:py-4 rounded-full font-bold 
            hover:bg-gray-800 transition-all duration-300 active:scale-95 shadow-md hover:shadow-xl"
                        >
                            Add to Bag
                        </button>

                        <button
                            className="border-2 border-gray-200 px-5 sm:px-6 rounded-full 
            hover:border-black transition-all duration-300 hover:bg-gray-50 hover:scale-110"
                        >
                            <FaRegHeart size={22} />
                        </button>
                    </div>

                    {/* SHIPPING */}
                    <div className="mt-10 space-y-6 text-gray-600">
                        <div className="border-t pt-6">
                            <h3 className="font-bold text-black mb-1">Shipping</h3>
                            <p>You'll see our shipping options at checkout</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-black mb-1">Free Pickup</h3>
                            <a
                                href="#"
                                className="underline font-medium text-black hover:opacity-70"
                            >
                                Find a Store
                            </a>
                        </div>

                        <p className="leading-relaxed">
                            Always in, always fresh. The Air Jordan 1 Low sets you up with a
                            piece of Jordan history and heritage that's comfortable all day.
                        </p>
                    </div>

                    {/* REVIEWS */}
                    <div className="mt-8 border-t pt-6">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex justify-between w-full font-bold text-lg hover:opacity-70"
                        >
                            Reviews (691)
                            <span
                                className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                            >
                                ▼
                            </span>
                        </button>

                        {isOpen && (
                            <div className="mt-4 space-y-4 animate-[fadeIn_.4s_ease]">
                                {reviews.map((review) => (
                                    <div
                                        key={review.id}
                                        className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition"
                                    >
                                        <p className="font-bold text-sm">{review.user}</p>

                                        <div className="text-yellow-400 my-1">
                                            {"★".repeat(review.rating)}
                                        </div>

                                        <p className="text-gray-600 text-sm">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </div>

            {/* YOU MIGHT ALSO LIKE */}

            <section className="mt-20">
                <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer transition duration-300 hover:-translate-y-2"
                        >
                            <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <p className="text-orange-700 text-sm font-semibold">
                                {item.label}
                            </p>

                            <h3 className="font-bold text-gray-900">{item.title}</h3>

                            {item.promo && (
                                <p className="text-green-700 text-sm">{item.promo}</p>
                            )}

                            <p className="font-bold mt-1">{item.price}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ProductDetail;
