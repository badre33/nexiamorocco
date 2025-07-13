import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ImageWithCardSection from "@/components/ImageWithCardSection";
import FactsSection from "@/components/FactsSection";
import GovernanceSection from "@/components/GovernanceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ImageWithCardSection />
        <FactsSection />
        <GovernanceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
