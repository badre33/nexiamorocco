import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ImageWithCardSection from "@/components/ImageWithCardSection";
import FactsSection from "@/components/FactsSection";
import GovernanceSection from "@/components/GovernanceSection";
import LinkedInPosts from "@/components/LinkedInPosts";
import OurClients from "@/components/OurClients";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ImageWithCardSection />
        <FactsSection />
        <OurClients />
        <LinkedInPosts />
        <GovernanceSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;