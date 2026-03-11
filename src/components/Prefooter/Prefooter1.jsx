import React from "react";
import { useNavigate } from "react-router-dom";
import imgprefot1 from '../Prefooter/imgprefot1.png'
import img2prefot1 from '../Prefooter/img2prefot1.png'

const Prefooter1 = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className=" py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">


          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Dresses you’ll turn <br /> to again and again.
            </h1>

            <p className="text-gray-500 max-w-md mb-8">
              Here is your chance to upgrade your wardrobe with a variation
              of styles and fits that are both.
            </p>

            <div className="flex items-center gap-6">
              <button
                onClick={() => navigate("/catalog")}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                View Collection
              </button>

              <button className="text-gray-700 hover:text-black transition">
                Add to Bag
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">

            <img
              src={img2prefot1}
              alt="dress"
              className="w-[760px] h-[730px] shadow-lg relative right- top-"
            />

            <img
              src={imgprefot1}
              alt="dress"
              className="w-[350px] h-[500px] shadow-lg absolute right-100 top-35"
            />

          </div>
        </div>
      </section>



      <section className=" py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">


          <div>
            <h3 className="text-lg font-semibold mb-6">Featured</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-black cursor-pointer">Sneakers Model 1</li>
              <li className="hover:text-black cursor-pointer">Cotton Mix Coat</li>
              <li className="hover:text-black cursor-pointer">Black Crew Master</li>
              <li className="hover:text-black cursor-pointer">Reversible Jacket</li>
              <li className="hover:text-black cursor-pointer">Pegasus</li>
              <li className="hover:text-black cursor-pointer">Blazer</li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-6">Shoes</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-black cursor-pointer">All Shoes</li>
              <li className="hover:text-black cursor-pointer">Brutal Max</li>
              <li className="hover:text-black cursor-pointer">Running Shoes</li>
              <li className="hover:text-black cursor-pointer">Basketball Shoes</li>
              <li className="hover:text-black cursor-pointer">Custom Shoes</li>
              <li className="hover:text-black cursor-pointer">Sale Shoes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Clothing</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-black cursor-pointer">All Clothing</li>
              <li className="hover:text-black cursor-pointer">Tops & T-Shirts</li>
              <li className="hover:text-black cursor-pointer">Shorts</li>
              <li className="hover:text-black cursor-pointer">Hoodies & Pullovers</li>
              <li className="hover:text-black cursor-pointer">Joggers & Sweatpants</li>
              <li className="hover:text-black cursor-pointer">Sports Bras</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
};

export default Prefooter1;