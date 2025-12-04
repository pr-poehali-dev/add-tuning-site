import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBookingButton from '@/components/MobileBookingButton';
import MessengerButtons from '@/components/MessengerButtons';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ServiceItem {
  name: string;
  minPrice: number;
  maxPrice: number;
  category: string;
}

const Price = () => {
  const defaultServices: ServiceItem[] = [
    { name: 'Stage 1 (бензин)', minPrice: 7000, maxPrice: 20000, category: 'Чип-тюнинг' },
    { name: 'Stage 1 (дизель)', minPrice: 7000, maxPrice: 30000, category: 'Чип-тюнинг' },
    { name: 'Stage 2 (с доработками)', minPrice: 35000, maxPrice: 60000, category: 'Чип-тюнинг' },
    { name: 'Эко-тюнинг', minPrice: 7000, maxPrice: 15000, category: 'Чип-тюнинг' },
    
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
    { name: 'noDPF (отключение сажевого фильтра)', minPrice: 7000, maxPrice: 16000, category: 'Программное отключение (дизель)' },
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
    { name: 'Восстановление ЭБУ после неудачной прошивки', minPrice: 10000, maxPrice: 37000, category: 'Диагностика' },
    { name: 'Восстановление блоков SRS', minPrice: 3000, maxPrice: 10000, category: 'Диагностика' },
    { name: 'Восстановление работы SAS', minPrice: 5000, maxPrice: 10000, category: 'Диагностика' },
    { name: 'Полная компьютерная диагностика', minPrice: 4000, maxPrice: 4000, category: 'Диагностика' },
    { name: 'Прописка кодов форсунок', minPrice: 700, maxPrice: 1500, category: 'Диагностика' },
  ];

  const [services, setServices] = useState<ServiceItem[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedService, setEditedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    const savedServices = localStorage.getItem('admin_services');
    if (savedServices) {
      setServices(JSON.parse(savedServices));
    } else {
      setServices(defaultServices);
    }
  }, []);

  const startEditing = (index: number, service: ServiceItem) => {
    setEditingIndex(index);
    setEditedService({ ...service });
  };

  const cancelEditing = () => {
    setEditingIndex(null);
    setEditedService(null);
  };

  const saveEditing = () => {
    if (editingIndex !== null && editedService) {
      const newServices = [...services];
      newServices[editingIndex] = editedService;
      setServices(newServices);
      localStorage.setItem('admin_services', JSON.stringify(newServices));
      setEditingIndex(null);
      setEditedService(null);
    }
  };

  const categories = Array.from(new Set(services.map(s => s.category)));

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Цены на чип-тюнинг — ADD Tuning Тольятти | Стоимость Stage 1/2, удаления DPF/EGR</title>
        <meta name="description" content="Прозрачные цены на услуги чип-тюнинга в Тольятти. Stage 1 от 7000₽, Stage 2 от 35000₽, удаление DPF от 7000₽, AdBlue от 15000₽. Без скрытых платежей." />
        <meta property="og:title" content="Цены на чип-тюнинг — ADD Tuning Тольятти" />
        <meta property="og:description" content="Прозрачные цены: Stage 1 от 7000₽, Stage 2 от 35000₽, удаление DPF от 7000₽." />
        <meta property="og:url" content="https://add-tuning.ru/price" />
        <link rel="canonical" href="https://add-tuning.ru/price" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://add-tuning.ru/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Цены",
                "item": "https://add-tuning.ru/price"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Прайс-лист</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Стоимость услуг по чип-тюнингу и диагностике
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {categories.map((category) => (
              <Card key={category}>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
                    <Icon name="Settings" size={18} className="text-primary sm:w-5 sm:h-5" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-1 sm:space-y-2">
                    {services
                      .filter(s => s.category === category)
                      .map((service, idx) => {
                        const globalIndex = services.findIndex(s => s === service);
                        return (
                          <div key={idx} className="p-2 sm:p-3 rounded-lg hover:bg-accent/50 transition-colors">
                            {editingIndex === globalIndex && editedService ? (
                              <div className="space-y-2">
                                <Input
                                  placeholder="Название услуги"
                                  value={editedService.name}
                                  onChange={(e) => setEditedService({ ...editedService, name: e.target.value })}
                                  className="text-xs sm:text-sm h-8"
                                />
                                <div className="grid grid-cols-2 gap-2">
                                  <Input
                                    type="number"
                                    placeholder="Мин. цена"
                                    value={editedService.minPrice}
                                    onChange={(e) => setEditedService({ ...editedService, minPrice: Number(e.target.value) })}
                                    className="text-xs sm:text-sm h-8"
                                  />
                                  <Input
                                    type="number"
                                    placeholder="Макс. цена"
                                    value={editedService.maxPrice}
                                    onChange={(e) => setEditedService({ ...editedService, maxPrice: Number(e.target.value) })}
                                    className="text-xs sm:text-sm h-8"
                                  />
                                </div>
                                <div className="flex gap-2">
                                  <Button onClick={saveEditing} size="sm" className="flex-1 h-8 text-xs">
                                    <Icon name="Check" size={14} className="mr-1" />
                                    Сохранить
                                  </Button>
                                  <Button onClick={cancelEditing} size="sm" variant="outline" className="flex-1 h-8 text-xs">
                                    <Icon name="X" size={14} className="mr-1" />
                                    Отмена
                                  </Button>
                                </div>
                              </div>
                            ) : (
                              <div className="flex justify-between items-center gap-2">
                                <span className="text-xs sm:text-sm flex-1">{service.name}</span>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs sm:text-sm font-medium text-primary whitespace-nowrap">
                                    {service.minPrice === service.maxPrice
                                      ? `${service.minPrice.toLocaleString('ru-RU')} ₽`
                                      : `${service.minPrice.toLocaleString('ru-RU')} - ${service.maxPrice.toLocaleString('ru-RU')} ₽`
                                    }
                                  </span>
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    onClick={() => startEditing(globalIndex, service)}
                                    className="h-7 w-7 p-0"
                                    title="Редактировать"
                                  >
                                    <Icon name="Pencil" size={14} className="text-primary" />
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6 sm:mt-8 bg-primary/5 border-primary/20">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-2 sm:gap-3 mb-6">
                <Icon name="Info" size={18} className="text-primary mt-1 flex-shrink-0 sm:w-5 sm:h-5" />
                <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Обратите внимание:</strong> указанные цены являются ориентировочными.
                  </p>
                  <p>
                    Итоговая стоимость зависит от марки и модели автомобиля, сложности работ и выбранных опций.
                  </p>
                  <p>
                    Для точного расчета стоимости свяжитесь любым удобным способом:
                  </p>
                </div>
              </div>
              <MessengerButtons />
            </CardContent>
          </Card>


        </div>
      </section>

      <Footer />
      <MobileBookingButton />
    </div>
  );
};

export default Price;