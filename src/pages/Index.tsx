
import HeroSection from '../components/HeroSection';
import FeaturedSection from '../components/FeaturedSection';
import CommunitySection from '../components/CommunitySection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
