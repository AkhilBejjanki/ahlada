import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTrustBar from "@/components/MarqueeTrustBar";
import AboutSection from "@/components/AboutSection";
import AboutToServicesDivider from "@/components/AboutToServicesDivider";
import ServicesSection from "@/components/ServicesSection";
import ServicesToStatsDivider from "@/components/ServicesToStatsDivider";
import StatsSection from "@/components/StatsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleComplete = useCallback(() => setIsLoading(false), []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader onComplete={handleComplete} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <div id="home"><HeroSection /></div>
        <MarqueeTrustBar />
        <div id="about"><AboutSection /></div>
        <AboutToServicesDivider />
        <div id="services"><ServicesSection /></div>
        <ServicesToStatsDivider />
        <StatsSection />
        <div id="portfolio"><GallerySection /></div>
        <TestimonialsSection />
        <div id="contact"><ContactSection /></div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
