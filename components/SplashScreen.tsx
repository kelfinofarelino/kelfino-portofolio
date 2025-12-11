"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onFinish?: () => void;
  onFadeStart?: () => void;
}

export default function SplashScreen({ onFinish, onFadeStart }: SplashScreenProps) {
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      if (onFadeStart) onFadeStart();
    }, 2000);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish, onFadeStart]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 bg-brand-dark flex flex-col justify-center items-center z-[9999] 
      transition-opacity duration-1000 ease-in-out 
      ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="mb-5 animate-pulse w-24 h-24 relative">
        <Image 
          src="/assets/image/logok3.png"
          alt="Logo" 
          fill 
          className="object-contain" 
          priority 
        />
      </div>

      <div className="text-4xl font-extrabold text-center leading-tight">
        KELFINO<span className="text-brand-light-red">.</span>
      </div>
      <div className="mt-2 text-brand-gray tracking-[2px] text-sm">kelfino.my.id</div>
    </div>
  );
}