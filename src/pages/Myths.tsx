import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBookingButton from '@/components/MobileBookingButton';
import { Helmet } from 'react-helmet-async';

const Myths = () => {
  const myths = [
    {
      icon: 'AlertCircle',
      myth: 'Чип-тюнинг убивает двигатель',
      reality: 'При грамотной настройке двигатель работает в штатных режимах. Мы не превышаем заводские температурные и механические пределы. Производители часто искусственно занижают мощность для разных рынков — один и тот же двигатель в Европе выдает 200 л.с., а в России 150 л.с. Мы просто возвращаем заложенный потенциал.',
      fact: 'За 7 лет работы не было ни одного случая поломки двигателя из-за нашей прошивки при соблюдении рекомендаций по обслуживанию.'
    },
    {
      icon: 'Fuel',
      myth: 'Расход топлива всегда увеличивается',
      reality: 'На самом деле расход зависит от стиля езды. При спокойной езде расход часто снижается на 0.5-1.5 л/100км, потому что двигателю не нужно так сильно "напрягаться" для разгона. Увеличение расхода происходит только если постоянно использовать прибавку мощности — давить педаль в пол.',
      fact: '73% наших клиентов отмечают снижение расхода при городской езде в спокойном режиме.'
    },
    {
      icon: 'Shield',
      myth: 'Слетит гарантия дилера',
      reality: 'Это частично правда, но есть нюансы. Если автомобиль на гарантии и произойдет поломка двигателя, дилер может отказать в гарантийном ремонте, если докажет связь с чип-тюнингом. Однако мы всегда сохраняем оригинальную прошивку и можем вернуть ее перед визитом к дилеру. Большинство СТО не проверяют прошивку при плановом ТО.',
      fact: 'Мы можем вернуть стоковую прошивку за 30 минут бесплатно в любой момент.'
    },
    {
      icon: 'Zap',
      myth: 'Можно увеличить мощность на 100-200 л.с. программно',
      reality: 'Нет, это физически невозможно без замены железа. Реальный прирост Stage 1 (без доработок) — это 15-30% для атмосферных моторов и 20-40% для турбированных. Кто обещает +100 л.с. на программе — обманывает. Для таких цифр нужны новая турбина, форсунки, интеркулер.',
      fact: 'Турбодизель 2.0 150 л.с. → Stage 1 → 185-195 л.с. — это реальность. 150 → 250 л.с. — это только со сменой турбины и железа.'
    },
    {
      icon: 'Wrench',
      myth: 'Это можно сделать через OBD-шнурок дома',
      reality: 'Теоретически да, но на практике это опасно. Готовые прошивки из интернета не учитывают износ вашего двигателя, качество топлива в регионе, пробег. Мы калибруем каждую прошивку индивидуально, проверяем датчики, делаем диагностику перед заливкой. Плюс для многих авто нужно снимать блок и паять.',
      fact: 'У нас было 15 случаев за год, когда к нам приезжали после "гаражной" прошивки восстанавливать ЭБУ. Стоимость восстановления — от 10 000 ₽.'
    },
    {
      icon: 'XCircle',
      myth: 'Удаление катализатора и сажевого фильтра вредит экологии',
      reality: 'Да, это правда. Удаление экологических систем увеличивает выбросы вредных веществ. Мы делаем это только по запросу владельца, когда системы уже неисправны и их ремонт экономически нецелесообразен (новый катализатор — от 80 000 ₽). При этом мы предупреждаем о последствиях и рекомендуем сохранять исправные системы.',
      fact: 'Мы не удаляем исправные экологические системы на автомобилях моложе 5 лет.'
    },
    {
      icon: 'Clock',
      myth: 'Чип-тюнинг — это навсегда, откатиться нельзя',
      reality: 'Полная ерунда. Мы всегда сохраняем оригинальный файл прошивки перед работой. Вернуть заводскую программу можно в любой момент за 30-40 минут. Это как переустановка Windows — можно сколько угодно раз. Никаких необратимых изменений в железе не происходит.',
      fact: 'Около 3% клиентов возвращаются к стоку в первые 2 недели — мы делаем это бесплатно по гарантии.'
    },
    {
      icon: 'TrendingUp',
      myth: 'Прибавка мощности будет чувствоваться только на высоких оборотах',
      reality: 'Наоборот! Главное преимущество чип-тюнинга — это увеличение крутящего момента на низких и средних оборотах. Автомобиль становится "эластичнее" — легче разгоняется с 60 до 100 км/ч на 5-й передаче без переключения вниз. Разница ощущается в городе при обгонах и на трассе.',
      fact: 'Замеры на динамометре показывают прирост крутящего момента +60-80 Нм уже с 1500 об/мин на дизелях.'
    },
    {
      icon: 'DollarSign',
      myth: 'Дешевый чип-тюнинг за 3000 ₽ — это нормально',
      reality: 'Нет. Качественная работа не может стоить дешево. В эту цену входят: лицензионное оборудование (K-TAG за 300 000 ₽), покупка оригинальных файлов у европейских тюнеров, время на диагностику и калибровку, гарантия, ответственность. Чип-тюнинг за 3000 ₽ — это либо "гаражный" мастер с Али-программатором, либо файл из интернета без проверки.',
      fact: 'Средняя рыночная стоимость Stage 1 для легкового авто — 7 000-15 000 ₽. Это адекватная цена за 3 часа работы и гарантию.'
    },
    {
      icon: 'Gauge',
      myth: 'После чип-тюнинга нужно лить только 98-й бензин',
      reality: 'Зависит от программы. Стандартный Stage 1 рассчитан на 95-й бензин — такой же, как и заводская прошивка. Stage 2 и агрессивные настройки могут требовать 98-го для предотвращения детонации. Мы всегда предупреждаем заранее, под какое топливо настраиваем. Для дизелей октановое число вообще не важно.',
      fact: 'Только 15% наших клиентов (Stage 2+) требуют 98-й бензин. Остальные 85% ездят на 95-м.'
    },
    {
      icon: 'Activity',
      myth: 'Коробка передач не выдержит увеличенной мощности',
      reality: 'Частично правда для старых АКПП. Современные коробки DSG, Aisin, ZF рассчитаны с запасом и спокойно держат +30% момента. Проблемы бывают у старых "автоматов" 90-х годов и вариаторов с пробегом 200+ тыс. км. Мы предупреждаем о рисках заранее, если видим изношенную коробку',
      fact: 'За 7 лет было 2 случая поломки АКПП после тюнинга из 1300+ авто. Обе коробки были с пробегом 250+ тыс. км и изношены до тюнинга.'
    },
    {
      icon: 'AlertTriangle',
      myth: 'Чип-тюнинг аннулирует страховку КАСКО',
      reality: 'Нет, это миф. Страховая компания не проверяет прошивку ЭБУ при оформлении полиса или выплате. Чип-тюнинг не меняет конструкцию автомобиля юридически. Проблемы могут быть только если вы установили нештатную турбину или изменили объем двигателя — это уже переоборудование, требующее регистрации в ГИБДД.',
      fact: 'Ни один из наших клиентов не получал отказ по КАСКО из-за чип-тюнинга.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Мифы о чип-тюнинге — ADD Tuning Тольятти | Правда и заблуждения</title>
        <meta name="description" content="Развенчиваем популярные мифы о чип-тюнинге: убивает ли двигатель, расход топлива, гарантия. Правда от профессионала с 7-летним опытом." />
        <meta property="og:title" content="Мифы о чип-тюнинге — ADD Tuning Тольятти" />
        <meta property="og:description" content="Правда и заблуждения о чип-тюнинге от мастера с опытом 7+ лет." />
        <meta property="og:url" content="https://add-tuning.ru/myths" />
        <link rel="canonical" href="https://add-tuning.ru/myths" />
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
                "name": "Мифы",
                "item": "https://add-tuning.ru/myths"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-16 animate-fade-in">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Icon name="Lightbulb" size={32} className="text-primary sm:w-10 sm:h-10" />
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Мифы о чип-тюнинге</h1>
            <p className="text-base sm:text-xl text-muted-foreground px-4">
              Разбираем популярные заблуждения и рассказываем, как всё на самом деле. 
              Честные ответы без маркетинга — только факты из 7 лет практики.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
            {myths.map((item, index) => (
              <Card 
                key={index} 
                className="group hover:border-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-destructive/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                      <Icon name={item.icon as any} size={20} className="text-destructive sm:w-7 sm:h-7" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-3 sm:mb-4">
                        <span className="inline-block text-xs font-semibold text-destructive bg-destructive/10 px-2 sm:px-3 py-1 rounded-full mb-2 sm:mb-3">
                          МИФ
                        </span>
                        <h3 className="text-base sm:text-xl md:text-2xl font-bold text-destructive mb-3 sm:mb-4">
                          {item.myth}
                        </h3>
                      </div>
                      
                      <div className="mb-3 sm:mb-4">
                        <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 sm:px-3 py-1 rounded-full mb-2 sm:mb-3">
                          РЕАЛЬНОСТЬ
                        </span>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                          {item.reality}
                        </p>
                      </div>

                      <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-3 sm:p-4">
                        <div className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0 sm:w-5 sm:h-5" />
                          <p className="text-xs sm:text-sm font-medium">
                            {item.fact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-10 sm:mt-16">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
              <CardContent className="p-6 sm:p-8 text-center">
                <Icon name="MessageSquare" size={40} className="text-primary mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Остались вопросы?</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
                  Напишите в WhatsApp — я готов честно ответить на любые вопросы о чип-тюнинге
                </p>
                <a
                  href="https://wa.me/79372134547?text=Здравствуйте!%20У%20меня%20вопрос%20о%20чип-тюнинге"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-lg"
                >
                  <Icon name="MessageCircle" size={24} className="mr-2" />
                  Написать в WhatsApp
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBookingButton />
    </div>
  );
};

export default Myths;