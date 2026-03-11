import React from "react";
import Slider from "react-slick";
import img1 from "./imgg/img1.png";
import img2 from "./imgg/img2.webp";
import img3 from "./imgg/img3.webp";
import img4 from "./imgg/img4.png";

function SimpleSlider() {
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
    img: img1,
    title: "Denim Collection",
    text: "An enigmatic and contemporary collection that exalts nautical style through meticulous fabrics."
  },
  {
    img: img2,
    title: "New Season Collection",
    text: "Step into the new season with timeless elegance, modern silhouettes, and luxurious fabrics."
  },
  {
    img: img3,
    title: "Exclusive Offers",
    text: "Enjoy special seasonal discounts on selected pieces for a limited time."
  },
  {
    img: img4,
    title: "Signature Luxury",
    text: "Experience refined craftsmanship and iconic Italian style."
  }
];

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[600px]">
              
              <img
                src={slide.img}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30"></div>

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

                    <button className="px-6 py-3 border border-white hover:bg-white hover:text-black transition">
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
