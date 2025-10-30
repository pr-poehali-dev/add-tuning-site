import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TuningCalculator from '@/components/TuningCalculator';

const Home = () => {
  const services = [
    {
      icon: 'Gauge',
      title: 'Чип-тюнинг Stage 1',
      description: 'Увеличение мощности до 30% без механических доработок',
    },
    {
      icon: 'Zap',
      title: 'Чип-тюнинг Stage 2',
      description: 'Прирост до 50% с установкой дополнительного оборудования',
    },
    {
      icon: 'Settings',
      title: 'Диагностика ЭБУ',
      description: 'Полная диагностика электронного блока управления',
    },
    {
      icon: 'TrendingUp',
      title: 'Эко-тюнинг',
      description: 'Снижение расхода топлива до 20%',
    },
    {
      icon: 'FileCheck',
      title: 'Удаление систем',
      description: 'DPF, EGR, AdBlue - легально и профессионально',
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Полная гарантия на все виды работ',
    },
  ];

  const stats = [
    { number: '2500+', label: 'Автомобилей прошито' },
    { number: '98%', label: 'Довольных клиентов' },
    { number: '7', label: 'Лет на рынке' },
    { number: '50+', label: 'Марок авто' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Раскройте
                <span className="block text-primary">потенциал</span>
                вашего авто
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональный чип-тюнинг от сертифицированных мастеров. Увеличение мощности до 50% с гарантией безопасности.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                  <Icon name="CalendarCheck" size={20} className="mr-2" />
                  Записаться на тюнинг
                </Button>
                <TuningCalculator />
              </div>
            </div>
            <div className="relative animate-slide-right">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/f2c4ccd1-a251-49b3-a48a-d75310d81881.jpg" 
                  alt="Performance car tuning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр услуг по чип-тюнингу</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:border-primary transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <Icon name={service.icon as any} size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы усилить свой автомобиль?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Запишитесь на консультацию и получите расчет стоимости под ваш автомобиль
            </p>
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить нам
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;