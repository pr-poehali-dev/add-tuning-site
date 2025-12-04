import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import AdminLogin from '@/components/admin/AdminLogin';
import AdminTabs from '@/components/admin/AdminTabs';
import type {
  ServiceItem,
  Review,
  PortfolioItem,
  FAQItem,
  BlogPost,
  ContactInfo,
  SiteSettings,
} from '@/components/admin/AdminTypes';

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

  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    phone: '+79372134547',
    telegram: 'Add_Tuning',
    vk: 'https://vk.com/addtuning',
    whatsapp: '79372134547',
    email: 'serereme@yandex.ru',
    address: 'проспект Степана Разина, д. 50, Тольятти',
    workHours: 'Пн-Вс: 09:00 - 20:00'
  });

  const [siteSettings, setSiteSettings] = useState<SiteSettings>({
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
    } else {
      loadDefaultData();
    }
  }, []);

  const loadDefaultData = async () => {
    const priceServices: ServiceItem[] = [
      { name: 'Stage 1 (бензин)', minPrice: 7000, maxPrice: 20000, category: 'Чип-тюнинг' },
      { name: 'Stage 1 (дизель)', minPrice: 7000, maxPrice: 30000, category: 'Чип-тюнинг' },
      { name: 'Stage 2 (с доработками)', minPrice: 35000, maxPrice: 60000, category: 'Чип-тюнинг' },
      { name: 'Эко-тюнинг', minPrice: 7000, maxPrice: 15000, category: 'Чип-тюнинг' },
      { name: 'Прошивка DSG', minPrice: 7000, maxPrice: 25000, category: 'Коробки передач' },
      { name: 'Прошивка АКПП', minPrice: 15000, maxPrice: 22000, category: 'Коробки передач' },
      { name: 'Компьютерная диагностика', minPrice: 2000, maxPrice: 2000, category: 'Диагностика' },
      { name: 'Прописка кодов форсунок', minPrice: 700, maxPrice: 1500, category: 'Диагностика' },
    ];

    const portfolioData: PortfolioItem[] = [
      { car: 'BMW 320d F30', year: '2018', stage: 'Stage 1', powerBefore: '190', powerAfter: '245', torqueBefore: '400', torqueAfter: '500', image: 'https://cdn.poehali.dev/files/8c1ea7ab-c671-424f-92a5-4d94593b56bd.png' },
      { car: 'Audi A4 2.0 TFSI', year: '2019', stage: 'Stage 2', powerBefore: '252', powerAfter: '340', torqueBefore: '370', torqueAfter: '480', image: 'https://cdn.poehali.dev/files/0e7c2531-1a2f-495f-9e1f-ca06c1226ef9.png' },
      { car: 'Volkswagen Golf GTI', year: '2020', stage: 'Stage 1', powerBefore: '245', powerAfter: '310', torqueBefore: '370', torqueAfter: '450', image: 'https://cdn.poehali.dev/files/43696436-5287-424d-83c7-59937a0b8762.png' },
      { car: 'Mercedes C220d W205', year: '2017', stage: 'Stage 1', powerBefore: '194', powerAfter: '250', torqueBefore: '400', torqueAfter: '520', image: 'https://cdn.poehali.dev/files/7b082b82-7c29-4d7e-86a8-8a10ad560dba.png' },
      { car: 'Mercedes C200 CDI', year: '2006', stage: 'Stage 1', powerBefore: '136', powerAfter: '180', torqueBefore: '300', torqueAfter: '380', image: 'https://cdn.poehali.dev/files/e6a030a8-0741-4e43-951f-ee726e6be7a9.png' },
      { car: 'Hyundai Solaris', year: '2020', stage: 'Stage 1', powerBefore: '123', powerAfter: '145', torqueBefore: '151', torqueAfter: '180', image: 'https://cdn.poehali.dev/files/f1b1e923-4080-40db-a491-21706b27e9b4.png' },
    ];

    if (!localStorage.getItem('admin_services')) {
      setServices(priceServices);
    }

    if (!localStorage.getItem('admin_portfolio')) {
      setPortfolio(portfolioData);
    }

    try {
      const blogModule = await import('../data/blogPosts');
      const blogData = Object.values(blogModule.blogPostsData).map(post => ({
        id: post.id,
        title: post.title,
        date: post.date,
        readTime: post.readTime,
        category: post.category,
        image: post.image,
        excerpt: post.content.intro,
        content: post.content.intro + '\n\n' + post.content.sections.map(s => s.title + '\n' + s.content + (s.list ? '\n' + s.list.join('\n') : '')).join('\n\n') + '\n\n' + post.content.conclusion
      }));
      
      if (!localStorage.getItem('admin_blog')) {
        setBlogPosts(blogData);
      }
    } catch (error) {
      console.error('Failed to load blog data:', error);
    }
  };

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
    if (savedServices) {
      setServices(JSON.parse(savedServices));
    } else {
      loadDefaultData();
    }

    const savedReviews = localStorage.getItem('admin_reviews');
    if (savedReviews) setReviews(JSON.parse(savedReviews));

    const savedPortfolio = localStorage.getItem('admin_portfolio');
    if (savedPortfolio) {
      setPortfolio(JSON.parse(savedPortfolio));
    } else {
      loadDefaultData();
    }

    const savedFAQ = localStorage.getItem('admin_faq');
    if (savedFAQ) setFaqItems(JSON.parse(savedFAQ));

    const savedBlog = localStorage.getItem('admin_blog');
    if (savedBlog) {
      setBlogPosts(JSON.parse(savedBlog));
    } else {
      loadDefaultData();
    }

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
    return <AdminLogin password={password} setPassword={setPassword} handleLogin={handleLogin} />;
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

          <AdminTabs
            services={services}
            newService={newService}
            setNewService={setNewService}
            addService={addService}
            deleteService={deleteService}
            reviews={reviews}
            newReview={newReview}
            setNewReview={setNewReview}
            addReview={addReview}
            deleteReview={deleteReview}
            portfolio={portfolio}
            newPortfolio={newPortfolio}
            setNewPortfolio={setNewPortfolio}
            addPortfolio={addPortfolio}
            deletePortfolio={deletePortfolio}
            faqItems={faqItems}
            newFAQ={newFAQ}
            setNewFAQ={setNewFAQ}
            addFAQ={addFAQ}
            deleteFAQ={deleteFAQ}
            blogPosts={blogPosts}
            newBlogPost={newBlogPost}
            setNewBlogPost={setNewBlogPost}
            addBlogPost={addBlogPost}
            deleteBlogPost={deleteBlogPost}
            contactInfo={contactInfo}
            setContactInfo={setContactInfo}
            saveContacts={saveContacts}
            siteSettings={siteSettings}
            setSiteSettings={setSiteSettings}
            saveSettings={saveSettings}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;