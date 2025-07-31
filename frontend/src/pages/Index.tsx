
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedTabs from "@/components/FeaturedTabs";
import TutorialSection from "@/components/TutorialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedTabs />
      <TutorialSection />
      <Footer />
    </div>
  );
};

export default Index;
