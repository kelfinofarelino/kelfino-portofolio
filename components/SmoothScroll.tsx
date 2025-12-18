"use client";
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    // 1. Inisialisasi Lenis
    const lenis = new Lenis({
      duration: 1.2, // Kecepatan scroll (makin besar makin pelan)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // 2. Loop Animasi (Wajib untuk Lenis)
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. LOGIKA BARU: Menangani Klik Link Navbar (#)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Mencari tag <a> terdekat dari elemen yang diklik
      const link = target.closest('a');

      // Jika yang diklik adalah link menuju ID halaman (contoh: #about)
      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault(); // Matikan loncatan kasar bawaan browser
        
        const href = link.getAttribute('href')!;
        const targetSection = document.querySelector(href) as HTMLElement;

        if (targetSection) {
          // Perintahkan Lenis untuk scroll ke sana dengan mulus
          lenis.scrollTo(targetSection, {
            offset: -100, // PENGGANTI scroll-padding-top: Memberi jarak untuk Navbar
            duration: 1.5, // Durasi perjalanan scroll (detik)
          });
        }
      }
    };

    // Pasang event listener ke seluruh dokumen
    document.addEventListener('click', handleAnchorClick);

    // Bersihkan saat komponen tidak dipakai (Cleanup)
    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null;
}