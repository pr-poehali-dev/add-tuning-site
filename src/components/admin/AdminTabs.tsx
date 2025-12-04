import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { ServiceItem, Review, PortfolioItem, FAQItem, BlogPost, ContactInfo, SiteSettings } from './AdminTypes';

interface AdminTabsProps {
  services: ServiceItem[];
  newService: ServiceItem;
  setNewService: (value: ServiceItem) => void;
  addService: () => void;
  deleteService: (index: number) => void;
  
  reviews: Review[];
  newReview: Review;
  setNewReview: (value: Review) => void;
  addReview: () => void;
  deleteReview: (index: number) => void;
  
  portfolio: PortfolioItem[];
  newPortfolio: PortfolioItem;
  setNewPortfolio: (value: PortfolioItem) => void;
  addPortfolio: () => void;
  deletePortfolio: (index: number) => void;
  
  faqItems: FAQItem[];
  newFAQ: FAQItem;
  setNewFAQ: (value: FAQItem) => void;
  addFAQ: () => void;
  deleteFAQ: (index: number) => void;
  
  blogPosts: BlogPost[];
  newBlogPost: BlogPost;
  setNewBlogPost: (value: BlogPost) => void;
  addBlogPost: () => void;
  deleteBlogPost: (index: number) => void;
  
  contactInfo: ContactInfo;
  setContactInfo: (value: ContactInfo) => void;
  saveContacts: () => void;
  
  siteSettings: SiteSettings;
  setSiteSettings: (value: SiteSettings) => void;
  saveSettings: () => void;
}

const AdminTabs = ({
  services,
  newService,
  setNewService,
  addService,
  deleteService,
  reviews,
  newReview,
  setNewReview,
  addReview,
  deleteReview,
  portfolio,
  newPortfolio,
  setNewPortfolio,
  addPortfolio,
  deletePortfolio,
  faqItems,
  newFAQ,
  setNewFAQ,
  addFAQ,
  deleteFAQ,
  blogPosts,
  newBlogPost,
  setNewBlogPost,
  addBlogPost,
  deleteBlogPost,
  contactInfo,
  setContactInfo,
  saveContacts,
  siteSettings,
  setSiteSettings,
  saveSettings,
}: AdminTabsProps) => {
  return (
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
  );
};

export default AdminTabs;
