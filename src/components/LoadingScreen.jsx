import React, { useState, useEffect } from 'react';
import Logo from '../components/Nav/images/logo.png';
import { useI18n } from '../i18n/I18nProvider';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const { t } = useI18n();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 30); // 3 soniya atrofida to'ladi
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center">
      {/* Markaziy Logo Animatsiyasi */}
      <div className="relative mb-8">
        {/* Orqa fondagi "puls" effekti */}
        <div className="absolute inset-0 bg-black/5 rounded-full animate-ping scale-150 duration-[2000ms]"></div>
        
        <img 
          src={Logo} 
          alt="Loading..." 
          className="w-24 md:w-32 h-auto relative z-10 animate-pulse transition-all duration-1000"
          style={{ filter: 'grayscale(100%)' }} // Premium ko'rinish uchun qora-oq
        />
      </div>

      {/* Progress Bar Konteyneri */}
      <div className="w-48 md:w-64 h-[2px] bg-gray-100 rounded-full overflow-hidden relative">
        {/* Harakatlanuvchi chiziq */}
        <div 
          className="absolute h-full bg-black transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Foiz ko'rsatkichi */}
      <span className="mt-4 text-[10px] font-medium tracking-[0.2em] text-gray-400 uppercase antialiased">
        {t("common.loading")} {progress}%
      </span>

      {/* Pastki tekst (Brend shiori kabi) */}
      <div className="absolute bottom-10 animate-bounce opacity-40">
        <p className="text-[12px] font-light tracking-widest text-black uppercase">
          Just Do It
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
