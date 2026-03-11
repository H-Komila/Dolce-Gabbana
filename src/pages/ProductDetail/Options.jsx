import React from "react";
import rasm1 from "./images/Balotviy nike 1.png";
import rasm2 from "./images/Kulrang nike 2.png";
import rasm3 from "./images/Oq bolka 3.png";
import rasm4 from "./images/Yashil bolka 4.png";

const Options = () => {
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
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>

        {/* Grid tizimi: kichik ekranlarda 1 ta, katta ekranlarda 4 ta ustun */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-4">
                <p className="text-orange-700 text-sm font-medium">
                  {item.label}
                </p>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                {item.promo && (
                  <p className="text-green-700 text-sm">{item.promo}</p>
                )}
                <p className="font-bold mt-1">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Options;
