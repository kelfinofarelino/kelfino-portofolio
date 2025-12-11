"use client";
import { useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import HomeSection from "@/components/Home";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import FeaturedWork from "@/components/FeaturedWork";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (elementTop < screenPosition) {
          element.classList.add('animated');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <SplashScreen />
      <Header />
      <HomeSection />
      <Skills />
      <Journey />
      <FeaturedWork />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}