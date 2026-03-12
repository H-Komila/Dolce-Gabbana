import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { SiApplepay } from "react-icons/si";
import { useI18n } from "../../i18n/I18nProvider";

const CheckoutModal = ({ isOpen, onClose, total }) => {
  const { t } = useI18n();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Orqa fonni xiralashtirish */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal oynasi */}
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold italic tracking-tighter">{t("checkout.title")}</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <IoMdClose size={24} />
            </button>
          </div>

          <form className="space-y-5" onClick={(e) => e.stopPropagation()}>
            {/* Shaxsiy ma'lumotlar */}
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                {t("checkout.shippingLabel")}
              </label>
              <input
                type="text"
                placeholder={t("checkout.fullName")}
                className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-lg"
              />
              <input
                type="text"
                placeholder={t("checkout.address")}
                className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-lg"
              />
            </div>

            {/* Karta ma'lumotlari */}
            <div className="space-y-4 pt-4">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                {t("checkout.paymentLabel")}
              </label>
              <div className="flex gap-4 mb-4">
                <div className="flex-1 border-2 border-black rounded-xl p-3 flex items-center justify-center cursor-pointer">
                  <FaCcVisa size={30} />
                </div>
                <div className="flex-1 border border-gray-200 rounded-xl p-3 flex items-center justify-center cursor-pointer hover:border-black transition-all">
                  <FaCcMastercard size={30} />
                </div>
                <div className="flex-1 border border-gray-200 rounded-xl p-3 flex items-center justify-center cursor-pointer hover:border-black transition-all">
                  <SiApplepay size={30} />
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder={t("checkout.cardNumber")}
                  className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-lg"
                />
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder={t("checkout.exp")}
                  className="w-1/2 border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-lg"
                />
                <input
                  type="text"
                  placeholder={t("checkout.cvv")}
                  className="w-1/2 border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-lg"
                />
              </div>
            </div>

            {/* Jami va Tasdiqlash */}
            <div className="pt-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-500 font-medium">{t("checkout.amount")}:</span>
                <span className="text-2xl font-black">${total}</span>
              </div>
              <button
                type="button"
                className="w-full bg-black text-white py-5 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-xl shadow-gray-200"
                onClick={() => alert(t("checkout.success"))}
              >
                {t("checkout.confirm")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;

