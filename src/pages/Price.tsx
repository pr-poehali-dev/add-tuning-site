import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Price = () => {
  const priceCategories = [
    {
      category: 'Чип-тюнинг',
      items: [
        { service: 'Stage 1 (бензин)', price: '15 000 - 25 000 ₽' },
        { service: 'Stage 1 (дизель)', price: '18 000 - 30 000 ₽' },
        { service: 'Stage 2 (с доработками)', price: '35 000 - 60 000 ₽' },
        { service: 'Эко-тюнинг', price: '12 000 - 20 000 ₽' },
      ]
    },
    {
      category: 'Удаление систем',
      items: [
        { service: 'Удаление DPF/FAP', price: '8 000 - 15 000 ₽' },
        { service: 'Отключение EGR', price: '6 000 - 12 000 ₽' },
        { service: 'Удаление AdBlue', price: '10 000 - 18 000 ₽' },
        { service: 'Комплексное удаление', price: '20 000 - 35 000 ₽' },
      ]
    },
    {
      category: 'Коробки передач',
      items: [
        { service: 'Прошивка DSG', price: '18 000 - 25 000 ₽' },
        { service: 'Прошивка АКПП', price: '15 000 - 22 000 ₽' },
        { service: 'Увеличение лимитов АКПП', price: '20 000 - 30 000 ₽' },
      ]
    },
    {
      category: 'Диагностика',
      items: [
        { service: 'Компьютерная диагностика', price: '2 000 ₽' },
        { service: 'Считывание прошивки', price: '3 000 ₽' },
        { service: 'Восстановление ЭБУ', price: '5 000 - 15 000 ₽' },
        { service: 'Полная диагностика', price: '4 000 ₽' },
      ]
    },
  ];

  const packages = [
    {
      name: 'Базовый',
      price: '15 000 ₽',
      features: [
        'Stage 1 тюнинг',
        'Прирост мощности до 30%',
        'Компьютерная диагностика',
        'Гарантия 1 год',
      ],
      popular: false
    },
    {
      name: 'Оптимальный',
      price: '28 000 ₽',
      features: [
        'Stage 2 тюнинг',
        'Прирост мощности до 50%',
        'Удаление DPF/EGR',
        'Полная диагностика',
        'Гарантия 2 года',
      ],
      popular: true
    },
    {
      name: 'Максимальный',
      price: '45 000 ₽',
      features: [
        'Stage 2+ с доработками',
        'Прошивка АКПП/DSG',
        'Все системы удалены',
        'Стендовые испытания',
        'Пожизненная гарантия',
      ],
      popular: false
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Прайс-лист</h1>
            <p className="text-xl text-muted-foreground">
              Прозрачные цены на все виды услуг. Точная стоимость определяется после диагностики вашего автомобиля
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Готовые пакеты</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? 'border-primary border-2' : ''} animate-scale-in`} style={{ animationDelay: `${index * 100}ms` }}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                    <div className="text-4xl font-bold text-primary">{pkg.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Icon name="Check" size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${pkg.popular ? 'bg-primary hover:bg-primary/90' : ''}`} variant={pkg.popular ? 'default' : 'outline'}>
                      Выбрать пакет
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Подробный прайс</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {priceCategories.map((category, index) => (
                <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Icon name="ListChecks" size={24} className="text-primary mr-2" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center pb-3 border-b border-border last:border-0">
                          <span className="text-muted-foreground">{item.service}</span>
                          <span className="font-semibold text-primary">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-card rounded-2xl p-8 text-center">
            <Icon name="Info" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Важная информация</h3>
            <div className="max-w-2xl mx-auto text-muted-foreground space-y-2">
              <p>• Стоимость работ зависит от марки и модели автомобиля</p>
              <p>• Первичная диагностика входит в стоимость тюнинга</p>
              <p>• При заказе нескольких услуг предоставляются скидки</p>
              <p>• Гарантия на все виды работ</p>
            </div>
            <Button size="lg" className="mt-6 bg-primary hover:bg-primary/90">
              Получить точный расчет
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Price;
