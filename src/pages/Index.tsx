import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TransformSection from "@/components/TransformSection";
import BenefitsSection from "@/components/BenefitsSection";
import NoticeBoardSection from "@/components/NoticeBoardSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <WhyChooseSection />
        <TransformSection />
        <BenefitsSection />
        <NoticeBoardSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
