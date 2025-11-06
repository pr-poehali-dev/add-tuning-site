import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServicesGrid from '@/components/ServicesGrid';
import CTASection from '@/components/CTASection';
import MobileBookingButton from '@/components/MobileBookingButton';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesGrid />
      <CTASection />
      <Footer />
      <MobileBookingButton />
    </div>
  );
};

export default Home;