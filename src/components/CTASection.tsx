import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Пришло время ощутить весь потенциал вашего авто !</h2>
          <p className="text-xl text-muted-foreground mb-8">Свяжитесь с нами и получите расчет стоимости под ваш автомобиль</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 gap-2"
              onClick={() => window.open('https://wa.me/79372134547?text=Здравствуйте!%20Хочу%20записаться%20на%20чип-тюнинг', '_blank')}
            >
              <Icon name="MessageCircle" size={20} />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
