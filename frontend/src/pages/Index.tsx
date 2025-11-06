import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedTabs from '@/components/FeaturedTabs';
import TutorialSection from '@/components/TutorialSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      {/* Full-width Banner */}
      <div className='w-full'>
        <img
          src='/assets/banner.png'
          alt='Octave8 Music Academy Banner'
          className='w-full h-auto object-cover'
          style={{ maxHeight: '700px' }}
        />
      </div>
      <Hero />
      <FeaturedTabs />
      <TutorialSection />
      <Footer />
    </div>
  );
};

export default Index;
