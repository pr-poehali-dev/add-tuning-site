import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServicesGrid from '@/components/ServicesGrid';
import CTASection from '@/components/CTASection';
import MobileBookingButton from '@/components/MobileBookingButton';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>ADD Tuning — Чип-тюнинг автомобилей в Тольятти | Увеличение мощности до 50%</title>
        <meta name="description" content="⚡ Профессиональный чип-тюнинг в Тольятти ✓ Stage 1/2 ✓ Удаление DPF, EGR, AdBlue ✓ Диагностика ЭБУ ✓ 7 лет опыта ✓ 1300+ прошитых авто ✓ Гарантия 1 год ✓ Работа 2-4 часа. Звоните!" />
        <meta property="og:title" content="ADD Tuning — Чип-тюнинг в Тольятти | Увеличение мощности до 50%" />
        <meta property="og:description" content="⚡ Профессиональный чип-тюнинг автомобилей Stage 1/2. Удаление DPF, EGR, AdBlue. 7 лет опыта, 1300+ авто, гарантия 1 год. Работа 2-4 часа." />
        <meta property="og:url" content="https://add-tuning.ru/" />
        <link rel="canonical" href="https://add-tuning.ru/" />
      </Helmet>
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