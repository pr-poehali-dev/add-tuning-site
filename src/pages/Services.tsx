import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OrderForm from '@/components/OrderForm';

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const servicesList = [
    {
      icon: 'Gauge',
      title: 'Чип-тюнинг Stage 1',
      description: 'Программная оптимизация ЭБУ без механических изменений',
      features: ['Прирост мощности до 30%', 'Увеличение крутящего момента', 'Улучшение отклика педали газа', 'Гарантия на работу'],
      price: 'от 15 000 ₽'
    },
    {
      icon: 'Zap',
      title: 'Чип-тюнинг Stage 2',
      description: 'Глубокая модификация с установкой дополнительного оборудования',
      features: ['Прирост мощности до 50%', 'Установка доп. оборудования', 'Настройка под премиум топливо', 'Стендовые испытания'],
      price: 'от 35 000 ₽'
    },
    {
      icon: 'Settings',
      title: 'Диагностика ЭБУ',
      description: 'Полная диагностика электронного блока управления',
      features: ['Чтение ошибок', 'Анализ параметров работы', 'Считывание прошивки', 'Консультация специалиста'],
      price: 'от 2 000 ₽'
    },
    {
      icon: 'Trash2',
      title: 'Удаление систем',
      description: 'Профессиональное удаление экологических систем',
      features: ['Удаление DPF/FAP', 'Отключение EGR', 'Удаление AdBlue', 'Легальная прошивка'],
      price: 'от 8 000 ₽'
    },
    {
      icon: 'Activity',
      title: 'Настройка DSG/АКПП',
      description: 'Оптимизация работы автоматической коробки передач',
      features: ['Ускоренные переключения', 'Повышение лимитов', 'Адаптация под стиль езды', 'Улучшенный отклик'],
      price: 'от 18 000 ₽'
    },
    {
      icon: 'LifeBuoy',
      title: 'Восстановление блоков SRS',
      description: 'Профессиональное восстановление и ремонт блоков системы безопасности',
      features: ['Восстановление после ДТП', 'Сброс ошибок SRS', 'Проверка датчиков', 'Гарантия на работу'],
      price: 'от 10 000 ₽'
    },
    {
      icon: 'Navigation',
      title: 'Восстановление работы SAS',
      description: 'Калибровка и восстановление датчика угла поворота руля',
      features: ['Калибровка датчика SAS', 'Сброс ошибок рулевого управления', 'Восстановление после замены руля', 'Проверка системы курсовой устойчивости'],
      price: 'от 3 000 ₽'
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="container mx-auto">
          <div className="mb-12 rounded-2xl overflow-hidden h-64 relative">
            <img 
              src="https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/b37c5e9a-92a3-4288-af19-9ac1eb09277c.jpg" 
              alt="Engine tuning"
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
              <Card key={index} className="group hover:border-primary transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Icon name={service.icon as any} size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Icon name="CheckCircle2" size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => setSelectedService(service.title)}
                  >
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Почему выбирают нас?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Опыт 7+ лет</h3>
                <p className="text-muted-foreground">Более 1300 автомобилей</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Гарантия</h3>
                <p className="text-muted-foreground">Гарантия на все виды работ</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Быстро</h3>
                <p className="text-muted-foreground">Большинство работ выполняется за 2-3 часа</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto">
          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => window.open('https://wa.me/79372134547?text=Здравствуйте!%20Хочу%20узнать%20больше%20о%20ваших%20услугах', '_blank')}
            >
              <Icon name="MessageCircle" size={20} />
              Консультация в WhatsApp
            </Button>
            <Button 
              size="lg" 
              className="gap-2 bg-[#0088cc] hover:bg-[#0077b3] text-white"
              onClick={() => window.open('https://t.me/79372134547', '_blank')}
            >
              <Icon name="Send" size={20} />
              Консультация в Telegram
            </Button>
          </div>
        </div>
      </section>

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