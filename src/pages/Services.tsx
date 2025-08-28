import Header from "@/components/Header";
import ServicesHero from "@/components/ServicesHero";
import OurCapabilities from "@/components/OurCapabilities";
import OurServicesMenu from "@/components/OurServicesMenu";
import CaseStudySection from "@/components/CaseStudySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesInsights from "@/components/ServicesInsights";
import HowCanWeHelp from "@/components/HowCanWeHelp";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesHero />
        <OurCapabilities />
        <OurServicesMenu />
        <CaseStudySection />
        {/* <TestimonialsSection /> */}
        <ServicesInsights />
        <HowCanWeHelp />
      </main>
      <Footer />
    </div>
  );
};

export default Services;