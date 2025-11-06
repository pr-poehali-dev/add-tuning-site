import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OrderForm from '@/components/OrderForm';

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
  const servicesList = [
    {
      id: 'stage1',
      icon: 'Gauge',
      title: 'Чип-тюнинг Stage 1',
      description: 'Программная оптимизация ЭБУ без механических изменений',
      features: ['Прирост мощности до 30%', 'Увеличение крутящего момента', 'Улучшение отклика педали газа', 'Гарантия на работу'],
      price: 'от 7 000 ₽'
    },
    {
      id: 'stage2',
      icon: 'Zap',
      title: 'Чип-тюнинг Stage 2',
      description: 'Глубокая модификация с установкой дополнительного оборудования',
      features: ['Прирост мощности до 50%', 'Установка доп. оборудования', 'Настройка под премиум топливо', 'Стендовые испытания'],
      price: 'от 35 000 ₽'
    },
    {
      id: 'diagnostic',
      icon: 'Settings',
      title: 'Диагностика ЭБУ',
      description: 'Полная диагностика электронного блока управления',
      features: ['Чтение ошибок', 'Анализ параметров работы', 'Считывание прошивки', 'Консультация специалиста'],
      price: 'от 2 000 ₽'
    },
    {
      id: 'removal',
      icon: 'Trash2',
      title: 'Удаление систем',
      description: 'Профессиональное удаление экологических систем',
      features: ['Удаление DPF/FAP', 'Отключение EGR', 'Удаление AdBlue', 'Перевод на Евро 2', 'Иммобилайзер OFF', 'Отключение Swirl', 'Отключение DTC', 'Оптимизация под ГБО'],
      price: 'от 7 000 ₽'
    },
    {
      id: 'transmission',
      icon: 'Activity',
      title: 'Настройка DSG/АКПП',
      description: 'Оптимизация работы автоматической коробки передач',
      features: ['Ускоренные переключения', 'Повышение лимитов', 'Адаптация под стиль езды', 'Улучшенный отклик'],
      price: 'от 18 000 ₽'
    },
    {
      id: 'srs',
      icon: 'LifeBuoy',
      title: 'Восстановление блоков SRS',
      description: 'Профессиональное восстановление и ремонт блоков системы безопасности',
      features: ['Восстановление после ДТП', 'Сброс ошибок SRS', 'Проверка датчиков', 'Гарантия на работу'],
      price: 'от 3 000 ₽'
    },
    {
      id: 'sas',
      icon: 'Navigation',
      title: 'Восстановление работы SAS',
      description: 'Калибровка и восстановление датчика угла поворота руля',
      features: ['Калибровка датчика SAS', 'Сброс ошибок рулевого управления', 'Восстановление после замены руля', 'Проверка системы курсовой устойчивости'],
      price: 'от 5 000 ₽'
    },
    {
      id: 'ecu-recovery',
      icon: 'RefreshCw',
      title: 'Восстановление ECU',
      description: 'Восстановление электронного блока управления после неудачной прошивки',
      features: ['Восстановление после brick', 'Чтение и запись бэкапа', 'Программирование EEPROM', 'Гарантия на работу'],
      price: 'от 7 000 ₽'
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="container mx-auto">
          <div className="mb-12 rounded-2xl overflow-hidden h-64 relative">
            <img 
              src="https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/b7230c8f-37cf-4de4-9ea5-f92b8a189791.jpg" 
              alt="ECU diagnostics and tuning workshop"
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
              <Card key={index} id={service.id} className="group hover:border-primary transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
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
                    Запись на услугу
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
                <p className="text-muted-foreground">Более 1300 авто с чипом ADD TUNING</p>
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