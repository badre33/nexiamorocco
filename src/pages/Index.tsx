import Header from "@/components/Header";
import RealHomeHero from "@/components/RealHomeHero";
import HomeAboutUs from "@/components/HomeAboutUs";

import HomeFeaturedInsight from "@/components/HomeFeaturedInsight";
import LatestInsights from "@/components/LatestInsights";
import WhyNexia from "@/components/WhyNexia";
import ServiceTabs from "@/components/ServiceTabs";
import HowCanWeHelp from "@/components/HowCanWeHelp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <RealHomeHero />
        <HomeAboutUs />
        
        <HomeFeaturedInsight />
        <LatestInsights />
        <WhyNexia />
        <ServiceTabs />
        <HowCanWeHelp />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
