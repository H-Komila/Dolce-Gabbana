import React from "react";
import { useNavigate } from "react-router-dom";
import imgprefot1 from "../Prefooter/imgprefot1.png";
import img2prefot1 from "../Prefooter/img2prefot1.png";
import { useI18n } from "../../i18n/I18nProvider";

const Prefooter1 = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <>
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              {t("prefooter.headline")}
            </h1>

            <p className="text-gray-500 max-w-md mb-8">{t("prefooter.desc")}</p>

            <div className="flex items-center gap-6">
              <button
                onClick={() => navigate("/catalog")}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                {t("common.viewCollection")}
              </button>

              <button className="text-gray-700 hover:text-black transition">
                {t("common.addToBag")}
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-xl mx-auto pb-10 sm:pb-12">
            <div className="aspect-[4/5] sm:aspect-[5/4] bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
              <img src={img2prefot1} alt="dress" className="w-full h-full object-cover" />
            </div>

            <div className="absolute right-2 sm:right-4 -bottom-6 sm:-bottom-8 w-40 sm:w-48 md:w-56 aspect-[7/10] bg-white rounded-2xl shadow-xl overflow-hidden">
              <img src={imgprefot1} alt="dress" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-6">{t("prefooter.featured")}</h3>
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
            <h3 className="text-lg font-semibold mb-6">{t("prefooter.shoes")}</h3>
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
            <h3 className="text-lg font-semibold mb-6">{t("prefooter.clothing")}</h3>
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
