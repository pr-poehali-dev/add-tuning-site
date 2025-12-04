import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import type {
  ServiceItem,
  Review,
  PortfolioItem,
  FAQItem,
  BlogPost,
  ContactInfo,
  SiteSettings,
} from '@/components/admin/AdminTypes';

export const useAdminData = (isAuthenticated: boolean) => {
  const { toast } = useToast();
  
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

    const reviewsData: Review[] = [
      { name: 'Алексей Петров', car: 'BMW 320d F30', rating: 5, date: '28.10.2024', text: 'Делал Stage 1 на дизеле. Прибавка мощности реально ощущается, особенно на обгонах. Расход остался прежним. Мастер работает быстро и профессионально, все показал на графиках. Через месяц езды никаких проблем.' },
      { name: 'Максим Волков', car: 'Audi A4 2.0 TDI', rating: 5, date: '21.10.2024', text: 'Удалили DPF и EGR, машина ожила! Пропали провалы при разгоне, тяга стала ровнее. Работу сделали за день, все аккуратно. Проехал уже 2000 км — полёт нормальный. Спасибо!' },
      { name: 'Андрей Соколов', car: 'VW Golf GTI Mk7', rating: 5, date: '14.10.2024', text: 'Прошили GTI на Stage 1, плюс настроили DSG. Машина стала совсем другой! Разгон быстрее, коробка переключается четче. Мастер знает что делает, показывал логи до и после. Однозначно рекомендую.' },
      { name: 'Дмитрий Иванов', car: 'Mercedes C220d W205', rating: 5, date: '07.10.2024', text: 'Обратился с проблемой — после прошивки у другого "специалиста" машина не заводилась. Восстановили ЭБУ, вернули заводскую прошивку. Потом сделали нормальный Stage 1. Теперь всё работает как часы.' },
      { name: 'Сергей Морозов', car: 'Skoda Octavia 1.8 TSI', rating: 5, date: '30.09.2024', text: 'Чип-тюнинг + отключение иммобилайзера (менял ЭБУ после замыкания). Работу выполнили качественно и быстро. Мощность прибавилась хорошо, машина стала веселее. Цена адекватная.' },
      { name: 'Роман Козлов', car: 'Ford Mondeo 2.0 TDCi', rating: 5, date: '22.09.2024', text: 'Делал удаление сажевого фильтра и AdBlue. Больше не горят ошибки, мотор работает ровно. Машина стала динамичнее и расход немного упал. Мастер объяснил все нюансы. Доволен на 100%!' },
    ];

    if (!localStorage.getItem('admin_services')) {
      setServices(priceServices);
    }

    if (!localStorage.getItem('admin_portfolio')) {
      setPortfolio(portfolioData);
    }

    if (!localStorage.getItem('admin_reviews')) {
      setReviews(reviewsData);
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

  const loadAllData = () => {
    const savedServices = localStorage.getItem('admin_services');
    if (savedServices) {
      setServices(JSON.parse(savedServices));
    } else {
      loadDefaultData();
    }

    const savedReviews = localStorage.getItem('admin_reviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    } else {
      loadDefaultData();
    }

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

  useEffect(() => {
    if (isAuthenticated) {
      loadAllData();
    } else {
      loadDefaultData();
    }
  }, [isAuthenticated]);

  const showSuccessToast = () => {
    toast({
      title: 'Сохранено',
      description: 'Изменения успешно применены',
    });
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

  const addService = () => {
    if (!newService.name) return;
    saveServices([...services, newService]);
    setNewService({ name: '', minPrice: 0, maxPrice: 0, category: 'Диагностика' });
  };

  const deleteService = (index: number) => {
    saveServices(services.filter((_, i) => i !== index));
  };

  const updateService = (index: number, updatedService: ServiceItem) => {
    const newServices = [...services];
    newServices[index] = updatedService;
    saveServices(newServices);
  };

  const addReview = () => {
    if (!newReview.name || !newReview.text) return;
    saveReviews([...reviews, newReview]);
    setNewReview({ name: '', car: '', rating: 5, text: '', date: new Date().toISOString().split('T')[0] });
  };

  const deleteReview = (index: number) => {
    saveReviews(reviews.filter((_, i) => i !== index));
  };

  const updateReview = (index: number, updatedReview: Review) => {
    const newReviews = [...reviews];
    newReviews[index] = updatedReview;
    saveReviews(newReviews);
  };

  const addPortfolio = () => {
    if (!newPortfolio.car) return;
    savePortfolio([...portfolio, newPortfolio]);
    setNewPortfolio({ car: '', year: '', stage: 'Stage 1', powerBefore: '', powerAfter: '', torqueBefore: '', torqueAfter: '', image: '' });
  };

  const deletePortfolio = (index: number) => {
    savePortfolio(portfolio.filter((_, i) => i !== index));
  };

  const updatePortfolio = (index: number, updatedItem: PortfolioItem) => {
    const newPortfolio = [...portfolio];
    newPortfolio[index] = updatedItem;
    savePortfolio(newPortfolio);
  };

  const addFAQ = () => {
    if (!newFAQ.question || !newFAQ.answer) return;
    saveFAQ([...faqItems, newFAQ]);
    setNewFAQ({ question: '', answer: '' });
  };

  const deleteFAQ = (index: number) => {
    saveFAQ(faqItems.filter((_, i) => i !== index));
  };

  const updateFAQ = (index: number, updatedItem: FAQItem) => {
    const newFAQ = [...faqItems];
    newFAQ[index] = updatedItem;
    saveFAQ(newFAQ);
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

  const updateBlogPost = (index: number, updatedPost: BlogPost) => {
    const newPosts = [...blogPosts];
    newPosts[index] = updatedPost;
    saveBlog(newPosts);
  };

  return {
    services,
    reviews,
    portfolio,
    faqItems,
    blogPosts,
    contactInfo,
    siteSettings,
    newService,
    newReview,
    newPortfolio,
    newFAQ,
    newBlogPost,
    setNewService,
    setNewReview,
    setNewPortfolio,
    setNewFAQ,
    setNewBlogPost,
    setContactInfo,
    setSiteSettings,
    addService,
    deleteService,
    updateService,
    addReview,
    deleteReview,
    updateReview,
    addPortfolio,
    deletePortfolio,
    updatePortfolio,
    addFAQ,
    deleteFAQ,
    updateFAQ,
    addBlogPost,
    deleteBlogPost,
    updateBlogPost,
    saveContacts,
    saveSettings,
    saveServices,
    saveReviews,
    savePortfolio,
    saveFAQ,
    saveBlog,
  };
};