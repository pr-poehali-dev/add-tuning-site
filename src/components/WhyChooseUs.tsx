import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: 'Award',
      title: '7 лет опыта',
      description: 'Более 1300 автомобилей прошито за годы работы. Работаю с европейскими, японскими, американскими и корейскими автомобилями. Каждая прошивка — индивидуальная калибровка под конкретный двигатель.'
    },
    {
      icon: 'Shield',
      title: 'Гарантия 1 год',
      description: 'Всегда сохраняю оригинальный файл ЭБУ — при необходимости верну всё как было бесплатно. Первые 2 недели — любые корректировки бесплатно.'
    },
    {
      icon: 'Database',
      title: 'Собственная база',
      description: 'Работаю только с проверенными файлами от европейских тюнинг-компаний. Каждая прошивка тестируется на стенде. База более 500 калибровок для популярных моделей.'
    },
    {
      icon: 'Wrench',
      title: 'Современное оборудование',
      description: 'Использую профессиональные программаторы Alientech K-TAG, CMD Flash, MPPS. Работаю с блоками Bosch, Siemens, Delphi, Marelli. Считывание прошивки по OBD или BDM.'
    },
    {
      icon: 'Clock',
      title: 'Работа за 2-4 часа',
      description: 'Stage 1 занимает 2-3 часа: диагностика, считывание, прошивка, тест-драйв.'
    },
    {
      icon: 'TrendingUp',
      title: 'Реальные результаты',
      description: 'После прошивки 98% клиентов отмечают улучшение динамики и снижение расхода при спокойной езде.'
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      description: 'Перед работой обсуждаю ваши ожидания: нужна экономия топлива или максимальная мощность. Учитываю состояние автомобиля, октановое число топлива, стиль езды.'
    },
    {
      icon: 'FileText',
      title: 'Прозрачность работы',
      description: 'Показываю процесс работы, объясняю что меняю в прошивке. Даю копию файла калибровки. Никаких скрытых платежей — цена известна до начала работ.'
    },
    {
      icon: 'MessageSquare',
      title: 'Поддержка после прошивки',
      description: 'На связи 24/7 в WhatsApp. Если что-то смущает после прошивки — звоните сразу. Даю рекомендации по эксплуатации и обслуживанию прошитого автомобиля.'
    }
  ];

  return (
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
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={advantage.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
