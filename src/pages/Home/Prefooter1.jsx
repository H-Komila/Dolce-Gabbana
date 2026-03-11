// import React from 'react'

// const Prefooter1 = () => {
//   return (
//     <>
//     <div className='prefooter1'>
//         <div className='container'>
//             <div className='prefooter1-container'>
//                 <h1>
//                    Dresses you’ll turn to again and again.
//                 </h1>
//                 <p>
//                     Here is your chance to upgrade your wardrobe with a variation of styles and fits that are both.
//                 </p>
//                 <button>
//                     View Collection
//                 </button>
//                 <button>
//                     Add to Bag
//                 </button>
//             </div>
//             <div className='prefooter1-image'>
//                 <img src="dress-image.jpg" alt="Dress" />
//                 <img src="dress-image.jpg" alt="Dress" />
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Prefooter1



import React from "react";
import { useNavigate } from "react-router-dom";

const Prefooter1 = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f3f3f3] py-20">
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
            src="/dress1.jpg"
            alt="dress"
            className="w-[260px] md:w-[300px] rounded-lg shadow-lg"
          />

          <img
            src="/dress2.jpg"
            alt="dress"
            className="w-[260px] md:w-[300px] rounded-lg shadow-lg absolute left-32 top-12"
          />

        </div>
      </div>
    </section>
  );
};

export default Prefooter1;