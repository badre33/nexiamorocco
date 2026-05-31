import Header from "@/components/Header";
import RealHomeHero from "@/components/RealHomeHero";
import TaglineBanner from "@/components/TaglineBanner";
import HomeAboutUs from "@/components/HomeAboutUs";

import HomeFeaturedInsight from "@/components/HomeFeaturedInsight";
import LatestInsights from "@/components/LatestInsights";
import WhyNexia from "@/components/WhyNexia";
import ServiceTabs from "@/components/ServiceTabs";
import SectorsSection from "@/components/SectorsSection";
import HowCanWeHelp from "@/components/HowCanWeHelp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <RealHomeHero />
        <TaglineBanner />
        <HomeAboutUs />

        <HomeFeaturedInsight />
        <LatestInsights />
        <WhyNexia />
        <ServiceTabs />
        <SectorsSection />
        <HowCanWeHelp />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
