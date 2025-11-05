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

  const [diagnosticForm, setDiagnosticForm] = useState({
    brand: '',
    model: '',
    year: '',
    engineVolume: '',
    message: ''
  });

  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const validateForm = (data: typeof formData) => {
    const nameRegex = /^[а-яёА-ЯЁa-zA-Z\s-]+$/;
    if (!nameRegex.test(data.name)) {
      toast({
        title: "Ошибка",
        description: "Имя должно содержать только буквы",
        variant: "destructive",
      });
      return false;
    }

    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phoneRegex.test(data.phone) || data.phone.replace(/\D/g, '').length < 10) {
      toast({
        title: "Ошибка",
        description: "Введите корректный номер телефона",
        variant: "destructive",
      });
      return false;
    }

    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      toast({
        title: "Подождите",
        description: "Вы отправляете заявки слишком часто. Подождите 10 секунд.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm(formData)) {
      return;
    }

    setLastSubmitTime(Date.now());
    
    try {
      const response = await fetch('https://functions.poehali.dev/6400c45a-8e89-4809-b5a1-19d27ee8d1c6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время",
        });
        setFormData({ name: '', phone: '', car: '', message: '' });
      } else {
        toast({
          title: "Ошибка",
          description: "Не удалось отправить заявку. Попробуйте позже.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    }
  };

  const handleDiagnosticSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://functions.poehali.dev/01f2cb9d-2f7b-43df-ad0d-d7fea2093342', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(diagnosticForm),
      });

      if (response.ok) {
        toast({
          title: "Заявка на диагностику отправлена!",
          description: "Мы свяжемся с вами для уточнения времени",
        });
        setDiagnosticForm({ brand: '', model: '', year: '', engineVolume: '', message: '' });
      } else {
        toast({
          title: "Ошибка",
          description: "Не удалось отправить заявку. Попробуйте позже.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    }
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
      content: 'г. Тольятти, проспект Степана Разина, д. 50',
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

              <Card className="bg-primary/5 border-primary/20 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Info" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Как нас найти?</h3>
                      <p className="text-sm text-muted-foreground mb-3">Мы находимся на проспекте Степана Разина, дом 50 в Тольятти. Есть удобная парковка для клиентов.</p>
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

              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="Calendar" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Записаться на диагностику</h3>
                      <p className="text-sm text-muted-foreground">Стоимость: 2000 ₽</p>
                    </div>
                  </div>
                  <form onSubmit={handleDiagnosticSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Марка</label>
                        <Input
                          placeholder="BMW"
                          value={diagnosticForm.brand}
                          onChange={(e) => setDiagnosticForm({ ...diagnosticForm, brand: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Модель</label>
                        <Input
                          placeholder="320d"
                          value={diagnosticForm.model}
                          onChange={(e) => setDiagnosticForm({ ...diagnosticForm, model: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Год выпуска</label>
                        <Input
                          placeholder="2018"
                          value={diagnosticForm.year}
                          onChange={(e) => setDiagnosticForm({ ...diagnosticForm, year: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Объем двигателя</label>
                        <Input
                          placeholder="2.0"
                          value={diagnosticForm.engineVolume}
                          onChange={(e) => setDiagnosticForm({ ...diagnosticForm, engineVolume: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Что необходимо</label>
                      <Textarea
                        placeholder="Опишите проблему или что нужно проверить..."
                        value={diagnosticForm.message}
                        onChange={(e) => setDiagnosticForm({ ...diagnosticForm, message: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
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
                  src="https://yandex.ru/map-widget/v1/?z=16&ol=biz&oid=1234567890&ll=49.348913,53.507836"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full"
                  title="Карта: г. Тольятти, проспект Степана Разина, д. 50"
                  allowFullScreen
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