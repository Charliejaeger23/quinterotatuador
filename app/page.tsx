import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import ProcessSection from "./components/sections/ProcessSection";
import ArtistSection from "./components/sections/ArtistSection";
import FAQSection from "./components/sections/FAQSection";
import FinalCTASection from "./components/sections/FinalCTASection";
export default function Home() {
  return (
    <>
      <Navigation />
      <main id="contenido">
        <HeroSection />
        <PortfolioSection />
        <ProcessSection />
        <ArtistSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
