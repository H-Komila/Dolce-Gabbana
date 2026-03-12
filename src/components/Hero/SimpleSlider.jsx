import React, { useState } from "react";
import Slider from "react-slick";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import img1 from "./imgg/img1.png";
import img2 from "./imgg/img2.webp";
import img3 from "./imgg/img3.webp";
import img4 from "./imgg/img4.png";

function SimpleSlider() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  const slides = [
    {
      id: 1,
      img: img1,
      title: "Denim Collection",
      text: "An enigmatic and contemporary collection that exalts nautical style."
    },
    {
      id: 2,
      img: img2,
      title: "New Season Collection",
      text: "Step into the new season with timeless elegance."
    },
    {
      id: 3,
      img: img3,
      title: "Exclusive Offers",
      text: "Enjoy special seasonal discounts on selected pieces."
    },
    {
      id: 4,
      img: img4,
      title: "Signature Luxury",
      text: "Experience refined craftsmanship and iconic Italian style."
    }
  ];

  const toggleFavorite = (slide) => {
    if (favorites.some(fav => fav.id === slide.id)) {
      // Agar bor bo‘lsa olib tashlash
      setFavorites(favorites.filter(fav => fav.id !== slide.id));
    } else {
      setFavorites([...favorites, slide]);
    }
  };

  const addToCart = (slide) => {
    setCart([...cart, slide]);
    console.log("Cart:", slide);
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative h-[600px]">

              <img
                src={slide.img}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30"></div>

              {/* ICONS */}
              <div className="absolute top-6 right-6 flex gap-4 text-2xl">
                <FaHeart
                  className={`cursor-pointer transition ${
                    favorites.some(fav => fav.id === slide.id) ? "text-red-500" : "text-white hover:text-red-500"
                  }`}
                  onClick={() => toggleFavorite(slide)}
                />

                <FaShoppingCart
                  className="cursor-pointer text-white hover:text-yellow-400 transition"
                  onClick={() => addToCart(slide)}
                />
              </div>

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-[600px] pl-10 text-white">

                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>

                  <p className="text-lg mb-6 opacity-90">
                    {slide.text}
                  </p>

                  <div className="flex gap-4">
                    <button className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition">
                      View Collection
                    </button>

                    <button
                      onClick={() => addToCart(slide)}
                      className="px-6 py-3 border border-white hover:bg-white hover:text-black transition"
                    >
                      Buy Now
                    </button>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;


// ======================================================//