import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTrustBar from "@/components/MarqueeTrustBar";
import AboutSection from "@/components/AboutSection";
import AboutToServicesDivider from "@/components/AboutToServicesDivider";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";

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
        <HeroSection />
        <MarqueeTrustBar />
        <AboutSection />
        <AboutToServicesDivider />
        <ServicesSection />
        <StatsSection />
      </main>
    </>
  );
};

export default Index;
