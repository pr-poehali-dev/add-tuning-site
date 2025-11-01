import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Reviews = () => {
  const reviews = [
    {
      name: 'Дмитрий К.',
      car: 'BMW 320d',
      rating: 5,
      date: '15.10.2024',
      text: 'Отличная работа! Машина преобразилась после Stage 1. Динамика стала совершенно другой, при этом расход не увеличился. Мастер настоящий профессионал, все объяснил и показал. Рекомендую!',
      initials: 'ДК'
    },
    {
      name: 'Александр М.',
      car: 'Audi A4 2.0 TFSI',
      rating: 5,
      date: '08.10.2024',
      text: 'Делал Stage 2 с прошивкой DSG. Результат превзошел все ожидания! Коробка стала переключаться моментально, мощность выросла значительно. Спасибо за качественную работу и гарантию!',
      initials: 'АМ'
    },
    {
      name: 'Игорь С.',
      car: 'Mercedes C220d',
      rating: 5,
      date: '02.10.2024',
      text: 'Удалили сажевый фильтр и сделали чип-тюнинг. Машина стала намного динамичнее, расход топлива снизился. Работу выполнили быстро, за 3 часа. Очень доволен!',
      initials: 'ИС'
    },
    {
      name: 'Сергей В.',
      car: 'VW Golf GTI',
      rating: 5,
      date: '25.09.2024',
      text: 'Прошивали GTI на Stage 1. Машина получила +65 л.с. и стала настоящим зверем! Мастер знает свое дело, все сделал аккуратно. Диагностика показала, что все параметры в норме.',
      initials: 'СВ'
    },
    {
      name: 'Михаил П.',
      car: 'Skoda Octavia RS',
      rating: 5,
      date: '18.09.2024',
      text: 'Обратился для эко-тюнинга. Расход действительно снизился на 15-20%, при этом мощность не потерял. Очень грамотный специалист, рекомендую всем!',
      initials: 'МП'
    },
    {
      name: 'Андрей Л.',
      car: 'Ford Focus ST',
      rating: 5,
      date: '10.09.2024',
      text: 'Делал комплексную настройку: Stage 2 + удаление EGR. Разница огромная! Теперь это совершенно другая машина. Отдельное спасибо за консультацию и профессиональный подход.',
      initials: 'АЛ'
    },
  ];

  const stats = [
    { value: '98%', label: 'Довольных клиентов' },
    { value: '4.9', label: 'Средняя оценка' },
    { value: '2500+', label: 'Выполненных работ' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Отзывы клиентов</h1>
            <p className="text-xl text-muted-foreground">
              Реальные отзывы владельцев автомобилей, которые доверили мне свой чип-тюнинг
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-lg">{review.name}</h3>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{review.car}</p>
                      <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {review.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-card rounded-2xl p-8 text-center">
            <Icon name="MessageSquarePlus" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Оставьте свой отзыв</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Мы ценим мнение каждого клиента. Поделитесь своим опытом работы с нами и помогите другим автовладельцам сделать правильный выбор
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://yandex.ru/maps" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold">
                <Icon name="Star" size={20} className="mr-2" />
                Оставить отзыв на Яндекс
              </a>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-foreground rounded-md hover:bg-primary/10 transition-colors font-semibold">
                <Icon name="Star" size={20} className="mr-2" />
                Оставить отзыв на Google
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;