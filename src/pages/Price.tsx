import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ServiceItem {
  name: string;
  minPrice: number;
  maxPrice: number;
  category: string;
}

const Price = () => {
  const services: ServiceItem[] = [
    { name: 'Stage 1 (бензин)', minPrice: 7000, maxPrice: 30000, category: 'Чип-тюнинг' },
    { name: 'Stage 1 (дизель)', minPrice: 7000, maxPrice: 30000, category: 'Чип-тюнинг' },
    { name: 'Stage 2 (с доработками)', minPrice: 35000, maxPrice: 60000, category: 'Чип-тюнинг' },
    { name: 'Эко-тюнинг', minPrice: 12000, maxPrice: 20000, category: 'Чип-тюнинг' },
    
    { name: 'SpeedLim (изменение ограничения скорости)', minPrice: 5000, maxPrice: 10000, category: 'Программное отключение (бензин)' },
    { name: 'RPM (изменение отсечки по оборотам)', minPrice: 5000, maxPrice: 10000, category: 'Программное отключение (бензин)' },
    { name: 'E2 (отключение диагностики катализатора)', minPrice: 6000, maxPrice: 10000, category: 'Программное отключение (бензин)' },
    { name: 'Иммобилайзер OFF', minPrice: 7000, maxPrice: 12000, category: 'Программное отключение (бензин)' },
    { name: 'noSecAir (отключение вторичного воздуха)', minPrice: 6000, maxPrice: 10000, category: 'Программное отключение (бензин)' },
    { name: 'noEGR (отключение рециркуляции газов)', minPrice: 6000, maxPrice: 12000, category: 'Программное отключение (бензин)' },
    { name: 'noEVAP (отключение вентиляции бака)', minPrice: 5000, maxPrice: 9000, category: 'Программное отключение (бензин)' },
    { name: 'noSwirl (отключение вихревых заслонок)', minPrice: 5000, maxPrice: 9000, category: 'Программное отключение (бензин)' },
    { name: 'DTC (селективное отключение ошибок)', minPrice: 4000, maxPrice: 7000, category: 'Программное отключение (бензин)' },
    
    { name: 'SpeedLim (изменение ограничения скорости)', minPrice: 5000, maxPrice: 8000, category: 'Программное отключение (дизель)' },
    { name: 'RPM (изменение отсечки по оборотам)', minPrice: 5000, maxPrice: 8000, category: 'Программное отключение (дизель)' },
    { name: 'noDPF (отключение сажевого фильтра)', minPrice: 7000, maxPrice: 40000, category: 'Программное отключение (дизель)' },
    { name: 'noEGR (отключение рециркуляции газов)', minPrice: 6000, maxPrice: 12000, category: 'Программное отключение (дизель)' },
    { name: 'noAdBlue (отключение впрыска мочевины)', minPrice: 15000, maxPrice: 35000, category: 'Программное отключение (дизель)' },
    { name: 'noSwirl (отключение вихревых заслонок)', minPrice: 5000, maxPrice: 9000, category: 'Программное отключение (дизель)' },
    { name: 'DTC (селективное отключение ошибок)', minPrice: 4000, maxPrice: 7000, category: 'Программное отключение (дизель)' },
    { name: 'Оптимизация под ГБО', minPrice: 7000, maxPrice: 20000, category: 'Программное отключение (дизель)' },
    { name: 'Иммобилайзер OFF', minPrice: 7000, maxPrice: 12000, category: 'Программное отключение (дизель)' },
    
    { name: 'Прошивка DSG', minPrice: 7000, maxPrice: 25000, category: 'Коробки передач' },
    { name: 'Прошивка АКПП', minPrice: 15000, maxPrice: 22000, category: 'Коробки передач' },
    
    { name: 'Компьютерная диагностика', minPrice: 2000, maxPrice: 2000, category: 'Диагностика' },
    { name: 'Считывание прошивки', minPrice: 3000, maxPrice: 3000, category: 'Диагностика' },
    { name: 'Восстановление ЭБУ после неудачной прошивки', minPrice: 7000, maxPrice: 15000, category: 'Диагностика' },
    { name: 'Восстановление блоков SRS', minPrice: 3000, maxPrice: 10000, category: 'Диагностика' },
    { name: 'Восстановление работы SAS', minPrice: 5000, maxPrice: 8000, category: 'Диагностика' },
    { name: 'Полная компьютерная диагностика', minPrice: 4000, maxPrice: 4000, category: 'Диагностика' },
  ];

  const categories = Array.from(new Set(services.map(s => s.category)));

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Прайс-лист</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Стоимость услуг по чип-тюнингу и диагностике
            </p>
          </div>

          <div className="space-y-6">
            {categories.map((category) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="Settings" size={20} className="text-primary" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {services
                      .filter(s => s.category === category)
                      .map((service, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-3 rounded-lg hover:bg-accent/50 transition-colors"
                        >
                          <span className="text-sm">{service.name}</span>
                          <span className="text-sm font-medium text-primary whitespace-nowrap ml-4">
                            {service.minPrice === service.maxPrice
                              ? `${service.minPrice.toLocaleString('ru-RU')} ₽`
                              : `${service.minPrice.toLocaleString('ru-RU')} - ${service.maxPrice.toLocaleString('ru-RU')} ₽`
                            }
                          </span>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} className="text-primary mt-1 flex-shrink-0" />
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Обратите внимание:</strong> указанные цены являются ориентировочными.
                  </p>
                  <p>
                    Итоговая стоимость зависит от марки и модели автомобиля, сложности работ и выбранных опций.
                  </p>
                  <p>
                    Для точного расчета стоимости свяжитесь со мной по телефону или через WhatsApp.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>


        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Price;