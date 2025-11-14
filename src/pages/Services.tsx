import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OrderForm from '@/components/OrderForm';
import ServiceCard from '@/components/ServiceCard';
import WhyChooseUs from '@/components/WhyChooseUs';
import { servicesList } from '@/data/servicesList';
import MobileBookingButton from '@/components/MobileBookingButton';

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Услуги чип-тюнинга — ADD Tuning Тольятти | Stage 1, Stage 2, удаление DPF/EGR/AdBlue</title>
        <meta name="description" content="Полный спектр услуг чип-тюнинга в Тольятти: Stage 1/2, удаление DPF, EGR, AdBlue, диагностика ЭБУ. Опыт 7+ лет, 1300+ автомобилей. Гарантия 1 год." />
        <meta property="og:title" content="Услуги чип-тюнинга — ADD Tuning Тольятти" />
        <meta property="og:description" content="Stage 1/2, удаление DPF/EGR/AdBlue, диагностика ЭБУ. Опыт 7+ лет, гарантия 1 год." />
        <meta property="og:url" content="https://add-tuning.ru/services" />
        <link rel="canonical" href="https://add-tuning.ru/services" />
      </Helmet>
      <Header />
      
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="container mx-auto">
          <div className="mb-8 sm:mb-12 rounded-2xl overflow-hidden h-48 sm:h-64 relative">
            <img 
              src="https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/b7230c8f-37cf-4de4-9ea5-f92b8a189791.jpg" 
              alt="Диагностика и чип-тюнинг ЭБУ автомобилей - ADD Tuning Тольятти"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end">
              <div className="p-4 sm:p-8 w-full text-center">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4">Мои услуги</h1>
                <p className="text-base sm:text-xl text-muted-foreground">
                  Полный спектр работ по чип-тюнингу и диагностике автомобилей всех марок
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {servicesList.map((service, index) => (
              <ServiceCard 
                key={index}
                service={service}
                index={index}
                onSelectService={setSelectedService}
              />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <Footer />
      
      {selectedService && (
        <OrderForm 
          serviceName={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
      <MobileBookingButton />
    </div>
  );
};

export default Services;