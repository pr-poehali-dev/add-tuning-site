import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const Blog = () => {
  const posts: BlogPost[] = [
    {
      id: 'kak-vybrat-stage-tyuninga',
      title: 'Как выбрать Stage тюнинга для вашего автомобиля',
      excerpt: 'Stage 1, 2 или 3? Разбираем отличия и помогаем понять, какой уровень тюнинга подходит именно вам. Что дает каждый этап и сколько это стоит.',
      date: '2025-11-01',
      readTime: '5 мин',
      category: 'Чип-тюнинг',
      image: 'https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/9903e850-e0e4-45a1-b0ee-b6a98625291b.jpg'
    },
    {
      id: 'priznaki-zabitogo-dpf',
      title: 'Признаки забитого сажевого фильтра DPF',
      excerpt: 'Потеря мощности, черный дым, ошибка Check Engine — 7 симптомов проблем с DPF. Когда нужна чистка, а когда только программное отключение.',
      date: '2025-10-28',
      readTime: '4 мин',
      category: 'Диагностика',
      image: 'https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/973cc919-676e-441e-a3c0-64aee086e77d.jpg'
    },
    {
      id: 'top-5-avto-dlya-tyuninga',
      title: 'Топ-5 автомобилей для чип-тюнинга в 2025 году',
      excerpt: 'Какие машины дают максимальный прирост мощности от прошивки? BMW 320d, Audi A4 2.0 TDI, VW Golf GTI и другие лидеры с цифрами и примерами.',
      date: '2025-10-25',
      readTime: '6 мин',
      category: 'Чип-тюнинг',
      image: 'https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/d9004008-5e0f-45a8-9254-01cafe1ac8ca.jpg'
    },
    {
      id: 'chip-tyuning-dizel-vs-benzin',
      title: 'Чип-тюнинг дизеля vs бензина: в чём разница',
      excerpt: 'Почему дизели дают +40% мощности, а бензиновые моторы только +20%? Разбираем физику процесса и особенности настройки турбодизелей.',
      date: '2025-10-20',
      readTime: '5 мин',
      category: 'Чип-тюнинг',
      image: 'https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/7832b055-adb6-4e47-801b-9933aa305b51.jpg'
    },
    {
      id: 'adblue-udalenie-ili-remont',
      title: 'AdBlue: удаление или ремонт системы?',
      excerpt: 'Горит лампа AdBlue и до блокировки двигателя 500 км? Разбираем варианты решения: прошивка за 15-35 тыс. или ремонт от 80 тыс. рублей.',
      date: '2025-10-15',
      readTime: '4 мин',
      category: 'Программное отключение',
      image: 'https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/55de95e6-714a-4564-9e16-b3d94326ce3f.jpg'
    },
    {
      id: 'kak-proishodit-chip-tyuning',
      title: 'Как происходит чип-тюнинг: пошаговый процесс',
      excerpt: 'От диагностики до замеров на динамометре — полный цикл работы с автомобилем. Показываем, что делает мастер и сколько времени это занимает.',
      date: '2025-10-10',
      readTime: '7 мин',
      category: 'Чип-тюнинг',
      image: 'https://cdn.poehali.dev/projects/4f97b19c-94db-4455-b25f-d94a7a09b94d/files/d7a4c211-fb30-405c-a3fd-2c0ec72c65c3.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="BookOpen" size={40} className="text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Блог о чип-тюнинге</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полезные статьи, гайды и реальные кейсы от мастера с 7-летним опытом
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Card 
                key={post.id}
                className="group hover:border-primary transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('ru-RU', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Читать
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
            <CardContent className="p-8 text-center">
              <Icon name="MessageSquare" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Не нашли ответ на свой вопрос?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Позвоните или напишите в WhatsApp — я подробно расскажу про тюнинг именно вашего автомобиля
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+79372134547"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (937) 213-45-47
                </a>
                <a
                  href="https://wa.me/79372134547?text=Здравствуйте!%20У%20меня%20вопрос%20о%20чип-тюнинге"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-background border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в WhatsApp
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;