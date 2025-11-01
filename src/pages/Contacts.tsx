import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', car: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (937) 213-45-47',
      link: 'tel:+79372134547'
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'serereme@yandex.ru',
      link: 'mailto:serereme@yandex.ru'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'г. Москва, ул. Автомобильная, д. 1',
      link: 'https://yandex.ru/maps'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      content: 'Пн-Сб: 9:00 - 20:00, Вс: 10:00 - 18:00',
      link: null
    },
  ];

  const socialLinks = [
    { icon: 'Instagram', name: 'Instagram', link: '#' },
    { icon: 'Youtube', name: 'YouTube', link: '#' },
    { icon: 'MessageCircle', name: 'Telegram', link: '#' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами любым удобным способом для консультации или записи на чип-тюнинг
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Наши контакты</h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={item.icon as any} size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          {item.link ? (
                            <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground text-sm">{item.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Icon name="Share2" size={20} className="text-primary mr-2" />
                    Мы в социальных сетях
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                      >
                        <Icon name={social.icon as any} size={24} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Info" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Как нас найти?</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Мы находимся в 5 минутах от метро Автозаводская. Есть удобная парковка для клиентов.
                      </p>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="https://yandex.ru/maps" target="_blank" rel="noopener noreferrer">
                          <Icon name="Navigation" size={16} className="mr-2" />
                          Построить маршрут
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Запись на тюнинг</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (937) 213-45-47"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Марка и модель автомобиля</label>
                    <Input
                      placeholder="BMW 320d F30"
                      value={formData.car}
                      onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Комментарий</label>
                    <Textarea
                      placeholder="Интересует Stage 1 тюнинг..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card animate-fade-in" style={{ animationDelay: '400ms' }}>
            <CardContent className="p-0">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A64e8112a4f7d0e3b8f6e8f2c8b8b8b8b&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full"
                  title="Карта расположения"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;