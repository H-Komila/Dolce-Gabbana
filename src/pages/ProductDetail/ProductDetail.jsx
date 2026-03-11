import React, { useState } from "react";
import shoes1 from "./images/Shoes1.png";
import shoes2 from "./images/Shoes2.png";
import shoes3 from "./images/Shoes3.png";
import shoes4 from "./images/Shoes4.png";
import shoes5 from "./images/Shoes5.png";
import shoes6 from "./images/Shoes6.png";
import shoes7 from "./images/Shoes7.png";
import { FaRegHeart } from "react-icons/fa";

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

  return (
    <main className="max-w-6xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-12 ">
        {/* Chap qism: Rasmlar */}
        <section className="flex gap-4 relative">
  
  {/* LEFT THUMBNAILS */}
  <div className="flex flex-col gap-4 sticky top-6 h-fit pt-10">
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt="shoe"
        onClick={() => setMainImage(img)}
        className={`w-16 h-16 object-cover cursor-pointer border rounded-lg 
        ${mainImage === img ? "border-black" : "border-gray-200"}`}
      />
    ))}
  </div>

  {/* MAIN IMAGE */}
  <div className="bg-gray-100 rounded-2xl p-4 sticky top-6 h-fit">
    <img
      src={mainImage}
      alt="Selected shoe"
      className="w-[450px] object-cover"
    />
  </div>

</section>


        {/* O'ng qism: Ma'lumotlar */}
        <section className="flex-1">
          <p className="text-sm text-gray-500">
            140 purchased in the last 7 days
          </p>
          <h1 className="text-3xl font-bold mt-2">Air Jordan 1 Low</h1>
          <p className="text-xl font-semibold mt-2">$145</p>

          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold">Select Size</h3>
              <span className="text-gray-500 underline cursor-pointer">
                Size Guide
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 border rounded-md transition ${selectedSize === size ? "border-black bg-black text-white" : "border-gray-300 hover:border-black"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-8 ">
            <button className="flex-1 bg-black text-white py-4 rounded-full font-bold hover:bg-gray-700 active:bg-gray-200 active:text-black active:border ">
              Add to Bag
            </button>
            <button className="border border-gray-300 px-6 rounded-full hover:bg-gray-100 animate-bounce">
              <FaRegHeart size={20}  />
            </button>
          </div>
          <div className="space-y-4 mt-11">
            <div>
              <h3 className="font-bold text-lg mb-1">Shipping</h3>
              <p className="text-gray-600">
                You'll see our shipping options at checkout
              </p>
            </div>

            <div >
              <h3 className="font-bold text-lg mb-1">Free Pickup</h3>
              <a href="#" className="underline font-medium hover:text-gray-700">
                Find a Store
              </a>
            </div>


            {/* Tavsif (Description) qismi */}
            <div className="text-gray-700 leading-relaxed mt-4">
              <p>
                Always in, always fresh. The Air Jordan 1 Low sets you up with a
                piece of Jordan history and heritage that's comfortable all day.
                Choose your colors, then step out in the iconic profile that's
                built with a high-end mix of materials and encapsulated Air in
                the heel.
              </p>
            </div>
          </div>

          <hr className="my-6 border-gray-200" />
          <div className="mt-8 border-t pt-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex justify-between w-full font-bold text-lg mb-4"
            >
              Reviews (691)
              <span>{isOpen ? "▲" : "▼"}</span>
            </button>
            {isOpen && (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <p className="font-semibold text-sm">{review.user}</p>
                    <div className="text-yellow-500 my-1">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </div>
                    <p className="text-gray-600 text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetail;
