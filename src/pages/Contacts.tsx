import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactInfo from '@/components/ContactInfo';
import MapCard from '@/components/MapCard';
import DiagnosticForm from '@/components/DiagnosticForm';
import TuningBookingForm from '@/components/TuningBookingForm';

const Contacts = () => {
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Контакты</h1>
            <p className="text-base sm:text-xl text-muted-foreground px-4">
              Свяжитесь с нами любым удобным способом для консультации или записи на чип-тюнинг
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Наши контакты</h2>
              
              <ContactInfo />
              <MapCard />
              <DiagnosticForm 
                lastSubmitTime={lastSubmitTime}
                setLastSubmitTime={setLastSubmitTime}
              />
            </div>

            <TuningBookingForm 
              lastSubmitTime={lastSubmitTime}
              setLastSubmitTime={setLastSubmitTime}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;