"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image'; // Kita pakai komponen Image dari Next.js

export default function SplashScreen() {
  // State 1: Mengontrol apakah animasi fade-out dimulai (opacity)
  const [isFading, setIsFading] = useState(false);
  
  // State 2: Mengontrol apakah komponen masih ada di HTML (DOM)
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // TIMER 1: Tampilkan selama 2 detik, lalu mulai transparan (Fade Out)
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    // TIMER 2: Tunggu animasi fade selesai (1 detik), baru hapus total dari layar
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 2000ms (tampil) + 1000ms (waktu durasi animasi)

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Jika sudah benar-benar selesai, hapus dari DOM agar kita bisa klik website di belakangnya
  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 bg-brand-dark flex flex-col justify-center items-center z-[9999] 
      transition-opacity duration-1000 ease-in-out 
      ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* --- BAGIAN INI DIGANTI (START) --- */}
      <div className="mb-5 animate-pulse w-24 h-24 relative"> {/* Wadah untuk logo */}
        {/* Ganti /assets/image/logo1.jpg dengan path logo kamu yang sebenarnya */}
        <Image 
          src="/assets/image/logok3.png" 
          alt="Logo Kelfino" 
          fill // Agar gambar mengisi penuh wadahnya (w-24 h-24)
          className="object-contain" // Agar logo tidak terpotong/gepeng
          priority // Agar logo dimuat secepat mungkin
        />
      </div>
      {/* --- BAGIAN INI DIGANTI (END) --- */}

      <div className="text-4xl font-extrabold text-center leading-tight">
        KELFINO<span className="text-brand-light-red">.</span>
      </div>
      <div className="mt-2 text-brand-gray tracking-[2px] text-sm">kelfino.my.id</div>
    </div>
  );
}