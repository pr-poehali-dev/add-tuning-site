import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OrderForm from '@/components/OrderForm';
import ServiceCard from '@/components/ServiceCard';
import WhyChooseUs from '@/components/WhyChooseUs';
import { servicesList } from '@/data/servicesList';

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
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="container mx-auto">
          <div className="mb-12 rounded-2xl overflow-hidden h-64 relative">
            <img 
              src="https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/b7230c8f-37cf-4de4-9ea5-f92b8a189791.jpg" 
              alt="Диагностика и чип-тюнинг ЭБУ автомобилей - ADD Tuning Тольятти"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end">
              <div className="p-8 w-full text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Мои услуги</h1>
                <p className="text-xl text-muted-foreground">
                  Полный спектр работ по чип-тюнингу и диагностике автомобилей всех марок
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
    </div>
  );
};

export default Services;
