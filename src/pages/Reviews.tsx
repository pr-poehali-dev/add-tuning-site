import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Reviews = () => {
  const reviews = [
    {
      name: 'Алексей Петров',
      car: 'BMW 320d F30',
      rating: 5,
      date: '28.10.2024',
      text: 'Делал Stage 1 на дизеле. Прибавка мощности реально ощущается, особенно на обгонах. Расход остался прежним. Мастер работает быстро и профессионально, все показал на графиках. Через месяц езды никаких проблем.',
      initials: 'АП'
    },
    {
      name: 'Максим Волков',
      car: 'Audi A4 2.0 TDI',
      rating: 5,
      date: '21.10.2024',
      text: 'Удалили DPF и EGR, машина ожила! Пропали провалы при разгоне, тяга стала ровнее. Работу сделали за день, все аккуратно. Проехал уже 2000 км — полёт нормальный. Спасибо!',
      initials: 'МВ'
    },
    {
      name: 'Андрей Соколов',
      car: 'VW Golf GTI Mk7',
      rating: 5,
      date: '14.10.2024',
      text: 'Прошили GTI на Stage 1, плюс настроили DSG. Машина стала совсем другой! Разгон быстрее, коробка переключается четче. Мастер знает что делает, показывал логи до и после. Однозначно рекомендую.',
      initials: 'АС'
    },
    {
      name: 'Дмитрий Иванов',
      car: 'Mercedes C220d W205',
      rating: 5,
      date: '07.10.2024',
      text: 'Обратился с проблемой — после прошивки у другого "специалиста" машина не заводилась. Восстановили ЭБУ, вернули заводскую прошивку. Потом сделали нормальный Stage 1. Теперь всё работает как часы.',
      initials: 'ДИ'
    },
    {
      name: 'Сергей Морозов',
      car: 'Skoda Octavia 1.8 TSI',
      rating: 5,
      date: '30.09.2024',
      text: 'Чип-тюнинг + отключение иммобилайзера (менял ЭБУ после замыкания). Работу выполнили качественно и быстро. Мощность прибавилась хорошо, машина стала веселее. Цена адекватная.',
      initials: 'СМ'
    },
    {
      name: 'Роман Козлов',
      car: 'Ford Mondeo 2.0 TDCi',
      rating: 5,
      date: '22.09.2024',
      text: 'Делал удаление сажевого фильтра и AdBlue. Больше не горят ошибки, мотор работает ровно. Машина стала динамичнее и расход немного упал. Мастер объяснил все нюансы. Доволен на 100%!',
      initials: 'РК'
    },
  ];

  const stats = [
    { value: '98%', label: 'Довольных клиентов' },
    { value: '4.9', label: 'Средняя оценка' },
    { value: '1300+', label: 'Выполненных работ' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Отзывы клиентов</h1>
            <p className="text-base sm:text-xl text-muted-foreground px-4">
              Реальные отзывы владельцев автомобилей, которые доверили мне свой чип-тюнинг
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6">
                  <div className="text-3xl sm:text-5xl font-bold text-primary mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-base text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-base sm:text-lg">{review.name}</h3>
                        <span className="text-xs sm:text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2">{review.car}</p>
                      <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="text-primary fill-primary sm:w-4 sm:h-4" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {review.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 sm:mt-16 bg-card rounded-2xl p-6 sm:p-8 text-center">
            <Icon name="MessageSquarePlus" size={40} className="text-primary mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12" />
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Оставьте свой отзыв</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
              Мы ценим мнение каждого клиента. Поделитесь своим опытом работы с нами и помогите другим автовладельцам сделать правильный выбор
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="https://yandex.ru/maps" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold text-sm sm:text-base">
                <Icon name="Star" size={18} className="mr-2 sm:w-5 sm:h-5" />
                Оставить отзыв на Яндекс
              </a>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-primary text-foreground rounded-md hover:bg-primary/10 transition-colors font-semibold text-sm sm:text-base">
                <Icon name="Star" size={18} className="mr-2 sm:w-5 sm:h-5" />
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