import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ServiceItem {
  id: string;
  name: string;
  minPrice: number;
  maxPrice: number;
  category: string;
}

const Price = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services: ServiceItem[] = [
    { id: 'stage1-petrol', name: 'Stage 1 (бензин)', minPrice: 15000, maxPrice: 25000, category: 'Чип-тюнинг' },
    { id: 'stage1-diesel', name: 'Stage 1 (дизель)', minPrice: 18000, maxPrice: 30000, category: 'Чип-тюнинг' },
    { id: 'stage2', name: 'Stage 2 (с доработками)', minPrice: 35000, maxPrice: 60000, category: 'Чип-тюнинг' },
    { id: 'eco-tuning', name: 'Эко-тюнинг', minPrice: 12000, maxPrice: 20000, category: 'Чип-тюнинг' },
    
    { id: 'speedlim-petrol', name: 'SpeedLim (изменение ограничения скорости)', minPrice: 5000, maxPrice: 8000, category: 'Программное отключение (бензин)' },
    { id: 'rpm-petrol', name: 'RPM (изменение отсечки по оборотам)', minPrice: 5000, maxPrice: 8000, category: 'Программное отключение (бензин)' },
    { id: 'e2', name: 'E2 (отключение диагностики катализатора)', minPrice: 6000, maxPrice: 10000, category: 'Программное отключение (бензин)' },
    { id: 'nosecair', name: 'noSecAir (отключение вторичного воздуха)', minPrice: 6000, maxPrice: 10000, category: 'Программное отключение (бензин)' },
    { id: 'noegr-petrol', name: 'noEGR (отключение рециркуляции газов)', minPrice: 6000, maxPrice: 12000, category: 'Программное отключение (бензин)' },
    { id: 'noevap', name: 'noEVAP (отключение вентиляции бака)', minPrice: 5000, maxPrice: 9000, category: 'Программное отключение (бензин)' },
    { id: 'noswirl-petrol', name: 'noSwirl (отключение вихревых заслонок)', minPrice: 5000, maxPrice: 9000, category: 'Программное отключение (бензин)' },
    { id: 'dtc-petrol', name: 'DTC (селективное отключение ошибок)', minPrice: 4000, maxPrice: 7000, category: 'Программное отключение (бензин)' },
    
    { id: 'speedlim-diesel', name: 'SpeedLim (изменение ограничения скорости)', minPrice: 5000, maxPrice: 8000, category: 'Программное отключение (дизель)' },
    { id: 'rpm-diesel', name: 'RPM (изменение отсечки по оборотам)', minPrice: 5000, maxPrice: 8000, category: 'Программное отключение (дизель)' },
    { id: 'nodpf', name: 'noDPF (отключение сажевого фильтра)', minPrice: 8000, maxPrice: 15000, category: 'Программное отключение (дизель)' },
    { id: 'noegr-diesel', name: 'noEGR (отключение рециркуляции газов)', minPrice: 6000, maxPrice: 12000, category: 'Программное отключение (дизель)' },
    { id: 'noadblue', name: 'noAdBlue (отключение впрыска мочевины)', minPrice: 10000, maxPrice: 18000, category: 'Программное отключение (дизель)' },
    { id: 'noswirl-diesel', name: 'noSwirl (отключение вихревых заслонок)', minPrice: 5000, maxPrice: 9000, category: 'Программное отключение (дизель)' },
    { id: 'dtc-diesel', name: 'DTC (селективное отключение ошибок)', minPrice: 4000, maxPrice: 7000, category: 'Программное отключение (дизель)' },
    { id: 'gbo', name: 'Оптимизация под ГБО', minPrice: 12000, maxPrice: 20000, category: 'Программное отключение (дизель)' },
    
    { id: 'dsg', name: 'Прошивка DSG', minPrice: 18000, maxPrice: 25000, category: 'Коробки передач' },
    { id: 'akpp', name: 'Прошивка АКПП', minPrice: 15000, maxPrice: 22000, category: 'Коробки передач' },
    { id: 'akpp-limits', name: 'Увеличение лимитов АКПП', minPrice: 20000, maxPrice: 30000, category: 'Коробки передач' },
    
    { id: 'diag-computer', name: 'Компьютерная диагностика', minPrice: 2000, maxPrice: 2000, category: 'Диагностика' },
    { id: 'diag-read', name: 'Считывание прошивки', minPrice: 3000, maxPrice: 3000, category: 'Диагностика' },
    { id: 'diag-recovery', name: 'Восстановление ЭБУ', minPrice: 5000, maxPrice: 15000, category: 'Диагностика' },
    { id: 'diag-full', name: 'Полная диагностика', minPrice: 4000, maxPrice: 4000, category: 'Диагностика' },
  ];

  const categories = Array.from(new Set(services.map(s => s.category)));

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    const selected = services.filter(s => selectedServices.includes(s.id));
    const minTotal = selected.reduce((sum, s) => sum + s.minPrice, 0);
    const maxTotal = selected.reduce((sum, s) => sum + s.maxPrice, 0);
    return { minTotal, maxTotal, count: selected.length };
  };

  const { minTotal, maxTotal, count } = calculateTotal();

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Прайс-лист</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите интересующие услуги и получите ориентировочный расчет стоимости
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {categories.map((category) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="text-xl">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {services
                        .filter(s => s.category === category)
                        .map((service) => (
                          <div
                            key={service.id}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                            onClick={() => toggleService(service.id)}
                          >
                            <Checkbox
                              id={service.id}
                              checked={selectedServices.includes(service.id)}
                              onCheckedChange={() => toggleService(service.id)}
                            />
                            <label
                              htmlFor={service.id}
                              className="flex-1 cursor-pointer select-none"
                            >
                              <div className="flex justify-between items-start gap-4">
                                <span className="text-sm leading-relaxed">{service.name}</span>
                                <span className="text-sm font-medium text-primary whitespace-nowrap">
                                  {service.minPrice === service.maxPrice
                                    ? `${service.minPrice.toLocaleString('ru-RU')} ₽`
                                    : `${service.minPrice.toLocaleString('ru-RU')} - ${service.maxPrice.toLocaleString('ru-RU')} ₽`
                                  }
                                </span>
                              </div>
                            </label>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="border-2 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Calculator" size={20} className="text-primary" />
                      Ваш расчет
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {count > 0 ? (
                      <>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Выбрано услуг:</span>
                            <span className="font-semibold">{count}</span>
                          </div>
                          <div className="pt-4 border-t">
                            <p className="text-sm text-muted-foreground mb-2">
                              Ориентировочная стоимость программных работ:
                            </p>
                            <div className="text-3xl font-bold text-primary">
                              {minTotal === maxTotal
                                ? `${minTotal.toLocaleString('ru-RU')} ₽`
                                : `${minTotal.toLocaleString('ru-RU')} - ${maxTotal.toLocaleString('ru-RU')} ₽`
                              }
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 space-y-3">
                          <Button className="w-full bg-primary hover:bg-primary/90">
                            <Icon name="Phone" size={18} className="mr-2" />
                            Записаться
                          </Button>
                          <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => setSelectedServices([])}
                          >
                            Очистить выбор
                          </Button>
                        </div>

                        <div className="pt-4 border-t">
                          <div className="flex gap-2 text-xs text-muted-foreground">
                            <Icon name="Info" size={14} className="mt-0.5 flex-shrink-0" />
                            <p>
                              Точная стоимость определяется после диагностики и зависит от марки и модели автомобиля
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-8">
                        <Icon name="ListChecks" size={48} className="mx-auto mb-3 text-muted-foreground/30" />
                        <p className="text-sm text-muted-foreground">
                          Выберите услуги из списка для расчета стоимости
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Price;
