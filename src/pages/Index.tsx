import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTrustBar from "@/components/MarqueeTrustBar";

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
      </main>
    </>
  );
};

export default Index;
