import { MotionConfig, m } from "motion/react";
import { Hero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { Dataset } from "./components/Dataset";
import { ResearchQuestions } from "./components/ResearchQuestions";
import { AboutUs } from "./components/AboutUs";
import { FontTester } from "./components/FontTester";
import { Navigation } from "./components/Navigation";
import { EDA } from "./components/EDA";
import { Discussion } from "./components/Discussion";
import { Conclusion } from "./components/Conclusion";
import { Methodology } from "./components/Methodology";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [headerFont, setHeaderFont] = useState("font-display-jakarta");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-header-font', headerFont);
  }, [headerFont]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="overview">
        <Introduction />
      </div>
      <div id="research-questions">
        <ResearchQuestions />
      </div>
      <div id="data">
        <Dataset />
      </div>
      <div id="methodology">
        <Methodology />
      </div>
      <div id="eda">
        <EDA />
      </div>
      <div id="discussion">
        <Discussion />
      </div>
      <div id="conclusion">
        <Conclusion />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 backdrop-blur-xl bg-gradient-to-br from-red-500/20 to-blue-500/20 hover:from-red-500/30 hover:to-blue-500/30 border-2 border-red-500/30 text-red-400 rounded-full shadow-2xl transition-all z-50 hover:scale-110 active:scale-95"
          style={{ animation: 'fade-in 0.3s ease-out' }}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
    </MotionConfig>
  );
}