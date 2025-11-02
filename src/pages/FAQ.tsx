import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQ = () => {
  const faqCategories = [
    {
      category: 'Общие вопросы',
      icon: 'HelpCircle',
      questions: [
        {
          q: 'Что такое чип-тюнинг?',
          a: 'Чип-тюнинг - это оптимизация программного обеспечения электронного блока управления (ЭБУ) двигателя. Мы изменяем параметры работы двигателя для увеличения мощности, крутящего момента и улучшения других характеристик.'
        },
        {
          q: 'Безопасен ли чип-тюнинг для моего автомобиля?',
          a: 'При профессиональном подходе чип-тюнинг абсолютно безопасен. Мы работаем в пределах допустимых нагрузок на двигатель и коробку передач. Все изменения проходят тщательное тестирование.'
        },
        {
          q: 'Сколько времени занимает процедура?',
          a: 'В среднем процедура занимает 2-3 часа. Это включает диагностику, считывание оригинальной прошивки, внесение изменений, загрузку новой прошивки и тестирование.'
        },
      ]
    },
    {
      category: 'Технические вопросы',
      icon: 'Settings',
      questions: [
        {
          q: 'Какой прирост мощности я получу?',
          a: 'Прирост зависит от марки и модели автомобиля. Stage 1 дает 20-30% прироста мощности, Stage 2 - до 50%. Точные цифры мы озвучим после диагностики вашего автомобиля.'
        },
        {
          q: 'Увеличится ли расход топлива?',
          a: 'При спокойной езде расход остается на прежнем уровне или даже снижается. Расход может увеличиться только при активном использовании дополнительной мощности.'
        },
        {
          q: 'Можно ли вернуть заводскую прошивку?',
          a: 'Да, мы сохраняем оригинальную прошивку и можем вернуть её в любой момент. Эта услуга бесплатна для наших клиентов.'
        },
      ]
    },
    {
      category: 'Гарантия и сервис',
      icon: 'Shield',
      questions: [
        {
          q: 'Какая гарантия на ваши услуги?',
          a: 'Мы предоставляем гарантию от 1 года до пожизненной в зависимости от выбранного пакета услуг. Гарантия покрывает все проблемы, связанные с чип-тюнингом.'
        },
        {
          q: 'Что делать, если после тюнинга загорелся Check Engine?',
          a: 'Немедленно свяжитесь с нами. Мы проведем диагностику и устраним проблему бесплатно в рамках гарантии. У нас круглосуточная техподдержка.'
        },
        {
          q: 'Влияет ли чип-тюнинг на заводскую гарантию?',
          a: 'Да, официальная дилерская гарантия может быть аннулирована. Однако мы предоставляем собственную гарантию на все виды работ.'
        },
      ]
    },
    {
      category: 'Стоимость и оплата',
      icon: 'CreditCard',
      questions: [
        {
          q: 'Сколько стоит чип-тюнинг?',
          a: 'Стоимость зависит от марки автомобиля и типа тюнинга. Stage 1 от 15 000₽, Stage 2 от 35 000₽. Точную цену мы назовем после диагностики.'
        },
        {
          q: 'Какие формы оплаты вы принимаете?',
          a: 'Мы принимаем наличные, банковские карты, безналичный расчет для юридических лиц. Возможна рассрочка платежа.'
        },
        {
          q: 'Есть ли скидки на повторное обращение?',
          a: 'Да, для постоянных клиентов действует система скидок. При заказе нескольких услуг одновременно также предоставляются скидки.'
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Часто задаваемые вопросы</h1>
            <p className="text-xl text-muted-foreground">
              Ответы на популярные вопросы о чип-тюнинге и наших услугах
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, index) => (
              <Card key={index} className="p-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={category.icon as any} size={24} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${index}-${idx}`}>
                      <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-card rounded-2xl p-8 max-w-3xl mx-auto text-center">
            <Icon name="MessageCircleQuestion" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Не нашли ответ на свой вопрос?</h3>
            <p className="text-muted-foreground mb-6">
              Свяжитесь с нами любым удобным способом, и мы с радостью ответим на все ваши вопросы
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => window.open('https://wa.me/79372134547?text=Здравствуйте!%20У%20меня%20есть%20вопрос%20по%20чип-тюнингу', '_blank')}
              >
                <Icon name="MessageCircle" size={20} />
                Консультация в WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2"
                onClick={() => window.open('https://t.me/79372134547', '_blank')}
              >
                <Icon name="Send" size={20} />
                Консультация в Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;