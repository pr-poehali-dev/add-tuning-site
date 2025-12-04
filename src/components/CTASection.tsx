import MessengerButtons from '@/components/MessengerButtons';

const CTASection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">Пришло время ощутить весь потенциал вашего авто !</h2>
          <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">Свяжитесь с нами и получите расчет стоимости под ваш автомобиль</p>
          <MessengerButtons />
        </div>
      </div>
    </section>
  );
};

export default CTASection;