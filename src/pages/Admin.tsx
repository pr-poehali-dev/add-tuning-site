import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ServiceItem {
  name: string;
  minPrice: number;
  maxPrice: number;
  category: string;
}

interface Review {
  name: string;
  car: string;
  rating: number;
  text: string;
  date: string;
}

interface PortfolioItem {
  car: string;
  year: string;
  stage: string;
  powerBefore: string;
  powerAfter: string;
  torqueBefore: string;
  torqueAfter: string;
  image: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}

const Admin = () => {
  const { toast } = useToast();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  
  const [newService, setNewService] = useState<ServiceItem>({
    name: '',
    minPrice: 0,
    maxPrice: 0,
    category: 'Диагностика'
  });

  const [newReview, setNewReview] = useState<Review>({
    name: '',
    car: '',
    rating: 5,
    text: '',
    date: new Date().toISOString().split('T')[0]
  });

  const [newPortfolio, setNewPortfolio] = useState<PortfolioItem>({
    car: '',
    year: '',
    stage: 'Stage 1',
    powerBefore: '',
    powerAfter: '',
    torqueBefore: '',
    torqueAfter: '',
    image: ''
  });

  const [newFAQ, setNewFAQ] = useState<FAQItem>({
    question: '',
    answer: ''
  });

  const [newBlogPost, setNewBlogPost] = useState<BlogPost>({
    id: '',
    title: '',
    date: new Date().toISOString().split('T')[0],
    readTime: '5 мин',
    category: 'Чип-тюнинг',
    image: '',
    excerpt: '',
    content: ''
  });

  const [contactInfo, setContactInfo] = useState({
    phone: '+79372134547',
    telegram: 'Add_Tuning',
    vk: 'https://vk.com/addtuning',
    whatsapp: '79372134547',
    email: 'serereme@yandex.ru',
    address: 'проспект Степана Разина, д. 50, Тольятти',
    workHours: 'Пн-Вс: 09:00 - 20:00'
  });

  const [siteSettings, setSiteSettings] = useState({
    siteName: 'ADD Tuning',
    siteDescription: 'Профессиональный чип-тюнинг автомобилей в Тольятти',
    mainTitle: 'Чип-тюнинг автомобилей в Тольятти',
    mainSubtitle: 'Увеличение мощности до 50%',
    experience: '7 лет опыта',
    carsCount: '1300+ прошитых автомобилей',
    warranty: 'Гарантия 1 год'
  });

  useEffect(() => {
    const savedAuth = localStorage.getItem('admin_auth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
      loadAllData();
    }
  }, []);

  const handleLogin = () => {
    if (password === 'addtuning2024') {
      setIsAuthenticated(true);
      localStorage.setItem('admin_auth', 'true');
      loadAllData();
      toast({
        title: 'Успешный вход',
        description: 'Добро пожаловать в админ-панель',
      });
    } else {
      toast({
        title: 'Ошибка',
        description: 'Неверный пароль',
        variant: 'destructive',
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_auth');
    setPassword('');
  };

  const loadAllData = () => {
    const savedServices = localStorage.getItem('admin_services');
    if (savedServices) setServices(JSON.parse(savedServices));

    const savedReviews = localStorage.getItem('admin_reviews');
    if (savedReviews) setReviews(JSON.parse(savedReviews));

    const savedPortfolio = localStorage.getItem('admin_portfolio');
    if (savedPortfolio) setPortfolio(JSON.parse(savedPortfolio));

    const savedFAQ = localStorage.getItem('admin_faq');
    if (savedFAQ) setFaqItems(JSON.parse(savedFAQ));

    const savedBlog = localStorage.getItem('admin_blog');
    if (savedBlog) setBlogPosts(JSON.parse(savedBlog));

    const savedContacts = localStorage.getItem('admin_contacts');
    if (savedContacts) setContactInfo(JSON.parse(savedContacts));

    const savedSettings = localStorage.getItem('admin_settings');
    if (savedSettings) setSiteSettings(JSON.parse(savedSettings));
  };

  const saveServices = (data: ServiceItem[]) => {
    localStorage.setItem('admin_services', JSON.stringify(data));
    setServices(data);
    showSuccessToast();
  };

  const saveReviews = (data: Review[]) => {
    localStorage.setItem('admin_reviews', JSON.stringify(data));
    setReviews(data);
    showSuccessToast();
  };

  const savePortfolio = (data: PortfolioItem[]) => {
    localStorage.setItem('admin_portfolio', JSON.stringify(data));
    setPortfolio(data);
    showSuccessToast();
  };

  const saveFAQ = (data: FAQItem[]) => {
    localStorage.setItem('admin_faq', JSON.stringify(data));
    setFaqItems(data);
    showSuccessToast();
  };

  const saveBlog = (data: BlogPost[]) => {
    localStorage.setItem('admin_blog', JSON.stringify(data));
    setBlogPosts(data);
    showSuccessToast();
  };

  const saveContacts = () => {
    localStorage.setItem('admin_contacts', JSON.stringify(contactInfo));
    showSuccessToast();
  };

  const saveSettings = () => {
    localStorage.setItem('admin_settings', JSON.stringify(siteSettings));
    showSuccessToast();
  };

  const showSuccessToast = () => {
    toast({
      title: 'Сохранено',
      description: 'Изменения успешно применены',
    });
  };

  const addService = () => {
    if (!newService.name) return;
    saveServices([...services, newService]);
    setNewService({ name: '', minPrice: 0, maxPrice: 0, category: 'Диагностика' });
  };

  const deleteService = (index: number) => {
    saveServices(services.filter((_, i) => i !== index));
  };

  const addReview = () => {
    if (!newReview.name || !newReview.text) return;
    saveReviews([...reviews, newReview]);
    setNewReview({ name: '', car: '', rating: 5, text: '', date: new Date().toISOString().split('T')[0] });
  };

  const deleteReview = (index: number) => {
    saveReviews(reviews.filter((_, i) => i !== index));
  };

  const addPortfolio = () => {
    if (!newPortfolio.car) return;
    savePortfolio([...portfolio, newPortfolio]);
    setNewPortfolio({ car: '', year: '', stage: 'Stage 1', powerBefore: '', powerAfter: '', torqueBefore: '', torqueAfter: '', image: '' });
  };

  const deletePortfolio = (index: number) => {
    savePortfolio(portfolio.filter((_, i) => i !== index));
  };

  const addFAQ = () => {
    if (!newFAQ.question || !newFAQ.answer) return;
    saveFAQ([...faqItems, newFAQ]);
    setNewFAQ({ question: '', answer: '' });
  };

  const deleteFAQ = (index: number) => {
    saveFAQ(faqItems.filter((_, i) => i !== index));
  };

  const addBlogPost = () => {
    if (!newBlogPost.title || !newBlogPost.content) return;
    const id = newBlogPost.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    saveBlog([...blogPosts, { ...newBlogPost, id }]);
    setNewBlogPost({ id: '', title: '', date: new Date().toISOString().split('T')[0], readTime: '5 мин', category: 'Чип-тюнинг', image: '', excerpt: '', content: '' });
  };

  const deleteBlogPost = (index: number) => {
    saveBlog(blogPosts.filter((_, i) => i !== index));
  };

  const exportData = () => {
    const data = {
      services,
      reviews,
      portfolio,
      faq: faqItems,
      blog: blogPosts,
      contacts: contactInfo,
      settings: siteSettings,
      exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `add-tuning-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    toast({
      title: 'Экспорт завершен',
      description: 'Файл резервной копии загружен',
    });
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        if (data.services) saveServices(data.services);
        if (data.reviews) saveReviews(data.reviews);
        if (data.portfolio) savePortfolio(data.portfolio);
        if (data.faq) saveFAQ(data.faq);
        if (data.blog) saveBlog(data.blog);
        if (data.contacts) {
          setContactInfo(data.contacts);
          localStorage.setItem('admin_contacts', JSON.stringify(data.contacts));
        }
        if (data.settings) {
          setSiteSettings(data.settings);
          localStorage.setItem('admin_settings', JSON.stringify(data.settings));
        }
        toast({
          title: 'Импорт завершен',
          description: 'Данные успешно загружены',
        });
      } catch {
        toast({
          title: 'Ошибка импорта',
          description: 'Неверный формат файла',
          variant: 'destructive',
        });
      }
    };
    reader.readAsText(file);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
              <Icon name="Lock" size={24} className="text-primary" />
              Админ-панель ADD Tuning
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              <Icon name="LogIn" size={18} className="mr-2" />
              Войти
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold">Админ-панель</h1>
            <div className="flex gap-2 flex-wrap">
              <label htmlFor="import-file">
                <Button variant="outline" size="sm" asChild>
                  <span className="cursor-pointer">
                    <Icon name="Upload" size={16} className="mr-2" />
                    Импорт
                  </span>
                </Button>
              </label>
              <input
                id="import-file"
                type="file"
                accept=".json"
                onChange={importData}
                className="hidden"
              />
              <Button onClick={exportData} variant="outline" size="sm">
                <Icon name="Download" size={16} className="mr-2" />
                Экспорт
              </Button>
              <Button onClick={handleLogout} variant="outline" size="sm">
                <Icon name="LogOut" size={16} className="mr-2" />
                Выйти
              </Button>
            </div>
          </div>

          <Tabs defaultValue="services" className="space-y-6">
            <TabsList className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
              <TabsTrigger value="services">Услуги</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              <TabsTrigger value="portfolio">Портфолио</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="blog">Блог</TabsTrigger>
              <TabsTrigger value="contacts">Контакты</TabsTrigger>
              <TabsTrigger value="settings">Настройки</TabsTrigger>
            </TabsList>

            {/* Услуги */}
            <TabsContent value="services" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Добавить услугу</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Название услуги"
                    value={newService.name}
                    onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      type="number"
                      placeholder="Мин. цена"
                      value={newService.minPrice}
                      onChange={(e) => setNewService({ ...newService, minPrice: Number(e.target.value) })}
                    />
                    <Input
                      type="number"
                      placeholder="Макс. цена"
                      value={newService.maxPrice}
                      onChange={(e) => setNewService({ ...newService, maxPrice: Number(e.target.value) })}
                    />
                  </div>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={newService.category}
                    onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                  >
                    <option>Чип-тюнинг</option>
                    <option>Программное отключение (бензин)</option>
                    <option>Программное отключение (дизель)</option>
                    <option>Коробки передач</option>
                    <option>Диагностика</option>
                  </select>
                  <Button onClick={addService} className="w-full">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Список услуг ({services.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  {services.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">Услуги не добавлены</p>
                  ) : (
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {services.map((service, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                          <div className="flex-1">
                            <p className="font-medium">{service.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {service.category} • {service.minPrice.toLocaleString()} - {service.maxPrice.toLocaleString()} ₽
                            </p>
                          </div>
                          <Button variant="ghost" size="sm" onClick={() => deleteService(index)}>
                            <Icon name="Trash2" size={16} className="text-destructive" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Отзывы */}
            <TabsContent value="reviews" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Добавить отзыв</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Имя"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    />
                    <Input
                      placeholder="Автомобиль"
                      value={newReview.car}
                      onChange={(e) => setNewReview({ ...newReview, car: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      type="number"
                      min="1"
                      max="5"
                      placeholder="Рейтинг (1-5)"
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    />
                    <Input
                      type="date"
                      value={newReview.date}
                      onChange={(e) => setNewReview({ ...newReview, date: e.target.value })}
                    />
                  </div>
                  <Textarea
                    placeholder="Текст отзыва"
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    rows={4}
                  />
                  <Button onClick={addReview} className="w-full">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить отзыв
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Список отзывов ({reviews.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  {reviews.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">Отзывы не добавлены</p>
                  ) : (
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {reviews.map((review, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium">{review.name}</p>
                              <p className="text-sm text-muted-foreground">{review.car}</p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => deleteReview(index)}>
                              <Icon name="Trash2" size={16} className="text-destructive" />
                            </Button>
                          </div>
                          <p className="text-sm mb-2">{review.text}</p>
                          <div className="flex gap-2 text-sm text-muted-foreground">
                            <span>⭐ {review.rating}/5</span>
                            <span>•</span>
                            <span>{review.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Портфолио */}
            <TabsContent value="portfolio" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Добавить работу</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Автомобиль"
                      value={newPortfolio.car}
                      onChange={(e) => setNewPortfolio({ ...newPortfolio, car: e.target.value })}
                    />
                    <Input
                      placeholder="Год"
                      value={newPortfolio.year}
                      onChange={(e) => setNewPortfolio({ ...newPortfolio, year: e.target.value })}
                    />
                  </div>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={newPortfolio.stage}
                    onChange={(e) => setNewPortfolio({ ...newPortfolio, stage: e.target.value })}
                  >
                    <option>Stage 1</option>
                    <option>Stage 2</option>
                    <option>Эко-тюнинг</option>
                  </select>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Мощность до (л.с.)"
                      value={newPortfolio.powerBefore}
                      onChange={(e) => setNewPortfolio({ ...newPortfolio, powerBefore: e.target.value })}
                    />
                    <Input
                      placeholder="Мощность после (л.с.)"
                      value={newPortfolio.powerAfter}
                      onChange={(e) => setNewPortfolio({ ...newPortfolio, powerAfter: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Момент до (Нм)"
                      value={newPortfolio.torqueBefore}
                      onChange={(e) => setNewPortfolio({ ...newPortfolio, torqueBefore: e.target.value })}
                    />
                    <Input
                      placeholder="Момент после (Нм)"
                      value={newPortfolio.torqueAfter}
                      onChange={(e) => setNewPortfolio({ ...newPortfolio, torqueAfter: e.target.value })}
                    />
                  </div>
                  <Input
                    placeholder="URL изображения"
                    value={newPortfolio.image}
                    onChange={(e) => setNewPortfolio({ ...newPortfolio, image: e.target.value })}
                  />
                  <Button onClick={addPortfolio} className="w-full">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить работу
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Портфолио ({portfolio.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  {portfolio.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">Работы не добавлены</p>
                  ) : (
                    <div className="grid sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                      {portfolio.map((item, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium">{item.car}</p>
                              <p className="text-sm text-muted-foreground">{item.year} • {item.stage}</p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => deletePortfolio(index)}>
                              <Icon name="Trash2" size={16} className="text-destructive" />
                            </Button>
                          </div>
                          <div className="text-sm space-y-1">
                            <p>Мощность: {item.powerBefore} → {item.powerAfter} л.с.</p>
                            <p>Момент: {item.torqueBefore} → {item.torqueAfter} Нм</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* FAQ */}
            <TabsContent value="faq" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Добавить вопрос</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Вопрос"
                    value={newFAQ.question}
                    onChange={(e) => setNewFAQ({ ...newFAQ, question: e.target.value })}
                  />
                  <Textarea
                    placeholder="Ответ"
                    value={newFAQ.answer}
                    onChange={(e) => setNewFAQ({ ...newFAQ, answer: e.target.value })}
                    rows={4}
                  />
                  <Button onClick={addFAQ} className="w-full">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить вопрос
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>FAQ ({faqItems.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  {faqItems.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">Вопросы не добавлены</p>
                  ) : (
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {faqItems.map((item, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <p className="font-medium">{item.question}</p>
                            <Button variant="ghost" size="sm" onClick={() => deleteFAQ(index)}>
                              <Icon name="Trash2" size={16} className="text-destructive" />
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Блог */}
            <TabsContent value="blog" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Добавить статью</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Заголовок"
                    value={newBlogPost.title}
                    onChange={(e) => setNewBlogPost({ ...newBlogPost, title: e.target.value })}
                  />
                  <div className="grid grid-cols-3 gap-4">
                    <Input
                      type="date"
                      value={newBlogPost.date}
                      onChange={(e) => setNewBlogPost({ ...newBlogPost, date: e.target.value })}
                    />
                    <Input
                      placeholder="5 мин"
                      value={newBlogPost.readTime}
                      onChange={(e) => setNewBlogPost({ ...newBlogPost, readTime: e.target.value })}
                    />
                    <select
                      className="p-2 border rounded-md"
                      value={newBlogPost.category}
                      onChange={(e) => setNewBlogPost({ ...newBlogPost, category: e.target.value })}
                    >
                      <option>Чип-тюнинг</option>
                      <option>По маркам</option>
                      <option>Советы</option>
                    </select>
                  </div>
                  <Input
                    placeholder="URL изображения"
                    value={newBlogPost.image}
                    onChange={(e) => setNewBlogPost({ ...newBlogPost, image: e.target.value })}
                  />
                  <Textarea
                    placeholder="Краткое описание"
                    value={newBlogPost.excerpt}
                    onChange={(e) => setNewBlogPost({ ...newBlogPost, excerpt: e.target.value })}
                    rows={2}
                  />
                  <Textarea
                    placeholder="Полный текст статьи"
                    value={newBlogPost.content}
                    onChange={(e) => setNewBlogPost({ ...newBlogPost, content: e.target.value })}
                    rows={8}
                  />
                  <Button onClick={addBlogPost} className="w-full">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить статью
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Статьи блога ({blogPosts.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  {blogPosts.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">Статьи не добавлены</p>
                  ) : (
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {blogPosts.map((post, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium">{post.title}</p>
                              <p className="text-sm text-muted-foreground">
                                {post.category} • {post.date} • {post.readTime}
                              </p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => deleteBlogPost(index)}>
                              <Icon name="Trash2" size={16} className="text-destructive" />
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Контакты */}
            <TabsContent value="contacts" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Telegram</label>
                      <Input
                        value={contactInfo.telegram}
                        onChange={(e) => setContactInfo({ ...contactInfo, telegram: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">WhatsApp</label>
                      <Input
                        value={contactInfo.whatsapp}
                        onChange={(e) => setContactInfo({ ...contactInfo, whatsapp: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">VK</label>
                      <Input
                        value={contactInfo.vk}
                        onChange={(e) => setContactInfo({ ...contactInfo, vk: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Адрес</label>
                    <Textarea
                      value={contactInfo.address}
                      onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
                      rows={2}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Часы работы</label>
                    <Input
                      value={contactInfo.workHours}
                      onChange={(e) => setContactInfo({ ...contactInfo, workHours: e.target.value })}
                    />
                  </div>
                  <Button onClick={saveContacts} className="w-full">
                    <Icon name="Save" size={16} className="mr-2" />
                    Сохранить контакты
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Настройки */}
            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Настройки сайта</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Название сайта</label>
                    <Input
                      value={siteSettings.siteName}
                      onChange={(e) => setSiteSettings({ ...siteSettings, siteName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Описание сайта</label>
                    <Textarea
                      value={siteSettings.siteDescription}
                      onChange={(e) => setSiteSettings({ ...siteSettings, siteDescription: e.target.value })}
                      rows={2}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Главный заголовок</label>
                    <Input
                      value={siteSettings.mainTitle}
                      onChange={(e) => setSiteSettings({ ...siteSettings, mainTitle: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Подзаголовок</label>
                    <Input
                      value={siteSettings.mainSubtitle}
                      onChange={(e) => setSiteSettings({ ...siteSettings, mainSubtitle: e.target.value })}
                    />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Опыт</label>
                      <Input
                        value={siteSettings.experience}
                        onChange={(e) => setSiteSettings({ ...siteSettings, experience: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Кол-во авто</label>
                      <Input
                        value={siteSettings.carsCount}
                        onChange={(e) => setSiteSettings({ ...siteSettings, carsCount: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Гарантия</label>
                      <Input
                        value={siteSettings.warranty}
                        onChange={(e) => setSiteSettings({ ...siteSettings, warranty: e.target.value })}
                      />
                    </div>
                  </div>
                  <Button onClick={saveSettings} className="w-full">
                    <Icon name="Save" size={16} className="mr-2" />
                    Сохранить настройки
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Info" size={20} className="text-primary" />
                    Информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p><strong>Управление данными:</strong> Все изменения сохраняются локально в браузере.</p>
                  <p><strong>Экспорт/Импорт:</strong> Регулярно сохраняйте резервные копии через кнопку «Экспорт».</p>
                  <p><strong>Безопасность:</strong> Пароль: addtuning2024</p>
                  <p><strong>Данные:</strong> При очистке кэша браузера все данные будут удалены.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;
