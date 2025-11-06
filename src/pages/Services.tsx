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

      <section className="py-20 px-4 bg-gradient-to-br from-card via-card to-primary/5">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                За годы работы я выработал подход, который гарантирует результат и безопасность вашего автомобиля
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Award" size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">7 лет опыта</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Более 1300 автомобилей прошито за годы работы. Работаю с европейскими, японскими, американскими и корейскими автомобилями. 
                    Каждая прошивка — индивидуальная калибровка под конкретный двигатель.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Shield" size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Гарантия 1 год</h3>
                  <p className="text-muted-foreground leading-relaxed">Всегда сохраняю оригинальный файл ЭБУ — при необходимости верну всё как было бесплатно. Первые 2 недели — любые корректировки бесплатно.</p>
                </CardContent>
              </Card>

              <Card className="hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Database" size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Собственная база</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Работаю только с проверенными файлами от европейских тюнинг-компаний. Каждая прошивка тестируется на стенде. 
                    База более 500 калибровок для популярных моделей.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Wrench" size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Современное оборудование</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Использую профессиональные программаторы Alientech K-TAG, CMD Flash, MPPS. 
                    Работаю с блоками Bosch, Siemens, Delphi, Marelli. Считывание прошивки по OBD или BDM.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Clock" size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Работа за 2-4 часа</h3>
                  <p className="text-muted-foreground leading-relaxed">Stage 1 занимает 2-3 часа: диагностика, считывание, прошивка, тест-драйв.</p>
                </CardContent>
              </Card>

              <Card className="hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="TrendingUp" size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Реальные результаты</h3>
                  <p className="text-muted-foreground leading-relaxed">После прошивки 98% клиентов отмечают улучшение динамики и снижение расхода при спокойной езде. </p>
                </CardContent>
              </Card>

              <Card className="hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Users" size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Индивидуальный подход</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Перед работой обсуждаю ваши ожидания: нужна экономия топлива или максимальная мощность. 
                    Учитываю состояние автомобиля, октановое число топлива, стиль езды.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="FileText" size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Прозрачность работы</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Показываю процесс работы, объясняю что меняю в прошивке. Даю копию файла калибровки. 
                    Никаких скрытых платежей — цена известна до начала работ.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="MessageSquare" size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Поддержка после прошивки</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    На связи 24/7 в WhatsApp. Если что-то смущает после прошивки — звоните сразу. 
                    Даю рекомендации по эксплуатации и обслуживанию прошитого автомобиля.
                  </p>
                </CardContent>
              </Card>
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